// ==========================================
// === קובץ data_book_maciocia_4.js (חלקים 2ג' + 3) ===
// The Foundations of Chinese Medicine - Giovanni Maciocia (3rd Ed.)
// פרקים 15-22: איברי ה-Yang, איברי היאנג המיוחדים וגורמי המחלה
// ==========================================

if (typeof maciociaBookData !== 'undefined') {
    Object.assign(maciociaBookData, {
        // ==========================================
        // פרק 15: תפקודי המעי הגס (The Large Intestine - 大肠)
        // ==========================================
        ch15_large_intestine: {
            title: "פרק 15: תפקודי המעי הגס (Large Intestine - 大肠)",
            subtitle: "מעבר והולכת פסולת, ספיגת נוזלים ויצירת צואה, היכולת 'לשחרר' (Letting Go) והקשר ההדוק לריאות.",
            icon: "🌀",
            color1: "#b2bec3",
            color2: "#636e72",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. התפקודים המרכזיים של המעי הגס</h2>
                    <p>המעי הגס הוא איבר ה-Yang המזווג לריאות (אלמנט המתכת). הוא מקבל מהמעי הדק את שאריות המזון והנוזלים העכורים לאחר הפרדת הטהור מהעכור.</p>
                    <ul>
                        <li><strong>1. שולט במעבר ובהולכה (Controls Passage and Conduction):</strong> מוליך מטה את תוצרי הפסולת של מערכת העיכול ומפריש אותם החוצה דרך פי הטבעת.</li>
                        <li><strong>2. מתמיר צואה וסופג נוזלים מחדש (Transforms Stools and Reabsorbs Fluids):</strong> סופג חזרה את שארית הנוזלים מתוך העיסה העכורה ומגבש צואה בעלת מרקם תקין.
                            <ul>
                                <li>אם חום או יובש פוגעים במעי הגס &larr; ספיגת יתר של נוזלים ו<strong>עצירות עם צואה יבשה</strong>.</li>
                                <li>אם לחות, קור או חולשת צ'י/יאנג פוגעים בספיגה &larr; <strong>שלשול או יציאות רכות</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. היבט מנטלי, חלומות והקשר לריאות</h2>
                    <ul>
                        <li><strong>היבט מנטלי (Mental Aspect):</strong> בדומה לריאות ולנשמת ה-Po, המעי הגס קשור ליכולת הרגשית <strong>"לשחרר" (Letting Go)</strong> – להרפות מרגשות ישנים, טינה ודאגות. חוסר יכולת רגשית לשחרר מתבטאת לעיתים קרובות בעצירות כרונית.</li>
                        <li><strong>חלומות:</strong> חוסר במעי הגס גורם לחלומות על שדות פתוחים ומרחבים.</li>
                        <li><strong>הקשר עם הריאות (Lungs):</strong> יחסי פנים-חוץ הדוקים. <strong>הורדת צ'י הריאות מטה</strong> מספקת למעי הגס את הדחיפה הדרושה להתרוקנות (ולכן קשישים עם חולשת צ'י הריאות סובלים מעצירות). מנגד, עצירות ותקיעות במעי הגס עלולות לחסום את ירידת צ'י הריאות ולגרום לקוצר נשימה.</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרק 16: תפקודי כיס המרה (The Gall Bladder - 胆)
        // ==========================================
        ch16_gall_bladder: {
            title: "פרק 16: תפקודי כיס המרה (Gall Bladder - 胆)",
            subtitle: "אחסון והפרשת מרה, שליטה בהחלטיות ובאומץ, הזנת הגידים, חלומות והקשר הישיר לכבד וללב.",
            icon: "🟢",
            color1: "#00b894",
            color2: "#00cec9",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. התפקודים המרכזיים של כיס המרה</h2>
                    <p>כיס המרה תופס מקום ייחודי בקרב איברי ה-Yang: בניגוד לשאר איברי ה-Fu המקבלים מזון ופסולת, כיס המרה <strong>מאחסן נוזל טהור ומזוקק – המרה (Bile)</strong> – ולכן נכלל גם בקבוצת "ששת איברי היאנג המיוחדים".</p>
                    <ul>
                        <li><strong>1. מאחסן ומפריש מרה (Stores and Excretes Bile):</strong> מקבל מרה מהכבד, מאחסן אותה ומפריש אותה למעי הדק לצורך עיכול שומנים. תפקוד זה תלוי לחלוטין בזרימה החלקה של צ'י הכבד. חסימה בהפרשת המרה (לחות חמה או תקיעות צ'י הכבד) גורמת ל<strong>טעם מר בפה, גיהוקים, בחילות, קושי בעיכול שומנים וצהבת (Jaundice)</strong>.</li>
                        <li><strong>2. שולט בהחלטיות ובאומץ (Controls Decisiveness):</strong> בעוד הכבד אחראי על תכנון ואסטרטגיה, כיס המרה מעניק את <strong>האומץ, היוזמה והנחישות להוציא החלטות לפועל</strong> ("כיס מרה חזק הופך את האדם לאמיץ"). חולשת כיס מרה גורמת להססנות, ביישנות, פחדנות, חוסר יוזמה ואנחות תכופות.</li>
                        <li><strong>3. שולט בגידים (Controls the Sinews):</strong> בעוד דם הכבד מזין ומלחלח את הגידים, כיס המרה מספק להם <strong>צ'י (תנועה וגמישות)</strong>. לכן נקודת המפגש של הגידים ממוקמת על מרידיאן כיס המרה – <strong>GB-34 (Yanglingquan)</strong>.</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #2ecc71;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. היבט מנטלי, חלומות והקשר לכבד וללב</h2>
                    <ul>
                        <li><strong>היבט מנטלי והקשר ללב:</strong> האומץ וההחלטיות של כיס המרה תומכים ב-<strong>Shen (הלב)</strong>. אדם עם לב חזק וכיס מרה חזק הוא בעל בהירות מחשבתית ויכולת ביצוע.</li>
                        <li><strong>חלומות:</strong> חולשה או הפרעה בכיס המרה גורמות לחלומות על <strong>קרבות, משפטים, מאבקים או התאבדות</strong>.</li>
                        <li><strong>הקשר לכבד (Liver):</strong> יחסי פנים-חוץ הדוקים. הכבד מייצר את המרה מעודפי צ'י הכבד, וכיס המרה מאחסן ומפריש אותה. בקליניקה, פתולוגיות כמו אש בכבד ולחות חמה מופיעות לרוב בשניהם יחד (LIV/GB).</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרק 17: תפקודי שלפוחית השתן (The Bladder - 膀胱)
        // ==========================================
        ch17_bladder: {
            title: "פרק 17: תפקודי שלפוחית השתן (Bladder - 膀胱)",
            subtitle: "סילוק מים ע\"י התמרת צ'י (Qi Transformation), היחסים עם הכליות, הריאות והלב, והיבטים רגשיים.",
            icon: "🚽",
            color1: "#74b9ff",
            color2: "#0984e3",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. התפקוד המרכזי של שלפוחית השתן</h2>
                    <p>שלפוחית השתן היא איבר ה-Yang של אלמנט המים, והמרידיאן שלה (Foot Tai Yang) הוא הארוך והחיצוני ביותר בגוף.</p>
                    <ul>
                        <li><strong>מסלקת מים באמצעות התמרת צ'י (Removes Water by Qi Transformation):</strong> שלפוחית השתן מקבלת את הנוזלים העכורים מהמעי הדק (וכן נוזלים מהריאות ומהכליות), ומבצעת הפרדה סופית: החלק הטהור עולה וממוחזר בגוף, והחלק העכור מופרש החוצה כשתן.</li>
                        <li><strong>התלות באש הכליות (Kidney-Yang / Ming Men):</strong> לשלפוחית השתן אין כוח חום משל עצמה; תהליך <strong>"התמרת הצ'י"</strong> שלה תלוי לחלוטין בחום ובצ'י שמספק לה <strong>יאנג הכליות (Ming Men)</strong>. חולשת יאנג הכליות גורמת לשתן רב וצלול, השתנת לילה או בריחת שתן.</li>
                        <li><strong>השפעת הלב והמעי הדק:</strong> שלפוחית השתן קשורה גם למעי הדק (שניהם שכבת Tai Yang) וללב – אש בלב יכולה לרדת דרך המעי הדק אל שלפוחית השתן ולגרום לשתן כהה וצורב (Lin Syndrome).</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #3498db;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. היבט מנטלי, חלומות והקשר לכליות</h2>
                    <ul>
                        <li><strong>היבט מנטלי:</strong> חוסר איזון בשלפוחית השתן (במיוחד לחות חמה או תקיעות צ'י) מתבטא ברמה הרגשית ב<strong>קנאה, חשדנות, טינה ממושכת וקושי להשתחרר מתחושות קיפוח</strong>.</li>
                        <li><strong>חלומות:</strong> חוסר בשלפוחית השתן גורם לחלומות על <strong>מסעות ונסיעות למרחקים</strong>.</li>
                        <li><strong>הקשר לכליות (Kidneys):</strong> יחסי פנים-חוץ הדוקים. הכליות מספקות את החום (Yang) להתמרת השתן ואת כוח ההחזקה (Kidney-Qi) לשליטה בסוגר השופכה.</li>
                    </ul>
                </div>
            `
        },

        // ==========================================
        // פרק 18: תפקודי התלת-מחמם (The Triple Burner - 三焦)
        // ==========================================
        ch18_triple_burner: {
            title: "פרק 18: תפקודי התלת-מחמם (Triple Burner - 三焦)",
            subtitle: "איבר היאנג הייחודי ('בעל שם ללא צורה'): הנעת הצ'י המקורי (Yuan Qi), שליטה במעברי המים וארבע נקודות המבט הקליניות.",
            icon: "♨️",
            color1: "#fdcb6e",
            color2: "#d35400",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. שלושת התפקודים המרכזיים של התלת-מחמם</h2>
                    <p>התלת-מחמם (<strong>San Jiao - 三焦</strong>) הוא איבר היאנג השישי, והוא מתואר ב-<em>Nan Jing</em> (פרק 38) כאיבר <strong>"שיש לו שם אך אין לו צורה פיזית מוגדרת"</strong>. הוא פועל כמערכת-על המתאמת את זרימת הצ'י והנוזלים בכל חללי הגוף.</p>
                    <ul>
                        <li><strong>1. מניע וממיין את הצ'י המקורי (Mobilizes Original Qi / Yuan Qi):</strong> לפי פרק 66 ב-<em>Nan Jing</em>, התלת-מחמם הוא "השליח המיוחד" המוליך את ה-Yuan Qi מבין הכליות אל 5 איברי ה-Zang, 6 איברי ה-Fu ו-12 המרידיאנים, וגורם לו להתמיין לצורותיו השונות (Ying Qi, Wei Qi וכו').</li>
                        <li><strong>2. שולט בהובלה ובחדירה של הצ'י (Controls Transportation and Penetration of Qi):</strong> מווסת את תנועת הצ'י (עלייה, ירידה, כניסה ויציאה) בכל חללי הגוף והממברנות (Huang).</li>
                        <li><strong>3. שולט במעברי המים ובהפרשת נוזלים (Controls Water Passages and Excretion of Fluids):</strong> אחראי על זרימת הנוזלים והפרשתם התקינה לאורך כל שלושת המחממים.</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #e17055;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. ארבע ההשקפות על התלת-מחמם והקשר למעטפת הלב</h2>
                    <table class="theory-table">
                        <tr><th>נקודת המבט</th><th>משמעות פיזיולוגית וקלינית</th></tr>
                        <tr><td><strong>1. כאחד מ-6 איברי ה-Yang</strong></td><td>מנהל את כניסת המזון והנוזלים והוצאת הפסולת לאורך כל מערכת העיכול והשתן.</td></tr>
                        <tr><td><strong>2. כמניע של ה-Yuan Qi</strong></td><td>מקשר בין Pre-Heaven Qi (כליות/Ming Men) לבין תפקוד האיברים הפנימיים.</td></tr>
                        <tr><td><strong>3. כשלושת חלוקות הגוף (מטאפורות)</strong></td><td>
                            • <strong>מחמם עליון (מעל הסרעפת – לב וריאות):</strong> מדומה ל<strong>"ערפל" (Mist)</strong> – מפזר צ'י ונוזלים לכל הגוף.<br>
                            • <strong>מחמם אמצעי (בין הסרעפת לטבור – קיבה וטחול):</strong> מדומה ל<strong>"בריכה בוצית / תא התססה" (Maceration Chamber)</strong> – מעכל ומתמיר מזון.<br>
                            • <strong>מחמם תחתון (מתחת לטבור – כליות, שלפוחית ומעיים):</strong> מדומה ל<strong>"תעלת ניקוז" (Drainage Ditch)</strong> – מפריד טהור מעכור ומנקז פסולת.
                        </td></tr>
                        <tr><td><strong>4. כחללי הגוף והממברנות</strong></td><td>מתייחס לרווחים שבהם נע הצ'י: רווח <strong>Cou Li</strong> (בין העור לשרירים), חלל החזה, חלל הבטן והממברנות (<strong>Huang</strong>).</td></tr>
                    </table>
                    <p style="margin-top:12px;"><strong>הקשר למעטפת הלב (Pericardium):</strong> יחסי פנים-חוץ (שניהם מייצגים את <strong>אש השר - Minister Fire</strong>). התלת-מחמם מסדיר את הזרימה החופשית של הצ'י בחללי הגוף ותומך באיזון הרגשי וב-Shen יחד עם מעטפת הלב.</p>
                </div>
            `
        },

        // ==========================================
        // פרק 19: איברי היאנג המיוחדים וארבעת הימים
        // ==========================================
        ch19_extraordinary_yang_organs: {
            title: "פרק 19: ששת איברי היאנג המיוחדים וארבעת הימים",
            subtitle: "רחם, מוח, מח, עצמות, כלי דם וכיס מרה – מבנה של Fu ותפקיד של Zang, וטבלת ארבעת הימים (Four Seas).",
            icon: "🧠",
            color1: "#a29bfe",
            color2: "#6c5ce7",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. ששת איברי היאנג המיוחדים (Six Extraordinary Yang Organs - 奇恒之腑)</h2>
                    <p>קבוצה זו כוללת 6 איברים ש<strong>מבחינה מבנית הם חלולים (כמו איברי Fu/Yang), אך מבחינה תפקודית הם מאחסנים תמציות טהורות וייניות (כמו איברי Zang/Yin)</strong> – תמצית, מח, דם ומרה – ואינם באים במגע עם מזון או פסולת:</p>
                    <ul>
                        <li><strong>1. הרחם (The Uterus - Bao Gong / Zi Gong):</strong>
                            <ul>
                                <li><strong>תפקידים:</strong> שולט בווסת (Menstruation), בהתעברות ובהיריון.</li>
                                <li><strong>קשר למרידיאנים מיוחדים:</strong> תלוי ב-<strong>Chong Mai</strong> ("ים הדם" – מספק דם לרחם) וב-<strong>Ren Mai</strong> ("ים היין" – מספק Yin ו-Jing לרחם).</li>
                                <li><strong>קשר לאיברים:</strong> <strong>כליות</strong> (מספקות Jing ו-Tian Gui להתעברות), <strong>כבד</strong> (מאחסן ומספק דם סדיר למחזור), <strong>טחול</strong> (מייצר דם ומחזיק את הרחם במקומו) ו<strong>לב</strong> (מחובר לרחם דרך כלי הדם Bao Mai).</li>
                                <li><strong>בגברים:</strong> המקבילה האנרגטית לרחם היא <strong>"חדר הזרע" (Room of Sperm / Jing Shi)</strong> באזור ה-Dan Tian התחתון (Ren-4 / Du-4).</li>
                            </ul>
                        </li>
                        <li><strong>2. המוח (The Brain - Nao):</strong> מכונה <strong>"ים המח" (Sea of Marrow)</strong>. נוצר וממולא ע"י <strong>תמצית הכליות (Jing)</strong>. חוסר תמצית כליות גורם לסחרחורות, טיניטוס, זיכרון חלש וריכוז ירוד. (רופאים מאוחרים כגון Li Shi Zhen ו-Wang Qing Ren שייכו את התודעה והזיכרון למוח).</li>
                        <li><strong>3. המח (Marrow - Sui):</strong> מיוצר מתמצית הכליות; מהווה את המטריצה המזינה את <strong>מח העצם, חוט השדרה והמוח</strong>.</li>
                        <li><strong>4. העצמות (The Bones - Gu):</strong> מאחסנות את מח העצם ונשלטות ע"י הכליות (חוסר Jing/Yin בכליות &larr; אוסטאופורוזיס, עצמות שבירות ועיכוב סגירת מרפסים בתינוקות).</li>
                        <li><strong>5. כלי הדם (The Blood Vessels - Mai):</strong> מכילים ומובילים את הדם ואת הצ'י המזין (Ying Qi), ונשלטים ע"י הלב והריאות.</li>
                        <li><strong>6. כיס המרה (The Gall Bladder - Dan):</strong> מאחסן מרה (נוזל טהור) ואינו מפריש פסולת.</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #0984e3;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. ארבעת הימים (The Four Seas - 四海)</h2>
                    <table class="theory-table">
                        <tr><th>הים</th><th>איבר / מרידיאן קשור</th><th>נקודות שליטה (עליונה ותחתונה)</th><th>תסמיני עודף מול חוסר</th></tr>
                        <tr><td><strong>ים המח (Sea of Marrow)</strong></td><td>מוח וכליות</td><td><strong>DU-20</strong> (עליונה), <strong>DU-16</strong> (תחתונה)</td><td><strong>עודף:</strong> חיוניות מופרזת, כוח רב. <strong>חוסר:</strong> סחרחורת, טיניטוס, טשטוש ראייה, חולשת רגליים, רצון לשכב.</td></tr>
                        <tr><td><strong>ים הדם (Sea of Blood)</strong></td><td>Chong Mai</td><td><strong>BL-11</strong> (עליונה), <strong>ST-37, ST-39</strong> (תחתונות)</td><td><strong>עודף:</strong> תחושה שהגוף "גדול מדי", אי-נוחות לא מוגדרת. <strong>חוסר:</strong> תחושה שהגוף "קטן מדי".</td></tr>
                        <tr><td><strong>ים הצ'י (Sea of Qi)</strong></td><td>ריאות / חזה (Zong Qi)</td><td><strong>REN-17, DU-15, DU-14</strong> (עליונות), <strong>ST-9</strong></td><td><strong>עודף:</strong> מלאות ואודם בחזה/פנים, קוצר נשימה. <strong>חוסר:</strong> קוצר נשימה, חולשה, חוסר רצון לדבר.</td></tr>
                        <tr><td><strong>ים הדגנים (Sea of Food)</strong></td><td>קיבה וטחול</td><td><strong>ST-30</strong> (עליונה), <strong>ST-36</strong> (תחתונה)</td><td><strong>עודף:</strong> נפיחות ומלאות בבטן. <strong>חוסר:</strong> רעב ללא רצון לאכול.</td></tr>
                    </table>
                </div>
            `
        },

        // ==========================================
        // פרק 20: גורמי מחלה פנימיים – שבעת הרגשות
        // ==========================================
        ch20_internal_causes_emotions: {
            title: "פרק 20: גורמי מחלה פנימיים – 7 הרגשות (七情)",
            subtitle: "אחדות גוף-נפש ברפואה הסינית, השפעת כל 7 הרגשות על תנועת הצ'י והאיברים, ולמה כל רגש פוגע לבסוף בלב.",
            icon: "🎭",
            color1: "#ff7675",
            color2: "#e84393",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. תפיסת הרגשות כגורם מחלה ברפואה הסינית</h2>
                    <p>ברפואה הסינית אין הפרדה בין גוף לנפש: איברי ה-Zang והרגשות הם ביטויים שונים של אותו צ'י. רגשות הם תגובה טבעית ובריאה לחיים, והם הופכים לגורם מחלה פנימי רק כאשר הם <strong>עוצמתיים מדי, ממושכים לאורך זמן, או מודחקים</strong>.</p>
                    <div class="highlight-box" style="border-right-color: #d63031;">
                        <strong>עקרון קליני מרכזי: כל שבעת הרגשות פוגעים בלב (וב-Shen) ויוצרים תקיעות צ'י!</strong><br>
                        אף שלכל רגש יש איבר מטרה ספציפי (למשל כעס בכבד, פחד בכליות), <strong>רק הלב המאחסן את ה-Shen מסוגל "להרגיש" ולזהות את הרגש</strong>. לכן מתח רגשי ממושך יפגע לבסוף בלב (קצה לשון אדום ואינסומניה), ולאורך זמן יוביל לתקיעות צ'י והתפתחות אש (Fire) המכלה את היין.
                    </div>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #6c5ce7;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. פירוט שבעת הרגשות והשפעתם על תנועת הצ'י (Su Wen פרק 39)</h2>
                    <table class="theory-table">
                        <tr><th>הרגש</th><th>האיבר הנפגע</th><th>השפעה על תנועת הצ'י</th><th>ביטויים קליניים אופייניים</th></tr>
                        <tr><td><strong>1. כעס (Anger - 怒)</strong><br><em>כולל תסכול, טינה וזעם</em></td><td><strong>כבד (LIV)</strong> ולב</td><td><strong>מעלה צ'י מעלה (Makes Qi Rise)</strong> (או תוקע צ'י כשהכעס מודחק)</td><td>כאבי ראש, סחרחורות, טיניטוס, פנים אדומות, צוואר תפוס; או תקיעות צ'י הכבד הפולשת לקיבה ולטחול.</td></tr>
                        <tr><td><strong>2. שמחה (Joy - 喜)</strong><br><em>התרגשות יתר מתמדת</em></td><td><strong>לב (HT)</strong></td><td><strong>מאט ומפזר צ'י (Slows down Qi)</strong></td><td>פלפיטציות, אינסומניה, אי-שקט, דיבור יתר (התרגשות פתאומית עלולה לעורר התקף מיגרנה או התקף לב).</td></tr>
                        <tr><td><strong>3. עצב וצער (Sadness - 悲)</strong></td><td><strong>ריאות (LU)</strong> ולב</td><td><strong>ממיס ומדלדל צ'י (Dissolves Qi)</strong></td><td>קוצר נשימה, קול חלש, עייפות, בכי, מועקה בחזה, דופק ריק בעמדת הריאות והלב.</td></tr>
                        <tr><td><strong>4. דאגה (Worry - 忧)</strong></td><td><strong>ריאות (LU) וטחול (SP)</strong></td><td><strong>קושר ותוקע צ'י (Knots Qi)</strong></td><td>מתח בחזה ובכתפיים, נשימה שטוחה, כאבי בטן, נפיחות וחוסר תיאבון.</td></tr>
                        <tr><td><strong>5. הרהור יתר (Pensiveness - 思)</strong><br><em>לימודי יתר וריכוז אובססיבי</em></td><td><strong>טחול (SP)</strong> ולב</td><td><strong>קושר ותוקע צ'י (Knots Qi)</strong></td><td>עייפות, חוסר תיאבון, יציאות רכות, פיזור דעת וקושי בריכוז (פגיעה ב-Yi).</td></tr>
                        <tr><td><strong>6. פחד (Fear - 恐)</strong><br><em>פחד כרוני וחרדה</em></td><td><strong>כליות (KID)</strong> ולב</td><td><strong>מוריד צ'י מטה (Makes Qi Descend)</strong></td><td>הרטבת לילה בילדים, בריחת שתן, שלשול, חולשת ברכיים; בבוגרים – חוסר יין בכליות הגורם לעליית חום ריק בלב (חרדה ופלפיטציות).</td></tr>
                        <tr><td><strong>7. הלם / שוק (Shock - 惊)</strong><br><em>טראומה פתאומית</em></td><td><strong>לב (HT) וכליות (KID)</strong></td><td><strong>מפזר צ'י בפתאומיות (Scatters Qi)</strong></td><td>סוגר את הלב וגורם לדופק מהיר/לא סדיר, חרדה, אינסומניה, קוצר נשימה וניצול פתאומי של תמצית הכליות.</td></tr>
                    </table>
                </div>
            `
        },

        // ==========================================
        // פרק 21: גורמי מחלה חיצוניים – ששת האקלימים
        // ==========================================
        ch21_external_causes_climates: {
            title: "פרק 21: גורמי מחלה חיצוניים – 6 האקלימים (六淫)",
            subtitle: "אקלים מול פתוגנים מערביים, אקלים מלאכותי, רתיעה מקור מול חום, ומאפייני רוח, קור, חום קיץ, לחות, יובש ואש.",
            icon: "🌪️",
            color1: "#74b9ff",
            color2: "#00cec9",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. האקלים כגורם מחלה והמשמעות של רתיעה מקור מול חום</h2>
                    <p>גורמי המחלה החיצוניים הם <strong>ששת האקלימים (Six Pernicious Influences / Liu Yin)</strong>: <strong>רוח, קור, חום קיץ, לחות, יובש ואש</strong>. ברפואה הסינית המודרנית, חיידקים ווירוסים אינם נפרדים מתפיסה זו – תיאור הפתוגן כ"רוח-חום" או "רוח-קור" מתאר את <strong>דפוס התגובה של הגוף</strong> (ולא רק את מזג האוויר בחוץ). גורם נוסף בעידן המודרני הוא <strong>אקלים מלאכותי</strong> (מזגנים קרים מדי בקיץ, הסקה יבשה בחורף וסביבת עבודה לחה).</p>
                    
                    <div class="highlight-box" style="border-right-color: #0984e3;">
                        <strong>הבחנה אבחנתית קריטית: "רתיעה מקור" מול "חום" (Fa Re - 发热):</strong><br>
                        <ul style="margin-top:8px; margin-bottom:0;">
                            <li><strong>רתיעה מקור (Aversion to Cold):</strong> תחושת קור וצמרמורות שאינה משתפרת בהתכסות – נובעת מכך שהפתוגן חוסם את ה-<strong>Wei Qi</strong> בעור ובשרירים. <strong>קיומה מעיד בוודאות שהפתוגן עדיין נמצא בחיצון!</strong></li>
                            <li><strong>"חום" (Fa Re):</strong> מתאר הן <strong>חום גוף מדיד</strong> והן תחושת חום/כאב שרירים בגוף (הנובעים ממאבק ה-Wei Qi בפתוגן). ברגע שהרתיעה מקור נעלמת ונשאר רק חום וצמא – הפתוגן חדר פנימה!</li>
                        </ul>
                    </div>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #e17055;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. מאפייני ששת האקלימים החיצוניים (ומקביליהם הפנימיים)</h2>
                    <table class="theory-table">
                        <tr><th>האקלים</th><th>אופי ותכונות</th><th>ביטויים קליניים עיקריים</th></tr>
                        <tr><td><strong>1. רוח (Wind - 风)</strong></td><td>יאנגי; <strong>"ראש וראשון למאה המחלות"</strong> (נושאת איתה קור, חום ולחות); מופיעה ונעלמת מהר; נודדת ומשתנה; תוקפת פלג גוף עליון ועור.</td><td><strong>חיצונית:</strong> התעטשויות, אף סתום, כאב עורף, פריחות מגרדות ונודדות, כאבי מפרקים נודדים (Wind Bi).<br><strong>פנימית (כבד):</strong> רעד, טיקים, סחרחורת, פרכוסים, שיתוק חצי גוף (CVA).</td></tr>
                        <tr><td><strong>2. קור (Cold - 寒)</strong></td><td>ייני; פוגע ביאנג; מכווץ, מקפיא ומאט תנועה; גורם לכאב חד וחזק.</td><td><strong>חיצוני:</strong> רתיעה עזה מקור, ללא הזעה, כאבי שרירים ומפרקים חדים המוקלים בחימום (Cold Bi), או חדירה ישירה לקיבה/מעיים/רחם.<br><strong>פנימי (חוסר יאנג):</strong> קור כרוני, שלשול מימי, שתן רב ובהיר, עייפות.</td></tr>
                        <tr><td><strong>3. חום קיץ (Summer-Heat - 暑)</strong></td><td>יאנגי; <strong>חיצוני בלבד</strong> (מופיע רק בקיץ); עולה מעלה, מפזר צ'י, פוגע בנוזלים ולעיתים משולב עם לחות.</td><td>חום גוף גבוה, הזעה מרובה, צמא עז, אי-שקט, סחרחורת, שתן כהה ומועט (ואם יש לחות: בחילות, כבדות ושלשול).</td></tr>
                        <tr><td><strong>4. לחות (Dampness - 湿)</strong></td><td>ייני; כבדה, עכורה, דביקה, שוקעת מטה וחוסמת זרימת צ'י; עקשנית וקשה לסילוק.</td><td><strong>חיצונית:</strong> תחושת כבדות בגוף ובראש ("כאילו הראש עטוף במגבת"), כאבי מפרקים קבועים ונפוחים (Damp Bi), הפרשות עכורות.<br><strong>פנימית (חולשת טחול):</strong> מלאות בבטן, חוסר תיאבון, יציאות רכות, בצקות, חיפוי לשון עבה ודביק.</td></tr>
                        <tr><td><strong>5. יובש (Dryness - 燥)</strong></td><td>יאנגי; מכלה נוזלי גוף (Jin-Ye) ויין; תוקף בעיקר את הריאות.</td><td><strong>חיצוני (סתיו):</strong> שיעול יבש, יובש בפה, בגרון, באף ובעור, צמא.<br><strong>פנימי (חוסר יין/דם):</strong> עצירות יבשה, לשון יבשה ומחורצת, שיעול יבש כרוני.</td></tr>
                        <tr><td><strong>6. אש / חום (Fire / Heat - 火 / 热)</strong></td><td>יאנגי בשיאו; עולה מעלה, מכלה יין ונוזלים, מניע דם (גורם לדימומים) ומטריד את ה-Shen.</td><td>חום גבוה, פנים ועיניים אדומות, צמא לשתייה קרה, עצבנות, הזיות/אינסומניה, כיבים בפה, פריחות אדומות ודימומים.</td></tr>
                    </table>
                </div>
            `
        },

        // ==========================================
        // פרק 22: גורמי מחלה נוספים (Miscellaneous Causes)
        // ==========================================
        ch22_miscellaneous_causes: {
            title: "פרק 22: גורמי מחלה נוספים (Miscellaneous Causes)",
            subtitle: "קונסטיטוציה תורשתית, עבודת יתר, מאמץ גופני וחוסר פעילות, פעילות מינית, תזונה, טראומה, פרזיטים, תרופות וטיפול שגוי.",
            icon: "⚖️",
            color1: "#55efc4",
            color2: "#00b894",
            content: `
                <div class="theory-box theme-box">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">1. קונסטיטוציה, עבודת יתר, פעילות גופנית ופעילות מינית</h2>
                    <ul>
                        <li><strong>1. קונסטיטוציה חלשה (Weak Constitution):</strong> נקבעת בהתעברות ובהיריון (בריאות ההורים, גילם, תזונת האם ומצבה הרגשי בהיריון). אף שלא ניתן להגדיל כמותית את ה-Pre-Heaven Jing, ניתן <strong>לשמר ולשפר את איכותו</strong> ע"י אורח חיים מאוזן ותרגול Qi Gong. <em>סימנים לקונסטיטוציה חלשה:</em> היסטוריה של מחלות ילדות קשות, לשון ללא שורש (Rootless coating), ודופק Leather או Scattered.</li>
                        <li><strong>2. עבודת יתר (Overwork):</strong> שעות עבודה ארוכות תחת לחץ נפשי וללא מנוחה מספקת – אחד הגורמים השכיחים ביותר למחלות כרוניות במערב. מתיש תחילה את <strong>צ'י הטחול</strong>, ובהמשך פוגע ב<strong>יין הקיבה, יין הלב ויין הכליות</strong> (ומוביל לעליית חום ריק).</li>
                        <li><strong>3. מאמץ גופני מופרז לעומת חוסר פעילות:</strong>
                            <ul>
                                <li><strong>מאמץ יתר:</strong> הרמת משאות כבדים פוגעת בכליות ובגב התחתון; עמידה ממושכת פוגעת בעצמות ובכליות (ובצ'י הטחול); הליכה ממושכת פוגעת בגידים ובכבד; אימוני ספורט מוגזמים מרוקנים צ'י ודם.</li>
                                <li><strong>חוסר פעילות גופנית:</strong> מונע זרימת צ'י ודם תקינה ומוביל ל<strong>תקיעות צ'י (בעיקר בכבד)</strong> ולחולשת שרירי הטחול.</li>
                            </ul>
                        </li>
                        <li><strong>4. פעילות מינית (Sexual Activity):</strong> פעילות מינית מאוזנת מועילה ומזינה, אך <strong>פעילות מינית מופרזת</strong> מתישה את תמצית הכליות (Jing) ואת אש ה-Ming Men (בעיקר בגברים עקב איבוד זרע; בנשים לידות תכופות ומרובות מתישות דם ותמצית). מנגד, דיכוי ממושך של תשוקה מינית עלול לגרום לתקיעות צ'י הכבד.</li>
                    </ul>
                </div>

                <div class="theory-box theme-box" style="margin-top: 30px; border-top-color: #fdcb6e;">
                    <h2 style="color: var(--ink); border-bottom: 2px solid #eee; padding-bottom: 10px;">2. תזונה, תנאי אכילה וגורמים נוספים</h2>
                    <ul>
                        <li><strong>5. תזונה (Diet) – כמות, איכות ותנאי אכילה:</strong>
                            <ul>
                                <li><strong>כמות המזון:</strong> אכילה מועטה מדי (דיאטות קיצוניות) גורמת לחוסר צ'י ודם; אכילת יתר גורמת לתקיעות מזון, לחות וליחה.</li>
                                <li><strong>האופי האנרגטי של המזון:</strong> עודף מזון <strong>קר ונא</strong> (סלטים קרים, גלידות, משקאות קרים) פוגע ביאנג הטחול ויוצר לחות-קור; עודף מזון <strong>חם, חריף ואלכוהול</strong> יוצר אש בקיבה ובכבד; עודף מזון <strong>שומני, מטוגן ומוצרי חלב</strong> יוצר לחות וליחה.</li>
                                <li><strong>תנאי האכילה (פוגעים בעיקר ביין הקיבה!):</strong> אכילה מאוחרת בלילה, אכילה מהירה תוך כדי עבודה/נהיגה/קריאה, או אכילה תחת מתח רגשי.</li>
                            </ul>
                        </li>
                        <li><strong>6. טראומה (Trauma):</strong> פגיעה פיזית, נפילה או ניתוח גורמים לתקיעות מקומית של צ'י ודם (לעיתים גם שנים לאחר הפציעה).</li>
                        <li><strong>7. פרזיטים ורעלים (Parasites and Poisons):</strong> תולעים וטפילים במעיים (שכיחים בילדים עם חולשת טחול ולחות) ורעלים סביבתיים.</li>
                        <li><strong>8. טיפול שגוי ותרופות (Wrong Treatment &amp; Drugs):</strong> אבחנה או טיפול לא מותאמים (למשל חיזוק במצב עודף, או סילוק חיצון כשנדרש חיזוק); תרופות מערביות (כגון אנטיביוטיקה הפוגעת ביאנג הטחול ויוצרת לחות, או סטרואידים הפוגעים ביין) וסמים הפוגעים ב-Jing וב-Shen.</li>
                    </ul>
                </div>
            `
        }
    });
}