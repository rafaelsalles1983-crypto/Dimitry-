// ==================== DADOS ====================

// Blocos de cores
const colorsBlock1 = ["red", "blue", "green", "yellow"];
const colorsBlock2 = ["purple", "orange", "pink", "brown"];
const colorsBlock3 = [
  "cyan", "magenta", "lime", "gray",
  "1", "2", "3", "4", "5",
  "один", "два", "три", "четыре", "пять"
];

let colors = [...colorsBlock1]; // Começa com o primeiro bloco

// Traduções
const translations = {
  ru: {
    title: "Игра Цвета",
    colors: {
      red: "Красный", blue: "Синий", green: "Зелёный", yellow: "Жёлтый",
      purple: "Фиолетовый", orange: "Оранжевый", pink: "Розовый", brown: "Коричневый",
      cyan: "Голубой", magenta: "Пурпурный", lime: "Лаймовый", gray: "Серый",
      "1": "Один", "2": "Два", "3": "Три", "4": "Четыре", "5": "Пять",
      один: "Один", два: "Два", три: "Три", четыре: "Четыре", пять: "Пять"
    },
    gameOver: "Конец игры!",
    correct: "Правильно!",
    wrong: "Неправильно!"
  },
  pt: {
    title: "Jogo das Cores",
    colors: {
      red: "Vermelho", blue: "Azul", green: "Verde", yellow: "Amarelo",
      purple: "Roxo", orange: "Laranja", pink: "Rosa", brown: "Marrom",
      cyan: "Ciano", magenta: "Magenta", lime: "Lima", gray: "Cinza",
      "1": "Um", "2": "Dois", "3": "Três", "4": "Quatro", "5": "Cinco",
      один: "Um", два: "Dois", три: "Três", четыре: "Quatro", пять: "Cinco"
    },
    gameOver: "Fim de jogo!",
    correct: "Correto!",
    wrong: "Errado!"
  }
};

// Textos da interface
const uiTexts = {
  ru: {
    siteTitle: "Славянский клуб",
    gameTitleColors: "Игра Цвета",
    controls: { play: "▶ Играть", restart: "Перезапустить", stop: "Стоп" },
    preview: "🔎 Запоминаем цвета...",
    paused: "⏸ Игра на паузе",
    endColors: "✅ Конец игры!",
    levelComplete: (level) => `✅ Уровень ${level - 1} пройден!`
  },
  pt: {
    siteTitle: "Clube Eslavo",
    gameTitleColors: "Jogo das Cores",
    controls: { play: "▶ Jogar", restart: "Recomeçar", stop: "Parar" },
    preview: "🔎 Memorize as cores...",
    paused: "⏸ Jogo pausado",
    endColors: "✅ Fim do jogo!",
    levelComplete: (level) => `✅ Nível ${level - 1} concluído!`
  }
};

// ==================== VARIÁVEIS ====================
let currentLang = "ru";
let correctItem = "";
let targetCount = 0;
let selectedCorrect = 0;
let score = { correct: 0, wrong: 0 };
let level = 1;
let round = 1;
let maxRounds = 10;
let gameActive = false;
let waitingNextLevel = false;
let timerInterval;
let lives = 5;
let streak = 0;

// ==================== ELEMENTOS ====================
const gameArea = document.getElementById("gameArea");
const gameInfo = document.getElementById("gameInfo");
const scoreDiv = document.getElementById("score");
const timerBar = document.getElementById("timerBar");

// ==================== EVENTOS ====================
document.getElementById("languageToggle").addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "pt" : "ru";
  updateLang();
});

document.getElementById("restartBtn").addEventListener("click", restartGame);
document.getElementById("stopBtn").addEventListener("click", stopGame);
document.getElementById("playBtn").addEventListener("click", () => {
  if (waitingNextLevel) waitingNextLevel = false;
  gameActive = true;
  showPreview();
});

// ==================== FUNÇÕES ====================
function updateLang() {
  const texts = uiTexts[currentLang];
  
  // Corrigido: mantém o emoji Dimitry ao lado do nome
  const siteTitle = document.getElementById("siteTitle");
  const emoji = siteTitle.querySelector("img");
  siteTitle.textContent = texts.siteTitle + " ";
  if (emoji) siteTitle.appendChild(emoji);

  document.getElementById("gameTitle").textContent = texts.gameTitleColors;
  document.getElementById("languageToggle").textContent = currentLang === "ru" ? "PT" : "RU";
  document.getElementById("playBtn").textContent = texts.controls.play;
  document.getElementById("restartBtn").textContent = texts.controls.restart;
  document.getElementById("stopBtn").textContent = texts.controls.stop;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = currentLang === "ru" ? "ru-RU" : "pt-BR";
    utter.rate = 1;
    speechSynthesis.speak(utter);
  }
}

// ==================== PRÉ-VISUALIZAÇÃO 2X2 ====================
function showPreview() {
  if (!gameActive) return;
  gameInfo.textContent = uiTexts[currentLang].preview;
  gameArea.innerHTML = "";
  gameArea.classList.add("preview");

  const previewItems = [];
  while (previewItems.length < 4) {
    const item = colors[Math.floor(Math.random() * colors.length)];
    if (!previewItems.includes(item)) previewItems.push(item);
  }

  gameArea.style.gridTemplateColumns = "repeat(2, 1fr)";
  gameArea.style.gridTemplateRows = "repeat(2, 1fr)";
  previewItems.forEach((color) => {
    const sq = document.createElement("div");
    sq.classList.add("square");
    sq.style.width = "100%";
    sq.style.height = "100%";

    if (isNaN(color) && !/^[а-яА-ЯёЁ]+$/.test(color)) {
      sq.style.background = color;
      const label = document.createElement("span");
      label.textContent = translations[currentLang].colors[color];
      sq.appendChild(label);
    } else {
      sq.textContent = color;
    }

    gameArea.appendChild(sq);
  });

  setTimeout(() => {
    gameArea.classList.remove("preview");
    gameArea.style.gridTemplateColumns = "repeat(4, 60px)";
    gameArea.style.gridTemplateRows = "repeat(4, 60px)";
    startRound();
  }, 2000);
}

// ==================== CRIAÇÃO DOS QUADRADOS ====================
function createSquares() {
  gameArea.innerHTML = "";
  const totalSquares = 16;
  const positions = Array.from({ length: totalSquares }, (_, i) => i);
  shuffleArray(positions);
  const targetPositions = positions.slice(0, targetCount);

  for (let i = 0; i < totalSquares; i++) {
    const sq = document.createElement("div");
    sq.classList.add("square");
    const color = targetPositions.includes(i)
      ? correctItem
      : colors[Math.floor(Math.random() * colors.length)];
    sq.dataset.item = color;

    if (isNaN(color) && !/^[а-яА-ЯёЁ]+$/.test(color)) {
      sq.style.background = color;
    } else {
      sq.textContent = color;
      sq.classList.add("numSquare");
    }

    sq.addEventListener("click", checkSquare);
    gameArea.appendChild(sq);
  }
}

// ==================== INÍCIO DE CADA RODADA ====================
function startRound() {
  if (!gameActive || waitingNextLevel) return;
  clearInterval(timerInterval);

  if (lives <= 0) return gameOver();
  if (round > maxRounds) {
    nextColorBlock();
    return;
  }

  correctItem = colors[Math.floor(Math.random() * colors.length)];
  targetCount = Math.floor(Math.random() * 3) + 1;
  selectedCorrect = 0;
  createSquares();

  const label = translations[currentLang].colors[correctItem] || correctItem;
  gameInfo.textContent = targetCount > 1
    ? `👉 ${currentLang === "ru" ? "Нажмите" : "Clique em"} ${targetCount} "${label}"`
    : `👉 ${currentLang === "ru" ? "Нажмите" : "Clique em"} "${label}"`;

  speak(label);
  startTimer();
}

// ==================== TROCA DE BLOCO ====================
function nextColorBlock() {
  level++;
  round = 1;
  score.correct = 0;
  score.wrong = 0;

  if (level === 2) colors = [...colorsBlock2];
  else if (level === 3) colors = [...colorsBlock3];
  else {
    gameOver();
    return;
  }

  updateScore();
  gameInfo.textContent = uiTexts[currentLang].levelComplete(level);
  waitingNextLevel = true;
}

// ==================== TIMER ====================
function startTimer() {
  let maxTime = Math.max(7000 - (level - 1) * 500, 2000);
  const interval = 50;
  timerBar.style.width = "100%";
  timerInterval = setInterval(() => {
    maxTime -= interval;
    timerBar.style.width = (maxTime / 7000) * 100 + "%";
    if (maxTime <= 0) {
      clearInterval(timerInterval);
      lives--;
      streak = 0;
      updateScore();
      speak(uiTexts[currentLang].wrong);
      round++;
      setTimeout(startRound, 500);
    }
  }, interval);
}

// ==================== CLIQUES ====================
function checkSquare(e) {
  if (!gameActive || waitingNextLevel) return;
  const color = e.currentTarget.dataset.item;

  if (color === correctItem) {
    e.currentTarget.classList.add("neon");
    selectedCorrect++;
    if (selectedCorrect === targetCount) {
      score.correct++;
      streak++;
      if (streak >= 5 && lives < 5) {
        lives++;
        streak = 0;
        gameInfo.textContent += " 💖 Vida recuperada!";
        speak(currentLang === "ru" ? "Жизнь восстановлена!" : "Você recuperou uma vida!");
      }
      updateScore();
      clearInterval(timerInterval);
      speak(uiTexts[currentLang].correct);
      round++;
      startRound();
    }
  } else {
    score.wrong++;
    lives--;
    streak = 0;
    updateScore();
    speak(uiTexts[currentLang].wrong);
    if (lives <= 0) gameOver();
  }
}

// ==================== PONTUAÇÃO ====================
function updateScore() {
  const total = score.correct + score.wrong;
  const percent = total ? Math.round((score.correct / total) * 100) : 0;
  scoreDiv.textContent = `❤️ ${lives} | ✅ ${score.correct} | ❌ ${score.wrong} | Nível ${level} | Rodada ${round}/${maxRounds} | Acertos: ${percent}%`;
}

// ==================== FIM DE JOGO ====================
function gameOver() {
  gameActive = false;
  clearInterval(timerInterval);
  gameInfo.textContent = uiTexts[currentLang].gameOver;
  speak(gameInfo.textContent);
  timerBar.style.width = "0%";
}

// ==================== REINICIAR ====================
function restartGame() {
  score = { correct: 0, wrong: 0 };
  lives = 5;
  streak = 0;
  level = 1;
  round = 1;
  gameActive = false;
  waitingNextLevel = false;
  colors = [...colorsBlock1];
  updateScore();
  updateLang();
}

// ==================== PARAR ====================
function stopGame() {
  gameActive = false;
  clearInterval(timerInterval);
  gameInfo.textContent = uiTexts[currentLang].paused;
  timerBar.style.width = "0%";
}

// ==================== INICIALIZAÇÃO ====================
updateLang();
updateScore();
document.getElementById("languageToggle").textContent = "PT";
