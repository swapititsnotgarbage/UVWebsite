// ==========================================
// === קובץ app_books.js ===
// ניהול מדור "ספרים" - The Foundations of Chinese Medicine (ג'ובאני מצ'יוצ'יה)
// ==========================================

function openMaciociaIndex() {
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'book_maciocia_index';

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-book_maciocia');
    if (btn) btn.classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';

    if (typeof maciociaBookData !== 'undefined') {
        Object.keys(maciociaBookData).forEach(key => {
            const item = maciociaBookData[key];
            const gradientStyle = `background: linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%);`;

            cardsHTML += `
                <div class="topic-card theme-box" onclick="openMaciociaChapter('${key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${item.icon || '📚'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                    </div>
                </div>
            `;
        });
    }
    cardsHTML += '</div>';

    document.getElementById('content-area').innerHTML = `
        <div style="text-align: center; margin-bottom: 35px;">
            <span style="background: #6c5ce7; color: white; padding: 4px 14px; border-radius: 50px; font-size: 0.85rem; font-weight: bold;">גרסת בטא • חלק 1: תיאוריה כללית</span>
            <h1 style="color: var(--ink); margin: 12px 0 8px 0;">The Foundations of Chinese Medicine</h1>
            <p style="color: #636e72; font-size: 1.1rem; margin: 0;">סיכומי עומק בעברית מתוך ספרו של Giovanni Maciocia (מהדורה שלישית)</p>
        </div>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openMaciociaChapter(chapterId) {
    if (typeof maciociaBookData === 'undefined' || !maciociaBookData[chapterId]) {
        console.error('Maciocia chapter not found:', chapterId);
        return;
    }

    const chapter = maciociaBookData[chapterId];
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'book_maciocia_' + chapterId;

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-book_maciocia');
    if (btn) btn.classList.add('active-menu');

    document.getElementById('content-area').innerHTML = `
        <button onclick="openMaciociaIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">⬅ חזור לפרקי הספר</button>
        <div class="article-container theme-box">
            <div style="background: linear-gradient(135deg, ${chapter.color1} 0%, ${chapter.color2} 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; color: white; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="font-size: 3rem; margin-bottom: 10px;">${chapter.icon}</div>
                <h1 style="margin: 0 0 10px 0; font-size: 2.1rem; color: white;">${chapter.title}</h1>
                <p style="margin: 0; font-size: 1.05rem; opacity: 0.95;">${chapter.subtitle}</p>
            </div>
            
            <div class="article-content" style="font-size: 1.1rem; line-height: 1.75; color: var(--ink);">
                ${chapter.content}
            </div>
        </div>
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}