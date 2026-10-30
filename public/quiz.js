// ==========================================
// === קובץ quiz.js ===
// ניהול המבחן החכם והכרטיסיות האקראיות
// ==========================================

// פונקציות עזר לערבוב מערכים (רנדומיזציה)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomWrongOptions(allOptions, correctOption, count) {
    let uniqueOptions = [...new Set(allOptions)]; 
    let filtered = uniqueOptions.filter(opt => opt !== correctOption);
    shuffleArray(filtered);
    return filtered.slice(0, count);
}

// ==========================================
// מערכת המבחן החכם (Smart Quiz)
// ==========================================

let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

const theoryQuizBank = [
    { topic: 'qi', q: "מה משמעות הסימניה הסינית של המילה צ'י (Qi)?", options: ["אדים/קיטור מעל אורז מתבשל", "רוח שנושבת על עצים", "מים שזורמים בנהר", "דם שזורם בוורידים"], correct: 0 },
    { topic: 'qi', q: "הצ'י המקורי (Yuan Qi) נאגר ב:", options: ["כליות", "לב", "ריאות", "כבד"], correct: 0 },
    { topic: 'blood', q: "איזה איבר אחראי על *ייצור* הדם (מתוך צ'י המזון) על פי הרפואה הסינית?", options: ["הלב", "הכבד", "הטחול", "הכליות"], correct: 0 },
    { topic: 'blood', q: "איזה איבר *מאחסן* את הדם ומווסת את נפחו בזמן מנוחה?", options: ["הכבד", "הטחול", "הלב", "הריאות"], correct: 0 },
    { topic: 'jinye', q: "איזה איבר מכונה 'המקור העליון של המים'?", options: ["ריאות", "כליות", "טחול", "שלפוחית שתן"], correct: 0 },
    { topic: 'shen', q: "איזה איבר מאחסן את נשמת ה-Hun (הנשמה האתרית)?", options: ["כבד", "לב", "ריאות", "טחול"], correct: 0 },
    { topic: 'shen', q: "על פי חמשת ההיבטים הרוחניים (Wu Shen), הטחול מאחסן את ה:", options: ["Yi (אינטלקט)", "Po (נשמה גופנית)", "Zhi (כוח רצון)", "Shen (נפש)"], correct: 0 }
];

function openQuizSetup() {
    const container = document.getElementById('quiz-checkboxes');
    const title = document.getElementById('quiz-setup-title');
    container.innerHTML = '';
    const menu = document.getElementById('study-menu');
    if(menu) menu.style.display = 'none';

    if (currentView === 'pathologies') {
        title.innerText = 'מבחן פתולוגיות וסינדרומים';
        for (const [key, elementData] of Object.entries(pathologiesData)) {
            container.innerHTML += `
                <label class="quiz-checkbox-label">
                    <input type="checkbox" value="${key}" checked> 
                    ${elementData.icon} ${elementData.title}
                </label>
            `;
        }
    } else if (currentView === 'fundamentals' || currentView.startsWith('article_')) {
        title.innerText = 'מבחן יסודות ותיאוריה';
        for (const [key, theoryItem] of Object.entries(theoryData)) {
            container.innerHTML += `
                <label class="quiz-checkbox-label">
                    <input type="checkbox" value="${key}" checked> 
                    ${theoryItem.icon} ${theoryItem.title}
                </label>
            `;
        }
    }

    document.getElementById('quiz-setup-modal').style.display = 'flex';
}

function closeQuizSetup() {
    document.getElementById('quiz-setup-modal').style.display = 'none';
}

function startSmartQuiz() {
    const checkboxes = document.querySelectorAll('#quiz-checkboxes input:checked');
    const selectedTopics = Array.from(checkboxes).map(cb => cb.value);
    
    if (selectedTopics.length === 0) {
        alert("אנא בחר לפחות נושא אחד למבחן!");
        return;
    }

    currentQuizQuestions = [];
    currentQuestionIndex = 0;
    quizScore = 0;

    if (currentView === 'pathologies') {
        let globalSyndromes = [];
        let selectedSyndromes = [];

        Object.values(pathologiesData).forEach(el => {
            Object.values(el.organs).forEach(org => {
                org.syndromes.forEach(syn => globalSyndromes.push(syn));
            });
        });

        selectedTopics.forEach(elKey => {
            const elData = pathologiesData[elKey];
            Object.values(elData.organs).forEach(org => {
                org.syndromes.forEach(syn => selectedSyndromes.push({ syn: syn, organName: org.shortName }));
            });
        });

        selectedSyndromes.forEach(item => {
            const syn = item.syn;
            
            if (syn.symptoms && syn.symptoms !== 'ריק') {
                let wrongNames = getRandomWrongOptions(globalSyndromes.map(s => s.name), syn.name, 3);
                let options1 = [syn.name, ...wrongNames];
                shuffleArray(options1);
                currentQuizQuestions.push({
                    q: `לאיזה סינדרום (של ה-${item.organName}) מתאימים הסימפטומים הבאים:\n"${syn.symptoms}"?`,
                    options: options1,
                    correct: options1.indexOf(syn.name)
                });
            }

            if (syn.etiology && syn.etiology !== 'ריק') {
                let wrongEtio = getRandomWrongOptions(globalSyndromes.map(s => s.etiology).filter(e => e !== 'ריק'), syn.etiology, 3);
                if (wrongEtio.length === 3) {
                    let options2 = [syn.etiology, ...wrongEtio];
                    shuffleArray(options2);
                    currentQuizQuestions.push({
                        q: `מהי האטיולוגיה (הגורם למחלה) האופיינית ל-${syn.name}?`,
                        options: options2,
                        correct: options2.indexOf(syn.etiology)
                    });
                }
            }
        });
    } else if (currentView === 'fundamentals' || currentView.startsWith('article_')) {
        selectedTopics.forEach(topic => {
            const topicQs = theoryQuizBank.filter(q => q.topic === topic);
            topicQs.forEach(q => {
                let opts = [...q.options];
                let correctStr = opts[q.correct];
                shuffleArray(opts);
                currentQuizQuestions.push({
                    q: q.q,
                    options: opts,
                    correct: opts.indexOf(correctStr)
                });
            });
        });
    }

    shuffleArray(currentQuizQuestions);
    
    if (currentQuizQuestions.length > 20) {
        currentQuizQuestions = currentQuizQuestions.slice(0, 20);
    }

    if (currentQuizQuestions.length === 0) {
        alert("לא נמצאו מספיק נתונים ליצירת מבחן בנושאים אלו.");
        return;
    }

    closeQuizSetup();
    document.getElementById('active-quiz-modal').style.display = 'flex';
    renderQuizQuestion();
}


function renderQuizQuestion() {
    const qData = currentQuizQuestions[currentQuestionIndex];
    document.getElementById('quiz-progress').innerText = `שאלה ${currentQuestionIndex + 1} מתוך ${currentQuizQuestions.length}`;
    document.getElementById('quiz-question-text').innerText = qData.q;
    document.getElementById('quiz-next-btn').style.display = 'none';

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';

    qData.options.forEach((opt, index) => {
        optionsContainer.innerHTML += `
            <button class="quiz-option-btn" onclick="selectQuizOption(${index})">${opt}</button>
        `;
    });
}

function selectQuizOption(selectedIndex) {
    const qData = currentQuizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.quiz-option-btn');
    
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === qData.correct) {
        buttons[selectedIndex].classList.add('correct');
        quizScore++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[qData.correct].classList.add('correct');
    }

    document.getElementById('quiz-next-btn').style.display = 'inline-block';
    
    if (currentQuestionIndex === currentQuizQuestions.length - 1) {
        document.getElementById('quiz-next-btn').innerText = 'סיים מבחן וצפה בציון 🏆';
    }
}

function nextQuizQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        renderQuizQuestion();
    } else {
        showQuizSummary();
    }
}

function showQuizSummary() {
    const percentage = Math.round((quizScore / currentQuizQuestions.length) * 100);
    let msg = percentage >= 80 ? "אלופ/ה! שליטה מעולה בחומר." : "שווה לחזור על החומר שוב.";
    
    document.getElementById('quiz-container').innerHTML = `
        <div class="quiz-header-active" style="background: linear-gradient(135deg, #8b1c31 0%, #5a0d1d 100%); padding: 20px 30px; text-align: center;">
            <h2 style="margin: 0; color: white;">סיכום מבחן</h2>
        </div>
        <div style="text-align: center; padding: 40px 30px;">
            <h1 style="font-size: 5rem; margin: 0; color: #8b1c31; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${percentage}%</h1>
            <h2 style="color: var(--ink); margin-top: 10px;">ענית נכון על ${quizScore} מתוך ${currentQuizQuestions.length} שאלות!</h2>
            <p style="font-size: 1.2rem; color: #7f8c8d;">${msg}</p>
            <button class="start-quiz-btn" style="margin-top: 30px; background: linear-gradient(135deg, #8b1c31 0%, #5a0d1d 100%); color: white; box-shadow: 0 5px 15px rgba(139, 28, 49, 0.3);" onclick="quitQuiz()">סגור וחזור לאינדקס</button>
        </div>
    `;
}

function quitQuiz() {
    document.getElementById('active-quiz-modal').style.display = 'none';
    document.getElementById('quiz-container').innerHTML = `
        <div class="quiz-header-active" style="background: linear-gradient(135deg, #8b1c31 0%, #5a0d1d 100%); padding: 20px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <span id="quiz-progress" style="font-weight: bold; color: white; font-size: 1.2rem;">שאלה 1 מתוך 20</span>
            <button class="close-quiz-btn" style="position: static; color: rgba(255,255,255,0.7);" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'" onclick="quitQuiz()">✖ סיום מבחן</button>
        </div>
        
        <div class="quiz-body" style="padding: 30px;">
            <h3 id="quiz-question-text" style="color: var(--ink); line-height: 1.5; margin-bottom: 25px; font-size: 1.4rem; border-right: 5px solid #8b1c31; padding-right: 15px;">טוען שאלה...</h3>
            <div id="quiz-options-container" style="display: flex; flex-direction: column; gap: 12px;"></div>
            <div style="text-align: left; margin-top: 30px;">
                <button id="quiz-next-btn" class="start-quiz-btn" style="display: none; width: auto; padding: 12px 30px; background: linear-gradient(135deg, #8b1c31 0%, #5a0d1d 100%); box-shadow: 0 5px 15px rgba(139, 28, 49, 0.3); color: white;" onclick="nextQuizQuestion()">לשאלה הבאה ⬅️</button>
            </div>
        </div>
    `;
}


// ==========================================
// מנוע כרטיסייה אקראית (Random Card)
// ==========================================

let randomCardsPool = [];

function openRandomCardModal() {
    if (!data[currentView]) return; 
    
    const menu = document.getElementById('study-menu');
    if(menu) menu.style.display = 'none';
    
    flipAllCards(true); // הופך את כל הכרטיסיות ברקע לגב שלהן
    
    randomCardsPool = [...data[currentView].points];
    shuffleArray(randomCardsPool);
    
    document.getElementById('random-card-modal').style.display = 'flex';
    showNextRandomCard();
}

function showNextRandomCard() {
    if (randomCardsPool.length === 0) {
        alert("מעולה! עברת על כל הנקודות במרידיאן הזה.");
        closeRandomCardModal();
        return;
    }
    
    const nextPoint = randomCardsPool.pop();
    const container = document.getElementById('random-card-container');
    
    container.innerHTML = generateCard(nextPoint, false, true);
    
    const modal = document.getElementById('random-card-modal');
    if (modal) modal.scrollTo(0, 0);
    
    const cardEl = document.getElementById(`modal-container-${nextPoint.id}`);
    if(cardEl) cardEl.classList.add('is-flipped');
    
    document.getElementById('random-next-btn').style.display = 'none';
}

function closeRandomCardModal() {
    document.getElementById('random-card-modal').style.display = 'none';
    document.getElementById('random-card-container').innerHTML = '';
}