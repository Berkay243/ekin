/* =========================================================
   CRUSH - BENİM OLSANA | ÇAPRAZ BULMACA HARİTASI & ŞAKA AKIŞI
   
   Tek parça bağlantılı (Yatay + Dikey), çakışma ve istenmeyen
   komşuluk barındırmayan 7x7 gazete çapraz bulmacası.
   
   Baş Harfler: B - E - N - İ - M (BENİM -> BENİM OLSANA)
   ========================================================= */

const ROWS = 7;
const COLS = 7;

const WORD_SETS = [
  [
    {
      id: 1,
      letter: "B",
      word: "BESTE",
      direction: "across",
      escapeCellIndex: 2, // 'S' (1,2) - kesişim dışı
      definition: "Bir müzik parçasını oluşturan ezgilerin bütünü; bir şairin dizeleri üzerine kurulan müzik eseri.",
      hint: "5 harfli. Şarkı sözlerinin buluştuğu melodi eseri.",
      cells: [
        { r: 1, c: 0, ch: "B" },
        { r: 1, c: 1, ch: "E" },
        { r: 1, c: 2, ch: "S" },
        { r: 1, c: 3, ch: "T" },
        { r: 1, c: 4, ch: "E" }
      ]
    },
    {
      id: 2,
      letter: "E",
      word: "ETKEN",
      direction: "down",
      escapeCellIndex: 2, // 'K' (2,3) - kesişim dışı
      definition: "Bir etki veya sonuca yol açan sebep, unsur; faktör.",
      hint: "5 harfli. Bir sonucu doğuran temel unsur, faktör.",
      cells: [
        { r: 0, c: 3, ch: "E" },
        { r: 1, c: 3, ch: "T" },
        { r: 2, c: 3, ch: "K" },
        { r: 3, c: 3, ch: "E" },
        { r: 4, c: 3, ch: "N" }
      ]
    },
    {
      id: 3,
      letter: "N",
      word: "NEFES",
      direction: "across",
      escapeCellIndex: 2, // 'F' (3,4) - kesişim dışı
      definition: "Canlıların yaşamak için ciğerlerine çekip dışarı verdiği hava; soluk.",
      hint: "5 harfli. Alıp verdiğimiz hayat soluğu.",
      cells: [
        { r: 3, c: 2, ch: "N" },
        { r: 3, c: 3, ch: "E" },
        { r: 3, c: 4, ch: "F" },
        { r: 3, c: 5, ch: "E" },
        { r: 3, c: 6, ch: "S" }
      ]
    },
    {
      id: 4,
      letter: "İ",
      word: "İSTEK",
      direction: "down",
      escapeCellIndex: 2, // 'T' (4,6) - kesişim dışı
      definition: "Bir şeye karşı duyulan içsel yönelim, arzu; bir şeyin olmasını gönülden dileme.",
      hint: "5 harfli. Arzu, talep veya dilek.",
      cells: [
        { r: 2, c: 6, ch: "İ" },
        { r: 3, c: 6, ch: "S" },
        { r: 4, c: 6, ch: "T" },
        { r: 5, c: 6, ch: "E" },
        { r: 6, c: 6, ch: "K" }
      ]
    },
    {
      id: 5,
      letter: "M",
      word: "MÜZİK",
      direction: "across",
      definition: "Seslerin belirli bir ahenk, ritim ve melodi içinde düzenlenmesi sanatı; musiki.",
      hint: "5 harfli. Notaların ve şarkıların sanatı.",
      cells: [
        { r: 6, c: 2, ch: "M" },
        { r: 6, c: 3, ch: "Ü" },
        { r: 6, c: 4, ch: "Z" },
        { r: 6, c: 5, ch: "İ" },
        { r: 6, c: 6, ch: "K" }
      ]
    }
  ],
  [
    {
      id: 1,
      letter: "B",
      word: "BAKIŞ",
      direction: "across",
      escapeCellIndex: 3, // 'I' (1,3) - kesişim dışı
      definition: "Gözlerin bir şeye çevrilmesiyle oluşan anlamlı ifade; nazar.",
      hint: "5 harfli. Gözle süzme veya yöneltilen ilk dikkat.",
      cells: [
        { r: 1, c: 0, ch: "B" },
        { r: 1, c: 1, ch: "A" },
        { r: 1, c: 2, ch: "K" },
        { r: 1, c: 3, ch: "I" },
        { r: 1, c: 4, ch: "Ş" }
      ]
    },
    {
      id: 2,
      letter: "E",
      word: "EKİN",
      direction: "down",
      escapeCellIndex: 2, // 'İ' (2,2) - kesişim dışı
      definition: "Tarlaya atılan tohumun filizlenip boy vermiş hali; bir toplumun kültür ve uygarlık birikimi.",
      hint: "4 harfli. Tahılın tarladaki yeşil hali veya kültür.",
      cells: [
        { r: 0, c: 2, ch: "E" },
        { r: 1, c: 2, ch: "K" },
        { r: 2, c: 2, ch: "İ" },
        { r: 3, c: 2, ch: "N" }
      ]
    },
    {
      id: 3,
      letter: "N",
      word: "NEHİR",
      direction: "across",
      escapeCellIndex: 2, // 'H' (3,4) - kesişim dışı
      definition: "Yatak boyunca sürekli akarak denize veya göle ulaşan büyük akarsu; ırmak.",
      hint: "5 harfli. Deniz veya göle dökülen büyük su yolu.",
      cells: [
        { r: 3, c: 2, ch: "N" },
        { r: 3, c: 3, ch: "E" },
        { r: 3, c: 4, ch: "H" },
        { r: 3, c: 5, ch: "İ" },
        { r: 3, c: 6, ch: "R" }
      ]
    },
    {
      id: 4,
      letter: "İ",
      word: "İRADE",
      direction: "down",
      escapeCellIndex: 2, // 'A' (4,6) - kesişim dışı
      definition: "Bir şeyi yapıp yapmamaya özgürce karar verme ve bunu gerçekleştirme gücü; istenç.",
      hint: "5 harfli. Karar verme ve uygulama gücü; istenç.",
      cells: [
        { r: 2, c: 6, ch: "İ" },
        { r: 3, c: 6, ch: "R" },
        { r: 4, c: 6, ch: "A" },
        { r: 5, c: 6, ch: "D" },
        { r: 6, c: 6, ch: "E" }
      ]
    },
    {
      id: 5,
      letter: "M",
      word: "MÜJDE",
      direction: "across",
      definition: "Duyulduğunda kişiyi mutlu eden sevinçli haber; muştu.",
      hint: "5 harfli. Beklenen güzel ve sevinçli haber; muştu.",
      cells: [
        { r: 6, c: 2, ch: "M" },
        { r: 6, c: 3, ch: "Ü" },
        { r: 6, c: 4, ch: "J" },
        { r: 6, c: 5, ch: "D" },
        { r: 6, c: 6, ch: "E" }
      ]
    }
  ]
];

let currentSetIndex = 0;
let WORDS_MAP = WORD_SETS[currentSetIndex];

const INITIAL_TARGET = "BENİM";
const FINAL_TARGET = "BENİMOLSANA";

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

// Kaçan harf & dalga sıfırlama durumu
let escapedTriggered = { 1: false, 2: false, 3: false, 4: false };
let escapedCells = new Set();     // "r,c" kaçmış boş yuvalar
let activeRunaways = new Map();   // key "r,c" -> runaway nesnesi
let returnedEscapeCount = 0;
let isWaveResetting = false;
let runawayRafId = null;

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

function setGameControlsDisabled(disabled) {
  solveInput.disabled = disabled;
  btnWordHint.disabled = disabled;
  const submitBtn = document.querySelector("#solve-form button[type='submit']");
  if (submitBtn) submitBtn.disabled = disabled;
}

/* =========================================================
   HARİTAYI OLUŞTURMA (KESİŞİMLİ ÇAPRAZ BULMACA)
   ========================================================= */
function initGrid(customFeedback = null) {
  if (runawayRafId) {
    cancelAnimationFrame(runawayRafId);
    runawayRafId = null;
  }
  document.querySelectorAll(".runaway-letter, .wave-flee-tile").forEach(el => el.remove());

  activeRunaways.clear();
  escapedCells.clear();
  escapedTriggered = { 1: false, 2: false, 3: false, 4: false };
  returnedEscapeCount = 0;
  solvedWordsMap = {};
  cellRevealed = {};
  finalStepShown = false;
  isWaveResetting = false;
  setGameControlsDisabled(false);

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
  selectWord(1, Boolean(customFeedback));
  if (customFeedback) {
    feedbackWord.textContent = customFeedback;
    feedbackWord.className = "feedback warn";
  }
}

/* =========================================================
   SORU SEÇME
   ========================================================= */
function selectWord(wordId, preserveFeedback = false) {
  if (finalStepShown || isWaveResetting) return;

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

  if (!preserveFeedback) {
    if (solvedWordsMap[wordId]) {
      feedbackWord.textContent = `Bu kelime çözüldü: ${wordData.word} ✅`;
      feedbackWord.className = "feedback ok";
    } else if (activeRunaways.size > 0) {
      feedbackWord.textContent = "🏃‍♂️ Kaçan bir harf var! Tutup boş kutusuna geri koyabilirsin.";
      feedbackWord.className = "feedback warn";
    } else {
      feedbackWord.textContent = "";
      feedbackWord.className = "feedback";
    }
  }

  solveInput.value = "";
  solveInput.placeholder = `${wordData.word.length} harfli cevabı yaz...`;

  if (!solvedWordsMap[wordId]) {
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
  if (finalStepShown || isWaveResetting) return;

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
  const isRevealed = (c) => {
    const key = `${c.r},${c.c}`;
    return Boolean(cellRevealed[key]) || escapedCells.has(key);
  };

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

    const anyNewlySolved = checkAllWordsSolvedStatus();

    if (anyNewlySolved) {
      const newlyEscaped = checkEscapeTriggers();
      if (newlyEscaped.length > 0) {
        const firstEscaped = newlyEscaped[0];
        feedbackWord.textContent = `🏃‍♂️ Eyvah! ${firstEscaped.wordId}. kelimeden '${firstEscaped.ch}' harfi kaçıyor! Tutup yerine koy!`;
        feedbackWord.className = "feedback warn";
      }
      handlePostSolveTransition(newlyEscaped.length > 0);
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
  let anyNewlySolved = false;
  WORDS_MAP.forEach(w => {
    const allRevealed = w.cells.every(c => {
      const key = `${c.r},${c.c}`;
      return Boolean(cellRevealed[key]) || escapedCells.has(key);
    });
    if (allRevealed && !solvedWordsMap[w.id]) {
      solvedWordsMap[w.id] = true;
      paintWordAsSolved(w);
      anyNewlySolved = true;
    }
  });
  updateProgress();
  return anyNewlySolved;
}

function isAllSolved() {
  return WORDS_MAP.every(w => Boolean(solvedWordsMap[w.id]));
}

/* =========================================================
   KELİMEYİ HARİTAYA TAM YERLEŞTİRME
   ========================================================= */
function paintWordAsSolved(wordData) {
  wordData.cells.forEach(c => {
    const key = `${c.r},${c.c}`;
    if (escapedCells.has(key)) return;
    cellRevealed[key] = c.ch;
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
   KAÇAN HARF & DALGA SIFIRLAMA ŞAKASI
   - 2 tamamlanınca -> 1. kelimeden bir harf kaçsın
   - 3 tamamlanınca -> 2. kelimeden bir harf kaçsın
   - 4 tamamlanınca -> 3. kelimeden bir harf kaçsın
   - 5 tamamlanınca -> 4. kelimeden bir harf kaçsın
   - Hiçbiri yerine konmadan 5 kelime biterse -> tüm harfler büyüyen dalgayla kaçsın ve harita sıfırlanıp kelimeler/sorular değişsin
   ========================================================= */
function isNearTargetSlot(item) {
  const targetRect = item.cellEl.getBoundingClientRect();
  const tileCenterX = item.x + item.width / 2;
  const tileCenterY = item.y + item.height / 2;
  const pad = 22;
  return (
    tileCenterX >= targetRect.left - pad &&
    tileCenterX <= targetRect.right + pad &&
    tileCenterY >= targetRect.top - pad &&
    tileCenterY <= targetRect.bottom + pad
  );
}

function spawnRunawayLetter(wordId) {
  const wordData = WORDS_MAP.find(w => w.id === wordId);
  if (!wordData || typeof wordData.escapeCellIndex !== "number") return null;

  const escCell = wordData.cells[wordData.escapeCellIndex];
  const key = `${escCell.r},${escCell.c}`;
  if (activeRunaways.has(key)) return null;

  const cellEl = gridEl.querySelector(`.cell[data-row="${escCell.r}"][data-col="${escCell.c}"]`);
  if (!cellEl) return null;

  delete cellRevealed[key];
  escapedCells.add(key);

  const charSpan = cellEl.querySelector(".cell-char");
  if (charSpan) charSpan.textContent = "";
  cellEl.classList.remove("solved", "hinted");
  cellEl.classList.add("escaped-slot");

  const rect = cellEl.getBoundingClientRect();

  const tileEl = document.createElement("div");
  tileEl.className = "runaway-letter";
  tileEl.style.width = `${rect.width}px`;
  tileEl.style.height = `${rect.height}px`;

  const innerEl = document.createElement("div");
  innerEl.className = "runaway-inner";
  innerEl.textContent = escCell.ch;
  tileEl.appendChild(innerEl);
  document.body.appendChild(tileEl);

  const dirX = rect.left > window.innerWidth / 2 ? -1 : 1;
  const dirY = rect.top > window.innerHeight / 2 ? -1 : 1;

  const item = {
    key,
    wordId,
    r: escCell.r,
    c: escCell.c,
    ch: escCell.ch,
    cellEl,
    tileEl,
    width: rect.width,
    height: rect.height,
    x: rect.left,
    y: rect.top,
    vx: dirX * (1.55 + Math.random() * 0.75),
    vy: dirY * (1.35 + Math.random() * 0.75),
    grabbed: false,
    pointerId: null
  };

  tileEl.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;

  tileEl.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    if (isWaveResetting || finalStepShown) return;
    unlockAudio();

    item.grabbed = true;
    item.pointerId = e.pointerId;
    tileEl.classList.add("grabbed");
    item.cellEl.classList.add("escape-target-highlight");
    try {
      tileEl.setPointerCapture(e.pointerId);
    } catch (_) {}

    item.x = e.clientX - item.width / 2;
    item.y = e.clientY - item.height / 2;
    tileEl.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
    item.cellEl.classList.toggle("drag-over", isNearTargetSlot(item));
  });

  tileEl.addEventListener("pointermove", (e) => {
    if (!item.grabbed || e.pointerId !== item.pointerId) return;
    item.x = Math.min(Math.max(4, e.clientX - item.width / 2), window.innerWidth - item.width - 4);
    item.y = Math.min(Math.max(4, e.clientY - item.height / 2), window.innerHeight - item.height - 4);
    tileEl.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
    item.cellEl.classList.toggle("drag-over", isNearTargetSlot(item));
  });

  const releaseDrag = (e) => {
    if (!item.grabbed || e.pointerId !== item.pointerId) return;
    try {
      tileEl.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const landed = e.type === "pointerup" && isNearTargetSlot(item);
    item.grabbed = false;
    item.pointerId = null;
    tileEl.classList.remove("grabbed");
    item.cellEl.classList.remove("drag-over", "escape-target-highlight");

    if (landed && !isWaveResetting) {
      returnRunawayToSlot(item);
    } else {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.9 + Math.random() * 0.7;
      item.vx = Math.cos(angle) * speed;
      item.vy = Math.sin(angle) * speed;
    }
  };

  tileEl.addEventListener("pointerup", releaseDrag);
  tileEl.addEventListener("pointercancel", releaseDrag);

  activeRunaways.set(key, item);
  startRunawaysLoop();
  return { wordId, ch: escCell.ch };
}

function startRunawaysLoop() {
  if (runawayRafId) return;
  let lastTime = performance.now();

  const step = (now) => {
    const dt = Math.min(32, Math.max(4, now - lastTime)) / 16.67;
    lastTime = now;

    if (activeRunaways.size === 0 || isWaveResetting) {
      runawayRafId = null;
      return;
    }

    const margin = 12;

    activeRunaways.forEach((item) => {
      if (item.grabbed) return;

      item.x += item.vx * dt;
      item.y += item.vy * dt;

      if (item.x <= margin) {
        item.x = margin;
        item.vx = Math.abs(item.vx);
      } else if (item.x >= window.innerWidth - item.width - margin) {
        item.x = Math.max(margin, window.innerWidth - item.width - margin);
        item.vx = -Math.abs(item.vx);
      }

      if (item.y <= margin) {
        item.y = margin;
        item.vy = Math.abs(item.vy);
      } else if (item.y >= window.innerHeight - item.height - margin) {
        item.y = Math.max(margin, window.innerHeight - item.height - margin);
        item.vy = -Math.abs(item.vy);
      }

      if (Math.random() < 0.015 * dt) {
        item.vx += (Math.random() - 0.5) * 0.45;
        item.vy += (Math.random() - 0.5) * 0.45;
        const speed = Math.hypot(item.vx, item.vy);
        if (speed > 2.7) {
          item.vx = (item.vx / speed) * 2.5;
          item.vy = (item.vy / speed) * 2.5;
        } else if (speed < 1.3) {
          item.vx = (item.vx / (speed || 1)) * 1.6;
          item.vy = (item.vy / (speed || 1)) * 1.6;
        }
      }

      item.tileEl.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
    });

    runawayRafId = requestAnimationFrame(step);
  };

  runawayRafId = requestAnimationFrame(step);
}

function returnRunawayToSlot(item) {
  if (!activeRunaways.has(item.key)) return;
  activeRunaways.delete(item.key);
  escapedCells.delete(item.key);
  item.tileEl.remove();

  item.cellEl.classList.remove("escaped-slot", "drag-over", "escape-target-highlight");
  const charSpan = item.cellEl.querySelector(".cell-char");
  if (charSpan) charSpan.textContent = item.ch;
  cellRevealed[item.key] = item.ch;
  item.cellEl.classList.add("solved");
  returnedEscapeCount += 1;

  if (isAllSolved()) {
    if (activeRunaways.size === 0) {
      feedbackWord.textContent = "Harika! Tüm kaçan harfler yerine kondu! 🎉";
      feedbackWord.className = "feedback ok";
      setTimeout(showFinalStepInPanel, 550);
    } else {
      feedbackWord.textContent = `Harf yakalandı! Kalan ${activeRunaways.size} kaçan harfi de yerine koy 🏃‍♂️`;
      feedbackWord.className = "feedback warn";
    }
  } else if (!finalStepShown) {
    feedbackWord.textContent = `Kaçan '${item.ch}' harfi yakalanıp yerine kondu! 💪`;
    feedbackWord.className = "feedback ok";
  }
}

function checkEscapeTriggers() {
  const escapedNow = [];

  if (solvedWordsMap[2] && solvedWordsMap[1] && !escapedTriggered[1]) {
    escapedTriggered[1] = true;
    const res = spawnRunawayLetter(1);
    if (res) escapedNow.push(res);
  }
  if (solvedWordsMap[3] && solvedWordsMap[2] && !escapedTriggered[2]) {
    escapedTriggered[2] = true;
    const res = spawnRunawayLetter(2);
    if (res) escapedNow.push(res);
  }
  if (solvedWordsMap[4] && solvedWordsMap[3] && !escapedTriggered[3]) {
    escapedTriggered[3] = true;
    const res = spawnRunawayLetter(3);
    if (res) escapedNow.push(res);
  }
  if (solvedWordsMap[5] && solvedWordsMap[4] && !escapedTriggered[4]) {
    escapedTriggered[4] = true;
    const res = spawnRunawayLetter(4);
    if (res) escapedNow.push(res);
  }

  return escapedNow;
}

function handlePostSolveTransition(preserveEscapeWarning = false) {
  if (isAllSolved()) {
    if (returnedEscapeCount === 0) {
      setTimeout(triggerWaveEscapeAndReset, 750);
    } else if (activeRunaways.size === 0) {
      setTimeout(showFinalStepInPanel, 700);
    } else {
      feedbackWord.textContent = "Son adıma geçmek için kaçan harfi yakalayıp boş kutusuna geri koy! 🏃‍♂️";
      feedbackWord.className = "feedback warn";
    }
  } else {
    setTimeout(() => moveToNextUnsolved(preserveEscapeWarning), preserveEscapeWarning ? 950 : 700);
  }
}

function triggerWaveEscapeAndReset() {
  if (isWaveResetting || finalStepShown) return;
  isWaveResetting = true;
  setGameControlsDisabled(true);

  if (runawayRafId) {
    cancelAnimationFrame(runawayRafId);
    runawayRafId = null;
  }

  feedbackWord.textContent = "Eyvah! Kaçan harfleri hiç yakalamadığın için tüm harfler büyüyen dalga halinde kaçıyor! 🌊🏃‍♂️";
  feedbackWord.className = "feedback warn";

  const fleeTiles = [];

  activeRunaways.forEach((item) => {
    item.grabbed = false;
    item.cellEl.classList.remove("escaped-slot", "drag-over", "escape-target-highlight");
    const rect = item.tileEl.getBoundingClientRect();
    item.tileEl.remove();

    const fleeEl = document.createElement("div");
    fleeEl.className = "wave-flee-tile";
    fleeEl.textContent = item.ch;
    fleeEl.style.left = `${rect.left}px`;
    fleeEl.style.top = `${rect.top}px`;
    fleeEl.style.width = `${rect.width}px`;
    fleeEl.style.height = `${rect.height}px`;
    fleeEl.style.animationDelay = `${(item.r + item.c) * 75}ms`;
    fleeEl.style.setProperty("--dx", `${(item.c - 3) * 95 + (Math.random() * 160 - 80)}px`);
    fleeEl.style.setProperty("--dy", `${-(rect.top + 320 + Math.random() * 140)}px`);
    fleeEl.style.setProperty("--rot", `${(Math.random() * 50 - 25).toFixed(1)}deg`);
    document.body.appendChild(fleeEl);
    fleeTiles.push(fleeEl);
  });
  activeRunaways.clear();
  escapedCells.clear();

  let maxDelay = 0;
  gridEl.querySelectorAll(".cell-letter").forEach((cellEl) => {
    const r = Number(cellEl.dataset.row);
    const c = Number(cellEl.dataset.col);
    const charSpan = cellEl.querySelector(".cell-char");
    const ch = charSpan ? charSpan.textContent.trim() : "";

    cellEl.classList.remove("solved", "hinted", "escaped-slot", "active-row", "active-clue-cell", "drag-over", "escape-target-highlight");
    if (!ch) return;

    const rect = cellEl.getBoundingClientRect();
    charSpan.textContent = "";

    const delay = (r + c) * 75;
    if (delay > maxDelay) maxDelay = delay;

    const fleeEl = document.createElement("div");
    fleeEl.className = "wave-flee-tile";
    fleeEl.textContent = ch;
    fleeEl.style.left = `${rect.left}px`;
    fleeEl.style.top = `${rect.top}px`;
    fleeEl.style.width = `${rect.width}px`;
    fleeEl.style.height = `${rect.height}px`;
    fleeEl.style.animationDelay = `${delay}ms`;
    fleeEl.style.setProperty("--dx", `${(c - 3) * 95 + (Math.random() * 140 - 70)}px`);
    fleeEl.style.setProperty("--dy", `${-(rect.top + 320 + Math.random() * 140)}px`);
    fleeEl.style.setProperty("--rot", `${(Math.random() * 50 - 25).toFixed(1)}deg`);
    document.body.appendChild(fleeEl);
    fleeTiles.push(fleeEl);
  });

  setTimeout(() => {
    fleeTiles.forEach(el => el.remove());
    currentSetIndex = (currentSetIndex + 1) % WORD_SETS.length;
    WORDS_MAP = WORD_SETS[currentSetIndex];
    initGrid(" Harita sıfırlandı! Yeni kelimeler ve sorular yüklendi — kaçanları yakalamayı unutma! ");
  }, maxDelay + 1100);
}

/* =========================================================
   CEVAP GÖNDERME KONTROLÜ
   ========================================================= */
$("solve-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (finalStepShown || isWaveResetting) return;
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

    const newlyEscaped = checkEscapeTriggers();
    if (newlyEscaped.length > 0) {
      const firstEscaped = newlyEscaped[0];
      feedbackWord.textContent = `🏃‍♂️ Eyvah! ${firstEscaped.wordId}. kelimeden '${firstEscaped.ch}' harfi kaçıyor! Tutup yerine koy!`;
      feedbackWord.className = "feedback warn";
    }

    handlePostSolveTransition(newlyEscaped.length > 0);
  } else {
    feedbackWord.textContent = "Cevap doğru değil, tekrar dene 🔍";
    feedbackWord.className = "feedback bad";
    shakeElement(solveInput);
  }
});

function moveToNextUnsolved(preserveFeedback = false) {
  const nextWord = WORDS_MAP.find(w => !solvedWordsMap[w.id]);
  if (nextWord) selectWord(nextWord.id, preserveFeedback);
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
   HARİTAYI KAYBETMEDEN FİNAL VE ŞAKA AKIŞI
   Aşama 1: Baş harfleri birleştir -> BENİM
   Aşama 2: "Emin misin?" -> Evet
   Aşama 3: Kalın "olsana" içeren yazı + "Emin misin?" -> Sürükle & Onayla
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
      Haritada çözdüğün <b>5 kelimenin baş harflerini sırayla</b> birleştirerek cevabı yaz:
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
    unlockAudio();
    const guess = cleanTR(finalInput.value).replace(/\s+/g, "");
    const fb = $("feedback-panel-final");

    if (guess === INITIAL_TARGET) {
      showJokeStep1();
    } else {
      fb.textContent = "Cevap doğru değil. Haritadaki kelimelerin baş harflerini sırayla birleştirip tekrar dene!";
      fb.className = "feedback bad";
      shakeElement(finalInput);
    }
  });
}

/* ---- ŞAKA AŞAMASI 1: İlk "Emin misin?" ---- */
function showJokeStep1() {
  const card = $("question-card");
  card.innerHTML = `
    <div class="q-header">
      <span class="q-badge" style="color: #ffd36e;">🤔 EMİN MİSİN?</span>
      <span class="q-meta">Kontrol</span>
    </div>
    <div class="joke-box">
      <div class="combine-area">
        <span class="fixed-word">BENİM</span>
      </div>
      <p class="joke-question">
        Şarkının adının sadece <b>'BENİM'</b> olduğuna emin misin? 🤔
      </p>
      <div class="joke-actions">
        <button id="btn-joke-yes" type="button" class="btn primary btn-inline">Evet</button>
      </div>
    </div>
  `;

  $("btn-joke-yes").addEventListener("click", () => {
    unlockAudio();
    showJokeStep2();
  });
}

/* ---- ŞAKA AŞAMASI 2: Kalın "olsana" + Sürükle-Bırak ---- */
function showJokeStep2() {
  const card = $("question-card");
  card.innerHTML = `
    <div class="q-header">
      <span class="q-badge" style="color: #ffd36e;">😏 TEKRAR SORUYORUM</span>
      <span class="q-meta">Son Onay</span>
    </div>
    <div class="joke-box">
      <p class="joke-question">
        Sadece 'Benim' diye şarkı ismi biraz yalnız kalmadı mı? Biraz daha dikkatli bakıp doğru cevaptan emin
        <b id="draggable-olsana" class="draggable-word" draggable="true">olsana</b>.
        Tekrar soruyorum, emin misin?
      </p>

      <form id="joke-step2-form" autocomplete="off">
        <div class="combine-area" id="combine-area">
          <span class="fixed-word">BENİM</span>
          <input
            id="drop-slot"
            class="drop-slot"
            type="text"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          />
        </div>

        <div class="joke-actions" style="margin-top: 12px;">
          <button id="btn-joke-confirm" type="submit" class="btn primary btn-inline">Onayla</button>
        </div>
      </form>
      <div class="feedback" id="feedback-joke" role="status" aria-live="polite"></div>
    </div>
  `;

  const dragEl = $("draggable-olsana");
  const combineArea = $("combine-area");
  const dropSlot = $("drop-slot");
  const feedbackJoke = $("feedback-joke");

  let olsanaDropped = false;
  let isDraggingOlsana = false;

  function placeOlsana() {
    if (olsanaDropped) return;
    olsanaDropped = true;
    isDraggingOlsana = false;

    dropSlot.value = "OLSANA";
    dropSlot.readOnly = true;
    dropSlot.classList.remove("drag-over");
    dropSlot.classList.add("filled");

    dragEl.classList.remove("dragging");
    dragEl.classList.add("placed");
    dragEl.setAttribute("draggable", "false");

    feedbackJoke.textContent = "İşte şimdi oldu: BENİM OLSANA ✅";
    feedbackJoke.className = "feedback ok";
  }

  function isPointInsideDropZone(clientX, clientY) {
    const slotRect = dropSlot.getBoundingClientRect();
    const areaRect = combineArea.getBoundingClientRect();
    const pad = 16;
    const inSlot =
      clientX >= slotRect.left - pad &&
      clientX <= slotRect.right + pad &&
      clientY >= slotRect.top - pad &&
      clientY <= slotRect.bottom + pad;
    const inArea =
      clientX >= areaRect.left &&
      clientX <= areaRect.right &&
      clientY >= areaRect.top &&
      clientY <= areaRect.bottom;
    return inSlot || inArea;
  }

  /* Masaüstü HTML5 Drag & Drop */
  dragEl.addEventListener("dragstart", (e) => {
    if (olsanaDropped) {
      e.preventDefault();
      return;
    }
    isDraggingOlsana = true;
    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", "OLSANA");
      e.dataTransfer.effectAllowed = "move";
    }
    dragEl.classList.add("dragging");
  });

  dragEl.addEventListener("dragend", () => {
    isDraggingOlsana = false;
    dragEl.classList.remove("dragging");
    dropSlot.classList.remove("drag-over");
  });

  [dropSlot, combineArea].forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      if (!isDraggingOlsana || olsanaDropped) return;
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
      dropSlot.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", (e) => {
      if (e.relatedTarget && combineArea.contains(e.relatedTarget)) return;
      dropSlot.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (e) => {
      if (!isDraggingOlsana || olsanaDropped) return;
      e.preventDefault();
      placeOlsana();
    });
  });

  /* Mobil / Dokunmatik Pointer Events */
  dragEl.addEventListener("pointerdown", (e) => {
    if (olsanaDropped || e.pointerType === "mouse") return;
    e.preventDefault();

    try { dragEl.setPointerCapture(e.pointerId); } catch (err) { }
    dragEl.classList.add("dragging");

    const ghost = document.createElement("div");
    ghost.className = "drag-ghost";
    ghost.textContent = "olsana";
    ghost.style.left = `${e.clientX}px`;
    ghost.style.top = `${e.clientY}px`;
    document.body.appendChild(ghost);

    function onMove(ev) {
      ghost.style.left = `${ev.clientX}px`;
      ghost.style.top = `${ev.clientY}px`;
      if (isPointInsideDropZone(ev.clientX, ev.clientY)) {
        dropSlot.classList.add("drag-over");
      } else {
        dropSlot.classList.remove("drag-over");
      }
    }

    function cleanup() {
      dragEl.classList.remove("dragging");
      dropSlot.classList.remove("drag-over");
      if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onCancel);
    }

    function onUp(ev) {
      const dropped = isPointInsideDropZone(ev.clientX, ev.clientY);
      cleanup();
      if (dropped) placeOlsana();
    }

    function onCancel() {
      cleanup();
    }

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onCancel);
  });

  /* Son Onay (Yazarak denemeyi reddet, sürükleyerek bırakmayı kabul et) */
  $("joke-step2-form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!olsanaDropped) {
      const typed = cleanTR(dropSlot.value).replace(/\s+/g, "");
      if (typed === "OLSANA" || typed === FINAL_TARGET) {
        feedbackJoke.textContent = "Çok yakın! Cümleye dikkatli bak 😉";
      } else {
        feedbackJoke.textContent = "Cevap kabul edilmedi, tekrar dene!";
      }
      feedbackJoke.className = "feedback bad";
      shakeElement(dropSlot);
      return;
    }

    const combined = cleanTR(`BENİM ${dropSlot.value}`).replace(/\s+/g, "");
    if (combined === FINAL_TARGET) {
      feedbackJoke.textContent = "Harika! Şarkı başlıyor... 🎵";
      feedbackJoke.className = "feedback ok";

      playSongNow();

      setTimeout(() => {
        showScreen("screen-player");
        launchConfetti();
      }, 600);
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
