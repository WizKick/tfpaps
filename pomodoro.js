// ========== WIDGET POMODORO ==========
// Timer Pomodoro flottant pour révision TFP APS

const pomodoroState = {
  active: false,
  seconds: 25 * 60,
  interval: null,
  type: 'work',    // 'work' | 'pause' | 'long'
  custom: 25,
  totalWorkSeconds: 0,
  todayWorkSeconds: 0,
  lastWorkDate: null
};

function savePomodoroState() {
  try {
    localStorage.setItem('tfp_pomodoro', JSON.stringify({
      totalWorkSeconds: pomodoroState.totalWorkSeconds,
      todayWorkSeconds: pomodoroState.todayWorkSeconds,
      lastWorkDate: pomodoroState.lastWorkDate
    }));
  } catch(e) {}
}

function loadPomodoroState() {
  try {
    const raw = localStorage.getItem('tfp_pomodoro');
    if (!raw) return;
    const data = JSON.parse(raw);
    pomodoroState.totalWorkSeconds = data.totalWorkSeconds || 0;
    pomodoroState.todayWorkSeconds = data.todayWorkSeconds || 0;
    pomodoroState.lastWorkDate = data.lastWorkDate || null;
    const today = new Date().toDateString();
    if (pomodoroState.lastWorkDate !== today) {
      pomodoroState.todayWorkSeconds = 0;
      pomodoroState.lastWorkDate = today;
      savePomodoroState();
    }
  } catch(e) {}
}

function formatSeconds(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function formatHours(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}h${String(m).padStart(2,'0')}m${String(s).padStart(2,'0')}s`;
  if (m > 0) return `${m}m${String(s).padStart(2,'0')}s`;
  return `${s}s`;
}

function initPomodoroWidget() {
  if (document.getElementById('pomodoroWidget')) return;

  const widget = document.createElement('div');
  widget.id = 'pomodoroWidget';
  widget.innerHTML = `
    <div id="pomodoroHandle" title="Déplacer">⏱</div>
    <div id="pomodoroBody">
      <div id="pomodoroHeader">
        <div id="pomodoroTitle">Pomodoro</div>
        <div id="pomodoroStats">
          <span id="pomodoroTodayLabel">Auj.</span>
          <span id="pomodoroTodayTime">0s</span>
        </div>
        <button id="pomodoroClose" onclick="togglePomodoroWidget()" title="Réduire">−</button>
      </div>
      <div id="pomodoroDisplay">
        <div id="pomodoroCircle">
          <svg id="pomodoroSvg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6"/>
            <circle id="pomodoroArc" cx="50" cy="50" r="44" fill="none" stroke="#d9b98c" stroke-width="6"
              stroke-dasharray="276.46" stroke-dashoffset="0" stroke-linecap="round"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div id="pomodoroTime">25:00</div>
          <div id="pomodoroTypeLabel">Travail</div>
        </div>
      </div>
      <div id="pomodoroControls">
        <button class="pomo-btn" onclick="changePomoDuration(-5)" title="-5 min">−5</button>
        <button class="pomo-btn pomo-main" id="pomodoroPlayBtn" onclick="togglePomodoro()">▶</button>
        <button class="pomo-btn" onclick="resetPomodoro()" title="Reset">↺</button>
        <button class="pomo-btn" onclick="changePomoDuration(5)" title="+5 min">+5</button>
      </div>
      <div id="pomodoroModes">
        <button class="pomo-mode-btn active" id="modeWork" onclick="setPomodoroMode('work')">Travail 25m</button>
        <button class="pomo-mode-btn" id="modePause" onclick="setPomodoroMode('pause')">Pause 5m</button>
        <button class="pomo-mode-btn" id="modeLong" onclick="setPomodoroMode('long')">Longue 15m</button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #pomodoroWidget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: 'Outfit', sans-serif;
      user-select: none;
    }
    #pomodoroHandle {
      display: none;
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      width: 28px; height: 28px;
      text-align: center; line-height: 28px;
      font-size: 0.85rem; cursor: move; z-index: 10000;
    }
    #pomodoroWidget:hover #pomodoroHandle { display: block; }
    #pomodoroWidget.collapsed #pomodoroBody { display: none; }
    #pomodoroWidget.collapsed {
      cursor: pointer;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.5rem 1rem;
      display: flex; align-items: center; gap: 0.5rem;
      font-size: 0.85rem; color: var(--text-dim);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    #pomodoroWidget.collapsed::after {
      content: attr(data-time);
      font-family: 'Syne', sans-serif;
      font-weight: 700; color: var(--gold);
    }
    #pomodoroBody {
      background: var(--surface);
      border: 1px solid var(--border-strong);
      border-radius: 16px; padding: 1.25rem; width: 220px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    #pomodoroHeader {
      display: flex; justify-content: space-between;
      align-items: center; margin-bottom: 1rem; gap: 0.5rem;
    }
    #pomodoroTitle {
      font-family: 'Syne', sans-serif; font-weight: 700;
      font-size: 0.9rem; letter-spacing: 0.03em; color: var(--text);
      flex-shrink: 0;
    }
    #pomodoroStats { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 0; flex: 1; }
    #pomodoroTodayLabel { font-size: 0.5rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-faint); }
    #pomodoroTodayTime { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.8rem; color: var(--gold); white-space: nowrap; font-variant-numeric: tabular-nums; }
    #pomodoroClose {
      background: transparent; border: 1px solid var(--border); color: var(--text-faint);
      width: 22px; height: 22px; border-radius: 50%; cursor: pointer;
      font-size: 1rem; line-height: 1; display: flex; align-items: center; justify-content: center; transition: all 0.2s;
    }
    #pomodoroClose:hover { border-color: var(--gold); color: var(--gold); }
    #pomodoroDisplay { display: flex; justify-content: center; margin-bottom: 1rem; }
    #pomodoroCircle {
      position: relative; width: 100px; height: 100px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    #pomodoroSvg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
    #pomodoroTime {
      font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.5rem;
      letter-spacing: -0.02em; color: var(--text); position: relative; z-index: 2; line-height: 1;
    }
    #pomodoroTypeLabel {
      font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em;
      color: var(--text-faint); position: relative; z-index: 2; margin-top: 0.2rem;
    }
    #pomodoroControls { display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.85rem; }
    .pomo-btn {
      background: var(--surface-hover); border: 1px solid var(--border); color: var(--text-dim);
      border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.75rem; cursor: pointer;
      font-family: 'Syne', sans-serif; font-weight: 600; transition: all 0.2s; flex: 1;
    }
    .pomo-btn:hover { border-color: var(--gold); color: var(--gold); }
    .pomo-main { background: var(--gold); border-color: var(--gold); color: var(--bg); font-size: 1rem; flex: 1.5; }
    .pomo-main:hover { background: var(--text); border-color: var(--text); color: var(--bg); }
    .pomo-main.running { background: var(--error); border-color: var(--error); }
    #pomodoroModes { display: flex; gap: 0.35rem; }
    .pomo-mode-btn {
      flex: 1; background: transparent; border: 1px solid var(--border); color: var(--text-faint);
      border-radius: 4px; padding: 0.3rem 0.2rem; font-size: 0.55rem; cursor: pointer;
      font-family: 'Outfit', sans-serif; text-transform: uppercase; letter-spacing: 0.05em;
      transition: all 0.2s; text-align: center;
    }
    .pomo-mode-btn:hover, .pomo-mode-btn.active { border-color: var(--gold); color: var(--gold); background: rgba(217,185,140,0.07); }
    @keyframes pomoBlink {
      0%,100% { box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
      50% { box-shadow: 0 0 0 6px rgba(110,231,168,0.3), 0 8px 32px rgba(0,0,0,0.4); }
    }
    #pomodoroWidget.notify #pomodoroBody { animation: pomoBlink 0.8s ease 3; }
  `;

  document.head.appendChild(style);
  document.body.appendChild(widget);

  widget.addEventListener('click', (e) => {
    if (widget.classList.contains('collapsed') && e.target === widget) togglePomodoroWidget();
  });

  makeDraggable(widget, document.getElementById('pomodoroHandle'));
  updatePomodoroDisplay();
}

function makeDraggable(el, handle) {
  let offsetX, offsetY, dragging = false;
  handle.addEventListener('mousedown', (e) => {
    dragging = true;
    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    el.style.transition = 'none';
    e.preventDefault();
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    el.style.right = 'auto'; el.style.bottom = 'auto';
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
  });
  document.addEventListener('mouseup', () => { dragging = false; });
}

function togglePomodoroWidget() {
  const w = document.getElementById('pomodoroWidget');
  if (w) w.classList.toggle('collapsed');
  updatePomodoroDisplay();
}

function togglePomodoro() {
  pomodoroState.active ? pausePomodoro() : startPomodoro();
}

function startPomodoro() {
  pomodoroState.active = true;
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '⏸'; btn.classList.add('running'); }
  pomodoroState.interval = setInterval(() => {
    pomodoroState.seconds--;
    if (pomodoroState.type === 'work') {
      pomodoroState.totalWorkSeconds++;
      pomodoroState.todayWorkSeconds++;
      pomodoroState.lastWorkDate = new Date().toDateString();
      if (pomodoroState.totalWorkSeconds % 30 === 0) savePomodoroState();
    }
    updatePomodoroDisplay();
    if (pomodoroState.seconds <= 0) {
      clearInterval(pomodoroState.interval);
      pomodoroState.active = false;
      onPomodoroEnd();
    }
  }, 1000);
}

function pausePomodoro() {
  clearInterval(pomodoroState.interval);
  pomodoroState.active = false;
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '▶'; btn.classList.remove('running'); }
}

function resetPomodoro() {
  pausePomodoro();
  const durations = { work: pomodoroState.custom, pause: 5, long: 15 };
  pomodoroState.seconds = (durations[pomodoroState.type] || 25) * 60;
  updatePomodoroDisplay();
}

function setPomodoroMode(mode) {
  pausePomodoro();
  pomodoroState.type = mode;
  const durations = { work: pomodoroState.custom, pause: 5, long: 15 };
  pomodoroState.seconds = (durations[mode] || 25) * 60;
  ['modeWork','modePause','modeLong'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const modeMap = { work: 'modeWork', pause: 'modePause', long: 'modeLong' };
  const activeEl = document.getElementById(modeMap[mode]);
  if (activeEl) activeEl.classList.add('active');
  const arc = document.getElementById('pomodoroArc');
  if (arc) arc.style.stroke = mode === 'work' ? '#d9b98c' : mode === 'pause' ? '#6ee7a8' : '#fcc864';
  const typeLabel = document.getElementById('pomodoroTypeLabel');
  if (typeLabel) typeLabel.textContent = mode === 'work' ? 'Travail' : mode === 'pause' ? 'Pause' : 'Longue pause';
  updatePomodoroDisplay();
}

function changePomoDuration(delta) {
  pausePomodoro();
  pomodoroState.custom = Math.max(5, Math.min(60, pomodoroState.custom + delta));
  if (pomodoroState.type === 'work') pomodoroState.seconds = pomodoroState.custom * 60;
  const workBtn = document.getElementById('modeWork');
  if (workBtn) workBtn.textContent = `Travail ${pomodoroState.custom}m`;
  updatePomodoroDisplay();
}

function onPomodoroEnd() {
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '▶'; btn.classList.remove('running'); }
  const widget = document.getElementById('pomodoroWidget');
  if (widget) { widget.classList.add('notify'); setTimeout(() => widget.classList.remove('notify'), 3000); }
  try {
    if (typeof state !== 'undefined' && state.soundEnabled) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.frequency.value = freq; osc.type = 'sine';
        const t = ctx.currentTime + i * 0.15;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t); osc.stop(t + 0.35);
      });
    }
  } catch(e) {}
  setPomodoroMode(pomodoroState.type === 'work' ? 'pause' : 'work');
  savePomodoroState();
}

function updatePomodoroDisplay() {
  const timeEl = document.getElementById('pomodoroTime');
  const arcEl = document.getElementById('pomodoroArc');
  const todayEl = document.getElementById('pomodoroTodayTime');
  const widget = document.getElementById('pomodoroWidget');
  if (!timeEl) return;
  const timeStr = formatSeconds(pomodoroState.seconds);
  timeEl.textContent = timeStr;
  if (widget && widget.classList.contains('collapsed')) widget.setAttribute('data-time', timeStr);
  if (arcEl) {
    const durations = { work: pomodoroState.custom * 60, pause: 300, long: 900 };
    const total = durations[pomodoroState.type] || 1500;
    arcEl.style.strokeDashoffset = 276.46 * (1 - pomodoroState.seconds / total);
  }
  if (todayEl) todayEl.textContent = formatHours(pomodoroState.todayWorkSeconds);
}

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { loadPomodoroState(); initPomodoroWidget(); });
} else {
  loadPomodoroState();
  initPomodoroWidget();
}