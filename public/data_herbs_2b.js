// ==========================================
// === קובץ data_herbs_2b.js ===
// מאגר צמחי מרפא בודדים - קטגוריות 13 עד 17 (רוח-לחות, ליחת חום/קור, מפסיקי שיעול ומעודדי הקאה)
// ==========================================

if (typeof herbsCategoriesData !== 'undefined') {
    Object.assign(herbsCategoriesData, {
        // ==========================================
        // 13. מסלקי רוח-לחות (Bi Syndrome)
        // ==========================================
        dispel_wind_dampness: {
            title: "מסלקי רוח-לחות (Bi Syndrome)",
            subtitle: "לפתיחת התעלות וטיפול בכאבי מפרקים, שרירים, גידים ועצמות: Du Huo, Qin Jiao, Wei Ling Xian, Hai Tong Pi, Mu Gua, Can Sha, Sang Zhi, Wu Jia Pi, Xi Xian Cao, Hai Feng Teng, Qian Nian Jian, Bai Hua She, Wu Shao She, She Tui, Song Jie, Luo Shi Teng, Guang Fang Ji.",
            icon: "🦴",
            color1: "#00cec9",
            color2: "#0984e3",
            herbs: [
                {
                    name: "Du Huo",
                    rank: "A",
                    latin: "Radix Angelicae Pubescentis",
                    hebrewPart: "שורש אנג'ליקה",
                    meaning: "\"בחיים לבד\" (אינו זז ברוח)",
                    tasteTemp: "מר, חריף | חמים",
                    organs: "UB, KID",
                    dosage: "3-9 גרם",
                    summary: "מסלק רוח-לחות-קור חיצוני או פנימי (אקוטי או כרוני) בעיקר בפלג גוף תחתון (Lower Jiao)",
                    functions: [
                        "<strong>1. מסלק רוח-לחות-קור (Bi Syn):</strong> בעיקר בפלג גוף תחתון (גב תחתון ורגליים), למצבים אקוטיים וכרוניים כאחד.",
                        "<strong>2. משחרר חיצון (רוח קור לחות):</strong> למצבי רוח קור המלווים בלחות.",
                        "<strong>3. לכאב ראש וכאב שיניים:</strong> הקשורים לחוסר או קור במרידיאן הכליות."
                    ],
                    contraindications: "זהירות בחוסר Yin עם סימני חום.",
                    combinations: [
                        "<strong>עם Qiang Huo:</strong> לכאבים עם רוח קור לחות בכל הגוף (Upper Jiao + Lower Jiao) וחיצון.",
                        "<strong>עם Sang Ji Sheng:</strong> לכאבי גב תחתון ומפרקים על רקע חוסר ב-LIV/KID."
                    ],
                    enrichment: ""
                },
                {
                    name: "Qin Jiao",
                    rank: "B",
                    latin: "Radix Gentianae Macrophyllae",
                    hebrewPart: "שורש",
                    meaning: "Qin = שם האזור, Jiao = שורש מצטלב",
                    tasteTemp: "מר, חריף | מעט קריר",
                    organs: "ST, LIV, GB",
                    dosage: "4.5-12 גרם",
                    summary: "רוח לחות קור/חום, אקוטי/כרוני, דגש על גידים ורצועות בגפיים. מתון (מתאים למצבי חוסר), מטהר חום מחוסר Yin וממתן ייבוש של צמחים אחרים",
                    functions: [
                        "<strong>1. מטפל ברוח לחות (דגש חובה לזכור!):</strong> בעיקר בגידים ורצועות ובגפיים, במצבי חום או קור, אקוטי או כרוני. מתון ואינו מייבש (ממתן את הייבוש שגורמים צמחי Bi אחרים ומתאים לחוסר).",
                        "<strong>2. מסלק חום מחוסר Yin:</strong> מתאים למצבי חוסר Yin עם חום בעצמות.",
                        "<strong>3. מסלק לחות חמה בצהבת ומלחלח מעיים.</strong>"
                    ],
                    contraindications: "חולשת SP עם שלשול.",
                    combinations: [
                        "<strong>עם Du Huo:</strong> ל-Bi על רקע חוסר."
                    ],
                    enrichment: "\"הצמח הלח מבין צמחי הרוח\" – ממתן ייבוש של צמחים אחרים."
                },
                {
                    name: "Wei Ling Xian",
                    rank: "A",
                    latin: "Radix Clematidis",
                    hebrewPart: "שורש זלזלת",
                    meaning: "Wei = חזק, Ling = חופשי/יעיל, Xian = פייה",
                    tasteTemp: "חריף, מלוח | חמים",
                    organs: "UB",
                    dosage: "6-12 גרם",
                    summary: "מטפל ב-Bi רוח לחות חיצוני ופנימי (יותר למצבי קור), פותח תעלות ומפסיק כאב בכל הגוף, ומקל על אי נוחות ב-M.J (לחות ונוזלים)",
                    functions: [
                        "<strong>1. מטפל ברוח לחות (Bi), פותח תעלות ומפסיק כאב:</strong> מתאים גם למצבים על רקע חיצון ומניע את ה-Qi בתעלות (חיצוני + פנימי).",
                        "<strong>2. מקל על אי נוחות ב-M.J:</strong> מסלק הצטברות של לחות או נוזלים פתולוגיים (ומרכך עצמות דגים בגרון)."
                    ],
                    contraindications: "מצבי חוסר Qi ודם.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Hai Tong Pi",
                    rank: "A",
                    latin: "Cortex Erythrinae Variegatae",
                    hebrewPart: "קליפת עץ",
                    meaning: "Hai = ים, Tong = שם הצמח, Pi = קליפה",
                    tasteTemp: "מר, חריף | ניטרלי",
                    organs: "LIV, SP, KID",
                    dosage: "6-15 גרם",
                    summary: "רוח לחות (Bi) חום או קור בעיקר ב-Lower Jiao (גב תחתון וברכיים), וכן גרד בעור (סקביאס) בשימוש חיצוני",
                    functions: [
                        "<strong>1. מטפל ברוח לחות ופותח את התעלות:</strong> בעיקר ל-Lower Jiao, מתאים למצבי קור או חום (ניטרלי).",
                        "<strong>2. בשימוש חיצוני לגירוד בעור (למשל סקביאס) או ל-Bi.</strong>"
                    ],
                    contraindications: "זהירות בחוסר דם.",
                    combinations: [
                        "<strong>עם Gui Zhi:</strong> לטיפול חיצוני בכאבי מפרקים.",
                        "<strong>עם Du Huo:</strong> ל-Bi ב-Lower Jiao."
                    ],
                    enrichment: ""
                },
                {
                    name: "Mu Gua",
                    rank: "A",
                    latin: "Fructus Chaenomelis Lagenariae",
                    hebrewPart: "פרי חבוש סיני",
                    meaning: "Mu = עץ/קרש, Gua = פרי",
                    tasteTemp: "חמוץ | מעט חמים",
                    organs: "SP, LIV",
                    dosage: "4.5-12 גרם",
                    summary: "Bi גידים ורצועות (חמוץ – כבד, כאב מכווץ) בעיקר ב-Lower Jiao (גב ורגליים), ובנוסף מהרמן את ה-M.J ומסלק לחות",
                    functions: [
                        "<strong>1. מטפל ב-Bi ופותח תעלות:</strong> בעיקר להרפיית גידים ורצועות – כאב מכווץ (חמוץ קשור לכבד), יותר למחמם תחתון (גב ורגליים).",
                        "<strong>2. מהרמן את הקיבה ומסלק לחות:</strong> לכאבי בטן מכווצים מהקאות ושלשולים, לרבות תקיעות מזון עם לחות ב-M.J."
                    ],
                    contraindications: "גפ\"ח (חמוץ מכווץ).",
                    combinations: [
                        "<strong>עם Can Sha:</strong> לכאב מכווץ בבטן, חוסר איזון עם לחות בקיבה וב-SP וכן Bi Syn."
                    ],
                    enrichment: ""
                },
                {
                    name: "Can Sha",
                    rank: "B",
                    latin: "Excrementum Bombycis",
                    hebrewPart: "צואה של תולעת משי",
                    meaning: "צואת תולעת משי",
                    tasteTemp: "מתוק, חריף | חמים",
                    organs: "LIV, SP, ST",
                    dosage: "9-15 גרם",
                    summary: "רוח + לחות: Bi (בעיקר גידים), גרד בעור, והרמוניה של ה-M.J (שלשול מ-SP והקאות מ-ST)",
                    functions: [
                        "<strong>1. קשור לרוח (כבד):</strong> ל-Bi וכן לגרד בעור.",
                        "<strong>2. קשור ללחות ב-M.J:</strong> ללחות שגרמה לחוסר איזון בין SP (שלשול) ל-ST (הקאות)."
                    ],
                    contraindications: "",
                    combinations: [
                        "<strong>עם Mu Gua:</strong> לכאב מכווץ בבטן, שלשול, הקאות ו-Bi."
                    ],
                    enrichment: ""
                },
                {
                    name: "Sang Zhi",
                    rank: "B",
                    latin: "Ramulus Mori",
                    hebrewPart: "ענף דק של עץ התות",
                    meaning: "ענף תות",
                    tasteTemp: "מר, מתוק | קריר",
                    organs: "LIV",
                    dosage: "10-30 גרם",
                    summary: "רוח לחות חום – בעיקר בפלג גוף עליון (Upper Jiao – כתפיים, זרועות וידיים)",
                    functions: [
                        "<strong>1. לטיפול ב-Bi בעיקר ב-Upper Jiao:</strong> מתאים ל-Bi חום בחלק העליון של הגוף (ובשילוב צמחים מתאים גם לקור)."
                    ],
                    contraindications: "",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Wu Jia Pi",
                    rank: "B",
                    latin: "Cortex Acanthopanacis",
                    hebrewPart: "קליפת שורש צמח עם 5 עלים",
                    meaning: "קליפת חמשת העלים",
                    tasteTemp: "חריף, מר | חמים",
                    organs: "LIV, KID",
                    dosage: "4.5-15 גרם",
                    summary: "Bi של רוח-לחות-קור על רקע חוסר LIV + KID (חיזוק גידים, רצועות ועצמות במבוגרים/ילדים) + מסלק לחות ובצקות (Leg Qi)",
                    functions: [
                        "<strong>1. מטפל ב-Bi בעיקר על רקע חוסר KID + LIV:</strong> לרוח, לחות וקור עם דגש על גידים, רצועות ועצמות.",
                        "<strong>2. מסלק לחות ונפיחות:</strong> לקושי בשתן, בצקת ואי נוחות ברגליים (Leg Qi)."
                    ],
                    contraindications: "זהירות במקרי חוסר Yin + חום.",
                    combinations: [
                        "<strong>עם Qian Nian Jian:</strong> ל-Bi על רקע חוסר ב-KID + LIV."
                    ],
                    enrichment: ""
                },
                {
                    name: "Xi Xian Cao",
                    rank: "B",
                    latin: "Herba Siegesbeckiae Orientalis",
                    hebrewPart: "עשב",
                    meaning: "עשב",
                    tasteTemp: "מר | קר",
                    organs: "LIV, KID",
                    dosage: "6-15 גרם",
                    summary: "רוח-לחות-חום (Bi Heat) וחיזוק גידים (שיתוקים ונימול בגפיים/פנים), מטהר חום מהכבד (LIV Yang ועצבנות) ומטפל בחום ולחות בעור (גרד/פריחה)",
                    functions: [
                        "<strong>1. לרוח, לחות, חום וחיזוק גידים:</strong> כולל שיתוקים בפנים וברגליים עם נימול וחולשה.",
                        "<strong>2. מטהר חום מהכבד:</strong> לעליית LIV Yang (כאב ראש, סחרחורת, עצבנות).",
                        "<strong>3. מסלק חום ולחות:</strong> פנימי וחיצוני (גירוד ופריחה בעור)."
                    ],
                    contraindications: "חוסר דם.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Hai Feng Teng",
                    rank: "B",
                    latin: "Caulis Piperis Kadsurae",
                    hebrewPart: "ענף מטפס",
                    meaning: "Hai = ים, Feng = רוח, Teng = ענף",
                    tasteTemp: "חריף, מר | מעט חמים",
                    organs: "LIV",
                    dosage: "6-15 גרם",
                    summary: "רוח, לחות והנעת תעלות – בעיקר ב-Lower Jiao (שרירים וגידים של הכבד) וכן לטראומה",
                    functions: [
                        "<strong>1. מסלק רוח ולחות ומניע תעלות:</strong> בעיקר ב-L.J כולל שרירים וגידים, ולטראומה."
                    ],
                    contraindications: "חוסר Yin עם חום.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Qian Nian Jian",
                    rank: "C",
                    latin: "Rhizoma Homalomenae Occultae",
                    hebrewPart: "קנה שורש",
                    meaning: "\"1000 שנות בריאות\"",
                    tasteTemp: "חריף, מר | חמים",
                    organs: "LIV, KID",
                    dosage: "4.5-9 גרם",
                    summary: "לרוח, לחות, קור וחיזוק גידים ועצמות (כאב, נימול וכיווצים במבוגרים על רקע חוסר KID + LIV)",
                    functions: [
                        "<strong>1. מסלק רוח-לחות-קור ומחזק גידים ועצמות.</strong>"
                    ],
                    contraindications: "חוסר Yin עם חום.",
                    combinations: [
                        "<strong>עם Wu Jia Pi:</strong> ל-Bi על רקע חוסר ב-KID + LIV."
                    ],
                    enrichment: ""
                },
                {
                    name: "Bai Hua She / Wu Shao She",
                    rank: "B",
                    latin: "Agkistrodon / Zaocys (נחש)",
                    hebrewPart: "נחש עם כתמים לבנים (C, רעיל) / נחש עם זנב שחור (B, מתון)",
                    meaning: "נחש",
                    tasteTemp: "מתוק, מלוח | חמים (Bai Hua She רעיל)",
                    organs: "SP, LIV",
                    dosage: "3-9 גרם",
                    summary: "חזק לרוח, לחות, קור ופתיחת תעלות – דגש על רוח (Bi עקשני, גרד בעור, ורוח פנימית שגרמה ל-CVA, שיתוקים והתכווצויות)",
                    functions: [
                        "<strong>1. חזק לרוח, לחות ופתיחת תעלות:</strong> ל-Bi המלווה בקור, לרוח בעור (גרד), ול-CVA, שיתוקים והתכווצויות."
                    ],
                    contraindications: "זהירות בחוסר Yin ודם עם סימני חום.",
                    combinations: [],
                    enrichment: "Wu Shao She זהה בתכונותיו אך מתון יותר ואינו רעיל."
                },
                {
                    name: "She Tui",
                    rank: "C",
                    latin: "Exuviae Serpentis",
                    hebrewPart: "נשל נחש",
                    meaning: "She = נחש, Tui = נשל",
                    tasteTemp: "מתוק, מלוח | ניטרלי",
                    organs: "LIV",
                    dosage: "1.5-3 גרם",
                    summary: "רוח ולחות עם דגש על הרוח (עור, מפרקים, עיניים, התכווצויות)",
                    functions: [
                        "<strong>1. לרוח ולחות (Bi) עם דגש על רוח (LIV):</strong> במפרקים, בעור (גרד), התכווצויות ובעיות עיניים."
                    ],
                    contraindications: "אסור בהריון.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Song Jie",
                    rank: "C",
                    latin: "Lignum Pini Nodus",
                    hebrewPart: "מפרק ענף עץ האורן",
                    meaning: "מפרק עץ אורן",
                    tasteTemp: "מר | חמים",
                    organs: "LIV",
                    dosage: "1.5-3 גרם (עד 9 גרם)",
                    summary: "לרוח, לחות וקור במפרקים – דגש על ייבוש הלחות והפסקת כאב (כולל טראומה)",
                    functions: [
                        "<strong>1. לכאבי מפרקים כאשר הלחות דומיננטית וכן למצבי טראומה.</strong>"
                    ],
                    contraindications: "חוסר דם.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Luo Shi Teng",
                    rank: "B",
                    latin: "Caulis Trachelospermi Jasminoidis",
                    hebrewPart: "ענף מטפס",
                    meaning: "\"ענף הצמח המחבק חזק את האבן\"",
                    tasteTemp: "מר | קריר",
                    organs: "LIV",
                    dosage: "6-15 גרם",
                    summary: "לרוח לחות חום (Bi Heat עם התכווצות בגידים) ומקרר דם להפחתת נפיחות (בעור ובגרון)",
                    functions: [
                        "<strong>1. לרוח לחות חום (Bi Heat) המלווה בהתכווצות בגידים וכאבים.</strong>",
                        "<strong>2. מקרר את הדם להפחתת נפיחות:</strong> בפצעים ואבצסים בעור ובגרון."
                    ],
                    contraindications: "",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Guang Fang Ji",
                    rank: "B",
                    latin: "Radix Aristolochiae Fangchi",
                    hebrewPart: "שורש",
                    meaning: "Fang Ji מאזור Guang",
                    tasteTemp: "מר, חריף | קר",
                    organs: "UB, SP, KID",
                    dosage: "3-9 גרם",
                    summary: "מסלק רוח לחות חום (Bi Heat – חזק יותר בכאבי Bi מאשר Han Fang Ji) ומשתן לסילוק בצקות",
                    functions: [
                        "<strong>1. מסלק רוח לחות חום (Bi Heat).</strong>",
                        "<strong>2. משתן לסילוק בצקות.</strong>"
                    ],
                    contraindications: "חוסר ב-SP/ST.",
                    combinations: [],
                    enrichment: "דגש חובה לזכור: Han Fang Ji חזק יותר בשיתון ובצקות; Guang Fang Ji חזק יותר בטיפול ברוח-לחות (Bi)."
                }
            ]
        },

        // ==========================================
        // 14. מתמירי ליחה - מסלקי ליחת חום
        // ==========================================
        transform_phlegm_heat: {
            title: "מסלקי ליחת חום",
            subtitle: "לטיפול בליחה צמיגה וצהובה בריאות ובמיסוס התקשויות וגושים בתעלות (גוייטר/סקרופולה): Qian Hu, Chuan Bei Mu, Zhe Bei Mu, Gua Lou, Tian Hua Fen, Zhu Li, Zhu Ru, Tian Zhu Huang, Fu Hai Shi, Hai Ge Ke, Kun Bu, Hai Zao, Pang Da Hai.",
            icon: "🫁",
            color1: "#ff7675",
            color2: "#fdcb6e",
            herbs: [
                {
                    name: "Qian Hu",
                    rank: "A",
                    latin: "Radix Peucedani",
                    hebrewPart: "שורש",
                    meaning: "Qian = לפני, Hu = זר",
                    tasteTemp: "מר, חריף | קריר",
                    organs: "LU",
                    dosage: "4.5-9 גרם",
                    summary: "מסלק ליחת חום ומוריד LU Qi מטה (שיעול וצפצופים) על רקע פנימי וחיצוני (רוח חום) כאחד",
                    functions: [
                        "<strong>1. מוריד LU Qi למטה ומסלק ליחה:</strong> למצבי ליחת חום בריאות עם שיעול או צפצוף וליחה צהובה וצמיגה.",
                        "<strong>2. משחרר חיצון:</strong> בעיקר לרוח חום המלווה בשיעול עם ליחה."
                    ],
                    contraindications: "אסור לשלבו עם Li Lu.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Chuan Bei Mu",
                    rank: "A",
                    latin: "Bulbus Fritillariae Cirrhosae",
                    hebrewPart: "פקעת",
                    meaning: "Bei Mu מסצ'ואן",
                    tasteTemp: "מר, מתוק | קריר",
                    organs: "LU, HT",
                    dosage: "3-12 גרם",
                    summary: "מסלק ליחת חום שקשה להוציאה, בעיקר למצבים כרוניים כמו חוסר Yin מלווה בשיעול יבש/דמי, ובנוסף ממוסס התקשויות מליחת חום",
                    functions: [
                        "<strong>1. מסלק ליחת חום ומלחלח ריאות:</strong> לליחת חום שקשה להוציאה עם שיעול כרוני, שיעול יבש או דמי על רקע חוסר LU Yin.",
                        "<strong>2. מטהר חום וממוסס התקשויות:</strong> לגושים בצוואר או בחזה (שדיים) מליחת חום."
                    ],
                    contraindications: "אסור לשלבו עם Wu Tou / Fu Zi.",
                    combinations: [
                        "<strong>עם Zhi Mu:</strong> לחום מחוסר Yin עם שיעול וליחה שקשה להוציאה."
                    ],
                    enrichment: "Chuan Bei Mu – כרוני, שיעול יבש עם חוסר Yin, קריר ופחות חזק בגושים; Zhe Bei Mu – אקוטי, שיעול פרודוקטיבי, קר ויותר חזק בגושים."
                },
                {
                    name: "Zhe Bei Mu",
                    rank: "A",
                    latin: "Bulbus Fritillariae Thunbergii",
                    hebrewPart: "פקעת (זול יותר)",
                    meaning: "Bei Mu מג'ג'יאנג",
                    tasteTemp: "מר | קר",
                    organs: "HT, LU",
                    dosage: "3-9 גרם",
                    summary: "מסלק ליחת חום מהריאות עם שיעול פרודוקטיבי במצבים אקוטיים וכן ממוסס גושים והתקשויות מליחת חום",
                    functions: [
                        "<strong>1. מסלק ליחת חום מהריאות:</strong> למצבים אקוטיים יותר של שיעול פרודוקטיבי עם ליחת חום צמיגה.",
                        "<strong>2. מטהר חום וממוסס התקשויות:</strong> לגושים מליחת חום בצוואר ולאבצסים בחזה."
                    ],
                    contraindications: "אסור לשלבו עם Wu Tou / Fu Zi.",
                    combinations: [
                        "<strong>עם Xuan Shen ו-Xia Ku Cao (ו-Mu Li):</strong> למיסוס התקשויות וגושים (חובה לזכור!).",
                        "<strong>עם Lian Qiao ו-Niu Bang Zi:</strong> לשיעול עם ליחת חום על רקע מחלת חיצון."
                    ],
                    enrichment: ""
                },
                {
                    name: "Gua Lou (Quan Gua Lou)",
                    rank: "A",
                    latin: "Fructus Trichosanthis",
                    hebrewPart: "כל הפרי (קליפה Gua Lou Pi + זרע Gua Lou Ren)",
                    meaning: "פרי טריכוסנתס",
                    tasteTemp: "מתוק | קר",
                    organs: "LI, LU, ST",
                    dosage: "9-30 גרם",
                    summary: "ליחת חום שקשה להוציאה (כולל יובש), פותח ומרחיב את החזה (LU Qi) ומסלק התקשויות בחזה (אבצסים), ומלחלח מעיים",
                    functions: [
                        "<strong>1. מטהר חום וליחת חום מהריאות:</strong> למקרים של ליחת חום שקשה להוציאה עם שיעול.",
                        "<strong>2. מרחיב את החזה ומסלק התקשויות:</strong> לתקיעות LU Qi עם ליחת חום או אבצס בריאות/חזה.",
                        "<strong>3. מלחלח את המעיים (עצירות - בעיקר הזרע Gua Lou Ren).</strong>"
                    ],
                    contraindications: "זהירות בליחת קור או שלשול. אסור עם Wu Tou, Gan Jiang ו-Niu Xi.",
                    combinations: [
                        "<strong>עם Bei Mu:</strong> לליחת חום יבשה בריאות."
                    ],
                    enrichment: "Gua Lou Pi (הקליפה) – דגש על הנעת Qi בחזה והרחבתו; Gua Lou Ren (הזרע, 9-12 גרם) – דגש על לחלוח ריאות ומעיים (עצירות) והחשת החלמת אבצסים בחזה."
                },
                {
                    name: "Tian Hua Fen (Gua Lou Gen)",
                    rank: "A",
                    latin: "Radix Trichosanthis Kirilowii",
                    hebrewPart: "השורש של הצמח Gua Lou",
                    meaning: "שורש טריכוסנתס",
                    tasteTemp: "מר, מעט מתוק | קר",
                    organs: "ST, LU",
                    dosage: "9-15 גרם",
                    summary: "טיהור חום ויובש – מסלק ליחת חום יבשה, מזין ומייצר נוזלי גוף (צמא וסוכרת) ומסלק רעילות ומוגלה (אבצסים)",
                    functions: [
                        "<strong>1. מסלק ליחת חום יבשה (מלחלח) וחום בריאות.</strong>",
                        "<strong>2. מטהר חום ומייצר נוזלי גוף:</strong> למצבי חום (בעיקר מחוסר Yin) שיצרו צמא, יובש ועצבנות, ולמחלות מכלות (סוכרת).",
                        "<strong>3. מסלק רעילות ומסלק מוגלה:</strong> לפרונקלים ואבצסים בחזה ובעור."
                    ],
                    contraindications: "אסור בהריון ובמקרי קור וחוסר ב-SP/ST.",
                    combinations: [
                        "<strong>עם Lu Gen ו-Ge Gen:</strong> לחום ויובש בעקבות מחלת חום."
                    ],
                    enrichment: ""
                },
                {
                    name: "Zhu Li",
                    rank: "C",
                    latin: "Succus Bambusae",
                    hebrewPart: "נוזל/לשד במבוק",
                    meaning: "מיץ במבוק",
                    tasteTemp: "מתוק | קר מאוד",
                    organs: "HT, LU, ST",
                    dosage: "9-15 גרם לשיעול | 30-60 גרם לשינוי בהכרה",
                    summary: "קר מאוד – מטהר חום וליחת חום בריאות, בתעלות ובפתחי הלב (שיתוקים ואיבוד הכרה)",
                    functions: [
                        "<strong>1. מטהר חום וליחת חום עם שיעול (צמח חזק וקר מאוד).</strong>",
                        "<strong>2. מסלק ליחת חום שחסמה את התעלות והפתחים:</strong> לשיתוקים של הגפיים ואיבוד הכרה."
                    ],
                    contraindications: "קור וחוסר ב-SP.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Zhu Ru",
                    rank: "A",
                    latin: "Caulis Bambusae In Taeniis",
                    hebrewPart: "שבבי במבוק",
                    meaning: "שבבי גבעול במבוק",
                    tasteTemp: "מתוק | קריר",
                    organs: "GB, LU, ST",
                    dosage: "4.5-9 גרם",
                    summary: "מסלק חום וליחת חום מהריאות ומהקיבה, ומוריד ST Qi מורד (הקאות חום, כולל בהריון)",
                    functions: [
                        "<strong>1. מסלק ליחת חום מהריאות:</strong> לשיעול עם ליחת חום צמיגה ואי נוחות בחזה.",
                        "<strong>2. מטהר חום ומפסיק הקאות:</strong> להקאות חום מחום בקיבה (לרבות הקאות בהריון)."
                    ],
                    contraindications: "הקאות קור.",
                    combinations: [
                        "<strong>עם Gua Lou ו-Huang Qin:</strong> לשיעול עם ליחת חום בריאות."
                    ],
                    enrichment: ""
                },
                {
                    name: "Tian Zhu Huang",
                    rank: "A",
                    latin: "Concretio Silicea Bambusae",
                    hebrewPart: "הפרשה מבמבוק",
                    meaning: "\"במבוק שמיימי צהוב\"",
                    tasteTemp: "מתוק | קר",
                    organs: "GB, HT, LIV",
                    dosage: "3-9 גרם",
                    summary: "מסלק ליחת חום וחום בריאות ובלב (גם כבד) – להתכווצויות חום בילדים, CVA ואפילפסיה",
                    functions: [
                        "<strong>1. מסלק ליחת חום מהריאות (שקשה להוציאה).</strong>",
                        "<strong>2. מסלק ליחת חום וחום בלב:</strong> להתקפי התכווצויות, רעידות, CVA והתכווצויות חום בילדים."
                    ],
                    contraindications: "",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Fu Hai Shi",
                    rank: "C",
                    latin: "Pumex",
                    hebrewPart: "אבן צפה (סוג של אלמוג/ספוג)",
                    meaning: "אבן ים צפה",
                    tasteTemp: "מלוח | קר",
                    organs: "LU",
                    dosage: "6-15 גרם",
                    summary: "מסלק ליחת חום בריאות ומרכך התקשויות וגושי ליחה בצוואר (וגם אבנים בשתן)",
                    functions: [
                        "<strong>1. מסלק ליחת חום וחום מהריאות (שיעול).</strong>",
                        "<strong>2. מרכך התקשויות וגושי ליחה בצוואר.</strong>"
                    ],
                    contraindications: "זהירות במצבי שיעול מקור וחוסר.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Hai Ge Ke",
                    rank: "C",
                    latin: "Concha Cyclinae",
                    hebrewPart: "קליפת צדף ימי",
                    meaning: "Hai = ים, Ge = צדף, Ke = קליפה",
                    tasteTemp: "מר, מלוח | ניטרלי",
                    organs: "KID, LU, ST",
                    dosage: "6-15 גרם",
                    summary: "ליחת חום בריאות ובתעלות (גושים בצוואר), משתן ללחות, וסותר חומציות בקיבה",
                    functions: [
                        "<strong>1. מסלק ליחת חום ומוריד LU Qi מטה.</strong>",
                        "<strong>2. ממוסס התקשויות (גוייטר וסקרופולה).</strong>",
                        "<strong>3. משתן וסותר חומציות יתר בקיבה (באבקה).</strong>"
                    ],
                    contraindications: "זהירות בחולשת SP.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Kun Bu",
                    rank: "B",
                    latin: "Thallus Eckloniae",
                    hebrewPart: "אצת קומבו",
                    meaning: "אצת קומבו",
                    tasteTemp: "מלוח | קר",
                    organs: "KID, LIV, ST",
                    dosage: "4.5-15 גרם",
                    summary: "מסלק ליחת חום ומרכך התקשויות וגושים (בעיקר בצוואר – גוייטר וסקרופולה) ומשתן מתון",
                    functions: [
                        "<strong>1. מסלק ליחת חום ומרכך התקשויות (בעיקר בצוואר).</strong>",
                        "<strong>2. מסלק לחות ע\"י שיתון לבצקות.</strong>"
                    ],
                    contraindications: "זהירות במקרי חוסר וקור ב-SP/ST.",
                    combinations: [
                        "<strong>עם Hai Zao:</strong> לטיפול בגושים מליחת חום בצוואר."
                    ],
                    enrichment: ""
                },
                {
                    name: "Hai Zao",
                    rank: "B",
                    latin: "Herba Sargassi",
                    hebrewPart: "אצת ים",
                    meaning: "Hai = ים, Zao = עשב/אצה",
                    tasteTemp: "מר, מלוח | קר",
                    organs: "KID, LIV, LU, ST",
                    dosage: "4.5-15 גרם",
                    summary: "גושים מליחת חום בעיקר בצוואר (גוייטר וסקרופולה) ומשתן מתון לבצקות",
                    functions: [
                        "<strong>1. מסלק חום וליחת חום – מיסוס התקשויות (בצוואר).</strong>",
                        "<strong>2. משתן לטיפול בבצקות.</strong>"
                    ],
                    contraindications: "קור וחוסר ב-SP. יש הטוענים שאסור עם Gan Cao.",
                    combinations: [
                        "<strong>עם Kun Bu:</strong> לטיפול בגושים מליחת חום בצוואר."
                    ],
                    enrichment: ""
                },
                {
                    name: "Pang Da Hai",
                    rank: "C",
                    latin: "Semen Sterculiae Lychnophorae",
                    hebrewPart: "זרע",
                    meaning: "Pang = שמן, Da = גדול, Hai = ים",
                    tasteTemp: "מתוק | קריר",
                    organs: "LU, LI",
                    dosage: "4.5-9 גרם",
                    summary: "מיטיב עם LU Qi לגרון כואב ואיבוד קול + מיטיב עם ה-LI לעצירות מחום",
                    functions: [
                        "<strong>1. מיטיב עם LU Qi:</strong> לגרון כואב ואיבוד קול עם תקיעות LU Qi.",
                        "<strong>2. מיטיב עם ה-LI:</strong> לטיפול בעצירות המלווה בחום."
                    ],
                    contraindications: "",
                    combinations: [],
                    enrichment: ""
                }
            ]
        },

        // ==========================================
        // 15. מתמירי ליחה - מסלקי ליחת קור
        // ==========================================
        transform_phlegm_cold: {
            title: "מתמירי ליחת קור",
            subtitle: "לייבוש לחות וסילוק ליחת קור או ליחת לחות בריאות, בקיבה, בתעלות ובפתחים: Ban Xia, Tian Nan Xing, Dan Nan Xing, Xuan Fu Hua, Bai Qian, Bai Jie Zi, Jie Geng, Zao Jiao, Bai Fu Zi.",
            icon: "❄️",
            color1: "#81ecec",
            color2: "#00b894",
            herbs: [
                {
                    name: "Ban Xia",
                    rank: "A",
                    latin: "Rhizoma Pinelliae",
                    hebrewPart: "קנה שורש",
                    meaning: "Ban = חצי, Xia = קיץ (זמן הקציר)",
                    tasteTemp: "חריף | חמים, רעיל",
                    organs: "LU, SP, ST",
                    dosage: "4.5-12 גרם",
                    summary: "צמח עיקרי לליחת קור או ליחת לחות ב-LU וב-SP, מהרמן קיבה ומוריד ST Qi מורד (בחילות והקאות), וממוסס התקשויות מליחה",
                    functions: [
                        "<strong>1. מייבש לחות, מסלק ליחה ומוריד LU Qi מטה:</strong> לשיעול עם ליחת קור רבה, שופעת ויוצאת בקלות (LU), המלווה בלחות ב-SP.",
                        "<strong>2. מהרמן את הקיבה ומפסיק הקאות:</strong> לליחת לחות ב-M.J עם ST Qi מורד (בחילות והקאות).",
                        "<strong>3. ממוסס התקשויות:</strong> להתקשויות מליחה בריאות, בצוואר (גלעין שזיף), בחזה ובאפיגסטריום."
                    ],
                    contraindications: "מצבי חוסר Yin עם חום, חוסר בנוזלי גוף ומצבי חום (חם ומייבש). אסור עם Wu Tou.",
                    combinations: [
                        "<strong>עם Chen Pi:</strong> לייבוש לחות והתמרת ליחה.",
                        "<strong>עם Hou Po:</strong> לשיעול, הקאות או תחושת גוש בגרון/בחזה מליחה.",
                        "<strong>עם Sheng Jiang:</strong> לבחילות והקאות ולהפחתת רעילותו של Ban Xia."
                    ],
                    enrichment: "Bei Mu פועל יותר בריאות (ליחת חום); Ban Xia פועל בריאות וב-SP/ST (ליחת קור)."
                },
                {
                    name: "Tian Nan Xing (ו-Dan Nan Xing)",
                    rank: "B",
                    latin: "Rhizoma Arisaematis",
                    hebrewPart: "קנה שורש",
                    meaning: "\"כוכב השמיים הדרומיים\"",
                    tasteTemp: "מר, חריף | חמים, רעיל (Dan Nan Xing: מר וקר)",
                    organs: "SP, LU, LIV",
                    dosage: "4.5-9 גרם (Dan Nan Xing: 3-6 גרם)",
                    summary: "חזק ומייבש ליחה בחוזקה – ליחת קור בריאות וכן ליחה ורוח בתעלות ובפתחים (Bi, נימול, ספזם, CVA ואפילפסיה)",
                    functions: [
                        "<strong>1. מייבש לחות ומסלק ליחת קור בחוזקה:</strong> לשיעול עם ליחת קור ומועקה בחזה.",
                        "<strong>2. ללחות וליחה בתעלות ובפתחים (Bi ורוח):</strong> לכאב, ספזם, הירדמויות ונימול בגפיים, וסינדרומים של איבוד הכרה (CVA/אפילפסיה) מרוח וליחה."
                    ],
                    contraindications: "חוסר Yin, חום, ליחת חום, יובש והריון.",
                    combinations: [],
                    enrichment: "Dan Nan Xing (B) הוא אותו צמח שעורבב עם מיץ מרה של פרה – הופך למר וקר ומטפל בליחת חום ורוח בפתחים."
                },
                {
                    name: "Xuan Fu Hua",
                    rank: "B",
                    latin: "Flos Inulae",
                    hebrewPart: "פרח",
                    meaning: "\"פרח מסתחרר עוד ועוד\"",
                    tasteTemp: "מר, חריף | מעט חמים",
                    organs: "LIV, LU, ST, SP",
                    dosage: "3-12 גרם",
                    summary: "ליחת קור הגורמת ל-Qi מורד ב-LU (שיעול וצפצופים) וב-ST (בחילות, הקאות וגיהוקים) – הפרח היחיד שכיוונו האנרגטי מטה!",
                    functions: [
                        "<strong>1. מסלק ליחה ומוריד LU Qi למטה:</strong> לשיעול וצפצוף מליחת קור.",
                        "<strong>2. מוריד ST Qi מורד:</strong> לבחילות, הקאות וגיהוקים מליחה החוסמת את הקיבה."
                    ],
                    contraindications: "זהירות במקרי חוסר.",
                    combinations: [],
                    enrichment: "יוצא דופן: פרח שכיוונו האנרגטי הוא כלפי מטה."
                },
                {
                    name: "Bai Qian",
                    rank: "B",
                    latin: "Rhizoma et Radix Cynanchi Stauntonii",
                    hebrewPart: "שורש וקנה שורש",
                    meaning: "דומה ל-Qian Hu אך לבן וחמים",
                    tasteTemp: "חריף, מתוק | מעט חמים",
                    organs: "LU",
                    dosage: "3-9 גרם",
                    summary: "מסלק ליחת קור ומוריד LU Qi מטה (לשיעול וצפצופים עם ליחה רבה; אינו מייבש)",
                    functions: [
                        "<strong>1. מסלק ליחת קור ומוריד LU Qi מטה:</strong> לשיעול וצפצופים עם תקיעות LU Qi."
                    ],
                    contraindications: "זהירות בשיעול מחוסר Qi או כשל של ה-KID באחיזת ה-Qi.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Bai Jie Zi",
                    rank: "B",
                    latin: "Semen Sinapis Albae",
                    hebrewPart: "זרע חרדל לבן",
                    meaning: "\"זרע לבן קטן\"",
                    tasteTemp: "חריף | חמים",
                    organs: "LU",
                    dosage: "3-9 גרם",
                    summary: "מחמם את הריאות ומסלק ליחת קור (לבנה ושופעת) + מסלק ליחת קור בתעלות (גושים, נפיחויות וכאבי Bi)",
                    functions: [
                        "<strong>1. מסלק ליחת קור מהריאות, מחמם ומסדיר את ה-Qi:</strong> לשיעול עם ליחה לבנה ושופעת ואי נוחות בחזה.",
                        "<strong>2. ליחת קור בתעלות:</strong> לגושים או נפיחויות וכאבי Bi בתעלות מליחה וקור."
                    ],
                    contraindications: "חום או חוסר Yin.",
                    combinations: [
                        "<strong>עם Su Zi:</strong> לשיעול וצפצופים עם ליחה."
                    ],
                    enrichment: ""
                },
                {
                    name: "Jie Geng",
                    rank: "A",
                    latin: "Radix Platycodi Grandiflori",
                    hebrewPart: "שורש",
                    meaning: "Jie = ענף/מוצק, Geng = מפרק/ישר",
                    tasteTemp: "מר, חריף | ניטרלי",
                    organs: "LU",
                    dosage: "3-9 גרם",
                    summary: "מסלק ליחת קור או חום, פותח את הריאות, מיטיב עם הגרון (כאב גרון ואיבוד קול), מעודד הפרשת מוגלה (אבצסים), ומכוון את הפורמולה מעלה לריאות ולגרון",
                    functions: [
                        "<strong>1. מסלק ליחה ופותח ומפזר את הריאות:</strong> ניטרלי ולכן מתאים לליחת קור או חום עם שיעול.",
                        "<strong>2. מכוון צמחים אחרים לריאות ולגרון:</strong> כיוונו האנרגטי כלפי מעלה.",
                        "<strong>3. מיטיב עם הגרון:</strong> לכאב גרון או איבוד קול (מגפ\"ח או ממצב כרוני).",
                        "<strong>4. מעודד הפרשת מוגלה:</strong> לאבצסים בריאות ובגרון."
                    ],
                    contraindications: "זהירות במצבי חוסר Yin עם נטייה לשיעול דמי.",
                    combinations: [
                        "<strong>עם Sang Ye ו-Ju Hua:</strong> לשיעול על רקע רוח חום.",
                        "<strong>עם Ban Xia:</strong> לשיעול על רקע ליחת קור או ליחת לחות.",
                        "<strong>עם Zi Su Ye ו-Xing Ren:</strong> לשיעול על רקע רוח קור."
                    ],
                    enrichment: ""
                },
                {
                    name: "Zao Jiao",
                    rank: "C",
                    latin: "Fructus Gleditsiae Sinensis",
                    hebrewPart: "פרי/תרמיל",
                    meaning: "\"קוץ שחור/חום\"",
                    tasteTemp: "חריף | חמים, מעט רעיל",
                    organs: "LU, LI",
                    dosage: "0.5-1.5 גרם",
                    summary: "צמח חזק לסילוק ליחת קור עקשנית בריאות ולפתיחת פתחי הלב באיבוד הכרה או שיתוקים מליחה חוסמת",
                    functions: [
                        "<strong>1. מסלק בחוזקה ליחת קור עקשנית בריאות (שיעול וצפצופים).</strong>",
                        "<strong>2. פותח את פתחי הלב באיבוד הכרה ושיתוקים מליחה.</strong>"
                    ],
                    contraindications: "הריון, חוסר Yin (עלול לגרום להקאות ושלשולים).",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Bai Fu Zi",
                    rank: "B",
                    latin: "Rhizoma Typhonii",
                    hebrewPart: "קנה שורש",
                    meaning: "Fu Zi לבן (אינו אותו צמח כמו Fu Zi)",
                    tasteTemp: "חריף, מתוק | חמים, רעיל",
                    organs: "ST, SP, LIV",
                    dosage: "1.5-6 גרם",
                    summary: "מסלק ליחת קור וליחה + רוח באזור הראש והפנים (CVA, שיתוק פנים, כאבי ראש ו-Bi בחלק עליון) וממוסס התקשויות",
                    functions: [
                        "<strong>1. מייבש לחות, מסלק ליחת קור ומסלק רוח והתכווצויות:</strong> בעיקר כשליחת-רוח משפיעה על הראש (CVA, שיתוקים, פציאליס).",
                        "<strong>2. מסלק רוח לחות מהתעלות (Bi) ומפסיק כאב בחלק העליון של הגוף.</strong>",
                        "<strong>3. ממוסס התקשויות (גושים בצוואר) ומפסיק רעילות (הכשת נחש).</strong>"
                    ],
                    contraindications: "הריון, חום (בעיקר חום מחוסר Yin).",
                    combinations: [],
                    enrichment: ""
                }
            ]
        },

        // ==========================================
        // 16. מפסיקי שיעול וצפצופים
        // ==========================================
        relieve_cough_wheezing: {
            title: "מפסיקי שיעול וצפצופים",
            subtitle: "להפסקת שיעול ואסטמה (הורדת LU Qi מטה): Xing Ren, Zi Wan, Kuan Dong Hua, Su Zi, Pi Pa Ye, Bai Bu, Sang Bai Pi, Ting Li Zi, Ma Dou Ling, Meng Shi.",
            icon: "😮‍💨",
            color1: "#74b9ff",
            color2: "#6c5ce7",
            herbs: [
                {
                    name: "Xing Ren",
                    rank: "A",
                    latin: "Semen Pruni Armeniacae",
                    hebrewPart: "גרעין המשמש",
                    meaning: "גרעין משמש",
                    tasteTemp: "מר | מעט חמים, מעט רעיל",
                    organs: "LU, LI",
                    dosage: "3-9 גרם",
                    summary: "כמעט לכל סוגי השיעול והצפצופים (חם/קר, עודף/חוסר, יבש/לח, חיצוני/פנימי) וכן מלחלח את המעיים (עצירות)",
                    functions: [
                        "<strong>1. מפסיק שיעול וצפצופים:</strong> לסוגי שיעול רבים (אקוטי/כרוני, חם/קר, יבש או על רקע גפ\"ח).",
                        "<strong>2. מלחלח את המעיים:</strong> מכיל שמן (גרעין) ולכן מלחלח ומניע מעיים מטה לעצירות."
                    ],
                    contraindications: "זהירות כשיש שלשול.",
                    combinations: [
                        "<strong>עם Ma Huang:</strong> לשיעול וצפצופים על רקע גפ\"ח (רוח קור).",
                        "<strong>עם Sang Ye:</strong> לשיעול על רקע גפ\"ח רוח חום ו/או יובש.",
                        "<strong>עם Ma Huang ו-Shi Gao:</strong> לשיעול או צפצוף מחום בריאות.",
                        "<strong>עם Huo Ma Ren:</strong> לעצירות עם יובש במעיים."
                    ],
                    enrichment: ""
                },
                {
                    name: "Zi Wan",
                    rank: "B",
                    latin: "Radix Asteris Tatarici",
                    hebrewPart: "שורש",
                    meaning: "Zi = סגול, Wan = גמיש/גינה",
                    tasteTemp: "מר | מעט חמים",
                    organs: "LU",
                    dosage: "3-9 גרם",
                    summary: "מפסיק שיעול ומסלק ליחה (בעיקר במצבים כרוניים ועל רקע קור עם ליחה שקשה להוציאה, כולל שיעול דמי מחוסר Yin)",
                    functions: [
                        "<strong>1. מפסיק שיעול ומסלק ליחה:</strong> לשיעול מסוגים רבים, במיוחד כרוני."
                    ],
                    contraindications: "זהירות בעודף חום.",
                    combinations: [
                        "<strong>עם Chuan Bei Mu ו-Zhi Mu:</strong> לשיעול כרוני עם חוסר LU Yin ושיעול דמי.",
                        "<strong>עם Kuan Dong Hua:</strong> לשיעול וליחה."
                    ],
                    enrichment: ""
                },
                {
                    name: "Kuan Dong Hua",
                    rank: "B",
                    latin: "Flos Tussilaginis Farfarae",
                    hebrewPart: "פרח",
                    meaning: "\"פרח כסף חורף\"",
                    tasteTemp: "חריף | חמים",
                    organs: "LU",
                    dosage: "9-15 גרם",
                    summary: "מפסיק שיעול, מוריד LU Qi מטה ומסלק ליחה (לרבות על רקע גפ\"ח – לרוב קור)",
                    functions: [
                        "<strong>1. מפסיק שיעול ומוריד LU Qi מטה:</strong> לשיעול וצפצופים המלווים בקור."
                    ],
                    contraindications: "זהירות בשיעול חום.",
                    combinations: [
                        "<strong>עם Xing Ren:</strong> לשיעול וצפצוף עם ליחת קור וגפ\"ח.",
                        "<strong>עם Ban Xia:</strong> לשיעול וליחת קור רבה."
                    ],
                    enrichment: ""
                },
                {
                    name: "Su Zi",
                    rank: "A",
                    latin: "Fructus Perillae Frutescentis",
                    hebrewPart: "הזרע של צמח ה-Su (Zi Su Ye)",
                    meaning: "זרע פרילה",
                    tasteTemp: "חריף | חמים",
                    organs: "LU, LI",
                    dosage: "4.5-9 גרם",
                    summary: "מפסיק שיעול וצפצופים (דגש חזק על צפצופים שבהם הנשיפה קשה מהשאיפה!), מוריד Qi ומסלק ליחה, ומלחלח מעיים",
                    functions: [
                        "<strong>1. מפסיק שיעול וצפצופים, מוריד את ה-Qi ומסלק ליחה:</strong> בעיקר כאשר הנשיפה קשה יותר מהשאיפה.",
                        "<strong>2. מלחלח את המעיים (עצירות).</strong>"
                    ],
                    contraindications: "זהירות בשלשול.",
                    combinations: [
                        "<strong>עם Bai Jie Zi:</strong> לשיעול וצפצופים עם ליחה."
                    ],
                    enrichment: "הגזע (Su Geng) חזק יותר בהרחבת החזה."
                },
                {
                    name: "Pi Pa Ye",
                    rank: "A",
                    latin: "Folium Eriobotryae Japonicae",
                    hebrewPart: "עלה השסק",
                    meaning: "עלה שסק",
                    tasteTemp: "מר | קריר",
                    organs: "LU, ST",
                    dosage: "4.5-12 גרם (טרי: 15-30 גרם – יש להסיר את השערות מהעלה!)",
                    summary: "מסלק ליחת חום ומוריד LU Qi מטה (שיעול) + מהרמן את הקיבה ומוריד ST Qi מורד (בחילות, הקאות, גיהוקים ושיהוקים מחום)",
                    functions: [
                        "<strong>1. מסלק ליחה ומוריד LU Qi מטה:</strong> לשיעול עם ליחת חום בריאות.",
                        "<strong>2. מהרמן את הקיבה:</strong> ל-ST Qi מורד עם חום (בחילות, הקאות, גיהוקים ושיהוקים)."
                    ],
                    contraindications: "שיעול או הקאות מקור.",
                    combinations: [
                        "<strong>עם Xing Ren:</strong> לשיעול עם ליחת חום בריאות.",
                        "<strong>עם Huang Qin:</strong> לחום בקיבה עם Qi מורד."
                    ],
                    enrichment: "מטוגן בדבש לשיעול; מעורבב עם ג'ינג'ר להפסקת בחילות והקאות."
                },
                {
                    name: "Bai Bu",
                    rank: "B",
                    latin: "Radix Stemonae",
                    hebrewPart: "שורש",
                    meaning: "\"100 חלקים\"",
                    tasteTemp: "מתוק, מר | מעט חמים",
                    organs: "LU",
                    dosage: "3-9 גרם",
                    summary: "מפסיק שיעול ומלחלח את הריאות (לשיעול אקוטי או כרוני, בעיקר שיעול יבש מחוסר Yin) + מסלק פרזיטים (בעור ובמעיים – Pinworm)",
                    functions: [
                        "<strong>1. מפסיק שיעול ומלחלח את הריאות (בעיקר שיעול יבש מחוסר Yin).</strong>",
                        "<strong>2. מסלק פרזיטים (חיצוני לעור, פנימי ל-Pinworms במעיים).</strong>"
                    ],
                    contraindications: "זהירות בחוסר ב-SP עם צואה רכה.",
                    combinations: [
                        "<strong>עם Chuan Bei Mu:</strong> לשיעול יבש כרוני מחוסר Yin."
                    ],
                    enrichment: ""
                },
                {
                    name: "Sang Bai Pi",
                    rank: "A",
                    latin: "Cortex Mori Radicis",
                    hebrewPart: "קליפת שורש עץ התות",
                    meaning: "קליפת שורש התות",
                    tasteTemp: "מתוק | קר",
                    organs: "LU, SP",
                    dosage: "6-15 גרם",
                    summary: "מפסיק שיעול וצפצופים ומטהר חום מהריאות + משתן לטיפול בבצקות (במיוחד בצקות שטחיות ובפנים עם קושי בהשתנה)",
                    functions: [
                        "<strong>1. מפסיק שיעול וצפצופים ומטהר חום מהריאות.</strong>",
                        "<strong>2. משתן לטיפול בבצקות:</strong> לבצקות שטחיות או בפנים (LU) עם קושי בהשתנה."
                    ],
                    contraindications: "זהירות בשיעול מרוח קור או השתנת יתר.",
                    combinations: [
                        "<strong>עם Di Gu Pi:</strong> לשיעול עם ליחת חום וחום בריאות.",
                        "<strong>עם Fu Ling Pi:</strong> לבצקות שטחיות עם קושי בהשתנה."
                    ],
                    enrichment: ""
                },
                {
                    name: "Ting Li Zi",
                    rank: "B",
                    latin: "Semen Descurainiae",
                    hebrewPart: "זרע",
                    meaning: "זרע",
                    tasteTemp: "חריף, מר | קר",
                    organs: "LU, UB",
                    dosage: "3-9 גרם",
                    summary: "צמח חזק להורדת LU Qi מטה, סילוק ליחה וחום (דגש על צפצופים בעודף) וסילוק היתקעות נוזלים בחזה ובבטן",
                    functions: [
                        "<strong>1. מוריד LU Qi, מסלק ליחה ומסלק חום:</strong> לשיעול וצפצופים עם ליחת חום (דגש על הצפצוף).",
                        "<strong>2. מסלק היתקעות נוזלים:</strong> מניע מטה נוזלים שהצטברו בחזה ובבטן למצבי עודף עם קושי בהשתנה."
                    ],
                    contraindications: "שיעול וצפצוף על רקע חוסר Qi או בצקת מחוסר SP Qi.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Ma Dou Ling",
                    rank: "C",
                    latin: "Fructus Aristolochiae",
                    hebrewPart: "פרי",
                    meaning: "\"פעמונים על צוואר הסוס\"",
                    tasteTemp: "מר, מעט חריף | קר",
                    organs: "LU, LI",
                    dosage: "3-9 גרם",
                    summary: "מפסיק שיעול וצפצופים ומסלק ליחה וחום מהריאות (טוב גם לטונסיליטיס)",
                    functions: [
                        "<strong>1. מפסיק שיעול וצפצופים, מסלק ליחה וחום מהריאות.</strong>"
                    ],
                    contraindications: "מצבי חוסר SP עם קור; עלול לגרום לבחילות והקאות.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Meng Shi",
                    rank: "C",
                    latin: "Lapis Chloriti",
                    hebrewPart: "מינרל",
                    meaning: "\"מינרל חזק\"",
                    tasteTemp: "מתוק, מלוח | ניטרלי",
                    organs: "LU, LIV",
                    dosage: "9-15 גרם",
                    summary: "מוריד LU Qi מטה ומסלק ליחה ישנה ותקועה, ומרגיע את הכבד בהתקפי התכווצויות, מאניה ואפילפסיה מליחת חום",
                    functions: [
                        "<strong>1. מוריד LU Qi מטה ומסלק ליחה ישנה ותקועה בריאות.</strong>",
                        "<strong>2. מרגיע את הכבד להתקפים של התכווצויות ואפילפסיה מליחת חום.</strong>"
                    ],
                    contraindications: "אסור בחוסר או בהריון.",
                    combinations: [],
                    enrichment: ""
                }
            ]
        },

        // ==========================================
        // 17. מסלקי ליחה ע"י עידוד הקאה (עמ' 171)
        // ==========================================
        expel_phlegm_vomiting: {
            title: "מסלקי ליחה ע\"י עידוד הקאה",
            subtitle: "עיקרון עתיק (Tu Fa) לסילוק ליחה עקשנית החוסמת את הסרעפת והפתחים ע\"י גרימת הקאה (אינם בשימוש במערב): Gua Di, Li Lu.",
            icon: "⚠️",
            color1: "#b2bec3",
            color2: "#636e72",
            herbs: [
                {
                    name: "Gua Di",
                    rank: "C",
                    latin: "Pedicellus Melo",
                    hebrewPart: "העוקץ של פרי המלון",
                    meaning: "עוקץ מלון",
                    tasteTemp: "מר | קר, רעיל",
                    organs: "ST",
                    dosage: "אינו בשימוש במערב",
                    summary: "מעודד הקאה לסילוק ליחת חום או מזון תקוע החוסמים את הסרעפת ומעליה (התקפי התכווצויות, מאניה, צפצופים ותקיעות בגרון/אפיגסטריום)",
                    functions: [
                        "<strong>1. גורם להקאה לסילוק ליחת חום קשה החוסמת מעל הסרעפת.</strong>"
                    ],
                    contraindications: "רעיל – אסור בשימוש במערב.",
                    combinations: [],
                    enrichment: ""
                },
                {
                    name: "Li Lu",
                    rank: "C",
                    latin: "Radix et Rhizoma Veratri",
                    hebrewPart: "שורש וקנה שורש",
                    meaning: "שורש ורטרום",
                    tasteTemp: "חריף, מר | קר, רעיל",
                    organs: "ST, LU, LIV",
                    dosage: "אינו בשימוש במערב",
                    summary: "מעודד הקאה במצבי ליחה וחום המלווים ברוח (התקפים/CVA) והורג פרזיטים חיצונית",
                    functions: [
                        "<strong>1. מעודד הקאה לסילוק ליחה ורוח, והורג פרזיטים.</strong>"
                    ],
                    contraindications: "רעיל ואסור בשימוש במערב! אסור בשילוב עם כל צמחי ה-Shen (Ren Shen, Sha Shen, Dan Shen, Xuan Shen, Ku Shen), עם Bai Shao ועם Xi Xin.",
                    combinations: [],
                    enrichment: ""
                }
            ]
        }
    });
}