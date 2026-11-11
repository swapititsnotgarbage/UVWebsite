// === קובץ search.js ===
// ריכוז כל פונקציות החיפוש, הסינון והניווט מתוך תוצאות החיפוש והמועדפים

function toggleFilterMenu() {
    const menu = document.getElementById('filterMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function filterBy(term) {
    document.getElementById('filterMenu').style.display = 'none';
    document.getElementById('globalSearch').value = '';
    
    if (currentView !== 'search') {
        saveCurrentScroll();
        currentView = 'search';
    }
    
    document.getElementById('welcome-view').style.display = 'none';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('content-area').innerHTML = `<h2 style="text-align:center">סינון: "${term}"</h2>`;
    
    let res = [];
    
    Object.keys(data).forEach(k => {
        data[k].points.forEach(p => {
            if (p.elm === term || p.tags.includes(term)) {
                res.push(p);
            }
        });
    });
    
    document.getElementById('pointsDisplay').innerHTML = res.map(p => generateCard(p, true)).join('');
    window.scrollTo(0, 0);

    const studyTools = document.getElementById('study-tools');
    const studyMenu = document.getElementById('study-menu');
    if (studyMenu) studyMenu.style.display = 'none';

    if (studyTools) {
        if (res.length > 0) {
            studyTools.style.display = 'flex';
            document.getElementById('btn-flash-test').style.display = 'block';
            document.getElementById('btn-flash-solve').style.display = 'block';
            
            const clearBtn = document.getElementById('btn-flash-clear');
            if (clearBtn) clearBtn.style.display = 'block';
            
            const randomBtn = document.getElementById('btn-random-card');
            if (randomBtn) randomBtn.style.display = 'none';
            
            document.getElementById('btn-smart-quiz').style.display = 'none';
        } else {
            studyTools.style.display = 'none';
        }
    }
}

function handleSearch() {
    const query = document.getElementById('globalSearch').value.toLowerCase().trim();
    
    if (query.length < 2) {
        if (currentView === 'search') {
            goHome(); 
        }
        return;
    }
    
    if (currentView !== 'search') {
        saveCurrentScroll();
        if (data[currentView]) {
            currentSearchMode = 'points_only'; 
        } else {
            currentSearchMode = 'global'; 
        }
        currentView = 'search';
    }

    document.getElementById('welcome-view').style.display = 'none';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    
    let pointResults = [];
    let theoryResults = [];
    let pathologyResults = [];
    let westernResults = [];
    let herbsResults = [];
    
    // 1. חיפוש בנקודות דיקור
    Object.keys(data).forEach(k => {
        data[k].points.forEach(p => {
            const searchString = `${p.id} ${p.name} ${p.func || ''} ${p.ind || ''} ${(p.tags || []).join(' ')}`.toLowerCase();
            if (searchString.includes(query)) pointResults.push(p);
        });
    });
    
    // 2. חיפוש בשאר המדורים (כאשר לא נמצאים בתוך מרידיאן ספציפי)
    if (currentSearchMode !== 'points_only') {
        // מאמרי תיאוריה
        if (typeof theoryData !== 'undefined') {
            Object.keys(theoryData).forEach(key => {
                const item = theoryData[key];
                const searchString = `${item.title} ${item.subtitle} ${item.content}`.toLowerCase();
                if (searchString.includes(query)) {
                    theoryResults.push({ key: key, item: item });
                }
            });
        }
        
        // פתולוגיות וסינדרומים סיניים
        if (typeof pathologiesData !== 'undefined') {
            Object.keys(pathologiesData).forEach(elementKey => {
                const element = pathologiesData[elementKey];
                Object.keys(element.organs).forEach(organKey => {
                    const organ = element.organs[organKey];
                    organ.syndromes.forEach(syn => {
                        const searchString = `${syn.name} ${syn.etiology} ${syn.symptoms} ${syn.treatment || ''}`.toLowerCase();
                        if (searchString.includes(query)) {
                            pathologyResults.push({
                                elementKey: elementKey,
                                organKey: organKey,
                                organTitle: organ.shortName,
                                syn: syn
                            });
                        }
                    });
                });
            });
        }

        // רפואה מערבית - אורתופדיה
        if (typeof westernData !== 'undefined') {
            Object.keys(westernData).forEach(key => {
                const item = westernData[key];
                const searchString = `${item.title} ${item.subtitle} ${item.content}`.toLowerCase();
                if (searchString.includes(query)) {
                    westernResults.push({ key: key, item: item });
                }
            });
        }

        // צמחי מרפא בודדים
        if (typeof herbsCategoriesData !== 'undefined') {
            Object.keys(herbsCategoriesData).forEach(catKey => {
                const cat = herbsCategoriesData[catKey];
                cat.herbs.forEach(herb => {
                    const searchString = `${herb.name} ${herb.latin} ${herb.hebrewPart} ${herb.summary} ${herb.functions.join(' ')}`.toLowerCase();
                    if (searchString.includes(query)) {
                        herbsResults.push({ catKey: catKey, catTitle: cat.title, herb: herb });
                    }
                });
            });
        }
    }

    let html = `<h2 style="text-align:center; color: var(--ink); margin-bottom: 30px;">תוצאות חיפוש עבור: "${query}"</h2>`;
    
    if (herbsResults.length > 0) {
        html += `<h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">צמחי מרפא בודדים (${herbsResults.length})</h3>
                 <div style="margin-bottom: 40px;">`;
        herbsResults.forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #00b894;" onclick="openHerbsCategory('${res.catKey}')">
                    <div class="patho-title"><strong>🌿 ${res.herb.name} (${res.herb.latin})</strong> <span style="font-size:0.85rem; color:#777;">(${res.catTitle})</span></div>
                    <p style="margin-bottom: 5px;"><strong>טעם וטמפ':</strong> ${res.herb.tasteTemp} | <strong>איברים:</strong> ${res.herb.organs}</p>
                    <p><strong>לסיכום:</strong> ${res.herb.summary}</p>
                </div>`;
        });
        html += `</div>`;
    }

    if (westernResults.length > 0) {
        html += `<h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">רפואה מערבית - אורתופדיה (${westernResults.length})</h3>
                 <div class="topics-grid" style="margin-bottom: 40px;">`;
        westernResults.forEach(res => {
            const gradientStyle = `background: linear-gradient(135deg, ${res.item.color1} 0%, ${res.item.color2} 100%);`;
            html += `
                <div class="topic-card theme-box" onclick="openWesternArticle('${res.key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${res.item.icon || '🦴'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${res.item.title}</h3>
                        <p>${res.item.subtitle}</p>
                    </div>
                </div>`;
        });
        html += `</div>`;
    }

    if (theoryResults.length > 0) {
        html += `<h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">מאמרים ותיאוריה (${theoryResults.length})</h3>
                 <div class="topics-grid" style="margin-bottom: 40px;">`;
        theoryResults.forEach(res => {
            const gradientStyle = `background: linear-gradient(135deg, ${res.item.color1} 0%, ${res.item.color2} 100%);`;
            html += `
                <div class="topic-card theme-box" onclick="openArticle('${res.key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${res.item.icon || '📜'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${res.item.title}</h3>
                        <p>${res.item.subtitle}</p>
                    </div>
                </div>`;
        });
        html += `</div>`;
    }

    if (pathologyResults.length > 0) {
        html += `<h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">פתולוגיות וסינדרומים (${pathologyResults.length})</h3>
                 <div style="margin-bottom: 40px;">`;
        pathologyResults.forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer;" onclick="jumpToPathology('${res.elementKey}', '${res.organKey}')">
                    <div class="patho-title"><strong>${res.syn.name}</strong> <span style="font-size:0.8rem; color:#777;">(שייך ל-${res.organTitle})</span></div>
                    <p style="margin-bottom: 5px;"><strong>אטיולוגיה:</strong> ${res.syn.etiology}</p>
                    <p><strong>קליניקה:</strong> ${res.syn.symptoms}</p>
                </div>`;
        });
        html += `</div>`;
    }

    if (pointResults.length > 0) {
        html += `<h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">נקודות דיקור (${pointResults.length})</h3>
                 <div class="points-grid" style="margin-bottom: 40px;">`;
        html += pointResults.map(p => generateCard(p, true)).join('');
        html += `</div>`;
    }
    
    if (pointResults.length === 0 && theoryResults.length === 0 && pathologyResults.length === 0 && westernResults.length === 0 && herbsResults.length === 0) {
        html += `<p style="text-align:center; color:#777; font-size: 1.2rem;">לא נמצאו תוצאות לחיפוש זה.</p>`;
    }

    document.getElementById('content-area').innerHTML = html;
    document.getElementById('pointsDisplay').innerHTML = ''; 

    window.scrollTo(0, 0);

    const studyTools = document.getElementById('study-tools');
    const studyMenu = document.getElementById('study-menu');
    if (studyMenu) studyMenu.style.display = 'none';

    if (studyTools) {
        if (pointResults.length > 0) {
            studyTools.style.display = 'flex';
            document.getElementById('btn-flash-test').style.display = 'block';
            document.getElementById('btn-flash-solve').style.display = 'block';
            
            const clearBtn = document.getElementById('btn-flash-clear');
            if (clearBtn) clearBtn.style.display = 'block';
            
            const randomBtn = document.getElementById('btn-random-card');
            if (randomBtn) randomBtn.style.display = 'none';
            
            document.getElementById('btn-smart-quiz').style.display = 'none';
        } else {
            studyTools.style.display = 'none';
        }
    }
}

function jumpToPathology(elementKey, organKey) {
    openPathologies(); 
    setTimeout(() => {
        const elBtn = document.querySelector(`.element-tab[onclick*="${elementKey}"]`);
        if (elBtn) showElement(elementKey, elBtn);
        setTimeout(() => {
            const orgBtn = document.querySelector(`.organ-tab[onclick*="${organKey}"]`);
            if (orgBtn) showOrganPathology(elementKey, organKey, orgBtn);
        }, 10); 
    }, 10);
}

// פונקציה חדשה לקפיצה ישירה לנקודה מתוך רשימת המועדפים בפרופיל
window.jumpToFavoritePoint = function(pointId) {
    if (!pointId) return;
    const prefix = pointId.split('-')[0];
    if (typeof data !== 'undefined' && data[prefix]) {
        openPage(prefix);
        setTimeout(() => {
            const card = document.getElementById(`container-${pointId}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.boxShadow = '0 0 25px rgba(241, 196, 15, 0.9)';
                setTimeout(() => { card.style.boxShadow = ''; }, 1800);
            }
        }, 150);
    }
};