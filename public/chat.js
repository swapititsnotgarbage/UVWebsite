function openReportModal() {
    document.getElementById('report-text').value = '';
    document.getElementById('report-modal').style.display = 'flex';
}

function openChat() {
    saveCurrentScroll();
    currentView = 'chat';
    
    const mapArea = document.getElementById('interactive-map-area');
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (mapArea) mapArea.style.display = 'none';
    if (pointsDisplay) { pointsDisplay.style.display = 'none'; pointsDisplay.innerHTML = ''; }
    if (typeof removeCoordinateTracker === 'function') removeCoordinateTracker();

    document.getElementById('welcome-view').style.display = 'none';
    document.getElementById('globalSearch').value = '';
    document.getElementById('filterBtn').style.display = 'none';

    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active-menu'));
    const btnChat = document.getElementById('btn-chat');
    if (btnChat) btnChat.classList.add('active-menu');

    document.getElementById('content-area').innerHTML = `
        <div class="article-container" style="background: white; padding: 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); max-width: 800px; margin: auto; height: 75vh; display: flex; flex-direction: column;">
            <h2 style="text-align: center; color: var(--ink); margin-top: 0; margin-bottom: 15px;">צ'אט הסטודנטים</h2>
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 15px; background: #fdfaf5; border-radius: 15px; margin-bottom: 15px; border: 1px solid #eee; display: flex; flex-direction: column; gap: 12px;">
                <div style="text-align:center; color:#999; margin-top: 20px;">מתחבר לשרת ההודעות...</div>
            </div>
            <div style="display: flex; gap: 10px;">
                <input type="text" id="chat-input" placeholder="הקלד הודעה..." onkeypress="if(event.key === 'Enter') sendChatMessage()" style="flex: 1; padding: 15px; border: 1px solid #ddd; border-radius: 12px; font-family: inherit; font-size: 1.05rem; outline: none;">
                <button onclick="sendChatMessage()" style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; border: none; padding: 0 30px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);">שלח</button>
            </div>
        </div>
    `;

    if (window.initChatListener) window.initChatListener();
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
    if (window.innerWidth <= 1100) document.body.classList.add('sidebar-closed');
}