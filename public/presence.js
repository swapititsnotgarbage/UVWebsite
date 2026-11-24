// ==========================================
// === קובץ presence.js ===
// מערכת נוכחות בזמן אמת (מי וכמה מחוברים) + חיווי הודעות שלא נקראו בצ'אט
// ==========================================

import {
    doc, setDoc, collection, onSnapshot, query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 🔧 הגדרות מותאמות בדיוק ל-firebase-manager.js שלך:
const CHAT_COLLECTION_NAME = 'chats';
const CHAT_TIMESTAMP_FIELD = 'timestamp';
const CHAT_EMAIL_FIELD = 'userEmail';              // שדה מזהה השולח בהודעה (למשל 'uid' או 'userId')

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;   // נחשב מחובר אם נראה ב-2 הדקות האחרונות
const HEARTBEAT_INTERVAL_MS = 45 * 1000;     // עדכון נוכחות כל 45 שניות
const LAST_READ_KEY = 'uv_chat_last_read';

let heartbeatTimer = null;
let refreshUiTimer = null;
let latestOnlineDocs = [];
let currentUserRef = null;

// --- הזרקת עיצוב ורכיבי UI לתפריט הצדדי ---
function injectPresenceUI() {
    if (document.getElementById('presence-styles')) return;

    const style = document.createElement('style');
    style.id = 'presence-styles';
    style.innerHTML = `
        .online-widget {
            margin: 10px 12px 14px 12px;
            background: rgba(46, 204, 113, 0.1);
            border: 1px solid rgba(46, 204, 113, 0.35);
            border-radius: 12px;
            padding: 10px 12px;
            font-size: 0.9rem;
            transition: all 0.2s ease;
        }
        body.dark-mode .online-widget {
            background: rgba(46, 204, 113, 0.12);
            border-color: rgba(46, 204, 113, 0.3);
        }
        .online-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            font-weight: 700;
            color: var(--ink);
            user-select: none;
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
            max-height: 180px;
            overflow-y: auto;
        }
        .online-user-row {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: var(--ink);
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
        #btn-chat {
            display: flex !important;
            align-items: center;
            justify-content: space-between;
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
    `;
    document.head.appendChild(style);

    // 1. הוספת ווידג'ט המחוברים מתחת ללוגו בתפריט הצדדי
    const logo = document.querySelector('#sidebar .logo');
    if (logo && !document.getElementById('online-widget')) {
        const widget = document.createElement('div');
        widget.id = 'online-widget';
        widget.className = 'online-widget';
        widget.innerHTML = `
            <div class="online-header" id="online-widget-toggle" title="לחץ לראות מי לומד איתך עכשיו">
                <div class="online-header-right">
                    <span class="live-green-dot"></span>
                    <span id="online-count-text">טוען מחוברים...</span>
                </div>
                <span id="online-arrow" style="font-size: 0.75rem; opacity: 0.7;">▾</span>
            </div>
            <div class="online-users-list" id="online-users-list"></div>
        `;
        logo.insertAdjacentElement('afterend', widget);

        document.getElementById('online-widget-toggle').addEventListener('click', () => {
            const list = document.getElementById('online-users-list');
            const arrow = document.getElementById('online-arrow');
            const isOpen = list.style.display === 'flex';
            list.style.display = isOpen ? 'none' : 'flex';
            arrow.innerText = isOpen ? '▾' : '▴';
        });
    }

    // 2. הוספת הנקודה הירוקה לכפתור הצ'אט
    const chatBtn = document.getElementById('btn-chat');
    if (chatBtn && !document.getElementById('chat-unread-dot')) {
        const dot = document.createElement('span');
        dot.id = 'chat-unread-dot';
        dot.className = 'chat-unread-dot';
        dot.title = 'יש הודעות חדשות בצ׳אט';
        chatBtn.appendChild(dot);

        // איפוס חיווי אוטומטי בלחיצה על כפתור הצ'אט
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
function renderOnlineUsers(currentUid) {
    const countEl = document.getElementById('online-count-text');
    const listEl = document.getElementById('online-users-list');
    if (!countEl || !listEl) return;

    const now = Date.now();
    const activeUsers = latestOnlineDocs.filter(u => {
        if (u.online === false) return false;
        const lastSeenMs = u.lastSeen?.toMillis ? u.lastSeen.toMillis() : (u.clientTime || 0);
        return (now - lastSeenMs) <= ONLINE_THRESHOLD_MS;
    });

    const count = activeUsers.length;
    if (count === 0) {
        countEl.innerText = 'אין מחוברים כרגע';
    } else if (count === 1) {
        countEl.innerText = 'סטודנט אחד לומד עכשיו';
    } else {
        countEl.innerText = `${count} לומדים עכשיו באתר`;
    }

    // הצגת המשתמש הנוכחי ראשון ברשימה
    activeUsers.sort((a, b) => (a.uid === currentUid ? -1 : b.uid === currentUid ? 1 : 0));

    listEl.innerHTML = activeUsers.map(u => {
        const isMe = u.uid === currentUid;
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

    currentUserRef = doc(db, 'presence', user.uid);

    // שליחת פעימת נוכחות ל-Firestore
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
            console.warn('Presence update failed:', err);
        }
    };

    // עדכון מיידי + מחזורי כל 45 שניות
    sendHeartbeat(true);
    clearInterval(heartbeatTimer);
    heartbeatTimer = setInterval(() => {
        if (!document.hidden) sendHeartbeat(true);
    }, HEARTBEAT_INTERVAL_MS);

    // עדכון מיידי בחזרה לטאב
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) sendHeartbeat(true);
    });

    // ניסיון סימון יציאה בסגירת הטאב
    window.addEventListener('pagehide', () => {
        sendHeartbeat(false);
    });

    // האזנה בזמן אמת לכל המחוברים
    onSnapshot(collection(db, 'presence'), (snapshot) => {
        latestOnlineDocs = snapshot.docs.map(d => d.data());
        renderOnlineUsers(user.uid);
    });

    // רענון מקומי כל 30 שניות להסרת משתמשים שנסגר להם הדפדפן
    clearInterval(refreshUiTimer);
    refreshUiTimer = setInterval(() => renderOnlineUsers(user.uid), 30000);

    // --- האזנה בזמן אמת להודעה האחרונה בצ'אט (נקודה ירוקה) ---
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