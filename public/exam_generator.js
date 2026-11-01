// --- exam_generator.js ---
window.generateAutoQuestions = function() {
    let autoQuestions = { location: [], element: [], special: [] };
    let allPoints = [];
    const allowedPrefixes = ['LU', 'LI', 'ST', 'SP', 'HT', 'SI', 'BL', 'KID', 'CV', 'RN', 'REN', 'GV', 'DU'];
    
    if (typeof data !== 'undefined') {
        for (let key in data) {
            if (data[key].points) {
                data[key].points.forEach(pt => {
                    let isAllowed = allowedPrefixes.some(prefix => pt.id.startsWith(prefix) || pt.name.toUpperCase().startsWith(prefix));
                    if (isAllowed) allPoints.push(pt);
                });
            }
        }
    }

    if(allPoints.length < 4) return autoQuestions;

    let pointsWithLoc = allPoints.filter(p => p.loc && p.loc !== '');
    for(let i=0; i<15; i++) {
        if(pointsWithLoc.length < 4) break;
        let correctPt = pointsWithLoc[Math.floor(Math.random() * pointsWithLoc.length)];
        let correctAns = correctPt.loc;
        
        let wrongOptions = [];
        let shuffled = [...pointsWithLoc].sort(() => 0.5 - Math.random());
        for(let p of shuffled) {
            if(p.loc !== correctAns && !wrongOptions.includes(p.loc)) wrongOptions.push(p.loc);
            if(wrongOptions.length === 3) break;
        }
        
        let opts = [correctAns, ...wrongOptions];
        opts.sort(() => 0.5 - Math.random());
        
        autoQuestions.location.push({
            cat: "location",
            q: `מהו המיקום המדויק של הנקודה ${correctPt.id} (${correctPt.name})?`,
            options: opts,
            correct: opts.indexOf(correctAns),
            exp: `המיקום הנכון והקלאסי של ${correctPt.id} הוא: ${correctAns}. תמיד זכור למשש את השקע האנטומי לאיתור מדויק.`
        });
    }

    const fiveElements = ['עץ', 'אש', 'אדמה', 'מתכת', 'מים'];
    let pointsWithElm = allPoints.filter(p => p.elmN && p.elmN.includes('אלמנט'));
    for(let i=0; i<10; i++) {
        if(pointsWithElm.length < 1) break;
        let correctPt = pointsWithElm[Math.floor(Math.random() * pointsWithElm.length)];
        let correctAns = correctPt.elmN.replace('אלמנט: ', '').trim();
        
        let wrongElements = fiveElements.filter(e => e !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3);
        let opts = [correctAns, ...wrongElements].sort(() => 0.5 - Math.random());
        
        autoQuestions.element.push({
            cat: "element",
            q: `לאיזה אלמנט (במסגרת חמשת האלמנטים) משויכת הנקודה ${correctPt.id}?`,
            options: opts,
            correct: opts.indexOf(correctAns),
            exp: `הנקודה ${correctPt.id} שייכת לאלמנט ה${correctAns}. זכור את מעגל 'אמא-בן' לחיזוק ופיזור בנקודה זו.`
        });
    }

    let allTags = [];
    allPoints.forEach(p => {
        if(p.tags) p.tags.forEach(t => { if(!allTags.includes(t)) allTags.push(t); });
    });

    for(let i=0; i<10; i++) {
        if(allTags.length === 0) break;
        let tag = allTags[Math.floor(Math.random() * allTags.length)];
        let correctPts = allPoints.filter(p => p.tags && p.tags.includes(tag));
        let incorrectPts = allPoints.filter(p => !(p.tags && p.tags.includes(tag)));
        
        if(correctPts.length > 0 && incorrectPts.length >= 3) {
            let correctPt = correctPts[Math.floor(Math.random() * correctPts.length)];
            let wrongOptions = [...incorrectPts].sort(() => 0.5 - Math.random()).slice(0, 3).map(p => p.id);
            let opts = [...wrongOptions, correctPt.id];
            opts.sort(() => 0.5 - Math.random());
            
            autoQuestions.special.push({
                cat: "special",
                q: `איזו מהנקודות הבאות מוגדרת כנקודת ${tag}?`,
                options: opts,
                correct: opts.indexOf(correctPt.id),
                exp: `התשובה הנכונה היא ${correctPt.id}. פונקציית ה${tag} חשובה לבחירתה בקליניקה.`
            });
        }
    }

    return autoQuestions;
};