// ==========================================
// === קובץ map.js ===
// ניהול המפה האינטראקטיבית של המרידיאנים
// ==========================================

const mapCoordinates = {
    // --- מרידיאן הריאות (LU) ---
    'LU-1':  [{ x: 53.5, y: 12 }, { x: 53.5, y: 62 }],
    'LU-3':  [{ x: 57.0, y: 16.4 }, { x: 56.5, y: 67 },{ x: 32.3, y: 15.7 }],
    'LU-5':  [{ x: 58.5, y: 24 }, { x: 58.5, y: 74 }],
    'LU-6':  [{ x: 59.0, y: 27 }, { x: 59.0, y: 77 }],
    'LU-7':  [{ x: 59.5, y: 32 }, { x: 59.5, y: 82 }],
    'LU-8':  [{ x: 59.5, y: 33 }, { x: 59.5, y: 83 }],
    'LU-9':  [{ x: 60.0, y: 34 }, { x: 60.0, y: 84 }],
    'LU-10': [{ x: 60.5, y: 37 }, { x: 60.5, y: 87 }],
    'LU-11': [{ x: 60.5, y: 40 }, { x: 60.5, y: 90 }],

    // --- מרידיאן הקיבה (ST) ---
    'ST-1':  [{ x: 50.0, y: 2.5 }, { x: 50.0, y: 52.5 }],
    'ST-4':  [{ x: 51.5, y: 6.0 }, { x: 51.5, y: 56.0 }],
    'ST-6':  [{ x: 53.0, y: 7.5 }, { x: 53.0, y: 57.5 }],
    'ST-9':  [{ x: 51.5, y: 11.5 }, { x: 51.5, y: 61.5 }],
    'ST-21': [{ x: 52.0, y: 19.5 }, { x: 52.0, y: 69.5 }],
    'ST-25': [{ x: 52.5, y: 23.0 }, { x: 52.5, y: 73.0 }],
    'ST-36': [{ x: 52.0, y: 36.0 }, { x: 52.0, y: 86.0 }],
    'ST-40': [{ x: 53.0, y: 41.0 }, { x: 53.0, y: 91.0 }],
    'ST-45': [{ x: 52.5, y: 48.0 }, { x: 52.5, y: 98.0 }],

    // --- מרידיאן הטחול (SP) ---
    'SP-1':  [{ x: 43.2, y: 93.0 }, { x: 15.4, y: 44.5 }],
    'SP-2':  [{ x: 16.8, y: 44.7 },{ x: 43.3, y: 91.2 } ],
    'SP-3':  [{ x: 17.5, y: 44.5 }, { x: 43.2, y: 89.3 }],
    'SP-4':  [{ x: 18.5, y: 44.2 },{ x: 42.3, y: 86.9 } ],
    'SP-5':  [{ x: 20.1, y: 42.6 }, ],
    'SP-6':  [{ x: 20.4, y: 39.8 }, ],
    'SP-8':  [{ x: 19.6, y: 36.2 }, ],
    'SP-9':  [{ x: 18.9, y: 34.1 }, ],
    'SP-15': [{ x: 24.0, y: 19.1 },{ x: 47.7, y: 20.1 }, ],
    'SP-21': [{ x: 25.8, y: 16.8 }, ]
};

let mapListenersAttached = false;

function toggleMapMode() {
    const mapArea = document.getElementById('interactive-map-area');
    const cardsArea = document.getElementById('pointsDisplay');
    const toggleBtn = document.getElementById('btn-toggle-map');
    
    const menu = document.getElementById('study-menu');
    if(menu) menu.style.display = 'none';

    if (mapArea.style.display === 'block') {
        mapArea.style.display = 'none';
        cardsArea.style.display = 'grid';
        toggleBtn.innerText = '🗺️ מפה אינטראקטיבית';
        toggleBtn.style.background = 'linear-gradient(135deg, #16a085 0%, #1abc9c 100%)';
        removeCoordinateTracker();
    } else {
        cardsArea.style.display = 'none';
        mapArea.style.display = 'block';
        toggleBtn.innerText = '🔙 חזור לכרטיסיות';
        toggleBtn.style.background = 'linear-gradient(135deg, #7f8c8d 0%, #95a5a6 100%)';
        loadMapPoints(currentView); 
        enableCoordinateFinder(); 
    }
}

function loadMapPoints(meridianId) {
    const layer = document.getElementById('map-points-layer');
    layer.innerHTML = ''; 
    
    if (!data[meridianId]) return;
    
    data[meridianId].points.forEach(point => {
        const coordsArray = mapCoordinates[point.id];
        if (coordsArray && Array.isArray(coordsArray)) {
            coordsArray.forEach(coords => {
                createPointElement(point, coords, layer, meridianId);
            });
        }
    });
}

function createPointElement(point, coords, layer, meridianId) {
    const pointEl = document.createElement('div');
    pointEl.className = 'map-point';
    pointEl.style.left = coords.x + '%';
    pointEl.style.top = coords.y + '%';
    pointEl.innerHTML = `<span class="tooltip">${point.id} - ${point.name}</span>`;
    
    pointEl.onclick = function() {
        toggleMapMode(); 
        setTimeout(() => {
            const card = document.getElementById(`container-${point.id}`);
            if(card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.8)';
                setTimeout(() => { card.style.boxShadow = ''; }, 1500);
            }
        }, 100);
    };
    layer.appendChild(pointEl);
}

function removeCoordinateTracker() {
    const tracker = document.getElementById('coord-tracker');
    if (tracker) tracker.remove();
}

function enableCoordinateFinder() {
    const wrapper = document.querySelector('.body-map-wrapper');
    const layer = document.getElementById('map-points-layer');
    if (!wrapper || !layer) return;

    let tracker = document.getElementById('coord-tracker');
    if (!tracker) {
        tracker = document.createElement('div');
        tracker.id = 'coord-tracker';
        tracker.style.position = 'fixed';
        tracker.style.top = '20px';    
        tracker.style.left = '20px';   
        tracker.style.background = 'rgba(0,0,0,0.85)';
        tracker.style.color = '#2ecc71'; 
        tracker.style.padding = '12px 18px';
        tracker.style.borderRadius = '10px';
        tracker.style.fontFamily = 'monospace';
        tracker.style.fontSize = '1.1rem';
        tracker.style.zIndex = '10000'; 
        tracker.style.pointerEvents = 'none'; 
        tracker.style.direction = 'ltr';
        tracker.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        document.body.appendChild(tracker);
    }

    // חיבור המאזינים פעם אחת בלבד למניעת דליפת זיכרון
    if (mapListenersAttached) return;
    mapListenersAttached = true;

    wrapper.addEventListener('mousemove', function(e) {
        const currentTracker = document.getElementById('coord-tracker');
        const currentLayer = document.getElementById('map-points-layer');
        if (!currentTracker || !currentLayer) return;

        const rect = currentLayer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100)).toFixed(1);
        const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100)).toFixed(1);
        
        currentTracker.innerHTML = `X: ${xPercent} | Y: ${yPercent}<br><span style="font-size:0.7rem;color:#bdc3c7;">Click image to copy code</span>`;
    });

    wrapper.addEventListener('click', function(e) {
        const currentTracker = document.getElementById('coord-tracker');
        const currentLayer = document.getElementById('map-points-layer');
        if (!currentTracker || !currentLayer) return;
        if (e.target.classList.contains('map-point') || e.target.classList.contains('tooltip')) return; 

        const rect = currentLayer.getBoundingClientRect();
        const xPercent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)).toFixed(1);
        const yPercent = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)).toFixed(1);
        
        const coordString = `{ x: ${xPercent}, y: ${yPercent} }`;
        
        navigator.clipboard.writeText(coordString).then(() => {
            currentTracker.style.background = '#27ae60';
            currentTracker.style.color = 'white';
            currentTracker.innerHTML = `Copied!<br>${coordString}`;
            setTimeout(() => {
                if (currentTracker) {
                    currentTracker.style.background = 'rgba(0,0,0,0.85)';
                    currentTracker.style.color = '#2ecc71';
                }
            }, 800);
        });
    });
}