// === קובץ app.js (קובץ הליבה) ===
// מנהל את הזיכרון והניווט בין כל העמודים באתר

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
    
    // 1. ניקוי המפה והחזרת תצוגת הרשת
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'grid';

    // 2. הסרת כלי המפתחים (x/y)
    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

    // 3. איפוס כפתור המפה
    const mapToggleBtn = document.getElementById('btn-toggle-map');
    if (mapToggleBtn) {
        mapToggleBtn.style.display = 'none';
        mapToggleBtn.innerText = '🗺️ מפה אינטראקטיבית';
        mapToggleBtn.style.background = 'linear-gradient(135deg, #16a085 0%, #1abc9c 100%)';
    }

    // 4. לוגיקת תצוגת דף הבית
    document.getElementById('welcome-view').style.display = 'block';
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('globalSearch').placeholder = 'חיפוש חומר עיוני ופתולוגיות...';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('btn-home').classList.add('active-menu');
    
    // 5. עדכון נראות תפריט הבחינה (יוסתר אוטומטית בדף הבית)
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openPage(id) {
    saveCurrentScroll();
    currentView = id;

    // 1. בכל מעבר דף - המפה נסגרת וחוזרים לכרטיסיות כברירת מחדל
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'grid';

    // 2. ניקוי ה-tracker
    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

    // 3. איפוס כפתור המפה (טקסט וצבע)
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
        <div class="id-badge">
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

function openPathologies() {
    saveCurrentScroll();
    currentView = 'pathologies';

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('globalSearch').placeholder = 'חיפוש חומר עיוני ופתולוגיות...';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('btn-pathologies').classList.add('active-menu');

    let elementTabsHtml = `<div class="patho-tabs element-tabs">`;
    let isFirstElement = true;
    let firstElementKey = '';

    Object.keys(pathologiesData).forEach(elementKey => {
        if (isFirstElement) firstElementKey = elementKey;
        
        elementTabsHtml += `
            <button class="patho-tab element-tab ${isFirstElement ? 'active-tab' : ''}" 
                    onclick="showElement('${elementKey}', this)">
                ${pathologiesData[elementKey].icon} ${pathologiesData[elementKey].title}
            </button>`;
        isFirstElement = false;
    });
    elementTabsHtml += `</div>`;

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 25px;">אינדקס מעברים ופתולוגיות</h1>
        ${elementTabsHtml}
        <div id="element-content-area"></div> 
    `;
    
    if (firstElementKey) {
        showElement(firstElementKey, document.querySelector('.element-tab.active-tab'));
    }
    
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function showElement(elementKey, btnElement) {
    document.querySelectorAll('.element-tab').forEach(btn => btn.classList.remove('active-tab'));
    if (btnElement) btnElement.classList.add('active-tab');

    const elementData = pathologiesData[elementKey];

    let html = `
        <div class="theory-box" style="border-top-color: ${elementData.themeColor || 'var(--ink)'}">
            ${elementData.theory}
        </div>
    `;

    let organTabsHtml = `<div class="patho-tabs organ-tabs" style="margin-top: 30px;">`;
    let isFirstOrgan = true;
    let firstOrganKey = '';

    Object.keys(elementData.organs).forEach(organKey => {
        if (isFirstOrgan) firstOrganKey = organKey;
        
        organTabsHtml += `
            <button class="patho-tab organ-tab ${isFirstOrgan ? 'active-tab' : ''}" 
                    onclick="showOrganPathology('${elementKey}', '${organKey}', this)">
                ${elementData.organs[organKey].icon} ${elementData.organs[organKey].shortName}
            </button>`;
        isFirstOrgan = false;
    });
    organTabsHtml += `</div>`;
    html += organTabsHtml;
    html += `<div id="organ-content-area"></div>`;

    document.getElementById('element-content-area').innerHTML = html;

    if (firstOrganKey) {
        showOrganPathology(elementKey, firstOrganKey, document.querySelector('.organ-tab.active-tab'));
    }
}

function showOrganPathology(elementKey, organKey, btnElement) {
    document.querySelectorAll('.organ-tab').forEach(btn => btn.classList.remove('active-tab'));
    if (btnElement) btnElement.classList.add('active-tab');

    const organ = pathologiesData[elementKey].organs[organKey];
    
    let html = `
        <div class="theory-box organ-theory">
            <h2 style="color: var(--ink); margin-top: 0;">${organ.title}</h2>
            ${organ.theory}
        </div>
        <h3 style="color: var(--ink); margin-top: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px;">סינדרומים עיקריים</h3>
    `;

    organ.syndromes.forEach(syn => {
        let tongueHtml = syn.tongue ? `<div>👅 <strong>לשון:</strong> ${syn.tongue}</div>` : '';
        let pulseHtml = syn.pulse ? `<div>💓 <strong>דופק:</strong> ${syn.pulse}</div>` : '';
        let treatmentHtml = syn.treatment ? `🎯 עקרון טיפולי: ${syn.treatment}<br>` : '';
        let pointsHtml = syn.points ? `📍 נקודות מובילות: ${syn.points}` : '';
        
        let gridHtml = (tongueHtml || pulseHtml) ? `<div class="patho-grid">${tongueHtml}${pulseHtml}</div>` : '';
        let bottomHtml = (treatmentHtml || pointsHtml) ? `<div class="patho-points">${treatmentHtml}${pointsHtml}</div>` : '';

        html += `
            <div class="patho-card">
                <div class="patho-title"><strong>${syn.name}</strong></div>
                <p><strong>אטיולוגיה:</strong> ${syn.etiology}</p>
                <p><strong>קליניקה:</strong> ${syn.symptoms}</p>
                ${gridHtml}
                ${bottomHtml}
            </div>
        `;
    });

    document.getElementById('organ-content-area').innerHTML = html;
}

function openFundamentals() {
    saveCurrentScroll();
    currentView = 'fundamentals';

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('globalSearch').placeholder = 'חיפוש חומר עיוני ופתולוגיות...';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('btn-fundamentals').classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';
    Object.keys(theoryData).forEach(key => {
       if (key === 'layers' || key === 'pathogens' || key === 'bigpicture' || key === 'theoretical_exam' || key === 'practical_exam') return;
        const item = theoryData[key];
        const gradientStyle = `background: linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%);`;

        cardsHTML += `
            <div class="topic-card" onclick="openArticle('${key}')">
                <div class="topic-gradient-header" style="${gradientStyle}">
                    <div class="topic-icon-floating">${item.icon || '📜'}</div>
                </div>
                <div class="topic-card-content">
                    <h3>${item.title}</h3>
                    <p>${item.subtitle}</p>
                </div>
            </div>
        `;
    });
    cardsHTML += '</div>';

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 40px;">יסודות הרפואה הסינית</h1>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openArticle(articleId) {
    const article = theoryData[articleId];
    saveCurrentScroll();
    currentView = 'article_' + articleId;
    
    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    
    const specificBtn = document.getElementById('btn-' + articleId);
    if (specificBtn) {
        specificBtn.classList.add('active-menu');
    } else {
        const fundBtn = document.getElementById('btn-fundamentals');
        if (fundBtn) fundBtn.classList.add('active-menu');
    }
    
    document.getElementById('content-area').innerHTML = `
        <div class="article-container" style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); line-height: 1.8;">
            <h1 style="text-align: center; color: var(--ink); margin-bottom: 30px; font-size: 2rem;">${article.title}</h1>
            <div class="article-content" style="font-size: 1.1rem; color: #333;">
                ${article.content}
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openNatureFromTag(tag) {
    const map = { 
        'Mu': 'mu',
        'Luo': 'luo',
        'Xi-Cleft': 'xi',
        'Yuan': 'yuan',
        'Window of Heaven': 'window',
        'He-Sea': 'ancient', 
        'Jing-Well': 'ancient', 
        'Ying-Spring': 'ancient', 
        'Shu-Stream': 'ancient', 
        'Jing-River': 'ancient',
        'Hui': 'hui',
        'Horary': 'horary',
        'Command': 'command',
        'Sea of Grain': 'seagrain',
        'Sea of Blood': 'seablood',
        'Sea of Qi': 'hui', 
        'Tonification': 'tonification',
        'Sedation': 'sedation'
    };
    
    const target = Object.keys(map).find(k => tag.includes(k));
    if (target) openAllNatures(map[target]);
}

function openAllNatures(targetId = null) {
    saveCurrentScroll();
    currentView = 'nature';

    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    document.getElementById('globalSearch').placeholder = 'חיפוש חומר עיוני ופתולוגיות...';

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    
    const btnNature = document.getElementById('btn-nature');
    if (btnNature) btnNature.classList.add('active-menu');

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align:center; margin-bottom:40px;">אופי נקודות דיקור - מדריך מלא</h1>
        
        <div class="nature-section" id="sec-elements">
            <h2>נקודות חמש האלמנטים (Five Elements Points)</h2>
            <p>לכל מרידיאן יש נקודה המייצגת את אחד מחמשת האלמנטים. האנרגטיקה של האלמנט מעניקה לנקודה את תפקודה העיקרי:</p>
            <ul>
                <li><strong>עץ (Wood):</strong> אנרגטיקה של רוח, תנועה ושינוי. מטפלות ברוח חיצונית ופנימית, במצבים אקוטיים ומניעות סטגנציה.</li>
                <li><strong>אש (Fire):</strong> אנרגטיקה של חום. מסלקות חום מהאיבר.</li>
                <li><strong>אדמה (Earth):</strong> אנרגטיקה של איזון והרמוניה. מאזנות את האיבר/אלמנט.</li>
                <li><strong>מתכת (Metal):</strong> אנרגטיקה של יובש. מייבשות לחות.</li>
                <li><strong>מים (Water):</strong> אנרגטיקה של קור. מקררות חום.</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-ancient">
            <h2>הנקודות העתיקות (Wu Shu Xue - The Five Transporting Points)</h2>
            <p>ממוקמות בין המרפקים/ברכיים לקצות האצבעות. זרימת הצ'י בהן מתוארת כנהר המתגבר בעומק וברוחב:</p>
            <ul>
                <li><strong>● נקודות באר (Jing-Well):</strong> הצ'י שטחי וקטן ביותר. תפקוד: מצבים אקוטיים, איבוד הכרה, סילוק חום וסטגנציה מקצות המרידיאנים.</li>
                <li><strong>● נקודות מעיין (Ying-Spring):</strong> הצ'י מתחיל להחליק. תפקוד: סילוק חום מהאיבר/מרידיאן, מטפלות במחלות של ה-Yang (חום ושינויי צבע).</li>
                <li><strong>● נקודות פלג (Shu-Stream):</strong> הצ'י גועש וזורם. תפקוד: כבדות בגוף, כאבי מפרקים, מחלות המופיעות לסירוגין. במרידיאני ה-Yin הן גם נקודות המקור.</li>
                <li><strong>● נקודות נהר (Jing-River):</strong> הצ'י רחב ועמוק יותר. תפקוד: שיעול, אסטמה, שינויי קול, מחלות של גידים ועצמות.</li>
                <li><strong>● נקודות ים (He-Sea):</strong> הצ'י עמוק ומתאחד עם האיבר. תפקוד: צ'י מורד, חום בדם- (בעיות עור).</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-yuan">
            <h2>נקודות מקור (Yuan-Source)</h2>
            <p>בנקודות אלו ה-Yuan Qi (צ'י המקור) של האיבר זמין ביותר.</p>
            <p>במרידיאני Yin: זהות לנקודות הפלג. משמשות לחיזוק האיבר.</p>
            <p>במרידיאני Yang: נמצאות בין נקודות הפלג לנהר. משמשות לסילוק גורמי מחלה עודפים.</p>
        </div>

        <div class="nature-section" id="sec-luo">
            <h2>נקודות חיבור (Luo-Connecting)</h2>
            <p>נקודות בהן המרידיאן מתפצל ומחבר בין בן הזוג (Yin/Yang).</p>
            <p>תפקודים: 1. טיפול בבעיות של איבר בן הזוג. 2. טיפול בבעיות רגשיות. 3. טיפול בבעיות לאורך מסלול ה-Luo.</p>
        </div>

        <div class="nature-section" id="sec-mu">
            <h2>נקודות התראה (Mu-Front)</h2>
            <p>ממוקמות על החזה או הבטן, קרוב לאיבר עצמו.</p>
            <p>תפקוד: אבחון (רגישות למגע) וטיפול במצבים אקוטיים של האיבר.</p>
            <table class="mu-table">
                <tr><th>איבר</th><th>נקודת Mu</th><th>איבר</th><th>נקודת Mu</th></tr>
                <tr><td>ריאות (LU)</td><td>LU-1</td><td>מעי גס (LI)</td><td>ST-25</td></tr>
                <tr><td>לב (HT)</td><td>RN-14</td><td>מעי דק (SI)</td><td>RN-4</td></tr>
                <tr><td>מעטפת הלב (PC)</td><td>RN-17</td><td>מחמם משולש (TW)</td><td>RN-5</td></tr>
                <tr><td>קיבה (ST)</td><td>RN-12</td><td>שלפוחית שתן (BL)</td><td>RN-3</td></tr>
                <tr><td>טחול (SP)</td><td>LIV-13</td><td>כיס מרה (GB)</td><td>GB-24</td></tr>
                <tr><td>כליות (KID)</td><td>GB-25</td><td>כבד (LIV)</td><td>LIV-14</td></tr>
            </table>
        </div>

        <div class="nature-section" id="sec-xi">
            <h2>נקודות הצטברות (Xi-Cleft)</h2>
            <p>נקודות בהן ה-Qi והדם מצטברים ב"סדק".</p>
            <p>תפקוד: טיפול במצבים אקוטיים של המרידיאן או האיבר, וטיפול בכאב אקוטי. במרידיאני Yin מטפלות גם בעצירת דימומים.</p>
            <p>דוגמאות: LU-6, LI-7, ST-34, SI-6, BL-63, KID-5 וכו'.</p>
        </div>

        <div class="nature-section" id="sec-hui">
            <h2>נקודות השפעה (Hui-Gathering)</h2>
            <p>נקודות בעלות השפעה ספציפית על רקמות או תפקודים בגוף:</p>
            <ul>
                <li><strong>Zang (איברי Yin):</strong> נקודה LIV-13.</li>
                <li><strong>Fu (איברי Yang):</strong> נקודה RN-12.</li>
                <li><strong>Qi:</strong> נקודה RN-17.</li>
                <li><strong>דם (Blood):</strong> נקודה BL-17.</li>
                <li><strong>גידים:</strong> נקודה GB-34.</li>
                <li><strong>כלי דם:</strong> נקודה LU-9.</li>
                <li><strong>עצמות:</strong> נקודה BL-11.</li>
                <li><strong>מח עצם:</strong> נקודה GB-39.</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-window">
            <h2>נקודות אשנב לרקיע (Window of Heaven)</h2>
            <p>נקודות הממוקמות לרוב סביב הצוואר.</p>
            <p>תפקוד: ויסות המעבר של Qi ודם בין הגוף לראש, טיפול בבעיות רגשיות קשות ("חוסר תקשורת בין הגוף לנפש") ובעיות חושים (ראייה, שמיעה).</p>
            <p>דוגמאות: LU-3, ST-9, LI-18, SI-16, SI-17.</p>
        </div>

        <div class="nature-section" id="sec-horary">
            <h2>נקודות שעה (Horary)</h2>
            <p>נקודות המייצגות את אותו האלמנט (פאזה) של המרידיאן שעליו הן נמצאות (לדוגמה, נקודת אדמה על מרידיאן השייך לאלמנט האדמה).</p>
            <ul>
                <li><strong>תפקוד:</strong> חיזוק והדהוד התדר הבסיסי של המרידיאן, לרוב בשימוש בהתאמה לשעון הביולוגי (השעה בה המרידיאן בשיאו).</li>
                <li><strong>דוגמאות:</strong> SP-3 (נקודת אדמה על מרידיאן הטחול).</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-command">
            <h2>נקודות שליטה (Command Points)</h2>
            <p>נקודות בעלות השפעה חזקה וספציפית על אזורים אנטומיים נרחבים ומרכזיים בגוף.</p>
            <ul>
                <li><strong>תפקוד:</strong> טיפול בהפרעות ובמחלות באזורי הגוף שעליהם הן "שולטות", לרוב משולבות עם נקודות מקומיות להגברת ההשפעה הטיפולית.</li>
                <li><strong>דוגמאות:</strong> ST-36 (בטן), LI-4 (פנים ופה), LU-7 (עורף), BL-40 (גב תחתון), P-6 (בית חזה), DU-26 (השבת הכרה).</li>
            </ul>
        </div>

         <div class="nature-section" id="sec-tonification">
            <h2>נקודות חיזוק (Tonification Points)</h2>
            <p>נקודות המייצגות את פאזת ה"אמא" (Mother) של המרידיאן, על פי מעגל ההזנה/יצירה (Sheng cycle) של חמשת האלמנטים.</p>
            <ul>
                <li><strong>תפקוד:</strong> טיפול במצבי חסר (Deficiency) במרידיאן או באיבר, על ידי דיקור בטכניקת חיזוק של האלמנט המזין אותו.</li>
                <li><strong>דוגמאות:</strong> נקודת ה"אמא" של כל מרידיאן (לדוגמה, חיזוק מרידיאן השייך לאדמה על ידי דיקור נקודת האש שעליו).</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-sedation">
            <h2>נקודות פיזור / הרגעה (Sedation Points)</h2>
            <p>נקודות המייצגות את פאזת ה"בן" (Son) של המרידיאן, על פי מעגל ההזנה/יצירה של חמשת האלמנטים.</p>
            <ul>
                <li><strong>תפקוד:</strong> טיפול במצבי עודף (Excess) במרידיאן או באיבר, על ידי דיקור בטכניקת פיזור (reducing) כדי להעביר את האנרגיה העודפת אל האלמנט הבא.</li>
                <li><strong>דוגמאות:</strong> LU-5 (נקודת המים שהיא ה"בן" של מרידיאן הריאות השייך למתכת, ולכן מפזרת עודף בריאות).</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-seagrain">
            <h2>ים הדגנים (Sea of Grain)</h2>
            <p>נקודות המרכיבות את אחד מ"ארבעת הימים", מקושרות לייצור והפצה של אנרגיה מתוך עיכול של מזון ושתייה.</p>
            <ul>
                <li><strong>תפקוד:</strong> איזון מצבי עודף במערכת העיכול (המתבטאים בתחושת מלאות בבטן) או מצבי חסר (המתבטאים ברעב המלווה בחוסר יכולת לאכול).</li>
                <li><strong>דוגמאות:</strong> ST-30 (נקודה עליונה), ST-36 (נקודה תחתונה).</li>
            </ul>
        </div>

        <div class="nature-section" id="sec-seablood">
            <h2>ים הדם (Sea of Blood)</h2>
            <p>נקודות המרכיבות את אחד מ"ארבעת הימים", מקושרות למרידיאן ה-Chong (מרידיאן החוצה) ומרכזות את השפעת הדם בגוף.</p>
            <ul>
                <li><strong>תפקוד:</strong> ויסות מצב הדם. טיפול במצבי עודף (המתבטאים בתחושה שהגוף "גדול ממידותיו" וחוסר שקט) או חסר (תחושה שהגוף קטן ומצומצם).</li>
                <li><strong>דוגמאות:</strong> BL-11, ST-37, ST-39.</li>
            </ul>
        </div>
    `;

    if (targetId) {
        const el = document.getElementById('sec-' + targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
        setTimeout(() => {
            window.scrollTo({ top: scrollPositions['nature'] || 0, behavior: 'instant' });
        }, 10);
    }

    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}