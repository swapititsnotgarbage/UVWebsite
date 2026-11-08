// === קובץ ui.js (ניהול ממשק כללי ותפריטים) ===

function toggleSidebar() {
    const body = document.body;
    body.classList.toggle('sidebar-closed');

    if (window.innerWidth <= 1100) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (item.id === 'btn-home' || item.id === 'btn-profile' || item.id.startsWith('btn-') && item.id !== 'btn-main-study') {
                    body.classList.add('sidebar-closed');
                }
            });
        });
    }
}

function toggleMenuSection(headerElement) {
    const content = headerElement.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        headerElement.classList.remove("open");
    } else {
        content.style.display = "block";
        headerElement.classList.add("open");
    }
}

function checkPassword() {
    const pass = document.getElementById('secretPass').value;
    if (pass === '7777') { 
        document.getElementById('login-screen').style.display = 'none';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') checkPassword();
}

function toggleStudyMenu() {
    const menu = document.getElementById('study-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
// === מנגנון חכם לטעינת תמונות (מוצא אוטומטית סיומת ותיקייה) ===
function setSmartImageSrc(imgElement, rawPath) {
    const cleanPath = rawPath.split('?')[0];
    const fileName = cleanPath.split('/').pop(); 
    const baseName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
    const capName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    const lowName = baseName.toLowerCase();

    // רשימת כל הנתיבים והסיומות האפשריים לבדיקה אוטומטית
    const candidates = [
        cleanPath,
        `images/ortho/${lowName}.jpeg`,
        `images/ortho/${lowName}.jpg`,
        `images/ortho/${capName}.jpeg`,
        `images/ortho/${capName}.jpg`,
        `images/ortho/${lowName}.png`,
        `images/${lowName}.jpeg`,
        `images/${lowName}.jpg`,
        `images/${capName}.jpeg`,
        `images/${capName}.jpg`,
        `images/${lowName}.png`
    ];

    let index = 0;
    imgElement.onerror = function() {
        index++;
        if (index < candidates.length) {
            imgElement.src = candidates[index] + '?v=7';
        } else {
            imgElement.onerror = null;
        }
    };

    imgElement.src = candidates[0] + '?v=7';
}

// === פונקציה חכמה להגדלת תמונות בלחיצה (Lightbox) ===
function enlargeImage(rawPath) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-image');
    if (!modal || !modalImg) return;

    const cleanPath = rawPath.split('?')[0];
    const hasExtension = /\.(jpeg|jpg|png|webp)$/i.test(cleanPath);
    const basePath = hasExtension ? cleanPath.replace(/\.(jpeg|jpg|png|webp)$/i, '') : cleanPath;

    const candidates = [
        `${basePath}.jpeg`,
        `${basePath}.jpg`,
        `${basePath}.png`,
        `${basePath}.webp`
    ];

    let index = 0;
    modalImg.onerror = function() {
        index++;
        if (index < candidates.length) {
            modalImg.src = candidates[index] + '?v=10';
        } else {
            modalImg.onerror = null;
        }
    };

    modalImg.src = candidates[0] + '?v=10';
    modal.style.display = 'flex';
}


function updateStudyToolsVisibility() {
    const flashTestBtn = document.getElementById('btn-flash-test');
    const flashSolveBtn = document.getElementById('btn-flash-solve');
    const flashClearBtn = document.getElementById('btn-flash-clear');
    const randomCardBtn = document.getElementById('btn-random-card');
    const smartQuizBtn = document.getElementById('btn-smart-quiz');
    const westernQuizBtn = document.getElementById('btn-western-quiz');
    const mapToggleBtn = document.getElementById('btn-toggle-map'); 
    const studyTools = document.getElementById('study-tools');
    const studyMenu = document.getElementById('study-menu');

    const bpEmptyBtn = document.getElementById('btn-bp-empty');
    const bpFullBtn = document.getElementById('btn-bp-full');
    const bpCheckBtn = document.getElementById('btn-bp-check');

    if (!studyTools) return;

    if (currentView === 'home' || currentView === 'article_theoretical_exam' || currentView === 'article_practical_exam') {
        studyTools.style.display = 'none';
        return;
    }

    studyTools.style.display = 'flex';
    if (studyMenu) studyMenu.style.display = 'none'; 

    // הסתרה של כולם כברירת מחדל
    if (flashTestBtn) flashTestBtn.style.display = 'none';
    if (flashSolveBtn) flashSolveBtn.style.display = 'none';
    if (flashClearBtn) flashClearBtn.style.display = 'none';
    if (randomCardBtn) randomCardBtn.style.display = 'none';
    if (mapToggleBtn) mapToggleBtn.style.display = 'none'; 
    if (smartQuizBtn) smartQuizBtn.style.display = 'none';
    if (westernQuizBtn) westernQuizBtn.style.display = 'none'; 
    if (bpEmptyBtn) bpEmptyBtn.style.display = 'none';
    if (bpFullBtn) bpFullBtn.style.display = 'none';
    if (bpCheckBtn) bpCheckBtn.style.display = 'none';

    // הצגת הכפתורים הרלוונטיים לפי הדף הנוכחי
    if (currentView.startsWith('western')) {
        if (westernQuizBtn) westernQuizBtn.style.display = 'block';
    } 
    else if (currentView === 'article_bigpicture') {
        if (bpEmptyBtn) bpEmptyBtn.style.display = 'block';
        if (bpFullBtn) bpFullBtn.style.display = 'block';
        if (bpCheckBtn) bpCheckBtn.style.display = 'block';
    } 
    else if (currentView === 'pathologies' || currentView === 'fundamentals' || currentView.startsWith('article_')) {
        if (smartQuizBtn) smartQuizBtn.style.display = 'block';
    } 
    else if (typeof data !== 'undefined' && data[currentView]) {
        if (flashTestBtn) flashTestBtn.style.display = 'block';
        if (flashSolveBtn) flashSolveBtn.style.display = 'block';
        if (flashClearBtn) flashClearBtn.style.display = 'block';
        if (randomCardBtn) randomCardBtn.style.display = 'block';
        if (mapToggleBtn) mapToggleBtn.style.display = 'block'; 
        
        if (window.checkFavoritesStatus) {
            setTimeout(window.checkFavoritesStatus, 150);
        }
    } else {
        studyTools.style.display = 'none';
    }
}