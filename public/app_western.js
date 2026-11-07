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

// הפעלת מבחן מערבית חכם
function startWesternQuiz() {
    if (typeof westernExamBank === 'undefined' || westernExamBank.length === 0) {
        alert("מאגר השאלות בטעינה, נסה שוב בעוד שניה.");
        return;
    }
    
    // מכין את המבחן דרך מנגנון המבחנים הקיים 
    const shuffled = [...westernExamBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10); // מבחן של 10 שאלות אורתופדיה
    
    window.currentQuizQuestions = selected.map(q => {
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
    
    window.currentQuizIndex = 0;
    window.quizScore = 0;
    
    const studyMenu = document.getElementById('study-menu');
    if (studyMenu) studyMenu.style.display = 'none';
    
    const quizSetupModal = document.getElementById('quiz-setup-modal');
    if (quizSetupModal) quizSetupModal.style.display = 'none';
    
    document.getElementById('content-area').innerHTML = `
        <div id="quiz-container" class="quiz-container theme-box">
            <h2 id="quiz-question" style="color: var(--ink);"></h2>
            <div id="quiz-options"></div>
            <div id="quiz-feedback" class="quiz-feedback"></div>
            <div class="quiz-footer">
                <span id="quiz-progress"></span>
                <button id="quiz-next-btn" class="exam-next-btn" onclick="nextQuizQuestion()" style="display:none;">הבא <span>←</span></button>
            </div>
        </div>
    `;
    
    if (typeof renderQuizQuestion === 'function') {
        renderQuizQuestion();
    } else {
        alert('שגיאה: מנוע המבחנים לא נטען. נסה לרענן את העמוד.');
    }
}