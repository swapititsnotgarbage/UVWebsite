// ==========================================
// === קובץ presence.js (v2 - צף שמאל למעלה) ===
// מערכת נוכחות בזמן אמת (מי וכמה מחוברים) + חיווי הודעות שלא נקראו בצ'אט
// ==========================================

import {
    doc, setDoc, collection, onSnapshot, query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const CHAT_COLLECTION_NAME = 'chats';
const CHAT_TIMESTAMP_FIELD = 'timestamp';
const CHAT_EMAIL_FIELD = 'userEmail';

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;   // נחשב מחובר אם נראה ב-2 הדקות האחרונות
const HEARTBEAT_INTERVAL_MS = 45 * 1000;     // עדכון נוכחות כל 45 שניות
const LAST_READ_KEY = 'uv_chat_last_read';

let heartbeatTimer = null;
let refreshUiTimer = null;
let latestOnlineDocs = [];
let currentUserRef = null;
let isInitialized = false;

// --- הזרקת עיצוב ורכיב צף בפינה השמאלית-עליונה ---
function injectPresenceUI() {
    if (!document.getElementById('presence-styles')) {
        const style = document.createElement('style');
        style.id = 'presence-styles';
        style.innerHTML = `
            .online-floating-widget {
                position: fixed;
                top: 14px;
                left: 14px;
                z-index: 9999;
                background: rgba(255, 255, 255, 0.94);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(46, 204, 113, 0.45);
                border-radius: 14px;
                padding: 8px 14px;
                font-size: 0.88rem;
                box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
                min-width: 175px;
                max-width: 240px;
                direction: rtl;
                transition: all 0.2s ease;
            }
            body.dark-mode .online-floating-widget {
                background: rgba(30, 34, 42, 0.94);
                border-color: rgba(46, 204, 113, 0.4);
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
            }
            .online-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                cursor: pointer;
                font-weight: 700;
                color: var(--ink, #2d3436);
                user-select: none;
            }
            body.dark-mode .online-header {
                color: #f1f2f6;
            }
            .online-header-right {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .live-green-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #2ecc71;
                box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
                animation: uvPulseGreen 2s infinite;
                flex-shrink: 0;
            }
            @keyframes uvPulseGreen {
                0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
                70% { box-shadow: 0 0 0 7px rgba(46, 204, 113, 0); }
                100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
            }
            .online-users-list {
                margin-top: 10px;
                padding-top: 8px;
                border-top: 1px dashed rgba(46, 204, 113, 0.35);
                display: none;
                flex-direction: column;
                gap: 7px;
                max-height: 200px;
                overflow-y: auto;
            }
            .online-user-row {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.84rem;
                color: var(--ink, #2d3436);
            }
            body.dark-mode .online-user-row {
                color: #e0e0e0;
            }
            .online-avatar {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                object-fit: cover;
                background: #2ecc71;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.72rem;
                font-weight: bold;
                flex-shrink: 0;
            }
            .chat-unread-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #2ecc71;
                box-shadow: 0 0 8px rgba(46, 204, 113, 0.9);
                animation: uvPulseGreen 1.6s infinite;
                display: none;
                margin-right: 8px;
                flex-shrink: 0;
            }
            @media (max-width: 600px) {
                .online-floating-widget {
                    top: 10px;
                    left: 10px;
                    padding: 6px 10px;
                    font-size: 0.8rem;
                    min-width: 145px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 1. הזרקת הווידג'ט ישירות ל-body בפינה השמאלית-עליונה
    if (!document.getElementById('online-widget')) {
        const widget = document.createElement('div');
        widget.id = 'online-widget';
        widget.className = 'online-floating-widget';
        widget.innerHTML = `
            <div class="online-header" id="online-widget-toggle" title="לחץ לראות מי לומד איתך עכשיו">
                <div class="online-header-right">
                    <span class="live-green-dot"></span>
                    <span id="online-count-text">סטודנט אחד מחובר</span>
                </div>
                <span id="online-arrow" style="font-size: 0.75rem; opacity: 0.7;">▾</span>
            </div>
            <div class="online-users-list" id="online-users-list"></div>
        `;
        document.body.appendChild(widget);

        document.getElementById('online-widget-toggle').addEventListener('click', () => {
            const list = document.getElementById('online-users-list');
            const arrow = document.getElementById('online-arrow');
            const isOpen = list.style.display === 'flex';
            list.style.display = isOpen ? 'none' : 'flex';
            arrow.innerText = isOpen ? '▾' : '▴';
        });
    }

    // 2. הוספת הנקודה הירוקה לכפתור הצ'אט
    const chatBtn = document.getElementById('btn-chat') ||
        Array.from(document.querySelectorAll('.menu-item')).find(el => el.innerText.includes('צ\'אט') || el.innerText.includes('צ׳אט'));

    if (chatBtn && !document.getElementById('chat-unread-dot')) {
        chatBtn.style.display = 'flex';
        chatBtn.style.alignItems = 'center';
        chatBtn.style.justifyContent = 'space-between';

        const dot = document.createElement('span');
        dot.id = 'chat-unread-dot';
        dot.className = 'chat-unread-dot';
        dot.title = 'יש הודעות חדשות בצ׳אט';
        chatBtn.appendChild(dot);

        chatBtn.addEventListener('click', () => {
            window.markChatAsRead();
        });
    }
}

// --- סימון הודעות הצ'אט כנקראו ---
window.markChatAsRead = function() {
    localStorage.setItem(LAST_READ_KEY, String(Date.now()));
    const dot = document.getElementById('chat-unread-dot');
    if (dot) dot.style.display = 'none';
};

// --- רינדור רשימת המחוברים ---
function renderOnlineUsers(currentUser) {
    const countEl = document.getElementById('online-count-text');
    const listEl = document.getElementById('online-users-list');
    if (!countEl || !listEl) return;

    const now = Date.now();
    let activeUsers = latestOnlineDocs.filter(u => {
        if (u.online === false) return false;
        const lastSeenMs = u.lastSeen?.toMillis ? u.lastSeen.toMillis() : (u.clientTime || 0);
        return (now - lastSeenMs) <= ONLINE_THRESHOLD_MS;
    });

    // מוודא שהמשתמש עצמו תמיד מופיע ברשימה גם לפני סנכרון ראשון
    if (currentUser && !activeUsers.some(u => u.uid === currentUser.uid)) {
        activeUsers.unshift({
            uid: currentUser.uid,
            displayName: currentUser.displayName || currentUser.email?.split('@')[0] || 'סטודנט/ית',
            photoURL: currentUser.photoURL || ''
        });
    }

    const count = activeUsers.length;
    countEl.innerText = count === 1 ? 'סטודנט אחד מחובר' : `${count} מחוברים עכשיו`;

    activeUsers.sort((a, b) => (a.uid === currentUser.uid ? -1 : b.uid === currentUser.uid ? 1 : 0));

    listEl.innerHTML = activeUsers.map(u => {
        const isMe = u.uid === currentUser.uid;
        const safeName = (u.displayName || 'סטודנט/ית').replace(/</g, '&lt;');
        const initial = safeName.charAt(0).toUpperCase();
        const avatarHtml = u.photoURL
            ? `<img src="${u.photoURL}" class="online-avatar" alt="" referrerpolicy="no-referrer">`
            : `<div class="online-avatar">${initial}</div>`;

        return `
            <div class="online-user-row">
                ${avatarHtml}
                <span>${safeName}${isMe ? ' <strong>(את/ה)</strong>' : ''}</span>
            </div>
        `;
    }).join('');
}

// --- הפעלת המערכת לאחר התחברות המשתמש ---
export function initPresenceAndChatBadge(db, user) {
    if (!db || !user) return;
    injectPresenceUI();
    renderOnlineUsers(user);

    if (isInitialized) return;
    isInitialized = true;

    currentUserRef = doc(db, 'presence', user.uid);

    const sendHeartbeat = async (isOnline = true) => {
        try {
            await setDoc(currentUserRef, {
                uid: user.uid,
                displayName: user.displayName || user.email?.split('@')[0] || 'סטודנט/ית',
                photoURL: user.photoURL || '',
                online: isOnline,
                lastSeen: serverTimestamp(),
                clientTime: Date.now()
            }, { merge: true });
        } catch (err) {
            console.warn('Presence write error (check Firestore rules for "presence"):', err);
        }
    };

    sendHeartbeat(true);
    clearInterval(heartbeatTimer);
    heartbeatTimer = setInterval(() => {
        if (!document.hidden) sendHeartbeat(true);
    }, HEARTBEAT_INTERVAL_MS);

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) sendHeartbeat(true);
    });

    window.addEventListener('pagehide', () => {
        sendHeartbeat(false);
    });

    // האזנה בזמן אמת לכל המחוברים
    onSnapshot(collection(db, 'presence'), (snapshot) => {
        latestOnlineDocs = snapshot.docs.map(d => d.data());
        renderOnlineUsers(user);
    }, (err) => {
        console.warn('Presence read error (check Firestore rules for "presence"):', err);
    });

    clearInterval(refreshUiTimer);
    refreshUiTimer = setInterval(() => renderOnlineUsers(user), 30000);

    // האזנה בזמן אמת להודעה האחרונה בצ'אט (נקודה ירוקה)
    if (!localStorage.getItem(LAST_READ_KEY)) {
        localStorage.setItem(LAST_READ_KEY, String(Date.now()));
    }

    try {
        const latestMsgQuery = query(
            collection(db, CHAT_COLLECTION_NAME),
            orderBy(CHAT_TIMESTAMP_FIELD, 'desc'),
            limit(1)
        );

        onSnapshot(latestMsgQuery, (snapshot) => {
            if (snapshot.empty) return;
            const msg = snapshot.docs[0].data();
            const rawTs = msg[CHAT_TIMESTAMP_FIELD];
            const msgTimeMs = rawTs?.toMillis ? rawTs.toMillis() : (typeof rawTs === 'number' ? rawTs : Date.now());
            const lastReadMs = Number(localStorage.getItem(LAST_READ_KEY) || 0);
            const isFromMe = msg[CHAT_EMAIL_FIELD] === user.email;
            const isInChatNow = typeof currentView !== 'undefined' && currentView === 'chat';

            if (isInChatNow) {
                window.markChatAsRead();
                return;
            }

            if (!isFromMe && msgTimeMs > lastReadMs) {
                const dot = document.getElementById('chat-unread-dot');
                if (dot) dot.style.display = 'inline-block';
            }
        });
    } catch (err) {
        console.warn('Chat unread badge listener error:', err);
    }
}