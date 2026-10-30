// === קובץ profile.js ===
function openProfile() {
    saveCurrentScroll();
    currentView = 'profile';

    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) {
        pointsDisplay.style.display = 'none'; 
        pointsDisplay.innerHTML = '';
    }
    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('welcome-view').style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btnProfile = document.getElementById('btn-profile');
    if(btnProfile) btnProfile.classList.add('active-menu');

    const user = window.firebaseAuth ? window.firebaseAuth.currentUser : null;
    
    let profileHtml = `
        <div class="article-container" style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); max-width: 800px; margin: auto;">
            <h1 style="text-align: center; color: var(--ink); margin-bottom: 30px; font-size: 2.2rem;">פרופיל אישי</h1>
    `;

    if (user) {
        const photoURL = user.photoURL || 'https://via.placeholder.com/120?text=User';
        profileHtml += `
            <div style="text-align: center; margin-bottom: 40px;">
                <img src="${photoURL}" alt="תמונת פרופיל" style="width: 120px; height: 120px; border-radius: 50%; box-shadow: 0 5px 15px rgba(0,0,0,0.1); margin-bottom: 15px; border: 3px solid #f0f2f5;">
                <h2 style="color: var(--ink); margin: 0; font-size: 1.8rem;">${user.displayName || 'סטודנט'}</h2>
                <p style="color: #777; margin-top: 5px; font-size: 1.1rem;">${user.email}</p>
                <button onclick="logoutUser()" style="margin-top: 20px; background: #ff6b6b; color: white; border: none; padding: 10px 25px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1rem; transition: 0.3s; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">התנתק מהמערכת</button>
            </div>
            
            <div style="border-top: 2px solid #f0f2f5; padding-top: 30px;">
                <h3 style="color: var(--ink); margin-bottom: 25px; text-align: center;">ההתקדמות שלי</h3>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 20px; text-align: center; flex: 1; min-width: 160px; border: 1px solid #eee; transition: 0.3s;" onmouseover="this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'" onmouseout="this.style.boxShadow='none'">
                        <h4 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 1.1rem;">מבחנים שבוצעו</h4>
                        <span id="profile-exams-count" style="font-size: 2.5rem; font-weight: bold; color: #2ecc71;">⏳</span>
                    </div>
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 20px; text-align: center; flex: 1; min-width: 160px; border: 1px solid #eee; transition: 0.3s;" onmouseover="this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'" onmouseout="this.style.boxShadow='none'">
                        <h4 style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 1.1rem;">ציון ממוצע</h4>
                        <span id="profile-exams-avg" style="font-size: 2.5rem; font-weight: bold; color: #3498db;">⏳</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        profileHtml += `<p style="text-align: center; color: #e74c3c; font-size: 1.2rem;">אנא התחבר כדי לראות את הפרופיל שלך.</p>`;
    }

    profileHtml += `</div>`;
    document.getElementById('content-area').innerHTML = profileHtml;
    window.scrollTo(0, 0);

    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
    if (window.innerWidth <= 1100) document.body.classList.add('sidebar-closed');

    // קריאה לפונקציה שמושכת נתונים מהענן כשהפרופיל נטען
    if (user && window.loadUserProfileData) {
        window.loadUserProfileData();
    }
}

window.logoutUser = function() {
    if(window.firebaseAuth) {
        window.firebaseAuth.signOut().then(() => {
            window.location.reload();
        }).catch((error) => console.error("שגיאה בהתנתקות:", error));
    }
};