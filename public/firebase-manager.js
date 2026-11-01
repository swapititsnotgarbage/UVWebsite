import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUUehirog3DEx1thYy0WOt0jVzufHSv_Q",
    authDomain: "uv-website-eef74.firebaseapp.com",
    projectId: "uv-website-eef74",
    storageBucket: "uv-website-eef74.firebasestorage.app",
    messagingSenderId: "839906861932",
    appId: "1:839906861932:web:e917a1199d129b09830949",
    measurementId: "G-ZTBE5WTFJT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseAuth = auth;
window.firebaseDb = db;

const provider = new GoogleAuthProvider();

// מאזין לטעינת ה-DOM לפני הוספת מאזינים לכפתורים
document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    const btnGoogleLogin = document.getElementById('btnGoogleLogin');
    const authError = document.getElementById('auth-error');

    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener('click', () => {
            if (authError) authError.style.display = 'none';
            signInWithPopup(auth, provider)
                .catch((error) => {
                    if (authError) {
                        authError.innerText = "שגיאה בהתחברות: " + error.message;
                        authError.style.display = 'block';
                    }
                });
        });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (loginScreen) loginScreen.style.display = 'none';
            if (appContainer) appContainer.style.display = 'flex'; 
        } else {
            if (loginScreen) loginScreen.style.display = 'flex';
            if (appContainer) appContainer.style.display = 'none';
        }
    });
});

let chatUnsubscribe = null;

window.initChatListener = function() {
    const messagesDiv = document.getElementById('chat-messages');
    if(!messagesDiv) return;
    
    const q = query(collection(db, "chats"), orderBy("timestamp", "asc"));
    
    if(chatUnsubscribe) chatUnsubscribe(); 
    
    chatUnsubscribe = onSnapshot(q, (snapshot) => {
        messagesDiv.innerHTML = '';
        snapshot.forEach((doc) => {
            const data = doc.data();
            const isMe = auth.currentUser && data.userEmail === auth.currentUser.email;
            
            let timeString = '';
            if (data.timestamp) {
                const date = data.timestamp.toDate();
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                timeString = `${hours}:${minutes}`;
            } else {
                timeString = 'שולח...'; 
            }

            const align = isMe ? 'flex-start' : 'flex-end';
            const bg = isMe ? '#d9fdd3' : '#ffffff';
            const radius = isMe ? '15px 15px 15px 0' : '15px 15px 0 15px';
            const nameColor = isMe ? '#075e54' : '#d35400';
            
            messagesDiv.innerHTML += `
                <div style="align-self: ${align}; text-align: right; background: ${bg}; padding: 8px 12px; border-radius: ${radius}; max-width: 75%; min-width: 120px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); position: relative; margin-bottom: 4px;">
                    <div style="font-size: 0.85rem; color: ${nameColor}; font-weight: bold; margin-bottom: 2px;">${data.userName}</div>
                    <div style="color: #111b21; font-size: 1.05rem; line-height: 1.4; word-wrap: break-word; padding-bottom: 15px; padding-left: 30px;">${data.text}</div>
                    <div style="font-size: 0.7rem; color: #667781; position: absolute; bottom: 4px; left: 8px;">${timeString}</div>
                </div>
            `;
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    });
};

window.sendChatMessage = async function() {
    const input = document.getElementById('chat-input');
    if(!input) return;
    const text = input.value;
    if(!text.trim()) return;
    
    const user = auth.currentUser;
    if(!user) return alert("אנא התחבר כדי לשלוח הודעה.");

    input.value = ''; 
    try {
        await addDoc(collection(db, "chats"), {
            text: text,
            userName: user.displayName || "סטודנט",
            userEmail: user.email,
            timestamp: serverTimestamp()
        });
    } catch(e) {
        console.error("שגיאה:", e);
    }
};

window.submitReport = async function() {
    const textEl = document.getElementById('report-text');
    if(!textEl) return;
    const text = textEl.value;
    if(!text.trim()) return alert("אנא הזן את פרטי הדיווח.");
    
    const user = auth.currentUser;
    try {
        await addDoc(collection(db, "reports"), {
            text: text,
            userEmail: user ? user.email : "לא מחובר",
            timestamp: serverTimestamp()
        });
        alert("הדיווח נשלח בהצלחה, תודה רבה!");
        document.getElementById('report-modal').style.display = 'none';
    } catch(e) {
        alert("שגיאה בשליחה: " + e.message);
    }
};

window.saveQuizScore = async function(correctAnswers, totalQuestions) {
    const user = auth.currentUser;
    if (!user) return; 
    
    const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);
    
    try {
        await addDoc(collection(db, "exam_results"), {
            userEmail: user.email,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            score: scorePercent,
            timestamp: serverTimestamp()
        });
    } catch(e) {
        console.error("שגיאה בשמירת הציון:", e);
    }
};

window.toggleFavorite = async function(itemId, itemTitle, itemType, btnElement) {
    const user = auth.currentUser;
    if (!user) return alert("אנא התחבר למערכת כדי לשמור מועדפים.");
    
    try {
        const q = query(collection(db, "favorites"), where("userEmail", "==", user.email), where("itemId", "==", itemId));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            snapshot.forEach(async (document) => {
                await deleteDoc(doc(db, "favorites", document.id));
            });
            btnElement.innerText = "☆";
            btnElement.style.color = "#ccc";
        } else {
            await addDoc(collection(db, "favorites"), {
                userEmail: user.email,
                itemId: itemId,
                itemTitle: itemTitle,
                itemType: itemType,
                timestamp: serverTimestamp()
            });
            btnElement.innerText = "⭐";
            btnElement.style.color = "#f1c40f";
        }

        if (window.currentView === 'profile' && window.loadUserProfileData) {
            setTimeout(window.loadUserProfileData, 400); 
        }
    } catch (e) {
        console.error("שגיאה במועדפים:", e);
    }
};

window.checkFavoritesStatus = async function() {
    const user = auth.currentUser;
    if (!user) return;
    
    try {
        const q = query(collection(db, "favorites"), where("userEmail", "==", user.email));
        const snapshot = await getDocs(q);
        
        const favIds = [];
        snapshot.forEach(document => favIds.push(document.data().itemId));
        
        const starBtns = document.querySelectorAll('.fav-btn');
        starBtns.forEach(btn => {
            if (favIds.includes(btn.dataset.id)) {
                btn.innerText = "⭐";
                btn.style.color = "#f1c40f";
            } else {
                btn.innerText = "☆";
                btn.style.color = "#ccc";
            }
        });
    } catch (e) {
        console.error("שגיאה בבדיקת מועדפים:", e);
    }
};

window.loadUserProfileData = async function() {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const examsQ = query(collection(db, "exam_results"), where("userEmail", "==", user.email));
        const examsSnapshot = await getDocs(examsQ);
        
        let totalExams = 0;
        let sumScores = 0;
        
        examsSnapshot.forEach((doc) => {
            totalExams++;
            sumScores += doc.data().score;
        });

        const avgScore = totalExams > 0 ? Math.round(sumScores / totalExams) : 0;
        const examsCountEl = document.getElementById('profile-exams-count');
        const examsAvgEl = document.getElementById('profile-exams-avg');
        
        if (examsCountEl) examsCountEl.innerText = totalExams;
        if (examsAvgEl) examsAvgEl.innerText = avgScore + '%';

        const favQ = query(collection(db, "favorites"), where("userEmail", "==", user.email));
        const favSnapshot = await getDocs(favQ);
        const favContainer = document.getElementById('profile-favorites-list');
        
        if (favContainer) {
            if (favSnapshot.empty) {
                favContainer.innerHTML = 'עוד לא שמרת מועדפים. לחץ על ה-☆ ליד נקודות דיקור או פתולוגיות כדי לשמור אותן כאן.';
            } else {
                let favHtml = '';
                favSnapshot.forEach((doc) => {
                    const data = doc.data();
                    favHtml += `
                        <div style="background: #f8f9fa; padding: 15px 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #eee; margin-bottom: 8px;">
                            <div style="display: flex; flex-direction: column; text-align: right;">
                                <span style="font-weight: bold; color: #2c3e50; font-size: 1.1rem;">${data.itemTitle}</span>
                                <span style="font-size: 0.85rem; color: #7f8c8d;">${data.itemId}</span>
                            </div>
                            <button class="fav-btn" data-id="${data.itemId}" onclick="toggleFavorite('${data.itemId}', '${data.itemTitle}', '${data.itemType}', this)" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #f1c40f; transition: 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">⭐</button>
                        </div>
                    `;
                });
                favContainer.innerHTML = favHtml;
            }
        }
    } catch(e) {
        console.error("שגיאה במשיכת נתוני פרופיל:", e);
    }
};