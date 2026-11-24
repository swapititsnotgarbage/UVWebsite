// ==========================================
// === קובץ search.js (Smart Search Engine v2.0) ===
// מנוע חיפוש חכם מאוחד לכל 7 מאגרי האתר:
// הבנת כוונה, אזורים אנטומיים, סינון צמחים, ניקוד קליני והשוואת "מול / vs"
// ==========================================

let searchDebounceTimer = null;

// --- מילוני ידע ל-AI המקומי ---
const STOP_WORDS = new Set([
    'של', 'על', 'את', 'עם', 'רק', 'כל', 'או', 'גם', 'כי', 'אם', 'לא', 'אין', 'יש',
    'הוא', 'היא', 'הם', 'הן', 'זה', 'זו', 'אלו', 'אשר', 'איזה', 'אילו', 'מה', 'איך',
    'שנמצאות', 'נמצאות', 'נמצא', 'נמצאים', 'שעובד', 'שעובדים', 'מטפל', 'מטפלים', 'לטיפול',
    'בתוך', 'אזור', 'באזור', 'הכי', 'יותר', 'פחות', 'כמו', 'בין', 'אצל', 'טוב', 'טובים'
]);

// מיפוי אזורים אנטומיים לנקודות דיקור
const ANATOMY_REGIONS = {
    face: {
        triggers: ['פנים', 'בפנים', 'הפנים', 'לפנים', 'פרצוף'],
        keywords: ['פנים', 'עין', 'עיניים', 'עפעף', 'אף', 'נחיר', 'לחי', 'לחיים', 'מצח', 'גבה', 'גבות', 'לסת', 'שפה', 'שפתיים', 'פה', 'רקה', 'רקות', 'אוזן', 'אוזניים', 'סנטר', 'זיגומה', 'סינוס']
    },
    head: {
        triggers: ['ראש', 'בראש', 'הראש', 'קודקוד', 'גולגולת'],
        keywords: ['ראש', 'קודקוד', 'וורטקס', 'עורף', 'מצח', 'רקה', 'אוקסיפוט', 'גולגולת', 'שיער', 'מוח']
    },
    neck: {
        triggers: ['צוואר', 'בצוואר', 'עורף', 'בעורף', 'גרון'],
        keywords: ['צוואר', 'עורף', 'גרון', 'לוע', 'שקד', 'C7', 'בסיס הגולגולת', 'קנה']
    },
    shoulder: {
        triggers: ['כתף', 'בכתף', 'כתפיים', 'שכמה', 'שכמות'],
        keywords: ['כתף', 'שכמה', 'אקרומיון', 'בריח', 'דלתואיד', 'זרוע עליונה']
    },
    arm_hand: {
        triggers: ['יד', 'ביד', 'ידיים', 'אמה', 'מרפק', 'אצבע', 'אצבעות', 'שורש כף היד'],
        keywords: ['יד', 'אמה', 'מרפק', 'זרוע', 'אגודל', 'אצבע', 'זרת', 'קמיצה', 'שורש כף היד', 'כף היד', 'רדיוס', 'אולנה']
    },
    chest: {
        triggers: ['חזה', 'בחזה', 'בית החזה', 'צלעות', 'שד'],
        keywords: ['חזה', 'סטרנום', 'צלע', 'צלעות', 'פטמה', 'שד', 'בין-צלעי', 'סרעפת', 'ריאות', 'לב']
    },
    abdomen: {
        triggers: ['בטן', 'בבטן', 'אפיגסטריום', 'טבור'],
        keywords: ['בטן', 'טבור', 'אפיגסטריום', 'מפשעה', 'חיק', 'פוביס', 'קיבה', 'מעיים', 'רחם']
    },
    back: {
        triggers: ['גב', 'בגב', 'עמוד שדרה', 'מותן', 'גב תחתון', 'ישבן'],
        keywords: ['גב', 'חוליה', 'חוליות', 'עמוד שדרה', 'סקרום', 'מותן', 'מותני', 'ישבן', 'עכוז', 'שכמה', 'Shu']
    },
    knee: {
        triggers: ['ברך', 'בברך', 'ברכיים', 'פיקה'],
        keywords: ['ברך', 'פיקה', 'פופליטאלי', 'שוקה', 'טיביה', 'פיבולה', 'קונדיל', 'מניסקוס']
    },
    leg_foot: {
        triggers: ['רגל', 'ברגל', 'רגליים', 'שוק', 'קרסול', 'כף רגל', 'בהונות'],
        keywords: ['רגל', 'ירך', 'שוק', 'קרסול', 'פטישון', 'מלאולוס', 'עקב', 'אכילס', 'כף רגל', 'בוהן', 'מטטרסוס', 'אצבעות הרגל']
    }
};

// גשר מונחים עברית <-> אנגלית/קודים
const BILINGUAL_SYNONYMS = {
    'כבד': ['liv', 'liver', 'כבד'],
    'לב': ['ht', 'he', 'heart', 'לב'],
    'ריאות': ['lu', 'lung', 'lungs', 'ריאות', 'ריאה'],
    'ריאה': ['lu', 'lung', 'ריאות', 'ריאה'],
    'טחול': ['sp', 'spleen', 'טחול'],
    'קיבה': ['st', 'stomach', 'קיבה'],
    'כליות': ['kid', 'ki', 'kidney', 'kidneys', 'כליות', 'כליה'],
    'כליה': ['kid', 'ki', 'kidney', 'כליות', 'כליה'],
    'מעי גס': ['li', 'large intestine', 'מעי גס'],
    'מעי דק': ['si', 'small intestine', 'מעי דק'],
    'כיס מרה': ['gb', 'gall bladder', 'gallbladder', 'כיס מרה'],
    'שלפוחית': ['ub', 'bl', 'bladder', 'שלפוחית'],
    'מעטפת הלב': ['pc', 'pericardium', 'מעטפת הלב'],
    'תלת מחמם': ['tw', 'tb', 'sj', 'triple burner', 'תלת מחמם'],
    'עץ': ['wood', 'עץ'],
    'אש': ['fire', 'אש'],
    'אדמה': ['earth', 'אדמה'],
    'מתכת': ['metal', 'מתכת'],
    'מים': ['water', 'מים'],
    'רוח': ['wind', 'רוח'],
    'קור': ['cold', 'קור', 'קר', 'קרה'],
    'חום': ['heat', 'חום', 'חם', 'חמה'],
    'לחות': ['damp', 'dampness', 'לחות'],
    'ליחה': ['phlegm', 'ליחה'],
    'יובש': ['dry', 'dryness', 'יובש', 'יבש'],
    'אינסומניה': ['insomnia', 'שינה', 'נדודי שינה', 'אינסומניה'],
    'שינה': ['insomnia', 'sleep', 'שינה', 'אינסומניה'],
    'מיגרנה': ['migraine', 'כאב ראש', 'רקות', 'מיגרנה'],
    'מא הואנג': ['ma huang'],
    'מה הואנג': ['ma huang'],
    'גוי גי': ['gui zhi'],
    'גוי זי': ['gui zhi'],
    'צאי הו': ['chai hu'],
    'באן שיה': ['ban xia'],
    'פו לינג': ['fu ling'],
    'בו הא': ['bo he'],
    'שנג גיאנג': ['sheng jiang']
};

// הזרקת סגנונות וצ'יפים מהירים בטעינת הדף
document.addEventListener('DOMContentLoaded', () => {
    injectSmartSearchUI();
});

// תמיכה גם במקרה שהסקריפט נטען דינמית אחרי DOMContentLoaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(injectSmartSearchUI, 100);
}

function injectSmartSearchUI() {
    if (document.getElementById('smart-search-styles')) return;

    const style = document.createElement('style');
    style.id = 'smart-search-styles';
    style.innerHTML = `
        .smart-chips-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin: 10px auto 0 auto;
            max-width: 850px;
        }
        .smart-chip {
            background: rgba(108, 92, 231, 0.08);
            color: var(--ink);
            border: 1px solid rgba(108, 92, 231, 0.25);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
        }
        .smart-chip:hover {
            background: #6c5ce7;
            color: white !important;
            transform: translateY(-1px);
        }
        body.dark-mode .smart-chip {
            background: rgba(162, 155, 254, 0.14);
            border-color: rgba(162, 155, 254, 0.35);
            color: #e0e0e0 !important;
        }
        body.dark-mode .smart-chip:hover {
            background: #6c5ce7;
            color: white !important;
        }
        .ai-summary-banner {
            background: linear-gradient(135deg, rgba(108, 92, 231, 0.1) 0%, rgba(0, 206, 201, 0.1) 100%);
            border: 1px solid rgba(108, 92, 231, 0.3);
            border-right: 5px solid #6c5ce7;
            border-radius: 14px;
            padding: 14px 20px;
            margin: 0 auto 25px auto;
            max-width: 950px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }
        .ai-badge {
            display: inline-block;
            background: #6c5ce7;
            color: white !important;
            font-size: 0.78rem;
            font-weight: bold;
            padding: 3px 10px;
            border-radius: 12px;
            margin-left: 6px;
        }
        .ai-score-pill {
            background: rgba(0, 184, 148, 0.15);
            color: #00b894 !important;
            border: 1px solid rgba(0, 184, 148, 0.4);
            font-size: 0.78rem;
            font-weight: bold;
            padding: 2px 9px;
            border-radius: 12px;
            white-space: nowrap;
        }
        .ai-snippet {
            font-size: 0.92rem;
            color: #555;
            margin-top: 6px;
            line-height: 1.5;
        }
        body.dark-mode .ai-snippet { color: #bbb !important; }
        .ai-highlight {
            background: #ffeaa7;
            color: #2d3436 !important;
            padding: 0 3px;
            border-radius: 4px;
            font-weight: bold;
        }
        body.dark-mode .ai-highlight {
            background: #d35400;
            color: #fff !important;
        }
        .compare-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .compare-card {
            border-top: 5px solid #6c5ce7;
            border-radius: 16px;
            padding: 22px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .search-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid rgba(108, 92, 231, 0.25);
            padding-bottom: 8px;
            margin: 30px 0 18px 0;
            color: var(--ink);
        }
    `;
    document.head.appendChild(style);

    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.placeholder = 'חיפוש חכם (Ctrl+K): "נקודות בפנים", "Ma Huang מול Gui Zhi", "צמחים מרים לכבד"...';
    }

    

    // קיצור מקלדת Ctrl + K לפתיחה ומיקוד של החיפוש מכל מקום באתר
    if (!window._smartSearchKeybound) {
        window._smartSearchKeybound = true;
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                const input = document.getElementById('globalSearch');
                if (input) {
                    input.focus();
                    input.select();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    }
}

window.runSmartChip = function(queryText) {
    const input = document.getElementById('globalSearch');
    if (!input) return;
    input.value = queryText;
    input.focus();
    executeSmartSearch(queryText);
};

// --- פונקציות סינון מקוריות (נשמרות לתאימות מלאה) ---
function toggleFilterMenu() {
    const menu = document.getElementById('filterMenu');
    if (menu) menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function filterBy(term) {
    const menu = document.getElementById('filterMenu');
    if (menu) menu.style.display = 'none';
    const input = document.getElementById('globalSearch');
    if (input) input.value = '';

    if (currentView !== 'search') {
        if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
        currentView = 'search';
    }

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    document.getElementById('content-area').innerHTML = `<h2 style="text-align:center">סינון: "${term}"</h2>`;

    let res = [];
    if (typeof data !== 'undefined') {
        Object.keys(data).forEach(k => {
            (data[k].points || []).forEach(p => {
                if (p.elm === term || (p.tags && p.tags.includes(term))) {
                    res.push(p);
                }
            });
        });
    }

    document.getElementById('pointsDisplay').innerHTML = res.map(p => generateCard(p, true)).join('');
    window.scrollTo(0, 0);
    updateSearchStudyTools(res.length > 0);
}

function updateSearchStudyTools(hasPoints) {
    const studyTools = document.getElementById('study-tools');
    const studyMenu = document.getElementById('study-menu');
    if (studyMenu) studyMenu.style.display = 'none';

    if (studyTools) {
        if (hasPoints) {
            studyTools.style.display = 'flex';
            const flashTest = document.getElementById('btn-flash-test');
            const flashSolve = document.getElementById('btn-flash-solve');
            const clearBtn = document.getElementById('btn-flash-clear');
            const randomBtn = document.getElementById('btn-random-card');
            const smartQuiz = document.getElementById('btn-smart-quiz');
            if (flashTest) flashTest.style.display = 'block';
            if (flashSolve) flashSolve.style.display = 'block';
            if (clearBtn) clearBtn.style.display = 'block';
            if (randomBtn) randomBtn.style.display = 'none';
            if (smartQuiz) smartQuiz.style.display = 'none';
        } else {
            studyTools.style.display = 'none';
        }
    }
}

// --- נקודת הכניסה הראשית מה-HTML (עם Debounce למהירות חלקה) ---
function handleSearch() {
    clearTimeout(searchDebounceTimer);
    const rawQuery = (document.getElementById('globalSearch')?.value || '').trim();

    if (rawQuery.length < 2) {
        if (currentView === 'search' && typeof goHome === 'function') {
            goHome();
        }
        return;
    }

    searchDebounceTimer = setTimeout(() => {
        executeSmartSearch(rawQuery);
    }, 160);
}

// --- עזרי עיבוד טקסט וניקוד ---
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeText(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/[\u0591-\u05C7]/g, '') // הסרת ניקוד
        .replace(/['"`׳״]/g, '')
        .trim();
}

// נרמול קוד נקודה (למשל st36 -> st-36)
function normalizePointCode(str) {
    return str.replace(/\b(lu|li|st|sp|ht|he|si|bl|ub|kid|ki|pc|tw|tb|gb|liv|ren|cv|du|gv)\s*(\d{1,2})\b/gi, '$1-$2');
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractSnippet(plainText, terms) {
    if (!plainText) return '';
    const lower = plainText.toLowerCase();
    let bestIdx = -1;
    for (const t of terms) {
        const idx = lower.indexOf(t.toLowerCase());
        if (idx !== -1) {
            bestIdx = idx;
            break;
        }
    }
    let start = bestIdx > 45 ? bestIdx - 45 : 0;
    let end = Math.min(plainText.length, start + 190);
    let snippet = (start > 0 ? '...' : '') + plainText.slice(start, end) + (end < plainText.length ? '...' : '');

    terms.filter(t => t.length >= 2).slice(0, 5).forEach(t => {
        try {
            const re = new RegExp(`(${escapeRegex(t)})`, 'gi');
            snippet = snippet.replace(re, '<span class="ai-highlight">$1</span>');
        } catch (e) {}
    });
    return snippet;
}

// --- מנתח הכוונה החכם (Smart Intent Parser) ---
function parseSmartQuery(rawQuery) {
    const normalized = normalizePointCode(normalizeText(rawQuery));

    const intent = {
        raw: rawQuery,
        normalized: normalized,
        scope: 'all', // all | points | herbs | syndromes | books | western | pathology
        anatomyRegion: null,
        anatomyLabel: null,
        anatomyKeywords: [],
        herbRank: null,
        safeInPregnancy: false,
        tokens: [],
        expandedGroups: [], // מערך של קבוצות מילים נרדפות (AND בין קבוצות, OR בתוך קבוצה)
        badges: []
    };

    let working = normalized;

    // 1. זיהוי סינון בטיחות בהריון לצמחים
    if (/(מותר בהריון|בלי הריון|בטוח בהריון|לא אסור בהריון)/.test(working)) {
        intent.safeInPregnancy = true;
        intent.scope = 'herbs';
        intent.badges.push('🤰 סינון: ללא אזהרת הריון');
        working = working.replace(/(מותר בהריון|בלי הריון|בטוח בהריון|לא אסור בהריון)/g, ' ');
    }

    // 2. זיהוי דרגת חשיבות של צמח (דרגה A / B / C)
    const rankMatch = working.match(/דרגה\s*([abc])/i);
    if (rankMatch) {
        intent.herbRank = rankMatch[1].toUpperCase();
        intent.scope = 'herbs';
        intent.badges.push(`🏅 דרגה ${intent.herbRank}`);
        working = working.replace(/דרגה\s*[abc]/gi, ' ');
    }

    // 3. זיהוי קטגוריית יעד (Intent Scope)
    if (/\b(נקודה|נקודות|דיקור|מרידיאן|points?)\b/.test(working)) {
        intent.scope = 'points';
        intent.badges.push('📍 מיקוד: נקודות דיקור');
        working = working.replace(/\b(נקודה|נקודות|דיקור|מרידיאן|points?)\b/g, ' ');
    } else if (/\b(צמח|צמחים|צמחי מרפא|פורמולה|herbs?)\b/.test(working)) {
        intent.scope = 'herbs';
        intent.badges.push('🌿 מיקוד: צמחי מרפא');
        working = working.replace(/\b(צמח|צמחים|צמחי מרפא|פורמולה|herbs?)\b/g, ' ');
    } else if (/\b(סינדרום|סינדרומים|תבנית|תבניות)\b/.test(working)) {
        intent.scope = 'syndromes';
        intent.badges.push('🩺 מיקוד: סינדרומים');
        working = working.replace(/\b(סינדרום|סינדרומים|תבנית|תבניות)\b/g, ' ');
    } else if (/\b(גובאני|ספר|פרק|maciocia)\b/.test(working)) {
        intent.scope = 'books';
        intent.badges.push('📚 מיקוד: ספר ג׳ובאני');
        working = working.replace(/\b(גובאני|ספר|פרק|maciocia)\b/g, ' ');
    } else if (/\b(אורתופדיה|אורטופדיה|מפרק)\b/.test(working)) {
        intent.scope = 'western';
        intent.badges.push('🦴 מיקוד: אורתופדיה');
        working = working.replace(/\b(אורתופדיה|אורטופדיה)\b/g, ' ');
    } else if (/\b(פתולוגיה מערבית|קורס פתולוגיה)\b/.test(working)) {
        intent.scope = 'pathology';
        intent.badges.push('🔬 מיקוד: פתולוגיה מערבית');
        working = working.replace(/\b(פתולוגיה מערבית|קורס פתולוגיה)\b/g, ' ');
    }

    // 4. זיהוי אזור אנטומי (למשל "פנים", "ברך", "גב")
    for (const [regionKey, regionData] of Object.entries(ANATOMY_REGIONS)) {
        for (const trig of regionData.triggers) {
            if (working.includes(trig)) {
                intent.anatomyRegion = regionKey;
                intent.anatomyLabel = trig;
                intent.anatomyKeywords = regionData.keywords;
                intent.badges.push(`🎯 אזור אנטומי: ${trig}`);
                if (intent.scope === 'all') {
                    // אם חיפשו אזור אנטומי מובהק עם "על" או "ב" – נציג הכל אך ניתן עדיפות גבוהה לנקודות
                    intent.anatomyBoost = true;
                }
                working = working.replace(new RegExp(escapeRegex(trig), 'g'), ' ');
                break;
            }
        }
        if (intent.anatomyRegion) break;
    }

    // 5. בדיקת ביטויים דו-מילתיים במילון הנרדפים (כמו "מעי גס", "כיס מרה", "מא הואנג")
    Object.keys(BILINGUAL_SYNONYMS).forEach(phrase => {
        if (phrase.includes(' ') && working.includes(phrase)) {
            intent.expandedGroups.push(BILINGUAL_SYNONYMS[phrase]);
            intent.tokens.push(phrase);
            working = working.replace(new RegExp(escapeRegex(phrase), 'g'), ' ');
        }
    });

    // 6. פירוק לשאר המילים המשמעותיות
    const rawWords = working.split(/[\s,.;:!?()]+/).filter(w => w.length >= 2 && !STOP_WORDS.has(w));
    rawWords.forEach(w => {
        // הסרת אותיות יחס נפוצות בעברית (ל, ב, מ, ה, ו) אם המילה ארוכה מספיק
        const baseWord = (w.length >= 4 && /^[לבמהוכש]/.test(w) && BILINGUAL_SYNONYMS[w.slice(1)])
            ? w.slice(1)
            : w;

        intent.tokens.push(w);
        if (BILINGUAL_SYNONYMS[baseWord]) {
            intent.expandedGroups.push([...new Set([w, ...BILINGUAL_SYNONYMS[baseWord]])]);
        } else if (w.length >= 4 && /^[לבמהו]/.test(w)) {
            intent.expandedGroups.push([w, w.slice(1)]);
        } else {
            intent.expandedGroups.push([w]);
        }
    });

    return intent;
}

// חישוב ציון התאמה לטקסט מול קבוצות הטוקנים
function scoreTextAgainstIntent(titleText, bodyText, intent) {
    const normTitle = normalizeText(titleText);
    const normBody = normalizeText(bodyText);
    const full = normTitle + ' ' + normBody;

    let score = 0;
    let matchedGroups = 0;

    // התאמה מדויקת לשם/כותרת
    if (intent.normalized && normTitle === intent.normalized) score += 150;
    else if (intent.normalized && normTitle.includes(intent.normalized)) score += 75;

    // בדיקת קבוצות המילים
    if (intent.expandedGroups.length > 0) {
        intent.expandedGroups.forEach(group => {
            let groupMatched = false;
            for (const term of group) {
                if (normTitle.includes(term)) {
                    score += 35;
                    groupMatched = true;
                    break;
                } else if (normBody.includes(term)) {
                    score += 18;
                    groupMatched = true;
                    break;
                }
            }
            if (groupMatched) matchedGroups++;
        });

        const ratio = matchedGroups / intent.expandedGroups.length;
        if (ratio === 1) score += 45; // בונוס גדול על התאמה לכל המילים!
        else if (ratio < 0.5 && intent.expandedGroups.length >= 2) {
            return { score: 0, pct: 0 }; // סינון רעש אם פחות מחצי מהמילים נמצאו
        }
    }

    // בדיקת אזור אנטומי (אם הוגדר)
    if (intent.anatomyKeywords.length > 0) {
        let anatHits = 0;
        intent.anatomyKeywords.forEach(kw => {
            if (full.includes(kw)) anatHits++;
        });
        if (anatHits === 0) return { score: 0, pct: 0 };
        score += Math.min(60, anatHits * 20);
    }

    // אם אין מילים בכלל (למשל רק "צמחים דרגה A" או "נקודות בפנים")
    if (intent.expandedGroups.length === 0 && intent.anatomyKeywords.length === 0 && !intent.herbRank && !intent.safeInPregnancy) {
        return { score: 0, pct: 0 };
    }

    const maxPossible = (intent.expandedGroups.length * 35) + 45 + (intent.anatomyKeywords.length > 0 ? 40 : 0);
    const pct = maxPossible > 0 ? Math.min(99, Math.max(45, Math.round((score / maxPossible) * 100))) : 100;

    return { score, pct };
}

// --- מצב השוואה מהירה ("מול" / "vs") ---
function handleComparisonSearch(leftRaw, rightRaw) {
    const findBestEntity = (q) => {
        const subIntent = parseSmartQuery(q);
        let best = null;

        // חיפוש בצמחים
        if (typeof herbsCategoriesData !== 'undefined') {
            Object.keys(herbsCategoriesData).forEach(catKey => {
                const cat = herbsCategoriesData[catKey];
                (cat.herbs || []).forEach(h => {
                    const res = scoreTextAgainstIntent(`${h.name} ${h.latin}`, `${h.hebrewPart} ${h.summary}`, subIntent);
                    if (res.score > (best?.score || 0)) {
                        best = { type: 'herb', score: res.score, item: h, catKey, catTitle: cat.title };
                    }
                });
            });
        }
        // חיפוש בנקודות
        if (typeof data !== 'undefined') {
            Object.keys(data).forEach(k => {
                (data[k].points || []).forEach(p => {
                    const res = scoreTextAgainstIntent(`${p.id} ${p.name}`, `${p.func || ''} ${p.ind || ''}`, subIntent);
                    if (res.score > (best?.score || 0)) {
                        best = { type: 'point', score: res.score, item: p, meridian: k };
                    }
                });
            });
        }
        // חיפוש בסינדרומים
        if (typeof pathologiesData !== 'undefined') {
            Object.keys(pathologiesData).forEach(elKey => {
                const el = pathologiesData[elKey];
                Object.keys(el.organs || {}).forEach(orgKey => {
                    (el.organs[orgKey].syndromes || []).forEach(syn => {
                        const res = scoreTextAgainstIntent(syn.name, `${syn.symptoms} ${syn.etiology}`, subIntent);
                        if (res.score > (best?.score || 0)) {
                            best = { type: 'syndrome', score: res.score, item: syn, elKey, orgKey, orgTitle: el.organs[orgKey].shortName };
                        }
                    });
                });
            });
        }
        return best;
    };

    const left = findBestEntity(leftRaw);
    const right = findBestEntity(rightRaw);

    const renderEntityCard = (entity, label) => {
        if (!entity) {
            return `<div class="compare-card theme-box"><h3>לא נמצאה התאמה עבור "${label}"</h3></div>`;
        }
        if (entity.type === 'herb') {
            const h = entity.item;
            return `
                <div class="compare-card theme-box" style="border-top-color: #00b894;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h2 style="margin:0; color:#00b894;">🌿 ${h.name}</h2>
                        <span class="ai-badge" style="background:#00b894;">דרגה ${h.rank || '-'}</span>
                    </div>
                    <p style="color:#777; margin:4px 0 12px 0;">${h.latin} • ${entity.catTitle}</p>
                    <p><strong>🔥 טעם וטמפ':</strong> ${h.tasteTemp}</p>
                    <p><strong>🎯 איברים:</strong> ${h.organs} | <strong>⚖️ מינון:</strong> ${h.dosage}</p>
                    <p><strong>📌 לסיכום:</strong> ${h.summary}</p>
                    <p><strong>⚡ תפקודים:</strong></p>
                    <ul style="padding-right:18px; margin-top:4px;">${(h.functions || []).map(f => `<li>${f}</li>`).join('')}</ul>
                    <p style="color:#d63031;"><strong>⛔ זהירות:</strong> ${h.contraindications || 'אין דגש מיוחד'}</p>
                    <button class="smart-chip" style="margin-top:10px;" onclick="openHerbsCategory('${entity.catKey}')">פתח קטגוריה מלאה ⬅️</button>
                </div>`;
        }
        if (entity.type === 'point') {
            const p = entity.item;
            return `
                <div class="compare-card theme-box" style="border-top-color: #0984e3;">
                    <h2 style="margin:0 0 6px 0; color:#0984e3;">📍 ${p.id} – ${p.name}</h2>
                    ${p.tags?.length ? `<p><strong>🏷️ קטגוריות:</strong> ${p.tags.join(', ')}</p>` : ''}
                    ${p.loc ? `<p><strong>🗺️ מיקום:</strong> ${p.loc}</p>` : ''}
                    <p><strong>⚡ תפקודים:</strong> ${p.func || ''}</p>
                    <p><strong>🩺 אינדיקציות:</strong> ${p.ind || ''}</p>
                    <button class="smart-chip" style="margin-top:10px;" onclick="window.jumpToFavoritePoint('${p.id}')">קפוץ לנקודה ⬅️</button>
                </div>`;
        }
        const s = entity.item;
        return `
            <div class="compare-card theme-box" style="border-top-color: #e17055;">
                <h2 style="margin:0 0 6px 0; color:#e17055;">🩺 ${s.name}</h2>
                <p style="color:#777; margin:0 0 12px 0;">איבר: ${entity.orgTitle}</p>
                <p><strong>אטיולוגיה:</strong> ${s.etiology || ''}</p>
                <p><strong>קליניקה:</strong> ${s.symptoms || ''}</p>
                ${s.treatment ? `<p><strong>טיפול:</strong> ${s.treatment}</p>` : ''}
                <button class="smart-chip" style="margin-top:10px;" onclick="jumpToPathology('${entity.elKey}', '${entity.orgKey}')">פתח בסינדרומים ⬅️</button>
            </div>`;
    };

    document.getElementById('content-area').innerHTML = `
        <div class="ai-summary-banner theme-box">
            <div><span class="ai-badge">⚔️ מצב השוואה חכם</span> השוואה ישירה בין <strong>"${leftRaw}"</strong> לבין <strong>"${rightRaw}"</strong></div>
            <button class="smart-chip" onclick="goHome()">✖ סגור השוואה</button>
        </div>
        <div class="compare-grid">
            ${renderEntityCard(left, leftRaw)}
            ${renderEntityCard(right, rightRaw)}
        </div>
    `;
    document.getElementById('pointsDisplay').innerHTML = '';
    updateSearchStudyTools(false);
    window.scrollTo(0, 0);
}

// --- מנוע החיפוש הראשי ---
function executeSmartSearch(rawQuery) {
    if (currentView !== 'search') {
        if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
        currentView = 'search';
    }

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));

    // בדיקת מצב השוואה ("מול" או "vs")
    const compareMatch = rawQuery.match(/^(.+?)\s+(?:מול|vs\.?|לעומת)\s+(.+)$/i);
    if (compareMatch) {
        handleComparisonSearch(compareMatch[1].trim(), compareMatch[2].trim());
        return;
    }

    const intent = parseSmartQuery(rawQuery);
    const showMatchScore = intent.expandedGroups.length >= 2;

    let pointResults = [];
    let herbsResults = [];
    let pathologyResults = [];
    let bookResults = [];
    let theoryResults = [];
    let westernResults = [];
    let westernPathologyResults = [];

    // 1. חיפוש בנקודות דיקור
    if ((intent.scope === 'all' || intent.scope === 'points') && typeof data !== 'undefined') {
        Object.keys(data).forEach(k => {
            const meridianTitle = data[k].title || k;
            (data[k].points || []).forEach(p => {
                const titleStr = `${p.id} ${p.name} ${k} ${meridianTitle}`;
                const bodyStr = `${p.loc || ''} ${p.location || ''} ${p.func || ''} ${p.ind || ''} ${(p.tags || []).join(' ')} ${p.elm || ''}`;
                let res = scoreTextAgainstIntent(titleStr, bodyStr, intent);
                if (res.score > 0) {
                    if (intent.anatomyBoost) res.score += 20;
                    pointResults.push({ p, score: res.score, pct: res.pct });
                }
            });
        });
        pointResults.sort((a, b) => b.score - a.score);
    }

    // 2. חיפוש בצמחי מרפא בודדים
    if ((intent.scope === 'all' || intent.scope === 'herbs') && typeof herbsCategoriesData !== 'undefined') {
        Object.keys(herbsCategoriesData).forEach(catKey => {
            const cat = herbsCategoriesData[catKey];
            (cat.herbs || []).forEach(herb => {
                if (intent.herbRank && (herb.rank || '').toUpperCase() !== intent.herbRank) return;
                if (intent.safeInPregnancy && /הריון|הפלה/.test(herb.contraindications || '')) return;

                const titleStr = `${herb.name} ${herb.latin} ${herb.hebrewPart || ''} ${cat.title}`;
                const bodyStr = `${herb.tasteTemp || ''} ${herb.organs || ''} ${herb.summary || ''} ${(herb.functions || []).join(' ')} ${herb.contraindications || ''} ${(herb.combinations || []).join(' ')}`;

                let res;
                if (intent.expandedGroups.length === 0 && (intent.herbRank || intent.safeInPregnancy)) {
                    res = { score: 80, pct: 100 };
                } else {
                    res = scoreTextAgainstIntent(titleStr, bodyStr, intent);
                }

                if (res.score > 0) {
                    herbsResults.push({ catKey, catTitle: cat.title, herb, score: res.score, pct: res.pct });
                }
            });
        });
        herbsResults.sort((a, b) => b.score - a.score);
    }

    // 3. חיפוש בסינדרומים ופתולוגיות סיניות
    if ((intent.scope === 'all' || intent.scope === 'syndromes') && typeof pathologiesData !== 'undefined') {
        Object.keys(pathologiesData).forEach(elKey => {
            const el = pathologiesData[elKey];
            Object.keys(el.organs || {}).forEach(orgKey => {
                const org = el.organs[orgKey];
                (org.syndromes || []).forEach(syn => {
                    const titleStr = `${syn.name} ${org.shortName || ''}`;
                    const bodyStr = `${syn.etiology || ''} ${syn.symptoms || ''} ${syn.treatment || ''} ${syn.tongue || ''} ${syn.pulse || ''}`;
                    const res = scoreTextAgainstIntent(titleStr, bodyStr, intent);
                    if (res.score > 0) {
                        pathologyResults.push({ elementKey: elKey, organKey: orgKey, organTitle: org.shortName, syn, score: res.score, pct: res.pct });
                    }
                });
            });
        });
        pathologyResults.sort((a, b) => b.score - a.score);
    }

    // 4. חיפוש בספר של ג'ובאני מצ'יוצ'יה (70 פרקים)
    if ((intent.scope === 'all' || intent.scope === 'books') && typeof maciociaBookData !== 'undefined') {
        Object.keys(maciociaBookData).forEach(key => {
            const ch = maciociaBookData[key];
            const plain = stripHtml(ch.content);
            const res = (intent.scope === 'books' && intent.expandedGroups.length === 0)
                ? { score: 60, pct: 100 }
                : scoreTextAgainstIntent(`${ch.title} ${ch.subtitle}`, plain, intent);
            if (res.score > 0) {
                bookResults.push({ key, item: ch, snippet: extractSnippet(plain, intent.tokens), score: res.score, pct: res.pct });
            }
        });
        bookResults.sort((a, b) => b.score - a.score);
    }

    // 5. חיפוש במאמרי תיאוריה (כולל 8 העקרונות)
    if (intent.scope === 'all' && typeof theoryData !== 'undefined') {
        Object.keys(theoryData).forEach(key => {
            const item = theoryData[key];
            const plain = stripHtml(item.content);
            const res = scoreTextAgainstIntent(`${item.title} ${item.subtitle}`, plain, intent);
            if (res.score > 0) {
                theoryResults.push({ key, item, snippet: extractSnippet(plain, intent.tokens), score: res.score, pct: res.pct });
            }
        });
        theoryResults.sort((a, b) => b.score - a.score);
    }

    // 6. חיפוש ברפואה מערבית – אורתופדיה
    if ((intent.scope === 'all' || intent.scope === 'western') && typeof westernData !== 'undefined') {
        Object.keys(westernData).forEach(key => {
            const item = westernData[key];
            const plain = stripHtml(item.content);
            const res = (intent.scope === 'western' && intent.expandedGroups.length === 0)
                ? { score: 60, pct: 100 }
                : scoreTextAgainstIntent(`${item.title} ${item.subtitle}`, plain, intent);
            if (res.score > 0) {
                westernResults.push({ key, item, snippet: extractSnippet(plain, intent.tokens), score: res.score, pct: res.pct });
            }
        });
        westernResults.sort((a, b) => b.score - a.score);
    }

    // 7. חיפוש בקורס פתולוגיה מערבית
    if ((intent.scope === 'all' || intent.scope === 'pathology') && typeof pathologyWesternData !== 'undefined') {
        Object.keys(pathologyWesternData).forEach(key => {
            const item = pathologyWesternData[key];
            const plain = stripHtml(item.content);
            const res = (intent.scope === 'pathology' && intent.expandedGroups.length === 0)
                ? { score: 60, pct: 100 }
                : scoreTextAgainstIntent(`${item.title} ${item.subtitle}`, plain, intent);
            if (res.score > 0) {
                westernPathologyResults.push({ key, item, snippet: extractSnippet(plain, intent.tokens), score: res.score, pct: res.pct });
            }
        });
        westernPathologyResults.sort((a, b) => b.score - a.score);
    }

    const totalCount = pointResults.length + herbsResults.length + pathologyResults.length +
        bookResults.length + theoryResults.length + westernResults.length + westernPathologyResults.length;

    // בניית כותרת סיכום חכמה
    const badgesHtml = intent.badges.map(b => `<span class="ai-badge">${b}</span>`).join('');
    let html = `
        <div class="ai-summary-banner theme-box">
            <div>
                <span class="ai-badge" style="background:#2d3436;">✨ חיפוש חכם</span>
                ${badgesHtml}
                <span style="font-weight:bold; margin-right:6px;">נמצאו ${totalCount} תוצאות עבור "${rawQuery}"</span>
            </div>
            <div style="font-size:0.85rem; color:#636e72;">טיפ: נסה להשוות עם המילה <strong>"מול"</strong> (לדוגמה: ST-36 מול SP-6)</div>
        </div>
    `;

    // הצגת נקודות דיקור ראשונות אם הוגדר אזור אנטומי או מיקוד נקודות
    const renderPointsSection = () => {
        if (pointResults.length === 0) return '';
        return `
            <h3 class="search-section-header"><span>📍 נקודות דיקור (${pointResults.length})</span></h3>
            <div class="points-grid" style="margin-bottom: 35px;">
                ${pointResults.slice(0, 40).map(r => generateCard(r.p, true)).join('')}
            </div>`;
    };

    if (intent.scope === 'points' || intent.anatomyBoost) {
        html += renderPointsSection();
    }

    if (herbsResults.length > 0) {
        html += `<h3 class="search-section-header"><span>🌿 צמחי מרפא בודדים (${herbsResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        herbsResults.slice(0, 30).forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #00b894;" onclick="openHerbsCategory('${res.catKey}')">
                    <div class="patho-title" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
                        <div><strong>🌿 ${res.herb.name} (${res.herb.latin})</strong> <span style="font-size:0.85rem; color:#777;">• ${res.catTitle} • דרגה ${res.herb.rank || '-'}</span></div>
                        ${showMatchScore ? `<span class="ai-score-pill">${res.pct}% התאמה</span>` : ''}
                    </div>
                    <p style="margin: 5px 0;"><strong>טעם וטמפ':</strong> ${res.herb.tasteTemp} | <strong>איברים:</strong> ${res.herb.organs} | <strong>מינון:</strong> ${res.herb.dosage}</p>
                    <p style="margin: 0;"><strong>לסיכום:</strong> ${res.herb.summary}</p>
                </div>`;
        });
        html += `</div>`;
    }

    if (pathologyResults.length > 0) {
        html += `<h3 class="search-section-header"><span>🩺 סינדרומים ופתולוגיות סיניות (${pathologyResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        pathologyResults.slice(0, 20).forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer;" onclick="jumpToPathology('${res.elementKey}', '${res.organKey}')">
                    <div class="patho-title" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
                        <div><strong>${res.syn.name}</strong> <span style="font-size:0.85rem; color:#777;">(${res.organTitle})</span></div>
                        ${showMatchScore ? `<span class="ai-score-pill">${res.pct}% התאמה</span>` : ''}
                    </div>
                    <p style="margin: 5px 0;"><strong>אטיולוגיה:</strong> ${res.syn.etiology}</p>
                    <p style="margin: 0;"><strong>קליניקה:</strong> ${res.syn.symptoms}</p>
                </div>`;
        });
        html += `</div>`;
    }

    if (bookResults.length > 0) {
        html += `<h3 class="search-section-header"><span>📚 ספר ג׳ובאני – The Foundations (${bookResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        bookResults.slice(0, 15).forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #6c5ce7;" onclick="if(typeof openMaciociaChapter==='function') openMaciociaChapter('${res.key}')">
                    <div class="patho-title" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
                        <div><strong>${res.item.icon || '📚'} ${res.item.title}</strong></div>
                        ${showMatchScore ? `<span class="ai-score-pill">${res.pct}% התאמה</span>` : ''}
                    </div>
                    <div class="ai-snippet">${res.snippet || res.item.subtitle}</div>
                </div>`;
        });
        html += `</div>`;
    }

    if (westernPathologyResults.length > 0) {
        html += `<h3 class="search-section-header"><span>🔬 רפואה מערבית – קורס פתולוגיה (${westernPathologyResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        westernPathologyResults.forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #d63031;" onclick="if(typeof openPathologyWesternArticle==='function') openPathologyWesternArticle('${res.key}')">
                    <div class="patho-title"><strong>${res.item.icon || '🔬'} ${res.item.title}</strong></div>
                    <div class="ai-snippet">${res.snippet || res.item.subtitle}</div>
                </div>`;
        });
        html += `</div>`;
    }

    if (westernResults.length > 0) {
        html += `<h3 class="search-section-header"><span>🦴 רפואה מערבית – אורתופדיה (${westernResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        westernResults.forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #0984e3;" onclick="openWesternArticle('${res.key}')">
                    <div class="patho-title"><strong>${res.item.icon || '🦴'} ${res.item.title}</strong></div>
                    <div class="ai-snippet">${res.snippet || res.item.subtitle}</div>
                </div>`;
        });
        html += `</div>`;
    }

    if (theoryResults.length > 0) {
        html += `<h3 class="search-section-header"><span>📜 מאמרים ויסודות הרפואה הסינית (${theoryResults.length})</span></h3><div style="margin-bottom: 35px;">`;
        theoryResults.forEach(res => {
            html += `
                <div class="patho-card theme-box" style="cursor: pointer; border-right-color: #fdcb6e;" onclick="openArticle('${res.key}')">
                    <div class="patho-title"><strong>${res.item.icon || '📜'} ${res.item.title}</strong></div>
                    <div class="ai-snippet">${res.snippet || res.item.subtitle}</div>
                </div>`;
        });
        html += `</div>`;
    }

    if (intent.scope !== 'points' && !intent.anatomyBoost) {
        html += renderPointsSection();
    }

    if (totalCount === 0) {
        html += `
            <div class="theme-box" style="text-align:center; padding:40px 20px; border-radius:16px;">
                <h3 style="margin-top:0;">לא נמצאו תוצאות עבור "${rawQuery}"</h3>
                <p style="color:#777;">נסה לקצר את החיפוש, לחפש לפי אזור אנטומי (למשל "נקודות בברך"), או להשתמש בצ׳יפים המהירים למעלה.</p>
            </div>`;
    }

    document.getElementById('content-area').innerHTML = html;
    document.getElementById('pointsDisplay').innerHTML = '';
    window.scrollTo(0, 0);
    updateSearchStudyTools(pointResults.length > 0);
}

// --- פונקציות ניווט מתוך החיפוש והמועדפים ---
function jumpToPathology(elementKey, organKey) {
    if (typeof openPathologies === 'function') openPathologies();
    setTimeout(() => {
        const elBtn = document.querySelector(`.element-tab[onclick*="${elementKey}"]`);
        if (elBtn && typeof showElement === 'function') showElement(elementKey, elBtn);
        setTimeout(() => {
            const orgBtn = document.querySelector(`.organ-tab[onclick*="${organKey}"]`);
            if (orgBtn && typeof showOrganPathology === 'function') showOrganPathology(elementKey, organKey, orgBtn);
        }, 15);
    }, 15);
}

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