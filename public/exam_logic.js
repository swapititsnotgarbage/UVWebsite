// --- exam_logic.js ---
window.currentExamQuestions = [];
window.currentExamIndex = 0;
window.examScore = 0;
window.isExamActive = false; 
window.lastExamMistake = null;

// הפונקציה שפותחת את מסך ההגדרות (מקושרת לכפתור בתפריט ב-index.html)
window.openTheoreticalExamSetup = function() {
    window.currentView = 'exam_setup';
    
    // הסתרת אלמנטים אחרים
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) pointsDisplay.style.display = 'none';
    document.getElementById('welcome-view').style.display = 'none';
    
    // סימון התפריט כפעיל
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btnExam = document.getElementById('btn-theoretical_exam');
    if(btnExam) btnExam.classList.add('active-menu');
    
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();

    const container = document.getElementById('content-area');
    
    // ציור מסך בחירת הנושאים
    container.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); max-width: 700px; margin: auto;">
            <h2 style="text-align: center; margin-bottom: 20px; font-size: 2rem;">הגדרת מבחן עיוני 📝</h2>
            <p style="text-align: center; color: #666; font-size: 1.1rem; margin-bottom: 30px;">סמנו את הנושאים שתרצו לתרגל במבחן הנוכחי:</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; background: #f8f9fa; padding: 25px; border-radius: 15px; border: 1px solid #eee;">
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="location" checked style="width: 20px; height: 20px;"> 📍 מיקומים אנטומיים
                </label>
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="element" checked style="width: 20px; height: 20px;"> 🔥 אלמנטים (עץ, אש, אדמה...)
                </label>
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="special" checked style="width: 20px; height: 20px;"> ⭐ תפקודים ונקודות מיוחדות (התראה, הובלה, מקור)
                </label>
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="cycle" checked style="width: 20px; height: 20px;"> 🔄 מעגלי הזנה ובקרה (אמא-בן)
                </label>
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="case" checked style="width: 20px; height: 20px;"> 🩺 מקרים קליניים וטיפול (Case Studies)
                </label>
                <label style="font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="exam-cat-cb" value="misc" checked style="width: 20px; height: 20px;"> 📚 תיאוריה כללית ושונות
                </label>
            </div>

            <div style="margin-bottom: 35px; text-align: center;">
                <label style="font-size: 1.2rem; font-weight: bold;">מספר שאלות: </label>
                <select id="exam-q-count" style="font-size: 1.1rem; padding: 8px 15px; border-radius: 10px; border: 1px solid #ccc; outline: none; margin-right: 10px; font-family: inherit;">
                    <option value="10">10 שאלות (קצר)</option>
                    <option value="20" selected>20 שאלות (מומלץ)</option>
                    <option value="30">30 שאלות (מקיף)</option>
                    <option value="50">50 שאלות (ארוך)</option>
                    <option value="all">כל השאלות במאגר!</option>
                </select>
            </div>

            <div style="text-align: center;">
                <button onclick="window.startCustomTheoreticalExam()" style="background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); color: white; border: none; padding: 15px 40px; font-size: 1.3rem; border-radius: 30px; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(161, 140, 209, 0.4); transition: 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">🚀 התחל מבחן עכשיו</button>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
    
    // סגירת סיידבר במובייל
    if (window.innerWidth <= 1100) {
        document.body.classList.add('sidebar-closed');
    }
};

window.startCustomTheoreticalExam = function() {
    const checkboxes = document.querySelectorAll('.exam-cat-cb:checked');
    const selectedCats = Array.from(checkboxes).map(cb => cb.value);
    
    if(selectedCats.length === 0) {
        alert("אנא בחר לפחות נושא אחד למבחן!");
        return;
    }

    const qCountSelect = document.getElementById('exam-q-count').value;

    if (!window.manualExamBank) {
        alert("שגיאה בטעינת מאגר השאלות. אנא רענן את העמוד.");
        return;
    }
    
    let autoGenerated = window.generateAutoQuestions ? window.generateAutoQuestions() : { location: [], element: [], special: [] };
    
    let pool = [];
    
    // שאיבת השאלות לפי הנושאים שנבחרו
    if(selectedCats.includes('location')) pool.push(...window.manualExamBank.filter(q => q.cat === 'location'), ...autoGenerated.location);
    if(selectedCats.includes('element')) pool.push(...window.manualExamBank.filter(q => q.cat === 'element'), ...autoGenerated.element);
    if(selectedCats.includes('cycle')) pool.push(...window.manualExamBank.filter(q => q.cat === 'cycle'));
    if(selectedCats.includes('special')) pool.push(...window.manualExamBank.filter(q => q.cat === 'special'), ...autoGenerated.special);
    if(selectedCats.includes('case')) pool.push(...window.manualExamBank.filter(q => q.cat === 'case'));
    if(selectedCats.includes('misc')) pool.push(...window.manualExamBank.filter(q => q.cat === 'misc'));

    if (pool.length === 0) {
        alert("לא נמצאו מספיק שאלות במאגר עבור הקטגוריות שנבחרו.");
        return;
    }

    // פונקציית ערבוב
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    pool = shuffle(pool);

    let finalCount = pool.length;
    if(qCountSelect !== 'all') {
        finalCount = Math.min(pool.length, parseInt(qCountSelect));
    }

    window.currentExamQuestions = pool.slice(0, finalCount);
    window.currentExamIndex = 0;
    window.examScore = 0;
    window.isExamActive = true;
    window.lastExamMistake = null;
    
    window.renderExamQuestion();
};

window.endTheoreticalExam = function() {
    window.isExamActive = false;
    window.currentExamQuestions = [];
    window.currentExamIndex = 0;
    window.examScore = 0;
    window.lastExamMistake = null;
    
    // חוזר למסך ההגדרות במקום לדף ריק
    window.openTheoreticalExamSetup();
};

window.renderExamQuestion = function() {
    const container = document.getElementById('content-area'); // השתנו מ-exam-container ל-content-area
    if (!container) return;

    if (window.currentExamIndex >= window.currentExamQuestions.length) {
        window.isExamActive = false;
        let percentage = Math.round((window.examScore / window.currentExamQuestions.length) * 100);
        let pass = percentage >= 60; 
        
        if (window.saveQuizScore) {
            window.saveQuizScore(window.examScore, window.currentExamQuestions.length);
        }

        container.innerHTML = `
            <div style="background: white; padding: 50px 30px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); max-width: 700px; box-sizing: border-box; margin: auto; text-align: center;">
                <h2 style="margin-bottom: 20px; font-size: 2.2rem;">סיום המבחן העיוני!</h2>
                <div style="font-size: 5rem; margin-bottom: 15px;">${pass ? '🏆' : '📚'}</div>
                <h3 style="color: ${pass ? '#2ecc71' : '#ff6b6b'}; font-size: 2.5rem; margin-bottom: 10px;">הציון שלך: ${percentage}%</h3>
                <p style="font-size: 1.3rem; margin-bottom: 20px;">ענית נכון על <strong>${window.examScore}</strong> מתוך <strong>${window.currentExamQuestions.length}</strong> שאלות.</p>
                <p style="font-size: 0.95rem; color: #2ecc71; margin-bottom: 40px;">* במידה ואתה מחובר, הציון נשמר אוטומטית בפרופיל האישי.</p>
                <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <button onclick="window.endTheoreticalExam()" style="background: #f0f2f5; color: #333; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 30px; cursor: pointer; font-weight: bold; transition: 0.2s;" onmouseover="this.style.background='#e4e6e9'" onmouseout="this.style.background='#f0f2f5'">חזור להגדרות המבחן</button>
                </div>
            </div>
        `;
        window.scrollTo(0, 0);
        return;
    }

    const qData = window.currentExamQuestions[window.currentExamIndex];
    let progressPercent = (window.currentExamIndex / window.currentExamQuestions.length) * 100;
    
    let mistakeHtml = '';
    if (window.lastExamMistake) {
        mistakeHtml = `
            <div style="position: relative; display: inline-block; margin-right: 20px; vertical-align: middle; cursor: help;" onmouseenter="this.querySelector('.tooltip-content').style.display='block'" onmouseleave="this.querySelector('.tooltip-content').style.display='none'">
                <span style="background: #ff4757; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; box-shadow: 0 2px 5px rgba(255,71,87,0.3);">❓ למה טעיתי קודם?</span>
                
                <div class="tooltip-content" style="display: none; position: absolute; top: 130%; right: 0; background: white; padding: 18px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); width: 300px; z-index: 100; text-align: right; border: 2px solid #ff4757; font-size: 1rem; line-height: 1.4;">
                    <strong style="color: #ff4757; font-size: 0.9rem;">השאלה הקודמת:</strong><br>
                    <span style="display: block; margin-bottom: 12px; font-weight: 500; color: #333;">${window.lastExamMistake.q}</span>
                    <strong style="color: #2ecc71; font-size: 0.9rem;">התשובה הנכונה:</strong><br>
                    <span style="display: block; margin-bottom: 12px; font-weight: bold; color: #333;">${window.lastExamMistake.correctAnswer}</span>
                    <strong style="color: #3498db; font-size: 0.9rem;">תזכורת:</strong><br>
                    <span style="display: block; color: #555;">זוהי התשובה הקלאסית המדויקת ביותר המבוססת על האנטומיה והתיאוריה.</span>
                </div>
            </div>
        `;
        window.lastExamMistake = null;
    }

    let html = `
        <style>
            .exam-opt-btn { background: #fdfbf7; border: 2px solid #eaeaea; padding: 18px 25px; font-size: 1.15rem; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; text-align: right; color: var(--ink); position: relative; font-family: inherit; outline: none; width: 100%; }
            .exam-opt-btn:hover:not([disabled]) { background: #fff; border-color: #a18cd1; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(161, 140, 209, 0.15); }
            .exam-next-btn { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); color: white; border: none; padding: 12px 30px; font-size: 1.2rem; border-radius: 30px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 15px rgba(161, 140, 209, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease; display: inline-flex; align-items: center; gap: 10px; font-family: inherit; outline: none; }
            .exam-next-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(161, 140, 209, 0.6); }
        </style>
        <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); max-width: 800px; box-sizing: border-box; margin: auto; position: relative;">
            
            <button onclick="window.endTheoreticalExam()" style="position: absolute; top: 15px; left: 15px; background: none; border: none; color: #ff6b6b; font-size: 0.95rem; cursor: pointer; text-decoration: underline; font-weight: bold;">סיום המבחן</button>

            <div style="width: 100%; background: #f0f2f5; border-radius: 10px; height: 8px; margin-bottom: 25px; margin-top: 15px; overflow: hidden;">
                <div style="width: ${progressPercent}%; background: linear-gradient(90deg, #84fab0, #8fd3f4); height: 100%; transition: width 0.4s ease; border-radius: 10px;"></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; font-size: 1.05rem; font-weight: bold;">
                <span style="background: #f8f9fa; padding: 6px 16px; border-radius: 20px; border: 1px solid #eee; display: flex; align-items: center; color: #555;">שאלה ${window.currentExamIndex + 1} מתוך ${window.currentExamQuestions.length} ${mistakeHtml}</span>
                <span style="background: #fff8e1; padding: 6px 16px; border-radius: 20px; border: 1px solid #ffecb3; color: #b78103;">ציון ביניים: ${window.examScore}</span>
            </div>
            
            <h3 style="font-size: 1.6rem; margin-bottom: 35px; line-height: 1.5; border-right: 5px solid #a18cd1; padding-right: 20px;">${qData.q}</h3>
            
            <div style="display: flex; flex-direction: column; gap: 15px;">
    `;

    qData.options.forEach((opt, index) => {
        html += `<button class="exam-opt-btn" onclick="window.checkExamAnswer(${index}, ${qData.correct}, this)">${opt}</button>`;
    });

    html += `
            </div>
            
            <div id="exam-action-bar" style="display: none; align-items: center; gap: 15px; margin-top: 35px;">
                <button class="exam-next-btn" onclick="window.nextExamQuestion()">לשאלה הבאה <span style="font-size: 1.4rem; line-height: 1;">&larr;</span></button>
                
                <div id="exam-mistake-tooltip" style="display: none; position: relative; cursor: help;" onmouseenter="this.querySelector('.tooltip-content').style.display='block'" onmouseleave="this.querySelector('.tooltip-content').style.display='none'">
                    <span style="background: #ff4757; color: white; padding: 8px 16px; border-radius: 20px; font-size: 1rem; font-weight: bold; box-shadow: 0 2px 5px rgba(255,71,87,0.3);">❓ הסבר לתשובה</span>
                    <div class="tooltip-content" style="display: none; position: absolute; bottom: 130%; right: 0; background: white; padding: 18px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); width: 280px; z-index: 100; text-align: right; border: 2px solid #ff4757; font-size: 1rem; line-height: 1.4;">
                        <strong style="color: #2ecc71; font-size: 0.95rem;">התשובה הנכונה:</strong><br>
                        <span style="display: block; margin-bottom: 12px; font-weight: bold; color: #333;">${qData.options[qData.correct]}</span>
                        <strong style="color: #3498db; font-size: 0.95rem;">למה?</strong><br>
                        <span style="display: block; color: #555;">${qData.exp || 'מתוך מאגר הנתונים הקלאסי של נקודות הדיקור.'}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = html;
    window.scrollTo(0, 0);
};

window.checkExamAnswer = function(selectedIndex, correctIndex, btnElement) {
    const btns = document.querySelectorAll('.exam-opt-btn');
    const qData = window.currentExamQuestions[window.currentExamIndex];

    btns.forEach(b => {
        b.disabled = true;
        b.style.cursor = 'not-allowed';
        b.style.opacity = '0.7';
    });

    if (selectedIndex === correctIndex) {
        btnElement.style.background = '#e8f5e9';
        btnElement.style.borderColor = '#28a745';
        btnElement.style.color = '#155724';
        btnElement.style.opacity = '1';
        btnElement.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.2)';
        window.examScore++;
        document.getElementById('exam-action-bar').style.display = 'flex';
        document.getElementById('exam-mistake-tooltip').style.display = 'none';
    } else {
        btnElement.style.background = '#fdeded';
        btnElement.style.borderColor = '#dc3545';
        btnElement.style.color = '#721c24';
        btnElement.style.opacity = '1';
        
        btns[correctIndex].style.background = '#e8f5e9';
        btns[correctIndex].style.borderColor = '#28a745';
        btns[correctIndex].style.color = '#155724';
        btns[correctIndex].style.opacity = '1';
        
        window.lastExamMistake = {
            q: qData.q,
            correctAnswer: qData.options[qData.correct]
        };
        
        document.getElementById('exam-action-bar').style.display = 'flex';
        document.getElementById('exam-mistake-tooltip').style.display = 'inline-block';
    }
};

window.nextExamQuestion = function() {
    window.currentExamIndex++;
    window.renderExamQuestion();
};