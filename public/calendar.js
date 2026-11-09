// ==========================================
// === קובץ calendar.js ===
// יומן שיעורים ומבחנים שנתי (בסגנון Google Calendar)
// ==========================================

const academicEvents = [
    // ==========================================
    // 1. דיקור שנה ב' - ימי רביעי (16:00-21:00)
    // ==========================================
    { date: '2026-11-04', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר (16:00-19:00) | דור זכאי (19:00-21:00)', topic: 'מסלול של ה-LIVER, נקודות של ה-LIV, תרגול', exam: 'מבחן פתיחה - חזרה על שנה קודם. הצגת עבודת גמר (עבודה בזוגות - מרידיאן אחד)', isExam: true },
    { date: '2026-11-11', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'המשך נקודות של ה-LIVER, תרגול', exam: '', isExam: false },
    { date: '2026-11-18', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מסלול ה-GALL BLADDER, נקודות של ה-GB / תרגול', exam: 'בוחן חזרה על LIV', isExam: true },
    { date: '2026-11-25', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'נקודות של ה-GB / תרגול', exam: 'בוחן נקודות פנים (Google form)', isExam: true },
    { date: '2026-12-02', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'נקודות של ה-GB / תרגול נקודות GB', exam: 'עבודת חזרה - LIV', isExam: true },
    { date: '2026-12-09', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מסלול ה-PERICARD / נקודות ה-PC', exam: 'עבודת חזרה של GB', isExam: true },
    { date: '2026-12-16', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מבחן אמצע: Liv / GB', exam: 'מבחן Liv / GB', isExam: true },
    { date: '2026-12-23', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מסלול ה-TW, נקודות של ה-TW', exam: 'בוחן חזרה על PC - עבודת חזרה לקראת מבחן PC+TW', isExam: true },
    { date: '2026-12-30', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'המשך נקודות TW', exam: 'עוברים על עבודת חזרה TW+PC', isExam: false },
    { date: '2027-01-06', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מבחן PC/TW', exam: 'מבחן PC/TW + בחני שרטוטי נקודות אזורי גוף (Google forms)', isExam: true },
    { date: '2027-01-13', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'נקודות אקסטרא', exam: 'בחני שרטוטי נקודות אזורי גוף (Google forms)', isExam: true },
    { date: '2027-01-20', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'השלמת חתימות ומבחנים חסרים + תרגול הכנה למבחן', exam: 'השלמת חתימות ומבחנים חסרים', isExam: false },
    { date: '2027-01-27', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'חזרה כללית', exam: '', isExam: false },
    { date: '2027-02-03', course: 'acupuncture', courseName: 'דיקור שנה ב\'', time: '16:00-21:00', lecturer: 'עמית סהר | דור זכאי', topic: 'מבחן מסכם מעשי', exam: 'מבחן מסכם מעשי (מבחן עיוני מסכם יפורסם בלוח המבחנים)', isExam: true },

    // ==========================================
    // 2. פתולוגיות רפואה סינית שנה ב' - ימי שני (09:30-13:00)
    // ==========================================
    // סמסטר א'
    { date: '2026-11-02', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 1: חזרה על 5 החומרים ועל גורמי מחלה חיצוניים ופנימיים', exam: '', isExam: false },
    { date: '2026-11-09', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 2: המשך גורמי מחלה ואורח חיים ועל תהליכי ייצור צ\'י, דם ונוזלי גוף', exam: '', isExam: false },
    { date: '2026-11-16', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 3: חזרה על שמונת העקרונות, יין-יאנג ו-Ben Biao', exam: '', isExam: false },
    { date: '2026-11-23', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 4: סדנת מבוא לאבחנת דופק', exam: 'בוחן על שיעורים 1-3', isExam: true },
    { date: '2026-11-30', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 5: מבוא לסינדרומים + סינדרומים LU', exam: '', isExam: false },
    { date: '2026-12-07', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 6: המשך סינדרומים LU + סינדרומים LI', exam: '', isExam: false },
    { date: '2026-12-14', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 7: המשך סינדרומים LI + סיפורי מקרה LU-LI', exam: '', isExam: false },
    { date: '2026-12-21', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 8: תשאול', exam: 'בוחן סינדרומים LU - LI', isExam: true },
    { date: '2026-12-28', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 9: תשאול', exam: '', isExam: false },
    { date: '2027-01-04', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 10: סינדרומים SP', exam: '', isExam: false },
    { date: '2027-01-11', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 11: המשך סינדרומים SP + סינדרומים ST', exam: '', isExam: false },
    { date: '2027-01-18', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 12: המשך סינדרומים ST + סינדרומים מעורבים SP-LU', exam: '', isExam: false },
    { date: '2027-01-25', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 13: תרגול תשאול', exam: 'בוחן סינדרומים SP-ST', isExam: true },
    { date: '2027-02-01', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 14: שיעור הכנה למבחן (סיום סמסטר א\')', exam: '', isExam: false },
    // סמסטר ב'
    { date: '2027-03-15', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 15 (פתיחת סמסטר ב\'): סינדרומים HT', exam: '', isExam: false },
    { date: '2027-03-22', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 16: המשך סינדרומים HT + סינדרומים SI', exam: '', isExam: false },
    { date: '2027-03-29', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 17: סינדרומים KID', exam: '', isExam: false },
    { date: '2027-04-05', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 18: המשך סינדרומים KID + סינדרומים BL', exam: '', isExam: false },
    { date: '2027-04-12', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 19: תרגול מקרים HT-SI, סינדרומים LIV', exam: '', isExam: false },
    { date: '2027-04-19', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 20: המשך סינדרומים LIV', exam: 'בוחן HT-SI, KID-BL', isExam: true },
    { date: '2027-05-03', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 21: סינדרומים GB + תרגול מקרים LIV-GB', exam: '', isExam: false },
    { date: '2027-05-10', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 22: סינדרומים PC-TW', exam: 'בוחן LIV-GB', isExam: true },
    { date: '2027-05-17', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 23: סינדרומים מעורבים LIV, KID', exam: 'הגשת ראשי פרקים לעבודת סוף שנה', isExam: true },
    { date: '2027-05-24', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 24: מבוא למרידיאנים מיוחדים', exam: '', isExam: false },
    { date: '2027-05-31', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 25: תרגול סיפורי מקרה + חזרה על תפקודי נקודות על-פי סינדרומים', exam: '', isExam: false },
    { date: '2027-06-07', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 26: סיכום סינדרומים – עבודה על סיפורי מקרה + תרגול תשאול', exam: '', isExam: false },
    { date: '2027-06-14', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 27: המשך סיכום סינדרומים', exam: '', isExam: false },
    { date: '2027-06-21', course: 'tcm_patho', courseName: 'פתולוגיות סינית', time: '09:30-13:00', lecturer: 'ענת ליננברג', topic: 'שיעור 28: חזרה למבחן + הגשת עבודות', exam: 'הגשת עבודת סוף שנה', isExam: true },

    // ==========================================
    // 3. צמחי מרפא בודדים - ימי שני (13:00-16:00)
    // ==========================================
    // סמסטר א'
    { date: '2026-11-02', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 1: מבוא', exam: '', isExam: false },
    { date: '2026-11-09', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 2: משחררות חיצון – חריפים מחממים', exam: '', isExam: false },
    { date: '2026-11-16', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 3: משחררות חיצון – חריפים מחממים (המשך)', exam: '', isExam: false },
    { date: '2026-11-23', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 4: משחררות חיצון – חריפים קרירים', exam: '', isExam: false },
    { date: '2026-11-30', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 5: מסלקי אש', exam: '', isExam: false },
    { date: '2026-12-07', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 6: מרוקנים', exam: '', isExam: false },
    { date: '2026-12-14', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 7: מסלקי אש ורעילות', exam: '', isExam: false },
    { date: '2026-12-21', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 8: מקררי דם + מסלקי חום מחוסר', exam: '', isExam: false },
    { date: '2026-12-28', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 9: מסלקי חום ולחות + מסלקי חום קיץ', exam: '', isExam: false },
    { date: '2027-01-04', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 10: מנקזי לחות (משתנים)', exam: '', isExam: false },
    { date: '2027-01-11', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 11: ארומטיים מתמירי לחות + ארומטיים פותחי פתחים', exam: '', isExam: false },
    { date: '2027-01-18', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 12: מסלקי רוח לחות', exam: '', isExam: false },
    { date: '2027-01-25', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 13: מסלקי ליחת קור + חום', exam: '', isExam: false },
    { date: '2027-02-01', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר א\'', topic: 'שיעור 14: מפסיקי שיעול וצפצופי נשימה', exam: '', isExam: false },
    { date: '2027-02-04', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '09:00-12:00', lecturer: 'שיעור משותף לשתי הכיתות (יום חמישי)', topic: 'שיעור 15: שיעור סיכום סמסטר א\'', exam: 'שיעור מיוחד ביום חמישי 09:00-12:00', isExam: false },
    // סמסטר ב'
    { date: '2027-03-15', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 16: מחזקי דם', exam: '', isExam: false },
    { date: '2027-03-22', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 17: מחזקי QI', exam: '', isExam: false },
    { date: '2027-03-29', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 18: מחזקי YIN', exam: '', isExam: false },
    { date: '2027-04-05', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 19: מחזקי YANG', exam: '', isExam: false },
    { date: '2027-04-12', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 20: מניעי QI', exam: '', isExam: false },
    { date: '2027-04-19', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 21: מניעי דם', exam: '', isExam: false },
    { date: '2027-05-03', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 22: מחממי פנים', exam: '', isExam: false },
    { date: '2027-05-10', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 23: מפסיקי דימום', exam: '', isExam: false },
    { date: '2027-05-17', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 24: צמחים סופחים', exam: '', isExam: false },
    { date: '2027-05-24', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 25: מרגיעי נפש', exam: '', isExam: false },
    { date: '2027-05-31', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 26: מסלקי רוח ורעידות', exam: '', isExam: false },
    { date: '2027-06-07', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 27: צמחים המטפלים בתקיעות מזון + מסלקי פרזיטים + צמחים בשימוש חיצוני (חלק א\')', exam: '', isExam: false },
    { date: '2027-06-14', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 28: צמחים המטפלים בתקיעות מזון + מסלקי פרזיטים + צמחים בשימוש חיצוני (חלק ב\')', exam: '', isExam: false },
    { date: '2027-06-21', course: 'herbs', courseName: 'צמחי מרפא בודדים', time: '13:00-16:00', lecturer: 'סמסטר ב\'', topic: 'שיעור 29: סיכום שנה, חזרה והכנה למבחן', exam: '', isExam: false }
];

let calYear = 2026;
let calMonth = 10; // נובמבר (0 = ינואר, 10 = נובמבר)
let calFilter = 'all'; // all, acupuncture, tcm_patho, herbs, exams
let calViewMode = 'month'; // month, list

const hebrewMonths = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
    'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
];

function openAcademicCalendar() {
    if (typeof saveCurrentScroll === 'function') saveCurrentScroll();
    currentView = 'academic_calendar';

    const welcome = document.getElementById('welcome-view');
    if (welcome) welcome.style.display = 'none';
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.innerHTML = '';
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) filterBtn.style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-academic-calendar');
    if (btn) btn.classList.add('active-menu');

    // קביעת החודש הנוכחי כברירת מחדל אם הוא בטווח שנת הלימודים
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    if ((y === 2026 && m >= 10) || (y === 2027 && m <= 6)) {
        calYear = y;
        calMonth = m;
    }

    renderCalendarPage();
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function renderCalendarPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;

    contentArea.innerHTML = `
        <div class="gcal-wrapper theme-box">
            <!-- סרגל עליון בסגנון Google Calendar -->
            <div class="gcal-header">
                <div class="gcal-title-group">
                    <span class="gcal-logo-icon">📅</span>
                    <h2>יומן שיעורים ומבחנים – שנה ב'</h2>
                </div>

                <div class="gcal-nav-group">
                    <button class="gcal-today-btn" onclick="goToTodayCalendar()">היום</button>
                    <button class="gcal-arrow-btn" onclick="changeCalMonth(-1)" title="חודש קודם">❯</button>
                    <button class="gcal-arrow-btn" onclick="changeCalMonth(1)" title="חודש הבא">❮</button>
                    <span class="gcal-current-month">${hebrewMonths[calMonth]} ${calYear}</span>
                </div>

                <div class="gcal-view-switch">
                    <button class="gcal-switch-btn ${calViewMode === 'month' ? 'active' : ''}" onclick="setCalViewMode('month')">חודש</button>
                    <button class="gcal-switch-btn ${calViewMode === 'list' ? 'active' : ''}" onclick="setCalViewMode('list')">רשימת סילבוס</button>
                </div>
            </div>

            <!-- סרגל סינון קורסים ומבחנים -->
            <div class="gcal-filters">
                <button class="gcal-chip ${calFilter === 'all' ? 'active' : ''}" onclick="setCalFilter('all')">הכל</button>
                <button class="gcal-chip chip-exams ${calFilter === 'exams' ? 'active' : ''}" onclick="setCalFilter('exams')">🎯 מבחנים, בחנים ועבודות</button>
                <button class="gcal-chip chip-acupuncture ${calFilter === 'acupuncture' ? 'active' : ''}" onclick="setCalFilter('acupuncture')">📍 דיקור (ימי ד')</button>
                <button class="gcal-chip chip-patho ${calFilter === 'tcm_patho' ? 'active' : ''}" onclick="setCalFilter('tcm_patho')">☯️ פתולוגיות סינית (ימי ב' בוקר)</button>
                <button class="gcal-chip chip-herbs ${calFilter === 'herbs' ? 'active' : ''}" onclick="setCalFilter('herbs')">🌿 צמחי מרפא (ימי ב' צהריים)</button>
            </div>

            <!-- גוף היומן -->
            <div id="gcal-body">
                ${calViewMode === 'month' ? buildMonthGridHTML() : buildSyllabusListHTML()}
            </div>
        </div>

        <!-- חלונית פרטי שיעור/מבחן קופצת -->
        <div id="gcal-event-modal" class="gcal-modal-overlay" onclick="if(event.target===this) closeCalModal()">
            <div class="gcal-modal-card theme-box" id="gcal-modal-content"></div>
        </div>
    `;
}

function getFilteredEvents() {
    return academicEvents.filter(ev => {
        if (calFilter === 'all') return true;
        if (calFilter === 'exams') return ev.isExam;
        return ev.course === calFilter;
    });
}

function buildMonthGridHTML() {
    const daysOfWeek = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
    const firstDayIndex = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    const events = getFilteredEvents();

    let html = `<div class="gcal-grid-header">`;
    daysOfWeek.forEach(d => {
        html += `<div class="gcal-day-name">${d}</div>`;
    });
    html += `</div><div class="gcal-grid">`;

    // תאים ריקים לפני תחילת החודש
    for (let i = 0; i < firstDayIndex; i++) {
        html += `<div class="gcal-cell empty-cell"></div>`;
    }

    // ימי החודש
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = events.filter(e => e.date === dateStr);
        const isToday = dateStr === todayStr;

        html += `
            <div class="gcal-cell ${isToday ? 'today-cell' : ''}">
                <div class="gcal-date-number ${isToday ? 'today-badge' : ''}">${day}</div>
                <div class="gcal-events-list">
                    ${dayEvents.map((ev, idx) => `
                        <div class="gcal-event-pill course-${ev.course} ${ev.isExam ? 'has-exam' : ''}" 
                             onclick='showCalEventDetails(${JSON.stringify(ev).replace(/'/g, "&#39;")})'>
                            <div class="pill-time">${ev.time.split('-')[0]} | ${ev.courseName}</div>
                            <div class="pill-topic">${ev.topic}</div>
                            ${ev.exam ? `<div class="pill-exam-tag">📌 ${ev.exam}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

function buildSyllabusListHTML() {
    const events = getFilteredEvents().sort((a, b) => a.date.localeCompare(b.date));
    if (events.length === 0) {
        return `<p style="text-align:center; padding: 30px;">לא נמצאו אירועים בסינון הנוכחי.</p>`;
    }

    let html = `<div class="gcal-list-view">`;
    events.forEach(ev => {
        const [y, m, d] = ev.date.split('-');
        const formattedDate = `${d}/${m}/${y}`;
        html += `
            <div class="gcal-list-row course-border-${ev.course}" onclick='showCalEventDetails(${JSON.stringify(ev).replace(/'/g, "&#39;")})'>
                <div class="gcal-list-date">
                    <strong>${formattedDate}</strong>
                    <span>${ev.time}</span>
                </div>
                <div class="gcal-list-info">
                    <span class="gcal-course-badge course-${ev.course}">${ev.courseName}</span>
                    <h4>${ev.topic}</h4>
                    <small>מרצה: ${ev.lecturer}</small>
                </div>
                <div class="gcal-list-exam">
                    ${ev.exam ? `<span class="exam-alert-badge">🎯 ${ev.exam}</span>` : ''}
                </div>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

function changeCalMonth(delta) {
    calMonth += delta;
    if (calMonth > 11) {
        calMonth = 0;
        calYear++;
    } else if (calMonth < 0) {
        calMonth = 11;
        calYear--;
    }
    renderCalendarPage();
}

function goToTodayCalendar() {
    const now = new Date();
    calYear = now.getFullYear();
    calMonth = now.getMonth();
    renderCalendarPage();
}

function setCalFilter(filter) {
    calFilter = filter;
    renderCalendarPage();
}

function setCalViewMode(mode) {
    calViewMode = mode;
    renderCalendarPage();
}

function showCalEventDetails(ev) {
    const modal = document.getElementById('gcal-event-modal');
    const content = document.getElementById('gcal-modal-content');
    if (!modal || !content) return;

    const [y, m, d] = ev.date.split('-');
    content.innerHTML = `
        <button class="close-quiz-btn" onclick="closeCalModal()">✖</button>
        <span class="gcal-course-badge course-${ev.course}" style="font-size:1rem; padding:6px 14px;">${ev.courseName}</span>
        <h2 style="margin: 15px 0 10px 0; color: var(--ink);">${ev.topic}</h2>
        <p style="margin: 6px 0; font-size: 1.05rem;"><strong>📅 תאריך:</strong> ${d}/${m}/${y}</p>
        <p style="margin: 6px 0; font-size: 1.05rem;"><strong>⏰ שעות:</strong> ${ev.time}</p>
        <p style="margin: 6px 0; font-size: 1.05rem;"><strong>👨‍🏫 מרצה:</strong> ${ev.lecturer}</p>
        ${ev.exam ? `
            <div style="margin-top: 18px; padding: 14px; background: #fff3f3; border-right: 5px solid #e74c3c; border-radius: 8px; color: #c0392b; font-weight: bold;">
                📌 מבחן / בוחן / מטלה בשיעור זה:<br>
                <span style="font-size: 1.1rem;">${ev.exam}</span>
            </div>
        ` : ''}
    `;
    modal.style.display = 'flex';
}

function closeCalModal() {
    const modal = document.getElementById('gcal-event-modal');
    if (modal) modal.style.display = 'none';
}