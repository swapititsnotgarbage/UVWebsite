// ==========================================
// === קובץ app_clinic.js (v3 - מצב עיוור מתקדם) ===
// חדר מטופלים - רפואה סינית בלבד, ללא חשיפת האיבר לפני האבחון
// ==========================================

const CLINIC_STORAGE_KEY = 'uv_clinic_solved_v3';

let clinicFilter = 'all'; // 'all' | 'unsolved' | 'קל' | 'בינוני' | 'מתקדם'
let activeClinicCaseId = null;
let clinicStepAnswers = {};

function getSolvedClinicCases() {
    try {
        return JSON.parse(localStorage.getItem(CLINIC_STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
}

function markClinicCaseSolved(caseId) {
    const solved = getSolvedClinicCases();
    if (!solved.includes(caseId)) {
        solved.push(caseId);
        localStorage.setItem(CLINIC_STORAGE_KEY, JSON.stringify(solved));
    }
}

function injectClinicStyles() {
    if (document.getElementById('clinic-room-styles')) return;
    const style = document.createElement('style');
    style.id = 'clinic-room-styles';
    style.innerHTML = `
        .clinic-header-banner {
            background: linear-gradient(135deg, #2d3436 0%, #0984e3 100%);
            color: white;
            border-radius: 18px;
            padding: 26px 24px;
            text-align: center;
            margin-bottom: 24px;
            box-shadow: 0 6px 20px rgba(9, 132, 227, 0.18);
        }
        .clinic-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
        }
        .clinic-tab-btn {
            background: rgba(9, 132, 227, 0.08);
            color: var(--ink);
            border: 1px solid rgba(9, 132, 227, 0.25);
            padding: 8px 18px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            font-family: inherit;
            transition: all 0.2s;
        }
        .clinic-tab-btn.active, .clinic-tab-btn:hover {
            background: #0984e3;
            color: white !important;
        }
        body.dark-mode .clinic-tab-btn {
            background: rgba(116, 185, 255, 0.12);
            color: #f1f2f6;
        }
        .clinic-cases-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            gap: 18px;
        }
        .clinic-patient-card {
            border-radius: 16px;
            padding: 20px;
            cursor: pointer;
            border-right: 5px solid #0984e3;
            transition: transform 0.2s, box-shadow 0.2s;
            position: relative;
        }
        .clinic-patient-card.solved { border-right-color: #00b894; }
        .clinic-patient-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 22px rgba(0,0,0,0.1);
        }
        .clinic-badge {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: bold;
            padding: 3px 10px;
            border-radius: 12px;
            color: white;
        }
        .clinic-chart-box {
            border-radius: 18px;
            padding: 26px;
            margin-bottom: 22px;
            border-top: 5px solid #0984e3;
        }
        .clinic-vitals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 12px;
            margin-top: 16px;
        }
        .clinic-vital-item {
            background: rgba(9, 132, 227, 0.06);
            border: 1px solid rgba(9, 132, 227, 0.2);
            border-radius: 12px;
            padding: 12px 14px;
            font-size: 0.96rem;
        }
        body.dark-mode .clinic-vital-item {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.12);
        }
        .clinic-q-card {
            border-radius: 16px;
            padding: 22px;
            margin-bottom: 18px;
        }
        .clinic-opt-btn {
            display: block;
            width: 100%;
            text-align: right;
            padding: 12px 16px;
            margin-bottom: 10px;
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,0.15);
            background: rgba(0,0,0,0.02);
            color: var(--ink);
            font-size: 1rem;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s;
        }
        body.dark-mode .clinic-opt-btn {
            border-color: rgba(255,255,255,0.18);
            background: rgba(255,255,255,0.04);
            color: #f1f2f6;
        }
        .clinic-opt-btn:hover:not(:disabled) {
            background: rgba(9, 132, 227, 0.12);
            border-color: #0984e3;
        }
        .clinic-opt-btn.correct {
            background: rgba(46, 204, 113, 0.2) !important;
            border-color: #2ecc71 !important;
            font-weight: bold;
        }
        .clinic-opt-btn.wrong {
            background: rgba(214, 48, 49, 0.18) !important;
            border-color: #d63031 !important;
        }
        .clinic-exp-box {
            margin-top: 12px;
            padding: 12px 15px;
            border-radius: 10px;
            background: rgba(46, 204, 113, 0.1);
            border-right: 4px solid #2ecc71;
            font-size: 0.96rem;
            line-height: 1.6;
        }
        .clinic-exp-box.wrong-exp {
            background: rgba(214, 48, 49, 0.08);
            border-right-color: #d63031;
        }
    `;
    document.head.appendChild(style);
}

function getDifficultyColor(diff) {
    if (diff === 'מתקדם') return '#d63031';
    if (diff.includes('בינוני')) return '#e17055';
    return '#0984e3';
}

function openClinicRoom() {
    injectClinicStyles();
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'clinic_room';
    activeClinicCaseId = null;

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-clinic_room');
    if (btn) btn.classList.add('active-menu');

    renderClinicLobby();
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function setClinicFilter(filterType) {
    clinicFilter = filterType;
    renderClinicLobby();
}

function getFilteredClinicCases() {
    if (typeof clinicCasesData === 'undefined') return [];
    const solved = getSolvedClinicCases();
    if (clinicFilter === 'all') return clinicCasesData;
    if (clinicFilter === 'unsolved') return clinicCasesData.filter(c => !solved.includes(c.id));
    return clinicCasesData.filter(c => c.difficulty.includes(clinicFilter));
}

function openRandomClinicCase() {
    const filtered = getFilteredClinicCases();
    if (!filtered.length) return;
    const randomCase = filtered[Math.floor(Math.random() * filtered.length)];
    if (randomCase) openClinicCase(randomCase.id);
}

function resetClinicProgress() {
    if (!confirm('לאפס את סימון המטופלים שאובחנו?')) return;
    localStorage.removeItem(CLINIC_STORAGE_KEY);
    renderClinicLobby();
}

function renderClinicLobby() {
    if (typeof clinicCasesData === 'undefined') return;
    const solved = getSolvedClinicCases();
    const filtered = getFilteredClinicCases();

    const cardsHtml = filtered.map((c) => {
        const caseNum = clinicCasesData.findIndex(x => x.id === c.id) + 1;
        const isSolved = solved.includes(c.id);
        const badgeBg = isSolved ? '#00b894' : getDifficultyColor(c.difficulty);
        const topLabel = isSolved ? `✅ אובחן • ${c.categoryLabel}` : `תיק #${caseNum} • רמה: ${c.difficulty}`;

        return `
            <div class="clinic-patient-card theme-box ${isSolved ? 'solved' : ''}" onclick="openClinicCase('${c.id}')">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="clinic-badge" style="background:${badgeBg};">${topLabel}</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                    <span style="font-size:2rem;">${c.avatar}</span>
                    <div>
                        <h3 style="margin:0; color:var(--ink);">${c.patientName}</h3>
                        <div style="font-size:0.9rem; color:#636e72; font-weight:600;">${c.chiefComplaint}</div>
                    </div>
                </div>
                <p style="font-size:0.88rem; color:#636e72; margin:8px 0 0 0; line-height:1.45;">
                    ${c.story.slice(0, 92)}...
                </p>
            </div>
        `;
    }).join('');

    document.getElementById('content-area').innerHTML = `
        <div class="clinic-header-banner">
            <span style="background:rgba(255,255,255,0.2); padding:4px 14px; border-radius:20px; font-size:0.85rem; font-weight:bold;">אבחון עיוור • ללא חשיפת האיבר • ללא צמחים</span>
            <h1 style="margin:12px 0 8px 0; color:white;">🏥 חדר מטופלים – אתגר קליני</h1>
            <p style="margin:0; opacity:0.95;">נתח בעצמך לשון, דופק ותסמינים, זהה את הפתולוגיה והבחן בין נקודות דומות. אובחנו עד כה: <strong>${solved.length} / ${clinicCasesData.length}</strong></p>
        </div>

        <div class="clinic-controls">
            <button class="clinic-tab-btn ${clinicFilter === 'all' ? 'active' : ''}" onclick="setClinicFilter('all')">הכל (${clinicCasesData.length})</button>
            <button class="clinic-tab-btn ${clinicFilter === 'unsolved' ? 'active' : ''}" onclick="setClinicFilter('unsolved')">🆕 טרם אובחנו (${clinicCasesData.length - solved.length})</button>
            <button class="clinic-tab-btn ${clinicFilter === 'קל' ? 'active' : ''}" onclick="setClinicFilter('קל')">קל</button>
            <button class="clinic-tab-btn ${clinicFilter === 'בינוני' ? 'active' : ''}" onclick="setClinicFilter('בינוני')">בינוני</button>
            <button class="clinic-tab-btn ${clinicFilter === 'מתקדם' ? 'active' : ''}" onclick="setClinicFilter('מתקדם')">🔥 מתקדם</button>
            <button class="clinic-tab-btn" style="background:#6c5ce7; color:white; border-color:#6c5ce7;" onclick="openRandomClinicCase()">🎲 מטופל אקראי</button>
            ${solved.length > 0 ? `<button class="clinic-tab-btn" onclick="resetClinicProgress()">🔄 אפס התקדמות</button>` : ''}
        </div>

        <div class="clinic-cases-grid">${cardsHtml || '<p style="text-align:center; grid-column:1/-1;">אין מטופלים בקטגוריה זו.</p>'}</div>
    `;
}

function openClinicCase(caseId) {
    const c = clinicCasesData.find(item => item.id === caseId);
    if (!c) return;
    activeClinicCaseId = caseId;
    clinicStepAnswers = {};
    renderActiveClinicCase(c);
    window.scrollTo(0, 0);
}

function toggleClinicHint() {
    const el = document.getElementById('clinic-hint-box');
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function answerClinicQuestion(stepIdx, optIdx) {
    if (clinicStepAnswers[stepIdx] !== undefined) return;
    const c = clinicCasesData.find(item => item.id === activeClinicCaseId);
    if (!c) return;

    clinicStepAnswers[stepIdx] = optIdx;
    if (Object.keys(clinicStepAnswers).length === c.questions.length) {
        markClinicCaseSolved(c.id);
    }
    renderActiveClinicCase(c);
}

function renderActiveClinicCase(c) {
    const allAnswered = Object.keys(clinicStepAnswers).length === c.questions.length;
    const currentIdx = clinicCasesData.findIndex(item => item.id === c.id);
    const nextCase = clinicCasesData[(currentIdx + 1) % clinicCasesData.length];

    // בתיק הפתוח לא חושפים את האיבר עד שהמשתמש סיים לענות על כל השאלות!
    const headerBadgeText = allAnswered ? `✅ ${c.categoryLabel}` : `תיק #${currentIdx + 1} • רמה: ${c.difficulty}`;
    const headerBadgeBg = allAnswered ? '#00b894' : getDifficultyColor(c.difficulty);

    const questionsHtml = c.questions.map((qObj, sIdx) => {
        const chosen = clinicStepAnswers[sIdx];
        const isAnswered = chosen !== undefined;
        const isCorrect = chosen === qObj.correct;

        const optsHtml = qObj.options.map((optText, oIdx) => {
            let cls = 'clinic-opt-btn';
            if (isAnswered) {
                if (oIdx === qObj.correct) cls += ' correct';
                else if (oIdx === chosen) cls += ' wrong';
            }
            return `<button class="${cls}" ${isAnswered ? 'disabled' : ''} onclick="answerClinicQuestion(${sIdx}, ${oIdx})">${optText}</button>`;
        }).join('');

        const expHtml = isAnswered ? `
            <div class="clinic-exp-box ${isCorrect ? '' : 'wrong-exp'}">
                <strong>${isCorrect ? '✅ תשובה מדויקת!' : '❌ לא מדויק – הנה ההסבר:'}</strong> ${qObj.exp}
            </div>
        ` : '';

        return `
            <div class="clinic-q-card theme-box">
                <div style="font-size:0.85rem; color:#0984e3; font-weight:bold; margin-bottom:6px;">${qObj.stepTitle}</div>
                <h3 style="margin:0 0 14px 0; color:var(--ink);">${qObj.q}</h3>
                ${optsHtml}
                ${expHtml}
            </div>
        `;
    }).join('');

    const bookBtnHtml = (c.chapterKey && typeof openMaciociaChapter === 'function')
        ? `<button class="clinic-tab-btn" style="background:#6c5ce7; color:white; border-color:#6c5ce7;" onclick="openMaciociaChapter('${c.chapterKey}')">📚 לחזרה ב${c.chapterLabel}</button>`
        : '';

    const finalSummaryHtml = allAnswered ? `
        <div class="theme-box" style="border-radius:16px; padding:22px; border-right:5px solid #6c5ce7; margin-top:20px;">
            <h3 style="margin-top:0; color:#6c5ce7;">📋 סיכום תיק ומסקנות קליניות (${c.categoryLabel})</h3>
            <p style="line-height:1.7; margin-bottom:16px;">${c.summary}</p>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <button class="clinic-tab-btn active" onclick="openClinicCase('${nextCase.id}')">למטופל הבא: ${nextCase.patientName} ⬅️</button>
                ${bookBtnHtml}
                <button class="clinic-tab-btn" onclick="openClinicRoom()">חזרה לחדר ההמתנה</button>
            </div>
        </div>
    ` : '';

    document.getElementById('content-area').innerHTML = `
        <button onclick="openClinicRoom()" style="background:var(--ink); color:#fff; padding:9px 18px; border:none; border-radius:8px; margin-bottom:18px; cursor:pointer;">⬅ חזור לחדר ההמתנה</button>

        <div class="clinic-chart-box theme-box">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="font-size:2.4rem;">${c.avatar}</span>
                    <div>
                        <h1 style="margin:0; font-size:1.6rem; color:var(--ink);">תיק מטופל: ${c.patientName}</h1>
                        <div style="color:#636e72; font-weight:bold;">תלונה עיקרית: ${c.chiefComplaint}</div>
                    </div>
                </div>
                <span class="clinic-badge" style="background:${headerBadgeBg}; font-size:0.88rem; padding:5px 14px;">${headerBadgeText}</span>
            </div>

            <div style="font-size:1.08rem; line-height:1.75; color:var(--ink); margin-bottom:14px;">
                <strong>📝 סיפור מקרה (אנמנזה):</strong><br>${c.story}
            </div>

            <div class="clinic-vitals-grid">
                <div class="clinic-vital-item"><strong>👅 לשון:</strong><br>${c.vitals.tongue}</div>
                <div class="clinic-vital-item"><strong>💓 דופק:</strong><br>${c.vitals.pulse}</div>
                <div class="clinic-vital-item"><strong>🔎 ממצאים נוספים:</strong><br>${c.vitals.extra}</div>
            </div>

            <div style="margin-top:16px;">
                <button class="clinic-tab-btn" onclick="toggleClinicHint()">💡 צריך רמז קליני?</button>
                <div id="clinic-hint-box" style="display:none; margin-top:10px; padding:12px 15px; border-radius:10px; background:rgba(253, 203, 110, 0.2); border-right:4px solid #fdcb6e;">
                    <strong>רמז:</strong> ${c.hint}
                </div>
            </div>
        </div>

        ${questionsHtml}
        ${finalSummaryHtml}
    `;
}