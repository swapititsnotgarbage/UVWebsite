// === קובץ ui.js ===
// ריכוז פונקציות עיצוב, אינטראקציה וממשק משתמש

const elemNames = {
    'wood': 'עץ (Wood)',
    'fire': 'אש (Fire)',
    'earth': 'אדמה (Earth)',
    'metal': 'מתכת (Metal)',
    'water': 'מים (Water)'
};

function countItems(text) {
    if (!text || text.trim() === '' || text.trim() === '-') return 0;
    const numberBullets = text.match(/\d+\./g);
    if (numberBullets) return numberBullets.length;
    const brCount = (text.match(/<br>/g) || []).length;
    return brCount > 0 ? brCount + 1 : 1;
}

function generateCard(point, forceFront = false, isModal = false) {
    if (!point) return ''; 

    const isFlippedClass = (!forceFront && flippedCards.has(point.id)) ? 'is-flipped' : '';
    const elementName = elemNames[point.elm] || '';
    const funcCount = countItems(point.func);
    const indCount = countItems(point.ind);
    
    const tagsCount = (point.tags && Array.isArray(point.tags) && point.tags.length > 0) ? point.tags.length : '0';
    const displayFuncCount = funcCount > 0 ? funcCount : '0';
    const displayIndCount = indCount > 0 ? indCount : '0';

    const prefix = isModal ? 'modal-' : '';

    let tagsHtml = `<div id="${prefix}front-tags-${point.id}" style="display:none;"><span class="actual-text"></span></div>`;
    if (point.tags && Array.isArray(point.tags) && point.tags.length > 0) {
        tagsHtml = `<div id="${prefix}front-tags-${point.id}" style="margin-bottom:15px"><span class="actual-text">` + 
            point.tags.map(t => `<span class="tag" onclick="event.stopPropagation(); openNatureFromTag('${t}')">${t}</span>`).join('') + 
            `</span></div>`;
    }

    let imageHtml = point.img ? `<div class="point-image"><img src="${point.img}" alt="${point.id}"></div>` : '';
    let insideHtml = point.insideM ? `<div class="info-box loc"><span class="box-label">מסלולים פנימיים</span>${point.insideM}</div>` : '';

    return `
        <div class="flip-container ${isFlippedClass}" id="${prefix}container-${point.id}" data-id="${point.id}" onclick="toggleFlip('${point.id}', this)">
            <div class="flip-inner">
                <div class="flip-front">
                    <div class="card elm-${point.elm || 'none'}">
                        <div class="element-label" id="${prefix}front-elm-${point.id}" style="display: ${elementName ? 'block' : 'none'}"><span class="actual-text">${elementName}</span></div>
                        <div class="point-id">${point.id || ''}</div>
                        <div class="point-name">${point.name || ''}</div>
                        ${tagsHtml}
                        ${imageHtml}
                        <div class="info-box loc" id="${prefix}front-loc-${point.id}"><span class="box-label">מיקום</span><span class="actual-text">${point.loc || ''}</span></div>
                        ${insideHtml}
                        <div class="info-box func" id="${prefix}front-func-${point.id}"><span class="box-label">תפקוד</span><span class="actual-text">${point.func || ''}</span></div>
                        <div class="info-box ind" id="${prefix}front-ind-${point.id}"><span class="box-label">אינדיקציות</span><span class="actual-text">${point.ind || ''}</span></div>
                    </div>
                </div>
                <div class="flip-back">
                    <div class="back-id">${point.id || ''}</div>
                    <div class="back-name">${point.name || ''}</div>
                    
                    <div class="back-stats-form" onclick="event.stopPropagation()">
                        <div class="stat-header">🌍 אלמנט ${elementName ? '(1)' : '(אין)'}</div>
                        <input type="text" class="test-input" id="${prefix}test-elm-${point.id}" placeholder="הקלד אלמנט...">
                        
                        <div class="stat-header">🏷️ אופי (${tagsCount} תגיות)</div>
                        <input type="text" class="test-input" id="${prefix}test-tags-${point.id}" placeholder="הקלד אופי נקודה...">

                        <div class="stat-header">📍 מיקום</div>
                        <textarea class="test-input" id="${prefix}test-loc-${point.id}" placeholder="נסה להיזכר במיקום..."></textarea>
                        
                        <div class="stat-header">💡 תפקוד <span class="stat-count">${displayFuncCount} סעיפים</span></div>
                        <textarea class="test-input" id="${prefix}test-func-${point.id}" placeholder="הקלד תפקודים מרכזיים..."></textarea>
                        
                        <div class="stat-header">🎯 אינדיקציות <span class="stat-count">${displayIndCount} סעיפים</span></div>
                        <textarea class="test-input" id="${prefix}test-ind-${point.id}" placeholder="הקלד אינדיקציות מרכזיות..."></textarea>
                    </div>
                    
                    <button class="check-card-btn" onclick="event.stopPropagation(); checkCard('${point.id}', ${isModal})">בדוק אותי 🔍</button>
                </div>
            </div>
        </div>
    `;
}

function toggleFlip(id, el) {
    el.classList.toggle('is-flipped');
    if (el.classList.contains('is-flipped')) {
        flippedCards.add(id);
    } else {
        flippedCards.delete(id);
    }
}

function flipAllCards(isTestMode) {
    const cards = document.querySelectorAll('.flip-container');
    cards.forEach(card => {
        const id = card.getAttribute('data-id');
        if (isTestMode) {
            card.classList.add('is-flipped'); 
            if (id) flippedCards.add(id);
        } else {
            card.classList.remove('is-flipped'); 
            if (id) flippedCards.delete(id);
        }
    });
}

function getPointDataById(id) {
    for (let key in data) {
        let p = data[key].points.find(x => x.id === id);
        if (p) return p;
    }
    return null;
}

function highlightMatchingWords(originalHtml, typedText) {
    if (!typedText || typedText.trim() === '') return originalHtml;
    
    const stopWords = ['של', 'עם', 'על', 'את', 'גם', 'או'];
    let words = typedText.split(/[\s,.-]+/).filter(w => w.length > 1 && !stopWords.includes(w));
    
    if (words.length === 0) return originalHtml;

    let result = originalHtml.replace(/<br\s*[\/]?>/gi, '\n');
    
    words.forEach(w => {
        let escapedWord = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let regex = new RegExp(`(${escapedWord})`, 'gi');
        result = result.replace(regex, `%%HL%%$1%%ENDHL%%`);
    });

    result = result.replace(/\n/g, '<br>')
                   .replace(/%%HL%%/g, '<span class="highlight-match">')
                   .replace(/%%ENDHL%%/g, '</span>');
    return result;
}

function checkCard(pointId, isModal = false) {
    const pData = getPointDataById(pointId);
    if (!pData) return;

    const prefix = isModal ? 'modal-' : '';

    const typedElm = document.getElementById(`${prefix}test-elm-${pointId}`).value;
    const typedTags = document.getElementById(`${prefix}test-tags-${pointId}`).value;
    const typedLoc = document.getElementById(`${prefix}test-loc-${pointId}`).value;
    const typedFunc = document.getElementById(`${prefix}test-func-${pointId}`).value;
    const typedInd = document.getElementById(`${prefix}test-ind-${pointId}`).value;

    const pElementName = elemNames[pData.elm] || '';
    const highlightedElm = highlightMatchingWords(pElementName, typedElm);
    const elmContainer = document.querySelector(`#${prefix}front-elm-${pointId} .actual-text`);
    if (elmContainer) elmContainer.innerHTML = highlightedElm;

    let highlightedTagsHtml = '';
    if (pData.tags && pData.tags.length > 0) {
        highlightedTagsHtml = pData.tags.map(t => {
            let hlTag = highlightMatchingWords(t, typedTags);
            return `<span class="tag" onclick="event.stopPropagation(); openNatureFromTag('${t}')">${hlTag}</span>`;
        }).join('');
    }
    const tagsContainer = document.querySelector(`#${prefix}front-tags-${pointId} .actual-text`);
    if (tagsContainer) tagsContainer.innerHTML = highlightedTagsHtml;

    const highlightedLoc = highlightMatchingWords(pData.loc || '', typedLoc);
    const highlightedFunc = highlightMatchingWords(pData.func || '', typedFunc);
    const highlightedInd = highlightMatchingWords(pData.ind || '', typedInd);

    document.querySelector(`#${prefix}front-loc-${pointId} .actual-text`).innerHTML = highlightedLoc;
    document.querySelector(`#${prefix}front-func-${pointId} .actual-text`).innerHTML = highlightedFunc;
    document.querySelector(`#${prefix}front-ind-${pointId} .actual-text`).innerHTML = highlightedInd;

    // הפוך את הכרטיסייה בחזרה
    const container = document.getElementById(`${prefix}container-${pointId}`);
    if(container) container.classList.remove('is-flipped');
    flippedCards.delete(pointId);

    // אם אנחנו בתוך כרטיסייה אקראית
    if (isModal) {
        const nextBtn = document.getElementById('random-next-btn');
        if (nextBtn) {
            nextBtn.style.display = 'block';
            
            // גלול טיפה למטה כדי שיראו את הכפתור בקלות
            setTimeout(() => {
                nextBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 300);
        }
    }
}

function clearAllFlashcardInputs() {
    document.querySelectorAll('.test-input').forEach(input => input.value = '');
    flipAllCards(true);
    
    Object.keys(data).forEach(k => {
        data[k].points.forEach(p => {
            const locEl = document.querySelector(`#front-loc-${p.id} .actual-text`);
            if (locEl) locEl.innerHTML = p.loc || '';
            
            const funcEl = document.querySelector(`#front-func-${p.id} .actual-text`);
            if (funcEl) funcEl.innerHTML = p.func || '';
            
            const indEl = document.querySelector(`#front-ind-${p.id} .actual-text`);
            if (indEl) indEl.innerHTML = p.ind || '';
            
            const elmEl = document.querySelector(`#front-elm-${p.id} .actual-text`);
            if (elmEl) elmEl.innerHTML = elemNames[p.elm] || '';
            
            const tagsEl = document.querySelector(`#front-tags-${p.id} .actual-text`);
            if (tagsEl && p.tags) {
                tagsEl.innerHTML = p.tags.map(t => `<span class="tag" onclick="event.stopPropagation(); openNatureFromTag('${t}')">${t}</span>`).join('');
            }
        });
    });
}

function toggleSidebar() {
    document.body.classList.toggle('sidebar-closed');
    const btn = document.getElementById('sidebarToggle');
    btn.innerHTML = document.body.classList.contains('sidebar-closed') ? '◀' : '▶';
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

// ==========================================
// כלי למידה (תפריט בחינה)
// ==========================================

function toggleStudyMenu() {
    const menu = document.getElementById('study-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function updateStudyToolsVisibility() {
    const flashTestBtn = document.getElementById('btn-flash-test');
    const flashSolveBtn = document.getElementById('btn-flash-solve');
    const flashClearBtn = document.getElementById('btn-flash-clear');
    const randomCardBtn = document.getElementById('btn-random-card');
    const smartQuizBtn = document.getElementById('btn-smart-quiz');
    const mapToggleBtn = document.getElementById('btn-toggle-map'); 
    const studyTools = document.getElementById('study-tools');
    const studyMenu = document.getElementById('study-menu');

    const bpEmptyBtn = document.getElementById('btn-bp-empty');
    const bpFullBtn = document.getElementById('btn-bp-full');
    const bpCheckBtn = document.getElementById('btn-bp-check');

    if (!studyTools) return;

    // הסתרת הכפתור הצף לחלוטין בדף הבית, במבחן העיוני ובמבחן המעשי
    if (currentView === 'home' || currentView === 'article_theoretical_exam' || currentView === 'article_practical_exam') {
        studyTools.style.display = 'none';
        return;
    }

    studyTools.style.display = 'flex';
    if (studyMenu) studyMenu.style.display = 'none'; 

    // קודם כל נסתיר את כל הלחצנים של התפריט
    if (flashTestBtn) flashTestBtn.style.display = 'none';
    if (flashSolveBtn) flashSolveBtn.style.display = 'none';
    if (flashClearBtn) flashClearBtn.style.display = 'none';
    if (randomCardBtn) randomCardBtn.style.display = 'none';
    if (mapToggleBtn) mapToggleBtn.style.display = 'none'; 
    if (smartQuizBtn) smartQuizBtn.style.display = 'none';
    if (bpEmptyBtn) bpEmptyBtn.style.display = 'none';
    if (bpFullBtn) bpFullBtn.style.display = 'none';
    if (bpCheckBtn) bpCheckBtn.style.display = 'none';

    // עכשיו נציג רק את מה שצריך לפי הדף הנוכחי
    if (currentView === 'article_bigpicture') {
        if (bpEmptyBtn) bpEmptyBtn.style.display = 'block';
        if (bpFullBtn) bpFullBtn.style.display = 'block';
        if (bpCheckBtn) bpCheckBtn.style.display = 'block';
    } else if (currentView === 'pathologies' || currentView === 'fundamentals' || currentView.startsWith('article_')) {
        if (smartQuizBtn) smartQuizBtn.style.display = 'block';
    } else if (data[currentView]) {
        if (flashTestBtn) flashTestBtn.style.display = 'block';
        if (flashSolveBtn) flashSolveBtn.style.display = 'block';
        if (flashClearBtn) flashClearBtn.style.display = 'block';
        if (randomCardBtn) randomCardBtn.style.display = 'block';
        if (mapToggleBtn) mapToggleBtn.style.display = 'block'; 
    } else {
        studyTools.style.display = 'none';
    }
}

// פונקציות המבחן של התמונה הגדולה
function bpEmptyQuiz() {
    document.querySelectorAll('.interactive-table input').forEach(i => { 
        i.value = ''; 
        i.style.backgroundColor = '#fdfbf7'; 
        i.style.color = 'var(--ink)'; 
    });
    const menu = document.getElementById('study-menu');
    if (menu) menu.style.display = 'none';
}

function bpFullQuiz() {
    document.querySelectorAll('.interactive-table input').forEach(i => { 
        if(i.dataset.full) { 
            i.value = i.dataset.full; 
            i.style.backgroundColor = '#e2e3e5'; 
            i.style.color = '#383d41'; 
        } 
    });
    const menu = document.getElementById('study-menu');
    if (menu) menu.style.display = 'none';
}

function bpCheckQuiz() {
    document.querySelectorAll('.interactive-table input').forEach(i => { 
        if(!i.dataset.strict) return; 
        const u = i.value.replace(/[\s,]+/g, '').toUpperCase(); 
        const e = i.dataset.strict.replace(/[\s,]+/g, '').toUpperCase(); 
        if(u === '') { 
            i.style.backgroundColor = '#fdfbf7'; 
            i.style.color='var(--ink)'; 
        } else if(u === e) { 
            i.style.backgroundColor = '#d4edda'; 
            i.style.color='#155724'; 
        } else { 
            i.style.backgroundColor = '#f8d7da'; 
            i.style.color='#721c24'; 
        } 
    });
    const menu = document.getElementById('study-menu');
    if (menu) menu.style.display = 'none';
}
