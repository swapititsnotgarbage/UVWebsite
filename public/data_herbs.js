// ==========================================
// === קובץ data_herbs.js (חלק 1 מתוך 3) ===
// מאגר צמחי מרפא בודדים - קטגוריות 1 עד 7
// ==========================================

const herbsCategoriesData = {
    // ==========================================
    // 1. משחררי חיצון - חריפים חמימים (רוח קור)
    // ==========================================
    release_exterior_warm: {
        title: "משחררי חיצון – חריפים חמימים",
        subtitle: "לטיפול ברוח-קור (LU, UB): Ma Huang, Gui Zhi, Zi Su Ye, Jing Jie, Fang Feng, Qiang Huo, Gao Ben, Bai Zhi, Xi Xin, Xiang Ru, Sheng Jiang, Cong Bai, Xin Yi Hua, Cang Er Zi.",
        icon: "🌬️",
        color1: "#00b894",
        color2: "#00cec9",
        herbs: [
            {
                name: "Ma Huang",
                rank: "A",
                latin: "Herba Ephedrae",
                hebrewPart: "ענף של אפדרה",
                meaning: "Ma = נימול/חוסר תחושה, Huang = צהוב",
                tasteTemp: "חריף, מעט מר | חמים",
                organs: "LU, UB",
                dosage: "3-9 גרם",
                summary: "רוח קור בעודף, צפצופים ושיעול, משתן",
                functions: [
                    "<strong>1. משחרר חיצון למצבי רוח קור (בעודף):</strong> ללא הזעה (אצל מטופלים חזקים), מייזע בחזקה, פועל ברמת העור – פותח את הנקבוביות. אופי Yang (צמרמורות מרובות מחום, כאב ראש וגוף).",
                    "<strong>2. מוריד LU Qi למטה (צפצופים):</strong> למצבי תקיעות LU Qi וצפצופי נשימה על רקע גפ\"ח וכן למצבים פנימיים של אסטמה ושיעול.",
                    "<strong>3. משתן:</strong> בעיקר לבצקות על רקע גפ\"ח (LU) אך גם למצבים פנימיים."
                ],
                contraindications: "מטופלים חלשים, לא לאורך זמן, זהירות כשיש הזעה, רוח קור בחוסר או חולשת Qi ו-Yin. מכיל אפדרין (עלול לגרום לפה יבש, פלפיטציות, אינסומניה, ל\"ד גבוה).",
                combinations: [
                    "<strong>עם Gui Zhi:</strong> לרוח קור בעודף (Ma Huang פותח נקבוביות ברמת העור, Gui Zhi ברמת השרירים).",
                    "<strong>עם Xing Ren / Shi Gao:</strong> לשיעול ואסטמה.",
                    "<strong>עם Fu Ling:</strong> לשיתון ובצקות."
                ],
                enrichment: "מטוגן בדבש (Zhi Ma Huang) לפעולת ייזוע מתונה יותר ולצפצופי נשימה ללא גפ\"ח."
            },
            {
                name: "Gui Zhi",
                rank: "A",
                latin: "Ramulus Cinnamomi",
                hebrewPart: "ענף דק מעץ הקינמון",
                meaning: "ענף הקינמון",
                tasteTemp: "חריף, מתוק | חמים",
                organs: "HT, LU, UB",
                dosage: "3-9 גרם",
                summary: "רוח קור בחוסר (מאזן Ying-Wei), Bi Syn, בחזה, כלי דם, גינקולוגיה, בצקות",
                functions: [
                    "<strong>1. רוח קור בחוסר – מאזן Ying ו-Wei:</strong> כאשר המטופל חלש וההזעה לא משפרת את המצב. פועל ברמת השרירים.",
                    "<strong>2. מטפל ב-Bi Syndrome (רוח קור לחות):</strong> ע\"י חימום והנעת התעלות לכאבים שונים (כולל כאבי מחזור).",
                    "<strong>3. מטפל בכאבים בחזה:</strong> לטיפול בחוסר HT Yang וכאב מחוסר או מסטגנציה.",
                    "<strong>4. מניע את הזרימה בכלי הדם:</strong> לבעיות גינקולוגיות כגון דיסמנוריאה או מאסות.",
                    "<strong>5. עוזר לטיפול בבצקות:</strong> ע\"י שיפור זרימת ה-Qi והיאנג משפר את תנועת הנוזלים בגוף."
                ],
                contraindications: "מצבי חום.",
                combinations: [
                    "<strong>עם Ma Huang:</strong> למצבי רוח קור בעודף.",
                    "<strong>עם Bai Shao:</strong> לאיזון Ying ו-Wei ברוח קור בחוסר.",
                    "<strong>עם Dan Shen:</strong> להנעת דם בחזה."
                ],
                enrichment: "Ma Huang חזק יותר ורק מפזר; Gui Zhi מתון יותר ובעל פעולה מאזנת."
            },
            {
                name: "Zi Su Ye",
                rank: "A",
                latin: "Folium Perillae Frutescentis",
                hebrewPart: "עלה סגול של צמח הפרילה",
                meaning: "Zi = סגול, Su = צמח הפרילה, Ye = עלה",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "LU, SP",
                dosage: "3-9 גרם",
                summary: "רוח קור עם Qi מורד בקיבה (לרוב יחד, לעיתים בנפרד)",
                functions: [
                    "<strong>1. רוח קור וסילוק קור:</strong> למצבי רוח קור המלווים בשיעול, ליחה ואי נוחות בחזה. מגביר זרימת Qi בחזה.",
                    "<strong>2. מטפל ב-ST Qi מורד:</strong> בחילות והקאות בהריון, עובר לא שקט, הרעלת פירות ים/מזון ים, ובמקביל לגפ\"ח."
                ],
                contraindications: "זהירות במצבי Damp Heat או הקאות חום.",
                combinations: [
                    "<strong>עם Huo Xiang:</strong> לרוח קור עם לחות ו-ST Qi מורד.",
                    "<strong>עם Sheng Jiang:</strong> לבחילות והקאות קור.",
                    "<strong>עם Xing Ren:</strong> לשיעול וליחה."
                ],
                enrichment: ""
            },
            {
                name: "Jing Jie",
                rank: "A",
                latin: "Herba Seu Flos Schizonepetae Tenuifoliae",
                hebrewPart: "ענפים עם הזרעים",
                meaning: "Jing = הצמח עצמו, Jie = שם נוסף לזרע",
                tasteTemp: "חריף, ארומטי | מעט חמים (כמעט ניטרלי)",
                organs: "LU, LIV",
                dosage: "3-9 גרם",
                summary: "רוח קור/חום, פריחות וגרד והפסקת דימום",
                functions: [
                    "<strong>1. רוח קור או חום:</strong> תלוי בצמחים אחרים בפורמולה (בטמפ' כמעט ניטרלי).",
                    "<strong>2. סילוק פריחות והפסקת גרד:</strong> על רקע גפ\"ח או במצבים התחלתיים של פריחה שעדיין לא התהוותה לחלוטין.",
                    "<strong>3. הפסקת דימום:</strong> בעיקר דימום מהרחם ובעיקר כאשר הצמח מושחר קודם לבישול."
                ],
                contraindications: "גרד כתוצאה מרוח פנימית או פריחות בשלב מתקדם.",
                combinations: [
                    "<strong>עם Fang Feng:</strong> לטיפול ברוח קור, כאבי גוף, גרד ופריחות בעור.",
                    "<strong>עם Ju Hua:</strong> לטיפול ברוח חום."
                ],
                enrichment: ""
            },
            {
                name: "Fang Feng",
                rank: "A",
                latin: "Radix Ledebouriellae",
                hebrewPart: "שורש",
                meaning: "\"מגן מפני רוח\"",
                tasteTemp: "חריף, מתוק | מעט חמים",
                organs: "UB, LIV, SP",
                dosage: "3-9 גרם",
                summary: "כל התפקודים קשורים ברוח (סילוק והנעה) ובהפסקת כאב – חיצוני ו/או פנימי",
                functions: [
                    "<strong>1. לטיפול ברוח קור:</strong> עוצמה בינונית, מטפל בכאבי גוף ומונע חדירת רוח לגוף.",
                    "<strong>2. מטפל ברוח קור לחות (Bi Syn):</strong> בעיקר כאשר הרוח היא הדומיננטית.",
                    "<strong>3. מטפל ברוח פנימית (קשר לכבד):</strong> רוח המלווה בחוסר איזון בין כבד לטחול המתבטא בשלשול כואב."
                ],
                contraindications: "כאבים כתוצאה מחוסר דם או חום וחוסר Yin (כי הוא חריף).",
                combinations: [
                    "<strong>עם Jing Jie:</strong> לרוח קור, כאבי גוף ופריחות.",
                    "<strong>עם Qiang Huo:</strong> לכאבים של Bi על רקע חיצוני או פנימי."
                ],
                enrichment: ""
            },
            {
                name: "Qiang Huo",
                rank: "B",
                latin: "Rhizoma et Radix Notopterygii",
                hebrewPart: "שורש",
                meaning: "Qiang = מיעוט בסין, Huo = \"בחיים\"",
                tasteTemp: "חריף, מר, ארומטי | חמים",
                organs: "UB, KID",
                dosage: "6-15 גרם",
                summary: "רוח קור – כאב ראש אוקסיפיטלי (Tai Yang) ו-Bi בחלק עליון",
                functions: [
                    "<strong>1. משחרר חיצון לרוח קור או רוח קור לחות – כאבי גוף:</strong> בעיקר לאורך ה-Tai Yang (UB), לכאבים בפלג גוף עליון ולכאב ראש אוקסיפיטלי. גם במצבים פנימיים של Bi Syn.",
                    "<strong>2. צמח מכוון:</strong> מכוון פעילות צמחים אחרים בפורמולה לכיוון ה-Upper Jiao ול-Tai Yang (UB) בפרט."
                ],
                contraindications: "מצבי חוסר Yin עם חום או Bi Heat.",
                combinations: [
                    "<strong>עם Fang Feng:</strong> לכאבים על רקע רוח קור או רוח קור לחות.",
                    "<strong>עם Du Huo:</strong> לכאבים של Bi Syn בכל הגוף (Du Huo פועל בעיקר על מחמם תחתון)."
                ],
                enrichment: ""
            },
            {
                name: "Gao Ben",
                rank: "C",
                latin: "Rhizoma et Radix Ligustici",
                hebrewPart: "שורש וגזע",
                meaning: "Gao = שם הצמח, Ben = גזע",
                tasteTemp: "חריף | חמים",
                organs: "UB",
                dosage: "3-9 גרם",
                summary: "רוח קור עם כאב ראש בוורטקס (קודקוד)",
                functions: [
                    "<strong>1. לרוח קור והפסקת כאב:</strong> בעיקר לכאבים לאורך ה-Tai Yang (UB) עם דגש על כאב ראש בוורטקס (קודקוד), וגם כשמקרין ללחי או לשיניים."
                ],
                contraindications: "חום עם חוסר Yin ודם (מייבש).",
                combinations: [],
                enrichment: "דגש למבחן: רוח קור עם כאב ראש בוורטקס."
            },
            {
                name: "Bai Zhi",
                rank: "A",
                latin: "Radix Angelicae Dahuricae",
                hebrewPart: "שורש אנג'ליקה",
                meaning: "Bai = לבן, Zhi = ריח חזק וטוב",
                tasteTemp: "חריף | חמים",
                organs: "LU, ST",
                dosage: "3-9 גרם",
                summary: "רוח קור, כאב ראש פרונטאלי (Yang Ming), מוגלה, מעברי אף ולחות",
                functions: [
                    "<strong>1. מטפל ברוח ומפסיק כאב:</strong> אף או סינוסים סתומים (גם בנזלת צהובה וצמיגה), כאב ראש פרונטלי (Yang Ming). מתאים לרוח קור ולרוח חום.",
                    "<strong>2. מפחית נפיחות ומוגלה:</strong> גם בעור – פותח פצעים שטרם נפתחו ומסלק מוגלה מכאלה שנפתחו.",
                    "<strong>3. מסלק לחות חמה:</strong> במקרים של Damp Heat עם הפרשות וגינאליות (בעיקר צהובות אך גם לבנות)."
                ],
                contraindications: "במצבי חום עם חוסר Yin (מייבש).",
                combinations: [
                    "<strong>עם Xin Yi Hua ו-Cang Er Zi:</strong> לאף סתום, נזלת וסינוסיטיס."
                ],
                enrichment: ""
            },
            {
                name: "Xi Xin",
                rank: "A",
                latin: "Herba Cum Radice Asari",
                hebrewPart: "עשב ושורש",
                meaning: "Xi = דק, Xin = חריף",
                tasteTemp: "חריף | חמים",
                organs: "LU, KID",
                dosage: "1-3 גרם (מינון נמוך!)",
                summary: "מסלק גפ\"ח רוח קור וקור פנימי (Bi Syn), פותח מעברי הגוף, מחמם ריאות לשיעול וליחת קור",
                functions: [
                    "<strong>1. משחרר חיצון ברוח קור / מסלק קור:</strong> במצבים בהם הקור משמעותי, לכאבי גוף (Bi), אף סתום (פותח את מעברי הגוף), וכאבים המלווים בקור.",
                    "<strong>2. מחמם את הריאות:</strong> להפסקת שיעול קור עם ליחת קור מימית."
                ],
                contraindications: "מצבי חולשה (חוסר Qi, Yin או דם) או בכל מצב של חום.",
                combinations: [
                    "<strong>עם Gui Zhi:</strong> לסילוק קור בעיקר בחזה.",
                    "<strong>עם Xin Yi Hua:</strong> לפתיחת מעברי האף.",
                    "<strong>עם Shi Gao ו-Huang Lian:</strong> לפצעים ודימום בחניכיים/פה."
                ],
                enrichment: ""
            },
            {
                name: "Xiang Ru",
                rank: "B",
                latin: "Herba Elsholtziae Seu Moslae",
                hebrewPart: "עשב",
                meaning: "\"Ma Huang של הקיץ\" (Xiang = ארומטי, Ru = עשב רענן)",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "LU, ST",
                dosage: "3-9 גרם",
                summary: "רוח קור בקיץ (הצטננות בקיץ ללא הזעה) עם מעורבות לחות ב-M.J, ומשתן לבצקות",
                functions: [
                    "<strong>1. משחרר חיצון:</strong> בעיקר למצבי רוח קור המתרחשים בקיץ ללא הזעה (בדומה ל-Ma Huang), וכן למצבי חום קיץ עם לחות במחמם האמצעי.",
                    "<strong>2. משתן:</strong> לבצקות על רקע גפ\"ח ולסילוק הלחות המעורבת."
                ],
                contraindications: "מצבי חוסר בחיצון או כשיש הזעה.",
                combinations: [
                    "<strong>עם Bian Dou ו-Hou Po:</strong> לחום קיץ עם לחות."
                ],
                enrichment: ""
            },
            {
                name: "Sheng Jiang",
                rank: "A",
                latin: "Rhizoma Zingiberis Officinalis",
                hebrewPart: "שורש ג'ינג'ר טרי",
                meaning: "ג'ינג'ר טרי",
                tasteTemp: "חריף | חמים",
                organs: "LU, SP, ST",
                dosage: "3-9 גרם",
                summary: "LU – שחרור חיצון, ליחה ושיעול | ST – מאזן ומוריד ST Qi מורד (בחילות והקאות קור) ומפחית רעילות צמחים",
                functions: [
                    "<strong>1. משחרר חיצון (רוח קור):</strong> מגביר פעילות שחרור חיצון של צמחים אחרים ועוזר לאיזון Ying ו-Wei.",
                    "<strong>2. מאזן את המחמם האמצעי:</strong> מוריד ST Qi מורד (בחילות והקאות קור) ומפחית רעילות של צמחים אחרים (כגון Ban Xia ו-Tian Nan Xing).",
                    "<strong>3. מפסיק שיעול אקוטי:</strong> על רקע רוח קור עם ליחה."
                ],
                contraindications: "בחילות והקאות חום.",
                combinations: [
                    "<strong>עם Zi Su Ye:</strong> לבחילות והקאות קור על רקע גפ\"ח.",
                    "<strong>עם Da Zao:</strong> לשמירה ואיזון הקיבה ואיזון Ying/Wei.",
                    "<strong>עם Ban Xia:</strong> להפחתת הרעילות של Ban Xia ולבחילות."
                ],
                enrichment: ""
            },
            {
                name: "Cong Bai",
                rank: "C",
                latin: "Bulbus Allii Fistulosi",
                hebrewPart: "החלק הלבן של הבצל הירוק",
                meaning: "בצל ירוק לבן",
                tasteTemp: "חריף | חמים",
                organs: "LU, ST",
                dosage: "3-9 גרם (טרי: 10 חתיכות)",
                summary: "רוח קור בשלב התחלתי בלבד – מתון, מייזע ומניע Yang Qi",
                functions: [
                    "<strong>1. משחרר חיצון מתון לשלב התחלתי של רוח קור:</strong> מייזע ומניע Yang Qi, מפסיק כאב (חיצונית – לפצעים בעור)."
                ],
                contraindications: "מסורתית לא מתאים עם דבש.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Xin Yi Hua",
                rank: "C",
                latin: "Flos Magnoliae",
                hebrewPart: "פרח מגנוליה",
                meaning: "Xin = חריף, Yi = זר, Hua = פרח",
                tasteTemp: "חריף | חמים",
                organs: "LU, ST",
                dosage: "3-9 גרם",
                summary: "רוח קור – דגש מרכזי על פתיחת מעברי האף",
                functions: [
                    "<strong>1. משחרר חיצון ופותח מעברי אף:</strong> במקור לרוח קור אך בשילוב צמחים מתאים גם לרוח חום עם אף סתום וסינוסיטיס."
                ],
                contraindications: "חוסר Yin עם חום.",
                combinations: [
                    "<strong>עם Bai Zhi ו-Cang Er Zi:</strong> לאף סתום, נזלת וסינוסיטיס."
                ],
                enrichment: ""
            },
            {
                name: "Cang Er Zi",
                rank: "B",
                latin: "Fructus Xanthii Sibirici",
                hebrewPart: "פרי הקסנטיום",
                meaning: "פרי קסנטיום",
                tasteTemp: "מתוק, מעט מר | חמים, רעיל",
                organs: "LU",
                dosage: "3-9 גרם",
                summary: "רוח קור לחות – דגש על פתיחת מעברי האף וכן Bi Syn",
                functions: [
                    "<strong>1. משחרר חיצון (רוח קור) ופותח מעברי אף:</strong> לאף סתום, נזלת וסינוסיטיס.",
                    "<strong>2. מסלק רוח לחות (Bi Syn):</strong> על רקע גפ\"ח או פנימי."
                ],
                contraindications: "חוסר דם או Yin (מייבש).",
                combinations: [
                    "<strong>עם Bai Zhi ו-Xin Yi Hua:</strong> לאף סתום, נזלת או סינוסיטיס."
                ],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 2. משחררי חיצון - חריפים קרירים (רוח חום)
    // ==========================================
    release_exterior_cool: {
        title: "משחררי חיצון – חריפים קרירים",
        subtitle: "לטיפול ברוח-חום (LU, LIV): Bo He, Niu Bang Zi, Chan Tui, Sang Ye, Ju Hua, Ge Gen, Sheng Ma, Chai Hu, Dan Dou Chi, Fu Ping, Mu Zei, Mang Jing Zi.",
        icon: "🍃",
        color1: "#55efc4",
        color2: "#0984e3",
        herbs: [
            {
                name: "Bo He",
                rank: "A",
                latin: "Herba Menthae Haplocalycis",
                hebrewPart: "עלה מנטה",
                meaning: "Bo = דק, He = לוטוס (דק יותר מלוטוס)",
                tasteTemp: "חריף, ארומטי | קריר",
                organs: "LU, LIV",
                dosage: "3-9 גרם (בישול קצר בסוף!)",
                summary: "רוח חום (בעיקר פתולוגיות של הראש, גרון ועיניים), מעודד יציאת פריחות ומניע LIV Qi",
                functions: [
                    "<strong>1. מטפל ברוח חום ומסלק חום:</strong> בעיקר בתופעות של ראש וצוואר – כאב ראש, עיניים אדומות, חום, גרון כואב, אף סתום.",
                    "<strong>2. מעודד הוצאת פריחות בשלב התחלתי:</strong> אספקט של שחרור חיצון.",
                    "<strong>3. מניע LIV Qi Stagnation:</strong> עצבנות, כאבים בצידי הגוף, כאבי מחזור, אי שקט."
                ],
                contraindications: "חום מחוסר Yin (מייבש) וכן לאמהות מניקות – מדכא הפרשת חלב אם.",
                combinations: [
                    "<strong>עם Bai Zhi:</strong> לנזלת צהובה.",
                    "<strong>עם Niu Bang Zi / Chan Tui:</strong> לסילוק רוח חום ונידוף פריחות."
                ],
                enrichment: ""
            },
            {
                name: "Niu Bang Zi",
                rank: "A",
                latin: "Fructus Arctii Lappae",
                hebrewPart: "זרע",
                meaning: "Niu = פרה, Bang = מאסה בגרון, Zi = זרע",
                tasteTemp: "חריף, מר | קר",
                organs: "LU, ST",
                dosage: "3-9 גרם",
                summary: "חזק בסילוק רוח חום וחום ורעילות בעיקר בגרון (טונסיליטיס/חזרת), מעודד יציאת פריחות ומלחלח מעיים",
                functions: [
                    "<strong>1. מטפל ברוח חום ומיטיב עם הגרון:</strong> לסימני רוח חום חזקים עם דגש על גרון נפוח וכואב (טונסיליטיס).",
                    "<strong>2. מסלק חום ורעילות:</strong> בגרון ונפיחויות בעור בחלק העליון (כגון חזרת Mumps).",
                    "<strong>3. מעודד יציאת פריחות:</strong> בשלב התחלתי (כגון חצבת Measles).",
                    "<strong>4. מלחלח את המעיים:</strong> בשל היותו זרע – מתאים כשרוח חום בגרון מלווה בעצירות."
                ],
                contraindications: "מצבי חוסר בחיצון או חוסר ב-SP עם שלשול.",
                combinations: [
                    "<strong>עם Bo He:</strong> לדגש על סילוק רוח חום ונידוף פריחות.",
                    "<strong>עם Jin Yin Hua ו-Lian Qiao:</strong> לכאב גרון עם חום ורעילות."
                ],
                enrichment: ""
            },
            {
                name: "Chan Tui",
                rank: "A",
                latin: "Periostracum Cicadae",
                hebrewPart: "נשל ציקדה",
                meaning: "נשל של ציקדה",
                tasteTemp: "מתוק, מלוח | קריר",
                organs: "LU, LIV",
                dosage: "3-9 גרם",
                summary: "רוח חום (איבוד קול וגרון), מעודד יציאת פריחות וגרד, מטהר עיניים, מפסיק התכווצויות חום בילדים (LIV Wind)",
                functions: [
                    "<strong>1. מטפל ברוח חום:</strong> בעיקר איבוד קול וגרון נפוח וכואב.",
                    "<strong>2. מעודד יציאת פריחות ומפסיק גרד.</strong>",
                    "<strong>3. מטהר את העיניים:</strong> על רקע רוח חום.",
                    "<strong>4. מפסיק התכווצויות ורוח:</strong> בעיקר התכווצויות חום אצל ילדים (קשר לכבד)."
                ],
                contraindications: "חוסר בחיצון והריון (בזהירות).",
                combinations: [
                    "<strong>עם Bo He / Fu Ping:</strong> לסילוק חום, נידוף פריחות וגרד."
                ],
                enrichment: ""
            },
            {
                name: "Sang Ye",
                rank: "A",
                latin: "Folium Mori Albae",
                hebrewPart: "עלה עץ התות",
                meaning: "עלה תות",
                tasteTemp: "מתוק, מר | קר",
                organs: "LU, LIV",
                dosage: "4.5-15 גרם",
                summary: "רוח חום עם שיעול מתון או יבש בריאות, מטהר את הכבד והעיניים, ומקרר דם (ליחה דמית)",
                functions: [
                    "<strong>1. מטפל ברוח חום וחום בריאות:</strong> בעיקר שיעול יבש או מתון על רקע רוח חום.",
                    "<strong>2. מטהר את הכבד והעיניים:</strong> לעיניים אדומות, כואבות או יבשות (מגפ\"ח או ממצב פנימי).",
                    "<strong>3. מקרר דם להפסקת דימום:</strong> בעיקר לליחה דמית (תפקוד מתון)."
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Ju Hua:</strong> לרוח חום עם שיעול, כאב ראש ועיניים אדומות."
                ],
                enrichment: ""
            },
            {
                name: "Ju Hua",
                rank: "A",
                latin: "Flos Chrysanthemi Morifolii",
                hebrewPart: "פרח החרצית (Chrysanthemum)",
                meaning: "פרח החרצית",
                tasteTemp: "מתוק, מר | קריר",
                organs: "LU, LIV",
                dosage: "4.5-15 גרם",
                summary: "מסלק רוח חום, מטהר את הכבד והעיניים (גפ\"ח או חוסר Yin), ומוריד LIV Yang (כאב ראש וסחרחורת)",
                functions: [
                    "<strong>1. מטפל ברוח חום:</strong> כולל חום, כאב ראש ועיניים אדומות.",
                    "<strong>2. מטהר את הכבד והעיניים:</strong> מסלק חום מהכבד ומטהר עיניים הן על רקע גפ\"ח והן על רקע פנימי (כגון חוסר Yin).",
                    "<strong>3. מסלק רוח מהכבד ומוריד LIV Yang:</strong> לכאב ראש, סחרחורת וכו'."
                ],
                contraindications: "חולשת SP עם שלשול וקור.",
                combinations: [
                    "<strong>עם Sang Ye:</strong> לרוח חום עם שיעול ועיניים אדומות.",
                    "<strong>עם Gou Qi Zi:</strong> לחיזוק LIV/KID Yin והבהרת העיניים."
                ],
                enrichment: ""
            },
            {
                name: "Ge Gen",
                rank: "A",
                latin: "Radix Puerariae Lobatae",
                hebrewPart: "שורש קודזו",
                meaning: "Ge = מחוספס כמו שיני מסור, Gen = שורש",
                tasteTemp: "מתוק, חריף | קריר",
                organs: "SP, ST",
                dosage: "6-12 גרם",
                summary: "רוח חום עם שרירים תפוסים (צוואר ושכמות), מעלה Yang Qi (נגד שלשול), מזין נוזלי גוף (צמא) ומעודד פריחות",
                functions: [
                    "<strong>1. לרוח חום עם שרירים תפוסים:</strong> פועל ברמת השרירים, מצוין לצוואר ושכמות תפוסים (כיוון אנרגטי מעלה).",
                    "<strong>2. מזין נוזלי גוף:</strong> מטפל בצמא על רקע חיצוני (רוח חום) או פנימי (חום בקיבה).",
                    "<strong>3. מעודד יציאת פריחות.</strong>",
                    "<strong>4. מטפל בשלשול ודיזנטריה:</strong> מעלה את ה-Yang Qi של הטחול."
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Sheng Ma:</strong> לעידוד יציאת פריחות בשלב התחלתי (כמו בחצבת)."
                ],
                enrichment: ""
            },
            {
                name: "Sheng Ma",
                rank: "B",
                latin: "Rhizoma Cimicifugae",
                hebrewPart: "שורש",
                meaning: "Sheng = גדל מהר / עולה, Ma = קנבוס/בגד",
                tasteTemp: "מתוק, חריף | קריר",
                organs: "LI, LIV, SP, ST",
                dosage: "3-9 גרם",
                summary: "משחרר חיצון (רוח חום – פריחות), מטהר חום ורעילות מהקיבה (חניכיים/שיניים/אפטות) ומעלה Yang Qi למעלה",
                functions: [
                    "<strong>1. משחרר חיצון לרוח חום:</strong> בעיקר פריחות בשלב התחלתי.",
                    "<strong>2. מטהר חום ורעילות מהעור ומהקיבה:</strong> לכאבי שיניים, נפיחות וכאב בחניכיים, בשפתיים או בגרון.",
                    "<strong>3. מעלה את ה-Yang Qi למעלה:</strong> לטיפול בצניחות איברים."
                ],
                contraindications: "חום מחוסר Yin, עודף למעלה וחוסר למטה.",
                combinations: [
                    "<strong>עם Ge Gen:</strong> לעידוד יציאת פריחות בשלב התחלתי.",
                    "<strong>עם Chai Hu ו-Huang Qi:</strong> להעלאת Yang Qi בטיפול בצניחות."
                ],
                enrichment: ""
            },
            {
                name: "Chai Hu",
                rank: "A",
                latin: "Radix Bupleuri",
                hebrewPart: "שורש",
                meaning: "Chai = עץ יבש למדורה, Hu = זר",
                tasteTemp: "מר, חריף | קריר",
                organs: "GB, LIV, PC, TW",
                dosage: "3-12 גרם",
                summary: "רוח חום בשכבת Shao Yang (חצי בפנים חצי בחוץ), הצמח העיקרי להנעת LIV Qi Stagnation, ומעלה Yang Qi (צניחות)",
                functions: [
                    "<strong>1. משחרר חיצון לטיפול ברוח חום – שכבת Shao Yang:</strong> כשהפתוגן חצי בפנים חצי בחוץ (חום וצמרמורות לסירוגין, טעם מר, כאב היפוכונדרי).",
                    "<strong>2. מניע LIV Qi Stagnation:</strong> צמח עיקרי לתקיעות צ'י הכבד – עצבנות, PMS, דיסמנוריאה, כאבים בצידי הגוף, אי נוחות בחזה וחוסר הרמוניה עם ה-SP.",
                    "<strong>3. מעלה את ה-Yang Qi למעלה:</strong> לטיפול בצניחות איברים על רקע חולשת SP."
                ],
                contraindications: "זהירות במקרי חוסר Yin עם עלייה של Yang למעלה.",
                combinations: [
                    "<strong>עם Huang Qin:</strong> לשכבת ה-Shao Yang.",
                    "<strong>עם Sheng Ma ו-Huang Qi:</strong> להעלאת Yang Qi בצניחות.",
                    "<strong>עם Bai Shao / Xiang Fu:</strong> לתקיעות צ'י הכבד וחוסר הרמוניה LIV-SP."
                ],
                enrichment: ""
            },
            {
                name: "Dan Dou Chi",
                rank: "B",
                latin: "Semen Sojae Praeparatum",
                hebrewPart: "פולי סויה מותססים",
                meaning: "Dan = מתון/תפל, Dou Chi = פולי סויה משומרים",
                tasteTemp: "מתוק, מעט מר | ניטרלי (חמים/קריר לפי העיבוד)",
                organs: "LU, ST",
                dosage: "6-15 גרם",
                summary: "רוח חום או רוח קור המלווים בעצבנות ואי שקט בחזה",
                functions: [
                    "<strong>1. משחרר חיצון לרוח חום או רוח קור:</strong> מטפל בעיקר בעצבנות ואי שקט המלווים מחלת חום."
                ],
                contraindications: "לנשים מניקות – מעכב הפרשת חלב.",
                combinations: [
                    "<strong>עם Zhi Zi:</strong> לחום בחזה (HT) שייצר עצבנות ואינסומניה."
                ],
                enrichment: ""
            },
            {
                name: "Fu Ping",
                rank: "C",
                latin: "Herba Lemnae",
                hebrewPart: "עשב מים",
                meaning: "Fu = צף, Ping = עלה מכיל מים",
                tasteTemp: "חריף | קר",
                organs: "LU, UB",
                dosage: "3-9 גרם",
                summary: "רוח חום עם פריחה וגרד (דגש על גרד) וכן בצקות שטחיות בחלק העליון",
                functions: [
                    "<strong>1. רוח חום עם פריחה וגרד (דגש על גרד).</strong>",
                    "<strong>2. מטפל בבצקות:</strong> בחלק העליון של הגוף (LU – כגון בפנים) על רקע גפ\"ח."
                ],
                contraindications: "זהירות במקרי חוסר בחיצון.",
                combinations: [
                    "<strong>עם Chan Tui:</strong> לפריחות עם גרד על רקע רוח חום."
                ],
                enrichment: ""
            },
            {
                name: "Mu Zei",
                rank: "C",
                latin: "Herba Equiseti Hiemalis",
                hebrewPart: "שבטבט (עשב)",
                meaning: "Mu = עץ/קרש, Zei = גנב (גדל מהר מאוד)",
                tasteTemp: "מתוק, מר | ניטרלי",
                organs: "LU, LIV",
                dosage: "3-9 גרם",
                summary: "רוח חום + מסלק עכירות מפני השטח של העיניים (קטרקט/פטריגיום)",
                functions: [
                    "<strong>1. רוח חום ובעיקר מסלק עכירות מהעיניים:</strong> לקטרקט, אודם, נפיחות, טשטוש ראייה ודמע מוגבר."
                ],
                contraindications: "חוסר Qi ונוזלי גוף, והריון.",
                combinations: [
                    "<strong>עם Ju Hua:</strong> לטיהור העיניים וסילוק עכירות."
                ],
                enrichment: ""
            },
            {
                name: "Mang Jing Zi",
                rank: "C",
                latin: "Fructus Viticis Negundae",
                hebrewPart: "זרע/פרי",
                meaning: "Mang = משתרע, Jing = שם הצמח, Zi = זרע",
                tasteTemp: "מר, חריף | קריר",
                organs: "UB, LIV, ST",
                dosage: "6-12 גרם",
                summary: "רוח חום כאשר כאב ראש הוא התלונה העיקרית וכן בעיות עיניים",
                functions: [
                    "<strong>1. רוח חום עם דגש על כאב ראש ועיניים (קשר לכבד).</strong>"
                ],
                contraindications: "חוסר Qi ו-Yin.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 3. מטהרי חום - מסלקי אש (רמת ה-Qi / Yang Ming)
    // ==========================================
    clear_heat_drain_fire: {
        title: "מסלקי אש (מטהרי חום)",
        subtitle: "לטיהור חום פנימי גבוה מרמת ה-Qi ושכבת ה-Yang Ming (4 הגדולים): Shi Gao, Zhi Mu, Lu Gen, Zhi Zi, Dan Zhu Ye, Xia Ku Cao, Jue Ming Zi, Qing Xiang Zi, Lian Xin.",
        icon: "🔥",
        color1: "#ff7675",
        color2: "#d63031",
        herbs: [
            {
                name: "Shi Gao",
                rank: "A",
                latin: "Gypsum Fibrosum",
                hebrewPart: "מינרל גבס",
                meaning: "Shi = אבן, Gao = משחה",
                tasteTemp: "מתוק, חריף | מאוד קר",
                organs: "LU, ST",
                dosage: "10-30 גרם (מבושל ראשון!)",
                summary: "מטהר חום מעודף בקיבה ובריאות (רמת ה-Qi / 4 הגדולים), חום בריאות עם שיעול וצפצופים, כוויות ואקזמה",
                functions: [
                    "<strong>1. מטהר חום מעודף בקיבה ובריאות (רמת ה-Qi / Yang Ming):</strong> ל-4 הגדולים (חום גבוה, הזעה, צמא גדול, דופק גדול ומהיר). מסלק חום גם ממרידיאן ST (דימום חניכיים, כאבי שיניים ופצעים בפה).",
                    "<strong>2. מטהר חום בריאות:</strong> לשיעול או צפצופי נשימה עם ליחה צהובה וחום גבוה.",
                    "<strong>3. כוויות, אקזמה ופצעים בעור:</strong> בשימוש חיצוני או פנימי."
                ],
                contraindications: "כשאין חום או כאשר החום הוא מחוסר (דופק חלש), חולשת SP/ST.",
                combinations: [
                    "<strong>עם Zhi Mu:</strong> לצינון חזק של חום ברמת ה-Qi ושמירה על ה-Yin.",
                    "<strong>עם Ma Huang:</strong> לשיעול וצפצופים מחום בריאות.",
                    "<strong>עם Xi Xin:</strong> לכאבי שיניים ודימום חניכיים."
                ],
                enrichment: ""
            },
            {
                name: "Zhi Mu",
                rank: "A",
                latin: "Rhizoma Anemarrhenae",
                hebrewPart: "קנה שורש",
                meaning: "Zhi = לדעת/להבין, Mu = אמא",
                tasteTemp: "מר | קר",
                organs: "LU, ST, KID",
                dosage: "6-12 גרם",
                summary: "מסלק חום מעודף ומחוסר (מזין Yin) בריאות, בקיבה ובכליות",
                functions: [
                    "<strong>1. מסלק חום מהקיבה והריאות:</strong> לחום מעודף עם צמא, עצבנות ושיעול עם ליחת חום.",
                    "<strong>2. מזין את ה-Yin ומוריד אש מחוסר:</strong> נכנס ל-KID ומזין KID Yin וכן ST Yin (טוב לחום מחוסר Yin עם הזעות לילה וגלי חום)."
                ],
                contraindications: "חוסר SP Qi עם שלשול.",
                combinations: [
                    "<strong>עם Shi Gao:</strong> לחום מעודף בקיבה עם פגיעה בנוזלים.",
                    "<strong>עם Huang Bai:</strong> לחום ריק כתוצאה מחוסר KID Yin."
                ],
                enrichment: ""
            },
            {
                name: "Lu Gen",
                rank: "A",
                latin: "Rhizoma Phragmitis",
                hebrewPart: "קנה שורש של סוף",
                meaning: "Lu = סוף/קנה, Gen = שורש",
                tasteTemp: "מתוק | קר",
                organs: "LU, ST",
                dosage: "15-30 גרם",
                summary: "מסלק חום ומייצר נוזלים בריאות ובקיבה, משתן ומעודד יציאת פריחות",
                functions: [
                    "<strong>1. מטהר חום ומייצר נוזלים:</strong> בריאות (שיעול עם ליחה צהובה צמיגה) ובקיבה (צמא ויובש).",
                    "<strong>2. משתן:</strong> לשתן צהוב המלווה בצמא.",
                    "<strong>3. מעודד יציאת פריחות.</strong>"
                ],
                contraindications: "קור וחוסר ב-SP/ST.",
                combinations: [
                    "<strong>עם Shi Gao:</strong> לחום בקיבה שפגע בנוזלים."
                ],
                enrichment: ""
            },
            {
                name: "Zhi Zi",
                rank: "A",
                latin: "Fructus Gardeniae",
                hebrewPart: "פרי הגרדניה",
                meaning: "Zhi = שם הצמח, Zi = זרע/פרי",
                tasteTemp: "מר | קר",
                organs: "HT, LIV, LU, ST, TW",
                dosage: "3-12 גרם",
                summary: "מסלק אש, חום ולחות מ-3 המחממים (TW), מרגיע עצבנות (HT), מטפל ב-LIV/GB ובשתן, ומקרר דם",
                functions: [
                    "<strong>1. מטהר חום ועצבנות (HT Fire):</strong> לחום, עצבנות, אי שקט עם מועקה בחזה ואינסומניה.",
                    "<strong>2. מסלק חום ולחות מ-3 המחממים (TW):</strong> מחמם תחתון (Lin חום), אמצעי (LIV/GB צהבת), ועליון.",
                    "<strong>3. מקרר ומניע דם:</strong> להפסקת דימום מחום בדם (כאשר מושחר), ולטראומה בשימוש חיצוני."
                ],
                contraindications: "קור וחוסר ב-SP עם צואה רכה.",
                combinations: [
                    "<strong>עם Dan Dou Chi:</strong> לחום בחזה שייצר עצבנות ואינסומניה."
                ],
                enrichment: ""
            },
            {
                name: "Dan Zhu Ye",
                rank: "B",
                latin: "Herba Lophatheri",
                hebrewPart: "עלים של במבוק",
                meaning: "עלי במבוק עדינים",
                tasteTemp: "מתוק, חסר טעם | קר",
                organs: "HT, SI, ST",
                dosage: "6-9 גרם",
                summary: "מסלק אש וחום מהלב ומהקיבה דרך פעולה על ה-SI וה-UB (שיתון) – לפצעים בפה/לשון וצריבה בשתן",
                functions: [
                    "<strong>1. מסלק אש וחום מהלב דרך שיתון (SI + UB):</strong> לפצעים בפה, בלשון או בחניכיים, צמא, עצבנות ושתן צהוב/צורב."
                ],
                contraindications: "זהירות בהריון.",
                combinations: [
                    "<strong>עם Lu Gen:</strong> לחום ועצבנות עם צמא ויובש."
                ],
                enrichment: ""
            },
            {
                name: "Xia Ku Cao",
                rank: "A",
                latin: "Spica Prunellae",
                hebrewPart: "תפרחת",
                meaning: "\"עשב שמתייבש בקיץ\"",
                tasteTemp: "מר, חריף | קר",
                organs: "LIV, GB",
                dosage: "9-15 גרם",
                summary: "מטהר אש מהכבד ומבהיר עיניים (כאב ראש/סחרחורת), וממוסס התקשויות וגושים בצוואר מליחת חום",
                functions: [
                    "<strong>1. מטהר אש מהכבד ומבהיר את העיניים:</strong> לעיניים אדומות, כואבות או נפוחות, כאב ראש וסחרחורת.",
                    "<strong>2. ממוסס התקשויות:</strong> לגושים בצוואר (גוייטר/סקרופולה) או לאורך תעלת הכבד וכיס המרה מליחת חום."
                ],
                contraindications: "חוסר ב-SP/ST.",
                combinations: [
                    "<strong>עם Xuan Shen ו-Zhe Bei Mu:</strong> למיסוס גושים והתקשויות בצוואר."
                ],
                enrichment: ""
            },
            {
                name: "Jue Ming Zi",
                rank: "B",
                latin: "Semen Cassiae",
                hebrewPart: "זרע",
                meaning: "Jue = החלטי/פותח, Ming = בהיר/ראייה, Zi = זרע",
                tasteTemp: "מר, מתוק | קריר",
                organs: "LIV, KID, LI",
                dosage: "9-15 גרם",
                summary: "מסלק חום מהכבד ומטהר עיניים (LIV Yang / רוח חום) + מלחלח מעיים לטיפול בעצירות",
                functions: [
                    "<strong>1. מסלק חום מהכבד ומטהר את העיניים:</strong> לעיניים אדומות, כואבות, מגרדות, רגישות לאור ועליית LIV Yang.",
                    "<strong>2. מלחלח את המעיים (עצירות):</strong> על רקע חום בכבד או חוסר Yin."
                ],
                contraindications: "זהירות בשלשול; מסורתית לא עם Huo Ma Ren.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Qing Xiang Zi",
                rank: "C",
                latin: "Semen Celosiae",
                hebrewPart: "זרע",
                meaning: "זרע צלוזיה",
                tasteTemp: "מתוק | קריר",
                organs: "LIV",
                dosage: "3-15 גרם",
                summary: "מטהר חום מהכבד, מוריד LIV Yang ומסלק עכירות מהעיניים (קטרקט)",
                functions: [
                    "<strong>1. מטהר חום מהכבד ומשפר ראייה:</strong> לסימפטומים של עליית LIV Yang וסילוק עכירות מהעיניים."
                ],
                contraindications: "חוסר ב-SP/ST או חוסר ב-LIV/KID Yin (מרחיב אישונים!).",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Lian Xin",
                rank: "C",
                latin: "Plumula Nelumbinis",
                hebrewPart: "ליבת זרע הלוטוס",
                meaning: "Lian = לוטוס, Xin = לב/מרכז",
                tasteTemp: "מר | קר",
                organs: "HT, PC",
                dosage: "1.5-6 גרם",
                summary: "מסלק חום מהלב ומה-PC (בלבול מנטלי, אינסומניה ועצבנות) וסופח Jing",
                functions: [
                    "<strong>1. מסלק חום מהלב ומה-PC:</strong> לאינסומניה ועצבנות עקב HT Fire ולבלבול מנטלי.",
                    "<strong>2. סופח את ה-Jing ומפסיק דימום.</strong>"
                ],
                contraindications: "עצירות או מאסות בבטן.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 4. צמחים מרוקנים למטה (מרוקנים, מלחלחים, מרוקנים בחוזקה)
    // ==========================================
    downward_draining: {
        title: "צמחים מרוקנים למטה",
        subtitle: "מרוקני הצטברות חום (עצירות), מלחלחי מעיים ומרוקני נוזלים: Da Huang, Mang Xiao, Fan Xie Ye, Lu Hui, Huo Ma Ren, Yu Li Ren, Gan Sui, Da Ji, Yuan Hua.",
        icon: "⬇️",
        color1: "#fdcb6e",
        color2: "#e17055",
        herbs: [
            {
                name: "Da Huang",
                rank: "A",
                latin: "Radix et Rhizoma Rhei",
                hebrewPart: "שורש וקנה שורש של ריבס",
                meaning: "\"צהוב גדול\" (מכונה \"הגנרל\")",
                tasteTemp: "מר | קר",
                organs: "ST, LI, LIV, SP",
                dosage: "3-12 גרם (לריקון חום: לבשל ב-10 הדק' האחרונות!)",
                summary: "מרוקן הצטברות חום בעודף מה-Yang Ming (עצירות חום), מסלק חום ולחות, מקרר ומניע דם, ומסלק אש ורעילות",
                functions: [
                    "<strong>1. מרוקן הצטברות חום פנימי בעודף משכבת ה-Yang Ming (LI):</strong> לטיפול בעצירות חום.",
                    "<strong>2. מסלק חום ולחות:</strong> לצהבת אקוטית ו-Lin Syndrome מחום.",
                    "<strong>3. מקרר את הדם:</strong> לדימום מחום בדם (בצואה או בהקאה) ובעיות עור.",
                    "<strong>4. מסלק אש ורעילות:</strong> פנימי או חיצוני לפצעים חמים וכוויות.",
                    "<strong>5. מניע דם:</strong> לדיסמנוריאה, אמנוריאה, טראומה ומאסות מתקיעות דם."
                ],
                contraindications: "גפ\"ח, מטופלים בחוסר, הריון והנקה.",
                combinations: [
                    "<strong>עם Mang Xiao:</strong> שילוב קלאסי לעצירות קשה מחום ויובש במעיים.",
                    "<strong>עם Hou Po ו-Zhi Shi:</strong> לעצירות עם תקיעות Qi ומלאות בבטן."
                ],
                enrichment: "בישול קצר (10 דק') מגביר את אפקט השלשול; בישול ארוך ממתן אותו; בישול ביין מגביר הנעת דם; השחרה מגבירה הפסקת דימום."
            },
            {
                name: "Mang Xiao",
                rank: "A",
                latin: "Mirabilitum",
                hebrewPart: "מינרל מלח גלאובר",
                meaning: "מינרל ממיס",
                tasteTemp: "חריף, מר, מלוח | קר מאוד",
                organs: "ST, LI",
                dosage: "3-9 גרם (להמיס במרקחת המוכנה – לא לבשל!)",
                summary: "מרוקן הצטברות חום, מלחלח ומרכך התקשויות (צואה קשה כאבן ומאסות חמות)",
                functions: [
                    "<strong>1. מרוקן הצטברות חום:</strong> בדומה ל-Da Huang אך מתון יותר.",
                    "<strong>2. מלחלח וממוסס התקשויות (מלוח):</strong> מרכך צואה קשה ויבשה כאבן, וכן מטפל בנפיחויות חמות בעור ובגרון."
                ],
                contraindications: "מטופלים חלשים עם קור ב-SP/ST, הריון, אחרי לידה או הנקה.",
                combinations: [
                    "<strong>עם Da Huang:</strong> לריקון וריכוך צואה קשה מחום ב-Yang Ming."
                ],
                enrichment: ""
            },
            {
                name: "Fan Xie Ye",
                rank: "C",
                latin: "Folium Sennae",
                hebrewPart: "עלי סנה",
                meaning: "עלה משלשל זר",
                tasteTemp: "מתוק, מר | קר",
                organs: "LI",
                dosage: "3-9 גרם",
                summary: "מרוקן הצטברות חום דרך המעיים (עצירות)",
                functions: [
                    "<strong>1. מרוקן הצטברות חום דרך המעיים לטיפול בעצירות.</strong>"
                ],
                contraindications: "הריון, הנקה, מחזור ועצירות כרונית במטופלים חלשים.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Lu Hui",
                rank: "C",
                latin: "Herba Aloes",
                hebrewPart: "אלוורה מיובשת",
                meaning: "אלוורה",
                tasteTemp: "מר | קר",
                organs: "LI, LIV, ST",
                dosage: "1.5-3 גרם (בגלולות, לא בבישול)",
                summary: "מרוקן הצטברות חום בעצירות, מטהר אש בכבד והורג טפילים",
                functions: [
                    "<strong>1. מרוקן הצטברות חום במעיים.</strong>",
                    "<strong>2. מטהר חום ואש בכבד (עצבנות, כאב ראש, סחרחורת).</strong>",
                    "<strong>3. הורג טפילים.</strong>"
                ],
                contraindications: "קור וחוסר ב-SP/ST, הריון.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Huo Ma Ren",
                rank: "A",
                latin: "Semen Cannabis Sativae",
                hebrewPart: "זרע קנבוס (Ma Zi Ren)",
                meaning: "זרע קנבוס",
                tasteTemp: "מתוק | ניטרלי",
                organs: "LI, SP, ST",
                dosage: "9-15 גרם",
                summary: "מלחלח מעיים ותומך ב-Yin לטיפול בעצירות על רקע חוסר Yin ודם (מבוגרים/חלשים/אחרי לידה)",
                functions: [
                    "<strong>1. מלחלח את המעיים:</strong> לעצירות במבוגרים או מטופלים חלשים עם חוסר דם ו-Yin או יובש מחום.",
                    "<strong>2. תומך ב-Yin.</strong>"
                ],
                contraindications: "שלשול.",
                combinations: [
                    "<strong>עם Xing Ren, Bai Shao ו-Da Huang:</strong> לעצירות מיובש וחום במעיים."
                ],
                enrichment: ""
            },
            {
                name: "Yu Li Ren",
                rank: "A",
                latin: "Semen Pruni",
                hebrewPart: "זרע שזיף/דובדבן",
                meaning: "Yu = תקיעות/דיכאון, Li = שזיף, Ren = זרע",
                tasteTemp: "חריף, מר, מתוק | ניטרלי",
                organs: "LI, SI, SP",
                dosage: "3-9 גרם",
                summary: "מלחלח ומניע Qi במעיים (עצירות) וכן משתן לטיפול בבצקות",
                functions: [
                    "<strong>1. מלחלח ומניע את המעיים:</strong> משלב לחלוח עם הנעת תקיעות Qi במעיים לטיפול בעצירות.",
                    "<strong>2. משתן:</strong> לטיפול בבצקות (בעיקר ברגליים) עם קושי בהשתנה ועצירות."
                ],
                contraindications: "זהירות בהריון ובחוסר Yin עם התדלדלות נוזלים.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Gan Sui",
                rank: "C",
                latin: "Radix Euphorbiae Kansui",
                hebrewPart: "שורש (מרוקן בחוזקה)",
                meaning: "מרוקן נוזלים",
                tasteTemp: "מר, מתוק | קר, רעיל",
                organs: "LU, KID, LI",
                dosage: "0.5-1.5 גרם",
                summary: "מרוקן הצטברות נוזלים בחוזקה דרך הצואה (שלשול מימי) לבצקות קשות בחזה ובבטן (פועל יותר בתעלות)",
                functions: [
                    "<strong>1. מרוקן הצטברות נוזלים בחוזקה דרך הצואה:</strong> לבצקות קשות בחזה ובבטן (Ascites / Pleural effusion)."
                ],
                contraindications: "רעיל וחזק מאוד – אסור בהריון ובמטופלים חלשים, ואסור בשילוב עם Gan Cao!",
                combinations: [],
                enrichment: "לרוב אינו בשימוש בקליניקה בשל עוצמתו."
            },
            {
                name: "Da Ji (Jing Da Ji)",
                rank: "C",
                latin: "Radix Euphorbiae Pekinensis",
                hebrewPart: "שורש (מרוקן בחוזקה)",
                meaning: "לא להתבלבל עם Da Ji ממפסיקי דימום!",
                tasteTemp: "מר, חריף | קר, רעיל",
                organs: "LU, KID, LI",
                dosage: "1.5-3 גרם",
                summary: "מרוקן הצטברות נוזלים בחוזקה דרך הצואה (דומה ל-Gan Sui אך פועל יותר על האיברים הפנימיים)",
                functions: [
                    "<strong>1. מרוקן נוזלים בחוזקה מהאיברים דרך הצואה.</strong>"
                ],
                contraindications: "רעיל, אסור בהריון ובחולשה, ואסור עם Gan Cao.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Yuan Hua",
                rank: "C",
                latin: "Flos Genkwa",
                hebrewPart: "פרח (מרוקן בחוזקה)",
                meaning: "פרח מרוקן",
                tasteTemp: "חריף, מר | חמים, רעיל",
                organs: "LU, KID, LI",
                dosage: "1.5-3 גרם",
                summary: "מרוקן הצטברות נוזלים בחוזקה (בעיקר בחזה) והורג פרזיטים חיצונית (חמים בטמפרטורה!)",
                functions: [
                    "<strong>1. מרוקן הצטברות נוזלים בחוזקה ומשתן.</strong>",
                    "<strong>2. הורג פרזיטים בשימוש חיצוני.</strong>"
                ],
                contraindications: "רעיל, אסור בהריון ובחולשה, ואסור עם Gan Cao.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 5. מטהרי חום - מסלקי אש ורעילות
    // ==========================================
    clear_heat_toxins: {
        title: "מסלקי אש ורעילות",
        subtitle: "למצבי חום קיצוניים, זיהומים, גרון, אבצסים, פרונקלים ודיזנטריה: Jin Yin Hua, Lian Qiao, Da Qing Ye, Qing Dai, Ban Lan Gen, Pu Gong Ying, Ye Ju Hua, Bai Jiang Cao, Hong Teng, Yu Xing Cao, Zi Hua Di Ding, Bai Hua She She Cao, Bai Tou Weng, Bai Xian Pi, Tu Fu Ling, Ban Zhi Lian, Ma Bo, Shan Dou Gen, She Gan.",
        icon: "☣️",
        color1: "#e17055",
        color2: "#b71540",
        herbs: [
            {
                name: "Jin Yin Hua",
                rank: "A",
                latin: "Flos Lonicerae Japonicae",
                hebrewPart: "פרח היערה",
                meaning: "\"פרח כסף וזהב\"",
                tasteTemp: "מתוק | קר",
                organs: "LU, ST, LI",
                dosage: "9-15 גרם",
                summary: "מסלק חום ורעילות (פצעים, גרון, עיניים, אבצסים), מסלק רוח חום וחום קיץ, ומטפל בדיזנטריה ו-Lin",
                functions: [
                    "<strong>1. מסלק חום ורעילות:</strong> לפצעים מוגלתיים, פרונקלים, אבצסים בעור, בגרון ובעיניים.",
                    "<strong>2. מסלק רוח חום (כולל חום קיץ):</strong> לחום מדיד, כאב ראש וכאב גרון.",
                    "<strong>3. מסלק חום ולחות מהמחמם התחתון:</strong> לדיזנטריה ו-Lin Syndrome."
                ],
                contraindications: "SP/ST בחוסר עם שלשול; פצעים בעור ללא חום ורעילות.",
                combinations: [
                    "<strong>עם Lian Qiao:</strong> שילוב מרכזי לרוח חום ולחום ורעילות בגרון ובעור.",
                    "<strong>עם Niu Bang Zi:</strong> לכאב גרון עם חום ורעילות."
                ],
                enrichment: ""
            },
            {
                name: "Lian Qiao",
                rank: "A",
                latin: "Fructus Forsythiae Suspensae",
                hebrewPart: "פרי הפורסיתיה",
                meaning: "פרי חצי פתוח הדומה ללוטוס",
                tasteTemp: "מר, מעט חריף | קריר",
                organs: "HT, LIV, GB (LU)",
                dosage: "6-15 גרם",
                summary: "מטהר חום ורעילות וממוסס התקשויות/גושים (עור, צוואר וגרון), מסלק רוח חום ומטהר חום מהלב",
                functions: [
                    "<strong>1. מטהר חום ורעילות וממוסס התקשויות:</strong> לפצעים בעור (קרבונקלים) וגושים בצוואר (סקרופולה).",
                    "<strong>2. מסלק רוח חום:</strong> לחום, כאב ראש, צמא וכאב גרון."
                ],
                contraindications: "חוסר ב-SP עם שלשול, פצעים מסוג Yin.",
                combinations: [
                    "<strong>עם Jin Yin Hua:</strong> לרוח חום ולחום ורעילות בגרון ובעור."
                ],
                enrichment: ""
            },
            {
                name: "Da Qing Ye",
                rank: "A",
                latin: "Folium Isatidis",
                hebrewPart: "עלה איסטיס (אינדיגו)",
                meaning: "Da = גדול, Qing = כחול/ירוק, Ye = עלה",
                tasteTemp: "מר | מאוד קר",
                organs: "HT, LU, ST",
                dosage: "3-9 גרם",
                summary: "מטהר חום ורעילות ומקרר דם – למחלות חום זיהומיות, פצעים בעור, גרון כואב וחזרת (Mumps)",
                functions: [
                    "<strong>1. מטהר חום ורעילות:</strong> למחלות חום זיהומיות התוקפות את הריאות והגרון.",
                    "<strong>2. מקרר את הדם ומטפל בפצעים ופריחות בעור:</strong> מחום ורעילות ומחום בדם (כולל גרון וחזרת)."
                ],
                contraindications: "SP/ST בחוסר עם סימני קור.",
                combinations: [
                    "<strong>עם Jin Yin Hua / Ban Lan Gen:</strong> לרעילות בגרון, חזרת או פריחות חמות."
                ],
                enrichment: ""
            },
            {
                name: "Qing Dai",
                rank: "B",
                latin: "Indigo Naturalis",
                hebrewPart: "אבקה כחולה מעלי Da Qing Ye",
                meaning: "אבקת אינדיגו כחולה",
                tasteTemp: "מלוח | קר",
                organs: "LIV, LU, ST",
                dosage: "1.5-3 גרם (אבקה – לעטוף בבד או לבלוע ללא בישול)",
                summary: "מסלק חום ורעילות, מקרר דם ומוריד נפיחויות (זיהומי פה/גרון/חזרת ודימומים מחום בריאות ובכבד)",
                functions: [
                    "<strong>1. מסלק חום ורעילות, מקרר דם ומוריד נפיחויות:</strong> לחלל הפה, הגרון וחזרת.",
                    "<strong>2. מקרר דם וחום בריאות ובכבד:</strong> לשיעול דמי והתכווצויות חום."
                ],
                contraindications: "חולשה וקור ב-SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Ban Lan Gen",
                rank: "B",
                latin: "Radix Isatidis",
                hebrewPart: "שורש צמח ה-Da Qing",
                meaning: "שורש אינדיגו",
                tasteTemp: "מר | קר",
                organs: "HT, LU, ST",
                dosage: "15-30 גרם",
                summary: "מסלק חום ורעילות, מקרר דם ומיטיב עם הגרון (דגש מרכזי: גרון כואב/נפוח, מחלות ויראליות וחזרת)",
                functions: [
                    "<strong>1. מסלק חום ורעילות, מקרר דם ומיטיב עם הגרון:</strong> לגרון כואב, אדום ונפוח, חזרת וצהבת."
                ],
                contraindications: "חולשת SP/ST.",
                combinations: [
                    "<strong>עם Jin Yin Hua, Lian Qiao ו-Xuan Shen:</strong> לגרון כואב, אדום ונפוח."
                ],
                enrichment: ""
            },
            {
                name: "Pu Gong Ying",
                rank: "A",
                latin: "Herba Taraxaci",
                hebrewPart: "עשב שן הארי (Dandelion)",
                meaning: "שן הארי",
                tasteTemp: "מר, מתוק | קר",
                organs: "LIV, ST",
                dosage: "10-30 גרם",
                summary: "מטהר חום ורעילות (מוגלה ואבצסים בעור ובמיוחד בשדיים/חזה – מסטיטיס, ועיניים) ומטפל בלחות חמה (צהבת ו-Lin)",
                functions: [
                    "<strong>1. מטהר חום ורעילות ומסלק מוגלה:</strong> משפיע על הכבד והעיניים, ומטפל באבצסים ופצעים מוגלתיים בעור, במעיים ובמיוחד בחזה/שדיים (מעודד גם הפרשת חלב).",
                    "<strong>2. מסלק לחות חמה:</strong> לצהבת ול-Lin Syndrome."
                ],
                contraindications: "זהירות בשלשול ובמינון יתר.",
                combinations: [
                    "<strong>עם Jin Yin Hua ו-Ye Ju Hua:</strong> לפרונקלים ואבצסים."
                ],
                enrichment: ""
            },
            {
                name: "Ye Ju Hua",
                rank: "B",
                latin: "Flos Chrysanthemi Indici",
                hebrewPart: "פרח חרצית הפרא",
                meaning: "חרצית בר",
                tasteTemp: "מר, חריף | קריר",
                organs: "LU, LIV",
                dosage: "6-12 גרם",
                summary: "מסלק חום ורעילות בעור (פרונקלים וקרבונקלים), בגרון ובעיניים",
                functions: [
                    "<strong>1. מסלק חום ורעילות:</strong> לפרונקלים, קרבונקלים, גרון כואב ועיניים אדומות."
                ],
                contraindications: "חולשת SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bai Jiang Cao",
                rank: "C",
                latin: "Herba Cum Radice Patriniae",
                hebrewPart: "עשב ושורש",
                meaning: "\"עשב רוטב מקולקל\" (בשל ריחו)",
                tasteTemp: "חריף, מר | קריר",
                organs: "LI, LIV, ST",
                dosage: "9-15 גרם",
                summary: "מסלק חום ורעילות, מנקז מוגלה ומניע דם להפסקת כאב – דגש על אבצסים במעיים (אפנדיציטיס) ובעור",
                functions: [
                    "<strong>1. מסלק חום ורעילות, מסלק מוגלה ומניע דם להפסקת כאב:</strong> לאבצסים פנימיים במעיים (אפנדיציטיס), כאבי בטן/חזה אחרי לידה ופצעים מוגלתיים בעור."
                ],
                contraindications: "חוסר ב-SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Hong Teng",
                rank: "C",
                latin: "Caulis Sargentodoxae",
                hebrewPart: "גבעול/ענף",
                meaning: "\"ענף אדום\"",
                tasteTemp: "מר | ניטרלי",
                organs: "LI, LIV",
                dosage: "15-30 גרם",
                summary: "מסלק חום ורעילות (אבצסים במעיים/אפנדיציטיס ובעור) ומניע דם להפסקת כאב (דיסמנוריאה, טראומה, Bi)",
                functions: [
                    "<strong>1. מסלק חום ורעילות ומפחית אבצסים (במעיים ובעור).</strong>",
                    "<strong>2. מניע דם ומפסיק כאב:</strong> לטראומה, דיסמנוריאה וכאבי מפרקים."
                ],
                contraindications: "זהירות בהריון.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Yu Xing Cao",
                rank: "B",
                latin: "Herba Cum Radice Houttuyniae",
                hebrewPart: "עשב",
                meaning: "\"צמח עם ריח של דג\"",
                tasteTemp: "חריף | קריר",
                organs: "LI, LU",
                dosage: "15-60 גרם (בישול קצר!)",
                summary: "מסלק חום ורעילות ומוגלה – דגש מרכזי על אבצסים בריאות ושיעול מוגלתי, וכן משתן ללחות חמה",
                functions: [
                    "<strong>1. מסלק חום ורעילות ומפחית נפיחויות ומוגלה:</strong> בעיקר באבצסים בריאות (שיעול עם ליחה מוגלתית/דמית) ובעור.",
                    "<strong>2. מסלק חום ולחות ומשתן:</strong> ללחות חמה במעיים או בדרכי השתן (Lin)."
                ],
                contraindications: "חוסר וקור ב-SP/ST, לבשל זמן קצר בלבד.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Zi Hua Di Ding",
                rank: "B",
                latin: "Herba Cum Radice Violae",
                hebrewPart: "עשב סיגלית",
                meaning: "\"פרח סגול נעוץ באדמה\"",
                tasteTemp: "חריף, מר | קר",
                organs: "HT, LIV",
                dosage: "9-15 גרם",
                summary: "צמח חזק לסילוק חום ורעילות בעיקר בפצעים מוגלתיים ופרונקלים בעור, בגרון, בעיניים ובחזרת",
                functions: [
                    "<strong>1. מסלק חום ורעילות:</strong> לפרונקלים ואבצסים בעור, בשדיים, בגרון, בעיניים ובהכשת נחש."
                ],
                contraindications: "קור וחוסר ב-SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bai Hua She She Cao",
                rank: "B",
                latin: "Herba Hedyotidis Diffusae",
                hebrewPart: "עשב",
                meaning: "\"עשב לשון נחש לבן\"",
                tasteTemp: "מר, מתוק | קר",
                organs: "LIV, ST, LI",
                dosage: "15-60 גרם",
                summary: "מסלק חום ורעילות חזק (פצעים בעור, גרון, אפנדיציטיס והכשת נחש) ומסלק לחות חמה בשיתון (Lin/צהבת)",
                functions: [
                    "<strong>1. מסלק חום ורעילות חזק:</strong> לפצעים מוגלתיים, אבצסים, גרון והכשת נחש.",
                    "<strong>2. מסלק חום ולחות ע\"י שיתון:</strong> ל-Lin Syndrome ולצהבת."
                ],
                contraindications: "זהירות בהריון או בחולשת SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bai Tou Weng",
                rank: "B",
                latin: "Radix Pulsatillae Chinensis",
                hebrewPart: "שורש",
                meaning: "\"איש זקן עם ראש לבן\"",
                tasteTemp: "מר | קר",
                organs: "LI, LIV, ST",
                dosage: "6-15 גרם",
                summary: "הצמח המרכזי לדיזנטריה אקוטית (עם דם ומוגלה בצואה) על רקע חום ורעילות וחום ולחות במעיים",
                functions: [
                    "<strong>1. מסלק חום ורעילות וחום ולחות ב-LI/ST ומקרר דם:</strong> דגש מרכזי על דיזנטריה אקוטית."
                ],
                contraindications: "אסור בדיזנטריה כרונית ושלשול מחוסר וקור.",
                combinations: [
                    "<strong>עם Huang Lian, Huang Bai ו-Qin Pi:</strong> לדיזנטריה אקוטית מחום ורעילות (Bai Tou Weng Tang)."
                ],
                enrichment: ""
            },
            {
                name: "Bai Xian Pi",
                rank: "B",
                latin: "Cortex Dictamni Radicis",
                hebrewPart: "קליפת השורש",
                meaning: "\"קליפה טרייה לבנה\"",
                tasteTemp: "מר | קר",
                organs: "SP, ST",
                dosage: "6-9 גרם",
                summary: "מסלק חום, רעילות, לחות ורוח בעור – דגש על פצעים מוגלתיים/אקזמה המלווים בגרד חזק",
                functions: [
                    "<strong>1. מסלק חום, רעילות, לחות ורוח בעור:</strong> לפצעים עם מוגלה, אקזמה, פריחות וגרד חזק."
                ],
                contraindications: "מצבי קור מחוסר.",
                combinations: [
                    "<strong>עם Tu Fu Ling / Ku Shen:</strong> לפצעים וגרד בעור על רקע לחות חמה."
                ],
                enrichment: ""
            },
            {
                name: "Tu Fu Ling",
                rank: "B",
                latin: "Rhizoma Smilacis Glabrae",
                hebrewPart: "קנה שורש",
                meaning: "\"Fu Ling של האדמה\"",
                tasteTemp: "מתוק, חסר טעם | ניטרלי",
                organs: "ST, LIV",
                dosage: "15-60 גרם",
                summary: "מסלק רעילות ולחות חמה בעור (מתון/ניטרלי – מתאים גם למצבים כרוניים), בשתן ובמפרקים",
                functions: [
                    "<strong>1. מסלק רעילות ולחות חמה בעור:</strong> לפצעים כרוניים, אקזמה, עגבת.",
                    "<strong>2. משחרר מפרקים ומשתן לחות חמה.</strong>"
                ],
                contraindications: "חוסר Yin. מסורתית לא לשתות תה בזמן נטילת הצמח.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Ban Zhi Lian",
                rank: "C",
                latin: "Herba Scutellariae Barbatae",
                hebrewPart: "עשב",
                meaning: "\"חצי גבעול לוטוס\"",
                tasteTemp: "חריף, מר | קר",
                organs: "LI, LIV, LU, ST",
                dosage: "15-60 גרם",
                summary: "מסלק חום ורעילות, מניע דם (מפסיק כאב ומאיץ החלמת פצעים/אבצסים) ומשתן",
                functions: [
                    "<strong>1. מסלק חום ורעילות ומניע דם:</strong> לפצעים, פרונקלים, אבצסים וגושים."
                ],
                contraindications: "זהירות בהריון ובמטופלים חלשים.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Ma Bo",
                rank: "B",
                latin: "Lasiosphaera Seu Calvatia",
                hebrewPart: "פטריית כדור עלים",
                meaning: "פטרייה נפוחה",
                tasteTemp: "חריף | ניטרלי",
                organs: "LU",
                dosage: "1.5-4.5 גרם (לעטוף בבד בבישול)",
                summary: "מסלק חום ורעילות מהריאות ובעיקר מהגרון (טונסיליטיס ואיבוד קול) ומפסיק דימום חיצונית",
                functions: [
                    "<strong>1. מסלק חום ורעילות מהריאות ומהגרון (טונסיליטיס, גרון נפוח וכואב).</strong>",
                    "<strong>2. עוצר דימום בשימוש חיצוני.</strong>"
                ],
                contraindications: "איבוד קול מרוח קור.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Shan Dou Gen",
                rank: "B",
                latin: "Radix Sophorae Tonkinensis",
                hebrewPart: "שורש",
                meaning: "\"שורש שעועית הרים\"",
                tasteTemp: "מר | קר",
                organs: "LI, LU",
                dosage: "3-9 גרם",
                summary: "מסלק חום ורעילות חזק – דגש מרכזי על גרון כואב ונפוח מאוד (טונסיליטיס)",
                functions: [
                    "<strong>1. מסלק חום ורעילות בעיקר מהגרון.</strong>"
                ],
                contraindications: "חולשת SP/ST עם שלשול; מינון יתר גורם לבחילות והקאות.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "She Gan",
                rank: "C",
                latin: "Rhizoma Belamcandae",
                hebrewPart: "קנה שורש",
                meaning: "\"חץ שלוח\"",
                tasteTemp: "מר | קר",
                organs: "LU",
                dosage: "1.5-9 גרם",
                summary: "מסלק חום ורעילות מהגרון + מסלק ליחת חום מהריאות (שיעול וצפצופים)",
                functions: [
                    "<strong>1. מסלק חום ורעילות מהגרון.</strong>",
                    "<strong>2. מסלק ליחת חום מהריאות:</strong> לשיעול וצפצופי נשימה עם ליחה מרובה."
                ],
                contraindications: "הריון, חולשת SP/ST עם שלשול.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 6. מטהרי חום - מסלקי חום קיץ
    // ==========================================
    clear_summerheat: {
        title: "מסלקי חום קיץ",
        subtitle: "לטיפול בחום קיץ (חום, הזעה, צמא, יובש ומעורבות לחות ושלשול): He Ye, Lu Dou, Xi Gua, Bian Dou, Dou Juan.",
        icon: "☀️",
        color1: "#fdcb6e",
        color2: "#f39c12",
        herbs: [
            {
                name: "He Ye",
                rank: "A",
                latin: "Folium Nelumbinis Nuciferae",
                hebrewPart: "עלה של לוטוס",
                meaning: "עלה לוטוס",
                tasteTemp: "מר, מעט מתוק | ניטרלי",
                organs: "HT, LIV, SP",
                dosage: "9-15 גרם",
                summary: "מטפל בחום קיץ, מעלה את ה-SP Yang להפרדת עכור וטהור (נגד שלשול), ומפסיק דימום",
                functions: [
                    "<strong>1. מטפל בחום קיץ:</strong> חום, עצבנות, זיעה, שתן צהוב ושלשול.",
                    "<strong>2. מפריד בין עכור לטהור (מעלה SP Yang):</strong> לשלשול מחולשת טחול וחום קיץ.",
                    "<strong>3. מפסיק דימום:</strong> מחום או סטגנציה."
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Bian Dou:</strong> לחום קיץ עם שלשול."
                ],
                enrichment: ""
            },
            {
                name: "Lu Dou",
                rank: "B",
                latin: "Semen Phaseoli Radiati",
                hebrewPart: "שעועית ירוקה (מאש)",
                meaning: "שעועית ירוקה",
                tasteTemp: "מתוק | קריר",
                organs: "HT, ST",
                dosage: "15-30 גרם",
                summary: "מסלק חום קיץ (בעיקר כשיש צמא ועצבנות) ומסלק רעילות של מזון או צמחים רעילים (כמו Fu Zi)",
                functions: [
                    "<strong>1. לטיפול ולמניעת חום קיץ (עם צמא וחום).</strong>",
                    "<strong>2. מונע ומסלק רעילות:</strong> של פצעים בעור, הרעלת מזון או רעילות מצמחים כגון Fu Zi (יחד עם Gan Cao)."
                ],
                contraindications: "שלשול מקור וחוסר ב-SP/ST.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Xi Gua",
                rank: "B",
                latin: "Fructus Citrulli Vulgaris",
                hebrewPart: "אבטיח",
                meaning: "מילון מערבי (אבטיח)",
                tasteTemp: "מתוק | קר",
                organs: "UB, HT, ST",
                dosage: "15-30 גרם (או כוס מיץ)",
                summary: "מסלק חום קיץ, מייצר נוזלים (צמא) ומשתן",
                functions: [
                    "<strong>1. מסלק חום קיץ ומייצר נוזלים:</strong> לטיפול בצמא ושתן צהוב.",
                    "<strong>2. משתן.</strong>"
                ],
                contraindications: "מצבי לחות וקור במחמם האמצעי.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bian Dou",
                rank: "A",
                latin: "Semen Dolichoris Lablab",
                hebrewPart: "שעועית שטוחה לבנה",
                meaning: "שעועית שטוחה",
                tasteTemp: "מתוק | ניטרלי (מעט חמים)",
                organs: "SP, ST",
                dosage: "9-21 גרם",
                summary: "מסלק חום קיץ ולחות ומחזק את ה-SP (לשלשול, הקאות והפרשות וגינאליות)",
                functions: [
                    "<strong>1. מסלק חום קיץ ולחות:</strong> בעיקר כשיש שלשול והקאות.",
                    "<strong>2. מחזק את ה-SP:</strong> לשלשול כרוני והפרשות וגינאליות מחולשת טחול."
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Xiang Ru ו-Hou Po:</strong> לחום קיץ עם לחות, שלשול והקאות."
                ],
                enrichment: ""
            },
            {
                name: "Dou Juan",
                rank: "C",
                latin: "Semen Glycines Germinatum",
                hebrewPart: "נבטי סויה צעירים",
                meaning: "נבט סויה",
                tasteTemp: "מתוק | ניטרלי",
                organs: "SP, ST",
                dosage: "9-15 גרם",
                summary: "לחום קיץ המלווה בלחות חמה ב-M.J או במפרקים (כבדות וחיפוי עבה)",
                functions: [
                    "<strong>1. מטהר חום קיץ ומסלק לחות חמה.</strong>"
                ],
                contraindications: "",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 7. מטהרי חום - מקררי דם (רמת ה-Ying וה-Xue)
    // ==========================================
    cool_blood: {
        title: "מקררי דם",
        subtitle: "לטיהור חום מרמות ה-Ying והדם (דימומים, פריחות אדומות כהות ופגיעה ב-Yin): Xi Jiao / Shui Niu Jiao, Sheng Di Huang, Xuan Shen, Mu Dan Pi, Chi Shao, Zi Cao.",
        icon: "🩸",
        color1: "#fd79a8",
        color2: "#e84393",
        herbs: [
            {
                name: "Shui Niu Jiao (Xi Jiao)",
                rank: "A",
                latin: "Cornu Bubali (תחליף לקרן קרנף)",
                hebrewPart: "קרן באפלו מים (תחליף לקרן קרנף)",
                meaning: "קרן באפלו מים",
                tasteTemp: "מר, מלוח | קר",
                organs: "HT, LIV, ST",
                dosage: "10-30 גרם (מבושל ראשון!)",
                summary: "החזק ביותר בקירור דם וסילוק חום ורעילות מרמות ה-Ying והדם (דימומים, פריחות כהות, חום גבוה עם הזיות והתכווצויות – לעודף בלבד!)",
                functions: [
                    "<strong>1. מסלק חום ורעילות ומקרר את הדם:</strong> למצבי חום קשים ברמת ה-Ying והדם עם דימומים, פריחות סגולות, חום גבוה, הזיות, איבוד הכרה והתכווצויות."
                ],
                contraindications: "רק למצבי עודף! אסור בחוסר וקור ב-SP/ST ובהריון.",
                combinations: [
                    "<strong>עם Sheng Di Huang, Xuan Shen ו-Mu Dan Pi:</strong> לחום ברמת הדם וה-Ying."
                ],
                enrichment: ""
            },
            {
                name: "Sheng Di Huang",
                rank: "A",
                latin: "Radix Rehmanniae Glutinosae",
                hebrewPart: "שורש רמניה טרי/מיובש (לא מבושל)",
                meaning: "Sheng = טרי/גולמי, Di = אדמה, Huang = צהוב",
                tasteTemp: "מתוק, מר | קר",
                organs: "HT, KID, LIV",
                dosage: "9-30 גרם",
                summary: "מטהר חום ומקרר דם (דימומים ופריחות), מזין את ה-Yin ומייצר נוזלים (HT, KID, LIV), ומטהר אש בלב",
                functions: [
                    "<strong>1. מסלק חום ומקרר את הדם:</strong> לחום ברמת ה-Ying והדם עם דימומים ופריחות.",
                    "<strong>2. מזין את ה-Yin ואת נוזלי הגוף:</strong> בחוסר LIV/KID Yin ו-ST Yin עם חום נמוך, יובש בפה, צמא ועצירות.",
                    "<strong>3. מטהר אש בלב (בעיקר מחוסר):</strong> לעצבנות, אינסומניה, פצעים בלשון וגלי חום."
                ],
                contraindications: "חוסר ב-SP/ST עם לחות ושלשול (צמח כבד ועשיר).",
                combinations: [
                    "<strong>עם Xuan Shen ו-Mai Men Dong:</strong> לחום מחוסר Yin ויובש במעיים."
                ],
                enrichment: ""
            },
            {
                name: "Xuan Shen",
                rank: "A",
                latin: "Radix Scrophulariae Ningpoensis",
                hebrewPart: "שורש",
                meaning: "Xuan = כהה/שחור, Shen = שורש",
                tasteTemp: "מלוח, מתוק, מר | קר",
                organs: "KID, LU, ST",
                dosage: "9-30 גרם",
                summary: "מטהר חום ומקרר דם, מזין Yin, מסלק אש ורעילות (גרון ועיניים) ומרכך התקשויות (מלוח – גושים בצוואר)",
                functions: [
                    "<strong>1. מטהר חום ומקרר דם.</strong>",
                    "<strong>2. מזין את ה-Yin (לחום מחוסר Yin).</strong>",
                    "<strong>3. מסלק אש ורעילות:</strong> לנפיחות וכאב בגרון ובעיניים.",
                    "<strong>4. מרכך התקשויות (מלוח):</strong> לגושים בצוואר ובגרון מליחת חום ואש."
                ],
                contraindications: "חוסר ב-SP/ST עם לחות ושלשול. אסור בשילוב עם Li Lu.",
                combinations: [
                    "<strong>עם Sheng Di Huang:</strong> למחלות חום על רקע חוסר Yin וחום בדם.",
                    "<strong>עם Xia Ku Cao ו-Mu Li:</strong> לריכוך גושים והתקשויות."
                ],
                enrichment: ""
            },
            {
                name: "Mu Dan Pi",
                rank: "A",
                latin: "Cortex Moutan Radicis",
                hebrewPart: "קליפת שורש אדמונית העץ",
                meaning: "Mu = עץ, Dan = אדום, Pi = קליפה",
                tasteTemp: "חריף, מר | קריר",
                organs: "HT, LIV, KID",
                dosage: "6-12 גרם",
                summary: "מטהר חום ומקרר דם (עודף), מטהר חום מחוסר Yin (ללא הזעה!), מניע דם (בגלל שהוא חריף), מוריד LIV Yang ומסלק מוגלה",
                functions: [
                    "<strong>1. מטהר חום ומקרר את הדם:</strong> לדימומים מחום בדם (אף, ליחה, מחזור שופע ופריחות).",
                    "<strong>2. מטהר חום מחוסר Yin (LIV + KID):</strong> בעיקר בחום בעצמות ללא הזעה.",
                    "<strong>3. מניע את הדם:</strong> לבעיות מחזור, מאסות וטראומה.",
                    "<strong>4. מוריד LIV Yang עולה:</strong> לכאב ראש, סחרחורת ועיניים אדומות.",
                    "<strong>5. מוריד נפיחות ומעודד יציאת מוגלה:</strong> לאבצסים בעור ובמעיים."
                ],
                contraindications: "חוסר וקור ב-SP/ST, הזעה מרובה או הריון.",
                combinations: [
                    "<strong>עם Chi Shao:</strong> לקירור והנעת דם בעור ובגינקולוגיה.",
                    "<strong>עם Qing Hao:</strong> לחום מחוסר Yin."
                ],
                enrichment: ""
            },
            {
                name: "Chi Shao",
                rank: "A",
                latin: "Radix Paeoniae Rubrae",
                hebrewPart: "שורש אדמונית אדומה (Peony)",
                meaning: "Chi = אדום, Shao = צמח האדמונית",
                tasteTemp: "חמוץ, מר | קריר",
                organs: "LIV, SP",
                dosage: "4.5-9 גרם",
                summary: "מטהר חום ומקרר דם, מניע דם ומפסיק כאב (גניקולוגיה, טראומה, עור ועיניים אדומות)",
                functions: [
                    "<strong>1. מטהר חום ומקרר את הדם:</strong> לדימומים ולהתבטאויות בעור מחום בדם.",
                    "<strong>2. מניע דם ומפסיק כאב:</strong> לבעיות גינקולוגיות (דיסמנוריאה, אמנוריאה, מאסות), כאבי בטן, טראומה ופצעים בעור."
                ],
                contraindications: "חוסר דם וקור. אסור עם Li Lu.",
                combinations: [
                    "<strong>עם Mu Dan Pi:</strong> לחום בדם ותקיעות דם."
                ],
                enrichment: ""
            },
            {
                name: "Zi Cao",
                rank: "B",
                latin: "Radix Arnebiae Seu Lithospermi",
                hebrewPart: "שורש",
                meaning: "Zi = סגול, Cao = עשב",
                tasteTemp: "מתוק | קר",
                organs: "HT, LIV",
                dosage: "3-9 גרם",
                summary: "מקרר דם ומסלק חום, רעילות ולחות חמה בעור (פריחות סגולות/כהות, אקזמה, כוויות) + מלחלח מעיים (עצירות)",
                functions: [
                    "<strong>1. מסלק חום, חום ולחות, אש ורעילות ומקרר דם בעור:</strong> לפריחות כהות/סגלגלות, אקזמה, כוויות וגרד, ומעודד יציאת פריחה שהתעכבה.",
                    "<strong>2. מלחלח מעיים:</strong> לטיפול בעצירות מחום."
                ],
                contraindications: "חולשת SP/ST עם שלשול.",
                combinations: [],
                enrichment: ""
            }
        ]
    }
};