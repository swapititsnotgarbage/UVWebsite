// === app_core.js ===
// מנהל הניווט המרכזי של האתר

let currentView = 'home'; 
let currentSearchMode = 'global';
let flippedCards = new Set();
const scrollPositions = {};

function saveCurrentScroll() {
    if (currentView !== 'search') {
        scrollPositions[currentView] = window.scrollY;
    }
    // איפוס אוטומטי של המפה האינטראקטיבית בכל מעבר עמוד
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'grid';
    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();
}

function goHome() {
    saveCurrentScroll();
    currentView = 'home';

    const mapToggleBtn = document.getElementById('btn-toggle-map');
    if (mapToggleBtn) {
        mapToggleBtn.style.display = 'none';
        mapToggleBtn.innerText = '🗺️ מפה אינטראקטיבית';
        mapToggleBtn.style.background = 'linear-gradient(135deg, #16a085 0%, #1abc9c 100%)';
    }

    document.getElementById('welcome-view').style.display = 'block';
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('globalSearch').placeholder = 'חיפוש חופשי בכל האתר...';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const homeBtn = document.getElementById('btn-home');
    if (homeBtn) homeBtn.classList.add('active-menu');
    
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openPage(id) {
    saveCurrentScroll();
    currentView = id;

    const mapToggleBtn = document.getElementById('btn-toggle-map');
    if (mapToggleBtn) {
        mapToggleBtn.innerText = '🗺️ מפה אינטראקטיבית';
        mapToggleBtn.style.background = 'linear-gradient(135deg, #16a085 0%, #1abc9c 100%)';
    }

    document.getElementById('globalSearch').value = '';
    document.getElementById(' welcome-view')?.style && (document.getElementById('welcome-view').style.display = 'none');
    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const activeBtn = document.getElementById('btn-' + id);
    if (activeBtn) activeBtn.classList.add('active-menu');

    const m = data[id];
    // הגנה למקרה שהמרידיאן (למשל GB, PC, TW) טרם הוזן לקובץ הנתונים
    if (!m) {
        document.getElementById('filterBtn').style.display = 'none';
        document.getElementById('content-area').innerHTML = `
            <div class="theory-box theme-box" style="text-align: center; padding: 50px 20px;">
                <h2 style="color: var(--ink); font-size: 2rem;">מרידיאן ${id} בבנייה 🚧</h2>
                <p style="font-size: 1.15rem; color: #666;">נקודות המרידיאן יעלו בקרוב בהתאם לסילבוס הלימודים.</p>
            </div>
        `;
        if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
        return;
    }

    document.getElementById('filterBtn').style.display = 'inline-block';
    document.getElementById('globalSearch').placeholder = 'חיפוש נקודות דיקור...';
    
    document.getElementById('content-area').innerHTML = `
        <div class="id-badge theme-box">
            <div class="id-grid">
                <div class="id-item"><span>מרידיאן</span><strong>${m.title}</strong></div>
                <div class="id-item"><span>אלמנט</span><strong>${m.element}</strong></div>
                <div class="id-item"><span>שעות</span><strong>${m.hours}</strong></div>
                <div class="id-item"><span>שכבה</span><strong>${m.layer}</strong></div>
                <div class="id-item"><span>בן זוג</span><strong>${m.partner}</strong></div>
            </div>
            <p><strong>מסלולים פנימיים:</strong> ${m.insideM}</p>
            <p><strong>תפקוד כללי:</strong> ${m.general}</p>
        </div>
    `;
    
    document.getElementById('pointsDisplay').innerHTML = m.points.map(p => generateCard(p)).join('');
    
    setTimeout(() => {
        window.scrollTo({ top: scrollPositions[id] || 0, behavior: 'instant' });
    }, 10);

    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}