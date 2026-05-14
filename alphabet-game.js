// ========== ALPHABET OTAN · JEU D'ENTRAÎNEMENT INTERACTIF ==========
// Module indépendant. Plusieurs modes de jeu :
//   1. Compléter : on te donne quelques lettres, tu remplis les trous
//   2. À toi de jouer : lettre aléatoire → tape le mot OTAN
//   3. Mode chrono : 26 lettres en 60 secondes
//   4. Mon nom : épeler SAMY BACHOUCHE entièrement
//
// État sauvegardé en localStorage pour records perso.

const otanAlphabet = {
  A: 'Alpha',    B: 'Bravo',    C: 'Charlie', D: 'Delta',
  E: 'Echo',     F: 'Foxtrot',  G: 'Golf',    H: 'Hotel',
  I: 'India',    J: 'Juliett',  K: 'Kilo',    L: 'Lima',
  M: 'Mike',     N: 'November', O: 'Oscar',   P: 'Papa',
  Q: 'Quebec',   R: 'Romeo',    S: 'Sierra',  T: 'Tango',
  U: 'Uniform',  V: 'Victor',   W: 'Whiskey', X: 'X-Ray',
  Y: 'Yankee',   Z: 'Zulu'
};

const otanGameState = {
  mode: null,           // 'complete' | 'random' | 'speed' | 'name'
  currentQuestion: null,
  answers: [],
  score: 0,
  total: 0,
  startTime: null,
  timer: null,
  timeLeft: 0,
  records: {}           // { complete: best, random: best, speed: bestTime, name: best }
};

function loadOtanRecords() {
  try {
    const raw = localStorage.getItem('tfp_otan_records');
    if (raw) otanGameState.records = JSON.parse(raw);
  } catch(e) {}
}

function saveOtanRecords() {
  try {
    localStorage.setItem('tfp_otan_records', JSON.stringify(otanGameState.records));
  } catch(e) {}
}

// Normalise une réponse pour comparer (insensible casse, accents, espaces)
function normalizeOtan(str) {
  if (!str) return '';
  return str.toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // retire accents
    .replace(/[^a-z]/g, '')                              // garde lettres only
    .trim();
}

// Tolère 1 typo (distance Levenshtein simple)
function isCloseEnough(input, target) {
  const a = normalizeOtan(input);
  const b = normalizeOtan(target);
  if (a === b) return true;
  // Tolérance : 1 caractère de différence si mot >= 4 lettres
  if (b.length >= 4 && Math.abs(a.length - b.length) <= 1) {
    let diff = 0;
    const maxLen = Math.max(a.length, b.length);
    for (let i = 0; i < maxLen; i++) {
      if (a[i] !== b[i]) diff++;
      if (diff > 1) return false;
    }
    return diff <= 1;
  }
  return false;
}

// ============================================================
// MENU PRINCIPAL DU JEU
// ============================================================

function showOtanGame() {
  loadOtanRecords();

  let screen = document.getElementById('otanGameScreen');
  if (!screen) {
    screen = document.createElement('section');
    screen.id = 'otanGameScreen';
    screen.className = 'fiche-detail';
    document.querySelector('main').appendChild(screen);
  }

  const r = otanGameState.records;
  const rCompleteBest = r.complete !== undefined ? `${r.complete}/26` : '—';
  const rRandomBest = r.random !== undefined ? `${r.random}/10` : '—';
  const rSpeedBest = r.speed !== undefined ? `${r.speed}/26` : '—';
  const rNameBest = r.name !== undefined ? `${r.name}/13` : '—';

  screen.innerHTML = `
    <div class="hero" style="margin-bottom: 2rem;">
      <span class="hero-tag" style="background: linear-gradient(135deg, var(--gold), #d9b98c);">Alphabet OTAN · Entraînement</span>
      <h1>Apprends en <em>tapant</em>.<br>4 modes de jeu.</h1>
      <p>Pas du QCM mais du vrai entraînement actif : tu tapes les mots toi-même. Plus efficace pour la mémorisation, et ça te prépare à l'oral où tu devras épeler sans QCM.</p>
    </div>

    <div class="modes">
      <button class="mode-card" onclick="startOtanGame('complete')" style="position: relative;">
        <div style="position: absolute; top: 1rem; right: 1rem; font-size: 0.7rem; color: var(--gold); font-family: 'Syne', sans-serif; font-weight: 700;">Record: ${rCompleteBest}</div>
        <div class="mode-number">01</div>
        <div class="mode-title">Compléter l'alphabet</div>
        <div class="mode-desc">Les 26 lettres dans l'ordre. Tu tapes chaque mot OTAN. Indice si tu bloques.</div>
        <div class="mode-meta">Apprentissage</div>
      </button>

      <button class="mode-card" onclick="startOtanGame('random')" style="position: relative;">
        <div style="position: absolute; top: 1rem; right: 1rem; font-size: 0.7rem; color: var(--gold); font-family: 'Syne', sans-serif; font-weight: 700;">Record: ${rRandomBest}</div>
        <div class="mode-number">02</div>
        <div class="mode-title">Lettres aléatoires</div>
        <div class="mode-desc">10 lettres tirées au hasard. Plus dur, idéal pour vérifier ta mémoire.</div>
        <div class="mode-meta">Test</div>
      </button>

      <button class="mode-card" onclick="startOtanGame('speed')" style="position: relative; border-color: var(--error);">
        <div style="position: absolute; top: 1rem; right: 1rem; font-size: 0.7rem; color: var(--error); font-family: 'Syne', sans-serif; font-weight: 700;">Record: ${rSpeedBest}</div>
        <div class="mode-number" style="color: var(--error);">03</div>
        <div class="mode-title">Mode chrono · 60s</div>
        <div class="mode-desc">26 lettres en 60 secondes. Faire un max avant la fin. Pression du jury simulée.</div>
        <div class="mode-meta" style="color: var(--error);">Défi</div>
      </button>

      <button class="mode-card" onclick="startOtanGame('name')" style="position: relative; border-color: var(--gold);">
        <div style="position: absolute; top: 1rem; right: 1rem; font-size: 0.7rem; color: var(--gold); font-family: 'Syne', sans-serif; font-weight: 700;">Record: ${rNameBest}</div>
        <div class="mode-number" style="color: var(--gold);">04</div>
        <div class="mode-title">Ton nom : SAMY BACHOUCHE</div>
        <div class="mode-desc">13 lettres à épeler. Le réflexe à avoir au téléphone face à l'OPJ.</div>
        <div class="mode-meta" style="color: var(--gold);">Perso</div>
      </button>
    </div>

    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <button class="btn btn-ghost" onclick="showHome()">← Retour à l'accueil</button>
      ${Object.keys(otanGameState.records).length > 0 ? `<button class="btn btn-ghost" onclick="resetOtanRecords()" style="color: var(--text-faint);">Réinitialiser records</button>` : ''}
    </div>
  `;

  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const _home = document.getElementById('homeScreen');
  if (_home) _home.style.display = 'none';
  screen.classList.add('active');
  screen.style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetOtanRecords() {
  if (!confirm('Réinitialiser tous les records OTAN ?')) return;
  otanGameState.records = {};
  saveOtanRecords();
  showOtanGame();
}

// ============================================================
// DÉMARRAGE D'UN MODE
// ============================================================

function startOtanGame(mode) {
  otanGameState.mode = mode;
  otanGameState.answers = [];
  otanGameState.score = 0;
  otanGameState.startTime = Date.now();

  if (otanGameState.timer) {
    clearInterval(otanGameState.timer);
    otanGameState.timer = null;
  }

  // Construit la liste des lettres selon le mode
  let letters = [];
  if (mode === 'complete') {
    letters = Object.keys(otanAlphabet); // A-Z dans l'ordre
  } else if (mode === 'random') {
    letters = Object.keys(otanAlphabet).sort(() => Math.random() - 0.5).slice(0, 10);
  } else if (mode === 'speed') {
    letters = Object.keys(otanAlphabet).sort(() => Math.random() - 0.5); // ordre aléatoire
    otanGameState.timeLeft = 60;
    otanGameState.timer = setInterval(tickOtanTimer, 1000);
  } else if (mode === 'name') {
    letters = 'SAMYBACHOUCHE'.split('');
  }

  otanGameState.letters = letters;
  otanGameState.total = letters.length;
  otanGameState.currentIndex = 0;

  renderOtanQuestion();
}

function tickOtanTimer() {
  otanGameState.timeLeft--;
  const el = document.getElementById('otanTimer');
  if (el) {
    el.textContent = otanGameState.timeLeft + 's';
    if (otanGameState.timeLeft <= 10) el.style.color = 'var(--error)';
  }
  if (otanGameState.timeLeft <= 0) {
    clearInterval(otanGameState.timer);
    otanGameState.timer = null;
    finishOtanGame();
  }
}

// ============================================================
// AFFICHAGE D'UNE QUESTION
// ============================================================

function renderOtanQuestion() {
  if (otanGameState.currentIndex >= otanGameState.letters.length) {
    finishOtanGame();
    return;
  }

  let screen = document.getElementById('otanGamePlayScreen');
  if (!screen) {
    screen = document.createElement('section');
    screen.id = 'otanGamePlayScreen';
    screen.className = 'fiche-detail';
    document.querySelector('main').appendChild(screen);
  }

  const currentLetter = otanGameState.letters[otanGameState.currentIndex];
  const idx = otanGameState.currentIndex;
  const total = otanGameState.letters.length;
  const progress = Math.round((idx / total) * 100);

  // Construction du contexte (lettres précédentes pour le mode "compléter")
  let contextHTML = '';
  if (otanGameState.mode === 'complete') {
    // Affiche les lettres déjà répondues + l'actuelle en surbrillance + les suivantes en grisé
    const allLetters = Object.keys(otanAlphabet);
    contextHTML = `
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 2rem; padding: 1rem; background: var(--surface); border-radius: 12px; border: 1px solid var(--border); justify-content: center;">
        ${allLetters.map((L, i) => {
          let style = '';
          let content = '';
          if (i < idx) {
            // Lettre déjà répondue
            const ans = otanGameState.answers[i];
            if (ans && ans.correct) {
              style = 'background: rgba(110,231,168,0.15); color: var(--success); border: 1px solid var(--success);';
              content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.95rem;">${L}</div><div style="font-size:0.65rem;opacity:0.85;">${otanAlphabet[L]}</div>`;
            } else {
              style = 'background: rgba(239,68,68,0.1); color: var(--error); border: 1px solid var(--error);';
              content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.95rem;">${L}</div><div style="font-size:0.65rem;opacity:0.85;">${otanAlphabet[L]}</div>`;
            }
          } else if (i === idx) {
            style = 'background: var(--gold); color: var(--bg); border: 2px solid var(--gold); transform: scale(1.1);';
            content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;">${L}</div><div style="font-size:0.6rem;opacity:0.85;">?</div>`;
          } else {
            style = 'background: var(--surface-hover); color: var(--text-faint); border: 1px solid var(--border);';
            content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.95rem;">${L}</div><div style="font-size:0.6rem;opacity:0.4;">?</div>`;
          }
          return `<div style="${style} padding: 0.5rem 0.4rem; border-radius: 8px; min-width: 50px; text-align: center; transition: all 0.2s;">${content}</div>`;
        }).join('')}
      </div>
    `;
  } else if (otanGameState.mode === 'name') {
    const nameStr = 'SAMY BACHOUCHE';
    // Construire avec espace
    const display = [];
    let realIdx = 0;
    for (let i = 0; i < nameStr.length; i++) {
      const ch = nameStr[i];
      if (ch === ' ') {
        display.push(`<div style="width: 12px;"></div>`);
        continue;
      }
      let style = '';
      let content = '';
      if (realIdx < idx) {
        const ans = otanGameState.answers[realIdx];
        if (ans && ans.correct) {
          style = 'background: rgba(110,231,168,0.15); color: var(--success); border: 1px solid var(--success);';
        } else {
          style = 'background: rgba(239,68,68,0.1); color: var(--error); border: 1px solid var(--error);';
        }
        content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;">${ch}</div><div style="font-size:0.6rem;opacity:0.85;">${otanAlphabet[ch]}</div>`;
      } else if (realIdx === idx) {
        style = 'background: var(--gold); color: var(--bg); border: 2px solid var(--gold); transform: scale(1.1);';
        content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.3rem;">${ch}</div><div style="font-size:0.6rem;opacity:0.85;">?</div>`;
      } else {
        style = 'background: var(--surface-hover); color: var(--text-faint); border: 1px solid var(--border);';
        content = `<div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;">${ch}</div><div style="font-size:0.6rem;opacity:0.4;">?</div>`;
      }
      display.push(`<div style="${style} padding: 0.6rem 0.5rem; border-radius: 8px; min-width: 55px; text-align: center; transition: all 0.2s;">${content}</div>`);
      realIdx++;
    }
    contextHTML = `
      <div style="margin-bottom: 2rem; padding: 1.25rem; background: var(--surface); border-radius: 12px; border: 1px solid var(--border);">
        <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 0.75rem; text-align: center; font-family: 'Syne', sans-serif;">SAMY BACHOUCHE</div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; justify-content: center;">
          ${display.join('')}
        </div>
      </div>
    `;
  }

  // Header (timer si chrono, sinon progression)
  let headerHTML = '';
  if (otanGameState.mode === 'speed') {
    headerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-faint);">Score : ${otanGameState.score}</div>
        <div id="otanTimer" style="font-family: 'Syne', sans-serif; font-weight: 700; font-size: 2rem; color: var(--text); font-variant-numeric: tabular-nums;">${otanGameState.timeLeft}s</div>
      </div>
    `;
  } else {
    headerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-faint);">Score : ${otanGameState.score}/${total}</div>
          <div style="font-size: 0.85rem; color: var(--text-dim); font-variant-numeric: tabular-nums;">${idx + 1} / ${total}</div>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div>
      </div>
    `;
  }

  screen.innerHTML = `
    ${headerHTML}
    ${contextHTML}

    <div style="text-align: center; margin-bottom: 2rem;">
      <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-faint); margin-bottom: 0.5rem;">Quel mot OTAN pour la lettre :</div>
      <div style="font-family: 'Syne', sans-serif; font-weight: 700; font-size: 5rem; line-height: 1; color: var(--gold); margin-bottom: 1.5rem;">${currentLetter}</div>
    </div>

    <form id="otanForm" onsubmit="submitOtanAnswer(event); return false;" style="margin-bottom: 1.5rem;">
      <input
        id="otanInput"
        type="text"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="Tape le mot…"
        style="
          width: 100%;
          padding: 1rem 1.25rem;
          background: var(--surface);
          border: 2px solid var(--border);
          border-radius: 12px;
          color: var(--text);
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          text-align: center;
          letter-spacing: 0.02em;
          outline: none;
          transition: border-color 0.2s;
        "
        onfocus="this.style.borderColor='var(--gold)';"
        onblur="this.style.borderColor='var(--border)';"
      />
    </form>

    <div id="otanFeedback" style="display: none; margin-bottom: 1.5rem;"></div>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="document.getElementById('otanForm').requestSubmit();" style="flex: 1;">Valider</button>
      <button class="btn" onclick="skipOtanQuestion()" style="flex: 0 0 auto;">Passer →</button>
      ${otanGameState.mode === 'complete' || otanGameState.mode === 'name' ? `<button class="btn btn-ghost" onclick="showOtanHint()" style="flex: 0 0 auto;">💡 Indice</button>` : ''}
    </div>

    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <button class="btn btn-ghost" onclick="if(confirm('Quitter le jeu ?')) { if(otanGameState.timer) clearInterval(otanGameState.timer); showOtanGame(); }">← Quitter</button>
    </div>
  `;

  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const _home = document.getElementById('homeScreen');
  if (_home) _home.style.display = 'none';
  screen.classList.add('active');
  screen.style.display = 'block';

  // Focus auto sur l'input
  setTimeout(() => {
    const input = document.getElementById('otanInput');
    if (input) input.focus();
  }, 50);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// SOUMISSION D'UNE RÉPONSE
// ============================================================

function submitOtanAnswer(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('otanInput');
  if (!input) return;
  const answer = input.value.trim();
  if (!answer) {
    input.focus();
    return;
  }

  const currentLetter = otanGameState.letters[otanGameState.currentIndex];
  const expected = otanAlphabet[currentLetter];
  const correct = isCloseEnough(answer, expected);

  otanGameState.answers.push({
    letter: currentLetter,
    given: answer,
    expected,
    correct
  });
  if (correct) otanGameState.score++;

  // Feedback visuel court
  const feedbackEl = document.getElementById('otanFeedback');
  if (feedbackEl) {
    const bg = correct ? 'rgba(110,231,168,0.1)' : 'rgba(239,68,68,0.1)';
    const color = correct ? 'var(--success)' : 'var(--error)';
    const label = correct
      ? `✓ ${expected}`
      : `✗ La bonne réponse : ${expected}`;
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
      <div style="background: ${bg}; border-left: 3px solid ${color}; padding: 0.85rem 1.25rem; border-radius: 0 8px 8px 0; color: ${color}; font-family: 'Syne', sans-serif; font-weight: 600;">
        ${label}
      </div>
    `;
  }

  // Désactive l'input
  input.disabled = true;
  input.style.opacity = '0.6';

  // Son
  try {
    if (typeof state !== 'undefined' && state.soundEnabled) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = correct ? 880 : 220;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    }
  } catch(e) {}

  // Délai puis question suivante (plus court si correct)
  setTimeout(() => {
    otanGameState.currentIndex++;
    renderOtanQuestion();
  }, correct ? 700 : 1500);
}

function skipOtanQuestion() {
  const currentLetter = otanGameState.letters[otanGameState.currentIndex];
  const expected = otanAlphabet[currentLetter];
  otanGameState.answers.push({
    letter: currentLetter,
    given: '',
    expected,
    correct: false,
    skipped: true
  });
  otanGameState.currentIndex++;
  renderOtanQuestion();
}

function showOtanHint() {
  const currentLetter = otanGameState.letters[otanGameState.currentIndex];
  const expected = otanAlphabet[currentLetter];
  const hint = expected[0] + '…' + expected[expected.length - 1] + ' (' + expected.length + ' lettres)';
  const feedbackEl = document.getElementById('otanFeedback');
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
      <div style="background: rgba(217,185,140,0.1); border-left: 3px solid var(--gold); padding: 0.85rem 1.25rem; border-radius: 0 8px 8px 0; color: var(--gold); font-family: 'Syne', sans-serif; font-weight: 600;">
        💡 Indice : ${hint}
      </div>
    `;
  }
  const input = document.getElementById('otanInput');
  if (input) input.focus();
}

// ============================================================
// BILAN FINAL
// ============================================================

function finishOtanGame() {
  if (otanGameState.timer) {
    clearInterval(otanGameState.timer);
    otanGameState.timer = null;
  }

  const score = otanGameState.score;
  const total = otanGameState.total;
  const percent = Math.round((score / total) * 100);
  const duration = Math.round((Date.now() - otanGameState.startTime) / 1000);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const mode = otanGameState.mode;

  // Mise à jour record
  const previousRecord = otanGameState.records[mode];
  let isNewRecord = false;
  if (previousRecord === undefined || score > previousRecord) {
    otanGameState.records[mode] = score;
    isNewRecord = true;
    saveOtanRecords();
  }

  let message = '';
  let messageColor = '';
  if (percent === 100) {
    message = "Parfait. Tu connais l'alphabet OTAN par cœur.";
    messageColor = 'var(--success)';
  } else if (percent >= 85) {
    message = "Excellent. Quelques lettres à revoir et c'est tout bon.";
    messageColor = 'var(--gold)';
  } else if (percent >= 60) {
    message = "Pas mal. Refais le mode 'Compléter' pour consolider.";
    messageColor = '#fcc864';
  } else {
    message = "À retravailler. Commence par le mode 'Compléter' avec les indices.";
    messageColor = 'var(--error)';
  }

  // Liste des erreurs/oublis
  const errors = otanGameState.answers.filter(a => !a.correct);

  let screen = document.getElementById('otanGamePlayScreen');
  if (!screen) return;

  screen.innerHTML = `
    <div class="hero-tag" style="margin-bottom: 1.5rem;">Alphabet OTAN · Bilan</div>

    <div style="text-align: center; margin-bottom: 2.5rem;">
      <div style="font-family: 'Syne', sans-serif; font-weight: 700; font-size: 4rem; line-height: 1; color: ${messageColor}; margin-bottom: 0.5rem;">
        ${score}<span style="color: var(--text-faint); font-size: 2.5rem;">/${total}</span>
      </div>
      <div style="font-family: 'Syne', sans-serif; font-weight: 600; font-size: 1.5rem; color: ${messageColor}; margin-bottom: 1rem;">
        ${percent}%${isNewRecord ? ' · 🏆 NOUVEAU RECORD' : ''}
      </div>
      <div style="color: var(--text); font-size: 1rem; max-width: 500px; margin: 0 auto 1rem;">${message}</div>
      <div style="color: var(--text-faint); font-size: 0.85rem;">
        Temps : ${minutes > 0 ? minutes + 'min ' : ''}${seconds}s
      </div>
    </div>

    ${errors.length > 0 ? `
      <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <div style="font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; color: var(--error); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">
          ${errors.length} lettre${errors.length > 1 ? 's' : ''} à revoir
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${errors.map(a => `
            <div style="background: var(--surface-hover); padding: 0.5rem 0.85rem; border-radius: 8px; border: 1px solid var(--border);">
              <span style="font-family: 'Syne', sans-serif; font-weight: 700; color: var(--gold); margin-right: 0.5rem;">${a.letter}</span>
              <span style="color: var(--text); font-weight: 600;">${a.expected}</span>
              ${a.given && !a.skipped ? `<span style="color: var(--text-faint); font-size: 0.85rem; margin-left: 0.5rem;">(tu as tapé : ${a.given})</span>` : a.skipped ? `<span style="color: var(--text-faint); font-size: 0.85rem; margin-left: 0.5rem;">(passé)</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
      <button class="btn btn-primary" onclick="startOtanGame('${mode}')" style="flex: 1; min-width: 200px;">Rejouer ce mode</button>
      <button class="btn" onclick="showOtanGame()" style="flex: 1; min-width: 200px;">Autres modes</button>
    </div>

    <div style="padding-top: 2rem; border-top: 1px solid var(--border);">
      <button class="btn btn-ghost" onclick="showHome()">← Retour à l'accueil</button>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// INTÉGRATION DOM
// ============================================================
