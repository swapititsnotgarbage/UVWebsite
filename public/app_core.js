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
}

function goHome() {
    currentView = 'home';
    
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'grid';

    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

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
    document.getElementById('globalSearch').placeholder = 'חיפוש חומר עיוני ופתולוגיות...';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('btn-home').classList.add('active-menu');
    
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openPage(id) {
    saveCurrentScroll();
    currentView = id;

    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'grid';

    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

    const mapToggleBtn = document.getElementById('btn-toggle-map');
    if (mapToggleBtn) {
        mapToggleBtn.innerText = '🗺️ מפה אינטראקטיבית';
        mapToggleBtn.style.background = 'linear-gradient(135deg, #16a085 0%, #1abc9c 100%)';
    }

    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'inline-block';
    document.getElementById('globalSearch').placeholder = 'חיפוש נקודות דיקור...';

    const m = data[id];
    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('btn-' + id).classList.add('active-menu');
    
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