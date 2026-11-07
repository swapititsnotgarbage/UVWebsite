// === app_western.js ===
// ניהול תצוגת רפואה מערבית - שנה ב' ומבחנים

function openWesternIndex() {
    saveCurrentScroll();
    currentView = 'western_index';

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btn = document.getElementById('btn-western_index');
    if (btn) btn.classList.add('active-menu');

    let cardsHTML = '<div class="topics-grid">';
    
    if (typeof westernData !== 'undefined') {
        Object.keys(westernData).forEach(key => {
            const item = westernData[key];
            const gradientStyle = `background: linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%);`;

            cardsHTML += `
                <div class="topic-card theme-box" onclick="openWesternArticle('${key}')">
                    <div class="topic-gradient-header" style="${gradientStyle}">
                        <div class="topic-icon-floating">${item.icon || '🩺'}</div>
                    </div>
                    <div class="topic-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                    </div>
                </div>
            `;
        });
    }
    cardsHTML += '</div>';

    document.getElementById('content-area').innerHTML = `
        <h1 style="text-align: center; color: var(--ink); margin-bottom: 40px;">רפואה מערבית - פתולוגיות אורתופדיות</h1>
        ${cardsHTML}
    `;

    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

function openWesternArticle(articleId) {
    if (typeof westernData === 'undefined' || !westernData[articleId]) {
        console.error('Western article not found:', articleId);
        return;
    }
    
    const article = westernData[articleId];
    saveCurrentScroll();
    currentView = 'western_' + articleId;
    
    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('pointsDisplay').innerHTML = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';
    
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const specificBtn = document.getElementById('btn-western_index');
    if (specificBtn) specificBtn.classList.add('active-menu');
    
    document.getElementById('content-area').innerHTML = `
        <button onclick="openWesternIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">⬅ חזור לאינדקס מערבית</button>
        <div class="article-container theme-box">
            <div style="background: linear-gradient(135deg, ${article.color1} 0%, ${article.color2} 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; color: white; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="font-size: 3rem; margin-bottom: 10px;">${article.icon}</div>
                <h1 style="margin: 0 0 10px 0; font-size: 2.2rem; color: white;">${article.title}</h1>
                <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">${article.subtitle}</p>
            </div>
            
            <div class="article-content" style="font-size: 1.1rem; line-height: 1.7; color: var(--ink);">
                ${article.content}
            </div>
        </div>
    `;
    
    window.scrollTo(0, 0);
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
}

// ==========================================
// === מנוע מבחן עצמאי לרפואה מערבית ===
// ==========================================

let currentWesternQuizIndex = 0;
let westernQuizScore = 0;
let westernQuizQuestions = [];

function startWesternQuiz() {
    if (typeof westernExamBank === 'undefined' || westernExamBank.length === 0) {
        alert("מאגר השאלות לא נטען. נסה לרענן את העמוד.");
        return;
    }
    
    // משיכת 10 שאלות אקראיות מתוך המאגר של המערבית
    const shuffled = [...westernExamBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    // ערבוב התשובות הפנימיות לכל שאלה
    westernQuizQuestions = selected.map(q => {
        let answers = [...q.options];
        let correctText = answers[q.correct];
        answers.sort(() => 0.5 - Math.random());
        let newCorrectIndex = answers.indexOf(correctText);
        
        return {
            q: q.q,
            answers: answers,
            correct: newCorrectIndex,
            exp: q.exp || ''
        };
    });
    
    currentWesternQuizIndex = 0;
    westernQuizScore = 0;
    
    // הסתרת תפריטים צדדיים
    const studyMenu = document.getElementById('study-menu');
    if (studyMenu) studyMenu.style.display = 'none';
    const quizSetupModal = document.getElementById('quiz-setup-modal');
    if (quizSetupModal) quizSetupModal.style.display = 'none';
    
    // בניית מעטפת המבחן
    document.getElementById('content-area').innerHTML = `
        <button onclick="openWesternIndex()" style="background: var(--ink); color: #fff; padding: 10px 20px; border: none; border-radius: 8px; margin-bottom: 20px; cursor: pointer; transition: 0.2s;">⬅ ביטול וחזרה לאינדקס</button>
        <div id="quiz-container" class="quiz-container theme-box">
            <h2 id="quiz-question" style="color: var(--ink); margin-bottom: 20px;"></h2>
            <div id="quiz-options" style="display:flex; flex-direction:column; gap:10px;"></div>
            <div id="quiz-feedback" class="quiz-feedback" style="margin-top: 20px; font-size:1.1rem; line-height: 1.5;"></div>
            <div class="quiz-footer" style="margin-top: 30px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid #eee; padding-top:15px;">
                <span id="quiz-progress" style="color:var(--ink); font-weight:bold; font-size: 1.1rem;"></span>
                <button id="quiz-next-btn" class="exam-next-btn" onclick="nextWesternQuizQuestion()" style="display:none; background: linear-gradient(135deg, #2ecc71, #27ae60); color:white; border:none; padding:12px 25px; border-radius:8px; cursor:pointer; font-weight:bold; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(46,204,113,0.3);">השאלה הבאה <span>←</span></button>
            </div>
        </div>
    `;
    
    // קריאה לשאלה הראשונה
    renderWesternQuizQuestion();
}

function renderWesternQuizQuestion() {
    const qData = westernQuizQuestions[currentWesternQuizIndex];
    document.getElementById('quiz-question').innerText = qData.q;
    document.getElementById('quiz-progress').innerText = `שאלה ${currentWesternQuizIndex + 1} מתוך ${westernQuizQuestions.length}`;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    document.getElementById('quiz-feedback').innerHTML = '';
    document.getElementById('quiz-next-btn').style.display = 'none';
    
    qData.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = ans;
        btn.onclick = () => checkWesternAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkWesternAnswer(selectedIndex, btnElement) {
    const qData = westernQuizQuestions[currentWesternQuizIndex];
    const options = document.querySelectorAll('.quiz-option-btn');
    
    // כיבוי כל הכפתורים כדי למנוע לחיצה כפולה
    options.forEach(btn => btn.disabled = true);
    
    const feedbackEl = document.getElementById('quiz-feedback');
    
    if (selectedIndex === qData.correct) {
        btnElement.classList.add('correct');
        westernQuizScore++;
        feedbackEl.innerHTML = '<span style="color:#27ae60; font-weight:bold; font-size:1.3rem;">✓ תשובה נכונה!</span><br>' + 
            (qData.exp ? `<span style="color:var(--ink); font-weight:normal; display:block; margin-top:8px;">${qData.exp}</span>` : '');
    } else {
        btnElement.classList.add('wrong');
        options[qData.correct].classList.add('correct');
        feedbackEl.innerHTML = '<span style="color:#c0392b; font-weight:bold; font-size:1.3rem;">✗ טעות.</span><br>' + 
            (qData.exp ? `<span style="color:var(--ink); font-weight:normal; display:block; margin-top:8px;">${qData.exp}</span>` : '');
    }
    
    document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function nextWesternQuizQuestion() {
    currentWesternQuizIndex++;
    if (currentWesternQuizIndex < westernQuizQuestions.length) {
        renderWesternQuizQuestion();
    } else {
        const percentage = Math.round((westernQuizScore / westernQuizQuestions.length) * 100);
        let feedbackMessage = percentage >= 80 ? "כל הכבוד! ציון מעולה 🏆" : (percentage >= 60 ? "עברת בהצלחה! כדאי לחזור על החומר לחיזוק 👍" : "לא נורא, כדאי לקרוא את הסיכומים שוב ולנסות מחדש 💪");
        
        document.getElementById('quiz-container').innerHTML = `
            <div style="text-align:center; padding: 30px;">
                <h2 style="color:var(--ink); font-size: 2.5rem; margin-bottom: 10px;">סיום המבחן! 🎉</h2>
                <p style="font-size:1.5rem; color:var(--ink);">הציון שלך: <strong>${westernQuizScore} מתוך ${westernQuizQuestions.length} (${percentage}%)</strong></p>
                <p style="font-size:1.2rem; color:var(--ink); margin-bottom: 30px;">${feedbackMessage}</p>
                
                <button onclick="openWesternIndex()" style="background:#6c5ce7; color:white; border:none; padding:12px 25px; border-radius:8px; font-size:1.2rem; cursor:pointer; font-weight:bold; margin: 10px; box-shadow: 0 4px 10px rgba(108,92,231,0.3);">חזור לאינדקס מערבית</button>
                <button onclick="startWesternQuiz()" style="background:#16a085; color:white; border:none; padding:12px 25px; border-radius:8px; font-size:1.2rem; cursor:pointer; font-weight:bold; margin: 10px; box-shadow: 0 4px 10px rgba(22,160,133,0.3);">נסה שוב 🔄</button>
            </div>
        `;
    }
}