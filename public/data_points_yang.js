// ==========================================
// === data_points_yang.js ===
// מרידיאני היאנג (LI, ST, SI, BL) ומרידיאן ה-DU
// ==========================================

const dataYang = {
    // --- מרידיאן המעי הגס ---
    LI: {
        title: "מרידיאן המעי הגס (LARGE INTESTINE MERIDIAN - 大腸)", 
        element: "מתכת", 
        hours: "05:00-07:00", 
        layer: "Hand Yang Ming", 
        partner: "Lung",
        insideM: "<br><strong>מסלול פנימי:</strong> נכנס מ-ST-12 לריאות (LUNG), יורד למעי הגס (LARGE INT.) וממשיך לרגל לנקודה ST-37.", 
        general: "<br><strong>מסלול חיצוני:</strong> מתחיל בחלק הרדיאלי של קצה אצבע המורה, עובר בין עצמות מטקרפליות 1 ו-2, עולה בחלק הלטרלי של האמה, המרפק והזרוע אל חלק אנטריורי של הכתף, עובר ב-DU-14 ו-ST-12, עולה בחלק הלטרלי של הצוואר, הלחי, מקיף את השפתיים, חוצה לצד השני של הגוף ומסתיים בצד הנחיר (נפגש עם מרידיאן הקיבה - STOMACH).<br><br><strong>תפקודים כלליים:</strong><br>1. ספיגת נוזלים.<br>2. הפרשת צואה.<br>3. שולט על היכולת 'לשחרר' (Let Go).",
        points: [
            { id: 'LI-1', name: 'Shang Yang', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['באר - Jing-Well', 'שעה - Horary'], loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הרדיאלי של אצבע המורה.', func: '1. מפעילה TMM.', ind: '1. כאבי שרירים לאורך המרידיאן.', img: 'images/LI/LI1.jpg' },
            { id: 'LI-2', name: 'Er Jian', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['מעיין - Ying-Spring', 'פיזור - Sedation'], loc: 'בצד הרדיאלי של האצבע המורה, דיסטלית למפרק המטקרפו-פלנגיאלי השני.', func: '1. מוציאה חום מה-Large Int.<br>2. מוציאה חום מה-Yang Ming.', ind: '1. עצירות על רקע חום.<br>2. "4 Bigs" (חום גבוה, צמא וכו\').', img: 'images/LI/LI2.jpg' },
            { id: 'LI-3', name: 'San Jian', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['פלג - Shu-Stream'], loc: 'בצד הרדיאלי של האצבע המורה, בשקע, פרוקסימלית למפרק המטקרפו-פאלנגיאלי השני.', func: '1. כאבי מפרקים.', ind: '1. כאבי מפרקים לאורך המרידיאן (מרפק, כתף).', img: 'images/LI/LI3.jpg' },
            { id: 'LI-4', name: 'He Gu', heb: '', elm: 'none', elmN: '', tags: ['מקור - Yuan', 'שליטה - Command Point'], loc: 'בין העצמות המטקרפליות הראשונה והשנייה, בגובה אמצע העצם המטקרפלית השנייה וצמוד אליה.', func: '1. מוציאה רוח חיצונית.<br>2. מטיבה עם הפנים (נקודת "שליטה" לפנים).<br>3. מניעה QI.<br>4. מעודדת צירי לידה.', ind: '1. צינון, שפעת (גפ"ח).<br>2. שיתוק פנים, שיניים.<br>3. עיקרית לכאבים PAIN.<br>4. זירוז לידה - אסורה בזמן הריון!', img: 'images/LI/LI4.jpg' },
            { id: 'LI-5', name: 'Yang Xi', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['נהר - Jing-River'], loc: 'בצד הרדיאלי של פרק כף היד, בשקע שנוצר בין הגיד extensor pollicis longus והגיד extensor pollicis brevis (snuffbox).', func: '1. מקומית.', ind: '1. כאבים במפרק היד.', img: 'images/LI/LI5.jpg' },
            { id: 'LI-6', name: 'Pian Li', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: '3 צון פרוקסימאלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', func: '1. פותחת מעברי המים.', ind: '1. בצקות בפנים.', img: 'images/LI/LI6.jpg' },
            { id: 'LI-7', name: 'Wen Liu', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: '5 צון פרוקסימלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', func: '1. ויסות QI לאורך המרידיאן.', ind: '1. כאבים לאורך המרידיאן.', img: 'images/LI/LI7.jpg' },
            { id: 'LI-10', name: 'Shou San Li', heb: '', elm: 'none', elmN: '', tags: [], loc: '10 צון דיסטלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', func: '1. מזינה QI & BLOOD לגפיים העליונית.', ind: '1. חולשת נימול, שיתוק של הגפיים העליונות.', img: 'images/LI/LI10.jpg' },
            { id: 'LI-11', name: 'Qu Chi', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['ים - He-Sea', 'חיזוק - Tonification'], loc: 'אמצע הדרך בין LU-5 לבין האפיקונדיל הלטראלי (בצד הלטראלי של סוף הקפל הקוביטלי).', func: '1. מורידה חום מדיד.<br>2. מוציאה חום.<br>3. מפסיקה גירוד.<br>4. מורידה לחץ דם.', ind: '1. חום (fever).<br>2. סינדרומים ופתולוגיות של חום (heat, fire).<br>3. גירוד על רקע חום בדם.<br>4. לחץ דם גבוה.', img: 'images/LI/LI11.jpg' },
            { id: 'LI-15', name: 'Jian Yu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע אנטריורית ואינפריורית לקצה האקרומיון.', func: '1. מקומית לכתף.', ind: '1. כאבים בכתף, בעיות תנועה בכתף.', img: 'images/LI/LI15.jpg' },
            { id: 'LI-18', name: 'Fu Tu', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'בצד הלטרלי של הצוואר, בגובה הגרוגרת בין ראשי השריר STERNOCLEIDOMASTOID (SCM).', func: '1. מקומית.', ind: '1. כאבי גרון, אובדן קול.', img: 'images/LI/LI18.jpg' },
            { id: 'LI-20', name: 'Ying Xiang', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על הקפל הנאזו-לביאלי (קפל החיוך), בגובה אמצע הגבול הלטראלי ביותר של הנחיר.', func: '1. פותחת מעברי האף.', ind: '1. אף סתום.', img: 'images/LI/LI20.jpg' }
        ]
    },

    // --- מרידיאן הקיבה ---
    ST: {
        title: "מרידיאן הקיבה <br> (STOMACH MERIDIAN - 胃)", element: "אדמה", hours: "07:00-09:00", layer: "Foot Yang Ming", partner: "Spleen",
        insideM: "<br>1. חלק הלטראלי של האף (LI-20) ← קנטוס מדיאלי של העין.<br>2. ST-12 ← ST ← SP ← פתח תחתון של הקיבה ← ST-30.<br>3. ST-36 ← אצבע 3 של הרגל.<br>4. ST-2 ← חלק מדיאלי של הבוהן הראשונה שם נפגש עם מרידיאן ה- SPLEEN.",        
        general: "  <br> איסוף והתמרת המזון: הקיבה נחשבת ל'ים התזונה', אחראית על קבלת המזון ופירוקו הראשוני. <br> שליטה על ה-QI היורד (מונעת בחילות/הקאות).  <br>   מקור הנוזלים: אוהבת לחות ושונאת יובש.<br>  חיזוק הגוף (Qi ודם). <BR> השפעה על הנפש. <br>  שליטה על הפנים והעיכול.",
        points: [
            {id: 'ST-1', name: 'Cheng Qi', heb: '', elm: 'none', elmN: '', tags: [], loc: 'כאשר העיניים מביטות ישר קדימה, הנקודה נמצאת ישירות מתחת לאישון, בין גלגל העין לבין והרכס התחתון של ארובת העין (הרכס האינפרא-אורביטלי).', func: '1. מטיבה עם העיניים.', ind: '1. בעיות עיניים.', img: 'images/ST/ST1.jpg'},
            {id: 'ST-2', name: 'Si Bai', heb: '', elm: 'none', elmN: '', tags: [], loc: 'כאשר העיניים מביטות ישר קדימה, הנקודה נמצאת 1 צון ישירות מתחת לאישון, בשקע ה-INFRAORBITAL FORAMEN.', func: '1. מטיבה עם העיניים.<br>2. מקומית - סינוסים.', ind: '1. בעיות עיניים.', img: 'images/ST/ST2.jpg'},
            {id: 'ST-4', name: 'Di Cang', heb: '', elm: 'none', elmN: '', tags: [], loc: '0.4 צון לטראלית לפינת הפה.', func: '1. נקודה מקומית לפה, ללסת ולשיניים.', ind: '1. נקודה מקומית לפה, ללסת ולשיניים.', img: 'images/ST/ST4.jpg'},
            {id: 'ST-5', name: 'Da Ying', heb: '', elm: 'none', elmN: '', tags: [], loc: 'אנטריורית לזווית הלסת, בשקע בגבול האנטריורי של שריר המאסטר (Masseter).', func: '1. נקודה מקומית לפה, ללסת ולשיניים.', ind: '1. נקודה מקומית לפה, ללסת ולשיניים.', img: 'images/ST/ST5.jpg'},
            {id: 'ST-6', name: 'Jia Che', heb: '', elm: 'none', elmN: '', tags: [], loc: 'במרחק רוחב אצבע אנטריורית וסופריורית לזווית המנדיבולה, במרכז שריר המאסטר (בין ראשי השריר).', func: '1. נקודה מקומית לפה, ללסת ולשיניים.', ind: '1. כאבי שיניים.<br>2. שיתוק פנים.', img: 'images/ST/ST6.jpg'},
            {id: 'ST-7', name: 'Xia Guan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בגבול התחתון של ה-Zygomatic arch, בשקע אנטריורית ל-Condyloid process של המנדיבולה.', func: '1. מטיבה עם האוזניים, הפה, הלסת והפנים.', ind: '1. בעיות פה לסת ופנים.', img: 'images/ST/ST7.jpg'},
            {id: 'ST-8', name: 'Tou Wei', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בפינת המצח, 0.5 צון בתוך קו השיער, 4.5 צון לטראלית לקו האמצע (Du-24).', func: '1. מטיבה עם הראש.', ind: '1. כאבי ראש מלחות.', img: 'images/ST/ST8.jpg'},
            {id: 'ST-9', name: 'Ren Ying', heb: '', elm: 'none', elmN: '', tags: ['ים הצ\'י - Sea of Qi', 'אשנב לרקיע - Window of Heaven'], loc: '1.5 צון לטראלית ובגובה בליטת הגרוגרת, בשקע שבין הגבול האנטריורי של שריר ה-SCM לבין הגבול הלטראלי של ה-Thyroid cartilage (עורק הקרוטיד).', func: '1. מורידה Qi מורד.<br>2. מקומית.', ind: '1. יתר לחץ דם.<br>2. נפיחות בצוואר (Goiter).', img: 'images/ST/ST9.jpg'},
            {id: 'ST-12', name: 'Que Pen', heb: '', elm: 'none', elmN: '', tags: ['מפגש יאנג - Yang Meeting'], loc: 'בגבול הסופריורי של הקלוויקולה (מעל עצם הבריח), 4 צון לטראלית לקו האמצע.', func: '-', ind: '-', img: 'images/ST/ST12.jpg'},
            {id: 'ST-18', name: 'Ru Gen', heb: '', elm: 'none', elmN: '', tags: [], loc: '4 צון לטראלית לקו האמצע, במרווח הבין צלעי החמישי.', func: '1. מטיבה עם החזה.', ind: '1. עידוד הפרשת חלב אם.', img: 'images/ST/ST18.jpg'},
            {id: 'ST-21', name: 'Liang Men', heb: '', elm: 'none', elmN: '', tags: [], loc: '4 צון סופריורית לטבור ו-2 צון לטראלית לקו האמצע (בגובה Ren-12).', func: '1. מהרמנת את המחמם האמצעי (תקיעות מזון).', ind: '1. כאבי בטן, הקאות, בחילות.', img: 'images/ST/ST21.jpg'},
            {id: 'ST-25', name: 'Tian Shu', heb: '', elm: 'none', elmN: '', tags: [ 'התראה (LI) - Mu of LI'], loc: '2 צון לטראלית למרכז הטבור.', func: '1. מהרמנת את המחמם התחתון (מעיים).', ind: '1. עצירות.<br>2. שלשול.', img: 'images/ST/ST25.jpg'},
            {id: 'ST-28', name: 'Shui Dao', heb: '', elm: 'none', elmN: '', tags: [], loc: '2 צון לטראלית לקו האמצע, 3 צון אינפריורית לטבור, בגובה REN-4.', func: '1. מוציאה לחות מהמחמם התחתון (רחם, שלפוחית השתן).', ind: '1. שחלות פוליציסטיות.<br>2. דלקת בשלפוחית השתן.', img: 'images/ST/ST28.jpg'},
            {id: 'ST-30', name: 'Qi Chong', heb: '', elm: 'none', elmN: '', tags: ['ים הדגנים - Sea of Grain', 'Chong Mai'], loc: '2 צון לטראלית לקו האמצע, בגובה הגבול הסופריורי של ה-PUBIC SYMPHYSIS.', func: 'מווסתת מחמם תחתון.', ind: 'QI מורד (running piglet).', img: 'images/ST/ST30.jpg'},
            {id: 'ST-31', name: 'Bi Guan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בגובה ה - Greater trochanter, בשקע לטרלית לשריר ה - Sartorius.', func: 'מזרימה QI לרגליים.', ind: 'חולשה של הגפיים התחתונות.', img: 'images/ST/ST31.jpg'},
            {id: 'ST-34', name: 'Liang Qiu', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: 'בשקע 2 צון פרוקסימלית לגבול הלטרלי סופריורי של הפטלה.', func: 'מהרמנת ST QI.', ind: 'חומציות יתר בקיבה.', img: 'images/ST/ST34.jpg'},
            {id: 'ST-35', name: 'Du Bi', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע שנוצר כאשר הברך כפופה, ישירות מתחת לפטלה ולטראלית ל-PATELLAR LIGAMENT.', func: 'נקודה מקומית לברך.', ind: '-', img: 'images/ST/ST35.jpg'},
            {id: 'ST-36', name: 'Zu San Li', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['ים - He-Sea', 'שעה - Horary', 'ים הדגנים - Sea of Grain', 'שליטה - Command Point'], loc: 'מתחת לברך, 3 צון אינפריורית ל-ST-35, במרחק אצבע אחת לטראלית מהשיא של הטיביה.', func: '1. מחזקת את הטחול והקיבה.<br>2. מזינה Post heaven Qi & Jing.<br>3. מחזקת דם.<br>4. מסדירה את הקיבה.', ind: '1. עייפות, חולשה, כל בעיות העיכול, חיזוק מערכת החיסון.', img: 'images/ST/ST36.jpg'},
            {id: 'ST-37', name: 'Shang Ju Xu', heb: '', elm: 'none', elmN: '', tags: ['ים תחתון - Lower He-Sea'], loc: '3 צון אינפריורית ל-ST-36, במרחק אצבע לטרלית מהשיא של ה - Tibia.', func: 'מחזקות דם ע"י עידוד ספיגה.', ind: 'בעיות ספיגה (שלשולים).', img: 'images/ST/ST37.jpg'},
            {id: 'ST-38', name: 'Tiao Kou', heb: '', elm: 'none', elmN: '', tags: [], loc: 'באמצע הדרך (8 צון) בין ST-35 לבין בליטת המלאולוס הלטרלי, במרחק אצבע לטראלית מהשיא ה-TIBIA.', func: 'נקודה דיסטלית לכתף.', ind: '-', img: 'images/ST/ST38.jpg'},
            {id: 'ST-39', name: 'Xia Ju Xu', heb: '', elm: 'none', elmN: '', tags: ['ים תחתון - Lower He-Sea', 'ים הדם - Sea of Blood'], loc: '3 צון אינפריורית ל-ST-37, במרחק אצבע לטראלית מהגבול האנטריורי של ה-TIBIA.', func: 'מחזקות דם ע"י עידוד ספיגה.', ind: 'בעיות ספיגה (שלשולים).', img: 'images/ST/ST39.jpg'},
            {id: 'ST-40', name: 'Feng Long', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: 'באמצע הדרך (8 צון) בין ST-35 לבין בליטת המלאולוס הלטרלי , במרחק שתי אצבעות לטראלית לשיא של הטיביה.', func: '1. מוציאה ליחה (מהמחמם העליון).', ind: '1. שיעול עם הרבה ליחה.<br>2. דלקת מפרקים.<br>3. סחרחורות.<br>4. בלבול מנטאלי.', img: 'images/ST/ST40.jpg'},
            {id: 'ST-41', name: 'Jie Xi', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['נהר - Jing-River', 'חיזוק - Tonification'], loc: 'במפרק הקרסול, בגובה בליטת המלאולוס הלטרלי בשקע שבין הגידים EXTENSOR HALLUCIS LONGUS ו-EXTENSOR DIGITORUM LONGUS.', func: 'מקומית.', ind: '-', img: 'images/ST/ST41.jpg'},
            {id: 'ST-42', name: 'Chong Yang', heb: '', elm: 'none', elmN: '', tags: ['מקור - Yuan'], loc: 'בצד הדורסלי של כף הרגל, בשקע שנוצר בין העצמות המטטרסליות השניה והשלישית ועצמות ה-CUNEIFORM.', func: 'מחזקת תפקודי ה-STOMACH.', ind: '-', img: 'images/ST/ST42.jpg'},
            {id: 'ST-43', name: 'Xian Gu', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['פלג - Shu-Stream'], loc: 'בחלק הדורסלי של כף הרגל, בין העצמות המטטרסליות השניה והשלישית, בגובה SP-3.', func: 'כאבים לאורך המרידיאן.', ind: 'כאבי מפרקים לאורך המרידיאן.', img: 'images/ST/ST43.jpg'},
            {id: 'ST-44', name: 'Nei Ting', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['מעיין - Ying-Spring'], loc: 'בצד הדורסלי של כף הרגל, בין האצבעות השנייה והשלישית, 0.5 צון פרוקסימלית ל"קרום השחיה" (עור הברווז), נקודת "Web".', func: '1. מוציאה חום מהקיבה.<br>2. מוציאה חום מה - Yang Ming.<br>3. משפיעה על איזור הפנים.', ind: '1. רעב על רקע של חום (עודף/חוסר)<br>2. אפטות, כאבים בחניכיים.<br>3. 4 Bigs - צמא, זיעה, חום גבוהה, דופק מהיר.', img: 'images/ST/ST44.jpg'},
            {id: 'ST-45', name: 'Li Dui', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['באר - Jing-Well', 'פיזור - Sedation'], loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הלטראלי של האצבע השנייה ברגל.', func: 'TMM.', ind: 'כאבים לאורך המרידיאן.', img: 'images/ST/ST45.jpg'}
        ]
    },

    // --- מרידיאן המעי הדק ---
    SI: {
        title: "מרידיאן המעי הדק (SMALL INTESTINE MERIDIAN - 小肠)", 
        element: "אש", 
        hours: "13:00-15:00", 
        layer: "Hand Tai Yang", 
        partner: "Heart",
        insideM: "<br>1. הלחי ← קנטוס פנימי של העין (מפגש עם ה-BLADDER).<br>2. ST-12 ← לב (HEART) ← קיבה (STOMACH) ← מעי דק (SMALL INT) ← ST-39.",
        general: "<br>1. ביצוע הפרדה בין עיקר לתפל.<br>2. לקיחת חלק מתהליך עיכול המזון שמגיע מהקיבה.<br>3. השתתפות פעילה בתהליך הפרדת הנוזלים בגוף.",     
        points: [
            {id: 'SI-1', name: 'Shao Ze', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['באר - Jing-Well'], loc: '0.1 צון פרוקסימאלית לפינת הציפורן, באספקט הדורסלי ובצד האולנרי של הזרת.', func: '1. מעודדת יצור חלב אם.<br>2. נקודת TMM (מרידיאן ה-SI).', ind: '1. חוסר ביצור חלב.<br>2. כאבי שרירים לאורך המרידיאן.', img: 'images/SI/SI1.jpg'},
            {id: 'SI-2', name: 'Qian Gu', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['מעיין - Ying-Spring'], loc: 'בגבול האולנרי של הזרת, בשקע דיסטלית למפרק המטקרפו-פלנגיאלי החמישי.', func: '-', ind: '-', img: 'images/SI/SI2.jpg'},
            {id: 'SI-3', name: 'Hou Xi', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['פלג - Shu-Stream', 'חיזוק - Tonification', 'פתיחת Du Mai'], loc: 'בגבול האולנרי של כף היד, פרוקסימלית למפרק המטקרפו- פאלנגיאלי החמישי.', func: '1. מפעילה את המרידיאן.<br>2. מוציאה רוח מה TAI YANG.<br>3. מטיבה עם עמוד השדרה.<br>4. מטפלת בבעיות נפש.', ind: '1. כאבים לאורך המרידיאן.<br>2. התקררות, שפעת.<br>3. בעיות עמוד שדרה.<br>4. בעיות "נפש" (DU MAI).', img: 'images/SI/SI3.jpg'},
            {id: 'SI-4', name: 'Wan Gu', heb: '', elm: 'none', elmN: '', tags: ['מקור - Yuan'], loc: 'בגבול האולנרי של כף היד, בשקע שבין בסיס העצם המטקרפלית החמישית ובין ה- TRIQUETRAL BONE.', func: '1. מטפלת בצהבת.', ind: '1. צהבת (אימפירית).', img: 'images/SI/SI4.jpg'},
            {id: 'SI-5', name: 'Yang Gu', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['נהר - Jing-River', 'שעה - Horary'], loc: 'בגבול האולנרי של מפרק כף היד, בשקע בין ראש האולנה וה- TRIQUETRAL BONE.', func: '1. מוציאה חום מה-HEART, מרגיעה נפש.', ind: '1. דלקת שלפוחית השתן.', img: 'images/SI/SI5.jpg'},
            {id: 'SI-6', name: 'Yang Lao', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: '(כאשר היד מונחת על החזה), באספקט הדורסלי של ראש האולנה, בשקע בנקודה הגבוהה ביותר ובצד הרדיאלי של ה- STYLOID PROCESS של האולנה.', func: '1. כאבים לאורך המרידיאן.<br>2. מטיבה עם העיניים.', ind: '1. כאבי כתף ושכמה.<br>2. בעיות עיניים.', img: 'images/SI/SI6.jpg'},
            {id: 'SI-7', name: 'Zhi Zheng', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: '5 צון פרוקסימלית ל- SI-5 בשקע שבין הגבול האנטריורי של האולנה ושריר ה- FLEXOR CARPI ULNARIS.', func: '1. מוציאה חום ומרגיעה את הנפש (HT FIRE).', ind: '1. אי שקט.', img: 'images/SI/SI7.jpg'},
            {id: 'SI-8', name: 'Xiao Hai', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['ים - He-Sea', 'פיזור - Sedation'], loc: 'בשקע שבין קצה האולקרנון פרוסס של האולנה לבין קצה האפיקונדייל המדיאלי של ה- humerus.', func: '1. מקומית.', ind: '1. כאבים במרפק.', img: 'images/SI/SI8.jpg'},
            {id: 'SI-9', name: 'Jian Zhen', heb: '', elm: 'none', elmN: '', tags: [], loc: 'באספקט הפוסטריורי של הכתף, 1 צון סופריורית לגבול הפוסטריורי של קפל האקסילה. (את הנקודה ממקמים כאשר היד באדוקציה).', func: '1. מניעה QI בכתף.', ind: '1. כאבים בחלק הפוסטריורי של הכתף.', img: 'images/SI/SI9.jpg'},
            {id: 'SI-10', name: 'Nao Shu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'באספקט הפוסטריורי של הכתף, בשקע אינפריורית לעוקץ השכמה, סופריורית לגבול הפוסטריורי של קפל האקסילה. (את הנקודה ממקמים כאשר היד באדוקציה).', func: '1. מניעה QI בכתף.', ind: '1. כאבים בכתף.', img: 'images/SI/SI10.jpg'},
            {id: 'SI-11', name: 'Tian Zong', heb: '', elm: 'none', elmN: '', tags: [], loc: 'במרכז הסקפולה, בשקע הנמצא בשליש ראשון מהמרחק בין הגבול האינפריורי של עוקץ השכמה לבין הגבול האינפריורי של הסקפולה.', func: '1. עיקרית להנעת QI בסקפולה וכתף.', ind: '1. כאבים בכתף.', img: 'images/SI/SI11.jpg'},
            {id: 'SI-12', name: 'Bing Feng', heb: '', elm: 'none', elmN: '', tags: [], loc: 'במרכז השקע ה- SUPRASCAPULAR , ישירות מעל SI-11.', func: '1. מוציאה רוח חיצונית (TAI YANG).', ind: '1. גפ\"ח.<br>2. כאבים בכתף.', img: 'images/SI/SI12.jpg'},
            {id: 'SI-13', name: 'Qu Yuan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע סופריורית לסוף הגבול המדיאלי של עוקץ השכמה, אמצע הדרך בין SI-10 לבין ה- T2 חוליה של SPINOUS PROCESS.', func: '1. מניעה QI בכתף.', ind: '1. כאבים בכתף.', img: 'images/SI/SI13.jpg'},
            {id: 'SI-16', name: 'Tian Chuang', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'בגבול הפוסטריורי של שריר ה- STERNOCLEIDOMASTOID בגובה בליטת הגרוגרת.', func: '1. מיטיבה עם האוזניים הלשון והקול.', ind: '1. אובדן קול פתאומי.', img: 'images/SI/SI16.jpg'},
            {id: 'SI-17', name: 'Tian Rong', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'בשקע שבין זווית המנדיבולה לבין הגבול האנטריורי של שריר ה- STERNOCLEIDOMASTOID.', func: '1. מיטיבה עם הגרון.', ind: '1. סקרופולה, גויטר.', img: 'images/SI/SI17.jpg'},
            {id: 'SI-18', name: 'Quan Liao', heb: '', elm: 'none', elmN: '', tags: [], loc: 'ישירות מתחת לקנטוס החיצוני של העין, בשקע בגבול התחתון של עצם הזיגומה.', func: '1. מסלקת רוח ומשככת כאב בפנים.', ind: '1. כאבי שיניים, שיתוק פנים.', img: 'images/SI/SI18.jpg'},
            {id: 'SI-19', name: 'Ting Gong', heb: '', elm: 'none', elmN: '', tags: [], loc: 'כאשר הפה פתוח, הנקודה נמצאת בשקע שבין מרכז ה- TRAGUS וה- CONDYLOID PROCESS של המנדיבולה.', func: '1. מטיבה עם האוזניים.', ind: '1. כאבי אוזניים, אוזניים סתומות.', img: 'images/SI/SI19.jpg'}
        ]
    },

    // --- מרידיאן שלפוחית השתן ---
    BL: {
        title: "מרידיאן שלפוחית השתן (BLADDER MERIDIAN - 膀胱)", 
        element: "מים", 
        hours: "15:00-17:00", 
        layer: "Foot Tai Yang", 
        partner: "Kidneys",
        insideM: "<br><strong>מסלול פנימי 1:</strong> מהקנטוס הפנימי של העין אל ה-Vertex. שם המסלול מתפצל לשניים: מסלול אחד יורד לאוזן, ומסלול שני נכנס למוח ויוצא בעורף בנקודה BL-10.",
        general: "<br><strong>מסלול חיצוני 1:</strong> מהקנטוס הפנימי של העין למצח, משם לחלק הפוסטריורי של הראש, ומתפצל לשני מסלולים בנקודה BL-10.<br><br><strong>מסלול חיצוני 2 (מדיאלי):</strong> מהחלק הפוסטריורי של הצוואר, דרך DU-14, יורד לאורך הגב 1.5 צון לטראלית לקו האמצע ל-BL-23, נכנס ל-KIDNEY ול-BLADDER. משם ממשיך ל-sacrum ולחלק הפוסטריורי של הירך, ונכנס ל-popliteal fossa בנקודה BL-40.<br><br><strong>מסלול חיצוני 3 (לטרלי):</strong> מ-BL-10 לחלק הפוסטריורי של הצוואר, יורד לאורך הגב 3 צון לטראלית לקו האמצע. מגיע לעכוז ונפגש עם GB-30, יורד בחלק הפוסטריורי של הירך עד ל-popliteal fossa שם נפגש עם המסלול המדיאלי ב-BL-40. ממשיך לחלק הפוסטריורי של השוק, לפוסטריורי של המלאולוס הלטראלי, עובר בחלק הלטראלי של הרגל ומסתיים בחלק הלטראלי של האצבע הקטנה של הרגל, שם הוא נפגש עם מרידיאן ה-KIDNEY.<br><br><strong>תפקודים כלליים:</strong><br>1. התמרת נוזלים טהורים לשתן.<br>2. אגירתו והפרשתו של השתן.<br>3. לחלוח העור והשרירים.",     
        points: [
            {id: 'BL-1', name: 'Jing Ming', heb: '', elm: 'none', elmN: '', tags: ['מפגש YIN QIAO, YANG QIAO, DU'], loc: '0.1 צון מדיאלית וסופריורית לקנטוס הפנימי של העין, ליד הגבול המדיאלי של האורביט.', func: '1. מטיבה עם העיניים.', ind: '1. בעיות עיניים.', img: 'images/BL/BL1.jpg'},
            {id: 'BL-2', name: 'Zan Zhu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'סופריורית לקנטוס הפנימי של העין, בשקע קרוב לקצה המדיאלי של הגבה.', func: '1. מטיבה עם העיניים.<br>2. מקומית לסינוסים.', ind: '1. בעיות עיניים.<br>2. סינוסיטיס.', img: 'images/BL/BL2.jpg'},
            {id: 'BL-10', name: 'Tian Zhu', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'בשליש הלטרלי של שריר הטרפזיוס, 1.3 צון לטרלית ל-DU-15.', func: '1. מפעילה את המרידיאן.', ind: '1. כאבי ראש, צוואר.<br>2. כאבים לאורך הגב (יחד עם BL-40).', img: 'images/BL/BL10.jpg'},
            {id: 'BL-11', name: 'Da Zhu', heb: '', elm: 'none', elmN: '', tags: ['השפעה (עצמות) - Hui', 'ים הדם - Sea of Blood'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-1.', func: '1. מטיבה עם העצמות.', ind: '1. שברים.<br>2. אוסטאופורוזיס (osteoporosis).', img: 'images/BL/BL11.jpg'},
            {id: 'BL-12', name: 'Feng Men', heb: '', elm: 'none', elmN: '', tags: ['מפגש עם DU MAI'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-2.', func: '1. מוציאה רוח חיצונית.', ind: '1. התקררויות, שפעת.<br>2. שרירי גב עליון תפוסים.', img: 'images/BL/BL12.jpg'},
            {id: 'BL-13', name: 'Fei Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (LU) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-3.', func: '1. מחזקת את כל התפקודים של הראות.', ind: '1. שיעול, אסטמה, קוצר נשימה על רקע של חוסר.', img: 'images/BL/BL13.jpg'},
            {id: 'BL-14', name: 'Jue Yin Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (PC) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-4.', func: '1. פותחת את החזה.', ind: '1. מועקה בחזה.', img: 'images/BL/BL14.jpg'},
            {id: 'BL-15', name: 'Xin Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (HT) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-5.', func: '1. מחזקת את כל התפקודים של הלב.', ind: '1. בעיות שינה.<br>2. אי שקט.', img: 'images/BL/BL15.jpg'},
            {id: 'BL-16', name: 'Du Shu', heb: '', elm: 'none', elmN: '', tags: [], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-6.', func: '-', ind: '-', img: 'images/BL/BL16.jpg'},
            {id: 'BL-17', name: 'Ge Shu', heb: '', elm: 'none', elmN: '', tags: ['השפעה (דם) - Hui', 'אסוציאציה (סרעפת) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-7.', func: '1. מטפלת בפתולוגיות של הדם (חוסר, חום, סטגנציה).<br>2. מטיבה עם הנשימה.', ind: '1. אנמיה, נשירת שיער, דימומים.<br>2. אסטמה, קוצר נשימה.', img: 'images/BL/BL17.jpg'},
            {id: 'BL-18', name: 'Gan Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (LIV) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-9.', func: '1. מחזקת את כל התפקודים של הכבד.', ind: '1. בעיות עיניים.<br>2. אמנוריאה.', img: 'images/BL/BL18.jpg'},
            {id: 'BL-19', name: 'Dan Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (GB) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-10.', func: '1. מחזקת את כל התפקודים של כיס מרה.', ind: '1. הססנות, ביישנות, קושי בקבלת החלטות.', img: 'images/BL/BL19.jpg'},
            {id: 'BL-20', name: 'Pi Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (SP) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-11.', func: '1. מחזקת את כל התפקודים של SPLEEN.', ind: '1. חולשה, צניחות, צואה רכה.', img: 'images/BL/BL20.jpg'},
            {id: 'BL-21', name: 'Wei Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (ST) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה T-12.', func: '1. מחזקת את כל התפקודים של ה-STOMACH.', ind: '1. בחילות, הקאות (על רקע חוסר).', img: 'images/BL/BL21.jpg'},
            {id: 'BL-22', name: 'San Jiao Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (TW) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה L-1.', func: '1. מחזקת את כל התפקודים של ה-SAN JIAO.', ind: '1. בצקות.<br>2. אצירת שתן.', img: 'images/BL/BL22.jpg'},
            {id: 'BL-23', name: 'Shen Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (KID) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה L-2.', func: '1. מחזקת את כל התפקודים של ה-KIDNEY.', ind: '1. כאב גב תחתון (LBP).<br>2. טיניטוס.<br>3. בצקות.', img: 'images/BL/BL23.jpg'},
            {id: 'BL-24', name: 'Qi Hai Shu', heb: '', elm: 'none', elmN: '', tags: [], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה L-3.', func: '-', ind: '-', img: 'images/BL/BL24.jpg'},
            {id: 'BL-25', name: 'Da Chang Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (LI) - Back Shu'], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה L-4.', func: '1. מחזקת את כל התפקודים של ה-LARGE INT.', ind: '1. טחורים.<br>2. שלשול.<br>3. עצירות.', img: 'images/BL/BL25.jpg'},
            {id: 'BL-26', name: 'Guan Yuan Shu', heb: '', elm: 'none', elmN: '', tags: [], loc: '1.5 צון לטרלית לגבול התחתון של ה-SPINOUS PROCESS של החוליה L-5.', func: '-', ind: '-', img: 'images/BL/BL26.jpg'},
            {id: 'BL-27', name: 'Xiao Chang Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (SI) - Back Shu'], loc: '1.5 צון לטראלית לקו האמצע בגובה ה- SACRAL FORAMEN הראשון (הניקבה הראשונה).', func: '1. מחזקת את כל התפקודים של ה-SMALL INT.', ind: '1. שלשול.<br>2. עצירות.', img: 'images/BL/BL27.jpg'},
            {id: 'BL-28', name: 'Pang Guang Shu', heb: '', elm: 'none', elmN: '', tags: ['אסוציאציה (BL) - Back Shu'], loc: '1.5 צון לטראלית לקו האמצע בגובה ה- SACRAL FORAMEN השני (הניקבה השניה) מתחת לפינה המדיאלית ואינפריורית של ה-PSIS.', func: '1. מחזקת את כל התפקודים של ה-U. BLADDER.', ind: '1. בריחת שתן.<br>2. אצירת שתן.<br>3. דחיפות ותכיפות.', img: 'images/BL/BL28.jpg'},
            {id: 'BL-32', name: 'Ci Liao', heb: '', elm: 'none', elmN: '', tags: ['מפגש עם GB', 'אסורה בזמן הריון'], loc: 'בתוך הפוראמן השני.', func: '1. מניעה QI במחמם התחתון (שלפוחית השתן, רחם).', ind: '1. כאבי מחזור.<br>2. אצירת שתן.<br>3. מעודדות צירי לידה.', img: 'images/BL/BL32.jpg'},
            {id: 'BL-35', name: 'Hui Yang', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בגובה הקצה של עצם ה- COCCYX, 0.5 צון לטרלית לקו ה-DU MAI.', func: '1. מקומית.', ind: '1. טחורים.<br>2. כאבים בעצם הזנב.', img: 'images/BL/BL35.jpg'},
            {id: 'BL-36', name: 'Cheng Fu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'במרכז הקפל הגלוטיאלי בשקע שבין שרירי ה-HAMSTRING.', func: '-', ind: '-', img: 'images/BL/BL36.jpg'},
            {id: 'BL-39', name: 'Wei Yang', heb: '', elm: 'none', elmN: '', tags: ['ים תחתון (TW) - Lower He-Sea'], loc: 'בגב הברך על הקפל הפופליטאלי בגבול המדיאלי של גיד השריר BICEPS FEMORIS.', func: '1. וויסות נוזלים.', ind: '1. אצירת שתן, קושי במתן שתן.', img: 'images/BL/BL39.jpg'},
            {id: 'BL-40', name: 'Wei Zhong', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['ים - He-Sea', 'שליטה - Command Point'], loc: 'בגב הברך בקפל הפופליטאלי, באמצע הדרך בין גיד השריר BICEPS FEMORIS לבין גיד השריר SEMITENDINOSUS.', func: '1. מיטיבה עם הגב התחתון.<br>2. מוציאה חום מהדם.', ind: '1. כאבי גב תחתון.<br>2. גירוד, בעיות עור.', img: 'images/BL/BL40.jpg'},
            {id: 'BL-41', name: 'Fu Fen', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU MAI בקו הגובה של הקצה התחתון של החוליה T-2 ובגובה BL-12.', func: '-', ind: '-', img: 'images/BL/BL41.jpg'},
            {id: 'BL-42', name: 'Po Hu', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU AMI בקו הגובה של הקצה התחתון של החוליה T-3 ובגובה BL-13.', func: '1. מהרמנת את ה-PO.', ind: '1. קושי let go.', img: 'images/BL/BL42.jpg'},
            {id: 'BL-43', name: 'Gao Huang', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU MAI בקו הגובה של הקצה התחתון של החוליה T-4 ובגובה BL-14.', func: '1. מהרמנת את כל איברי ה-ZANG.', ind: '1. מחלות כרוניות רב מערכיות.', img: 'images/BL/BL43.jpg'},
            {id: 'BL-44', name: 'Shen Tang', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU MAI בקו הגובה של הקצה התחתון של החוליה T-5 ובגובה BL-15.', func: '1. מהרמנת את ה-SHEN.', ind: '-', img: 'images/BL/BL44.jpg'},
            {id: 'BL-47', name: 'Hun Men', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU MAI בקו הגובה של הקצה התחתון של החוליה T-9 ובגובה BL-18.', func: '1. מהרמנת את ה-HUN.', ind: '1. קושי במציאת כיוון בחיים.<br>2. חלימה סוערת.', img: 'images/BL/BL47.jpg'},
            {id: 'BL-49', name: 'Yi She', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה- DU MAI בקו הגובה של הקצה התחתון של החוליה T-11 ובגובה BL-20.', func: '1. מהרמנת את ה-YI.', ind: '1. מחשבות טורדניות.', img: 'images/BL/BL49.jpg'},
            {id: 'BL-52', name: 'Zhi Shi', heb: '', elm: 'none', elmN: '', tags: [], loc: '3 צון לטרלית מקו ה-DU MAI בקו הגובה של הקצה התחתון של החוליה L-2 ובגובה BL-23.', func: '1. מהרמנת את ה-ZHI.', ind: '1. חוסר בכוח רצון.', img: 'images/BL/BL52.jpg'},
            {id: 'BL-54', name: 'Zhi Bian', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בעכוז, 3 צון לטרלית ל- SACRO COCCYGEAL HIATUS בגובה DU-2.', func: '1. מטיבה עם האזור הלומבארי.', ind: '1. כאב בעכוז.<br>2. סיאטיקה.', img: 'images/BL/BL54.jpg'},
            {id: 'BL-57', name: 'Cheng Shan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע שנוצר מתחת לבטן של שריר GASTROCNEMIUS, 8 צון דיסטלית ל- BL-40.', func: '1. מטפלת בטחורים.', ind: '1. טחורים.', img: 'images/BL/BL57.jpg'},
            {id: 'BL-58', name: 'Fei Yang', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: '7 צון סופריורית ל-BL-60 כצון אינפריורית ולטרלית ל-BL-57.', func: '1. מקומית.', ind: '1. כאבים בשוק, בעקב.', img: 'images/BL/BL58.jpg'},
            {id: 'BL-60', name: 'Kun Lun', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['נהר - Jing-River', 'אסורה בזמן הריון'], loc: 'בשקע שבין המלאולוס הלטרלי לבין גיד אכילס.', func: '1. מורידה עודף YANG מהראש.<br>2. מפעילה את המרידיאן.<br>3. מטיבה עם הגב תחתון.<br>4. מוציאה רוח מה-TAI YANG.', ind: '1. כאבי ראש, כאבים בכל הגוף (חלק פוסטריורי).<br>2. כאבי גב תחתון כרוניים.', img: 'images/BL/BL60.jpg'},
            {id: 'BL-62', name: 'Shen Mai', heb: '', elm: 'none', elmN: '', tags: ['פתיחת Yang Qiao'], loc: 'בשקע מעט אינפריורי למלאולוס הלטרלי.', func: '1. פותחת את מרידיאן YANG QIAO.<br>2. מרגיעה את הנפש ומטפלת באפילפסיה (DU MAI).', ind: '1. עייפות קיצונית (קושי להחזיק עיניים פתוחות).<br>2. אפילפסיה.', img: 'images/BL/BL62.jpg'},
            {id: 'BL-63', name: 'Jin Men', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: 'בצד הלטרלי של כף הרגל, בשקע פרוקסימלית לבליטת העצם המטטרסלית החמישית.', func: '1. מפעילה את המרידיאן.', ind: '1. כאבים לאורך המרידיאן.', img: 'images/BL/BL63.jpg'},
            {id: 'BL-64', name: 'Jing Gu', heb: '', elm: 'none', elmN: '', tags: ['מקור - Yuan'], loc: 'בצד הלטרלי של כף הרגל, בשקע דיסטאלית לבליטת העצם המטטרסלית החמישית.', func: '-', ind: '-', img: 'images/BL/BL64.jpg'},
            {id: 'BL-65', name: 'Shu Gu', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['פלג - Shu-Stream', 'פיזור - Sedation'], loc: 'בצד הלטרלי של כף הרגל, בשקע פרוקסימאלית למפרק המטטרסו-פאלאנגיאלי החמישי.', func: '1. מפעילה את המרידיאן.', ind: '1. כאבים לאורך המרידיאן.', img: 'images/BL/BL65.jpg'},
            {id: 'BL-66', name: 'Zu Tong Gu', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['מעיין - Ying-Spring', 'שעה - Horary'], loc: 'בצד הלטרלי של כף הרגל, בשקע דיסטלית למפרק המטטרסו-פלנגיאלי החמישי.', func: '1. מוציאה חום מהאיבר והמרידיאן.', ind: '1. דלקת בשלפוחית השתן.', img: 'images/BL/BL66.jpg'},
            {id: 'BL-67', name: 'Zhi Yin', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['באר - Jing-Well', 'חיזוק - Tonification', 'אסורה בזמן הריון'], loc: '0.1 צון פרוקסימאלית לפינת הציפורן בחלק הלטראלי של האצבע הקטנה של הרגל.', func: '1. מטיבה עם העיניים.<br>2. מטיבה עם הרחם.<br>3. (BLADDER) TMM.', ind: '1. בעיות עיניים.<br>2. היפוך עובר.<br>3. כאבים לאורך מרידיאן ה-BLADDER.', img: 'images/BL/BL67.jpg'}
        ]
    },

    // --- מרידיאן ה-DU ---
    DU: {
        title: "מרידיאן החוצה האחורי (DU MAI - 督脉)", 
        element: "-", 
        hours: "-", 
        layer: "Sea of Yang", 
        partner: "Ren Mai",
        insideM: "<br><strong>מסלול פנימי:</strong> מתחיל בבטן תחתונה (Perineum / Dan Tian) וקשור ל-KIDNEY.<br><strong>מסלול חיצוני:</strong> עולה על קו האמצע דרך ה-Sacrum, ממשיך דרך גב תחתון, אמצעי ועליון. משם עולה בקו האמצע דרך הצוואר אל הראש וה-Vertex, יורד בקו האמצע ומסתיים בחיבור שבין השפה העליונה והחניכיים.",
        general: "<br><strong>נקודות פתיחה:</strong> Sea of Yang - SI3 + BL62.",     
        points: [
            {id: 'DU-1', name: 'Chang Qiang', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo', 'מפגש עם Ren ו-KID'], loc: 'אמצע הדרך בין קצה עצם הזנב (COCCYX) לבין פי הטבעת.', func: '', ind: '1. טחורים.', img: 'images/DU/DU1.jpg'},
            {id: 'DU-2', name: 'Yao Shu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בין עצם הזנב (COCCYX) ועצם העצה (SACRUM), בשקע ה-SACRO COCCYGEAL HIATUS.', func: '', ind: '1. מקומית.<br>2. בעיות של עצם הזנב.', img: 'images/DU/DU2.jpg'},
            {id: 'DU-3', name: 'Yao Yang Guan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע של הגב התחתון, בשקע מתחת ל-SPINOUS PROCESS של החוליה הלומברית ה-4 (L4-L5).', func: '', ind: '1. כאב גב תחתון.', img: 'images/DU/DU3.jpg'},
            {id: 'DU-4', name: 'Ming Men', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע מתחת ל-SPINOUS PROCESS של החוליה הלומברית ה-2 (בין L2 ל L3).', func: '1. מחזקת KIDNEY YANG.', ind: '1. אימפוטנציה.<br>2. בעיות פוריות (גבר ואישה) וקור קיצוני בכל הגוף.<br><br><em>הערה קלינית (Kidney Yang Xu):</em> חסר זה מתבטא בתחושת קור בכל הגוף, צניחות, חיוורון בוהק, כאב גב תחתון, שתן מרובה ובהיר, בצקות, עייפות ואימפוטנציה.', img: 'images/DU/DU4.jpg'},
            {id: 'DU-8', name: 'Jin Suo', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע מתחת ל-SPINOUS PROCESS של חוליה T-9 (מרווח T9-T10).', func: '1. משחררת התכווצות שרירים.', ind: '', img: 'images/DU/DU8.jpg'},
            {
                id: 'DU-10', 
                name: 'Ling Tai', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['אמפירית'], 
                loc: 'על קו האמצע האחורי, בשקע מתחת ל-SPINOUS PROCESS של חוליה T-6 (מרווח T6-T7).', 
                func: 'מטהרת חום ורעילות מהדם, מרגיעה שיעול וצפצופי נשימה.', 
                ind: 'נקודה אמפירית (ספציפית) למצבי רעילות בדם, פריחות חמות, פרונקלים (Boils / שחין) ודלקות עור. בנוסף מטפלת בשיעול, אסטמה, וכאב או נוקשות בגב העליון.', 
                img: 'images/DU/DU10.jpg'
            },
            {id: 'DU-11', name: 'Shen Dao', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע מתחת ל-SPINOUS PROCESS של חוליה T-5 (מרווח T5-T6).', func: '', ind: '', img: 'images/DU/DU11.jpg'},
            {id: 'DU-14', name: 'Da Zhui', heb: '', elm: 'none', elmN: '', tags: ['מפגש מרידיאני ה-YANG', 'ים ה-Qi - Sea of Qi'], loc: 'בשקע מתחת ל-SPINOUS PROCESS של החוליה C-7.', func: '1. מוציאה חום.<br>2. מסלקת רוח.<br>3. מניעה YANG.', ind: '', img: 'images/DU/DU14.jpg'},
            {id: 'DU-15', name: 'Ya Men', heb: '', elm: 'none', elmN: '', tags: ['ים ה-Qi - Sea of Qi'], loc: 'בשקע 0.5 צון אינפריורית ל-DU 16, מתחת ל-SPINOUS PROCESS של החוליה C-1 (אינה ניתנת למישוש).', func: '1. מטיבה עם הקול.', ind: '1. גמגום ואיבוד קול.', img: 'images/DU/DU15.jpg'},
            {id: 'DU-16', name: 'Feng Fu', heb: '', elm: 'none', elmN: '', tags: ['ים מח העצם - Sea of Marrow', 'אשנב לרקיע - Window of Heaven'], loc: 'בשקע ישירות מתחת ל-EXTERNAL OCCIPITAL PROTUBERANCE.', func: '1. מוציאה רוח מאזור הראש (פנימית וחיצונית).<br>2. מזינה את ה-MARROW.', ind: '1. רעד ואפילפסיה.', img: 'images/DU/DU16.jpg'},
            {id: 'DU-20', name: 'Bai Hui', heb: '', elm: 'none', elmN: '', tags: ['ים מח העצם - Sea of Marrow'], loc: 'על הוורטקס בקו האמצע, 5 צון פוסטריורית לקו השיער הקדמי ו-7 צון סופריורית לקו השיער האחורי. (יכולה להימצא גם 8 צון פוסטריורית לגלבלה ו-6 צון סופריורית ל-EXTERNAL OCCIPITAL PROTUBERANCE).', func: '1. מורידה או מעלה YANG.<br>2. מזינה את ה-MARROW.', ind: '', img: 'images/DU/DU20.jpg'},
            {id: 'DU-23', name: 'Shang Xing', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בחלק העליון של הראש על קו האמצע, 1 צון פוסטריורית לקו השיער הקדמי.', func: '1. מיטיבה עם האף.', ind: '1. נזלת.', img: 'images/DU/DU23.jpg'},
            {id: 'DU-24', name: 'Shen Ting', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בחלק העליון של הראש על קו האמצע, 0.5 צון פוסטריורית לקו השיער הקדמי.', func: '1. מרגיעה את הנפש.', ind: '', img: 'images/DU/DU24.jpg'},
            {id: 'DU-26', name: 'Ren Zhong', heb: '', elm: 'none', elmN: '', tags: [], loc: 'מעל השפה העליונה, בשקע שנמצא בין השליש העליון לשני השלישים התחתונים של הפילטרום.', func: '1. מטיבה עם הגב התחתון.<br>2. מחזירה להכרה.', ind: '1. כאב גב תחתון אקוטי.<br>2. התעלפויות.', img: 'images/DU/DU26.jpg'}
        ]
    }
};