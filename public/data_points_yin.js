// ==========================================
// === data_points_yin.js ===
// מרידיאני היין (LU, SP, HT, KID, LIV) ומרידיאן ה-REN
// ==========================================

const dataYin = {
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
            { id: 'LU-1', name: 'Zhong Fu', heb: '', elm: 'none', elmN: '', tags: ['התראה - Front Mu', 'מפגש Tai Yin'], loc: '6 צון לטראלית לקו האמצע, במרווח הבין צלעי הראשון (על ה-delto-pectoral triangle).', func: '1. מורידה LUNG QI.<br>2. מפזרת ליחה בריאות.', ind: '1. שיעול, אסטמה, קוצר נשימה.<br>2. שיעול עם ליחה.', img: 'images/LU/LU1.jpg' },
            { id: 'LU-3', name: 'Tian Fu', heb: '', elm: 'none', elmN: '', tags: ['אשנב לרקיע - Window of Heaven'], loc: 'בחלק האנטריורי-לטרלי של הזרוע, 3 צון אינפריורית לקפל האקסילרי בשקע שבין הגבול הלטרלי של שריר ה-BICEPS ועצם ההומרוס.', func: '1. מטפלת ב-Po.', ind: '1. דיכאון, בכי, חוסר שקט.', img: 'images/LU/LU3.jpg' },
            { id: 'LU-5', name: 'Chi Ze', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['ים - He-Sea', 'פיזור - Sedation'], loc: 'בקפל הקוביטלי של המרפק, בצד הרדיאלי של גיד ה-BICEPS.', func: '1. מטפלת ב-LUNG HEAT.', ind: '1. שיעול עם ליחה.<br>2. שיעול דמי.', img: 'images/LU/LU5.jpg' },
            { id: 'LU-6', name: 'Kong Zui', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: '7 צון פרוקסימלית ל-LU-9, על הקו המחבר בין LU-9 לבין LU-5.', func: '1. מורידה LUNG QI.', ind: '1. שיעול אקוטי (ללא ליחה).', img: 'images/LU/LU6.jpg' },
            { id: 'LU-7', name: 'Lie Que', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo', 'פתיחת Ren Mai', 'שליטה - Command Point'], loc: 'בחלק הרדיאלי של האמה, 1.5 צון פרוקסימלית ל-LU-9 בשקע שבין הגידים Brachoradialis ו-Abductor Pollicis Longus.', func: '1. מטפלת בעצב.<br>2. מטיבה עם העורף, מוציאה רוח חיצונית, מסדירה Lung Qi.<br>3. מפעילה את ה-Ren Mai.', ind: '1. עצב, צער.<br>2. הצטננות, נזלת, שיעול.<br>3. חיזוק Yin, גינקולוגיה.', img: 'images/LU/LU7.jpg' },
            { id: 'LU-8', name: 'Jing Qu', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['נהר - Jing-River', 'שעה - Horary'], loc: '1 צון פרוקסימלית ל-LU-9, על הקו המחבר בין LU-9 לבין LU-5.', func: '1. מאזנת אלמנט המתכת.', ind: '-', img: 'images/LU/LU8.jpg' },
            { id: 'LU-9', name: 'Tai Yuan', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['מקור - Yuan', 'פלג - Shu-Stream', 'חיזוק - Tonification', 'השפעה - Hui'], loc: 'על מפרק כף היד, בשקע שבין העורק הרדיאלי ובין הגיד ה-Abductor Pollicis Longus.', func: '1. מחזקת ומאזנת את כל תפקודי ה-LUNG.<br>2. מטפלת בכאבי מפרקים.', ind: '1. סינדרומים של חוסר של ה-LUNG (שיעול, אסטמה, קוצר נשימה).<br>2. כאבי מפרקים לאורך המרידיאן.', img: 'images/LU/LU9.jpg' },
            { id: 'LU-10', name: 'Yu Ji', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['מעיין - Ying-Spring'], loc: 'בשקע בין אמצע העצם המטקרפלית הראשונה ושריר ה-THENAR.', func: '1. מטפלת ב-LUNG HEAT.', ind: '1. כאב גרון.', img: 'images/LU/LU10.jpg' },
            { id: 'LU-11', name: 'Shao Shang', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['באר - Jing-Well'], loc: '0.1 צון פרוקסימלית לפינת הציפורן בחלק הרדיאלי של האגודל.', func: '1. מטפלת ב-LUNG HEAT.', ind: '1. מצב אקוטי של חסימת דרכי נשימה.', img: 'images/LU/LU11.jpg' }
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

    // --- מרידיאן הכבד ---
    LIV: {
        title: "מרידיאן הכבד (LIVER MERIDIAN - 肝)",
        element: "עץ",
        hours: "01:00-03:00",
        layer: "Foot Jue Yin",
        partner: "Gallbladder",
        insideM: "<br>1. LIV-13 &larr; סובב ST &larr; LIV &larr; GB &larr; מתפזר באזור היפוכונדריום &larr; עולה דרך הגרון ומגיע לרקמת העין &larr; עולה דרך המצח אל ה-vertex ונפגש עם DU-20.<br>2. עין &larr; לחי &larr; מקיף את השפתיים.<br>3. LIV &larr; LU &larr; PC-1.",
        general: "<br><strong>מסלול חיצוני:</strong><br>חלק לטראלי של הבוהן הראשונה &larr; גב כף הרגל בין עצמות מטטרסאליות 1-2 &larr; חלק אנטריורי של המלאולוס המדיאלי &larr; חלק מדיאלי של השוק ומצטלב עם SP-6 &larr; עולה תחילה אנטריורי למרידיאן ה-SP וממשיך פוסטריורית אליו &larr; חלק מדיאלי של הירך &larr; אזור המפשעה &larr; מבצע עיקול באזור הגניטלי &larr; עולה בבטן התחתונה דרך REN-2, REN-3 ו-REN-4 &larr; עולה דרך הצלעות ומסתיים במרווח הבין צלעי השישי.<br><br><strong>תפקודים כלליים:</strong><br>1. אחסון הדם והפצתו: הגנה, מחזור חודשי, נפש.<br>2. זרימה חלקה של צ'י: לכל המערכות ולכל המרידיאנים - גוף ונפש (יחס מיוחד למערכת הנשימה ומערכת העיכול).<br>3. שליטה בגידים וברצועות.<br>4. התבטאות בציפורניים.<br>5. נפתח לעיניים.<br>6. HUN מאוזן.",
       points: [
            { id: 'LIV-1', name: 'Da Dun', heb: '', elm: 'wood', elmN: 'אלמנט: עץ', tags: ['באר - Jing-Well', 'שעה - Horary'], loc: '0.1 צון פרוקסימלית לפינת הציפורן, באספקט הלטרלי של הבוהן הראשונה.', func: '1. מסדירה LIV QI שגורם לדימום רחמי.<br>2. מיטיבה עם הגניטליה.', ind: '1. דימומים רחמיים (מנורגיה, מטרורגיה).<br>2. דימום שאינו מפסיק.<br>3. טחורים.', img: 'images/LIV/LIV1.jpg?v=2' },
            { id: 'LIV-2', name: 'Xing Jian', heb: '', elm: 'fire', elmN: 'אלמנט: אש', tags: ['מעיין - Ying-Spring', 'פיזור - Sedation'], loc: 'בחלק הדורסלי של כף הרגל, בין האצבע הראשונה והשניה, 0.5 צון פרוקסימלית לקרום השחיה.', func: '1. מטהרת LIV FIRE.<br>2. מכניעה LIVER WIND.', ind: '1. פנים אדומות.<br>2. עיניים אדומות שורפות.<br>3. מיגרנה.<br>4. התפרצויות זעם.<br>5. טיניטוס.<br>6. טעם מר בפה.<br>7. אפילפסיה.<br>8. CVA.<br>9. פירכוסים.', img: 'images/LIV/LIV2.jpg?v=2' },
            { id: 'LIV-3', name: 'Tai Chong', heb: '', elm: 'earth', elmN: 'אלמנט: אדמה', tags: ['פלג - Shu-Stream', 'מקור - Yuan'], loc: 'בחלק הדורסלי של כף הרגל, בשקע דיסטלית למפגש העצמות המטטרסליות הראשונה והשניה, בגובה SP-3.', func: '1. מניעה LIVER QI.<br>2. מורידה LIVER YANG ומכניעה רוח.<br>3. מזינה LIVER YIN ו-LIVER BLOOD.<br>4. מסדירה וסת.', ind: '1. כאבי ראש.<br>2. סחרחורות (כולל בשינוי מנח).<br>3. לחץ דם גבוה.<br>4. כאבים בחזה ובצלעות.<br>5. קושי לנשום עמוק.<br>6. כתמים בראיה וראיה מטושטשת.<br>7. כאבי מחזור ומחזור לא סדיר.<br>8. PMS.<br>9. אמנוראה.', img: 'images/LIV/LIV3.jpg?v=2' },
            { id: 'LIV-4', name: 'Zhong Feng', heb: '', elm: 'metal', elmN: 'אלמנט: מתכת', tags: ['נהר - Jing-River'], loc: 'אנטריורית לבליטת המלאולוס המדיאלי, בשקע מדיאלית לגיד ה-TIBIALIS ANTERIOR.', func: '1. מניעה LIVER QI.<br>2. מסדירה את המחמם התחתון.', ind: '1. כאבים בבטן תחתונה.<br>2. גניטליה נשית וגברית.', img: 'images/LIV/LIV4.jpg?v=2' },
            { id: 'LIV-5', name: 'Li Gou', heb: '', elm: 'none', elmN: '', tags: ['חיבור - Luo'], loc: '5 צון מעל לבליטת המלאולוס המדיאלי, פוסטריורית לגבול המדיאלי של עצם ה-TIBIA, בשקע בינה לבין השריר GASTROCNEMIUS.', func: '1. מניעה ומפזרת LIVER QI.<br>2. מטיבה עם הגניטליה.<br>3. מוציאה לחות וחום מהמחמם התחתון.<br>4. מטפלת בתסמונת גלעין שיזף.', ind: '1. מטפלת באברי המין החיצוניים.<br>2. הפרשות.<br>3. פטריות.<br>4. גרד.<br>5. הרפס.<br>6. וריקוצלה.<br>7. כאב באשכים.', img: 'images/LIV/LIV5.jpg?v=2' },
            { id: 'LIV-6', name: 'Zhong Du', heb: '', elm: 'none', elmN: '', tags: ['הצטברות - Xi-Cleft'], loc: '7 צון מעל לבליטת המלאולוס המדיאלי, פוסטריורית לגבול המדיאלי של עצם ה-TIBIA, בשקע בינה לבין השריר GASTROCNEMIUS.', func: '-', ind: '-', img: 'images/LIV/LIV6.jpg?v=2' },
            { id: 'LIV-8', name: 'Qu Quan', heb: '', elm: 'water', elmN: 'אלמנט: מים', tags: ['ים - He-Sea', 'חיזוק - Tonification'], loc: 'סופריורית לגבול המדיאלי של הקפל הפופליטאלי, בשקע אנטריורית לגידים SEMIMEMBRANOSUS ו-SEMITENDINOSUS, כ-1 צון אנטריורית וסופריורית ל-KID-10.', func: '1. מחזקת ומזינה LIVER YIN ו-BLOOD.<br>2. מוציאה לחות וחום מהמחמם התחתון.', ind: '1. יובש בעיניים.<br>2. אמנוראה.<br>3. מחזור מועט.<br>4. סחרחורות.<br>5. טיניטוס.<br>6. שחלות פוליציסטיות.<br>7. ציסטות.<br>8. פרוסטטה.', img: 'images/LIV/LIV8.jpg?v=2' },
            { id: 'LIV-9', name: 'Yin Bao', heb: '', elm: 'none', elmN: '', tags: [], loc: 'סופריורית לאפיקונדיל המדיאלי של ה-FEMUR, כ-4 צון סופריורית ל-LIV-8 בשקע שבין השרירים VASTUS MEDIALIS ו-SARTORIUS.', func: '1. מווסתת מחזור.<br>2. מניעה את המחמם התחתון.', ind: '1. מחזור מאחר.<br>2. כאבי מחזור.<br>3. כאבי ביוץ.', img: 'images/LIV/LIV9.jpg?v=2' },
            { id: 'LIV-13', name: 'Zhang Men', heb: '', elm: 'none', elmN: '', tags: ['התראה (SP) - Mu of SP', 'השפעה (Zang) - Hui', 'מפגש עם GB'], loc: 'אנטריורית ומעט אינפריורית לקצה החופשי של הצלע האחת עשרה.', func: '1. מהרמנת LIVER ו-SPLEEN.', ind: '1. שלשול ועצירות לסירוגין.<br>2. גזים.<br>3. PMS.', img: 'images/LIV/LIV13.jpg?v=2' },
            { id: 'LIV-14', name: 'Qi Men', heb: '', elm: 'none', elmN: '', tags: ['התראה (LIV) - Mu of LIV', 'מפגש SP, YIN WEI'], loc: 'במרווח הבין-צלעי השישי, 4 צון לטרלית לקו האמצע.', func: '1. מהרמנת LIV, ST ו-LU.<br>2. מניעה ומסדירה QI במחמם האמצעי והעליון.', ind: '1. בחילות והקאות.<br>2. צרבות.<br>3. בעיות נשימה.<br>4. כאבים בחזה.', img: 'images/LIV/LIV14.jpg?v=2' }
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
    }
};