// === app_western.js ===
// ניהול תצוגת רפואה מערבית - שנה ב'

function openWesternIndex() {
    saveCurrentScroll();
    currentView = 'western_index';

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-western_index');
    if (btn) btn.classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';
    
    if (typeof westernData !== 'undefined') {
        Object.keys(westernData).forEach(key => {
            const item = westernData[key];
            const gradientStyle = `background: linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%);`;

            cardsHTML += `
                <div class="topic-card theme-box" onclick="openWesternArticle('${key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${item.icon || '🩺'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                    </div>
                </div>
            `;
        });
    }
    
    cardsHTML += `
            <div class="topic-card theme-box" style="opacity: 0.6; cursor: default;">
                <div class="topic-gradient-header" style="background: linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%);">
                    <div class="topic-icon-floating">🦴</div>
                </div>
                <div class="topic-card-content">
                    <h3>מפרק המרפק (בקרוב)</h3>
                    <p>אנטומיה ופתולוגיות של מרפק.</p>
                </div>
            </div>
            
            <div class="topic-card theme-box" style="opacity: 0.6; cursor: default;">
                <div class="topic-gradient-header" style="background: linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%);">
                    <div class="topic-icon-floating">🦵</div>
                </div>
                <div class="topic-card-content">
                    <h3>מפרק הברך (בקרוב)</h3>
                    <p>אנטומיה ופתולוגיות של הברך.</p>
                </div>
            </div>
    </div>`;

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 40px;">רפואה מערבית - פתולוגיות אורתופדיות</h1>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openWesternArticle(articleId) {
    if (typeof westernData === 'undefined' || !westernData[articleId]) {
        console.error('Western article not found:', articleId);
        return;
    }
    
    const article = westernData[articleId];
    saveCurrentScroll();
    currentView = 'western_' + articleId;
    
    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    
    const specificBtn = document.getElementById('btn-western_index');
    if (specificBtn) specificBtn.classList.add('active-menu');
    
    document.getElementById('content-area').innerHTML = `
        <button onclick="openWesternIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">⬅ חזור לאינדקס מערבית</button>
        <div class="article-container theme-box">
            <div style="background: linear-gradient(135deg, ${article.color1} 0%, ${article.color2} 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; color: white; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="font-size: 3rem; margin-bottom: 10px;">${article.icon}</div>
                <h1 style="margin: 0 0 10px 0; font-size: 2.2rem; color: white;">${article.title}</h1>
                <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">${article.subtitle}</p>
            </div>
            
            <div class="article-content" style="font-size: 1.1rem; line-height: 1.7; color: var(--ink);">
                ${article.content}
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}