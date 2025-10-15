// ===================== LISTA DE EXERCÍCIOS =====================
const exercises = [
  { russian: ['Привет','Спасибо','Пожалуйста'], portuguese: ['Olá','Obrigado','Por favor'] },
  { russian: ['Как дела?','Хорошо','Плохо'], portuguese: ['Como você está?','Bem','Mal'] },
  { russian: ['До свидания','Пока','Увидимся'], portuguese: ['Adeus','Tchau','Até logo'] },
  { russian: ['Доброе утро','Добрый вечер','Спокойной ночи'], portuguese: ['Bom dia','Boa tarde','Boa noite'] },
  { russian: ['Я хочу воды','Я голоден','Я устал'], portuguese: ['Eu quero água','Estou com fome','Estou cansado'] },
  { russian: ['Где туалет?','Где вход?','Где выход?'], portuguese: ['Onde é o banheiro?','Onde é a entrada?','Onde é a saída?'] },
  { russian: ['Я не понимаю','Я понимаю','Я знаю'], portuguese: ['Eu não entendo','Eu entendo','Eu sei'] },
  { russian: ['Помогите, пожалуйста','Вызовите полицию','Позовите врача'], portuguese: ['Ajude-me, por favor','Chame a polícia','Chame um médico'] },
  { russian: ['Меня зовут Анна','Меня зовут Иван','Меня зовут Сергей'], portuguese: ['Meu nome é Anna','Meu nome é Ivan','Meu nome é Sergey'] },
  { russian: ['Сколько это стоит?','Сколько времени?','Сколько лет?'], portuguese: ['Quanto custa isso?','Que horas são?','Quantos anos?'] },
  { russian: ['Да','Нет','Возможно'], portuguese: ['Sim','Não','Talvez'] },
  { russian: ['Пожалуйста','Спасибо','Извините'], portuguese: ['Por favor','Obrigado','Desculpe'] },
  { russian: ['Добрый день','Доброе утро','Доброй ночи'], portuguese: ['Boa tarde','Bom dia','Boa noite'] },
  { russian: ['Я люблю русский язык','Я ненавижу русский язык','Я изучаю русский язык'], portuguese: ['Eu amo russo','Eu odeio russo','Eu estudo russo'] },
  { russian: ['До завтра','До скорого','До встречи'], portuguese: ['Até amanhã','Até breve','Até logo'] },
  { russian: ['Красный','Синий','Зелёный'], portuguese: ['Vermelho','Azul','Verde'] },
  { russian: ['Жёлтый','Чёрный','Белый'], portuguese: ['Amarelo','Preto','Branco'] },
  { russian: ['Один','Два','Три'], portuguese: ['Um','Dois','Três'] },
  { russian: ['Четыре','Пять','Шесть'], portuguese: ['Quatro','Cinco','Seis'] },
  { russian: ['Хлеб','Молоко','Сыр'], portuguese: ['Pão','Leite','Queijo'] },
  { russian: ['Яблоко','Банан','Апельсин'], portuguese: ['Maçã','Banana','Laranja'] },
  { russian: ['Идти','Бежать','Смотреть'], portuguese: ['Ir','Correr','Olhar'] },
  { russian: ['Есть','Пить','Спать'], portuguese: ['Comer','Beber','Dormir'] },
  { russian: ['Мать','Отец','Брат'], portuguese: ['Mãe','Pai','Irmão'] },
  { russian: ['Сестра','Дедушка','Бабушка'], portuguese: ['Irmã','Avô','Avó'] },
  { russian: ['Книга','Ручка','Стол'], portuguese: ['Livro','Caneta','Mesa'] },
  { russian: ['Стул','Окно','Дверь'], portuguese: ['Cadeira','Janela','Porta'] }
];

// ===================== VARIÁVEIS GLOBAIS =====================
let currentExercise = 0;
let selectedLeft = null;
let matchesThisRound = 0;
let resultsThisRound = []; 
let allResults = []; 
let correctAnswers = 0;
let totalAnswers = 0;

// ===================== SOM =====================
function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.value = 800;
    g.gain.value = 0.0001;
    o.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.05, now + 0.005);
    o.start(now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    o.stop(now + 0.13);
    setTimeout(()=>{ try{ ctx.close(); }catch(e){} }, 300);
  } catch(e) {}
}

// ===================== FUNÇÃO PRINCIPAL =====================
function loadExercise() {
  const container = document.getElementById("cruzadoContainer");
  container.innerHTML = "";

  matchesThisRound = 0;
  resultsThisRound = [];
  selectedLeft = null;

  const lang = localStorage.getItem('lang') || 'pt';
  const isPortuguese = lang === 'pt';

  if (currentExercise >= exercises.length) {
    showFinalResults();
    return;
  }

  const { russian, portuguese } = exercises[currentExercise];
  const leftWords = isPortuguese ? russian : portuguese;
  const rightWords = isPortuguese ? portuguese : russian;
  const shuffledRight = [...rightWords].sort(() => Math.random() - 0.5);

  const leftCol = document.createElement("div");
  leftCol.classList.add("column");
  leftWords.forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.className = "word clickable";
    div.dataset.word = word;
    div.addEventListener('click', () => selectLeft(div, word));
    leftCol.appendChild(div);
  });

  const rightCol = document.createElement("div");
  rightCol.classList.add("column");
  shuffledRight.forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.className = "placeholder clickable";
    div.dataset.word = word;
    div.addEventListener('click', () => selectRight(div, word));
    rightCol.appendChild(div);
  });

  const row = document.createElement("div");
  row.classList.add("container");
  row.appendChild(leftCol);
  row.appendChild(rightCol);

  container.appendChild(row);
  updateProgress();
}

// ===================== SELEÇÃO =====================
function selectLeft(div, word) {
  playClickSound();
  div.classList.add('clicked');
  setTimeout(() => div.classList.remove('clicked'), 220);

  if (selectedLeft) selectedLeft.classList.remove("selected");
  selectedLeft = div;
  div.classList.add("selected");
}

function selectRight(div, word) {
  if (!selectedLeft) return;

  playClickSound();
  div.classList.add('clicked');
  setTimeout(() => div.classList.remove('clicked'), 220);

  const lang = localStorage.getItem('lang') || 'pt';
  const isPortuguese = lang === 'pt';
  const { russian, portuguese } = exercises[currentExercise];

  const leftWord = selectedLeft.dataset.word;
  let correctAnswer = isPortuguese ? portuguese[russian.indexOf(leftWord)] : russian[portuguese.indexOf(leftWord)];

  const isCorrect = (word === correctAnswer);
  resultsThisRound.push({ leftEl: selectedLeft, rightEl: div, correct: isCorrect });

  selectedLeft.classList.add('disabled');
  div.classList.add('disabled');
  selectedLeft.classList.remove('selected');
  selectedLeft = null;

  totalAnswers++;
  if (isCorrect) correctAnswers++;

  matchesThisRound++;

  if (matchesThisRound >= 3) {
    setTimeout(() => {
      revealRoundResults();
      setTimeout(() => {
        resultsThisRound.forEach(r => allResults.push(r));
        currentExercise++;
        loadExercise();
      }, 1000);
    }, 300);
  }
}

function revealRoundResults() {
  resultsThisRound.forEach(pair => {
    if (pair.correct) {
      pair.leftEl.classList.add('correct');
      pair.rightEl.classList.add('correct');
    } else {
      pair.leftEl.classList.add('wrong');
      pair.rightEl.classList.add('wrong');
    }
  });
}

// ===================== PROGRESSO =====================
function updateProgress() {
  const lang = localStorage.getItem('lang') || 'pt';
  const text = lang === 'pt'
    ? `Exercício ${currentExercise + 1} de ${exercises.length}`
    : `Упражнение ${currentExercise + 1} из ${exercises.length}`;
  document.getElementById("progressText").textContent = text;
  const percent = ((currentExercise) / exercises.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// ===================== RESULTADO FINAL =====================
function showFinalResults() {
  const container = document.getElementById("cruzadoContainer");
  container.innerHTML = "";
  const lang = localStorage.getItem('lang') || 'pt';
  const isPortuguese = lang === 'pt';

  const correctCount = allResults.filter(r => r.correct).length;
  const percent = allResults.length ? Math.round((correctCount / allResults.length) * 100) : 0;

  const title = isPortuguese ? "🎯 Resultado final" : "🎯 Итоговый результат";
  const score = isPortuguese ? `✅ Acertos: ${percent}%` : `✅ Правильных ответов: ${percent}%`;

  const header = document.createElement('div');
  header.innerHTML = `<h2>${title}</h2><p>${score}</p>`;
  container.appendChild(header);

  const list = document.createElement('div');
  list.className = 'results-list';
  allResults.filter(r => !r.correct).forEach(r => {
    const el = document.createElement('div');
    el.className = 'result-item wrong';
    el.textContent = `${r.leftEl.dataset.word} → ${r.rightEl.dataset.word}`;
    list.appendChild(el);
  });
  container.appendChild(list);

  const retryBtn = document.createElement('button');
  retryBtn.className = 'retry-btn';
  retryBtn.textContent = isPortuguese ? '🔁 Refazer apenas erros' : '🔁 Повторить только ошибки';
  retryBtn.addEventListener('click', restartMistakesOnly);
  container.appendChild(retryBtn);

  // 🔀 Novo conjunto aleatório
  const newRandomBtn = document.createElement('button');
  newRandomBtn.className = 'retry-btn';
  newRandomBtn.textContent = isPortuguese ? '🔀 Novo conjunto aleatório' : '🔀 Новый случайный набор';
  newRandomBtn.addEventListener('click', restartRandom);
  container.appendChild(newRandomBtn);
}

// ===================== REFAZER ERROS =====================
function restartMistakesOnly() {
  const rounds = [];
  for (let i = 0; i < allResults.length; i += 3) rounds.push(allResults.slice(i, i + 3));

  const errorRoundIndexes = [];
  rounds.forEach((round, idx) => {
    if (round.some(r => !r.correct)) errorRoundIndexes.push(idx);
  });

  if (errorRoundIndexes.length === 0) {
    alert(localStorage.getItem('lang') === 'pt' ? 'Nenhuma rodada com erro para refazer.' : 'Нет ошибок для повторения.');
    return;
  }

  const newExercises = errorRoundIndexes.map(i => exercises[i]);
  currentExercise = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  matchesThisRound = 0;
  resultsThisRound = [];
  allResults = [];
  exercises.length = 0;
  newExercises.forEach(e => exercises.push(e));
  loadExercise();
}

// ===================== NOVO CONJUNTO ALEATÓRIO =====================
function restartRandom() {
  exercises.sort(() => Math.random() - 0.5);
  currentExercise = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  matchesThisRound = 0;
  resultsThisRound = [];
  allResults = [];
  loadExercise();
}

// ===================== BOTÃO INICIAL =====================
window.addEventListener('load', () => {
  const container = document.getElementById("cruzadoContainer");
  const lang = localStorage.getItem('lang') || 'pt';
  const startText = lang === 'pt' ? "▶ Iniciar Exercício" : "▶ Начать упражнение";

  container.innerHTML = `
    <div id="startButtonContainer" style="text-align:center; margin-top:40px;">
      <button id="startBtn" class="start-btn">${startText}</button>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", () => {
    // 🔀 Embaralhar perguntas no início
    exercises.sort(() => Math.random() - 0.5);

    currentExercise = 0;
    correctAnswers = 0;
    totalAnswers = 0;
    matchesThisRound = 0;
    resultsThisRound = [];
    allResults = [];
    loadExercise();
  });
});
