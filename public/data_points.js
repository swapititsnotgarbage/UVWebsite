// ==========================================
// === קובץ data_points.js ===
// ==========================================

const data = {
   // --- מרידיאן הריאות ---
    LU: {
    title: "מרידיאן הריאות (LUNG MERIDIAN - 肺)", 
    element: "מתכת", 
    hours: "03:00-05:00", 
    layer: "Hand Tai Yin", 
    partner: "Large Intestine",
    insideM: "<br>1. ST (RN-12) &larr; LI &larr; LU &larr; גרון &larr; delto-pectoral triangle.<br>2. LU-7 &larr; חלק רדיאלי של אצבע 2 &larr; נפגש עם מרידיאן ה-Large Intestine.<br><br><strong>מסלול חיצוני:</strong><br>חלק אנטריורי / לטראלי של הזרוע &larr; חלק אנטריורי / לטראלי של האמה &larr; styloid of radius &larr; שורש כף היד &larr; חלק פלמארי / רדיאלי של עצם מטקרפאלית 1 &larr; מסתיים בחלק הרדיאלי של ציפורן האגודל.", 
    general: "<br>1. שולט ב-Qi ובנשימה.<br>2. אחראי על הורדה והפצה.<br>3. שולט בעור.<br>4. נפתח לאף ומשכן את ה-Po.",
        points: [
            {
                id: 'LU-1', 
                name: 'Zhong Fu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['התראה - Front Mu', 'מפגש Tai Yin'], 
                loc: '6 צון לטראלית לקו האמצע, במרווח הבין צלעי הראשון (על ה-delto-pectoral triangle).', 
                func: '1. מורידה LUNG QI.<br>2. מפזרת ליחה בריאות.', 
                ind: '1. שיעול, אסטמה, קוצר נשימה.<br>2. שיעול עם ליחה.',
                img: 'images/LU/LU1.jpg'
            },
            {
                id: 'LU-3', 
                name: 'Tian Fu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['אשנב לרקיע - Window of Heaven'], 
                loc: 'בחלק האנטריורי-לטרלי של הזרוע, 3 צון אינפריורית לקפל האקסילרי בשקע שבין הגבול הלטרלי של שריר ה-BICEPS ועצם ההומרוס.', 
                func: '1. מטפלת ב-Po.', 
                ind: '1. דיכאון, בכי, חוסר שקט.',
                img: 'images/LU/LU3.jpg'
            },
            {
                id: 'LU-5', 
                name: 'Chi Ze', 
                heb: '', 
                elm: 'water', 
                elmN: 'אלמנט: מים', 
                tags: ['ים - He-Sea', 'פיזור - Sedation'], 
                loc: 'בקפל הקוביטלי של המרפק, בצד הרדיאלי של גיד ה-BICEPS.', 
                func: '1. מטפלת ב-LUNG HEAT.', 
                ind: '1. שיעול עם ליחה.<br>2. שיעול דמי.',
                img: 'images/LU/LU5.jpg'
            },
            {
                id: 'LU-6', 
                name: 'Kong Zui', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['הצטברות - Xi-Cleft'], 
                loc: '7 צון פרוקסימלית ל-LU-9, על הקו המחבר בין LU-9 לבין LU-5.', 
                func: '1. מורידה LUNG QI.', 
                ind: '1. שיעול אקוטי (ללא ליחה).',
                img: 'images/LU/LU6.jpg'
            },
            {
                id: 'LU-7', 
                name: 'Lie Que', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['חיבור - Luo', 'פתיחת Ren Mai', 'שליטה - Command Point'], 
                loc: 'בחלק הרדיאלי של האמה, 1.5 צון פרוקסימלית ל-LU-9 בשקע שבין הגידים Brachoradialis ו-Abductor Pollicis Longus.', 
                func: '1. מטפלת בעצב.<br>2. מטיבה עם העורף, מוציאה רוח חיצונית, מסדירה Lung Qi.<br>3. מפעילה את ה-Ren Mai.', 
                ind: '1. עצב, צער.<br>2. הצטננות, נזלת, שיעול.<br>3. חיזוק Yin, גינקולוגיה.',
                img: 'images/LU/LU7.jpg'
            },
            {
                id: 'LU-8', 
                name: 'Jing Qu', 
                heb: '', 
                elm: 'metal', 
                elmN: 'אלמנט: מתכת', 
                tags: ['נהר - Jing-River', 'שעה - Horary'], 
                loc: '1 צון פרוקסימלית ל-LU-9, על הקו המחבר בין LU-9 לבין LU-5.', 
                func: '1. מאזנת אלמנט המתכת.', 
                ind: '-',
                img: 'images/LU/LU8.jpg'
            },
            {
                id: 'LU-9', 
                name: 'Tai Yuan', 
                heb: '', 
                elm: 'earth', 
                elmN: 'אלמנט: אדמה', 
                tags: ['מקור - Yuan', 'פלג - Shu-Stream', 'חיזוק - Tonification', 'השפעה - Hui'], 
                loc: 'על מפרק כף היד, בשקע שבין העורק הרדיאלי ובין הגיד ה-Abductor Pollicis Longus.', 
                func: '1. מחזקת ומאזנת את כל תפקודי ה-LUNG.<br>2. מטפלת בכאבי מפרקים.', 
                ind: '1. סינדרומים של חוסר של ה-LUNG (שיעול, אסטמה, קוצר נשימה).<br>2. כאבי מפרקים לאורך המרידיאן.',
                img: 'images/LU/LU9.jpg'
            },
            {
                id: 'LU-10', 
                name: 'Yu Ji', 
                heb: '', 
                elm: 'fire', 
                elmN: 'אלמנט: אש', 
                tags: ['מעיין - Ying-Spring'], 
                loc: 'בשקע בין אמצע העצם המטקרפלית הראשונה ושריר ה-THENAR.', 
                func: '1. מטפלת ב-LUNG HEAT.', 
                ind: '1. כאב גרון.',
                img: 'images/LU/LU10.jpg'
            },
            {
                id: 'LU-11', 
                name: 'Shao Shang', 
                heb: '', 
                elm: 'wood', 
                elmN: 'אלמנט: עץ', 
                tags: ['באר - Jing-Well'], 
                loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הרדיאלי של האגודל.', 
                func: '1. מטפלת ב-LUNG HEAT.', 
                ind: '1. מצב אקוטי של חסימת דרכי נשימה.',
                img: 'images/LU/LU11.jpg'
            }
        ]
    },
    
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
            {
                id: 'LI-1', 
                name: 'Shang Yang', 
                heb: '', 
                elm: 'metal', 
                elmN: 'אלמנט: מתכת', 
                tags: ['באר - Jing-Well', 'שעה - Horary'], 
                loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הרדיאלי של אצבע המורה.', 
                func: '1. מפעילה TMM.', 
                ind: '1. כאבי שרירים לאורך המרידיאן.',
                img: 'images/LI/LI1.jpg'
            },
            {
                id: 'LI-2', 
                name: 'Er Jian', 
                heb: '', 
                elm: 'water', 
                elmN: 'אלמנט: מים', 
                tags: ['מעיין - Ying-Spring', 'פיזור - Sedation'], 
                loc: 'בצד הרדיאלי של האצבע המורה, דיסטלית למפרק המטקרפו-פלנגיאלי השני.', 
                func: '1. מוציאה חום מה-Large Int.<br>2. מוציאה חום מה-Yang Ming.', 
                ind: '1. עצירות על רקע חום.<br>2. "4 Bigs" (חום גבוה, צמא וכו\').',
                img: 'images/LI/LI2.jpg'
            },
            {
                id: 'LI-3', 
                name: 'San Jian', 
                heb: '', 
                elm: 'wood', 
                elmN: 'אלמנט: עץ', 
                tags: ['פלג - Shu-Stream'], 
                loc: 'בצד הרדיאלי של האצבע המורה, בשקע, פרוקסימלית למפרק המטקרפו-פאלנגיאלי השני.', 
                func: '1. כאבי מפרקים.', 
                ind: '1. כאבי מפרקים לאורך המרידיאן (מרפק, כתף).',
                img: 'images/LI/LI3.jpg'
            },
            {
                id: 'LI-4', 
                name: 'He Gu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['מקור - Yuan', 'שליטה - Command Point'], 
                loc: 'בין העצמות המטקרפליות הראשונה והשנייה, בגובה אמצע העצם המטקרפלית השנייה וצמוד אליה.', 
                func: '1. מוציאה רוח חיצונית.<br>2. מטיבה עם הפנים (נקודת "שליטה" לפנים).<br>3. מניעה QI.<br>4. מעודדת צירי לידה.', 
                ind: '1. צינון, שפעת (גפ"ח).<br>2. שיתוק פנים, שיניים.<br>3. עיקרית לכאבים PAIN.<br>4. זירוז לידה - אסורה בזמן הריון!',
                img: 'images/LI/LI4.jpg'
            },
            {
                id: 'LI-5', 
                name: 'Yang Xi', 
                heb: '', 
                elm: 'fire', 
                elmN: 'אלמנט: אש', 
                tags: ['נהר - Jing-River'], 
                loc: 'בצד הרדיאלי של פרק כף היד, בשקע שנוצר בין הגיד extensor pollicis longus והגיד extensor pollicis brevis (snuffbox).', 
                func: '1. מקומית.', 
                ind: '1. כאבים במפרק היד.',
                img: 'images/LI/LI5.jpg'
            },
            {
                id: 'LI-6', 
                name: 'Pian Li', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['חיבור - Luo'], 
                loc: '3 צון פרוקסימאלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', 
                func: '1. פותחת מעברי המים.', 
                ind: '1. בצקות בפנים.',
                img: 'images/LI/LI6.jpg'
            },
            {
                id: 'LI-7', 
                name: 'Wen Liu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['הצטברות - Xi-Cleft'], 
                loc: '5 צון פרוקסימלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', 
                func: '1. ויסות QI לאורך המרידיאן.', 
                ind: '1. כאבים לאורך המרידיאן.',
                img: 'images/LI/LI7.jpg'
            },
            {
                id: 'LI-10', 
                name: 'Shou San Li', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: [], 
                loc: '10 צון דיסטלית ל-LI-5 על הקו המחבר בין LI-5 לבין LI-11.', 
                func: '1. מזינה QI & BLOOD לגפיים העליונית.', 
                ind: '1. חולשת נימול, שיתוק של הגפיים העליונות.',
                img: 'images/LI/LI10.jpg'
            },
            {
                id: 'LI-11', 
                name: 'Qu Chi', 
                heb: '', 
                elm: 'earth', 
                elmN: 'אלמנט: אדמה', 
                tags: ['ים - He-Sea', 'חיזוק - Tonification'], 
                loc: 'אמצע הדרך בין LU-5 לבין האפיקונדיל הלטראלי (בצד הלטראלי של סוף הקפל הקוביטלי).', 
                func: '1. מורידה חום מדיד.<br>2. מוציאה חום.<br>3. מפסיקה גירוד.<br>4. מורידה לחץ דם.', 
                ind: '1. חום (fever).<br>2. סינדרומים ופתולוגיות של חום (heat, fire).<br>3. גירוד על רקע חום בדם.<br>4. לחץ דם גבוה.',
                img: 'images/LI/LI11.jpg'
            },
            {
                id: 'LI-15', 
                name: 'Jian Yu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: [], 
                loc: 'בשקע אנטריורית ואינפריורית לקצה האקרומיון.', 
                func: '1. מקומית לכתף.', 
                ind: '1. כאבים בכתף, בעיות תנועה בכתף.',
                img: 'images/LI/LI15.jpg'
            },
            {
                id: 'LI-18', 
                name: 'Fu Tu', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: ['אשנב לרקיע - Window of Heaven'], 
                loc: 'בצד הלטרלי של הצוואר, בגובה הגרוגרת בין ראשי השריר STERNOCLEIDOMASTOID (SCM).', 
                func: '1. מקומית.', 
                ind: '1. כאבי גרון, אובדן קול.',
                img: 'images/LI/LI18.jpg'
            },
            {
                id: 'LI-20', 
                name: 'Ying Xiang', 
                heb: '', 
                elm: 'none', 
                elmN: '', 
                tags: [], 
                loc: 'על הקפל הנאזו-לביאלי (קפל החיוך), בגובה אמצע הגבול הלטראלי ביותר של הנחיר.', 
                func: '1. פותחת מעברי האף.', 
                ind: '1. אף סתום.',
                img: 'images/LI/LI20.jpg'
            }
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

    // --- מרידיאן הטחול ---
    SP: {
        title: "מרידיאן הטחול (SPLEEN MERIDIAN - 脾)", element: "אדמה", hours: "09:00-11:00", layer: "Foot Tai Yin", partner: "Stomach",
        insideM: "<br> 1. STOMACH ← SPLEEN ← RN-10 ← בסיס הלשון.<br>2. HEART ← STOMACH",
        general: "  <br> שולט בהתמרה והובלה (T&T).<br>שולט בדם (מחזיק את הדם בכלי הדם).<br>שולט בשרירים ובארבע הגפיים.<br>נפתח לפה ומתבטא בשפתיים.<br>משכן את ה-Yi (מחשבה, ריכוז).",     
        points: [
            {id: 'SP-1', name: 'Yin Bai', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['באר - Jing-Well'], loc: '0.1 צון פרוקסימלית לפינת הציפורן, בחלק המדיאלי של הבוהן הראשונה.', func: '1. עוצרת דימומים (בעיקר מהמחמם התחתון).', ind: '1. טחורים מדממים.<br>2. וסת ארוך.', img: 'images/SP/SP1.jpg'},
            {id: 'SP-2', name: 'Da Du', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['מעיין - Ying-Spring', 'חיזוק - Tonification'], loc: 'בצד המדיאלי של הבוהן ברגל , דיסטלית ואינפריורית למפרק העצם המטטרסלי-פלנגיאלי הראשון.', func: '1. מחזקת את אלמנט האדמה.', ind: '-', img: 'images/SP/SP2.jpg'},
            {id: 'SP-3', name: 'Tai Bai', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['פלג - Shu-Stream', 'מקור - Yuan', 'שעה - Horary'], loc: 'בצד המדיאלי של הרגל, פרוקסימלית למפרק המטטרסו- פאלנגיאלי הראשון בצוואר העצם.', func: '1. הנקודה העיקרית לחיזוק הטחול (Qi ו-Yang).', ind: '', img: 'images/SP/SP3.jpg'},
            {id: 'SP-4', name: 'Gong Sun', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo', 'Chong Mai'], loc: 'בצד המדיאלי של הרגל, דיסטלית ואינפריורית לבסיס העצם המטטרסלית הראשונה, בצוואר העצם. <br> (מרחק כצון מ - SP-3)', func: '1. דאגה.<br>2. מסדירה את המחמם האמצעי.<br>3. מפעילה את ה Chong Mai - .', ind: '1. מחשבות יתר.<br>2. בחילות, הקאות.<br>3. בעיות גינקולוגיה - כאבי מחזור, אמנוריה.', img: 'images/SP/SP4.jpg'},
            {id: 'SP-5', name: 'Shang Qiu', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['נהר - Jing-River', 'פיזור - Sedation'], loc: 'בצד המדיאלי של הקרסול, אנטריורית ואינפריורית לבליטת המלאולוס המדיאלי. (snuffbox של הרגל )', func: '1. מוציאה לחות מהמפרקים.<br>2. מוציאה לחות מה - Tai Yin.', ind: '1. נפיחות במפרקים.<br>2. ליחה בריאות.', img: 'images/SP/SP5.jpg'},
            {id: 'SP-6', name: 'San Yin Jiao', heb: '', elm: 'none', elmN: '', tags: ['מפגש יין - Yin Meeting'], loc: 'בצד המדיאלי של השוק, 3 צון סופריורית לבליטת המלאולוס המדיאלי, בשקע קרוב TIBIA .-ל .', func: '1. מחזקת Yin ודם.<br>2. מסדירה את הרחם והמחזור.<br>3. מרגיעה נפש.<br>4. מעודדת צירי לידה.', ind: '1. מצבים של חוסר דם ו - Yin.<br>2. אמנוריה, כאבי מחזור.<br>3. אינסומניה (נדודי שינה).<br>4. זירוז לידה - אסורה בהריון!', img: 'images/SP/SP6.jpg'},            
            {id: 'SP-8', name: 'Di Ji', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: 'בצד המדיאלי של השוק, 10 צון מהמלאולוס המדיאלי SP-6 -ל SP-9 על.', func: 'מסדירה מחזור ועוצרת כאב.', ind: 'כאבי מחזור חזקים.', img: 'images/SP/SP8.jpg'},
            {id: 'SP-9', name: 'Yin Ling Quan', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['ים - He-Sea'], loc: 'בצד המדיאלי של השוק, בשקע בצוואר עצם של עצם ה Tibia.', func: '1. מוציאה לחות (מהמחמם האמצעי והתחתון).<br>2. מעודדת השתנה.', ind: '1. דלקות שלפוחית השתן.<br>2. הפרשות וגינאליות.', img: 'images/SP/SP9.jpg'},
            {id: 'SP-10', name: 'Xue Hai', heb: '', elm: 'none', elmN: '', tags: [], loc: '2 צון פרוקסימלית לגבול המדיאלי - סופריורי של הפטלה ( 45).', func: '1. מניעה דם.<br>2. מוציאה חום מהדם.<br>3. מחזקת דם.', ind: '1. פריחה ובעיות עור (אקזמה, אורטיקריה) על רקע חום בדם.<br>2. גניקולוגיה.', img: 'images/SP/SP10.jpg'},
            {id: 'SP-15', name: 'Da Heng', heb: '', elm: 'none', elmN: '', tags: [], loc: '4 צון לטראלית למרכז הטבור (בגובה הטבור), בגבול הלטרלי של שריר ה-Rectus Abdominis.', func: 'מהרמנת את המעיים.', ind: 'עצירות / שלשול.', img: 'images/SP/SP15.jpg'},
            {id: 'SP-21', name: 'Da Bao', heb: '', elm: 'none', elmN: '', tags: ['חיבור גדול - Great Luo'], loc: 'בקו הקפל האקסילרי, במרווח הבין-צלעי השישי (שביעי).', func: '1. ויסות צ\'י ודם.', ind: 'כאבים בכל הגוף, חולשת איברים.', img: 'images/SP/SP21.jpg'}
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

    // --- מרידיאן הלב ---
    HT: {
        title: "מרידיאן הלב (HEART MERIDIAN - 心)", 
        element: "אש", 
        hours: "11:00-13:00", 
        layer: "Hand Shao Yin", 
        partner: "Small Intestine",
        insideM: "<br>1. מהמעי הדק (SI) אל הלב (HT).<br>2. מהלב (HT) אל הוושט, הלחי ועד לרקמת העין.<br>3. מהריאות (LU) אל הלב (HT) ומשם לבית השחי.",
        general: "<br>1. שולט בדם ובכלי הדם (משמש כמשאבה המזרימה דם, אתר ייצור הדם, ואחראי על תקינות, חוזק וגמישות כלי הדם).<br>2. מאחסן את הנפש (Shen - הנפש נכנסת ללב ומוסעת ע\"י הדם לכל הגוף).<br>3. נפתח ללשון.<br>4. שולט בזיעה (אחראי על ייצור הזיעה).<br>5. מתבטא בעיניים.",     
        points: [
            {id: 'HT-1', name: 'Ji Quan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע במרכז האקסילה (בית השחי).', func: '1. משחררת את אזור החזה.<br>2. מטפלת בהזעות בבית השחי.', ind: '1. הזעה בבית השחי.<br>2. כאבים בחזה.<br>3. מועקה בחזה.', img: 'images/HT/HT1.jpg'},
            {id: 'HT-3', name: 'Shao Hai', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['ים - He-Sea'], loc: 'באמצע הדרך בין PC-3 לבין האפיקונדיל המדיאלי של עצם ה- HUMERUS. נמצאת בקצה המדיאלי של הקפל הקוביטלי, כאשר היד בפלקציה מלאה.', func: '1. מאזנת אש/מים.', ind: '1. חרדה.<br>2. דיכאון.', img: 'images/HT/HT3.jpg'},
            {id: 'HT-4', name: 'Ling Dao', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['נהר - Jing-River'], loc: 'בצד הרדיאלי של גיד ה- FLEXOR CARPI ULNARIS. הנקודה ממוקמת 1.5 צון פרוקסימלית ל-HT-7.', func: '1. מרגיעה את הנפש.', ind: '-', img: 'images/HT/HT4.jpg'},
            {id: 'HT-5', name: 'Tong Li', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: 'בצד הרדיאלי של גיד ה- FLEXOR CARPI ULNARIS. הנקודה ממוקמת 1 צון פרוקסימלית ל-HT-7.', func: '1. מטיבה עם הלשון.<br>2. מטפלת ברגש שמחה.<br>3. מסדירה HT-QI.', ind: '1. גמגום.<br>2. איבוד קול פתאומי.<br>3. הפרעות קצב.', img: 'images/HT/HT5.jpg'},
            {id: 'HT-6', name: 'Yin Xi', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: 'בצד הרדיאלי של גיד ה- FLEXOR CARPI ULNARIS. הנקודה ממוקמת 0.5 צון פרוקסימלית ל-HT-7.', func: '1. מחזקת HT YIN.<br>2. מחזקת HT BLOOD.', ind: '1. הזעות לילה.<br>2. אינסומניה.', img: 'images/HT/HT6.jpg'},
            {id: 'HT-7', name: 'Shen Men', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['פלג - Shu-Stream', 'פיזור - Sedation', 'מקור - Yuan'], loc: 'במפרק כף היד בצידו הרדיאלי של גיד FLEXOR CARPI ULNARIS בגבול הפרוקסימלי של עצם ה- PISIFORM.', func: '1. מחזקת את כל תפקודי ה-HEART.<br>2. מרגיעה את הנפש.', ind: '1. אי שקט.<br>2. אינסומניה.', img: 'images/HT/HT7.jpg'},
            {id: 'HT-8', name: 'Shao Fu', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['מעיין - Ying-Spring', 'שעה - Horary'], loc: 'בכף היד, בשקע בין העצמות המטאקרפליות הרביעית והחמישית. בגובה צוואר עצם מטקארפאלית החמישית.<br><br><em>הערה:</em> הנקודה בד\"כ נמצאת בין שני הקווים הרוחביים של כף היד.', func: '1. מוציאה חום מה- HEART.', ind: '1. אי שקט.<br>2. חלימה לא שקטה על רקע חום ה- HEART.', img: 'images/HT/HT8.jpg'},
            {id: 'HT-9', name: 'Shao Chong', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['באר - Jing-Well', 'חיזוק - Tonification'], loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הרדיאלי של הזרת.', func: '1. מחזירה להכרה.', ind: '1. התקף לב.', img: 'images/HT/HT9.jpg'}
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
    
    // --- מרידיאן ה-REN ---
    REN: {
        title: "מרידיאן ה-REN MAI (Conception Vessel)", 
        element: "Yin", 
        hours: "-", 
        layer: "Sea of Yin", 
        partner: "Du Mai",
        insideM: "<br><strong>מסלול פנימי 1:</strong> מקיף את הפה ומסתיים מתחת לעיניים.<br><strong>מסלול פנימי 2:</strong> מתחיל בחלל האגן, חודר לחוט השדרה ועולה מעלה לאורך הגב.",
        general: "<br><strong>מסלול חיצוני:</strong> מתחיל באזור הבטן התחתונה (רחם / dantian) בפרינאום (perineum), עולה במרכז הבטן התחתונה אל אזור הבטן, ממשיך לחזה ולגרון, ומסתיים מתחת לשפה התחתונה.<br><br><strong>תפקוד כללי:</strong> ויסות והזנה של ה-Yin Qi, ושליטה על תחום הגינקולוגיה.",
        points: [
            {id: 'REN-1', name: 'Hui Yin', heb: '', elm: 'none', elmN: '', tags: ['מפגש - Meeting', 'מפגש REN, DU, CHONG MAI'], loc: 'אמצע הדרך בין פי הטבעת ושק האשכים אצל גברים, ואמצע הדרך בין פי הטבעת לגבול הפוסטריורי של שפתי הפות אצל נשים.', func: '1. נקודה מקומית, החייאה.<br>2. מטפלת בבעיות גינקולוגיות.', ind: '1. ואגיניסמוס.<br>2. בעיות במערכת השתן.', img: 'images/REN/RN1.jpg'},
            {id: 'REN-2', name: 'Qu Gu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע, בגבול העליון של עצם ה-SYMPHYSIS PUBIC.', func: '1. גינקולוגיה.', ind: '1. בעיות במערכת השתן.<br>2. הפרשות וגינליות.', img: 'images/REN/RN2.jpg'},
            {id: 'REN-3', name: 'Zhong Ji', heb: '', elm: 'none', elmN: '', tags: ['התראה (BL) - Mu of BL', 'מפגש 3 מרידיאני ה-YIN של הרגל'], loc: 'על קו האמצע, 4 צון אינפריורית לטבור, 1 צון סופריורית ל-SYMPHYSIS PUBIC.', func: '1. מסדירה ומניעה QI בשלפוחית השתן.<br>2. מטיבה עם הרחם והמחזור.<br>3. מטפלת בלחות במחמם התחתון (רחם, שלפוחית השתן).', ind: '1. דלקת שלפוחית השתן.<br>2. דחיפות, תכיפות, בריחה, עצירת שתן.<br>3. כאבי מחזור.', img: 'images/REN/RN3.jpg'},
            {id: 'REN-4', name: 'Guan Yuan', heb: '', elm: 'none', elmN: '', tags: ['התראה (SI) - Mu of SI', 'מפגש 3 מרידיאני ה-YIN של הרגל'], loc: 'על קו האמצע, 3 צון אינפריורית לטבור, 2 צון סופריורית ל-SYMPHYSIS PUBIC.', func: '1. מחזקת JING (pre-heaven), XUE, ו-YIN.<br>2. מחזקת YUAN QI.<br>3. מחזקת כליות (Yin/Yang).<br>4. מסדירה ומזינה את הרחם.', ind: '1. בעיות מחזור, פוריות.<br>2. חולשה כללית, עייפות כרונית, אימפוטנציה.', img: 'images/REN/RN4.jpg'},
            {id: 'REN-5', name: 'Shi Men', heb: '', elm: 'none', elmN: '', tags: ['התראה (TW) - Mu of TW'], loc: 'על קו האמצע, 2 צון אינפריורית לטבור, 3 צון סופריורית ל-SYMPHYSIS PUBIC.', func: '1. מסדירה את מעברי המים.<br>2. מסדירה את הרחם.', ind: '1. בצקות.<br>2. כאבי בטן.', img: 'images/REN/RN5.jpg'},
            {id: 'REN-6', name: 'Qi Hai', heb: '', elm: 'none', elmN: '', tags: ['ים הצ\'י - Sea of Qi'], loc: 'על קו האמצע, 1.5 צון אינפריורית לטבור.', func: '1. מחזקת QI ו-YANG.<br>2. מחזקת Yang (במיוחד Yang הכליות).<br>3. מסדירה מחמם תחתון.', ind: '1. עייפות, חולשה, צניחות.<br>2. קוצר נשימה, כאבי בטן, שלשול.', img: 'images/REN/RN6.jpg'},
            {id: 'REN-7', name: 'Yin Jiao', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע, 1 צון אינפריורית לטבור.', func: '-', ind: '-', img: 'images/REN/RN7.jpg'},
            {id: 'REN-8', name: 'Shen Que', heb: '', elm: 'none', elmN: '', tags: ['אסורה לדיקור - Forbidden'], loc: 'הנקודה נמצאת במרכז הטבור.', func: '1. מחממת את ה-YANG וה-QI (בעזרת מוקסה - moxa).<br>2. מצילה מצבי קריסה (Collapse).', ind: '1. קור, דופק מאוד איטי.<br>2. שלשולים כרוניים.<br><br><em>הערה:</em> אסורה לדיקור! (מותר רק במוקסה).', img: 'images/REN/RN8.jpg'},
            {id: 'REN-9', name: 'Shui Fen', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע, 1 צון סופריורית לטבור.', func: '1. מווסטת את מעברי המים.', ind: '1. בצקות, הצטברות נוזלים.', img: 'images/REN/RN9.jpg'},
            {id: 'REN-12', name: 'Zhong Wan', heb: '', elm: 'none', elmN: '', tags: ['התראה (ST) - Mu of ST', 'השפעה (Fu) - Hui'], loc: '4 צון סופריורית לטבור ואמצע הדרך בין הטבור ל-STERNOCOSTAL ANGLE.', func: '1. הנקודה העיקרית לטיפול בקיבה.<br>2. מהרמנת את המחמם האמצעי.<br>3. מחזקת SP\\ST.', ind: '1. כאבי בטן, בחילות, הקאות.<br>2. צרבות, חוסר תיאבון.', img: 'images/REN/RN12.jpg'},
            {id: 'REN-14', name: 'Ju Que', heb: '', elm: 'none', elmN: '', tags: ['התראה (HT) - Mu of HT'], loc: '6 צון סופריורית לטבור, 2 צון אינפריורית ל-STERNOCOSTAL ANGLE.', func: '1. מוסתת את ה-HEART.<br>2. מרגיעה את ה-SHEN.', ind: '1. אינסומניה, חרדות, פלפיטציות.', img: 'images/REN/RN14.jpg'},
            {id: 'REN-15', name: 'Jiu Wei', heb: '', elm: 'none', elmN: '', tags: ['חיבור LUO של ה-REN MAI'], loc: 'על קו האמצע, 7 צון סופריורית לטבור, 1 צון אינפריורית ל-STERNOCOSTAL ANGLE.', func: '1. פותחת את החזה.', ind: '-', img: 'images/REN/RN15.jpg'},
            {id: 'REN-16', name: 'Zhong Ting', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע ב-STERNOCOSTAL ANGLE.', func: '-', ind: '-', img: 'images/REN/RN16.jpg'},
            {id: 'REN-17', name: 'Dan Zhong', heb: '', elm: 'none', elmN: '', tags: ['התראה (PC) - Mu of PC', 'ים הצ\'י - Sea of Qi', 'השפעה (Qi) - Hui'], loc: 'על קו האמצע של הסטרנום, במרווח הבין-צלעי הרביעי.', func: '1. פותחת את החזה ומניעה QI.<br>2. מורידה QI מורד.<br>3. מחזקת LUNG QI.<br>4. מטיבה עם השדיים (חלב).', ind: '1. לחץ / מועקה בחזה.<br>2. בעיות נשימה.<br>3. שיעול, אסטמה, קוצר נשימה, קושי בהנקה.', img: 'images/REN/RN17.jpg'},
            {id: 'REN-22', name: 'Tian Tu', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'על קו האמצע, במרכז ה-SUPRASTERNAL FOSSA.', func: '1. מורידה QI מורד.<br>2. מטיבה עם הגרון.', ind: '1. גלעין שיזף.<br>2. בעיות נשימה.<br>3. אסטמה, שיעול, כאב גרון, אובדן קול.', img: 'images/REN/RN22.jpg'},
            {id: 'REN-23', name: 'Lian Quan', heb: '', elm: 'none', elmN: '', tags: [], loc: 'על קו האמצע בחלקו האנטריורי של הצוואר, בשקע שמעל ה-HYOID BONE (גרוגרת).', func: '1. מטיבה עם הלשון.', ind: '1. בעיה עצבית בדיבור, אפאזיה.', img: 'images/REN/RN23.jpg'},
            {id: 'REN-24', name: 'Cheng Jiang', heb: '', elm: 'none', elmN: '', tags: ['מפגש - Meeting'], loc: 'מעל הסנטר, בשקע המנטו-לביאלי.', func: '1. השפעה מקומית.<br>2. מוציאה רוח מהפנים.', ind: '1. פציאליס, בעיות חניכיים.<br>2. שיתוק פנים, נפיחות בחניכיים, ריור יתר.', img: 'images/REN/RN24.jpg'}
        ]
    },


// --- מרידיאן מיוחד Du Mai ---
    // --- מרידיאן מיוחד Du Mai ---
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
    },
   


    // --- מרידיאן הכליות ---
    KID: {
        title: "מרידיאן הכליות (KIDNEY MERIDIAN - 腎)", 
        element: "מים", 
        hours: "17:00-19:00", 
        layer: "Foot Shao Yin", 
        partner: "Bladder",
        insideM: "<br><strong>מסלול פנימי:</strong> עובר מה-KID ל-BL ובחזרה ל-KID. עולה ל-LIV, LU, HT, מגיע ל-REN-17 וממשיך משם לגרון ולבסיס הלשון.",
        general: "<br><strong>מסלול חיצוני:</strong> מתחיל מתחת לכף הרגל, מקיף את המלאולוס המדיאלי, עולה באספקט המדיאלי-פוסטריורי של השוק והירך ל-Coccyx. משם עולה בבטן (0.5 צון מקו האמצע) ובחזה (2 צון מקו האמצע) ומסתיים מתחת לקלביקולה.<br><br><strong>תפקודים כלליים:</strong><br>1. שליטה במשק המים.<br>2. שליטה בקבלת צ'י.<br>3. אחסון ג'ינג.<br>4. ייצור Marrow.<br>5. שליטה בפתחים תחתונים.<br>6. נפתחות לאוזניים ומתבטאות בשיער הראש.<br>7. מאחסנות את ה-Zhi (כוח הרצון).",     
        points: [
            {id: 'KID-1', name: 'Yong Quan', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['באר - Jing-Well', 'פיזור - Sedation'], loc: 'בכף הרגל, בין העצמות המטטרסליות השניה והשלישית, שליש מהדרך בין הבסיס של הבוהן השניה לבין העקב (בשקע שנוצר כאשר כף הרגל ב-PLANTAR FLEXION).', func: '1. מזינה YIN לראש.<br>2. מורידה YANG.', ind: '1. לחץ דם גבוה.<br>2. מיגרנות.<br>3. סחרחורות.', img: 'images/KID/KID1.jpg'},
            {id: 'KID-2', name: 'Ran Gu', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['מעיין - Ying-Spring'], loc: 'בצד המדיאלי של הרגל, בשקע דיסטלית ואינפריורית ל-NAVICULAR TUBEROSITY.', func: '1. מטפלת בחום מחוסר (EMPTY-HEAT).', ind: '1. גלי חום.<br>2. חום ב-"5 הכפות".', img: 'images/KID/KID2.jpg'},
            {id: 'KID-3', name: 'Tai Xi', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['פלג - Shu-Stream', 'מקור - Yuan'], loc: 'בשקע שבין המלאולוס המדיאלי וגיד אכילס.', func: '1. מחזקת KIDNEY YIN.<br>2. מחזקת KIDNEY YANG.', ind: '1. חולשה בגב התחתון.<br>2. בריחת שתן.<br>3. תכיפות במתן שתן.<br>4. דחיפות במתן שתן.', img: 'images/KID/KID3.jpg'},
            {id: 'KID-4', name: 'Da Zhong', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: 'אמצע הדרך בין KID-3 לבין KID-5, בגבול האנטריורי של גיד אכילס.', func: '1. מעגנת LUNG QI.<br>2. מטפלת ב-ZHI.', ind: '1. אסטמה.<br>2. חוסר כוח רצון.<br>3. פחד.', img: 'images/KID/KID4.jpg'},
            {id: 'KID-5', name: 'Shui Quan', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: 'ישירות מתחת ל-KID-3 בשקע אנטריורית וסופריורית ל-CALCANEAL TUBEROSITY.', func: '1. מווסתת את המחזור.', ind: '1. דיסמנוריאה.<br>2. אמנוריאה.<br>3. בעיות פוריות.', img: 'images/KID/KID5.jpg'},
            {id: 'KID-6', name: 'Zhao Hai', heb: '', elm: 'none', elmN: '', tags: ['פתיחת Yin Qiao'], loc: '1 צון מתחת לבליטת המלאולוס המדיאלי, בשקע הנוצר בין שני קבצי רצועות.', func: '1. מחזקת KID YIN.<br>2. מטיבה עם הגרון.<br>3. מפעילה את ה-YIN QIAO.', ind: '1. אינסומניה.<br>2. גרון יבש.<br>3. בעיות גינקולוגיה.', img: 'images/KID/KID6.jpg'},
            {id: 'KID-7', name: 'Fu Liu', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['נהר - Jing-River', 'חיזוק - Tonification'], loc: 'באספקט המדיאלי של השוק, בשקע 2 צון סופריורית ל-KID-3 בגבול האנטריורי של גיד אכילס.', func: '1. מחזקת YANG.<br>2. מווסתת זיעה.<br>3. מטפלת בבצקות.', ind: '1. בצקות.<br>2. הזעות לילה.<br>3. הזעות ספונטאניות.<br>4. אימפוטנציה.', img: 'images/KID/KID7.jpg'},
            {id: 'KID-9', name: 'Zhu Bin', heb: '', elm: 'none', elmN: '', tags: ['הצטברות של Yin Wei'], loc: 'באספקט המדיאלי של השוק, 5 צון סופריורית ל-KID-3 על הקו המחבר בין KID-10 לבין KID-3.', func: '1. מרגיעה נפש.<br>2. פותחת את פתחי החישה.<br>3. פותחת את החזה.<br>4. מחזקת KID YIN.', ind: '1. אינסומניה.<br>2. חרדות.', img: 'images/KID/KID9.jpg'},
            {id: 'KID-10', name: 'Yin Gu', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['ים - He-Sea', 'שעה - Horary'], loc: 'בצד המדיאלי של הקפל הפופליטאלי, בין שני הגידים SEMITENDINOSUS ו-SEMIMEMBRANOSUS.', func: '1. מחזקת KIDNEY YIN.<br>2. מטיבה עם ה-Lower Jiao.', ind: '1. קושי במתן שתן.<br>2. שתן מגמגם.', img: 'images/KID/KID10.jpg'},
            {id: 'KID-11', name: 'Heng Gu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בבטן התחתונה, 5 צון אינפריורית לטבור, בגבול הסופריורי של ה-SYMPHYSIS PUBIS, ממוקמת 0.5 צון לטרלית לקו האמצע בגובה הנקודה REN-2.', func: '-', ind: '-', img: 'images/KID/KID11.jpg'},
            {id: 'KID-13', name: 'Qi Xue', heb: '', elm: 'none', elmN: '', tags: ['מפגש עם CHONG MAI'], loc: 'בבטן התחתונה, 3 צון אינפריורית לטבור, 0.5 צון לטרלית לקו האמצע בגובה הנקודה REN-4.', func: '1. מטיבה עם ה-CHONG וה-REN.', ind: '1. בעיות פוריות.<br>2. אמנוריאה.', img: 'images/KID/KID13.jpg'},
            {id: 'KID-16', name: 'Huang Shu', heb: '', elm: 'none', elmN: '', tags: ['מפגש עם CHONG MAI'], loc: 'על הבטן, 0.5 צון לטרלית למרכז הטבור.', func: '1. מווסתת את המעיים.<br>2. מאזנת בין אש למים.', ind: '1. עצירות על רקע חוסר YIN.', img: 'images/KID/KID16.jpg'},
            {id: 'KID-25', name: 'Shen Cang', heb: '', elm: 'none', elmN: '', tags: [], loc: 'במרווח הבין-צלעי השני, 2 צון לטרלית לקו האמצע.', func: '1. מרגיעה את הנפש.<br>2. מאזנת בין ה-HT ל-KID.', ind: '1. קוצר נשימה עקב חרדה.<br>2. מועקה בחזה על רקע חרדה.', img: 'images/KID/KID25.jpg'},
            {id: 'KID-27', name: 'Shu Fu', heb: '', elm: 'none', elmN: '', tags: [], loc: 'בשקע בגבול התחתון של הקלויקולה (מרווח 0), 2 צון לטרלית לקו האמצע.', func: '1. מורידה LUNG QI.', ind: '1. אסטמה על רקע LU/KID.', img: 'images/KID/KID27.jpg'}
        ]
    },

};

