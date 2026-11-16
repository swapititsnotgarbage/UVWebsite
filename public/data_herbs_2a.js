// ==========================================
// === קובץ data_herbs_2a.js ===
// מאגר צמחי מרפא בודדים - קטגוריות 8 עד 12 (חום מחוסר, חום ולחות, משתנים, ארומטיים ופותחי פתחים)
// ==========================================

Object.assign(herbsCategoriesData, {
    // ==========================================
    // 8. מסלקי חום מחוסר Yin
    // ==========================================
    clear_deficiency_heat: {
        title: "מסלקי חום מחוסר Yin",
        subtitle: "לטיפול בחום ריק מחוסר Yin (חום ב-5 הכפות, הזעות לילה, חום אחה\"צ/ערב): Di Gu Pi, Bai Wei, Yin Chai Hu, Hu Huang Lian, Qing Hao.",
        icon: "🌙",
        color1: "#a29bfe",
        color2: "#6c5ce7",
        herbs: [
            {
                name: "Di Gu Pi",
                rank: "A",
                latin: "Cortex Lycii Radicis",
                hebrewPart: "קליפת שורש הגוג'י (Gou Qi Zi)",
                meaning: "Di = אדמה, Gu = עצם, Pi = קליפה",
                tasteTemp: "מתוק | קר",
                organs: "LU, LIV, KID",
                dosage: "6-15 גרם",
                summary: "מסלק חום מחוסר ב-LU (שיעול וצפצופים) וב-LIV + KID (חום בעצמות והזעות לילה), ומקרר דם להפסקת דימום",
                functions: [
                    "<strong>1. מסלק אש / חום מחוסר Yin:</strong> בעיקר בריאות (חוסר LU Yin עם שיעול, צפצופים, צמא והזעות) וכן מחוסר KID / LIV Yin (חום בעצמות).",
                    "<strong>2. מטהר חום ומקרר דם:</strong> לדימומים עקב חום בדם (דימום אף, הקאה או ליחה דמית, דם בשתן)."
                ],
                contraindications: "מצבי חוסר SP/ST עם שלשול, מצבי גפ\"ח.",
                combinations: [
                    "<strong>עם Sheng Di Huang:</strong> לדימום מחזור מחום בדם.",
                    "<strong>עם Sang Bai Pi:</strong> לשיעול עם חום בריאות."
                ],
                enrichment: ""
            },
            {
                name: "Bai Wei",
                rank: "B",
                latin: "Radix Cynanchi Atrati",
                hebrewPart: "שורש",
                meaning: "Bai = לבן, Wei = פרח/מריח טוב",
                tasteTemp: "מר, מלוח | קר",
                organs: "LU, ST, KID",
                dosage: "6-15 גרם",
                summary: "מטהר חום מחוסר Yin (בשלב החלמה או לפני/אחרי לידה), מקרר דם ומשתן (Lin דמי) ומסלק רעילות בעור ובגרון",
                functions: [
                    "<strong>1. מטהר חום מחוסר Yin:</strong> למחלת חום שפגעה ב-Yin או בדם ויצרה חום נמוך כרוני (מתאים גם לפני ואחרי לידה).",
                    "<strong>2. מקרר את הדם ומשתן:</strong> לחום בדם שיצר בעיה בשתן (Blood Lin).",
                    "<strong>3. מסלק רעילות בעור ובגרון:</strong> לפצעים או גרון נפוח, אדום וכואב."
                ],
                contraindications: "חוסר תיאבון ושלשול מחולשת SP.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Yin Chai Hu",
                rank: "B",
                latin: "Radix Stellariae Dichotomae",
                hebrewPart: "שורש",
                meaning: "\"Chai Hu כסוף\" (לא קשור ל-Chai Hu הרגיל!)",
                tasteTemp: "מתוק | קריר",
                organs: "LIV, ST",
                dosage: "3-9 גרם",
                summary: "צמח מתון מאוד לחום מחוסר Yin (מתאים למטופלים חלשים ולילדים עם תת-תזונה) ומקרר דם להפסקת דימום",
                functions: [
                    "<strong>1. מסלק חום מחוסר Yin:</strong> מתוק ומתון, מתאים למטופלים חלשים ולילדים.",
                    "<strong>2. מקרר דם ומפסיק דימום:</strong> לדימום אף, ליחה, שתן או רחם מחום בדם."
                ],
                contraindications: "פלישת רוח קור או חוסר דם ללא חום.",
                combinations: [
                    "<strong>עם Hu Huang Lian:</strong> לחום מחוסר Yin אצל ילדים ומבוגרים."
                ],
                enrichment: ""
            },
            {
                name: "Hu Huang Lian",
                rank: "B",
                latin: "Rhizoma Picrorhizae",
                hebrewPart: "קנה שורש",
                meaning: "\"Huang Lian זר\"",
                tasteTemp: "מר | קר",
                organs: "LIV, ST, LI",
                dosage: "3-9 גרם",
                summary: "מטהר חום מחוסר Yin + מסלק חום ולחות ממערכת העיכול (דיזנטריה, טחורים ותת-תזונה בילדים)",
                functions: [
                    "<strong>1. מטהר חום מחוסר Yin:</strong> בעיקר כשיש פגיעה במערכת העיכול.",
                    "<strong>2. מסלק חום ולחות:</strong> לדיזנטריה, שלשולים ופצעים/טחורים."
                ],
                contraindications: "זהירות כאשר הבעיה ב-SP/ST נובעת מחולשת Qi וקור.",
                combinations: [
                    "<strong>עם Yin Chai Hu:</strong> לחום מחוסר Yin."
                ],
                enrichment: ""
            },
            {
                name: "Qing Hao",
                rank: "A",
                latin: "Herba Artemisiae Annuae",
                hebrewPart: "עשב לענה מתוקה",
                meaning: "Qing = כחול-ירוק, Hao = עשב לענה",
                tasteTemp: "מר | קר",
                organs: "KID, LIV, GB",
                dosage: "3-9 גרם (לא לבשל הרבה זמן!)",
                summary: "מטהר חום מחוסר Yin (חום בלילה וקור בבוקר ללא הזעה), מסלק חום קיץ וקשור לשכבת Shao Yang (GB) ומלריה, ומקרר דם",
                functions: [
                    "<strong>1. מטהר חום מחוסר Yin:</strong> בעיקר כשיש חום בלילה ותחושת קור בבוקר (כשחום נלכד בשכבת ה-Yin).",
                    "<strong>2. מסלק חום קיץ ומשחרר Shao Yang (GB):</strong> למחלה הנמצאת חצי בפנים חצי בחוץ ולמלריה.",
                    "<strong>3. מקרר דם:</strong> לחום בכבד שיצר פריחות או דימום מהאף."
                ],
                contraindications: "זהירות בחוסר SP/ST עם קור ושלשול.",
                combinations: [
                    "<strong>עם Bie Jia:</strong> לחום מחוסר Yin בשלבים מתקדמים של מחלת חום (חום בלילה וקור בבוקר)."
                ],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 9. מטהרי חום ומייבשי לחות (מר וקר)
    // ==========================================
    clear_heat_dry_dampness: {
        title: "מטהרי חום ומייבשי לחות",
        subtitle: "צמחים מרים וקרים לטיפול בחום ולחות (דיזנטריה, צהבת, Lin, הפרשות ועור): Huang Qin, Huang Lian, Huang Bai, Long Dan Cao, Ku Shen, Qin Pi.",
        icon: "🔥💧",
        color1: "#fdcb6e",
        color2: "#d35400",
        herbs: [
            {
                name: "Huang Qin",
                rank: "A",
                latin: "Radix Scutellariae Baicalensis",
                hebrewPart: "שורש קערורית",
                meaning: "Huang = צהוב, Qin = סוג של עשב",
                tasteTemp: "מר | קר",
                organs: "GB, LI, LU, ST",
                dosage: "6-15 גרם",
                summary: "מסלק חום ולחות (דגש על מחמם עליון – LU, אך גם מעיים ו-GB), מרגיע עובר שלא שקט מחום, ומוריד LIV Yang",
                functions: [
                    "<strong>1. מסלק חום בעיקר מהמחמם העליון (LU):</strong> לחום וליחת חום בריאות.",
                    "<strong>2. מסלק חום ולחות מהמחמם האמצעי והתחתון:</strong> לדיזנטריה, שלשול מחום ולחות, צהבת, Lin, והורדת LIV Yang.",
                    "<strong>3. מטהר חום ומרגיע את העובר:</strong> כאשר העובר לא שקט בהריון עקב חום.",
                    "<strong>4. מקרר דם להפסקת דימום.</strong>"
                ],
                contraindications: "קור מחוסר ב-LU או ב-SP/ST, עובר לא שקט מקור.",
                combinations: [
                    "<strong>עם Chai Hu:</strong> לטיפול בשכבת ה-Shao Yang (חצי בפנים חצי בחוץ).",
                    "<strong>עם Bai Zhu:</strong> להרגעת עובר (Huang Qin מטהר חום ו-Bai Zhu מחזק SP)."
                ],
                enrichment: "שלושת הצהובים: Huang Qin – מחמם עליון; Huang Lian – מחמם אמצעי; Huang Bai – מחמם תחתון."
            },
            {
                name: "Huang Lian",
                rank: "A",
                latin: "Rhizoma Coptidis",
                hebrewPart: "קנה שורש",
                meaning: "Huang = צהוב, Lian = מקושר/רצוף",
                tasteTemp: "מר | קר",
                organs: "HT, LI, LIV, ST",
                dosage: "3-9 גרם",
                summary: "מסלק חום ולחות ב-M.J (ST/LI – דיזנטריה, הקאות ו-ST Fire), מטהר HT Fire (אינסומניה ועצבנות) ומסלק אש ורעילות",
                functions: [
                    "<strong>1. מסלק חום ולחות בעיקר ב-M.J (ST/LI):</strong> לדיזנטריה, שלשולים, הקאות חום ו-ST Fire.",
                    "<strong>2. מטהר אש מהלב (HT Fire):</strong> לאינסומניה, עצבנות ופצעים בפה ובלשון.",
                    "<strong>3. מסלק אש ורעילות:</strong> לפרונקלים ואבצסים בעור.",
                    "<strong>4. מסלק חום ומפסיק דימום.</strong>"
                ],
                contraindications: "חוסר Yin, חוסר וקור ב-SP/ST (מר וקר מאוד!).",
                combinations: [
                    "<strong>עם Mu Xiang:</strong> לדיזנטריה ושלשול עם טנזמוס וכאב בטן.",
                    "<strong>עם Sheng Di / E Jiao:</strong> לאינסומניה מחום בלב וחוסר Yin."
                ],
                enrichment: ""
            },
            {
                name: "Huang Bai",
                rank: "A",
                latin: "Cortex Phellodendri",
                hebrewPart: "קליפת עץ",
                meaning: "Huang = צהוב, Bai = עץ ברוש",
                tasteTemp: "מר | קר",
                organs: "KID, UB",
                dosage: "3-12 גרם",
                summary: "מסלק חום ולחות מהמחמם התחתון (הפרשות וגינליות, שתן, כאבי ברכיים וגב תחתון), מוריד אש מחוסר KID Yin ומטפל בפצעים בעור",
                functions: [
                    "<strong>1. מסלק חום ולחות בעיקר מה-Lower Jiao:</strong> להפרשות וגינאליות צהובות, שלשול/דיזנטריה, שתן צורב, וכאבי גב תחתון וברכיים מלחות חמה (Atrophy/Bi).",
                    "<strong>2. מסלק אש מחוסר ב-KID:</strong> לחוסר KID Yin עם חום ריק (הזעות לילה, גלי חום, קרי לילה).",
                    "<strong>3. מסלק רעילות ופצעים בעור על רקע לחות חמה.</strong>"
                ],
                contraindications: "חוסר וקור ב-SP/ST.",
                combinations: [
                    "<strong>עם Zhi Mu:</strong> לחום ריק כתוצאה מחוסר KID Yin.",
                    "<strong>עם Cang Zhu (פורמולת Er Miao San):</strong> ללחות חמה במחמם התחתון ובמפרקי הרגליים."
                ],
                enrichment: ""
            },
            {
                name: "Long Dan Cao",
                rank: "A",
                latin: "Radix Gentianae",
                hebrewPart: "שורש ג'נטיאנה",
                meaning: "\"עשב כיס המרה של הדרקון\" (בגלל טעמו המר מאוד)",
                tasteTemp: "מר | קר",
                organs: "GB, LIV, ST",
                dosage: "3-9 גרם",
                summary: "צמח מרכזי לסילוק אש מ-LIV/GB (עיניים אדומות, כאב ראש, אוזניים) ולחות חמה מ-LIV/GB ומחמם תחתון (צהבת, הרפס גניטלי, גרד והפרשות)",
                functions: [
                    "<strong>1. מטהר אש מ-LIV ו-GB:</strong> לכאב ראש, עיניים אדומות, חירשות/טיניטוס פתאומיים, טעם מר וכאב בצלעות.",
                    "<strong>2. מסלק חום ולחות מ-LIV/GB והמחמם התחתון:</strong> לצהבת, גרד ונפיחות באברי המין, הרפס גניטלי והפרשות וגינאליות."
                ],
                contraindications: "חוסר וקור ב-SP/ST.",
                combinations: [
                    "<strong>עם Chai Hu ו-Huang Qin:</strong> לאש ולחות חמה ב-LIV/GB."
                ],
                enrichment: ""
            },
            {
                name: "Ku Shen",
                rank: "A",
                latin: "Radix Sophorae Flavescentis",
                hebrewPart: "שורש",
                meaning: "Ku = מר, Shen = שורש",
                tasteTemp: "מר | קר",
                organs: "UB, HT, LIV, LI, SI",
                dosage: "3-15 גרם",
                summary: "מסלק חום ולחות (בייבוש ובשיתון), מסלק רוח ומפסיק גרד והורג פרזיטים (בעור, באברי המין ובמעיים)",
                functions: [
                    "<strong>1. מסלק חום ולחות (ייבוש + שיתון):</strong> לדיזנטריה, צהבת, הפרשות וגינאליות ו-Lin Syndrome.",
                    "<strong>2. מסלק רוח, מפסיק גרד והורג פרזיטים:</strong> בשימוש פנימי או חיצוני לגרד בעור ובאברי המין."
                ],
                contraindications: "חוסר וקור ב-SP/ST. אסור בשילוב עם Li Lu.",
                combinations: [
                    "<strong>עם Bai Xian Pi / Di Fu Zi:</strong> לגרד ופריחות מלחות חמה בעור ובגניטליה."
                ],
                enrichment: ""
            },
            {
                name: "Qin Pi",
                rank: "B",
                latin: "Cortex Fraxini",
                hebrewPart: "קליפת עץ מילה",
                meaning: "קליפת עץ מאזור Qin",
                tasteTemp: "מר (סופח) | קר",
                organs: "GB, LI, LIV, ST",
                dosage: "4.5-12 גרם",
                summary: "מסלק חום ולחות במעיים (דגש מרכזי: דיזנטריה ושלשול חם) + מטהר אש מהכבד ומיטיב עם העיניים",
                functions: [
                    "<strong>1. מסלק חום ולחות וסופח במעיים:</strong> לטיפול בדיזנטריה והפרשות וגינאליות.",
                    "<strong>2. מטהר אש בכבד ומיטיב עם העיניים:</strong> לעיניים אדומות, נפוחות וכואבות ולירוד (קטרקט)."
                ],
                contraindications: "חוסר וקור ב-SP/ST.",
                combinations: [
                    "<strong>עם Bai Tou Weng, Huang Lian ו-Huang Bai:</strong> לדיזנטריה מחום ולחות."
                ],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 10. מנקזי לחות - משתנים
    // ==========================================
    drain_dampness_diuretics: {
        title: "מנקזי לחות – משתנים",
        subtitle: "לסילוק לחות ובצקות בשיתון וטיפול ב-Lin Syndrome וצהבת: Fu Ling, Zhu Ling, Yi Yi Ren, Ze Xie, Mu Tong, Hua Shi, Tong Cao, Qu Mai, Bian Xu, Dong Kui Zi, Deng Xin Cao, Bie Xie, Jin Qian Cao, Yin Chen Hao, Dong Gua Ren, Han Fang Ji, Che Qian Zi, Di Fu Zi, Shi Wei.",
        icon: "💧",
        color1: "#74b9ff",
        color2: "#0984e3",
        herbs: [
            {
                name: "Fu Ling",
                rank: "A",
                latin: "Sclerotium Poriae Cocos",
                hebrewPart: "פטריית פוריה (על שורש אורן)",
                meaning: "פטרייה מועילה",
                tasteTemp: "מתוק, חסר טעם | ניטרלי",
                organs: "HT, LU, SP",
                dosage: "9-15 גרם",
                summary: "משתן לסילוק לחות ובצקות (מתון וניטרלי), מחזק את ה-SP (שלשול וליחה) ומרגיע את הנפש (HT)",
                functions: [
                    "<strong>1. מסלק לחות ע\"י שיתון:</strong> לבצקות, קושי במתן שתן וליחת לחות (ניטרלי ולכן מתאים לקור או חום).",
                    "<strong>2. מחזק את ה-SP:</strong> לחולשת טחול עם חוסר תיאבון, שלשול ונפיחות בבטן.",
                    "<strong>3. מרגיע את הנפש (HT):</strong> לפלפיטציות, אינסומניה וחרדה."
                ],
                contraindications: "זהירות במצבי שתן רב ותכוף מחוסר או צניחת Qi.",
                combinations: [
                    "<strong>עם Bai Zhu, Ren Shen ו-Gan Cao (Si Jun Zi Tang):</strong> לחיזוק צ'י הטחול.",
                    "<strong>עם Gui Zhi ו-Bai Zhu:</strong> לבצקות והצטברות נוזלים.",
                    "<strong>עם Yi Yi Ren:</strong> לחיזוק הטחול וסילוק לחות."
                ],
                enrichment: "Fu Ling Pi (קליפת הפטרייה) – חזק יותר בשיתון לבצקות שטחיות; Fu Shen (הליבה סביב השורש) – חזק יותר בהרגעת הנפש."
            },
            {
                name: "Zhu Ling",
                rank: "B",
                latin: "Sclerotium Polypori Umbellati",
                hebrewPart: "פטריית פוליפורוס",
                meaning: "\"Fu Ling בצורת גללי חזיר\"",
                tasteTemp: "מתוק, חסר טעם | מעט קריר",
                organs: "UB, KID, SP",
                dosage: "6-15 גרם",
                summary: "משתן חזק מ-Fu Ling לטיפול בבצקות, קושי במתן שתן, שלשול וצהבת (ללא חיזוק SP וללא הרגעת נפש)",
                functions: [
                    "<strong>1. משתן חזק לסילוק לחות:</strong> לבצקות, קושי במתן שתן, שתן עכור, צהבת ושלשול."
                ],
                contraindications: "כשאין לחות – זהירות מפגיעה ב-Yin.",
                combinations: [
                    "<strong>עם Fu Ling ו-Ze Xie:</strong> לשיתון חזק בבצקות."
                ],
                enrichment: ""
            },
            {
                name: "Yi Yi Ren",
                rank: "A",
                latin: "Semen Coicis Lachryma-Jobi",
                hebrewPart: "גריסי פנינה (דמעות איוב)",
                meaning: "זרע קויקס",
                tasteTemp: "מתוק, חסר טעם | קריר",
                organs: "KID, LU, SP",
                dosage: "9-30 גרם",
                summary: "משתן, מחזק SP (שלשול), מסלק רוח-לחות במפרקים (Bi), ומסלק לחות חמה ומוגלה בעור (פרונקלים/יבלות) ובאיברים פנימיים (אבצסים בריאות/מעיים)",
                functions: [
                    "<strong>1. משתן:</strong> לבצקות, הפרעות שתן ו-Leg Qi.",
                    "<strong>2. מחזק את ה-SP:</strong> במיוחד כשיש שלשול לחות.",
                    "<strong>3. מסלק רוח לחות (Bi Syn):</strong> לכאבי מפרקים ונוקשות שרירים (בעיקר מלחות חמה).",
                    "<strong>4. מסלק לחות חמה ומוגלה:</strong> לאבצסים בריאות ובמעיים, פרונקלים ויבלות בעור."
                ],
                contraindications: "אסור בזמן הריון!",
                combinations: [
                    "<strong>עם Fu Ling:</strong> לחיזוק הטחול וסילוק לחות.",
                    "<strong>עם Cang Zhu ו-Huang Bai:</strong> ל-Bi Syndrome מלחות חמה ברגליים."
                ],
                enrichment: ""
            },
            {
                name: "Ze Xie",
                rank: "A",
                latin: "Rhizoma Alismatis",
                hebrewPart: "קנה שורש",
                meaning: "\"מרוקן את הביצה/הבוץ\"",
                tasteTemp: "מתוק, חסר טעם | קר",
                organs: "UB, KID",
                dosage: "6-12 גרם",
                summary: "משתן חזק ללחות ולחות חמה ב-Lower Jiao, ומוריד אש מחוסר KID Yin (אינו פוגע ב-Yin!)",
                functions: [
                    "<strong>1. משתן ומסלק לחות (בעיקר לחות חמה ב-L.J):</strong> לבצקות, קושי במתן שתן, שלשול, סחרחורת וליחה.",
                    "<strong>2. מוריד אש מחוסר ב-KID:</strong> לחוסר KID Yin עם חום ריק."
                ],
                contraindications: "קור וחוסר עם פליטת זרע או הפרשות מרובות.",
                combinations: [
                    "<strong>עם Fu Ling ו-Zhu Ling:</strong> לבצקות וקשיי השתנה.",
                    "<strong>עם Shu Di ו-Mu Dan Pi (בפורמולת Liu Wei Di Huang Wan):</strong> לניקוז אש ריקה מהכליות תוך חיזוק ה-Yin."
                ],
                enrichment: ""
            },
            {
                name: "Mu Tong",
                rank: "A",
                latin: "Caulis Akebiae",
                hebrewPart: "גבעול עצי",
                meaning: "Mu = עץ, Tong = פותח מעבר",
                tasteTemp: "מר | קריר",
                organs: "UB, HT, SI",
                dosage: "3-9 גרם",
                summary: "משתן ללחות חמה (Lin), מסלק חום מהלב דרך ה-SI וה-UB (פצעים בלשון + צריבה בשתן), פותח תעלות (Bi) ומעודד הפרשת חלב אם",
                functions: [
                    "<strong>1. משתן ומסלק חום מהלב דרך ה-SI וה-UB:</strong> לשתן צהוב, שורף ומועט (Lin) ולחום בלב (עצבנות, אינסומניה, פצעים בלשון ובפה).",
                    "<strong>2. פותח את התעלות וכלי הדם ומעודד הפרשת חלב:</strong> לחוסר חלב אם בהנקה, אמנוריאה וכאבי מפרקים (Bi)."
                ],
                contraindications: "אסור בהריון, ובחוסר Yin ללא לחות חמה.",
                combinations: [
                    "<strong>עם Sheng Di ו-Dan Zhu Ye (פורמולת Dao Chi San):</strong> לאש בלב העוברת למעי הדק ולשתן.",
                    "<strong>עם Hua Shi:</strong> ללחות חמה בשתן (Lin)."
                ],
                enrichment: ""
            },
            {
                name: "Hua Shi",
                rank: "A",
                latin: "Talcum",
                hebrewPart: "מינרל טלק",
                meaning: "Hua = חלקלק, Shi = אבן",
                tasteTemp: "מתוק, חסר טעם | קר",
                organs: "UB, ST",
                dosage: "9-18 גרם (לעטוף בבד בבישול!)",
                summary: "משתן ללחות חמה בשתן (Lin, אבנים ושלשול), מסלק חום קיץ עם לחות, ומייבש לחות ופריחות בעור בשימוש חיצוני",
                functions: [
                    "<strong>1. משתן ללחות חמה בשתן:</strong> לשתן מועט, צהוב, עכור או צורב (Lin) ושלשול מחום ולחות.",
                    "<strong>2. מסלק חום קיץ המלווה בלחות.</strong>",
                    "<strong>3. סופח לחות חיצונית בעור:</strong> לפריחות הזעה ואקזמה (אבקה חיצונית)."
                ],
                contraindications: "זהירות בהריון, בחוסר Yin ובשתן רב.",
                combinations: [
                    "<strong>עם Gan Cao (פורמולת Liu Yi San - יחס 6:1):</strong> לחום קיץ עם לחות וצריבה בשתן."
                ],
                enrichment: ""
            },
            {
                name: "Tong Cao",
                rank: "C",
                latin: "Medulla Tetrapanacis",
                hebrewPart: "ליבת גבעול",
                meaning: "\"עשב פותח\"",
                tasteTemp: "מתוק, חסר טעם | קריר",
                organs: "LU, ST",
                dosage: "3-6 גרם",
                summary: "משתן לסילוק לחות חמה (Lin) ומעודד הפרשת חלב אם (דומה ל-Mu Tong אך מתון יותר ואינו משפיע על הלב)",
                functions: [
                    "<strong>1. משתן לסילוק לחות חמה.</strong>",
                    "<strong>2. מעודד הפרשת חלב אם.</strong>"
                ],
                contraindications: "זהירות בהריון ובחוסר Qi ו-Yin.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Qu Mai",
                rank: "B",
                latin: "Herba Dianthi",
                hebrewPart: "עשב ציפורן סיני",
                meaning: "עשב דגן",
                tasteTemp: "מר | קר",
                organs: "UB, HT, SI",
                dosage: "6-12 גרם",
                summary: "משתן ל-Lin Syndrome (במיוחד Blood Lin – דם וכאב במתן שתן), מניע דם (אמנוריאה) ומניע מעיים (עצירות)",
                functions: [
                    "<strong>1. משתן לסילוק לחות חמה מהשתן:</strong> מתאים לכל סוגי ה-Lin ובמיוחד כשיש דם וכאב בשתן.",
                    "<strong>2. מניע דם (אמנוריאה) ומניע את המעיים (עצירות).</strong>"
                ],
                contraindications: "אסור בהריון ובחוסר SP/KID.",
                combinations: [
                    "<strong>עם Bian Xu, Mu Tong ו-Che Qian Zi (פורמולת Ba Zheng San):</strong> ל-Lin Syndrome מלחות חמה."
                ],
                enrichment: ""
            },
            {
                name: "Bian Xu",
                rank: "B",
                latin: "Herba Polygoni Avicularis",
                hebrewPart: "עשב ארכובית",
                meaning: "עשב",
                tasteTemp: "מר | קריר",
                organs: "UB",
                dosage: "9-15 גרם",
                summary: "משתן ללחות חמה בשתן (Lin), קוטל פרזיטים (תולעים במעיים וטריכומונס) ומפסיק גרד בעור ובגניטליה",
                functions: [
                    "<strong>1. משתן ללחות חמה ב-Lin Syndrome.</strong>",
                    "<strong>2. מסלק פרזיטים ומפסיק גירוד בעור.</strong>"
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Qu Mai:</strong> לטיפול ב-Lin Syndrome."
                ],
                enrichment: ""
            },
            {
                name: "Dong Kui Zi",
                rank: "C",
                latin: "Semen Abutili Seu Malvae",
                hebrewPart: "זרע חלמית",
                meaning: "זרע חלמית",
                tasteTemp: "מתוק | קר",
                organs: "UB, LI, SI",
                dosage: "6-12 גרם",
                summary: "משתן ל-Lin (חום, דם ואבן), מעודד הפרשת חלב אם ופותח גודש/אבצסים בשדיים, ומלחלח מעיים (עצירות)",
                functions: [
                    "<strong>1. משתן לטיפול ב-Lin (חום, דם או אבנים) ובצקות.</strong>",
                    "<strong>2. מיטיב עם החזה:</strong> מעודד הפרשת חלב ומטפל בגודש ואבצסים בשד.",
                    "<strong>3. מלחלח את המעיים (עצירות).</strong>"
                ],
                contraindications: "שלשול והריון.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Deng Xin Cao",
                rank: "C",
                latin: "Medulla Junci Effusi",
                hebrewPart: "ליבת גבעול סמר",
                meaning: "\"עשב פתיל המנורה\"",
                tasteTemp: "מתוק, חסר טעם | קריר",
                organs: "HT, LU, SI",
                dosage: "1.5-4.5 גרם (קליל מאוד במשקל)",
                summary: "משתן ל-Lin ומסלק חום מהלב דרך ה-SI לטיפול באינסומניה, עצבנות ובכי לילה בתינוקות",
                functions: [
                    "<strong>1. משתן ללחות חמה (Lin).</strong>",
                    "<strong>2. מטהר חום מהלב ומרגיע עצבנות ואינסומניה (כולל בכי לילה בילדים).</strong>"
                ],
                contraindications: "אי שליטה בשתן מחוסר וקור.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bie Xie",
                rank: "B",
                latin: "Rhizoma Dioscoreae Hypoglaucae",
                hebrewPart: "קנה שורש",
                meaning: "קנה שורש בטטת בר",
                tasteTemp: "מר | ניטרלי",
                organs: "UB, LIV, ST",
                dosage: "9-15 גרם",
                summary: "הצמח העיקרי להפרדת עכור מטהור בשתן עכור (Cloudy Lin / משקע בשתן) והפרשות וגינליות, וכן מסלק רוח-לחות במפרקים ובעור",
                functions: [
                    "<strong>1. מפריד את העכור מהטהור:</strong> הצמח המרכזי לטיפול בשתן עכור (Cloudy Lin) והפרשות וגינאליות.",
                    "<strong>2. מסלק רוח לחות במפרקים (Bi) ובעור (אקזמה).</strong>"
                ],
                contraindications: "חוסר Yin בכליות.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Jin Qian Cao",
                rank: "C",
                latin: "Herba Lysimachiae",
                hebrewPart: "עשב",
                meaning: "\"עשב מטבע הזהב\" (בשל צורת העלים העגולה)",
                tasteTemp: "מתוק, חסר טעם | ניטרלי",
                organs: "UB, GB, KID, LIV",
                dosage: "15-60 גרם",
                summary: "הצמח המרכזי ל-Stone Lin – אבנים בדרכי השתן ואבנים בכיס/דרכי המרה, וכן צהבת מלחות חמה",
                functions: [
                    "<strong>1. משתן וממוסס אבנים (Stone Lin):</strong> לאבנים בכליות/דרכי השתן ולאבנים בכיס המרה.",
                    "<strong>2. מסלק לחות חמה מ-LIV/GB (צהבת) ומסלק רעילות ונפיחות.</strong>"
                ],
                contraindications: "שלשול מחולשת טחול; שימוש ממושך עלול להוריד אשלגן.",
                combinations: [
                    "<strong>עם Ji Nei Jin ו-Hai Jin Sha:</strong> לאבנים בשתן ובמרה."
                ],
                enrichment: ""
            },
            {
                name: "Yin Chen Hao",
                rank: "A",
                latin: "Herba Artemisiae Scopariae",
                hebrewPart: "עשב לענה",
                meaning: "לענה ירוקה",
                tasteTemp: "מר, חריף | קריר",
                organs: "LIV, SP, GB, ST",
                dosage: "9-15 גרם",
                summary: "הצמח העיקרי והחשוב ביותר לטיפול בצהבת (Jaundice – גם מלחות חמה וגם מלחות קרה) ב-LIV/GB",
                functions: [
                    "<strong>1. מסלק לחות חמה מ-LIV ו-GB ומטפל בצהבת:</strong> צמח הבחירה לכל סוגי הצהבת (עם Zhi Zi ו-Da Huang לצהבת חמה; עם Fu Zi ו-Gan Jiang לצהבת קרה).",
                    "<strong>2. מטהר לחות חמה ופצעים בעור.</strong>"
                ],
                contraindications: "צהבת שאינה נובעת מלחות (למשל מחוסר דם).",
                combinations: [
                    "<strong>עם Zhi Zi ו-Da Huang (Yin Chen Hao Tang):</strong> לצהבת אקוטית מלחות חמה."
                ],
                enrichment: ""
            },
            {
                name: "Dong Gua Ren",
                rank: "B",
                latin: "Semen Benincasae",
                hebrewPart: "זרע מלון חורף",
                meaning: "זרע מלון חורף",
                tasteTemp: "מתוק | קר",
                organs: "LU, ST, LI, SI",
                dosage: "9-15 גרם",
                summary: "מסלק ליחת חום ומוגלה מהריאות ומהמעיים (אבצס בריאות ואבצס במעיים/אפנדיציטיס) ומשתן לחות חמה",
                functions: [
                    "<strong>1. מסלק ליחת חום ומעודד יציאת מוגלה:</strong> לשיעול עם ליחה צהובה ולאבצסים בריאות ובמעי הגס.",
                    "<strong>2. מסלק לחות חמה ומשתן (הפרשות וגינליות וקושי בשתן).</strong>"
                ],
                contraindications: "קור ושלשול מחולשת SP.",
                combinations: [
                    "<strong>עם Lu Gen ו-Yi Yi Ren:</strong> לאבצס בריאות.",
                    "<strong>עם Da Huang ו-Mu Dan Pi:</strong> לאבצס במעיים (אפנדיציטיס)."
                ],
                enrichment: ""
            },
            {
                name: "Han Fang Ji",
                rank: "B",
                latin: "Radix Stephaniae Tetrandrae",
                hebrewPart: "שורש",
                meaning: "Fang Ji",
                tasteTemp: "מר, חריף | קר",
                organs: "UB, SP, KID",
                dosage: "3-9 גרם",
                summary: "משתן לבצקות (בעיקר בפלג גוף תחתון וכן בצקות שטחיות) ומסלק רוח-לחות-חום במפרקים (Bi Heat)",
                functions: [
                    "<strong>1. משתן לבצקות (בעיקר ב-L.J).</strong>",
                    "<strong>2. מסלק רוח לחות ומפסיק כאב:</strong> לכאבי מפרקים עם נפיחות וחום (Wind-Damp-Heat Bi)."
                ],
                contraindications: "חוסר ב-SP/ST ואיבוד נוזלים.",
                combinations: [
                    "<strong>עם Huang Qi ו-Bai Zhu:</strong> לבצקות שטחיות על רקע רוח וחולשת Qi."
                ],
                enrichment: "הבחנה חשובה: Han Fang Ji חזק יותר בשיתון ובצקות; Guang Fang Ji חזק יותר בטיפול ב-Bi Syndrome ושיכוך כאב."
            },
            {
                name: "Che Qian Zi",
                rank: "A",
                latin: "Semen Plantaginis",
                hebrewPart: "זרע לחך",
                meaning: "\"זרע שגדל לפני גלגלי הכרכרה\"",
                tasteTemp: "מתוק | קר",
                organs: "UB, KID, LIV, LU",
                dosage: "4.5-9 גרם (לעטוף בבד בבישול!)",
                summary: "משתן ללחות חמה (בצקות ו-Lin), מצמג את הצואה (עוצר שלשול ע\"י שיתון המים!), מטהר עיניים (LIV) ומסלק ליחת חום בריאות",
                functions: [
                    "<strong>1. משתן ומסלק לחות חמה:</strong> לבצקות ול-Lin Syndrome.",
                    "<strong>2. מצמג את הצואה ומפסיק שלשול:</strong> מנקז את המים מהמעיים לשתן (יוצא דופן – זרע שעוצר שלשול במקום ללחלח!).",
                    "<strong>3. מטהר את הכבד והעיניים:</strong> לעיניים אדומות, נפוחות וכואבות או ליובש וטשטוש ראייה מחוסר LIV/KID.",
                    "<strong>4. מסלק ליחת חום מהריאות ומפסיק שיעול.</strong>"
                ],
                contraindications: "אסור בהריון, ובקושי במתן שתן מחוסר Yang.",
                combinations: [
                    "<strong>עם Mu Tong, Qu Mai ו-Bian Xu:</strong> לדלקות וצריבה בשתן (Lin)."
                ],
                enrichment: ""
            },
            {
                name: "Di Fu Zi",
                rank: "B",
                latin: "Fructus Kochiae Scopariae",
                hebrewPart: "פרי/זרע",
                meaning: "זרע קוכיה",
                tasteTemp: "מתוק, מר | קר",
                organs: "UB",
                dosage: "6-15 גרם",
                summary: "משתן ללחות חמה (Lin) + מסלק לחות חמה ורוח מהעור ומפסיק גירוד (אקזמה, סקביאס וגרד בגניטליה)",
                functions: [
                    "<strong>1. משתן ללחות חמה בשתן (Lin).</strong>",
                    "<strong>2. מסלק לחות חמה מהעור ומפסיק גרד:</strong> לאקזמה וגרד באברי המין (פנימי וחיצוני)."
                ],
                contraindications: "",
                combinations: [
                    "<strong>עם Ku Shen ו-Bai Xian Pi:</strong> לגרד בעור ובאברי המין."
                ],
                enrichment: ""
            },
            {
                name: "Shi Wei",
                rank: "C",
                latin: "Folium Pyrrosiae",
                hebrewPart: "עלה שרך",
                meaning: "עלה על סלע",
                tasteTemp: "מר, מתוק | קריר",
                organs: "LU, UB",
                dosage: "3-9 גרם",
                summary: "משתן ל-Lin (במיוחד דם ואבנים בשתן), מקרר דם להפסקת דימום, ומסלק ליחת חום מהריאות (שיעול וצפצופים)",
                functions: [
                    "<strong>1. משתן ללחות חמה בשתן (חום, דם ואבן).</strong>",
                    "<strong>2. מקרר דם להפסקת דימום (שתן, הקאה, רחם).</strong>",
                    "<strong>3. מסלק ליחת חום מהריאות ומפסיק שיעול וצפצופים.</strong>"
                ],
                contraindications: "חוסר Yin.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 11. ארומטיים מתמירי לחות (SP/ST - M.J)
    // ==========================================
    aromatic_transform_dampness: {
        title: "ארומטיים מתמירי לחות",
        subtitle: "לעירור הטחול וייבוש לחות במחמם האמצעי (מלאות, בחילות, שלשול וחיפוי עבה): Huo Xiang, Pei Lan, Hou Po, Cang Zhu, Sha Ren, Bai Dou Kou, Cao Dou Kou, Cao Guo.",
        icon: "🌾",
        color1: "#ffeaa7",
        color2: "#e17055",
        herbs: [
            {
                name: "Huo Xiang",
                rank: "A",
                latin: "Herba Agastachis Seu Pogostemonis",
                hebrewPart: "עשב פצ'ולי סיני",
                meaning: "Huo = עשב, Xiang = ארומטי/ריחני",
                tasteTemp: "חריף, ארומטי | מעט חמים",
                organs: "LU, SP, ST",
                dosage: "4.5-9 גרם (בישול קצר!)",
                summary: "מסלק לחות בארומטיות מ-M.J, מהרמן את הקיבה ומוריד ST Qi מורד (הצמח החשוב ביותר לבחילות והקאות מלחות!), ומשחרר חיצון (רוח קור עם לחות פנימית / שפעת קיץ)",
                functions: [
                    "<strong>1. מסלק לחות בארומטיות מ-M.J (SP/ST):</strong> למלאות ואי נוחות בבטן ובאפיגסטריום, חוסר תיאבון וחיפוי לבן שמנוני.",
                    "<strong>2. מהרמן את הקיבה ומפסיק הקאות (ST Qi מורד):</strong> לבחילות והקאות (כולל בחילות הריון) על רקע לחות.",
                    "<strong>3. משחרר את החיצון ומסלק חום קיץ:</strong> לרוח קור בקיץ המלווה בלחות פנימית (חום, צמרמורות, כאב ראש, בחילות ושלשול)."
                ],
                contraindications: "חוסר Yin עם חום או אש בקיבה.",
                combinations: [
                    "<strong>עם Zi Su Ye:</strong> לגפ\"ח רוח קור עם לחות ו-ST Qi מורד.",
                    "<strong>עם Ban Xia:</strong> לבחילות והקאות מלחות בטחול ובקיבה.",
                    "<strong>עם Sha Ren:</strong> לבחילות בהריון."
                ],
                enrichment: "Huo Xiang חזק יותר בסילוק לחות; Zi Su Ye חזק יותר בשחרור חיצון."
            },
            {
                name: "Pei Lan",
                rank: "B",
                latin: "Herba Eupatorii Fortunei",
                hebrewPart: "עשב סחלב ריחני",
                meaning: "Pei = לשאת, Lan = סחלב ריחני",
                tasteTemp: "חריף, ארומטי | ניטרלי",
                organs: "SP, ST",
                dosage: "4.5-9 גרם (בישול קצר!)",
                summary: "מסלק לחות בארומטיות מ-M.J ומסלק חום קיץ – דגש ייחודי על ריח רע מהפה, טעם מתוק/דביק בפה וריור יתר מלחות חמה בטחול",
                functions: [
                    "<strong>1. מסלק לחות ע\"י ארומטיות (ניטרלי – מתאים גם ללחות חמה):</strong> למלאות בחזה וברום הבטן, בחילות, ודגש על ריח רע מהפה וטעם מתוק/דביק בפה.",
                    "<strong>2. מסלק חום קיץ המלווה בלחות.</strong>"
                ],
                contraindications: "זהירות בחוסר Yin.",
                combinations: [
                    "<strong>עם Huo Xiang:</strong> להתמרת לחות במחמם האמצעי ובחום קיץ."
                ],
                enrichment: ""
            },
            {
                name: "Hou Po",
                rank: "A",
                latin: "Cortex Magnoliae Officinalis",
                hebrewPart: "קליפת גזע המגנוליה",
                meaning: "Hou = עבה, Po = קליפת עץ פשוטה",
                tasteTemp: "מר, חריף, ארומטי | חמים",
                organs: "LI, LU, SP, ST",
                dosage: "3-9 גרם",
                summary: "מייבש לחות בארומטיות עם דגש חזק על הנעת Qi מטה (מלאות ונפיחות בבטן, תקיעות מזון ועצירות) + מתמיר ליחה ומוריד LU Qi (שיעול וצפצופים)",
                functions: [
                    "<strong>1. מסלק לחות בארומטיות ומניע Qi (דגש על הנעת Qi מטה ב-ST/LI):</strong> למלאות, נפיחות ואי נוחות בבטן ובאפיגסטריום, תקיעות מזון ועצירות.",
                    "<strong>2. מתמיר ליחה ומוריד LU Qi מטה:</strong> לשיעול וצפצופי נשימה עם ליחה ומלאות בחזה."
                ],
                contraindications: "זהירות בהריון ובחוסר Qi או חוסר Yin.",
                combinations: [
                    "<strong>עם Cang Zhu (ו-Chen Pi ב-Ping Wei San):</strong> ללחות חוסמת ב-M.J עם נפיחות וחיפוי עבה.",
                    "<strong>עם Da Huang ו-Zhi Shi:</strong> לעצירות עם מלאות וכאב בטן.",
                    "<strong>עם Ma Huang ו-Xing Ren:</strong> לשיעול וצפצופי נשימה עם ליחה."
                ],
                enrichment: ""
            },
            {
                name: "Cang Zhu",
                rank: "A",
                latin: "Rhizoma Atractylodis",
                hebrewPart: "קנה שורש",
                meaning: "אטרקטילודיס ירוק-כהה",
                tasteTemp: "חריף, מר, ארומטי | חמים",
                organs: "SP, ST",
                dosage: "4.5-9 גרם",
                summary: "מייבש לחות בחוזקה ומחזק/מעורר SP (חיפוי עבה ושמנוני מאוד), מסלק רוח-לחות במפרקים (Bi בפלג גוף תחתון), משחרר חיצון ומשפר ראייה (עיוורון לילה)",
                functions: [
                    "<strong>1. מייבש לחות בחוזקה ותומך ב-SP:</strong> ללחות חוסמת ב-M.J עם עייפות, שלשול, בחילות וחיפוי עבה ושמנוני.",
                    "<strong>2. מסלק רוח-קור-לחות (Bi Syn) ומשחרר חיצון:</strong> לכאבי מפרקים בעיקר בפלג גוף תחתון (ברכיים/רגליים).",
                    "<strong>3. משפר ראייה:</strong> לעיוורון לילה וירידה בראייה."
                ],
                contraindications: "חוסר Yin עם חום או הזעה מרובה מחוסר Qi (מייבש מאוד!).",
                combinations: [
                    "<strong>עם Hou Po ו-Chen Pi:</strong> ללחות חוסמת ב-M.J.",
                    "<strong>עם Huang Bai (ו-Yi Yi Ren):</strong> ללחות חמה ב-L.J ובמפרקי הרגליים (Er Miao San)."
                ],
                enrichment: "השוואה: Cang Zhu מייבש לחות בחוזקה ומפזר; Bai Zhu יותר מחזק את צ'י הטחול ומייצב הזעה."
            },
            {
                name: "Sha Ren",
                rank: "A",
                latin: "Fructus Amomi",
                hebrewPart: "פרי/זרע הל (קרדמון)",
                meaning: "Sha = חול, Ren = זרע",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "SP, ST (KID)",
                dosage: "1.5-6 גרם (לכתוש ולהוסיף ב-5 הדק' האחרונות של הבישול!)",
                summary: "מסלק לחות ומניע Qi ב-M.J, מחמם מרכז ומפסיק שלשול, מוריד ST Qi מורד (בחילות והקאות), מרגיע עובר בהריון, ומונע כבדות מצמחים מחזקים",
                functions: [
                    "<strong>1. מתמיר לחות ומניע Qi ב-M.J, מחמם מרכז ומפסיק שלשול:</strong> לכאב ומלאות בבטן, חוסר תיאבון, הקאות ושלשול.",
                    "<strong>2. מרגיע את העובר ומטפל בבחילות בהריון.</strong>",
                    "<strong>3. מונע סטגנציה וכבדות:</strong> מצטרף לפורמולות מחזקות דם ו-Yin (כמו עם Shu Di Huang) כדי לעזור בעיכולן."
                ],
                contraindications: "חוסר Yin עם חום או אש.",
                combinations: [
                    "<strong>עם Mu Xiang:</strong> לתקיעות Qi ולחות ב-M.J עם כאב בטן או שלשול.",
                    "<strong>עם Huo Xiang / Bai Zhu:</strong> לבחילות בהריון והרגעת עובר."
                ],
                enrichment: ""
            },
            {
                name: "Bai Dou Kou",
                rank: "B",
                latin: "Fructus Amomi Kravanh",
                hebrewPart: "פרי הל לבן (קרדמון לבן)",
                meaning: "הל לבן",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "LU, SP, ST",
                dosage: "3-6 גרם (להוסיף בסוף הבישול!)",
                summary: "מסלק לחות ארומטי ומניע Qi ב-U.J (LU – חזה) וב-M.J (ST/SP), ומחמם ומוריד ST Qi מורד (הקאות קור)",
                functions: [
                    "<strong>1. מסלק לחות בארומטיות ומניע Qi (במחמם עליון ואמצעי).</strong>",
                    "<strong>2. מחמם את ה-M.J ומוריד ST Qi מורד:</strong> לבחילות והקאות על רקע קור בלחות."
                ],
                contraindications: "מצבי חום, חוסר Yin או חוסר דם.",
                combinations: [],
                enrichment: "Sha Ren פועל יותר על מחמם אמצעי ותחתון (שלשול ועובר); Bai Dou Kou פועל יותר על מחמם עליון ואמצעי (חזה והקאות)."
            },
            {
                name: "Cao Dou Kou",
                rank: "C",
                latin: "Semen Alpiniae Katsumadai",
                hebrewPart: "זרע",
                meaning: "זרע הל עשבוני",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "SP, ST",
                dosage: "1.5-6 גרם",
                summary: "מייבש לחות ומחמם את ה-M.J ללחות-קור עם נפיחות, כאב באפיגסטריום, הקאות ושלשולים",
                functions: [
                    "<strong>1. מייבש לחות ומחמם את המחמם האמצעי (הקאות ושלשולים מלחות קור).</strong>"
                ],
                contraindications: "חוסר Yin ודם עם חום (מייבש).",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Cao Guo",
                rank: "C",
                latin: "Fructus Tsaoko",
                hebrewPart: "פרי",
                meaning: "פרי עשבוני",
                tasteTemp: "חריף | חמים",
                organs: "SP, ST",
                dosage: "1.5-6 גרם",
                summary: "מייבש לחות-קור בחוזקה ומחמם את ה-M.J – למצבי לחות קור קשים, תקיעות מזון (בשר) ומלריה",
                functions: [
                    "<strong>1. מייבש לחות בחוזקה ומחמם את ה-M.J (ללחות קור ומלריה).</strong>"
                ],
                contraindications: "חוסר Qi או דם ללא קור ולחות.",
                combinations: [],
                enrichment: ""
            }
        ]
    },

    // ==========================================
    // 12. ארומטיים פותחי פתחים (HT - מצבי הכרה סגורים)
    // ==========================================
    aromatic_open_orifices: {
        title: "ארומטיים פותחי פתחים",
        subtitle: "לפתיחת פתחי הלב במצבי איבוד הכרה אקוטיים מסוג 'סגור' (CVA, אפילפסיה, התכווצויות וליחה חוסמת): She Xiang, Su He Xiang, An Xi Xiang, Bing Pian, Niu Huang, Shi Chang Pu.",
        icon: "⚡",
        color1: "#a29bfe",
        color2: "#2d3436",
        herbs: [
            {
                name: "She Xiang",
                rank: "A",
                latin: "Secretio Moschus",
                hebrewPart: "הפרשת בלוטת אייל המושק",
                meaning: "ניחוח אייל המושק",
                tasteTemp: "חריף, ארומטי | חמים",
                organs: "HT, SP, LIV",
                dosage: "0.06-0.15 גרם (בגלולות בלבד – לעולם לא לבשל!)",
                summary: "הצמח החזק ביותר לפתיחת הפתחים והשבת הכרה במצבים סגורים (חום או קור), מניע דם בחוזקה, מפסיק כאב ומפחית גושים/טראומה, ומעודד יציאת שליה/עובר מת",
                functions: [
                    "<strong>1. פותח חזק את הפתחים ומחייה את ה-Shen:</strong> לאיבוד הכרה, קומה, התכווצויות, הזיות ו-CVA (במצבי חום או קור).",
                    "<strong>2. מניע דם, פותח תעלות, מפסיק כאב ומפחית נפיחויות:</strong> לפצעים, פרונקלים, גושים, טראומה וכאבי חזה/Bi.",
                    "<strong>3. מזרז לידה ומעודד הוצאת עובר מת או שליה כלואה.</strong>"
                ],
                contraindications: "אסור בהחלט בהריון! אסור במצבי קריסה מסוג 'פתוח' ובחוסר Yin.",
                combinations: [
                    "<strong>עם Niu Huang ו-Bing Pian:</strong> לאיבוד הכרה מסינדרום סגור של חום."
                ],
                enrichment: ""
            },
            {
                name: "Su He Xiang",
                rank: "B",
                latin: "Resina Liquidambaris Orientalis",
                hebrewPart: "שרף עץ ליקווידambar",
                meaning: "שרף ריחני",
                tasteTemp: "מתוק, חריף, ארומטי | חמים",
                organs: "HT, SP",
                dosage: "0.3-1 גרם (בגלולות – לא לבשל!)",
                summary: "פותח פתחים ומסלק עכירות למצבים סגורים מסוג קור (איבוד הכרה, CVA, וכאב/מועקה בחזה ובבטן מליחה קרה)",
                functions: [
                    "<strong>1. פותח פתחים ומסלק ליחה עכורה:</strong> למצבי איבוד הכרה סגורים על רקע קור וליחה, ולכאב בחזה ובבטן."
                ],
                contraindications: "מצבי חום גבוה, קריסה מסוג 'פתוח' והריון.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "An Xi Xiang",
                rank: "C",
                latin: "Resina Styračis Benzoini",
                hebrewPart: "שרף בנזואין",
                meaning: "שרף מרגיע",
                tasteTemp: "חריף, מר | ניטרלי (חמים)",
                organs: "HT, LIV, SP",
                dosage: "0.3-1.5 גרם (בגלולות)",
                summary: "פותח פתחים ומניע Qi ודם (לאיבוד הכרה פתאומי וכאב בחזה ובבטן)",
                functions: [
                    "<strong>1. פותח פתחים, מעורר Shen ומניע Qi ודם.</strong>"
                ],
                contraindications: "חוסר Yin עם חום והריון.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Bing Pian",
                rank: "A",
                latin: "Borneolum",
                hebrewPart: "קריסטל שרף (בורנאול)",
                meaning: "\"פרוסת קרח\"",
                tasteTemp: "חריף, מר | קריר",
                organs: "HT, LU, SP",
                dosage: "0.15-0.3 גרם (בגלולות או חיצוני – לא לבשל!)",
                summary: "פותח פתחים ומחייה Shen במצבי הכרה סגורים מחום, ובשימוש חיצוני מטהר חום, מפסיק כאב וגרד ומוריד נפיחות (גרון, עיניים, כוויות ופצעים)",
                functions: [
                    "<strong>1. פותח פתחים ומעורר את ה-Shen:</strong> לאיבוד הכרה והתכווצויות במצבי חום.",
                    "<strong>2. מטהר חום, מפסיק כאב וגרד ומסלק נפיחויות (בשימוש חיצוני):</strong> לכאב ונפיחות בגרון, פצעים בפה, עיניים אדומות וכוויות."
                ],
                contraindications: "אסור בהריון ובחוסר Qi ודם.",
                combinations: [
                    "<strong>עם She Xiang:</strong> לפתיחת הפתחים והפסקת כאב."
                ],
                enrichment: ""
            },
            {
                name: "Niu Huang",
                rank: "B",
                latin: "Calculus Bovis",
                hebrewPart: "אבן מרה של פרה/בקר",
                meaning: "\"צהוב של פרה\"",
                tasteTemp: "מר, מתוק | קר",
                organs: "HT, LIV",
                dosage: "0.15-0.35 גרם (בגלולות – לא לבשל!)",
                summary: "מטהר אש מהלב, פותח פתחים ומסלק ליחת-חום (איבוד הכרה/הזיות), מטהר את הכבד ומפסיק התכווצויות חום ורעידות (LIV Wind), ומסלק רעילות (גרון ופרונקלים)",
                functions: [
                    "<strong>1. מטהר את ה-HT, פותח פתחים ומסלק ליחה:</strong> לחום גבוה וליחת חום החוסמת את ה-HT/PC (איבוד הכרה, דליריום, CVA).",
                    "<strong>2. מטהר חום מהכבד ומפסיק רוח ורעידות:</strong> להתכווצויות חום בילדים ואפילפסיה.",
                    "<strong>3. מסלק אש ורעילות:</strong> לפרונקלים, פצעים וכאב גרון חמור."
                ],
                contraindications: "אסור בהריון ובחוסר SP/ST ללא חום.",
                combinations: [],
                enrichment: ""
            },
            {
                name: "Shi Chang Pu",
                rank: "A",
                latin: "Rhizoma Acori Tatarinowii",
                hebrewPart: "קנה שורש",
                meaning: "\"אקורוס שגדל על סלעים\"",
                tasteTemp: "חריף, ארומטי | מעט חמים",
                organs: "HT, ST",
                dosage: "3-9 גרם",
                summary: "פותח פתחים, מסלק ליחה ומרגיע נפש (בלבול, שכחה, חירשות/טיניטוס, אפילפסיה), וגם מאזן את ה-M.J ומסלק לחות עכורה (מלאות בבטן ודיזנטריה)",
                functions: [
                    "<strong>1. פותח את הפתחים, מאדה ליחה ומרגיע את ה-Shen:</strong> לערפול הכרה, בלבול, זיכרון חלש, חירשות, טיניטוס, אפילפסיה ודיכאון מליחה החוסמת את פתחי הלב.",
                    "<strong>2. מהרמן את ה-M.J ומסלק לחות עכורה:</strong> למלאות וכאב בחזה ובבטן וחוסר תיאבון.",
                    "<strong>3. מטפל ב-Bi Syndrome וטראומה.</strong>"
                ],
                contraindications: "חוסר Yin עם חום ריק, הזעה מרובה או הקאות דמיות.",
                combinations: [
                    "<strong>עם Yuan Zhi:</strong> לפתיחת פתחי הלב, סילוק ליחה ושיפור הזיכרון והשינה.",
                    "<strong>עם Yu Jin:</strong> לליחה-חום החוסמת את הלב."
                ],
                enrichment: ""
            }
        ]
    }
});