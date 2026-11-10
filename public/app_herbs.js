// ==========================================
// === קובץ app_herbs.js ===
// ניהול תצוגת צמחי מרפא בודדים וכרטיסיות צמחים
// ==========================================

function openHerbsIndex() {
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'herbs_index';

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-herbs_index');
    if (btn) btn.classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';

    if (typeof herbsCategoriesData !== 'undefined') {
        Object.keys(herbsCategoriesData).forEach(key => {
            const cat = herbsCategoriesData[key];
            const gradientStyle = `background: linear-gradient(135deg, ${cat.color1} 0%, ${cat.color2} 100%);`;
            const count = cat.herbs ? cat.herbs.length : 0;

            cardsHTML += `
                <div class="topic-card theme-box" onclick="openHerbsCategory('${key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${cat.icon || '🌿'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${cat.title}</h3>
                        <p>${cat.subtitle}</p>
                        <div style="margin-top: 12px; font-weight: bold; color: #00b894; font-size: 0.9rem;">
                            🌱 ${count} צמחים בקטגוריה
                        </div>
                    </div>
                </div>
            `;
        });
    }
    cardsHTML += '</div>';

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 40px;">צמחי מרפא בודדים</h1>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openHerbsCategory(categoryKey) {
    if (typeof herbsCategoriesData === 'undefined' || !herbsCategoriesData[categoryKey]) {
        console.error('Herbs category not found:', categoryKey);
        return;
    }

    const cat = herbsCategoriesData[categoryKey];
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'herbs_' + categoryKey;

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-herbs_index');
    if (btn) btn.classList.add('active-menu');

    let herbsCardsHTML = '<div class="herbs-cards-grid">';

    cat.herbs.forEach(herb => {
        const rankClass = `herb-rank-${herb.rank.toLowerCase()}`;
        herbsCardsHTML += `
            <div class="herb-point-card theme-box">
                <!-- כותרת הכרטיסייה כמו בנקודות דיקור -->
                <div class="herb-card-header">
                    <div class="herb-title-wrap">
                        <span class="herb-code-badge">${herb.name}</span>
                        <div>
                            <h3 class="herb-latin-name">${herb.latin}</h3>
                            <span class="herb-hebrew-part">${herb.hebrewPart} (${herb.meaning})</span>
                        </div>
                    </div>
                    <span class="herb-rank-badge ${rankClass}" title="דרגת חשיבות למבחן">דרגה ${herb.rank}</span>
                </div>

                <!-- סרגל מאפיינים מהיר (טעם/טמפ', איברים, מינון) -->
                <div class="herb-meta-bar">
                    <div class="herb-meta-item">
                        <span>🔥 טעם וטמפרטורה</span>
                        <strong>${herb.tasteTemp}</strong>
                    </div>
                    <div class="herb-meta-item">
                        <span>🎯 איברים / מרידיאנים</span>
                        <strong>${herb.organs}</strong>
                    </div>
                    <div class="herb-meta-item">
                        <span>⚖️ מינון יומי</span>
                        <strong>${herb.dosage}</strong>
                    </div>
                </div>

                <!-- שורת סיכום מודגשת -->
                <div class="herb-summary-banner">
                    <strong>📌 לסיכום:</strong> ${herb.summary}
                </div>

                <!-- תפקודים קליניים -->
                <div class="herb-section">
                    <h4>⚡ תפקודים עיקריים:</h4>
                    <ul class="herb-list">
                        ${herb.functions.map(fn => `<li>${fn}</li>`).join('')}
                    </ul>
                </div>

                <!-- קונטרה-אינדיקציות ושילובים -->
                <div class="herb-two-cols">
                    <div class="herb-contra-box">
                        <h4>⛔ קונטרה-אינדיקציות וזהירות:</h4>
                        <p>${herb.contraindications}</p>
                    </div>
                    <div class="herb-combo-box">
                        <h4>🤝 שילובים נפוצים:</h4>
                        <ul>
                            ${herb.combinations.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                ${herb.enrichment ? `
                    <div class="herb-enrichment-box">
                        <strong>💡 העשרה ודגשים:</strong> ${herb.enrichment}
                    </div>
                ` : ''}
            </div>
        `;
    });

    herbsCardsHTML += '</div>';

    document.getElementById('content-area').innerHTML = `
        <button onclick="openHerbsIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;">⬅ חזור לקטגוריות צמחי מרפא</button>
        
        <div style="background: linear-gradient(135deg, ${cat.color1} 0%, ${cat.color2} 100%); padding: 30px; border-radius: 20px; margin-bottom: 30px; color: white; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <div style="font-size: 3rem; margin-bottom: 10px;">${cat.icon}</div>
            <h1 style="margin: 0 0 10px 0; font-size: 2.2rem; color: white;">${cat.title}</h1>
            <p style="margin: 0; font-size: 1.1rem; opacity: 0.95;">${cat.subtitle}</p>
        </div>

        ${herbsCardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}