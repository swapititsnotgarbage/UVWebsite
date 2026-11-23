// ==========================================
// === קובץ data_book_maciocia_8.js (חלקים 7 + 8 - השלמת הספר!) ===
// The Foundations of Chinese Medicine - Giovanni Maciocia (3rd Ed.)
// פרקים 50-70: קטגוריות נקודות, מרידיאנים מיוחדים, נקודות אקסטרה, עקרונות טיפול ושילובי נקודות
// ==========================================

if (typeof maciociaBookData !== 'undefined') {
    Object.assign(maciociaBookData, {
        // ==========================================
        // פרק 50: חמש הנקודות העתיקות (Five Transporting Points)
        // ==========================================
        ch50_five_transporting_points: {
            title: "פרק 50: חמש הנקודות העתיקות (五输穴 - Wu Shu Xue)",
            subtitle: "דינמיקת זרימת הצ'י מהקצוות למרפקים/ברכיים, השוואה בין ה-Nan Jing ל-Ling Shu, עונות וחמשת האלמנטים.",
            icon: "🌊",
            color1: "#00cec9",
            color2: "#0984e3",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. דינמיקת זרימת הצ'י וחמש הנקודות העתיקות</h2>
                    <p>חמש הנקודות העתיקות ממוקמות בין קצות האצבעות לבין המרפקים והברכיים. בניגוד לזרימה המחזורית של 12 המרידיאנים, הדינמיקה של הנקודות העתיקות היא תמיד <strong>צנטריפטלית (מהקצוות פנימה אל הגוף)</strong>, בדומה לנהר שמתחיל כבאר קטנה ומתרחב ומעמיק עד לים. באזור זה הצ'י שטחי ודינמי במיוחד – ולכן נקודות אלו הן העוצמתיות ביותר לשינוי מצב הצ'י.</p>

                    <table class="theory-table" style="margin-top:15px;">
                        <tr><th>הנקודה</th><th>דימוי ודינמיקה</th><th>התוויה לפי Nan Jing (פרק 68)</th><th>התוויה לפי Ling Shu</th><th>אלמנט (Yin / Yang)</th><th>עונה</th></tr>
                        <tr><td><strong>1. באר (Jing-Well)</strong></td><td>הצ'י שטחי, דק ומרוכז מאוד; נקודת שינוי קוטביות Yin-Yang</td><td><strong>מלאות מתחת ללב</strong> (אפיגסטריום)</td><td>מצבים אקוטיים, איבוד הכרה, טיהור חום מקצה המרידיאן, הפרעות נפש קשות</td><td>עץ (Yin) / מתכת (Yang)</td><td>חורף</td></tr>
                        <tr><td><strong>2. מעיין (Ying-Spring)</strong></td><td>הצ'י מתחיל לזרום בעוצמה ובמהירות</td><td><strong>חום בגוף</strong> (טיהור חום!)</td><td>שינויי צבע, מחלות של איברי ה-Yang וטיהור חום פנימי/חיצוני</td><td>אש (Yin) / מים (Yang)</td><td>אביב</td></tr>
                        <tr><td><strong>3. פלג (Shu-Stream)</strong></td><td>הצ'י שוצף ועמוק יותר (במרידיאני Yin = נקודת Yuan)</td><td><strong>כבדות בגוף וכאבי מפרקים</strong> (לחות ו-Bi)</td><td>מחלות המופיעות לסירוגין (התקפיות); סילוק פתוגן מרווח המרידיאן</td><td>אדמה (Yin) / עץ (Yang)</td><td>קיץ</td></tr>
                        <tr><td><strong>4. נהר (Jing-River)</strong></td><td>הצ'י רחב, עמוק ומהיר</td><td><strong>שיעול, אסטמה, קור וחום</strong></td><td>שינויי קול, גרון, שרירים, גידים ועצמות</td><td>מתכת (Yin) / אש (Yang)</td><td>סוף קיץ</td></tr>
                        <tr><td><strong>5. ים (He-Sea)</strong></td><td>הצ'י רחב, עמוק ומתחבר לאיברים הפנימיים</td><td><strong>צ'י מורד ושלשול</strong></td><td>מחלות הקיבה, מעיים ואיברי ה-Yang (וכן בעיות עור וחום בדם)</td><td>מים (Yin) / אדמה (Yang)</td><td>סתיו</td></tr>
                    </table>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #6c5ce7;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. יישום קליני לפי חמשת האלמנטים</h2>
                    <ul>
                        <li><strong>חיזוק האמא / פיזור הבן (Nan Jing פרק 69):</strong> בחוסר – נחזק את נקודת האמא על אותו מרידיאן (למשל LU-9 נקודת האדמה לחיזוק הריאות); בעודף – נפזר את נקודת הבן (למשל LIV-2 נקודת האש לפיזור אש הכבד).</li>
                        <li><strong>סילוק פתוגנים לפי אלמנט:</strong> שימוש בנקודת עץ לרוח, אש לחום, אדמה ללחות, מתכת ליובש ומים לקור/חום.</li>
                        <li><strong>דגש של מצ'יוצ'יה:</strong> במעשה הקליני, התפקוד האנרגטי הישיר של הנקודה (כגון Ying-Spring לטיהור חום ו-He-Sea לצ'י מורד ובעיות מעיים) חשוב ושימושי אף יותר מהנוסחה המכנית של אמא-בן.</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרק 51: קטגוריות נקודות מיוחדות
        // ==========================================
        ch51_point_categories: {
            title: "פרק 51: קטגוריות נקודות מיוחדות (Special Categories)",
            subtitle: "Yuan, Luo, Back-Shu, Front-Mu, Xi-Cleft, Hui, ארבעת הימים, אשנב לרקיע, 12 כוכבי השמיים, 13 נקודות הרוחות ונקודות שליטה.",
            icon: "⭐",
            color1: "#fdcb6e",
            color2: "#e17055",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. קטגוריות הנקודות המרכזיות בקליניקה</h2>
                    <table class="theory-table">
                        <tr><th>קטגוריה</th><th>מנגנון ויישום קליני עיקרי</th><th>דוגמאות ודגשים חשובים</th></tr>
                        <tr><td><strong>נקודות מקור (Yuan-Source)</strong></td><td>נקודות בהן ה-<strong>Yuan Qi</strong> יוצא אל המרידיאן. ב-Yin (זהות ל-Shu-Stream): משמשות בעיקר ל<strong>חיזוק איברי ה-Zang</strong>. ב-Yang: משמשות בעיקר ל<strong>סילוק פתוגנים ועודף</strong>.</td><td>LU-9, SP-3, HT-7, KID-3, PC-7, LIV-3 | LI-4, ST-42, SI-4, BL-64, TW-4, GB-40.</td></tr>
                        <tr><td><strong>נקודות חיבור (Luo-Connecting)</strong></td><td>מקשרות בין בני הזוג Yin-Yang. 3 שימושים: 1. בשילוב <strong>Host-Guest</strong> (Yuan של האיבר הפגוע + Luo של בן הזוג); 2. טיפול בפתולוגיות לאורך ערוץ ה-Luo (עודף/חוסר); 3. השפעה עמוקה על <strong>מצבים רגשיים</strong> וניקוז תקיעות דם שטחית.</td><td>LU-7, LI-6, ST-40, SP-4, HT-5, SI-7, BL-58, KID-4, PC-6, TW-5, GB-37, LIV-5 + SP-21 (Great Luo), REN-15, DU-1.</td></tr>
                        <tr><td><strong>נקודות Shu אחוריות (Back-Shu)</strong></td><td>ממוקמות על הקו הפנימי של BL בגב (1.5 צון מהאמצע). בעלות אופי <strong>Yang</strong> – משמשות בעיקר ל<strong>חיזוק כרוני של איברי ה-Zang</strong> (גם דרך מוקסה), וכן לטיפול באיברי החוש הקשורים אליהם. רגישות במישוש מעידה על חוסר/פתולוגיה באיבר.</td><td>BL-13 (LU), BL-14 (PC), BL-15 (HT), BL-18 (LIV), BL-19 (GB), BL-20 (SP), BL-21 (ST), BL-22 (TW), BL-23 (KID), BL-25 (LI), BL-27 (SI), BL-28 (BL).</td></tr>
                        <tr><td><strong>נקודות Mu קדמיות (Front-Mu)</strong></td><td>ממוקמות בחזה ובבטן. בעלות אופי <strong>Yin</strong> – משמשות בעיקר למצבים <strong>אקוטיים</strong>, סילוק עודף/חום וויסות איברי ה-Fu. שילוב <strong>Back-Shu + Front-Mu</strong> יוצר אפקט מאזן ועוצמתי במיוחד.</td><td>LU-1, REN-17 (PC), REN-14 (HT), LIV-14 (LIV), GB-24 (GB), LIV-13 (SP), REN-12 (ST), REN-5 (TW), GB-25 (KID), ST-25 (LI), REN-4 (SI), REN-3 (BL).</td></tr>
                        <tr><td><strong>נקודות הצטברות (Xi-Cleft)</strong></td><td>"סדקים" שבהם הצ'י והדם מתכנסים לעומק. משמשות ל<strong>מצבים אקוטיים וכאב עז</strong> לאורך המרידיאן; במרידיאני ה-Yin משמשות גם ל<strong>עצירת דימומים אקוטיים</strong>.</td><td>LU-6, LI-7, ST-34, SP-8, HT-6, SI-6, BL-63, KID-5, PC-4, TW-7, GB-36, LIV-6.</td></tr>
                        <tr><td><strong>נקודות השפעה (Hui-Gathering)</strong></td><td>8 נקודות המשפיעות מערכתית על רקמות וחומרים בגוף.</td><td>Zang: <strong>LIV-13</strong> | Fu: <strong>REN-12</strong> | Qi: <strong>REN-17</strong> | דם: <strong>BL-17</strong> | גידים: <strong>GB-34</strong> | כלי דם: <strong>LU-9</strong> | עצמות: <strong>BL-11</strong> | מח: <strong>GB-39</strong>.</td></tr>
                    </table>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. קבוצות נקודות מיוחדות נוספות בפרק 51</h2>
                    <ul>
                        <li><strong>נקודות אשנב לרקיע (Window of Heaven):</strong> ממוקמות סביב הצוואר (ST-9, LI-18, SI-16, SI-17, TW-16, BL-10, LU-3, PC-1, REN-22, DU-16). מווסתות את זרימת הצ'י בין הגוף לראש, מורידות צ'י מורד (כאבי ראש, סחרחורת, לחץ דם), מטפלות בגוייטר ובגושים בצוואר, ופותחות את החושים ואת ה-Shen.</li>
                        <li><strong>12 נקודות כוכבי השמיים של Ma Dan Yang:</strong> 12 הנקודות החשובות והיעילות ביותר בדיקור הקלאסי: <strong>ST-36, ST-44, LI-11, LI-4, BL-40, BL-57, LIV-3, BL-60, GB-30, GB-34, HT-5, LU-7</strong>.</li>
                        <li><strong>13 נקודות הרוחות של Sun Si Miao (Ghost Points):</strong> סדרה קלאסית לטיפול בהפרעות נפש קשות (מאניה, פסיכוזה, אפילפסיה) – מתחילות ב-DU-26, LU-11, SP-1, PC-7, BL-62, DU-16, ST-6, REN-24, PC-8, DU-23, REN-1, LI-11 ו-Haiquan.</li>
                        <li><strong>נקודות מערכת העין (Mu Xi) וחמש נקודות השליטה (Command Points):</strong> <strong>ST-36</strong> (בטן), <strong>BL-40</strong> (גב תחתון), <strong>LU-7</strong> (עורף וראש), <strong>LI-4</strong> (פנים ופה), <strong>PC-6</strong> (חזה ואפיגסטריום), וכן <strong>DU-26</strong> (החייאה).</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרקים 52-53: שמונת המרידיאנים המיוחדים
        // ==========================================
        ch52_53_extraordinary_vessels: {
            title: "פרקים 52–53: שמונת המרידיאנים המיוחדים (奇经八脉)",
            subtitle: "מאגרי הצ'י, הקשר ל-Jing ולמחזורי החיים, דינמיקה אנרגטית, שיטת הפתיחה והיישום הקליני של כל 8 המרידיאנים.",
            icon: "🌌",
            color1: "#a29bfe",
            color2: "#6c5ce7",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. תפקודי-העל והשימוש הקליני במרידיאנים המיוחדים (פרק 52)</h2>
                    <ul>
                        <li><strong>מאגרי צ'י ("אגמים ותעלות"):</strong> 12 המרידיאנים הראשיים הם "הנהרות", ו-8 המרידיאנים המיוחדים הם "האגמים" הסופגים עודפים כשיש הצפה ומשחררים אנרגיה כשיש בצורת (חוסר).</li>
                        <li><strong>קשר ישיר ל-Kidney-Essence (Jing) ולמחזורי 7/8 שנים:</strong> כולם נובעים מהכליות ומזרימים את ה-Jing לכל הגוף (כולל שליטה ב-Wei Qi, ב-6 איברי היאנג המיוחדים ובארבעת הימים).</li>
                        <li><strong>4 הזוגות האנרגטיים:</strong>
                            <ul>
                                <li><strong>Du + Ren + Chong ("מקור אחד, שלושה ענפים"):</strong> נובעים כולם מהרווח שבין הכליות (רחם / Dan Tian) – הבסיס ל-Jing, דם, פוריות, גב ועמוד שדרה.</li>
                                <li><strong>Yin Qiao + Yang Qiao:</strong> מאזנים יין ויאנג בצד שמאל וימין של הרגליים, שולטים במבנה היציבה וב<strong>מחזור השינה והערות</strong> (פתיחת וסגירת העיניים).</li>
                                <li><strong>Yin Wei + Yang Wei:</strong> מקשרים בין כל ערוצי היין (חזה ולב) וכל ערוצי היאנג (צידי הגוף ו-Shao Yang), ומאזנים Nutritive ו-Defensive Qi.</li>
                                <li><strong>Dai Mai (החגורה):</strong> המרידיאן האופקי היחיד – אוגד ומחזיק את כל המרידיאנים האנכיים ומווסת את העלייה והירידה בין פלג גוף עליון ותחתון.</li>
                            </ul>
                        </li>
                        <li><strong>עקרון הפתיחה של מצ'יוצ'יה:</strong> משתמשים בנקודת הפתיחה (Opening Point) בצד אחד + הנקודה המשלימה (Coupled Point) בצד הנגדי (בגברים: פתיחה בשמאל, משלימה בימין; בנשים: פתיחה בימין, משלימה בשמאל), ומוסיפים נקודות על מסלול המרידיאן המיוחד.</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. היישום הקליני של כל 8 המרידיאנים המיוחדים (פרק 53)</h2>
                    <table class="theory-table">
                        <tr><th>המרידיאן</th><th>פתיחה + משלימה</th><th>תחומי השפעה ויישומים קליניים מרכזיים</th></tr>
                        <tr><td><strong>Du Mai</strong></td><td>SI-3 + BL-62</td><td>מחזק Kidney-Yang, מחזק את <strong>עמוד השדרה והגב</strong>, מזין את המוח וה-Shen (דיכאון), מסלק רוח חיצונית ופנימית (פרכוסים, רעד, כאב ראש).</td></tr>
                        <tr><td><strong>Ren Mai</strong></td><td>LU-7 + KID-6</td><td>מזין Yin ודם, מווסת את <strong>כל מערכת הרבייה והמחזור בנשים</strong> (גיל התבגרות, פוריות, היריון, מנופאוזה), מסלק גושים בבטן, מחזק ריאות וכליות (אסטמה).</td></tr>
                        <tr><td><strong>Chong Mai</strong></td><td>SP-4 + PC-6</td><td>"ים הדם" – מניע דם ומזין דם בגינקולוגיה; <strong>מוריד צ'י מורד</strong> (חרדה, פלפיטציות, לחץ בחזה, גוש בגרון, בחילות); מחבר קיבה ללב ולרחם.</td></tr>
                        <tr><td><strong>Dai Mai</strong></td><td>GB-41 + TW-5</td><td>מנקז <strong>לחות חמה ממחמם תחתון</strong> (הפרשות וגינליות, דלקות אגן); משחרר תקיעות כבד וכיס מרה (מיגרנות, כאב צלעות); מטפל בכאב גב תחתון חגורתי וצניחות.</td></tr>
                        <tr><td><strong>Yin Qiao Mai</strong></td><td>KID-6 + LU-7</td><td>מטפל ב<strong>ישנוניות יתר</strong>, מאזן מתח שרירים פנימי/חיצוני ברגליים (הפנייה פנימה), מסלק עודף יין/לחות וגושים בבטן התחתונה (רחם).</td></tr>
                        <tr><td><strong>Yang Qiao Mai</strong></td><td>BL-62 + SI-3</td><td>מטפל ב<strong>אינסומניה</strong> (עודף יאנג בראש), מסלק רוח חיצונית ופנימית (CVA, פציאליס, כאב ראש), מטפל בכאב גב תחתון חד-צדדי ובסכיאטיקה.</td></tr>
                        <tr><td><strong>Yin Wei Mai</strong></td><td>PC-6 + SP-4</td><td>מזין דם ויין הלב, מרגיע Shen ב<strong>חרדה, דיכאון, אינסומניה וכאבי חזה/לב</strong> (בעיקר בנשים בחוסר דם).</td></tr>
                        <tr><td><strong>Yang Wei Mai</strong></td><td>TW-5 + GB-41</td><td>מווסת שכבת <strong>Shao Yang</strong> (קור וחום לסירוגין), מטפל במיגרנות צדיות, בעיות אוזניים, כאב צוואר וכתפיים וחיזוק Wei Qi.</td></tr>
                    </table>
                </div>
            `
        },

        // ==========================================
        // פרקים 54-68: דגשי 14 המרידיאנים ונקודות האקסטרה
        // ==========================================
        ch54_68_points_and_extra: {
            title: "פרקים 54–68: דגשי 14 המרידיאנים ונקודות אקסטרה",
            subtitle: "מפת נקודות המפתח של מצ'יוצ'יה ב-14 המרידיאנים + מדריך מלא לפרק 68 (Extra Points).",
            icon: "📍",
            color1: "#55efc4",
            color2: "#00b894",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. נקודות המפתח ב-14 המרידיאנים לפי מצ'יוצ'יה (פרקים 54–67)</h2>
                    <p>בפרקים 54–67 מפרט מצ'יוצ'יה את התפקודים האנרגטיים של כל נקודה (באתר שלנו כל הנקודות מפורטות בנפרד בתפריט "מרידיאנים"). להלן <strong>תמצית נקודות המפתח הקליניות</strong> שהוא מדגיש במיוחד:</p>
                    <ul>
                        <li><strong>LU &amp; LI:</strong> <strong>LU-7</strong> (פתיחת Ren, שחרור חיצון, צער ועצב), <strong>LU-9</strong> (חיזוק LU Qi/Yin וכלי דם); <strong>LI-4</strong> (שחרור חיצון, כאב, פנים/פה, הנעת צ'י), <strong>LI-11</strong> (טיהור חום ולחות חמה, עור).</li>
                        <li><strong>ST &amp; SP:</strong> <strong>ST-36</strong> (חיזוק כללי של צ'י, דם ו-Wei Qi), <strong>ST-40</strong> (הנקודה הראשית לסילוק כל סוגי הליחה!), <strong>ST-25</strong> (ויסות מעיים – שלשול ועצירות); <strong>SP-6</strong> (מפגש 3 היין – גינקולוגיה, הזנת יין/דם, הרגעת Shen), <strong>SP-9</strong> (סילוק לחות), <strong>SP-10</strong> (קירור, הנעה והזנת דם).</li>
                        <li><strong>HT &amp; SI:</strong> <strong>HT-7</strong> (הזנת דם הלב והרגעת Shen), <strong>HT-5</strong> (דיבור וחיזוק צ'י הלב), <strong>HT-8</strong> (טיהור אש בלב); <strong>SI-3</strong> (פתיחת Du, עורף, גב עליון ורוח פנימית).</li>
                        <li><strong>BL &amp; KID:</strong> <strong>BL-17</strong> (דם), <strong>BL-23</strong> (חיזוק כליות), <strong>BL-40</strong> (גב תחתון וטיהור חום בדם), <strong>BL-60</strong> (כאב גב ועורף); <strong>KID-3</strong> (מקור – חיזוק יין ויאנג כליות), <strong>KID-6</strong> (הזנת יין, גרון ושינה), <strong>KID-7</strong> (חיזוק יאנג וויסות הזעה).</li>
                        <li><strong>PC &amp; TW:</strong> <strong>PC-6</strong> (פתיחת חזה, בחילות, הרגעת Shen וקשר לרחם), <strong>PC-5</strong> (סילוק ליחה מהלב); <strong>TW-5</strong> (שחרור רוח-חום ו-Shao Yang), <strong>TW-6</strong> (עצירות וכאב צלעות).</li>
                        <li><strong>GB &amp; LIV:</strong> <strong>GB-20</strong> (סילוק רוח חיצונית ופנימית, כאב ראש ועיניים), <strong>GB-34</strong> (גידים, הנעת LIV/GB Qi ולחות חמה); <strong>LIV-3</strong> (הנעת צ'י הכבד, הרגעת רוח ועליית יאנג), <strong>LIV-2</strong> (טיהור אש הכבד), <strong>LIV-8</strong> (הזנת דם ויין הכבד).</li>
                        <li><strong>REN &amp; DU:</strong> <strong>REN-4</strong> (חיזוק Jing, Yin, דם ורחם), <strong>REN-6</strong> (חיזוק Qi), <strong>REN-12</strong> (קיבה וטחול), <strong>REN-17</strong> (חזה, Zong Qi וריאות); <strong>DU-4</strong> (חיזוק Ming Men), <strong>DU-14</strong> (טיהור חום וחיזוק יאנג), <strong>DU-20</strong> (הרמת יאנג, הרגעת רוח והבהרת ה-Shen), <strong>DU-24</strong> (הרגעת Shen).</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #6c5ce7;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פרק 68: נקודות האקסטרה המרכזיות (Extra Points)</h2>
                    <table class="theory-table">
                        <tr><th>שם הנקודה</th><th>מיקום</th><th>תפקוד קליני עיקרי</th></tr>
                        <tr><td><strong>Yintang (אולם החותם)</strong></td><td>בין הגבות</td><td><strong>מרגיע Shen בחוזקה</strong> (חרדה ואינסומניה), מסלק רוח, פותח אף וסינוסים ומפסיק כאב ראש פרונטלי.</td></tr>
                        <tr><td><strong>Sishencong</strong></td><td>4 נקודות במרחק 1 צון סביב DU-20</td><td>מרגיע Shen, משפר זיכרון וריכוז, מטפל בסחרחורת, אינסומניה, אפילפסיה וכאב ראש.</td></tr>
                        <tr><td><strong>Taiyang</strong></td><td>בשקע ברקה (אחורית לגבה ולקצה העין)</td><td>מסלק רוח-חום, מוריד LIV Yang – נקודת מפתח ל<strong>מיגרנה צדית</strong> וכאבי עיניים.</td></tr>
                        <tr><td><strong>Bitong</strong></td><td>קצה עליון של קפל האף-שפה</td><td>פותח מעברי אף, נזלת אלרגית וסינוסיטיס.</td></tr>
                        <tr><td><strong>Dingchuan</strong></td><td>0.5 צון לטראלית ל-DU-14 (C7)</td><td><strong>מפסיק אסטמה, צפצופים ושיעול</strong>.</td></tr>
                        <tr><td><strong>Huatuojiaji</strong></td><td>0.5 צון לטראלית לגבול התחתון של כל חוליה (T1–L5)</td><td>מווסת את כל האיברים הפנימיים (חלופה עדינה ל-Back-Shu) ומטפל ב<strong>כאבי גב, פריצות דיסק והרפס זוסטר</strong>.</td></tr>
                        <tr><td><strong>Zigong (ארמון הילד)</strong></td><td>3 צון לטראלית ל-REN-3</td><td>מווסת מחזור, מחזק רחם, מטפל ב<strong>עקרות, צניחת רחם וכאבי מחזור</strong>.</td></tr>
                        <tr><td><strong>Shixuan (10 ההכרזות)</strong></td><td>בקצות 10 אצבעות הידיים</td><td>הקזת דם במצבי חירום – <strong>חום גבוה מאוד, איבוד הכרה, מכת חום ו-CVA</strong>.</td></tr>
                        <tr><td><strong>Baxie / Bafeng</strong></td><td>בקרומי האצבעות בידיים (Baxie) וברגליים (Bafeng)</td><td>סילוק רוח-לחות, נפיחות, נימול וכאבי מפרקים (Bi) באצבעות.</td></tr>
                        <tr><td><strong>Xiyan (עיני הברך)</strong></td><td>בשני השקעים משני צידי גיד הפיקה</td><td>הנקודה המקומית הראשית לכל <strong>כאבי ברכיים, נפיחות ואוסטאוארתריטיס</strong>.</td></tr>
                        <tr><td><strong>Dannangxue / Lanweixue</strong></td><td>2 צון מתחת ל-GB-34 (כיס מרה) / 2 צון מתחת ל-ST-36 (תוספתן)</td><td>אבחנה (רגישות בלחיצה) וטיפול ב<strong>דלקת/אבנים בכיס המרה</strong> (Dannangxue) וב<strong>אפנדיציטיס אקוטי/כרוני</strong> (Lanweixue).</td></tr>
                    </table>
                </div>
            `
        },

        // ==========================================
        // פרק 69: עקרונות ואסטרטגיות טיפול (Principles of Treatment)
        // ==========================================
        ch69_treatment_principles: {
            title: "פרק 69: עקרונות ואסטרטגיות טיפול (治疗原则)",
            subtitle: "שורש וענף (Ben & Biao), מתי לחזק צ'י זקוף ומתי לסלק פתוגן, והבדלים ביישום בין דיקור לצמחי מרפא.",
            icon: "🎯",
            color1: "#e17055",
            color2: "#d63031",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. השורש והענף (The Root &amp; The Manifestation – Ben &amp; Biao)</h2>
                    <p>אחת ההחלטות החשובות ביותר בקליניקה היא להבחין בין <strong>השורש (Ben - 本)</strong> – סיבת היסוד של חוסר האיזון (למשל חוסר יין בכליות) – לבין <strong>הענף / הביטוי (Biao - 标)</strong> – התסמין או התוצאה המשנית (למשל עליית יאנג הכבד הגורמת למיגרנה). קיימות <strong>3 אסטרטגיות עיקריות</strong>:</p>
                    <table class="theory-table" style="margin-top:15px;">
                        <tr><th>האסטרטגיה</th><th>מתי נשתמש בה?</th><th>דוגמה קלינית</th></tr>
                        <tr><td><strong>1. טיפול בשורש בלבד (Treat the Root Only)</strong></td><td>במצבים כרוניים שבהם התסמינים (הענף) אינם חריפים או מסוכנים וייעלמו מאליהם כשהשורש יתאזן.</td><td>חוסר דם בכבד הגורם לטשטוש ראייה קל ונימול – הזנת דם הכבד תפתור גם את הענף.</td></tr>
                        <tr><td><strong>2. טיפול בשורש ובענף יחד (Treat Both)</strong></td><td><strong>האסטרטגיה השכיחה ביותר בקליניקה!</strong> במצבים כרוניים שבהם גם התסמין מטריד מאוד את המטופל.</td><td>מיגרנות מעליית יאנג הכבד (ענף) על רקע חוסר יין בכליות (שורש) – נכניע יאנג (LIV-3, GB-20) ונזין כליות (KID-3, SP-6) יחד.</td></tr>
                        <tr><td><strong>3. טיפול בענף תחילה ורק אחר כך בשורש</strong></td><td><strong>במצבים אקוטיים, מסכני חיים או כואבים מאוד</strong> שבהם חובה להקל מיד לפני שנפנה לשורש.</td><td>דימום רחם מאסיבי, התקף אסטמה חריף, פלישת רוח-קור אקוטית אצל מטופל חלש, או כאב גב תחתון אקוטי משתוק.</td></tr>
                    </table>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. חיזוק הצ'י הזקוף (Zheng Qi) מול סילוק פתוגן (Xie Qi)</h2>
                    <ul>
                        <li><strong>חיזוק הצ'י הזקוף בלבד (Tonify Upright Qi):</strong> במצבי חוסר טהורים ללא נוכחות פתוגן (למשל חוסר צ'י טחול או חוסר דם טהור).</li>
                        <li><strong>סילוק הפתוגן בלבד (Expel Pathogenic Factors):</strong> במצבי עודף טהורים כשהצ'י הזקוף חזק (למשל הצטננות אקוטית באדם בריא, או אש מלאה בכבד). <em>כלל ברזל:</em> <strong>אין לחזק בזמן פלישה של פתוגן חיצוני</strong> (כדי לא "לנעול" את הפתוגן בפנים!).</li>
                        <li><strong>חיזוק וסילוק יחד:</strong> במצבים כרוניים מעורבים (כגון חוסר צ'י טחול + לחות/ליחה). קובעים את היחס בין החיזוק לסילוק לפי חוזק המטופל.</li>
                        <li><strong>הבדלים בין דיקור לצמחי מרפא:</strong> בדיקור קל ובטוח יותר לשלב חיזוק ופיזור באותו טיפול (נקודות מסוימות אף מאזנות דו-כיוונית), ואילו בצמחי מרפא יש להיזהר יותר – צמחים מחזקים (כמו Shu Di) עלולים להכביד ולהחמיר לחות או פלישה חיצונית אם ניתנים מוקדם מדי.</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרק 70: עקרונות שילוב נקודות (Point Combinations)
        // ==========================================
        ch70_point_combinations: {
            title: "פרק 70: עקרונות שילוב נקודות (配穴法 - Point Combinations)",
            subtitle: "אמנות בניית מרשם דיקור מאוזן: דיסטלי/לוקאלי, מעלה/מטה, שמאל/ימין, יין/יאנג ופנים/גב.",
            icon: "⚖️",
            color1: "#6c5ce7",
            color2: "#2d3436",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">חמשת צירי האיזון בבניית מרשם דיקור</h2>
                    <p>מרשם דיקור איכותי אינו "רשימת מכולת" של נקודות לפי סימפטומים, אלא <strong>מבנה אנרגטי מאוזן והרמוני</strong> השולט בכיוון זרימת הצ'י (עלייה/ירידה, כניסה/יציאה) תוך שימוש במספר מינימלי ומדויק של מחטים.</p>

                    <table class="theory-table" style="margin-top:15px;">
                        <tr><th>ציר האיזון</th><th>העיקרון הקליני</th><th>דוגמאות ליישום מעשי</th></tr>
                        <tr>
                            <td><strong>1. דיסטלי ולוקאלי (Distal &amp; Local)</strong></td>
                            <td>הנקודה <strong>הדיסטלית</strong> (מתחת למרפק/ברך) מנקה את המרידיאן, פותחת את הזרימה וקובעת את הכיוון; הנקודה <strong>הלוקאלית</strong> (והסמוכה – Adjacent) ממקדת את הפעולה באיבר או במפרק הכואב.</td>
                            <td>כאב ראש צדי (GB): <strong>GB-41 / TW-5</strong> (דיסטלי) + <strong>Taiyang / GB-20</strong> (לוקאלי). כאב כתף: <strong>ST-38 / LI-4</strong> + <strong>LI-15</strong>. בעיית קיבה: <strong>ST-36</strong> + <strong>REN-12</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>2. מעלה ומטה (Upper &amp; Lower)</strong></td>
                            <td>איזון אנכי בין פלג הגוף העליון לתחתון – קריטי להורדת צ'י/אש עולים או להרמת צ'י צונח (למשל שילוב מרידיאנים מאותה שכבה יד+רגל).</td>
                            <td><strong>"ארבעת השערים" (LI-4 + LIV-3)</strong> להנעת צ'י והרגעה; <strong>LU-7 + KID-6</strong> (ריאות וכליות); <strong>PC-6 + SP-4</strong> (חזה ובטן); <strong>LI-4 + ST-36</strong> (חיזוק כללי).</td>
                        </tr>
                        <tr>
                            <td><strong>3. שמאל וימין (Left &amp; Right)</strong></td>
                            <td>לרוב דוקרים דו-צדדית לאפקט מאוזן (שמאל = דם/יאנג, ימין = צ'י/יין). בבעיות כאב/מרידיאן חד-צדדיות משתמשים לעיתים בדיקור נגדי (<strong>Contralateral</strong> – דיקור הצד הבריא) או בדיקור מוצלב (יד אחת + רגל נגדית) כדי לשמור על איזון עם מינימום מחטים.</td>
                            <td>כאב כתף ימין אקוטי: דיקור <strong>ST-38</strong> או <strong>LI-4</strong> בצד שמאל תוך כדי הנעת כתף ימין.</td>
                        </tr>
                        <tr>
                            <td><strong>4. יין ויאנג (Yin &amp; Yang)</strong></td>
                            <td>שילוב מרידיאני Yin ו-Yang (במיוחד זוגות פנים-חוץ) מעצים את האפקט ומונע הטיית יתר (למשל סילוק עודף יאנג לצד הזנת יין).</td>
                            <td>שילוב <strong>Yuan + Luo</strong> (למשל <strong>SP-3 + ST-40</strong> לחיזוק טחול וסילוק ליחה; <strong>LU-9 + LI-6</strong>); או <strong>ST-36 + SP-6</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>5. פנים וגב (Front &amp; Back)</strong></td>
                            <td>שילוב נקודות <strong>Front-Mu</strong> (יין – בחזה/בטן) ו-<strong>Back-Shu</strong> (יאנג – בגב) במצבים כרוניים עקשניים (או לסירוגין בין טיפולים: טיפול אחד על הגב וטיפול הבא על הבטן).</td>
                            <td>אסטמה כרונית: <strong>BL-13 + LU-1</strong>; בעיות קיבה: <strong>BL-21 + REN-12</strong>; בעיות כליות ופוריות: <strong>BL-23 + REN-4</strong>.</td>
                        </tr>
                    </table>
                </div>
            `
        }
    });
}