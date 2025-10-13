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

// estado
let currentExercise = 0;
let selectedLeft = null;
let matchesThisRound = 0;
let resultsThisRound = []; // {leftEl, rightEl, correct}
let allResults = []; // acumula resultado total para o relatório final
let correctAnswers = 0;
let totalAnswers = 0;

// ===================== SOM (WebAudio) =====================
// função para tocar um "click" curto (sem depender de arquivo externo)
function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.value = 800; // frequência
    g.gain.value = 0.0001;
    o.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    // rampa rápida para evitar estalo
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.05, now + 0.005);
    o.start(now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    o.stop(now + 0.13);
    // fechar contexto após pequeno delay para liberar recursos
    setTimeout(()=>{ try{ ctx.close(); }catch(e){} }, 300);
  } catch(e) {
    // fallback silencioso se WebAudio bloqueado
    // console.warn('Audio não disponível', e);
  }
}

// ===================== FUNÇÃO PRINCIPAL =====================
function loadExercise() {
  const container = document.getElementById("cruzadoContainer");
  container.innerHTML = "";

  // reset da rodada
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
  // se o site estiver em português mostramos russo à esquerda e pt à direita
  const leftWords = isPortuguese ? russian : portuguese;
  const rightWords = isPortuguese ? portuguese : russian;
  const shuffledRight = [...rightWords].sort(() => Math.random() - 0.5);

  // criar colunas
  const leftCol = document.createElement("div");
  leftCol.classList.add("column");
  leftWords.forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.className = "word clickable"; // classe "clickable" para estilo
    // guardamos atributo para referência (texto)
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

// ===================== SELEÇÃO E FEEDBACK VISUAL =====================
function selectLeft(div, word) {
  playClickSound();
  // efeito de clique visual
  div.classList.add('clicked');
  setTimeout(() => div.classList.remove('clicked'), 220);

  // troca de seleção
  if (selectedLeft) selectedLeft.classList.remove("selected");
  selectedLeft = div;
  div.classList.add("selected");
}

function selectRight(div, word) {
  if (!selectedLeft) return;

  playClickSound();
  // efeito visual no placeholder
  div.classList.add('clicked');
  setTimeout(() => div.classList.remove('clicked'), 220);

  const lang = localStorage.getItem('lang') || 'pt';
  const isPortuguese = lang === 'pt';
  const { russian, portuguese } = exercises[currentExercise];

  const leftWord = selectedLeft.dataset.word;
  let correctAnswer;
  if (isPortuguese) {
    const index = russian.indexOf(leftWord);
    correctAnswer = portuguese[index];
  } else {
    const index = portuguese.indexOf(leftWord);
    correctAnswer = russian[index];
  }

  const isCorrect = (word === correctAnswer);
  // não colorimos ainda: apenas guardamos a referência das elements
  resultsThisRound.push({ leftEl: selectedLeft, rightEl: div, correct: isCorrect });

  // desabilitar futuros cliques nessas duas cartas
  selectedLeft.classList.add('disabled');
  div.classList.add('disabled');
  // removemos a seleção visual
  selectedLeft.classList.remove('selected');
  selectedLeft = null;

  // atualizar contadores de performance
  totalAnswers++;
  if (isCorrect) correctAnswers++;

  matchesThisRound++;

  // se completar as 3 correspondências, revelar cores então avançar
  if (matchesThisRound >= 3) {
    // revelar com pequeno delay para o usuário ver os cliques
    setTimeout(() => {
      revealRoundResults();
      // depois de mostrar cores por 1s avançar
      setTimeout(() => {
        // armazena essa rodada no relatório global
        resultsThisRound.forEach(r => allResults.push(r));
        currentExercise++;
        loadExercise();
      }, 1000);
    }, 300);
  }
}

// revela cores no final da rodada
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
  const progressText = document.getElementById("progressText");
  if (progressText) progressText.textContent = text;
  const percent = ((currentExercise) / exercises.length) * 100;
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = percent + "%";
}

// ===================== RESULTADO FINAL E REFAZER ERRADAS =====================
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

  // lista com todas as jogadas coloridas
  const list = document.createElement('div');
  list.className = 'results-list';
  allResults.forEach(r => {
    const el = document.createElement('div');
    el.className = 'result-item';
    el.textContent = `${r.leftEl.dataset.word} → ${r.rightEl.dataset.word}`;
    el.classList.add(r.correct ? 'correct' : 'wrong');
    list.appendChild(el);
  });
  container.appendChild(list);

  // botão refazer apenas as rodadas com erro
  const retryBtn = document.createElement('button');
  retryBtn.className = 'retry-btn';
  retryBtn.textContent = isPortuguese ? '🔁 Refazer apenas rodadas erradas' : '🔁 Повторить только ошибки';
  retryBtn.addEventListener('click', restartMistakesOnly);
  container.appendChild(retryBtn);
}

// refazer só as rodadas que tiveram erro
function restartMistakesOnly() {
  // identificar exercises que tiveram pelo menos um erro
  const exercisesWithErrors = new Set();
  allResults.forEach((r, idx) => {
    if (!r.correct) {
      // cada resultado corresponde a uma jogada; precisamos mapear de volta ao exercício index.
      // armazenamos info da propriedade 'leftEl' -> seu atributo data-exercise (vamos preencher abaixo)
      // Como simplificação, registramos por ordem: cada rodada teve 3 resultados; calc índice do exercício
    }
  });

  // Como não armazenamos o índice do exercício em allResults, vamos reconstruir usando o número de exercícios:
  // vamos assumir que allResults foi empurrado na ordem das rodadas: 3 items por rodada.
  const rounds = [];
  for (let i = 0; i < allResults.length; i += 3) {
    rounds.push(allResults.slice(i, i + 3));
  }
  const errorRoundIndexes = [];
  rounds.forEach((round, idx) => {
    if (round.some(r => r && !r.correct)) errorRoundIndexes.push(idx);
  });

  if (errorRoundIndexes.length === 0) {
    alert(localStorage.getItem('lang') === 'pt' ? 'Nenhuma rodada com erro para refazer.' : 'Нет ошибок для повторения.');
    return;
  }

  // reconstruir um novo array de exercícios contendo apenas os rounds com erro
  const newExercises = errorRoundIndexes.map(i => exercises[i]);
  // substituir exercícios atuais temporariamente
  // OBS: para simplicidade, iremos trocar as variáveis e reiniciar
  // salvamos backups
  window._backupExercises = exercises.slice(); // referencia original
  // substituir global exercises (mutação segura)
  while(exercises.length) exercises.pop();
  newExercises.forEach(e => exercises.push(e));

  // reset e iniciar
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
    // reset completo
    currentExercise = 0;
    correctAnswers = 0;
    totalAnswers = 0;
    matchesThisRound = 0;
    resultsThisRound = [];
    allResults = [];
    loadExercise();
  });
});
