// ==========================================
// === קובץ app_pathology.js ===
// ניהול תצוגת קורס פתולוגיה (רפואה מערבית) וקישור אוטומטי לתמונות
// ==========================================

// מילון מונחי פתולוגיה -> שם קובץ התמונה בתיקיית public/images/pathology/
const pathologyImageMap = {
    // שיעור 1 - מבוא, תאים ודלקת
    'Biopsy': 'biopsy',
    'Histology': 'histology',
    'Cytology': 'cytology',
    'VZV': 'vzv',
    'Ischemia': 'ischemia',
    'Hypoxia': 'hypoxia',
    'Hyperplasia': 'hyperplasia',
    'Hypertrophy': 'hypertrophy',
    'Atrophy': 'atrophy',
    'Telomere Shortening': 'telomeres',
    'Free Radicals': 'free_radicals',
    'Necrosis': 'necrosis',
    'Apoptosis': 'apoptosis',
    'Inflammation': 'inflammation',
    'Fibrosis': 'fibrosis',

    // שיעור 2 - זיהומים וניאופלזיה
    'Sepsis': 'sepsis',
    'Septic Shock': 'septic_shock',
    'Abscess': 'abscess',
    'Bacteria': 'bacteria',
    'Fungi': 'fungi',
    'Protozoa': 'protozoa',
    'Helminths': 'helminths',
    'Dysbiosis': 'dysbiosis',
    'Metastasis': 'metastasis',
    'Adenoma': 'adenoma',
    'Carcinoma': 'carcinoma',
    'Sarcoma': 'sarcoma',
    'PET-CT': 'pet_ct',

    // שיעור 3 - כלי דם
    'Intima': 'blood_vessel',
    'Media': 'blood_vessel',
    'Adventitia': 'blood_vessel',
    'Edema': 'edema',
    'Ascites': 'ascites',
    'RAAS': 'raas',
    'Hypertension': 'hypertension',
    'Atherosclerosis': 'atherosclerosis',
    'Foam Cells': 'foam_cells',
    'PAD': 'pad',
    'Aortic Aneurysm': 'aortic_aneurysm',
    'Aortic Dissection': 'aortic_dissection',
    'Stent Graft': 'stent_graft',
    'Varicose Veins': 'varicose_veins',
    'Stasis Dermatitis': 'stasis_dermatitis',
    'DVT': 'dvt',
    'Pulmonary Embolism': 'pulmonary_embolism',
    'Embolism': 'embolism',
    'Stent Retriever': 'stent_retriever',
    'Vasculitis': 'vasculitis',

    // שיעור 4 - לב
    'Stable Angina': 'angina',
    'Unstable Angina': 'angina',
    'Myocardial Infarction': 'mi',
    'Stenosis': 'valve_stenosis',
    'Regurgitation': 'valve_regurgitation',
    'Prolapse': 'mitral_prolapse',
    'SA Node': 'heart_conduction',
    'AV Node': 'heart_conduction',
    'Atrial Fibrillation': 'afib',
    'Heart Block': 'av_block',
    'Ventricular Fibrillation': 'vfib',
    'Pericarditis': 'pericarditis',
    'Myocarditis': 'myocarditis',
    'Cardiomyopathy': 'cardiomyopathy',
    'Heart Failure': 'heart_failure',
    'LVAD': 'lvad',
    'Shock': 'shock'
};

function autoLinkPathologyTerms(htmlContent) {
    const container = document.createElement('div');
    container.innerHTML = htmlContent;

    const terms = Object.keys(pathologyImageMap).sort((a, b) => b.length - a.length);
    const escapedTerms = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'g');

    function walkTextNodes(node) {
        if (node.nodeType === 3) {
            const text = node.nodeValue;
            if (regex.test(text)) {
                const spanWrapper = document.createElement('span');
                spanWrapper.innerHTML = text.replace(regex, (match) => {
                    const imgFile = pathologyImageMap[match];
                    return `<span class="img-hover-term" onclick="enlargeImage('images/pathology/${imgFile}')" title="לחץ להצגת תמונה של ${match}">${match}</span>`;
                });
                node.replaceWith(...spanWrapper.childNodes);
            }
        } else if (node.nodeType === 1 && !node.classList.contains('img-hover-term') && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
            Array.from(node.childNodes).forEach(walkTextNodes);
        }
    }

    walkTextNodes(container);
    return container.innerHTML;
}

function openPathologyWesternIndex() {
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'pathology_western_index';

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-pathology_western_index');
    if (btn) btn.classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';

    if (typeof pathologyWesternData !== 'undefined') {
        Object.keys(pathologyWesternData).forEach(key => {
            const item = pathologyWesternData[key];
            const gradientStyle = `background: linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%);`;

            cardsHTML += `
                <div class="topic-card theme-box" onclick="openPathologyWesternArticle('${key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${item.icon || '🔬'}</div>
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
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 40px;">רפואה מערבית – קורס פתולוגיה</h1>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openPathologyWesternArticle(articleId) {
    if (typeof pathologyWesternData === 'undefined' || !pathologyWesternData[articleId]) {
        console.error('Pathology article not found:', articleId);
        return;
    }

    const article = pathologyWesternData[articleId];
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'pathology_western_' + articleId;

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const specificBtn = document.getElementById('btn-pathology_western_index');
    if (specificBtn) specificBtn.classList.add('active-menu');

    const linkedContent = autoLinkPathologyTerms(article.content);

    document.getElementById('content-area').innerHTML = `
        <button onclick="openPathologyWesternIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">⬅ חזור לאינדקס פתולוגיה</button>
        <div class="article-container theme-box">
            <div style="background: linear-gradient(135deg, ${article.color1} 0%, ${article.color2} 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; color: white; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="font-size: 3rem; margin-bottom: 10px;">${article.icon}</div>
                <h1 style="margin: 0 0 10px 0; font-size: 2.2rem; color: white;">${article.title}</h1>
                <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">${article.subtitle}</p>
            </div>
            
            <div class="article-content" style="font-size: 1.1rem; line-height: 1.7; color: var(--ink);">
                ${linkedContent}
            </div>
        </div>
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}