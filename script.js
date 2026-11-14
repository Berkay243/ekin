/* =========================================================
   GRİPİN - SOR BANA SOR | ÇAPRAZ BULMACA HARİTASI
   
   Tek parça bağlantılı (Yatay + Dikey), çakışma ve istenmeyen
   komşuluk barındırmayan 13x9 gazete çapraz bulmacası.
   
   Baş Harfler: S - O - R - B - A - N - A - S - O - R (SOR BANA SOR)
   ========================================================= */

const ROWS = 13;
const COLS = 9;

const WORDS_MAP = [
  {
    id: 1,
    letter: "S",
    word: "SABIR",
    direction: "across",
    definition: "Acı, yoksulluk, haksızlık vb. üzücü durumlar karşısında ses çıkarmadan onların geçmesini bekleme erdemi; tahammül.",
    hint: "5 harfli. Zor zamanlarda dayanma gücü.",
    cells: [
      { r: 1, c: 0, ch: "S" },
      { r: 1, c: 1, ch: "A" },
      { r: 1, c: 2, ch: "B" },
      { r: 1, c: 3, ch: "I" },
      { r: 1, c: 4, ch: "R" }
    ]
  },
  {
    id: 2,
    letter: "O",
    word: "ORMAN",
    direction: "down",
    definition: "Ağaçlarla örtülü geniş alan; çeşitli ağaçların, çalıların ve canlıların bir arada bulunduğu doğal yaşam alanı.",
    hint: "5 harfli. Yeşil ağaçlarla kaplı geniş alan.",
    cells: [
      { r: 0, c: 4, ch: "O" },
      { r: 1, c: 4, ch: "R" },
      { r: 2, c: 4, ch: "M" },
      { r: 3, c: 4, ch: "A" },
      { r: 4, c: 4, ch: "N" }
    ]
  },
  {
    id: 3,
    letter: "R",
    word: "RADYO",
    direction: "across",
    definition: "Elektromanyetik dalgalarla ses yayınlarını uzaktan alıp dinlemeye yarayan cihaz; yayın kuruluşu.",
    hint: "5 harfli. Frekans ayarlayıp şarkı dinlenen cihaz.",
    cells: [
      { r: 3, c: 3, ch: "R" },
      { r: 3, c: 4, ch: "A" },
      { r: 3, c: 5, ch: "D" },
      { r: 3, c: 6, ch: "Y" },
      { r: 3, c: 7, ch: "O" }
    ]
  },
  {
    id: 4,
    letter: "B",
    word: "BOYUT",
    direction: "down",
    definition: "Uzunluk, genişlik ve derinlikten her biri; bir durumun veya kavramın kapsamı, ölçüsü.",
    hint: "5 harfli. En, boy veya derinlik ölçüsü.",
    cells: [
      { r: 2, c: 7, ch: "B" },
      { r: 3, c: 7, ch: "O" },
      { r: 4, c: 7, ch: "Y" },
      { r: 5, c: 7, ch: "U" },
      { r: 6, c: 7, ch: "T" }
    ]
  },
  {
    id: 5,
    letter: "A",
    word: "ANLATI",
    direction: "across",
    definition: "Bir olayın, durumun ya da duygunun söz veya yazıyla hikâye edilerek dile getirilmesi biçimi.",
    hint: "6 harfli. Roman veya hikâyelerin aktarılış tarzı.",
    cells: [
      { r: 6, c: 3, ch: "A" },
      { r: 6, c: 4, ch: "N" },
      { r: 6, c: 5, ch: "L" },
      { r: 6, c: 6, ch: "A" },
      { r: 6, c: 7, ch: "T" },
      { r: 6, c: 8, ch: "I" }
    ]
  },
  {
    id: 6,
    letter: "N",
    word: "NİSAN",
    direction: "down",
    definition: "Yılın dördüncü, ilkbahar mevsiminin ise ikinci ayı; baharın yağmurlarıyla bilinen ayı.",
    hint: "5 harfli. Mart ile Mayıs arasındaki bahar ayı.",
    cells: [
      { r: 6, c: 4, ch: "N" },
      { r: 7, c: 4, ch: "İ" },
      { r: 8, c: 4, ch: "S" },
      { r: 9, c: 4, ch: "A" },
      { r: 10, c: 4, ch: "N" }
    ]
  },
  {
    id: 7,
    letter: "A",
    word: "ADRES",
    direction: "across",
    definition: "Bir kimsenin oturduğu veya bir kuruluşun bulunduğu yerin cadde, sokak ve numara olarak tarifi.",
    hint: "5 harfli. Mektup veya kargo gönderirken yazılan konum.",
    cells: [
      { r: 8, c: 0, ch: "A" },
      { r: 8, c: 1, ch: "D" },
      { r: 8, c: 2, ch: "R" },
      { r: 8, c: 3, ch: "E" },
      { r: 8, c: 4, ch: "S" }
    ]
  },
  {
    id: 8,
    letter: "S",
    word: "SEVDA",
    direction: "down",
    definition: "Güçlü ve derin sevgi, gönülden bağlılık, aşk; eski şarkılarda sıkça geçen tutku kelimesi.",
    hint: "5 harfli. Aşk ve gönül bağı anlamındaki sözcük.",
    cells: [
      { r: 5, c: 1, ch: "S" },
      { r: 6, c: 1, ch: "E" },
      { r: 7, c: 1, ch: "V" },
      { r: 8, c: 1, ch: "D" },
      { r: 9, c: 1, ch: "A" }
    ]
  },
  {
    id: 9,
    letter: "O",
    word: "ONARIM",
    direction: "across",
    definition: "Bozulmuş, yıpranmış veya hasar görmüş bir şeyi yeniden çalışır ve sağlam duruma getirme işi; tamir.",
    hint: "6 harfli. Tamir, bakım ve yenileme çalışması.",
    cells: [
      { r: 10, c: 3, ch: "O" },
      { r: 10, c: 4, ch: "N" },
      { r: 10, c: 5, ch: "A" },
      { r: 10, c: 6, ch: "R" },
      { r: 10, c: 7, ch: "I" },
      { r: 10, c: 8, ch: "M" }
    ]
  },
  {
    id: 10,
    letter: "R",
    word: "ROMAN",
    direction: "down",
    definition: "İnsanın ya da çevrenin karakterlerini, duygularını ve başından geçen olayları geniş kapsamla anlatan uzun edebi eser.",
    hint: "5 harfli. Öyküden uzun, bölümlerden oluşan kitap türü.",
    cells: [
      { r: 8, c: 8, ch: "R" },
      { r: 9, c: 8, ch: "O" },
      { r: 10, c: 8, ch: "M" },
      { r: 11, c: 8, ch: "A" },
      { r: 12, c: 8, ch: "N" }
    ]
  }
];

const TARGET_SONG = "SORBANASOR";

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
let finalStepShown = false;
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
   HARİTAYI OLUŞTURMA (KESİŞİMLİ ÇAPRAZ BULMACA)
   ========================================================= */
function initGrid() {
  gridEl.innerHTML = "";

  const gridCells = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  WORDS_MAP.forEach(wordData => {
    wordData.cells.forEach((cell, idx) => {
      const existing = gridCells[cell.r][cell.c];
      const wordIds = existing ? existing.wordIds : [];
      if (!wordIds.includes(wordData.id)) wordIds.push(wordData.id);

      const clueNum = (idx === 0) ? wordData.id : (existing ? existing.clueNum : null);

      gridCells[cell.r][cell.c] = {
        type: "letter",
        wordIds: wordIds,
        targetChar: cell.ch,
        clueNum: clueNum
      };
    });
  });

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
        cellEl.dataset.wordIds = data.wordIds.join(",");
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
          if (data.clueNum && activeWordId !== data.clueNum) {
            selectWord(data.clueNum);
          } else if (data.wordIds.length > 1) {
            const currentIdx = data.wordIds.indexOf(activeWordId);
            const nextIdx = (currentIdx + 1) % data.wordIds.length;
            selectWord(data.wordIds[nextIdx]);
          } else {
            selectWord(data.wordIds[0]);
          }
        });
      }

      gridEl.appendChild(cellEl);
    }
  }

  updateProgress();
  btnWordHint.classList.remove("hidden");
  selectWord(1);
}

/* =========================================================
   SORU SEÇME
   ========================================================= */
function selectWord(wordId) {
  if (finalStepShown) return;

  activeWordId = wordId;
  const wordData = WORDS_MAP.find(w => w.id === wordId);
  if (!wordData) return;

  document.querySelectorAll(".cell").forEach(c => {
    c.classList.remove("active-row", "active-clue-cell");
    if (c.dataset.wordIds && c.dataset.wordIds.split(",").includes(String(wordId))) {
      c.classList.add("active-row");
    }
  });

  const firstCell = wordData.cells[0];
  const firstEl = gridEl.querySelector(`.cell[data-row="${firstCell.r}"][data-col="${firstCell.c}"]`);
  if (firstEl) firstEl.classList.add("active-clue-cell");

  const dirText = wordData.direction === "across" ? "Yatay" : "Dikey";
  $("q-badge").textContent = `${wordData.id}. Soru`;
  $("q-meta").textContent = `${dirText} · ${wordData.word.length} Harf`;
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

    checkAllWordsSolvedStatus();

    if (isAllSolved()) {
      setTimeout(showFinalStepInPanel, 700);
    } else if (solvedWordsMap[activeWordId]) {
      setTimeout(moveToNextUnsolved, 700);
    }
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

/* Kesişimlerle tüm harfleri açılan kelimeleri otomatik tamamla */
function checkAllWordsSolvedStatus() {
  WORDS_MAP.forEach(w => {
    const allRevealed = w.cells.every(c => Boolean(cellRevealed[`${c.r},${c.c}`]));
    if (allRevealed && !solvedWordsMap[w.id]) {
      solvedWordsMap[w.id] = true;
      paintWordAsSolved(w);
    }
  });
  updateProgress();
}

function isAllSolved() {
  return WORDS_MAP.every(w => Boolean(solvedWordsMap[w.id]));
}

/* =========================================================
   KELİMEYİ HARİTAYA TAM YERLEŞTİRME
   ========================================================= */
function paintWordAsSolved(wordData) {
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

function markWordSolved(wordData) {
  solvedWordsMap[wordData.id] = true;
  paintWordAsSolved(wordData);
  checkAllWordsSolvedStatus();
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

    markWordSolved(wordData);

    if (isAllSolved()) {
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
  const nextWord = WORDS_MAP.find(w => !solvedWordsMap[w.id]);
  if (nextWord) selectWord(nextWord.id);
}

function updateProgress() {
  const count = Object.keys(solvedWordsMap).length;
  $("progress-text").textContent = `${count} / ${WORDS_MAP.length} Kelime Çözüldü`;
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
  if (finalStepShown) return;
  finalStepShown = true;

  const card = $("question-card");
  card.innerHTML = `
    <div class="q-header">
      <span class="q-badge" style="color: #ffd36e;">🎉 BULMACA TAMAMLANDI</span>
      <span class="q-meta">Son Adım</span>
    </div>
    <p class="q-def" style="color: #ffffff; font-weight: 600;">
      Haritada çözdüğün kelimelerin <b>baş harflerini sırayla (1'den 10'a)</b> birleştirerek gizli şarkının adını yaz:
    </p>

    <form id="panel-final-form" autocomplete="off" style="margin-top: 14px;">
      <div class="input-row">
        <input
          id="panel-final-input"
          class="wordle-input"
          type="text"
          placeholder="Cevabını yaz..."
          maxlength="20"
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
      fb.textContent = "Cevap doğru değil. Haritadaki kelimelerin baş harflerini sırayla inceleyip tekrar dene!";
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
