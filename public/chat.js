function openReportModal() {
    document.getElementById('report-text').value = '';
    document.getElementById('report-modal').style.display = 'flex';
}

function addEmoji(emoji) {
    const input = document.getElementById('chat-input');
    input.value += emoji;
    input.focus();
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
        <div class="article-container" style="background: white; padding: 0; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); max-width: 800px; margin: auto; height: 80vh; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e0e0e0;">
            
            <!-- אזור כותרת -->
            <div style="background: #075e54; color: white; padding: 15px 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); z-index: 10;">
                <h2 style="margin: 0; font-size: 1.4rem; font-weight: 600;">💬 קבוצת הסטודנטים</h2>
            </div>

            <!-- אזור הודעות -->
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 20px; background-color: #efeae2; display: flex; flex-direction: column; gap: 8px; background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); background-blend-mode: overlay; opacity: 0.95;">
                <div style="text-align:center; color:#555; margin-top: 20px; background: rgba(255,255,255,0.8); padding: 5px 15px; border-radius: 15px; align-self: center; font-size: 0.9rem;">מתחבר לשרת ההודעות...</div>
            </div>

            <!-- אזור הקלדה -->
            <div style="background: #f0f0f0; padding: 10px 15px; display: flex; flex-direction: column; gap: 10px;">
                
                <!-- שורת אימוג'ים -->
                <div style="display: flex; gap: 15px; padding: 0 5px; overflow-x: auto; scrollbar-width: none;">
                    <button onclick="addEmoji('😀')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">😀</button>
                    <button onclick="addEmoji('😂')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">😂</button>
                    <button onclick="addEmoji('❤️')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">❤️</button>
                    <button onclick="addEmoji('👍')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">👍</button>
                    <button onclick="addEmoji('🙏')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">🙏</button>
                    <button onclick="addEmoji('🩺')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">🩺</button>
                    <button onclick="addEmoji('🌿')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">🌿</button>
                    <button onclick="addEmoji('📍')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">📍</button>
                    <button onclick="addEmoji('❓')" style="background:none; border:none; font-size:1.5rem; cursor:pointer; transition:0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">❓</button>
                </div>

                <div style="display: flex; gap: 10px;">
                    <input type="text" id="chat-input" placeholder="הקלד הודעה..." onkeypress="if(event.key === 'Enter') sendChatMessage()" style="flex: 1; padding: 12px 20px; border: none; border-radius: 25px; font-family: inherit; font-size: 1.05rem; outline: none; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
                    <button onclick="sendChatMessage()" style="background: #128c7e; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: 0.3s;" onmouseover="this.style.background='#075e54'" onmouseout="this.style.background='#128c7e'">
                        ➤
                    </button>
                </div>
            </div>
        </div>
    `;

    if (window.initChatListener) window.initChatListener();
    if (typeof updateStudyToolsVisibility === 'function') updateStudyToolsVisibility();
    
    if (window.innerWidth <= 1100) document.body.classList.add('sidebar-closed');
}