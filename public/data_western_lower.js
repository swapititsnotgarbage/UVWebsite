// ==========================================
// === קובץ data_western_lower.js (חלק 3 מתוך 3) ===
// רפואה מערבית - פתולוגיות גפה תחתונה (ברך, קרסול, כף רגל)
// ==========================================

Object.assign(westernData, {
    // ==========================================
    // 5. פתולוגיות של מפרק הברך
    // ==========================================
    knee_pathologies: {
        title: "מפרק הברך",
        subtitle: "אנטומיה, קרעי מיניסקוס ורצועות (ACL, PCL, MCL, LCL), Osgood Schlatter, תסמונת ITB ואוסטאוארתריטיס.",
        icon: "🦵",
        color1: "#74b9ff", 
        color2: "#0984e3",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק הברך</h2>
                <p>מפרק הברך (Knee Joint) הוא אחד המפרקים הגדולים והמורכבים בגוף, הפועל כמפרק צירי (<strong>Hinge Joint</strong>) בטווח תנועה ממוצע של <strong>0° (יישור מלא - Extension) עד 135° (כיפוף מלא - Flexion)</strong>.</p>
                
                <ul>
                    <li><strong>3 עצמות ו-2 תתי-מפרקים:</strong> מפגש בין עצם הירך (<strong>Femur</strong>), עצם השוקה (<strong>Tibia</strong>) ועצם הפיקה (<strong>Patella</strong>). יוצרים שני תתי-מפרקים: <strong>Femur-Tibia Joint</strong> ו-<strong>Femur-Patella Joint</strong> (הפיבולה אינה חלק ישיר ממפרק הברך).</li>
                    <li><strong>4 רצועות הברך המרכזיות:</strong>
                        <ul>
                            <li><strong>הרצועות הצולבות (Cruciate Ligaments):</strong> <strong>ACL</strong> (קדמית) ו-<strong>PCL</strong> (אחורית) – מייצבות במישור הסגיטלי (קדימה/אחורה) וברוטציה.</li>
                            <li><strong>הרצועות הצידיות (Collateral Ligaments):</strong> <strong>MCL</strong> (מדיאלית/פנימית) ו-<strong>LCL</strong> (לטראלית/חיצונית) – מייצבות במישור הקורונלי (מונעות קריסת Valgus ו-Varus).</li>
                        </ul>
                    </li>
                    <li><strong>המניסקוסים (Meniscus Medialis & Lateralis):</strong> שני מבנים סחוסיים בצורת סהר (חצי ירח) הממוקמים בין ה-Femur ל-Tibia. <strong>תפקידיהם:</strong> 1. בלימת זעזועים; 2. פיזור עומסים שווה על משטח המפרק; 3. שיפור יציבות על ידי התאמת משטחי העצמות; 4. שימון המפרק והפחתת חיכוך לתנועה חלקה.</li>
                    <li><strong>שרירי הברך העיקריים:</strong>
                        <ul>
                            <li><strong>Quadriceps (הארבע-ראשי - Rectus Femoris, Vastus Lateralis/Medialis/Intermedius):</strong> אחראים על <strong>יישור הברך (Extension)</strong> ומספקים יציבות קדמית דרך גיד הפיקה (Patellar Tendon).</li>
                            <li><strong>Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus):</strong> אחראים על <strong>כיפוף הברך (Flexion)</strong> ותורמים ליציבות אחורית.</li>
                        </ul>
                    </li>
                    <li><strong>התפלגות כאבי ופגיעות ברכיים (מופיעים ב-20% מהאוכלוסייה הבוגרת):</strong> פגיעות ברצועות (<strong>40%</strong>), פגיעות בפיקה (<strong>24%</strong>), פגיעות במיניסקוס (<strong>11%</strong>), ופגיעות אחרות (<strong>25%</strong>).</li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פגיעות טראומטיות ומבניות (מיניסקוס ורצועות)</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. פגיעה במיניסקוס (Meniscus Tear)</h3>
                <ul>
                    <li><strong>אטיולוגיה וסוגי קרעים:</strong> נגרמת מתנועות סיבוביות חדות תחת נשיאת משקל וכיפוף (Flexion), חבלה ישירה, יציבה לקויה (קריסת ברך פנימה), או שחיקה ניוונית מעל גיל 50. הקרע יכול להופיע בקרן הקדמית, האחורית או בגוף המיניסקוס (סוגי קרעים: Longitudinal, Radial, Horizontal, Bucket Handle, Parrot Beak, Flap). המיניסקוס המדיאלי נפגע יותר מהלטראלי.</li>
                    <li><strong>קליניקה וטיפול:</strong> <strong>נפיחות בינונית המתפתחת הדרגתית (תוך מספר שעות)</strong>, כאב המחמיר בנשיאת משקל ובכריעה, הגבלת טווח תנועה ותחושת "נעילה" של הברך. אבחון ב-MRI. טיפול שמרני (R.I.C.E ב-72 השעות הראשונות, NSAIDs, פיזיותרפיה) או כירורגי ב<strong>ארתרוסקופיה (Knee Arthroscopy)</strong> לתפירת הקרע או הטריית החלק הקרוע.</li>
                </ul>

                <h3 style="margin-top:25px; color:var(--ink);">ב. השוואת פגיעות ב-4 רצועות הברך</h3>
                <table class="theory-table">
                    <tr><th>רצועה ושכיחות</th><th>תפקיד ביומכני</th><th>מנגנון פציעה אופייני</th><th>קליניקה, אבחון וטיפול</th></tr>
                    <tr>
                        <td><strong>ACL (צולבת קדמית)</strong><br>46% מפגיעות הרצועות (20% מכלל פגיעות הברך)</td>
                        <td>מניעת החלקת ה-Tibia קדימה ביחס ל-Femur ושמירה על יציבות סיבובית.</td>
                        <td><strong>רוטציה פנימית חדה של הברך כשכף הרגל מקובעת לקרקע (Dynamic Valgus)</strong>, שינויי כיוון פתאומיים, נחיתה מקפיצה או בלימה חדה – לרוב ללא מגע ישיר (Non-Contact).</td>
                        <td>תחושת או שמיעת <strong>"קליק" / "Pop"</strong>, <strong>נפיחות משמעותית ומהירה מאוד</strong> (דימום תוך-מפרקי), כאב בנשיאת משקל, ו<strong>מבחן מגירה קדמי חיובי (Positive Anterior Drawer Test)</strong>. טיפול: שמרני או ניתוח שחזור ACL (שיקום ארוך של <strong>6-9 חודשים</strong>).</td>
                    </tr>
                    <tr>
                        <td><strong>PCL (צולבת אחורית)</strong><br>4% מפגיעות הרצועות</td>
                        <td>מניעת תנועה אחורית של ה-Tibia ביחס ל-Femur ומניעת רוטציה חיצונית.</td>
                        <td>חבלה ישירה בחלק הקדמי של השוק כשהברך כפופה (<strong>Dashboard Injury</strong> בתאונת דרכים, או בסקי/כדורגל), או כוח הגורם ליישור יתר (Hyperextension).</td>
                        <td>כאב קל ומפושט, סימן חבלה בקדמת השוק, דימום מינימלי, ו<strong>מבחן מגירה אחורי חיובי (Positive Posterior Drawer Test)</strong>. בשיקום שמרני: <strong>חובה להימנע מתרגילי שרשרת תנועה פתוחה (OKC - Open Kinematic Chain) לשרירי ה-Hamstrings!</strong></td>
                    </tr>
                    <tr>
                        <td><strong>MCL (צידית מדיאלית)</strong><br>29% מפגיעות הרצועות</td>
                        <td>מניעת תנועה מוגזמת של ה-Tibia כלפי פנים / קריסת הברך פנימה (<strong>Valgus Stress</strong>).</td>
                        <td>מכה בחלק החיצוני של הברך הדוחפת אותה פנימה (כוח Valgus) בזמן נשיאת משקל. מחולקת ל-3 דרגות (1: מתיחה, 2: קרע חלקי, 3: קרע מלא).</td>
                        <td>כאב, רגישות ונפיחות באספקט המדיאלי של הברך, הגבלה ב-Flexion וחוסר יציבות מדיאלי. לרוב טיפול שמרני (R.I.C.E, מגן ברך, פיזיותרפיה) משום שלרצועה אספקת דם טובה.</td>
                    </tr>
                    <tr>
                        <td><strong>LCL (צידית לטראלית)</strong><br>2% מפגיעות הרצועות (נדירה)</td>
                        <td>מניעת תנועה מוגזמת של ה-Tibia כלפי חוץ (<strong>Varus Stress</strong>).</td>
                        <td>מכה בחלק הפנימי של הברך הדוחפת אותה החוצה (כוח Varus) בזמן Flexion. לרוב חלק מפגיעה רב-רצועתית.</td>
                        <td>כאב ונפיחות קלה בצד החיצוני של הברך, תחושת נעילה. <strong>סיבוך ייחודי: מתיחה של ה-Peroneal Nerve</strong> העובר סמוך לרצועה – יגרום לנימול/תרדמת בצד החיצוני של השוק עד כף הרגל ( ואף ל-Drop Foot).</td>
                    </tr>
                </table>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">3. פתולוגיות מעומס יתר ומצבים ניווניים בברך</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. מחלת אוסגוד-שלטר (Osgood-Schlatter Disease)</h3>
                <p>גירוי, דלקת ומיקרו-שברים (Apophysitis) בנקודת החיבור שבין גיד הפיקה (Patellar Tendon) לבין בליטת ה-<strong>Tibial Tuberosity</strong> בחלק הקדמי-עליון של השוקה.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> פתולוגיה של <strong>ילדים ובני נוער בתקופת צמיחה מהירה (גילאי 8-12 בבנות, 10-15 בבנים)</strong>. שכיחה <strong>פי 3 בבנים</strong> מאשר בבנות, ו<strong>פי 4 בספורטאים</strong> (במיוחד בענפי קפיצות, ריצות ושינויי כיוון).</li>
                    <li><strong>פתוגנזה וקליניקה:</strong> משיכה חוזרת של שריר ה-Quadriceps על גיד הפיקה גורמת לתלישה מיקרוסקופית של לוחית הצמיחה הסחוסית ב-Tibial Tuberosity (שטרם התגרמה). הגוף בונה עצם חדשה באזור ונוצרת <strong>בליטה גרמית קבועה ורגישה למגע</strong>, מלווה בנפיחות, חום וכאב המחמיר בריצה, קפיצה ועליית מדרגות.</li>
                    <li><strong>טיפול:</strong> שמרני (<strong>יעיל ב-90% מהמקרים</strong>) – הפחתת עומסים והתאמת הפעילות הספורטיבית, פיזיותרפיה (מתיחות לארבע-ראשי), קרח ונוגדי דלקת. חולף מעצמו עם סגירת לוחיות הגדילה.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. תסמונת הרצועה האיליו-טיביאלית (ITBS - Iliotibial Band Syndrome)</h3>
                <p>תהליך דלקתי הנובע מעומס יתר וחיכוך חוזר של ה-Iliotibial Band (פס פאציה רחב הנמשך מהאגן ושריר ה-TFL וה-Gluteus Maximus לאורך הצד החיצוני של הירך עד ל-Tibia).</p>
                <ul>
                    <li><strong>ביומכניקה ופתוגנזה:</strong> ה-ITB אינה מקובעת לעצם בחלקה התחתון ולכן נעה קדימה ב-Extension ואחורה ב-Flexion. במהלך ריצה או רכיבה, במעבר מכיפוף ליישור (במיוחד סביב 30° כיפוף בעת מגע הרגל בקרקע), החלק האחורי של הרצועה <strong>מתחכך באופן חוזרני ב-Lateral Epicondyle of Femur</strong> ויוצר דלקת.</li>
                    <li><strong>אפידמיולוגיה וגורמי סיכון:</strong> <strong>הגורם השכיח ביותר לכאבי ברך לטראליים</strong> (מהווה 12% מכלל פציעות הריצה, נפוץ ברצים, רוכבי אופניים ומתאמנים המבצעים Squats ו-Lunges). גורמי סיכון: חוסר איזון בשרירי האגן והירך (חולשת מרחיקי ירך), עקמת (Scoliosis), ברכי Varus/Valgus, הבדל באורך רגליים וריצה על משטח משופע.</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב חד או שורף באספקט החיצוני (הלטראלי) של הברך מעל ה-Lateral Epicondyle, תחושת החלקה/קליק של הרצועה ונפיחות דיסטלית. הטיפול כולל R.I.C.E, עיסוי ושחרור פאציה, מתיחות ל-ITB ופיזיותרפיה לחיזוק שרירי האגן.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. אוסטאוארתריטיס של הברך (Knee Osteoarthritis - OA)</h3>
                <p>מחלה מפרקית ניוונית (שחיקת סחוס) המאופיינת בהרס הדרגתי של הסחוס המפרקי, היצרות המרווח המפרקי, יצירת זיזי עצם (Osteophytes) ודלקת מקומית.</p>
                <ul>
                    <li><strong>אפידמיולוגיה וגורמי סיכון:</strong> הפתולוגיה המפרקית הנפוצה ביותר בגיל המבוגר – מופיעה ב-<strong>30% בגילאי 45-64</strong>, וב-<strong>60% מעל גיל 64</strong>. הסיכון בנשים <strong>גבוה ב-45%</strong> לעומת גברים. גורמי סיכון: גיל, מין נשי, גנטיקה, <strong>BMI גבוה (השמנת יתר)</strong>, פציעות ברך קודמות (כמו קרע ACL/מיניסקוס) ועבודה הדורשת כיפופים חוזרים.</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב המתגבר תחת נשיאת משקל, נוקשות בוקר (המשתפרת בתנועה קלה), נפיחות, חום מקומי, חריקות (Crepitus) ודפורמציה של הברך (רגלי O / Varus). טיפול שמרני: ירידה במשקל, פיזיותרפיה לחיזוק שרירים, גירוי חשמלי, מגן ברך ו-NSAIDs. במקרים מתקדמים: <strong>ניתוח החלפת מפרק ברך (TKR)</strong>.</li>
                </ul>
            </div>
        `
    },

    // ==========================================
    // 6. פתולוגיות של מפרק הקרסול
    // ==========================================
    ankle_pathologies: {
        title: "מפרק הקרסול",
        subtitle: "אנטומיה, נקעים (דרגות ומנגנונים), אי-יציבות כרונית, שברי Jones ו-Talar Dome, בורסיטיס ודלקת גיד אכילס.",
        icon: "🦶",
        color1: "#fab1a0", 
        color2: "#e17055",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק הקרסול</h2>
                <p>מפרק הקרסול (Ankle Joint) משמש כממשק נושא משקל בין השוק לכף הרגל ופועל כמפרק ציר (Hinge Joint).</p>
                
                <ul>
                    <li><strong>עצמות המפרק ותתי-המפרקים:</strong>
                        <ul>
                            <li><strong>Tibia (עצם השוקה):</strong> העצם הגדולה הנושאת את רוב משקל הגוף; יוצרת בצד הפנימי את הפטישון המדיאלי (<strong>Medial Malleolus</strong>).</li>
                            <li><strong>Fibula (עצם השוקית):</strong> העצם הצידית הדקה המשמשת לאחיזת שרירים ורצועות; יוצרת בצד החיצוני את הפטישון הלטראלי (<strong>Lateral Malleolus</strong>).</li>
                            <li><strong>Talus (עצם הערקום):</strong> עצם הקרסול המרכזית היושבת מתחת לטיביה ולפיבולה (יוצרת עמן את מפרק הקרסול האמיתי – <strong>Talo-Crural Joint</strong>) ומעל לעצם העקב (<strong>Calcaneus</strong>, עמה היא יוצרת את ה-<strong>Sub-Talar Joint</strong> לבלימת זעזועים והתאמה למשטחים).</li>
                        </ul>
                    </li>
                    <li><strong>מערכת הרצועות המייצבות את הקרסול:</strong>
                        <ul>
                            <li><strong>רצועות לטראליות (חיצוניות):</strong> <strong>ATFL</strong> (Anterior Talofibular - הנפגעת ביותר בנקעים!), <strong>PTFL</strong> (Posterior Talofibular), ו-<strong>CFL</strong> (Calcaneofibular).</li>
                            <li><strong>רצועה מדיאלית (פנימית):</strong> <strong>Deltoid Ligament</strong> – רצועה מניפתית רחבה וחזקה מאוד המייצבת את הצד המדיאלי.</li>
                            <li><strong>רצועות הסינדסמוזיס (Syndesmotic Ligaments):</strong> <strong>AITFL</strong> ו-<strong>PITFL</strong> המחברות בין הטיביה לפיבולה הדיסטליות (נפגעות ב"נקע גבוה" - High Ankle Sprain).</li>
                        </ul>
                    </li>
                    <li><strong>סוגי התנועה והשרירים הפועלים בקרסול:</strong>
                        <ul>
                            <li><strong>Plantar-Flexion (פשיטה כפית - עמידה על קצות האצבעות):</strong> מבוצעת על ידי שרירי ה-<strong>Gastrocnemius וה-Soleus (Triceps Surae)</strong> המתחברים לעקב דרך גיד אכילס.</li>
                            <li><strong>Dorsi-Flexion (כפיפה גבית - הרמת גב כף הרגל מעלה):</strong> מבוצעת על ידי ה-<strong>Tibialis Anterior</strong>.</li>
                            <li><strong>Inversion (סיבוב כף הרגל פנימה):</strong> מבוצעת על ידי ה-<strong>Tibialis Anterior וה-Tibialis Posterior</strong>.</li>
                            <li><strong>Eversion (סיבוב כף הרגל החוצה):</strong> מבוצעת על ידי השרירים הפרונאליים – <strong>Peroneus Longus & Peroneus Brevis</strong>.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. נקעים בקרסול (Ankle Sprains) ונקעים חוזרים</h2>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> הפציעה הנפוצה ביותר בגפה התחתונה! מהווה <strong>10-15% מכלל פציעות הספורט</strong> ו-50% בענפים הדורשים זריזות ושינויי כיוון. הסיכון ב<strong>נשים גבוה פי 2</strong> מבגברים. ב-<strong>89% מהמקרים מתפתחת Osteochondral Lesion</strong> (פגיעה בסחוס ובעצם של ה-Talus).</li>
                    <li><strong>פתוגנזה ומנגנוני הפציעה:</strong>
                        <ul>
                            <li><strong>נקע לטראלי (הנפוץ ביותר - כ-85%):</strong> מתרחש בתנועה חדה של <strong>Inversion + Plantar-Flexion</strong> (למשל בנחיתה מקפיצה או דריכה בבור), ופוגע ברצועות החיצוניות (ראשית ב-ATFL ובהמשך ב-CFL).</li>
                            <li><strong>נקע מדיאלי:</strong> מתרחש בתנועה של <strong>Eversion + Dorsi-Flexion</strong> ופוגע ברצועה הדלטואידית (Deltoid Ligament).</li>
                        </ul>
                    </li>
                    <li><strong>גורמים תורמים לנקע:</strong> מבנה Rear Foot Varus, קשת גבוהה (Pes Cavus), לקות בשליטה שרירית ועצבית (פרופריוספציה), משטח לא אחיד, פציעות קודמות, הנעלה לא מתאימה וקיצור גיד אכילס.</li>
                </ul>

                <h3 style="margin-top:20px; color:var(--ink);">טבלת 3 דרגות החומרה של נקע בקרסול</h3>
                <table class="theory-table">
                    <tr><th>מאפיין קליני</th><th>דרגה 1 (Grade 1 - קל)</th><th>דרגה 2 (Grade 2 - בינוני)</th><th>דרגה 3 (Grade 3 - חמור)</th></tr>
                    <tr><td><strong>נזק אנטומי</strong></td><td>מתיחה וקרעים מיקרוסקופיים ברצועה</td><td>קרע חלקי של הרצועה</td><td>קרע מלא של הרצועה</td></tr>
                    <tr><td><strong>מבחן מגירה קדמי</strong></td><td>שלילי (-)</td><td>חיובי קל עד בינוני</td><td>חיובי מובהק (+) – חוסר יציבות</td></tr>
                    <tr><td><strong>נשיאת משקל (WB)</strong></td><td>מלאה עם צליעה קלה</td><td>קושי בנשיאת משקל, צליעה בינונית-קשה</td><td>חוסר יכולת לשאת משקל כלל</td></tr>
                    <tr><td><strong>תפקוד וטווח תנועה</strong></td><td>הליכה ואימונים קלים עם חבישה</td><td>חוסר יכולת לרוץ, הגבלה בתנועה</td><td>איבוד טווח תנועה מיידי ונפיחות קשה</td></tr>
                    <tr><td><strong>משך שיקום צפוי</strong></td><td><strong>עד 10 ימים</strong></td><td><strong>עד 21 ימים</strong></td><td><strong>עד 60 ימים</strong></td></tr>
                </table>

                <h3 style="margin-top:20px; color:var(--ink);">נקעים חוזרים ואי-יציבות כרונית</h3>
                <ul>
                    <li><strong>הגדרה ואפידמיולוגיה:</strong> נקע המתרחש שוב בתוך <strong>עד 6 חודשים</strong> מהפציעה הקודמת. <strong>73% מהאנשים שחוו נקע יחוו לפחות נקע נוסף בחייהם</strong>,40% יפתחו אי-יציבות כרונית, ו-59% ידווחו על ירידה תפקודית ארוכת טווח.</li>
                    <li><strong>אטיולוגיה וטיפול:</strong> נובע מרפיון רצועות, חולשת שרירי הקרסול והאגן, ופגיעה בתחושה הפרופריוספטיבית (יופיע <strong>מבחן מגירה קדמי חיובי</strong>). הטיפול בשלב האקוטי (72 שעות ראשונות) הוא R.I.C.E, ובהמשך הפעלה מוקדמת, <strong>תרגול פרופריוספטיבי (שיווי משקל על משטחים לא יציבים)</strong>, חיזוק פונקציונלי וחבישה/מגן קרסול (או ניתוח קיבוע במקרים קשים).</li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">3. שברים ודלקות במפרק הקרסול</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. 3 שברים אופייניים באזור הקרסול</h3>
                <ul>
                    <li><strong>שבר ג'ונס (Jones Fracture):</strong> שבר בבסיס הפרוקסימלי של עצם המסרק ה-5 (<strong>5th Metatarsal</strong> - באזור עם אספקת דם דלה, להבדיל משבר תלישה Avulsion או שבר מאמץ דיסטלי). נגרם מתנועה סיבובית או נטיית כף הרגל פנימה (Inversion) בריצה או קפיצה. נפוץ באתלטים ובאצנים (שכיחות זהה בגברים ונשים). מתבטא בכאב מקומי ממושך המחמיר בנשיאת משקל ונפיחות. <strong>טיפול:</strong> גבס/מגף ו<strong>הימנעות מנשיאת משקל ל-6-8 שבועות</strong> (או ניתוח אם אין איחוי).</li>
                    <li><strong>שבר בפיבולה הדיסטלית (Distal Fibula Fracture):</strong> שבר בפטישון החיצוני או בגובה הסינדסמוזיס עקב טראומה או פיתול חד של הרגל (לעיתים מלווה בפגיעה בסינדסמוזיס או בשבר משולש Volkmann בטיביה). מתבטא בנפיחות משמעותית וכאב בנשיאת משקל. <strong>טיפול:</strong> גבס ל-6-8 שבועות או קיבוע ניתוחי.</li>
                    <li><strong>שבר בכיפת הטלוס (Talar Dome Fracture):</strong> שבר במשטח המפרקי העליון של עצם ה-Talus עקב העברת כוח דחיסה חזק מה-Tibia אל הסחוס והעצם של הטלוס (בנפילה מגובה או נקע קשה). מהווה <strong>6.75% מכלל הנקעים בקרסול, אך 81% מהמקרים מפוספסים ומאובחנים באיחור!</strong> (צילום רנטגן ראשוני לרוב תקין, ונדרש CT/MRI או מיפוי עצמות לשלילת נמק AVN). אופייני בגילאי 10-30 ומתבטא בחוסר תגובה לטיפול בנקע, נוקשות ו<strong>נעילות חוזרות של הקרסול</strong>. <strong>טיפול:</strong> שמרני בקיבוע ללא נשיאת משקל ל-<strong>6-16 שבועות</strong>, או כירורגי אם התנתקה חתיכת עצם.</li>
                </ul>

                <h3 style="margin-top:25px; color:var(--ink);">ב. בורסיטיס של העקב (Calcaneal Bursitis)</h3>
                <ul>
                    <li><strong>2 הבורסות המעורבות:</strong> 1. <strong>Retrocalcaneal Bursa</strong> (בין גיד אכילס לעצם ה-Calcaneus); 2. <strong>Subcutaneous Calcaneal Bursa</strong> (שטחית יותר, בין החלק הדיסטלי של גיד אכילס לעור העקב).</li>
                    <li><strong>פתוגנזה, אוכלוסיות סיכון וקליניקה:</strong> חיכוך ולחץ מתמשכים של גיד אכילס או הנעל מול עצם העקב. נפוץ באתלטים (רצים/קופצים) וב<strong>אוכלוסייה הנועלת נעלי עקב גבוהות לאורך זמן</strong>. מתבטא בכאב, נפיחות ואודם באספקט האחורי של העקב, ש<strong>מתגברים בהליכה/ריצה בעלייה ובזמן עלייה על קצות האצבעות</strong>. טיפול: מתיחות עדינות, קרח, התאמת נעל/מדרס ו-NSAIDs.</li>
                </ul>

                <h3 style="margin-top:25px; color:var(--ink);">ג. דלקת בגיד אכילס (Achilles Tendinitis)</h3>
                <ul>
                    <li><strong>פתוגנזה וגורמי סיכון:</strong> עומס יתר, כוחות מתיחה פתאומיים, שינויים חדים בעומסי האימון, טכניקה לקויה או ריצה על משטחים קשיחים/לא ישרים היוצרים <strong>קרעים מיקרוסקופיים ברקמת הגיד</strong>. ללא מנוחה, הדלקת עלולה להחמיר לניוון (Tendinosis) ועד ל<strong>קרע מלא של גיד אכילס (Rupture)</strong>.</li>
                    <li><strong>קליניקה וטיפול:</strong> חום מקומי, <strong>התעבות של הגיד</strong> ורגישות למגע ממרכז הגיד ועד מעל האחיזה לעקב. הכאב מחמיר בהליכה/ריצה ובמיוחד <strong>בדריכות הראשונות בשעות הבוקר</strong>. טיפול: הורדת עומס, מתיחות עדינות, קרח, הגבהת עקב/מדרסים, שיפור יציבה ונוגדי דלקת.</li>
                </ul>
            </div>
        `
    },

    // ==========================================
    // 7. פתולוגיות של מפרק כף הרגל
    // ==========================================
    foot_pathologies: {
        title: "מפרק כף הרגל",
        subtitle: "אנטומיה של כף הרגל, דורבן (Plantar Fasciitis), מורטון נוירומה ובוהן קלובה (Hallux Valgus).",
        icon: "👟",
        color1: "#ffeaa7", 
        color2: "#fdcb6e",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרקי כף הרגל</h2>
                <p>כף הרגל נושאת את משקל הגוף, בולמת זעזועים ומעבירה כוחות בהליכה ובריצה. היא מורכבת מ-26 עצמות, מפרקים רבים, רצועות ושרירים:</p>
                <ul>
                    <li><strong>7 עצמות הטרסוס (Tarsal Bones):</strong> <strong>Calcaneus</strong> (עצם העקב), <strong>Talus</strong> (ערקום), <strong>Navicular</strong> (עצם הסירה), <strong>Cuboid</strong> (עצם הקובייה), ו-3 עצמות ה-<strong>Cuneiforms</strong> (עצמות הטריז: מדיאלית, אמצעית ולטראלית).</li>
                    <li><strong>5 עצמות המסרק (Metatarsals) ו-14 גלילים (Phalanges).</strong></li>
                    <li><strong>תתי-המפרקים העיקריים:</strong> Ankle Joint, Sub-Talar Joint, Talonavicular, Calcaneocuboid, Tarso-Metatarsal Joints, Metatarsophalangeal (MTP) Joints, ו-Interphalangeal (PIP & DIP) Joints.</li>
                    <li><strong>שרירי כף הרגל העיקריים:</strong> שרירים אקסטרינזיים (Tibialis Anterior, Tibialis Posterior, Flexor Digitorum Longus, Flexor Hallucis Longus, Extensor Hallucis/Digitorum Longus, Peroneals) ו<strong>שרירים אינטרינזיים (Intrinsic Muscles of the Foot)</strong> השומרים על קשתות כף הרגל.</li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של כף הרגל</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. דורבן / דלקת החיתולית הכפית (Plantar Fasciitis)</h3>
                <p>הרצועה הפלנטרית (Plantar Fascia) נמתחת מעצם העקב (Calcaneus) לאצבעות, תומכת בקשת האורכית של כף הרגל, מונעת את קריסתה ומשמשת כבולם זעזועים. עומס חוזר גורם ל<strong>מיקרו-קרעים ברצועה ולתהליך דלקתי וניווני בחיבורה לעקב</strong>.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> <strong>10-15% מהאוכלוסייה</strong> יסבלו מדורבן במהלך חייהם. שכיח ב-<strong>8-10% מהאצנים</strong>, נפוץ בגילאי הביניים ו<strong>שכיח יותר בנשים</strong> (עקב נעלי עקב). מהווה <strong>40% מכלל הפניות למרפאות אורתופדיות בשל כאבים בכף הרגל!</strong></li>
                    <li><strong>פתוגנזה וגורמי סיכון:</strong> עומס יתר (Overuse בעמידה ממושכת או ריצה), מבנה כף רגל לקוי – הן <strong>פלטפוס (Pes Planus / Flat Foot)</strong> והן <strong>קשת גבוהה (Pes Cavus / High Arch)</strong>, והנעלה ללא תמיכה מספקת בקשת או נעלי עקב.</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב ממוקד וחד בעקב הנמשך בממוצע חצי שנה ומעלה, <strong>מופיע בעוצמה מרבית בדריכות הראשונות בבוקר</strong> (או בקימה מישיבה ממושכת) ומתגבר בנשיאת משקל. <strong>טיפול שמרני (90% הצלחה!):</strong> בקרת עומסים, מדרסים תומכי קשת והנעלה מתאימה, ומתיחות לרצועה הפלנטרית ולשרירי התאומים/אכילס.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. מורטון נוירומה (Morton's Neuroma)</h3>
                <p>התעבות שפירה של רקמת החיבור (<strong>Perineural Fibrosis</strong>) סביב אחד מענפי העצב הפלנטרי הדיגיטלי העובר בין ראשי עצמות המסרק, <strong>לרוב במרווח שבין ראשי ה-Metatarsal ה-3 וה-4</strong> (ולעיתים בין ה-2 ל-3).</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> נשים נפגעות <strong>פי 4 יותר מגברים (יחס 4:1)</strong>, שכיח במיוחד בגילאי 50-60 ובקרב אנשים המרבים לעמוד, ללכת או לרוץ.</li>
                    <li><strong>פתוגנזה וגורמי סיכון:</strong> לחץ מכני כרוני וגירוי חוזרני של העצב בין ראשי המטטרסוס (בעיקר עקב <strong>נעילת נעליים צרות בקדמתן ונעלי עקב גבוהות</strong> הדוחסות את ראשי המסרק זה לזה) מובילים לדלקת כרונית, הצטלקות ולכידת העצב.</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב מקומי שורף בקדמת כף הרגל (Forefoot), תחושת דריכה על "אבן בנעל", ו<strong>נימול (Numbness) או עקצוץ המקרינים לאצבעות</strong>. מחמיר בנעליים צרות ובעמידה/ריצה, ו<strong>מוקל משמעותית עם חליצת הנעל ועיסוי האזור</strong>. טיפול: מעבר לנעליים רחבות, מדרסים עם תמיכה מטטרסלית (Metatarsal Pad) לפיזור העומס, פיזיותרפיה, NSAIDs או הזרקת קורטיזון מקומית.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. בוהן קלובה (Hallux Valgus / Bunion)</h3>
                <p>דפורמציה (עיוות מבני) פרוגרסיבית במפרק ה-MTP הראשון, שבה <strong>הבוהן הגדולה (Hallux) סוטה לכיוון לטראלי</strong> (לעבר האצבע השנייה), ובמקביל <strong>עצם המסרק הראשונה (1st Metatarsal) סוטה לכיוון מדיאלי</strong> ויוצרת בליטה גרמית בולטת בצד הפנימי של כף הרגל (<strong>Bunion</strong>).</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> מופיעה ב-<strong>23% מהאוכלוסייה בגילאי 18-65</strong>, ועולה ל-<strong>35.7% בבני 65 ומעלה</strong>. נפוצה <strong>פי 2 בקרב נשים</strong> לעומת גברים (יחס 2:1).</li>
                    <li><strong>פתוגנזה וגורמי סיכון:</strong> תורשה וגנטיקה, גמישות יתר של הרצועות והשרירים המייצבים את עצם המסרק הראשונה, יציבה וביומכניקה לקויה (קריסת קשת / פרונציית יתר), ו<strong>הנעלה לקויה (נעלי שפיץ צרות ונעלי עקב)</strong>.</li>
                    <li><strong>קליניקה וטיפול:</strong> דפורמציה בולטת וסימני דלקת מקומית מעל בליטת ה-Bunion (נפיחות, חום, אודם וכאב כתוצאה מחיכוך עם הנעל), ואבחון בצילום רנטגן. <strong>עקרון חשוב בטיפול השמרני:</strong> הפחתת העומס תבוצע <strong>פרוקסימלית למפרק ולא במפרק עצמו</strong>! הטיפול כולל התאמת נעליים רחבות, מדרסים, פיזיותרפיה לשיפור יציבה, Taping, קרח, ובמקרים חמורים – ניתוח לתיקון ציר העצם (Osteotomy).</li>
                </ul>
            </div>
        `
    }
});