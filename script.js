/* =========================================================
   ASLA ÇAKIŞMAYAN, TERTEMİZ KELİMELİK / BULMACA HARİTASI
   
   Her kelime kendi satırında/sütununda tamamen BAĞIMSIZDIR.
   Asla birbirine değmez, bitişmez, harf ezmez!
   
   SANDIĞIM Kelimeleri:
   1: S -> SEVGİ    (5 harf, Yatay) : Row 0, Col 0..4
   2: A -> ANLATI   (6 harf, Yatay) : Row 2, Col 0..5
   3: N -> NOSTALJİ (8 harf, Yatay) : Row 4, Col 0..7
   4: D -> DOĞA     (4 harf, Yatay) : Row 6, Col 0..3 (İçindeki Ğ harfi 6. harftir)
   5: I -> IŞILTI   (6 harf, Yatay) : Row 8, Col 0..5
   6: Ğ -> (DOĞA kelimesinin 3. kutusundaki 'Ğ' harfi üzerinde minik '6' yazar, soru yok)
   7: I -> ILIK     (4 harf, Yatay) : Row 10, Col 0..3
   8: M -> MELODİ   (6 harf, Yatay) : Row 12, Col 0..5
   
   Grid Boyutu: 13 Satır x 8 Sütun
   ========================================================= */

const ROWS = 13;
const COLS = 8;

const WORDS_MAP = [
  {
    id: 1,
    letter: "S",
    word: "SEVGİ",
    direction: "across",
    definition: "İnsanı bir şeye veya bir kimseye karşı yakın ilgi ve bağlılık göstermeye yönelten yüce duygu; muhabbet.",
    hint: "5 harfli. Kalpten gelen en saf duygu.",
    cells: [
      { r: 0, c: 0, ch: "S" },
      { r: 0, c: 1, ch: "E" },
      { r: 0, c: 2, ch: "V" },
      { r: 0, c: 3, ch: "G" },
      { r: 0, c: 4, ch: "İ" }
    ]
  },
  {
    id: 2,
    letter: "A",
    word: "ANLATI",
    direction: "across",
    definition: "Bir olayın, durumun ya da duygunun söz veya yazıyla hikâye edilerek dile getirilmesi biçimi.",
    hint: "6 harfli. Roman veya hikâyelerin aktarılış tarzı.",
    cells: [
      { r: 2, c: 0, ch: "A" },
      { r: 2, c: 1, ch: "N" },
      { r: 2, c: 2, ch: "L" },
      { r: 2, c: 3, ch: "A" },
      { r: 2, c: 4, ch: "T" },
      { r: 2, c: 5, ch: "I" }
    ]
  },
  {
    id: 3,
    letter: "N",
    word: "NOSTALJİ",
    direction: "across",
    definition: "Geçmişte kalan güzel günlere, yaşantılara veya mekânlara karşı duyulan tatlı ve özlem dolu duygu.",
    hint: "8 harfli. Geçmişe duyulan hasret.",
    cells: [
      { r: 4, c: 0, ch: "N" },
      { r: 4, c: 1, ch: "O" },
      { r: 4, c: 2, ch: "S" },
      { r: 4, c: 3, ch: "T" },
      { r: 4, c: 4, ch: "A" },
      { r: 4, c: 5, ch: "L" },
      { r: 4, c: 6, ch: "J" },
      { r: 4, c: 7, ch: "İ" }
    ]
  },
  {
    id: 4,
    letter: "D",
    word: "DOĞA",
    direction: "across",
    definition: "Kendi kuralları çerçevesinde sürekli gelişen, canlı ve cansız varlıkların tümü; tabiat.",
    hint: "4 harfli. Yeşili, dağları, ırmakları barındıran tabiat.",
    cells: [
      { r: 6, c: 0, ch: "D" },
      { r: 6, c: 1, ch: "O" },
      { r: 6, c: 2, ch: "Ğ" }, // 6. Harf 'Ğ' (Üzerinde 6 yazar)
      { r: 6, c: 3, ch: "A" }
    ]
  },
  {
    id: 5,
    letter: "I",
    word: "IŞILTI",
    direction: "across",
    definition: "Göz alıcı, pırıl pırıl parıldayan ışık dalgası; etrafa saçılan canlı parlaklık.",
    hint: "6 harfli, noktasız 'I' ile başlar. Yıldızların parıldaması.",
    cells: [
      { r: 8, c: 0, ch: "I" },
      { r: 8, c: 1, ch: "Ş" },
      { r: 8, c: 2, ch: "I" },
      { r: 8, c: 3, ch: "L" },
      { r: 8, c: 4, ch: "T" },
      { r: 8, c: 5, ch: "I" }
    ]
  },
  // 6 için bağımsız soru yok, DOĞA'nın içindedir.
  {
    id: 7,
    letter: "I",
    word: "ILIK",
    direction: "across",
    definition: "Ne sıcak ne de soğuk olan, ikisinin ortasında, insana tatlı bir ferahlık ve dinginlik veren.",
    hint: "4 harfli, noktasız 'I' ile başlar. Sıcak ile soğuk arası.",
    cells: [
      { r: 10, c: 0, ch: "I" },
      { r: 10, c: 1, ch: "L" },
      { r: 10, c: 2, ch: "I" },
      { r: 10, c: 3, ch: "K" }
    ]
  },
  {
    id: 8,
    letter: "M",
    word: "MELODİ",
    direction: "across",
    definition: "Belli bir duygu ve ahenk uyandıracak biçimde düzenlenmiş sesler dizisi; ezgi, nağme.",
    hint: "6 harfli. Şarkıların kulakta kalan tatlı ezgisi.",
    cells: [
      { r: 12, c: 0, ch: "M" },
      { r: 12, c: 1, ch: "E" },
      { r: 12, c: 2, ch: "L" },
      { r: 12, c: 3, ch: "O" },
      { r: 12, c: 4, ch: "D" },
      { r: 12, c: 5, ch: "İ" }
    ]
  }
];

const TARGET_SONG = "SANDIĞIM";

/* =========================================================
   ELEMENTLER & DURUM
   ========================================================= */
const $ = (id) => document.getElementById(id);
const audio = $("song");
const gridEl = $("crossword-grid");
const solveInput = $("solve-input");
const feedbackWord = $("feedback-word");
const btnWordHint = $("btn-word-hint");

let activeWordId = 1;
let solvedWordsMap = {};    // id -> true
let cellRevealed = {};      // "r,c" -> char
let audioUnlocked = false;
let isPlaying = false;

/* =========================================================
   YARDIMCI FONKSİYONLAR
   ========================================================= */
function cleanTR(str) {
  return (str || "").trim().toLocaleUpperCase("tr-TR");
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(screenId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   HARİTAYI OLUŞTURMA
   ========================================================= */
function initGrid() {
  gridEl.innerHTML = "";

  const gridCells = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  WORDS_MAP.forEach(wordData => {
    wordData.cells.forEach((cell, idx) => {
      let clueNum = (idx === 0) ? wordData.id : null;

      gridCells[cell.r][cell.c] = {
        type: "letter",
        wordId: wordData.id,
        targetChar: cell.ch,
        clueNum: clueNum
      };
    });
  });

  // DOĞA kelimesinin 3. harfi olan 'Ğ' hücresine (Row 6, Col 2) minik '6' numarasını koyuyoruz
  if (gridCells[6][2]) {
    gridCells[6][2].clueNum = 6;
  }

  // HTML Gridini İnşa Et
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const data = gridCells[r][c];
      const cellEl = document.createElement("div");
      cellEl.className = "cell";
      cellEl.dataset.row = r;
      cellEl.dataset.col = c;

      if (!data) {
        cellEl.classList.add("cell-block");
      } else {
        cellEl.classList.add("cell-letter");
        cellEl.dataset.wordId = data.wordId;
        cellEl.dataset.targetChar = data.targetChar;

        // Minik köşe numarası
        if (data.clueNum) {
          const badge = document.createElement("span");
          badge.className = "cell-num";
          badge.textContent = data.clueNum;
          cellEl.appendChild(badge);
        }

        const charSpan = document.createElement("span");
        charSpan.className = "cell-char";
        cellEl.appendChild(charSpan);

        cellEl.addEventListener("click", () => {
          if (data.clueNum === 6) {
            selectWord(4);
          } else {
            selectWord(data.wordId);
          }
        });
      }

      gridEl.appendChild(cellEl);
    }
  }

  btnWordHint.classList.remove("hidden");
  selectWord(1);
}

/* =========================================================
   SORU SEÇME
   ========================================================= */
function selectWord(wordId) {
  if (wordId === 6) wordId = 4;

  activeWordId = wordId;
  const wordData = WORDS_MAP.find(w => w.id === wordId);
  if (!wordData) return;

  document.querySelectorAll(".cell").forEach(c => {
    c.classList.remove("active-row", "active-clue-cell");
    if (c.dataset.wordId == wordId) {
      c.classList.add("active-row");
    }
  });

  const firstCell = wordData.cells[0];
  const firstEl = gridEl.querySelector(`.cell[data-row="${firstCell.r}"][data-col="${firstCell.c}"]`);
  if (firstEl) firstEl.classList.add("active-clue-cell");

  $("q-badge").textContent = `${wordData.id}. Soru`;
  $("q-meta").textContent = `${wordData.word.length} Harf`;
  $("q-def").textContent = `“${wordData.definition}”`;

  feedbackWord.textContent = "";
  feedbackWord.className = "feedback";
  solveInput.value = "";
  solveInput.placeholder = `${wordData.word.length} harfli cevabı yaz...`;

  if (solvedWordsMap[wordId]) {
    feedbackWord.textContent = `Bu kelime çözüldü: ${wordData.word} ✅`;
    feedbackWord.className = "feedback ok";
  } else {
    solveInput.focus();
  }
}

/* =========================================================
   İPUCU: OTOMATİK HARF DOLDURMA
   1. Baş harf boşsa -> Baş harf
   2. Baş harf doluysa -> Son harf
   3. İkisi de doluysa -> Aradaki boş rastgele bir harf
   ========================================================= */
btnWordHint.addEventListener("click", () => {
  const wordData = WORDS_MAP.find(w => w.id === activeWordId);
  if (!wordData) return;

  if (solvedWordsMap[activeWordId]) {
    feedbackWord.textContent = "Bu kelime zaten tamamen çözüldü! ✨";
    feedbackWord.className = "feedback ok";
    return;
  }

  const cells = wordData.cells;
  let targetCell = null;

  const first = cells[0];
  const last = cells[cells.length - 1];
  const isRevealed = (c) => Boolean(cellRevealed[`${c.r},${c.c}`]);

  if (!isRevealed(first)) {
    targetCell = first;
  } else if (!isRevealed(last)) {
    targetCell = last;
  } else {
    const emptyCells = cells.filter(c => !isRevealed(c));
    if (emptyCells.length > 0) {
      targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
  }

  if (targetCell) {
    revealSingleCell(targetCell.r, targetCell.c, targetCell.ch);
    feedbackWord.textContent = `💡 Haritaya bir harf yerleştirildi: '${targetCell.ch}'`;
    feedbackWord.className = "feedback ok";

    checkWordFullyRevealed(wordData);
  } else {
    feedbackWord.textContent = "Bu kelimedeki harfler zaten açılmış durumda!";
    feedbackWord.className = "feedback ok";
  }

  solveInput.focus();
});

function revealSingleCell(r, c, char) {
  cellRevealed[`${r},${c}`] = char;
  const cellEl = gridEl.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
  if (cellEl) {
    const charSpan = cellEl.querySelector(".cell-char");
    if (charSpan) charSpan.textContent = char;
    cellEl.classList.add("hinted");
  }
}

function checkWordFullyRevealed(wordData) {
  const allRevealed = wordData.cells.every(c => Boolean(cellRevealed[`${c.r},${c.c}`]));
  if (allRevealed && !solvedWordsMap[wordData.id]) {
    solvedWordsMap[wordData.id] = true;
    markWordSolved(wordData);
    updateProgress();
  }
}

/* =========================================================
   KELİMEYİ HARİTAYA TAM YERLEŞTİRME
   ========================================================= */
function markWordSolved(wordData) {
  wordData.cells.forEach(c => {
    cellRevealed[`${c.r},${c.c}`] = c.ch;
    const cellEl = gridEl.querySelector(`.cell[data-row="${c.r}"][data-col="${c.c}"]`);
    if (cellEl) {
      const charSpan = cellEl.querySelector(".cell-char");
      if (charSpan) charSpan.textContent = c.ch;
      cellEl.classList.remove("hinted");
      cellEl.classList.add("solved");
    }
  });
}

/* =========================================================
   CEVAP GÖNDERME KONTROLÜ
   ========================================================= */
$("solve-form").addEventListener("submit", (e) => {
  e.preventDefault();
  unlockAudio();

  const wordData = WORDS_MAP.find(w => w.id === activeWordId);
  if (!wordData) return;

  const guess = cleanTR(solveInput.value);
  const target = cleanTR(wordData.word);

  if (!guess) {
    feedbackWord.textContent = "Lütfen bir cevap yaz!";
    feedbackWord.className = "feedback bad";
    shakeElement(solveInput);
    return;
  }

  if (guess === target) {
    feedbackWord.textContent = "Doğru! Haritaya yerleştirildi. ✅";
    feedbackWord.className = "feedback ok";

    solvedWordsMap[wordData.id] = true;
    markWordSolved(wordData);
    updateProgress();

    const requiredIds = [1, 2, 3, 4, 5, 7, 8];
    const allDone = requiredIds.every(id => Boolean(solvedWordsMap[id]));

    if (allDone) {
      setTimeout(showFinalStepInPanel, 700);
    } else {
      setTimeout(moveToNextUnsolved, 700);
    }
  } else {
    feedbackWord.textContent = "Cevap doğru değil, tekrar dene 🔍";
    feedbackWord.className = "feedback bad";
    shakeElement(solveInput);
  }
});

function moveToNextUnsolved() {
  const requiredIds = [1, 2, 3, 4, 5, 7, 8];
  const nextId = requiredIds.find(id => !solvedWordsMap[id]);
  if (nextId) selectWord(nextId);
}

function updateProgress() {
  const count = Object.keys(solvedWordsMap).length;
  $("progress-text").textContent = `${count} / 7 Kelime Çözüldü`;
}

function shakeElement(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

/* =========================================================
   HARİTAYI KAYBETMEDEN FİNAL PANELİ
   KOPYA VERME YOK, BUTONDA SADECE "Onayla" YAZIYOR!
   ========================================================= */
function showFinalStepInPanel() {
  const card = $("question-card");
  card.innerHTML = `
    <div class="q-header">
      <span class="q-badge" style="color: #ffd36e;">🎉 BULMACA TAMAMLANDI</span>
      <span class="q-meta">Son Adım</span>
    </div>
    <p class="q-def" style="color: #ffffff; font-weight: 600;">
      Haritada çözdüğün kelimelerin <b>numaralarındaki harfleri sırayla</b> birleştir:
    </p>

    <form id="panel-final-form" autocomplete="off" style="margin-top: 14px;">
      <div class="input-row">
        <input
          id="panel-final-input"
          class="wordle-input"
          type="text"
          placeholder="Cevabını yaz..."
          maxlength="14"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        />
        <button type="submit" class="btn primary btn-inline">Onayla</button>
      </div>
    </form>
    <div class="feedback" id="feedback-panel-final"></div>
  `;

  const finalInput = $("panel-final-input");
  setTimeout(() => finalInput.focus(), 250);

  $("panel-final-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = cleanTR(finalInput.value).replace(/\s+/g, "");
    const fb = $("feedback-panel-final");

    if (guess === TARGET_SONG) {
      fb.textContent = "Tebrikler! Şarkı başlıyor... 🎵";
      fb.className = "feedback ok";

      playSongNow();

      setTimeout(() => {
        showScreen("screen-player");
        launchConfetti();
      }, 600);
    } else {
      fb.textContent = "Cevap doğru değil. Haritadaki kelimeleri inceleyip tekrar dene!";
      fb.className = "feedback bad";
      shakeElement(finalInput);
    }
  });
}

/* =========================================================
   SES VE MÜZİK MOTORU
   ========================================================= */
function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  try {
    audio.load();
    audio.muted = true;
    const p = audio.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
      }).catch(() => {
        audio.muted = false;
      });
    } else {
      audio.pause();
      audio.muted = false;
    }
  } catch (e) {
    audio.muted = false;
  }
}

function playSongNow() {
  audio.muted = false;
  audio.volume = 1;
  try { audio.currentTime = 0; } catch (e) { }

  let p;
  try {
    p = audio.play();
  } catch (err) {
    showPlayFallback();
    return;
  }

  if (p && typeof p.then === "function") {
    p.then(onAudioPlaying).catch(() => {
      showPlayFallback();
    });
  }

  setTimeout(() => {
    if (!audio.paused) onAudioPlaying();
    else showPlayFallback();
  }, 1800);
}

function onAudioPlaying() {
  isPlaying = true;
  $("btn-play-fallback").classList.add("hidden");
  $("btn-toggle").classList.remove("hidden");
  $("btn-toggle").textContent = "Şarkıyı Durdur";
  $("vinyl").classList.add("spin");
}

function showPlayFallback() {
  if (isPlaying) return;
  $("btn-play-fallback").classList.remove("hidden");
}

audio.addEventListener("playing", onAudioPlaying);

$("btn-toggle").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    $("btn-toggle").textContent = "Şarkıyı Durdur";
    $("vinyl").classList.add("spin");
  } else {
    audio.pause();
    $("btn-toggle").textContent = "Şarkıya Devam Et";
    $("vinyl").classList.remove("spin");
  }
});

$("btn-play-fallback").addEventListener("click", playSongNow);

/* =========================================================
   BAŞLA BUTONU
   ========================================================= */
$("btn-start").addEventListener("click", () => {
  unlockAudio();
  showScreen("screen-game");
  initGrid();
});

/* =========================================================
   KONFETİ
   ========================================================= */
function launchConfetti() {
  const canvas = $("confetti");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  ctx.scale(dpr, dpr);
  const colors = ["#538d4e", "#b59f3b", "#ffffff", "#818384", "#6aaa64"];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * innerWidth,
    y: -20 - Math.random() * innerHeight,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    vy: 2 + Math.random() * 3,
    vx: -1.5 + Math.random() * 3,
    r: Math.random() * Math.PI,
    vr: -0.1 + Math.random() * 0.2,
    c: colors[(Math.random() * colors.length) | 0]
  }));
  const start = performance.now();
  (function frame(t) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pieces.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (t - start < 6000) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, innerWidth, innerHeight);
  })(start);
}
