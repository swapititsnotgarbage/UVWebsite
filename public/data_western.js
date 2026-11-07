// ==========================================
// === קובץ data_western.js ===
// רפואה מערבית - פתולוגיות אורתופדיות ועוד
// ==========================================

const westernData = {
    // --- פתולוגיות של מפרק הכתף ---
    shoulder_pathologies: {
        title: "מפרק הכתף",
        subtitle: "אנטומיה, ביומכניקה, Rotator Cuff, SLAP, Bankart, וכתף קפואה.",
        icon: "🦴",
        color1: "#a8c0ff", 
        color2: "#3f2b96", 
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק הכתף</h2>
                
                <!-- התחלת אזור מפוצל: טקסט מימין, תמונה משמאל -->
                <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; margin-top: 15px;">
                    
                    <!-- צד ימין: טקסט -->
                    <div style="flex: 1; min-width: 300px;">
                        <p>מפרק הכתף הוא מפרק סינוביאלי מסוג עלי ומכתש (Ball & Socket). מאפשר את טווח התנועה הרחב ביותר בגוף, אך חושף את המפרק לחוסר יציבות.</p>
                        <p><strong>3 עצמות עיקריות:</strong></p>
                        <ul>
                            <li><strong>Scapula (עצם השכמה):</strong> כוללת את ה-Glenoid Fossa (השקע המפרקי) וה-Acromion.</li>
                            <li><strong>Humerus (עצם הזרוע):</strong> ראש עצם הזרוע היושב בתוך השקע.</li>
                            <li><strong>Clavicle (עצם הבריח):</strong> שומרת את הכתף במקומה ומונעת תזוזה מיותרת.</li>
                        </ul>
                    </div>

                    <!-- צד שמאל: תמונה -->
                    <div style="flex-shrink: 0;">
                        <!-- שים לב לנתיב התמונה כאן -->
                        <img src="images/Sh1.jpeg" class="ortho-thumb" style="width: 250px; height: auto; object-fit: contain; border-radius: 10px;" onclick="enlargeImage(this.src)" alt="אנטומיה של הכתף">
                    </div>

                </div>
                <!-- סוף אזור מפוצל -->

                <h3 style="margin-top:20px; color:var(--ink);">שרירי ה-Rotator Cuff (SITS)</h3>
                <p>4 שרירים הסובבים את המפרק, מניעים ומייצבים אותו:</p>
                <table class="theory-table">
                    <tr><th>שריר</th><th>תחל (Origin)</th><th>אחז (Insertion)</th><th>פעולה עיקרית</th></tr>
                    <tr><td><strong>S</strong>upraspinatus</td><td>Supraspinous Fossa</td><td>Superior Facet (Greater Tuberosity)</td><td>הרחקה (Abduction)</td></tr>
                    <tr><td><strong>I</strong>nfraspinatus</td><td>Infraspinous Fossa</td><td>Middle Facet (Greater Tuberosity)</td><td>רוטציה חיצונית</td></tr>
                    <tr><td><strong>T</strong>eres Minor</td><td>Lateral Border of Scapula</td><td>Inferior Facet (Greater Tuberosity)</td><td>רוטציה חיצונית</td></tr>
                    <tr><td><strong>S</strong>ubscapularis</td><td>Subscapular Fossa</td><td>Lesser Tuberosity</td><td>רוטציה פנימית</td></tr>
                </table>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של מפרק הכתף</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. פגיעות שרירי ה-Rotator Cuff</h3>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> כ-30% יחוו כאב בכתף. 54% מהמדווחים הופכים לכרוניים.</li>
                    <li><strong>גורמי סיכון:</strong> טראומה (נפילות), מיקרו-טראומה (Overuse), עומס יתר, לקויות יציבה, מחלות מטבוליות (סוכרת).</li>
                    <li><strong>קליניקה:</strong> כאב חזק, כאבי לילה, חולשה שרירית, סימן Positive Painful Arc (כאב בהרחקה 60-120 מעלות).</li>
                    <li><strong>טיפול:</strong> שמרני יעיל יותר (מנוחה, קרח, פיזיותרפיה, נוגדי דלקת).</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. פריקה קדמית של הכתף (Anterior Dislocation)</h3>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> הפריקה הנפוצה ביותר (90-95%), שכיחה פי 3 בגברים, לרוב מטראומה.</li>
                    <li><strong>אטיולוגיה:</strong> תנוחה מסוכנת: אבדוקציה 90° + רוטציה לטרלית 90°. במצב זה רק הרצועה התחתונה (IGHL) מייצבת.</li>
                    <li><strong>קליניקה:</strong> כאב חריף, הגבלה מוחלטת, היד מוחזקת בתמיכה.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. קרע בלברום - S.L.A.P Lesion</h3>
                <p>Superior Labral Anterior and Posterior. קרע בחלק העליון של הלברום בנקודת החיבור לגיד ה-Biceps.</p>
                <ul>
                    <li><strong>גורמי סיכון:</strong> זריקת כדור מעל הראש (בייסבול/פוטבול), הרמת משקל כבד, נפילה על יד ישרה. נפוץ בגילאי 30-50.</li>
                    <li><strong>קליניקה:</strong> מבחן Apprehension חיובי, כאב עמום במאמץ, בעיות בהירדמות עקב חוסר יציבות בשכיבה.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ד. נגע Bankart ו-Hill-Sachs</h3>
                <ul>
                    <li><strong>Bankart Lesion:</strong> קרע בחלק התחתון-קדמי של הלברום כתוצאה מפריקה קדמית.</li>
                    <li><strong>Hill-Sachs Lesion:</strong> חריץ/שבר דחיסה בחלק האחורי-צידי של ראש עצם הזרוע (Humerus) עקב התנגשות העצם בזמן פריקה.</li>
                    <li><strong>סיבוכים:</strong> פגיעה ברשת העצבית (Brachial Plexus) ובעורק האקסילרי - יוביל לחולשה, שיתוק או שינוי צבע ביד.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ה. כתף קפואה (Frozen Shoulder)</h3>
                <p>נוקשות ודלקת בקפסולה (Adhesive Capsulitis) וברקמה הסינוביאלית.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> גילאי 40-65, יותר בנשים. שכיחות של 10-20% בקרב חולי סוכרת. ב-14% יופיע בשתי הכתפיים.</li>
                    <li><strong>גורמי סיכון:</strong> סוכרת, CVA, פרקינסון, מחלות לב, פריצת דיסק צווארית.</li>
                    <li><strong>קליניקה:</strong> כאב מנוחה, כאבי לילה קשים, אובדן משמעותי של טווח תנועה (אקטיבי ופסיבי).</li>
                </ul>
            </div>
        `
    },

    // --- פתולוגיות של מפרק המרפק ---
    elbow_pathologies: {
        title: "מפרק המרפק",
        subtitle: "אנטומיה, ביומכניקה, טניס אלבו, גולפרס אלבו ובורסיטיס של האולקרנון.",
        icon: "🦾",
        color1: "#1abc9c", 
        color2: "#2c3e50",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק המרפק</h2>
                <p>מפרק המרפק הוא מפרק סינוביאלי מסוג ציר (Hinge Joint). הוא עטוף בקפסולה ורצועות שמספקות יציבות, ומורכב מ-3 עצמות עיקריות:</p>
                <ul>
                    <li><strong>Humerus (עצם הזרוע):</strong> בקצה התחתון שלה נמצאים ה-Medial Epicondyle וה-Lateral Epicondyle, המהווים נקודות אחיזה לשרירי האמה. מאחור נמצא שקע ה-Olecranon Fossa.</li>
                    <li><strong>Ulna (עצם הגומד):</strong> עצם האמה הפנימית. מכילה את ה-Olecranon (המרפק האחורי), ו-Coronoid Process (הבליטה הקדמית).</li>
                    <li><strong>Radius (עצם החישור):</strong> עצם האמה החיצונית (בצד האגודל). מאפשרת תנועות סיבוביות (Supination ו-Pronation) על גבי האולנה.</li>
                </ul>

                <h3 style="margin-top:20px; color:var(--ink);">תתי מפרקים וסוגי תנועה</h3>
                <p>מפרק המרפק מורכב משלושה תתי מפרקים עיקריים הפועלים יחד להשגת תנועה ופיתול:</p>
                <ul>
                    <li><strong>Humeroulnar Joint:</strong> המפרק העיקרי לכיפוף ויישור (Flexion / Extension). קצה הזרוע (Trochlea) מתיישב בתוך תעלת האולנה. בעת יישור היד, ה-Olecranon ננעל בשקע שלו. בעת כיפוף, ה-Coronoid ננעל בשקע שלו.</li>
                    <li><strong>Humeroradial Joint:</strong> החיבור בין ה-Capitulum של הזרוע לראש הרדיוס. תומך בעיקר בתנועות הפיתול.</li>
                    <li><strong>Proximal Radioulnar Joint:</strong> בין האולנה לרדיוס. מאפשר את גלגול הרדיוס מעל האולנה.</li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של מפרק המרפק</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. טניס אלבו (Lateral Epicondylitis)</h3>
                <p>דלקת באזור התחל של שרירי המדור האחורי באמה (האקסטנסורים - פושטי כף היד), המחוברים לעילית החיצונית של הזרוע (Lateral Epicondyle).</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> עומס יתר ושימוש חוזרני (Overuse) של שרירי האמה, כמו חבטות טניס. השריר הנפוץ ביותר שנפגע הוא ECRB (Extensor Carpi Radialis Brevis).</li>
                    <li><strong>אפידמיולוגיה:</strong> כ-40% משחקני הטניס מדווחים על כאב, במיוחד מעל גיל 50 (כאבים חמורים ל-42%).</li>
                    <li><strong>קליניקה:</strong> כאב בהפעלת השרירים (מתיחה או כיווץ), חולשה באחיזה, וקושי להרים חפצים עם גב כף יד פונה למעלה.</li>
                    <li><strong>טיפול:</strong> מנוחה, Taping/Brace, נוגדי דלקת, פיזיותרפיה לשיפור כוח וטווח התנועה.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. גולפרס אלבו (Medial Epicondylitis)</h3>
                <p>דלקת במוצא הגידים של שרירי המדור הקדמי באמה (הפלקסורים - מכופפי כף היד), המחוברים לעילית הפנימית של הזרוע (Medial Epicondyle).</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> עומס יתר מביצוע תנועות חזרתיות של כיפוף שורש כף היד ו-Pronation. נפוץ בזריקות כדור, מרימי משקולות ושחקני גולף (אם כי מופיע גם בעבודה ידנית כרונית). יוצר מיקרו-קרעים בגידים.</li>
                    <li><strong>אפידמיולוגיה:</strong> מהווה רק כ-20% ממקרי ה-Epicondylitis (פחות נפוץ מטניס אלבו).</li>
                    <li><strong>קליניקה:</strong> כאב בכיפוף אקטיבי או מתיחה של שורש כף היד, רגישות בצד הפנימי של המרפק.</li>
                    <li><strong>טיפול:</strong> זהה לטניס אלבו (שמרני, חבק זרוע, תרופות).</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. בורסיטיס של המרפק (Olecranon Bursitis)</h3>
                <p>מצב דלקתי בשק הנוזל הסינוביאלי (הבורסה) הממוקם בין העור לבליטת ה-Olecranon מאחורי המרפק, שתפקידו להפחית חיכוך ולספק ריפוד.</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> חבלה ישירה באזור האחורי של המרפק, או חיכוך מתמשך עקב הישענות קבועה על המרפקים (מוכר גם כ-"מרפק סטודנטים"). העומס מוביל לדלקת, כאב ונפיחות קשה.</li>
                    <li><strong>אפידמיולוגיה:</strong> נפוץ בעיקר בגברים (בני 30-60). כ-2/3 מהמקרים הם "א-ספטיים" (כלומר דלקתיים ולא זיהומיים מחיידק).</li>
                    <li><strong>קליניקה (5 סימני הדלקת):</strong>
                        <ol>
                            <li>אודם מקומי (Redness)</li>
                            <li>חום מקומי (Heat)</li>
                            <li>נפיחות (Swelling - מתבטא כגוש בולט ורך)</li>
                            <li>כאב (Pain)</li>
                            <li>ירידה בתפקוד (Loss of Function)</li>
                        </ol>
                    </li>
                    <li><strong>טיפול:</strong> שמרני עם תרופות אנטי-דלקתיות ופיזיותרפיה. במידת הצורך טיפול פולשני לשאיבת נוזל עודף מהבורסה למניעת לחץ.</li>
                </ul>
            </div>
        `
    },

    // --- פתולוגיות של מפרק כף היד ---
    wrist_pathologies: {
        title: "מפרק כף היד",
        subtitle: "אנטומיה, תסמונת התעלה הקרפלית (CTS), אצבע הדק (Trigger Finger), ודלקת ע\"ש דה-קרווין.",
        icon: "🖐️",
        color1: "#ff9a9e", 
        color2: "#fecfef",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק כף היד</h2>
                <p>מפרק כף היד (Wrist Joint) מאפשר מגוון רחב של תנועות גמישות ומדויקות, הכוללות כפיפה (Flexion), יישור (Extension), והטיות לצדדים (Ulnar / Radial Deviation).</p>
                
                <h3 style="margin-top:20px; color:var(--ink);">עצמות כף היד</h3>
                <p>כף היד והאצבעות מורכבות ממספר רב של עצמות:</p>
                <ul>
                    <li><strong>עצמות האמה:</strong> החיבור הפרוקסימלי באמצעות ה-Ulna וה-Radius.</li>
                    <li><strong>עצמות קרפליות (Carpal Bones):</strong> 8 עצמות שורש כף היד, המסודרות בשתי שורות (כגון: Scaphoid, Lunate, Trapezium וכו').</li>
                    <li><strong>עצמות המסרק (Metacarpals):</strong> חמש העצמות המרכיבות את כף היד עצמה.</li>
                    <li><strong>הגלילים (Phalanges):</strong> עצמות האצבעות (מקורבים, אמצעיים, ומרוחקים).</li>
                </ul>

                <h3 style="margin-top:20px; color:var(--ink);">רצועות, גידים ועצבוב</h3>
                <ul>
                    <li><strong>רצועות כף היד (Retinaculums):</strong> רצועות חזקות (כמו Flexor Retinaculum) שתפקידן לשמור על יציבות הגידים ולהגביל תנועה עודפת.</li>
                    <li><strong>התעלה הקרפלית (Carpal Tunnel):</strong> מנהרה צרה ומוגבלת הממוקמת בין העצמות הקרפליות לבין הרצועה הקרפלית הרוחבית (Transverse Carpal Ligament). <strong>בתוך התעלה עוברים 9 גידים פלקסוריים והעצב המדיאני (Median Nerve).</strong></li>
                    <li><strong>אספקה עצבית:</strong> כף היד מעוצבבת על ידי שלושה עצבים עיקריים:
                        <ul>
                            <li><strong>Median Nerve:</strong> מעצבב סנסורית את הצד הפלמרי של האגודל, מורה, אמה, וחצי קמיצה.</li>
                            <li><strong>Ulnar Nerve:</strong> מעצבב את הזרת וחצי קמיצה.</li>
                            <li><strong>Radial Nerve:</strong> מעצבב חלק ניכר מגב כף היד ובסיס האגודל הלטראלי.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של כף היד</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. תסמונת התעלה הקרפלית (Carpal Tunnel Syndrome)</h3>
                <p>תסמונת כליאה בה לחץ מוגבר בתוך התעלה הקרפלית צובט ודוחס את העצב המדיאני העובר בתוכה.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> 4-5% מהאוכלוסייה, נפוצה בעיקר בגילאי 40-60, ושכיחה פי 3 יותר בקרב נשים.</li>
                    <li><strong>אטיולוגיה וגורמי סיכון:</strong> רוב המקרים אידיופתיים. גורמים אפשריים: טראומה (שברים/נקעים), מבנה אנטומי צר גנטית, עיבוי מעטפת התעלה. מחלות רקע שמעודדות את התסמונת: סוכרת, הריון (בצקות), Rheumatoid Arthritis, היפרתירואידיזם (פעילות יתר של בלוטת התריס).</li>
                    <li><strong>קליניקה:</strong> כאב ונימול ממוקדים בשורש כף היד ובאצבעות (1, 2, 3 וחצי 4). ירידה בתחושה, חולשת שרירים ובשלבים מתקדמים – אטרופיה בבסיס האגודל.</li>
                    <li><strong>טיפול:</strong> שמרני (מנוחה, שינוי הרגלי עבודה, סד, דיקור, נוגדי דלקת) או ניתוח לחיתוך הרצועה הרוחבית לשחרור העצב.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. דלקת גידים ע"ש דה-קרווין (De Quervain's Tenosynovitis)</h3>
                <p>דלקת במעטפת של גידי שרירי האגודל המרחיקים (Abductor Pollicis Longus, Extensor Pollicis Brevis).</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> שכיחה בעיקר אצל נשים (פי 10), גילאי 30-50. נשים מיד לאחר לידה נמצאות בסיכון עצום בשל אחיזת התינוק (הרמה).</li>
                    <li><strong>אטיולוגיה:</strong> שימוש אינטנסיבי ותנועות חוזרות של האגודל וכף היד (כתיבה, סמארטפון). טראומה מקומית או מחלות כגון דלקת פרקים.</li>
                    <li><strong>קליניקה:</strong> כאב ורגישות בבסיס האגודל הלטראלי ובקצה עצם הרדיוס. נפיחות בתיבת ההרחה (Snuff Box), ירידה בכוח, הגבלת תנועה.
                        <br><strong>המבחן הקליני (Finkelstein Test):</strong> הכנסת האגודל לתוך אגרוף קפוץ והורדת כף היד (הטיה אולנרית) מפיקה כאב עצום.
                    </li>
                    <li><strong>טיפול:</strong> קרח, מנוחה, קיבוע, נוגדי דלקת והזרקת סטרואידים מקומית.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. אצבע הדק (Trigger Finger)</h3>
                <p>מצב שבו דלקת והיצרות של גלגלת המעטפת (A1 Pulley) לוחצת על הגיד המכופף בבסיס האצבע. נוצר "קשר" (Nodule) בגיד שמתקשה לעבור בגלגלת הצרה.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> שכיחות של 2-3%, קופצת ל-10% בחולי סוכרת. גילאי 50-60, פי 6 יותר בנשים.</li>
                    <li><strong>גורמי סיכון:</strong> אין גורם חד משמעי, אך קשור למחלות כגון: סוכרת, CTS, דה-קרווין, תת-פעילות בלוטת התריס, ו-RA.</li>
                    <li><strong>קליניקה:</strong> האצבע הנתפסת או קופצת. הגיד ננעל בזמן כיפוף, ונדרש כוח (כמו שחרור קפיץ) כדי ליישרו. תיתכן נפיחות ומגבלת תנועה חריפה, במקרים קיצוניים האצבע תנעל בכפיפה (Flexion).</li>
                    <li><strong>טיפול:</strong> הגבלת תנועה, סד, פיזיותרפיה לריכוך, זריקות קורטיקוסטרואידים להפחתת הנפיחות בגיד. במידת הצורך חיתוך כירורגי של הרצועה באצבע לפתיחת החסימה.</li>
                </ul>
            </div>
        `
    }
};