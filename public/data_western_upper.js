// ==========================================
// === קובץ data_western_upper.js (חלק 2 מתוך 3) ===
// רפואה מערבית - פתולוגיות גפה עליונה (כתף, מרפק, כף יד)
// ==========================================

Object.assign(westernData, {
    // ==========================================
    // 2. פתולוגיות של מפרק הכתף
    // ==========================================
    shoulder_pathologies: {
        title: "מפרק הכתף",
        subtitle: "אנטומיה, ביומכניקה, Rotator Cuff, SLAP, Bankart, וכתף קפואה.",
        icon: "🦴",
        color1: "#a8c0ff", 
        color2: "#3f2b96", 
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק הכתף</h2>
                
                <p>
                    <span class="img-hover-term" 
                          onclick="enlargeImage('images/ortho/sh1')" 
                          title="לחץ להגדלת התמונה">מפרק הכתף (Ball & Socket)</span>
                    הוא מפרק סינוביאלי מסוג עלי ומכתש. מאפשר את טווח התנועה הרחב ביותר בגוף, אך בשל המבנה הרדוד של השקע המפרקי הוא חשוף לחוסר יציבות ולפריקות.
                </p>
                
                <p><strong>3 עצמות עיקריות ורכיבי ייצוב:</strong></p>
                <ul>
                    <li>
                        <span class="img-hover-term" 
                              onclick="enlargeImage('images/ortho/scapula')" 
                              title="לחץ להגדלת התמונה">Scapula (עצם השכמה)</span>: 
                        כוללת את ה-Glenoid Fossa (השקע המפרקי הרדוד), ה-Acromion (שיא השכמה) וה-Coracoid Process.
                    </li>
                    <li>
                        <span class="img-hover-term" 
                              onclick="enlargeImage('images/ortho/Humerus')" 
                              title="לחץ להגדלת התמונה">Humerus (עצם הזרוע)</span>: 
                        ראש עצם הזרוע היושב בתוך השקע המפרקי וכולל את הגבשושית הגדולה והקטנה (Greater & Lesser Tuberosity).
                    </li>
                    <li>
                        <span class="img-hover-term" 
                              onclick="enlargeImage('images/ortho/Clavicle')" 
                              title="לחץ להגדלת התמונה">Clavicle (עצם הבריח)</span>: 
                        שומרת את הכתף במקומה, מחברת בין הסטרנום לאקרומיון ומונעת תזוזה מיותרת.
                    </li>
                    <li>
                        <span class="img-hover-term" 
                              onclick="enlargeImage('images/ortho/Glenoid Labrum')" 
                              title="לחץ להגדלת התמונה">הלברום (Glenoid Labrum)</span>: 
                        טבעת סחוסית סיבית המעמיקה את שקע הגלנואיד ב-50% ומשמשת נקודת אחיזה לרצועות ולגיד ה-Biceps הארוך.
                    </li>
                </ul>

                <h3 style="margin-top:25px; color:var(--ink);">שרירי ה-Rotator Cuff (שרוול המסובבים - SITS)</h3>
                <p>4 שרירים הסובבים את המפרק, מניעים אותו ומהווים את המייצבים הדינמיים החשובים ביותר של ראש ההומרוס בתוך הגלנואיד:</p>
                <table class="theory-table">
                    <tr><th>שריר</th><th>תחל (Origin)</th><th>אחז (Insertion)</th><th>פעולה עיקרית</th></tr>
                    <tr><td><strong>S</strong>upraspinatus</td><td>Supraspinous Fossa</td><td>Superior Facet (Greater Tuberosity)</td><td>הרחקה (Abduction - בעיקר ב-15° הראשונות)</td></tr>
                    <tr><td><strong>I</strong>nfraspinatus</td><td>Infraspinous Fossa</td><td>Middle Facet (Greater Tuberosity)</td><td>רוטציה חיצונית (Lateral Rotation)</td></tr>
                    <tr><td><strong>T</strong>eres Minor</td><td>Lateral Border of Scapula</td><td>Inferior Facet (Greater Tuberosity)</td><td>רוטציה חיצונית (Lateral Rotation)</td></tr>
                    <tr><td><strong>S</strong>ubscapularis</td><td>Subscapular Fossa</td><td>Lesser Tuberosity</td><td>רוטציה פנימית (Medial Rotation)</td></tr>
                </table>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של מפרק הכתף</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. פגיעות שרירי ה-Rotator Cuff ותסמונת הצביטה</h3>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> כ-30% מהאוכלוסייה יחוו כאב בכתף במהלך חייהם. ב-54% מהמדווחים הכאב הופך לכרוני. השריר הנפגע ביותר הוא ה-Supraspinatus.</li>
                    <li><strong>גורמי סיכון:</strong> טראומה (נפילות), מיקרו-טראומה מצטברת (Overuse בעבודה או בספורט מעל גובה הראש), עומס יתר, לקויות יציבה (קיפוזיס), ומחלות מטבוליות (סוכרת).</li>
                    <li><strong>קליניקה:</strong> כאב חזק בקדמת/צד הכתף, כאבי לילה קשים המפריעים לשינה על הצד הפגוע, חולשה שרירית בהרמת היד, וסימן <strong>Positive Painful Arc</strong> (קשת כאב חיובית בהרחקת היד בין 60 ל-120 מעלות).</li>
                    <li><strong>טיפול:</strong> טיפול שמרני יעיל יותר ברוב המקרים (מנוחה, קרח, פיזיותרפיה לחיזוק מייצבי שכמה, נוגדי דלקת NSAIDs, זריקות קורטיזון). ניתוח תפירה נשקל בקרעים מלאים שלא הגיבו לטיפול שמרני.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. פריקה קדמית של הכתף (Anterior Dislocation)</h3>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> הפריקה הנפוצה ביותר במפרק הכתף (90-95% מכלל הפריקות), שכיחה פי 3 בגברים, לרוב בעקבות טראומה ספורטיבית או נפילה.</li>
                    <li><strong>אטיולוגיה ומנגנון:</strong> תנוחה מסוכנת של <strong>אבדוקציה 90° + רוטציה לטרלית (חיצונית) 90°</strong>. במצב זה רק הרצועה הגלנו-הומרלית התחתונה (IGHL) מייצבת את המפרק, וכשל שלה מוביל ליציאת ראש ההומרוס קדימה.</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב חריף ופתאומי, עיוות נראה לעין (מראה "כתף מרובעת"), הגבלה מוחלטת בתנועה כשהיד מוחזקת בתמיכת היד השנייה. הטיפול כולל החזרה (Reduction) זהירה, קיבוע במתלה ושיקום פיזיותרפי ממושך.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. קרע בלברום העליון - S.L.A.P Lesion</h3>
                <p><strong>S</strong>uperior <strong>L</strong>abral <strong>A</strong>nterior and <strong>P</strong>osterior – קרע בחלק העליון של הלברום בנקודת המאחז של הראש הארוך של גיד ה-Biceps.</p>
                <ul>
                    <li><strong>גורמי סיכון:</strong> זריקת כדור מעל הראש בעוצמה (בייסבול/פוטבול/כדורעף), הרמת משקל כבד, משיכה פתאומית של היד או נפילה על יד מושטת וישרה (FOOSH). נפוץ בגילאי 30-50.</li>
                    <li><strong>קליניקה:</strong> מבחן Apprehension חיובי, תחושת קליקים/נעילה במפרק, כאב עמום ועמוק במאמץ, ובעיות בהירדמות עקב תחושת חוסר יציבות בשכיבה.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ד. נגע Bankart ונגע Hill-Sachs (סיבוכי פריקה)</h3>
                <ul>
                    <li><strong>Bankart Lesion:</strong> קרע בחלק התחתון-קדמי (Anteroinferior) של הלברום כתוצאה מפריקה קדמית של הכתף, הפוגע אנושות ביציבות הפאסיבית של המפרק ומעודד פריקות חוזרות.</li>
                    <li><strong>Hill-Sachs Lesion:</strong> חריץ או שבר דחיסה ( הדבקות קליפת העצם) בחלק האחורי-צידי (Posterolateral) של ראש עצם הזרוע (Humerus) עקב התנגשות ראש ההומרוס בשפה הקדמית הנוקשה של הגלנואיד בזמן פריקה.</li>
                    <li><strong>סיבוכים נוירו-וסקולריים:</strong> פגיעה ברשת העצבית (Brachial Plexus - במיוחד ב-Axillary Nerve) ובעורק האקסילרי – תוביל לחולשה, שיתוק של שריר הדלתואיד, אובדן תחושה בצד הכתף או שינוי צבע/קור ביד.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ה. כתף קפואה (Frozen Shoulder / Adhesive Capsulitis)</h3>
                <p>תהליך דלקתי והצטלקותי (פיברוזיס) הגורם להתעבות והתכווצות של קפסולת המפרק והרקמה הסינוביאלית.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> גילאי 40-65, שכיחה יותר בנשים. שכיחות גבוהה של <strong>10-20% בקרב חולי סוכרת</strong>. ב-14% מהחולים תופיע הפתולוגיה בשתי הכתפיים (דו-צדדית).</li>
                    <li><strong>גורמי סיכון:</strong> סוכרת, לאחר אירוע מוחי (CVA), מחלת פרקינסון, מחלות לב, הפרעות בבלוטת התריס, פריצת דיסק צווארית וקיבוע ממושך של הכתף.</li>
                    <li><strong>קליניקה (3 שלבים: Freezing &rarr; Frozen &rarr; Thawing):</strong> כאב מנוחה עז, כאבי לילה קשים, ו<strong>אובדן משמעותי של טווח תנועה הן באופן אקטיבי והן באופן פסיבי</strong> (במיוחד ברוטציה חיצונית ואבדוקציה). נמשכת לרוב 12-24 חודשים.</li>
                </ul>
            </div>
        `
    },

    // ==========================================
    // 3. פתולוגיות של מפרק המרפק
    // ==========================================
    elbow_pathologies: {
        title: "מפרק המרפק",
        subtitle: "אנטומיה, ביומכניקה, טניס אלבו, גולפרס אלבו ובורסיטיס של האולקרנון.",
        icon: "🦾",
        color1: "#1abc9c", 
        color2: "#2c3e50",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק המרפק</h2>
                <p>מפרק המרפק הוא מפרק סינוביאלי מורכב המסווג כמפרק ציר (Hinge Joint). הוא עטוף בקפסולה מפרקית ונתמך ברצועות עבות (UCL מדיאלית ו-RCL לטרלית) המספקות יציבות, ומורכב מ-3 עצמות עיקריות:</p>
                <ul>
                    <li><strong>Humerus (עצם הזרוע):</strong> בקצה הדיסטלי שלה נמצאים ה-<strong>Medial Epicondyle</strong> (אחז שרירי הפלקסורים של האמה) וה-<strong>Lateral Epicondyle</strong> (אחז שרירי האקסטנסורים של האמה). בחלקה האחורי נמצא שקע ה-Olecranon Fossa ובחלקה הקדמי ה-Coronoid Fossa.</li>
                    <li><strong>Ulna (עצם הגומד):</strong> עצם האמה הפנימית (המדיאלית, בצד הזרת). מכילה את זיז ה-<strong>Olecranon</strong> (בליטת המרפק האחורית) ואת ה-<strong>Coronoid Process</strong> (הבליטה הקדמית).</li>
                    <li><strong>Radius (עצם החישור):</strong> עצם האמה החיצונית (הלטרלית, בצד האגודל). מאפשרת תנועות סיבוביות של האמה (Supination ו-Pronation) על ידי גלגול על גבי האולנה.</li>
                </ul>

                <h3 style="margin-top:20px; color:var(--ink);">3 תתי-המפרקים במרפק וסוגי התנועה</h3>
                <ul>
                    <li><strong>Humeroulnar Joint:</strong> המפרק העיקרי לכיפוף ויישור (Flexion / Extension). קצה הזרוע (Trochlea) מתיישב בתוך ה-Trochlear Notch של האולנה. ביישור היד ה-Olecranon ננעל בשקע שלו, ובכיפוף ה-Coronoid ננעל בשקע שלו.</li>
                    <li><strong>Humeroradial Joint:</strong> החיבור בין ה-Capitulum המעוגל של ההומרוס לבין ראש הרדיוס. תומך הן בכפיפה/פשיטה והן בתנועות הפיתול.</li>
                    <li><strong>Proximal Radioulnar Joint:</strong> המפרק הפרוקסימלי בין ראש הרדיוס לאולנה (נתמך על ידי ה-Annular Ligament). מאפשר את גלגול הרדיוס מעל האולנה בביצוע Pronation (סיבוב כף היד מטה) ו-Supination (סיבוב כף היד מעלה).</li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של מפרק המרפק</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. טניס אלבו (Tennis Elbow / Lateral Epicondylitis)</h3>
                <p>תהליך דלקתי וניווני (מיקרו-קרעים) באזור התחל של גידי שרירי המדור האחורי באמה (האקסטנסורים - פושטי שורש כף היד והאצבעות), הנאחזים ב-<strong>Lateral Epicondyle</strong> של ההומרוס.</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> עומס יתר ושימוש חוזרני (Overuse) של שרירי האמה הפושטים (כמו בחבטת גב-יד בטניס, עבודה עם מברג, עכבר מחשב או הקלדה). <strong>השריר המרכזי שנפגע הוא ה-ECRB (Extensor Carpi Radialis Brevis)</strong>.</li>
                    <li><strong>אפידמיולוגיה:</strong> הפתולוגיה הנפוצה ביותר במרפק (80% ממקרי האפיקונדיליטיס). כ-40% משחקני הטניס מדווחים על כאב זה, במיוחד מעל גיל 50 (שם ב-42% הכאבים מוגדרים חמורים).</li>
                    <li><strong>קליניקה:</strong> כאב ממוקד בצד החיצוני של המרפק המקרין לאמה, <strong>מחמיר ביישור (Extension) של שורש כף היד כנגד התנגדות</strong> או במתיחה פסיבית של האקסטנסורים, חולשה באחיזה (לחיצת יד, פתיחת צנצנת), וקושי להרים חפצים כשגב כף היד פונה למעלה (Pronation).</li>
                    <li><strong>טיפול:</strong> מנוחה והורדת עומס, חבק מרפק ייעודי (Counterforce Brace) או Taping, קרח, נוגדי דלקת (NSAIDs), דיקור ופיזיותרפיה (חיזוק אקסצנטרי של האקסטנסורים).</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. גולפרס אלבו (Golfer's Elbow / Medial Epicondylitis)</h3>
                <p>דלקת ומיקרו-קרעים במוצא הגידים של שרירי המדור הקדמי באמה (הפלקסורים - מכופפי שורש כף היד והאצבעות ושריר ה-Pronator Teres), הנאחזים ב-<strong>Medial Epicondyle</strong> של ההומרוס.</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> עומס יתר מביצוע תנועות חזרתיות של <strong>כיפוף שורש כף היד (Wrist Flexion) ו-Pronation של האמה</strong>. נפוץ בשחקני גולף, ענפי זריקת כדור (בייסבול/כידון), מרימי משקולות ובעלי מקצועות ידניים (נגרים, אינסטלטורים).</li>
                    <li><strong>אפידמיולוגיה:</strong> מהווה רק כ-<strong>20% ממקרי ה-Epicondylitis</strong> (שכיח פי 4 פחות מטניס אלבו).</li>
                    <li><strong>קליניקה וטיפול:</strong> כאב ורגישות במישוש האספקט הפנימי (המדיאלי) של המרפק, <strong>המתגבר בכיפוף אקטיבי של שורש כף היד כנגד התנגדות</strong> או במתיחת הפלקסורים, ולעיתים הקרנה לזרת ולקמיצה (בשל קרבה ל-Ulnar Nerve). הטיפול זהה לטניס אלבו (מנוחה, חבק, פיזיותרפיה ונוגדי דלקת).</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. בורסיטיס של המרפק (Olecranon Bursitis - "מרפק סטודנטים")</h3>
                <p>מצב דלקתי בשק הנוזל הסינוביאלי (הבורסה) הממוקם שטחית בין העור לבליטת ה-Olecranon בחלק האחורי של המרפק, שתפקידו להפחית חיכוך ולרפד את העצם.</p>
                <ul>
                    <li><strong>אטיולוגיה:</strong> חבלה ישירה באזור האחורי של המרפק, או לחץ וחיכוך ממושכים עקב הישענות קבועה על המרפקים על משטח קשיח (ומכאן השם "מרפק סטודנטים").</li>
                    <li><strong>אפידמיולוגיה:</strong> נפוץ בעיקר בגברים בגילאי 30-60. כ-<strong>2/3 מהמקרים הם "א-ספטיים"</strong> (דלקתיים סטריליים ולא זיהומיים), בעוד 1/3 עלולים לנבוע מזיהום חיידקי (Septic Bursitis) עקב פציעה בעור.</li>
                    <li><strong>קליניקה (5 סימני הדלקת הקלאסיים):</strong>
                        <ol>
                            <li><strong>אודם מקומי (Redness / Rubor)</strong></li>
                            <li><strong>חום מקומי (Heat / Calor)</strong></li>
                            <li><strong>נפיחות בולטת (Swelling / Tumor)</strong> – מופיעה כגוש כדורי ורך ("כדור פינג-פונג") מאחורי המרפק.</li>
                            <li><strong>כאב (Pain / Dolor)</strong> – במיוחד בכיפוף עמוק של המרפק או בהישענות עליו.</li>
                            <li><strong>ירידה בתפקוד (Loss of Function / Functio Laesa)</strong></li>
                        </ol>
                    </li>
                    <li><strong>טיפול:</strong> טיפול שמרני (הימנעות מהישענות, מגן מרפק מרופד, תרופות אנטי-דלקתיות ופיזיותרפיה). במקרים עיקשים או חשד לזיהום מבוצעת שאיבת נוזל (אספירציה) ומתן אנטיביוטיקה/סטרואידים.</li>
                </ul>
            </div>
        `
    },

    // ==========================================
    // 4. פתולוגיות של מפרק כף היד
    // ==========================================
    wrist_pathologies: {
        title: "מפרק כף היד",
        subtitle: "אנטומיה, תסמונת התעלה הקרפלית (CTS), דלקת ע\"ש דה-קרווין ואצבע הדק (Trigger Finger).",
        icon: "🖐️",
        color1: "#ff9a9e", 
        color2: "#fecfef",
        content: `
            <div class="theory-box theme-box">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. אנטומיה וביומכניקה של מפרק כף היד</h2>
                <p>מפרק שורש כף היד (Wrist Joint) מאפשר תנועות גמישות ומדויקות הכוללות כפיפה (Flexion), יישור (Extension), הטיה לכיוון האגודל (Radial Deviation) והטיה לכיוון הזרת (Ulnar Deviation).</p>
                
                <h3 style="margin-top:20px; color:var(--ink);">עצמות כף היד (27 עצמות)</h3>
                <ul>
                    <li><strong>עצמות האמה הפרוקסימליות:</strong> ה-Radius (נושאת את עיקר המפרק עם שורש כף היד) וה-Ulna.</li>
                    <li><strong>8 עצמות קרפליות (Carpal Bones):</strong> עצמות שורש כף היד המסודרות בשתי שורות של 4 (שורה פרוקסימלית: Scaphoid, Lunate, Triquetrum, Pisiform; שורה דיסטלית: Trapezium, Trapezoid, Capitate, Hamate).</li>
                    <li><strong>5 עצמות המסרק (Metacarpals):</strong> ממוספרות מ-1 (אגודל) עד 5 (זרת) ומרכיבות את גוף כף היד.</li>
                    <li><strong>14 גלילים (Phalanges):</strong> עצמות האצבעות – 3 גלילים בכל אצבע (פרוקסימלי, אמצעי ודיסטלי), למעט האגודל שבו 2 גלילים בלבד.</li>
                </ul>

                <h3 style="margin-top:20px; color:var(--ink);">התעלה הקרפלית ועצבוב כף היד</h3>
                <ul>
                    <li><strong>רצועות כף היד (Retinaculums):</strong> רצועות רוחביות חזקות (Flexor Retinaculum ו-Extensor Retinaculum) השומרות על יציבות הגידים בתעלותיהם ומונעות "מיתר קשת" (Bowstringing).</li>
                    <li><strong>התעלה הקרפלית (Carpal Tunnel):</strong> מנהרה אנטומית צרה וקשיחה הממוקמת בצד הפלמרי של שורש כף היד, תחומה מלמטה ומצדדיה בעצמות הקרפליות ומלמעלה ב-<strong>Transverse Carpal Ligament (Flexor Retinaculum)</strong>. <strong>בתוך התעלה עוברים 10 מבנים: 9 גידים מכופפים (4 של ה-FDS, 4 של ה-FDP וגיד ה-FPL של האגודל) והעצב המדיאני (Median Nerve).</strong></li>
                    <li><strong>3 העצבים העיקריים של כף היד:</strong>
                        <ul>
                            <li><strong>Median Nerve (העצב המדיאני):</strong> עובר בתוך התעלה הקרפלית. מעצבב סנסורית את הצד הפלמרי של <strong>אצבעות 1 (אגודל), 2 (מורה), 3 (אמה) והחצי הרדיאלי של אצבע 4 (קמיצה)</strong>, ומוטורית את שרירי בליטת האגודל (Thenar Eminence).</li>
                            <li><strong>Ulnar Nerve (העצב האולנרי):</strong> עובר בתעלת גויון (מחוץ לתעלה הקרפלית). מעצבב את הזרת (אצבע 5) והחצי האולנרי של הקמיצה (אצבע 4), ואת רוב השרירים האינטרינזיים של כף היד.</li>
                            <li><strong>Radial Nerve (העצב הרדיאלי):</strong> מעצבב סנסורית את גב כף היד (הצד הדורסלי) ובסיס האגודל הלטרלי, ואחראי על פושטי שורש כף היד.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #d63031;">
                <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פתולוגיות של כף היד</h2>

                <h3 style="margin-top:20px; color:var(--ink);">א. תסמונת התעלה הקרפלית (Carpal Tunnel Syndrome - CTS)</h3>
                <p>תסמונת כליאה עצבית (Nerve Entrapment) שבה לחץ מוגבר בתוך התעלה הקרפלית צובט ודוחס את ה-<strong>Median Nerve</strong>.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> שכיחות של 4-5% מהאוכלוסייה, נפוצה בעיקר בגילאי 40-60, ושכיחה <strong>פי 3 יותר בקרב נשים</strong>.</li>
                    <li><strong>אטיולוגיה וגורמי סיכון:</strong> רוב המקרים אידיופתיים או מעומס תנועות חוזרניות של שורש כף היד. גורמים מבניים ומערכתיים: טראומה (שברים/נקעים בשורש כף היד), תעלה צרה גנטית, עיבוי מעטפת הגידים, <strong>סוכרת, היריון (עקב אצירת נוזלים ובצקות), דלקת מפרקים שגרונית (Rheumatoid Arthritis), והיפרתירואידיזם / תת-פעילות בלוטת התריס</strong>.</li>
                    <li><strong>קליניקה:</strong> כאב, עקצוץ ונימול (המחמירים בלילה ומעירים משינה) בשורש כף היד ובאצבעות <strong>1, 2, 3 וחצי 4</strong>. ירידה בתחושה, חולשה באחיזת צביטה (נפילת חפצים מהיד), ובשלבים מתקדמים – <strong>אטרופיה (דלדול שרירים) בבסיס האגודל (Thenar Atrophy)</strong>. מבחנים קליניים: Tinel's Sign ו-Phalen's Test חיוביים.</li>
                    <li><strong>טיפול:</strong> שמרני (מנוחה, ארגונומיה, סד לילה המקבע את שורש כף היד במנח ניטרלי, דיקור, נוגדי דלקת והזרקת סטרואידים) או ניתוח לשחרור התעלה על ידי חיתוך ה-Transverse Carpal Ligament.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ב. דלקת גידים ע"ש דה-קרווין (De Quervain's Tenosynovitis)</h3>
                <p>דלקת והיצרות במעטפת הסינוביאלית המשותפת (המדור הדורסלי הראשון) של שני גידי האגודל: <strong>APL (Abductor Pollicis Longus) ו-EPB (Extensor Pollicis Brevis)</strong>.</p>
                <ul>
                    <li><strong>אפידמיולוגיה:</strong> שכיחה <strong>פי 10 בנשים</strong> לעומת גברים, בעיקר בגילאי 30-50. <strong>נשים לאחר לידה (Postpartum) נמצאות בסיכון גבוה במיוחד</strong> בשל הרמה חוזרת של התינוק עם אגודלים פרושים ("Mommy's Thumb").</li>
                    <li><strong>אטיולוגיה:</strong> שימוש אינטנסיבי ותנועות חוזרות של האגודל והטיה רדיאלית/אולנרית של כף היד (שימוש ממושך בסמארטפון, הקלדה, גינון), טראומה מקומית או דלקת מפרקים.</li>
                    <li><strong>קליניקה ואבחון:</strong> כאב, רגישות ונפיחות בבסיס האגודל הלטרלי, מעל ה-Radial Styloid ובאזור <strong>"תיבת ההרחה האנטומית" (Anatomical Snuff Box)</strong>, ירידה בכוח הצביטה והגבלת תנועה.
                        <br><strong>מבחן פינקלשטיין (Finkelstein Test):</strong> המטופל מכניס את האגודל לתוך כף היד, סוגר עליו אגרוף ומבצע הטיה של שורש כף היד לכיוון הזרת (Ulnar Deviation) – הפקת כאב חד בבסיס האגודל מעידה על מבחן חיובי.
                    </li>
                    <li><strong>טיפול:</strong> מנוחה, קרח, קיבוע בסד ייעודי לאגודל (Thumb Spica), נוגדי דלקת (NSAIDs), פיזיותרפיה והזרקת קורטיקוסטרואידים מקומית.</li>
                </ul>

                <h3 style="margin-top:30px; color:var(--ink);">ג. אצבע הדק (Trigger Finger / Stenosing Tenosynovitis)</h3>
                <p>מצב שבו דלקת והיצרות של גלגלת המעטפת הראשונה בבסיס האצבע (<strong>A1 Pulley</strong>) לוחצת על הגיד המכופף, ונוצר <strong>"קשר" או עיבוי (Nodule)</strong> בגיד שמתקשה להחליק דרך הגלגלת הצרה.</p>
                <ul>
                    <li><strong>אפידמיולוגיה וגורמי סיכון:</strong> שכיחות של 2-3% באוכלוסייה הכללית, אך <strong>קופצת ל-10% בקרב חולי סוכרת</strong>. נפוצה בגילאי 50-60, ומופיעה <strong>פי 6 יותר בנשים</strong>. קשורה למחלות רקע כגון: סוכרת, CTS, דה-קרווין, תת-פעילות בלוטת התריס ו-Rheumatoid Arthritis.</li>
                    <li><strong>קליניקה:</strong> האצבע (לרוב הקמיצה או האגודל) "נתפסת" או "קופצת" בכיפוף, ונדרש מאמץ או עזרה של היד השנייה כדי ליישר אותה (משתחררת בפתאומיות כמו הדק של אקדח). מלווה בכאב ורגישות בבסיס האצבע הפלמרי, ובמקרים קיצוניים האצבע ננעלת במצב כפיפה (Flexion).</li>
                    <li><strong>טיפול:</strong> מנוחה, סד לקיבוע האצבע ביישור, פיזיותרפיה וחימום/עיסוי לריכוך, הזרקת קורטיקוסטרואידים להורדת הנפיחות בגיד, ובמקרים שלא מגיבים – שחרור כירורגי זעיר של רצועת ה-A1 Pulley.</li>
                </ul>
            </div>
        `
    }
});