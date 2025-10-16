// ===== EXERCÍCIOS =====
const exercisesData = {
  pt: [
    {sentence: "Eu ___ ao mercado todos os dias.", options: ["vou", "ir", "foi", "vão"], answer: "vou", translate: "Я хожу в магазин каждый день."},
    {sentence: "Ele ___ feliz hoje.", options: ["está", "são", "sou", "era"], answer: "está", translate: "Он счастлив сегодня."},
    {sentence: "Nós ___ felizes com a notícia.", options: ["estamos", "são", "eram", "é"], answer: "estamos", translate: "Мы счастливы с этой новостью."},
    {sentence: "Você ___ pronto para a prova?", options: ["está", "são", "é", "estávamos"], answer: "está", translate: "Ты готов к экзамену?"},
    {sentence: "Eles ___ na Rússia agora.", options: ["estão", "são", "é", "estamos"], answer: "estão", translate: "Они сейчас в России."},
    {sentence: "Eu ___ estudar hoje à noite.", options: ["vou", "vou indo", "ir", "fui"], answer: "vou", translate: "Я буду учиться сегодня вечером."},
    {sentence: "Nós ___ amigos há muitos anos.", options: ["somos", "estamos", "são", "era"], answer: "somos", translate: "Мы друзья уже много лет."},
    {sentence: "Ela ___ muito bonita.", options: ["é", "está", "foi", "será"], answer: "é", translate: "Она очень красивая."},
    {sentence: "Vocês ___ no parque agora?", options: ["estão", "são", "estavam", "foi"], answer: "estão", translate: "Вы сейчас в парке?"},
    {sentence: "Ele ___ o carro ontem.", options: ["comprou", "compra", "comprava", "comprem"], answer: "comprou", translate: "Он купил машину вчера."},
    {sentence: "Nós ___ felizes com o resultado.", options: ["estamos", "somos", "eramos", "fomos"], answer: "estamos", translate: "Мы довольны результатом."},
    {sentence: "Eu ___ português e inglês.", options: ["falo", "fala", "falamos", "falam"], answer: "falo", translate: "Я говорю по-португальски и по-английски."},
    {sentence: "Eles ___ estudar mais.", options: ["precisam", "preciso", "precisa", "precisamos"], answer: "precisam", translate: "Им нужно больше учиться."},
    {sentence: "Você ___ meu amigo.", options: ["é", "está", "foi", "será"], answer: "é", translate: "Ты мой друг."},
    {sentence: "Eu ___ muito cansado ontem.", options: ["estava", "estou", "era", "sou"], answer: "estava", translate: "Вчера я был очень уставший."},
    {sentence: "Nós ___ viajando para a Rússia.", options: ["estamos", "somos", "estávamos", "éramos"], answer: "estamos", translate: "Мы едем в Россию."},
    {sentence: "Eles ___ livros na biblioteca.", options: ["estão", "são", "estavam", "serão"], answer: "estão", translate: "Они находятся с книгами в библиотеке."},
    {sentence: "Eu ___ um café todas as manhãs.", options: ["bebo", "bebem", "bebe", "bebemos"], answer: "bebo", translate: "Я пью кофе каждое утро."},
    {sentence: "Você ___ meu telefone?", options: ["tem", "temos", "têm", "tenho"], answer: "tem", translate: "У тебя есть мой телефон?"},
    {sentence: "Nós ___ no trabalho agora.", options: ["estamos", "somos", "estavam", "seremos"], answer: "estamos", translate: "Мы сейчас на работе."},
    {sentence: "Ele ___ muito rápido.", options: ["corre", "corremos", "corre", "correm"], answer: "corre", translate: "Он бегает очень быстро."},
    {sentence: "Eu ___ uma carta para minha amiga.", options: ["escrevi", "escrevo", "escrevia", "escreverei"], answer: "escrevi", translate: "Я написал письмо своей подруге."},
    {sentence: "Eles ___ na escola todos os dias.", options: ["estão", "são", "estavam", "eram"], answer: "estão", translate: "Они ходят в школу каждый день."},
    {sentence: "Nós ___ comida deliciosa ontem.", options: ["comemos", "come", "comeu", "comiam"], answer: "comemos", translate: "Мы ели вкусную еду вчера."},
    {sentence: "Você ___ em casa agora?", options: ["está", "é", "era", "estava"], answer: "está", translate: "Ты сейчас дома?"},
    {sentence: "Eu ___ muito feliz com a notícia.", options: ["estou", "sou", "era", "estava"], answer: "estou", translate: "Я очень рад этой новости."}
  ],

  ru: [
    {sentence: "Я ___ в магазин каждый день.", options: ["хожу", "иду", "пойду", "ходим"], answer: "хожу", translate: "Eu vou ao mercado todos os dias."},
    {sentence: "Он ___ сегодня.", options: ["счастлив", "были", "будет", "находится"], answer: "счастлив", translate: "Ele está feliz hoje."},
    {sentence: "Мы ___ с новостью.", options: ["счастливы", "были", "есть", "будем"], answer: "счастливы", translate: "Nós estamos felizes com a notícia."},
    {sentence: "Ты ___ к экзамену?", options: ["готов", "находишься", "были", "будешь"], answer: "готов", translate: "Você está pronto para a prova?"},
    {sentence: "Они ___ в России сейчас.", options: ["находятся", "были", "есть", "будут"], answer: "находятся", translate: "Eles estão na Rússia agora."},
    {sentence: "Я ___ учиться сегодня вечером.", options: ["буду", "иду", "пошёл", "ходим"], answer: "буду", translate: "Eu vou estudar hoje à noite."},
    {sentence: "Мы ___ друзья уже много лет.", options: ["являемся", "находимся", "были", "будем"], answer: "являемся", translate: "Nós somos amigos há muitos anos."},
    {sentence: "Она ___ очень красивая.", options: ["есть", "находится", "была", "будет"], answer: "есть", translate: "Ela é muito bonita."},
    {sentence: "Вы ___ в парке сейчас?", options: ["находитесь", "являетесь", "были", "будете"], answer: "находитесь", translate: "Vocês estão no parque agora?"},
    {sentence: "Он ___ машину вчера.", options: ["купил", "покупает", "покупал", "купят"], answer: "купил", translate: "Ele comprou o carro ontem."},
    {sentence: "Мы ___ довольны результатом.", options: ["есть", "находимся", "были", "будем"], answer: "есть", translate: "Nós estamos felizes com o resultado."},
    {sentence: "Я ___ по-португальски и по-английски.", options: ["говорю", "говорит", "говорим", "говорят"], answer: "говорю", translate: "Eu falo português e inglês."},
    {sentence: "Им ___ больше учиться.", options: ["нужно", "нужен", "нужны", "нужна"], answer: "нужно", translate: "Eles precisam estudar mais."},
    {sentence: "Ты ___ мой друг.", options: ["мой", "есть", "находишься", "будешь"], answer: "мой", translate: "Você é meu amigo."},
    {sentence: "Вчера я ___ очень уставший.", options: ["был", "есть", "буду", "бываю"], answer: "был", translate: "Eu estava muito cansado ontem."},
    {sentence: "Мы ___ в Россию.", options: ["едем", "поедем", "ехали", "ходим"], answer: "едем", translate: "Nós estamos viajando para a Rússia."},
    {sentence: "Они ___ с книгами в библиотеке.", options: ["находятся", "были", "будут", "есть"], answer: "находятся", translate: "Eles estão com livros na biblioteca."},
    {sentence: "Я ___ кофе каждое утро.", options: ["пью", "пьет", "пьем", "пьют"], answer: "пью", translate: "Eu bebo café todas as manhãs."},
    {sentence: "У тебя ___ мой телефон?", options: ["есть", "имеешь", "имеют", "имеем"], answer: "есть", translate: "Você tem meu telefone?"},
    {sentence: "Мы ___ на работе сейчас.", options: ["находимся", "есть", "были", "будем"], answer: "находимся", translate: "Nós estamos no trabalho agora."},
    {sentence: "Он ___ очень быстро.", options: ["бегает", "бегу", "бегаем", "бегают"], answer: "бегает", translate: "Ele corre muito rápido."},
    {sentence: "Я ___ письмо своей подруге.", options: ["написал", "пишу", "писал", "напишу"], answer: "написал", translate: "Eu escrevi uma carta para minha amiga."},
    {sentence: "Они ___ в школу каждый день.", options: ["ходят", "ходит", "ходим", "ходят"], answer: "ходят", translate: "Eles vão à escola todos os dias."},
    {sentence: "Мы ___ вкусную еду вчера.", options: ["съели", "едим", "ел", "ем"], answer: "съели", translate: "Nós comemos comida deliciosa ontem."},
    {sentence: "Ты ___ дома сейчас?", options: ["дома", "есть", "был", "будешь"], answer: "дома", translate: "Você está em casa agora?"},
    {sentence: "Я ___ очень рад этой новости.", options: ["очень рад", "доволен", "счастлив", "в восторге"], answer: "очень рад", translate: "Eu estou muito feliz com a notícia."}
  ]
};


// ===== VARIÁVEIS =====
let currentLang = localStorage.getItem('currentLang') || 'pt';
let exerciseOrder = JSON.parse(localStorage.getItem('exerciseOrder_' + currentLang)) || [];
let currentIndex = parseInt(localStorage.getItem('currentIndex_' + currentLang)) || 0;
let correctCount = parseInt(localStorage.getItem('correctCount_' + currentLang)) || 0;
let wrongCount = parseInt(localStorage.getItem('wrongCount_' + currentLang)) || 0;
let wrongExercises = JSON.parse(localStorage.getItem('wrongExercises_' + currentLang)) || [];
let showTranslation = true;

const sentenceEl = document.getElementById('sentence');
const translationEl = document.getElementById('translation');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');
const progressBar = document.getElementById('progressBar');
const clickSound = document.getElementById('clickSound');
const languageToggle = document.getElementById('languageToggle');

// ===== BOTÕES ADICIONAIS =====
const restartAllBtn = document.createElement('button');
const restartWrongBtn = document.createElement('button');
const toggleTranslateBtn = document.createElement('button');

[restartAllBtn, restartWrongBtn, toggleTranslateBtn].forEach(btn => {
  btn.style.display = "none";
  btn.style.marginTop = "10px";
  btn.style.padding = "12px 16px";
  btn.style.fontSize = "16px";
  btn.style.width = "100%";
  btn.style.background = "#4CAF50";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";
  document.querySelector('.content').appendChild(btn);
});

restartAllBtn.textContent = currentLang==='pt'?"🔄 Refazer Todos":"🔄 Повторить Все";
restartWrongBtn.textContent = currentLang==='pt'?"♻️ Refazer Errados":"♻️ Повторить Ошибки";
toggleTranslateBtn.textContent = currentLang==='pt'?"👁 Ocultar Tradução":"👁 Скрыть перевод";
toggleTranslateBtn.addEventListener('click', () => {
  showTranslation = !showTranslation;
  translationEl.style.display = showTranslation ? 'block' : 'none';
  toggleTranslateBtn.textContent = showTranslation
    ? (currentLang==='pt'?"👁 Ocultar Tradução":"👁 Скрыть перевод")
    : (currentLang==='pt'?"👁 Mostrar Tradução":"👁 Показать перевод");
});

// ===== FUNÇÕES =====
function shuffleArray(array) {
  const copy = [...array];
  for(let i = copy.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initializeExercises() {
  exerciseOrder = shuffleArray(exercisesData[currentLang]);
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  wrongExercises = [];
  saveProgress();
}

function saveProgress() {
  localStorage.setItem('currentLang', currentLang);
  localStorage.setItem('exerciseOrder_' + currentLang, JSON.stringify(exerciseOrder));
  localStorage.setItem('currentIndex_' + currentLang, currentIndex);
  localStorage.setItem('correctCount_' + currentLang, correctCount);
  localStorage.setItem('wrongCount_' + currentLang, wrongCount);
  localStorage.setItem('wrongExercises_' + currentLang, JSON.stringify(wrongExercises));
}

function loadExercise() {
  if(exerciseOrder.length === 0) initializeExercises();
  if(currentIndex >= exerciseOrder.length){
    showFinalResults();
    return;
  }

  const exercise = exerciseOrder[currentIndex];

  sentenceEl.textContent = exercise.sentence;
  translationEl.textContent = exercise.translate || '';
  translationEl.style.display = showTranslation ? 'block' : 'none';
  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';
  optionsEl.innerHTML = '';

  const shuffledOptions = shuffleArray(exercise.options);

  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option';
    btn.style.padding = "12px";
    btn.style.fontSize = "16px";
    btn.style.width = "100%";
    btn.style.margin = "6px 0";
    btn.addEventListener('click', () => selectOption(btn, exercise.answer));
    optionsEl.appendChild(btn);
  });

  updateProgress();
  saveProgress();
}

function selectOption(button, correctAnswer){
  playSound();
  document.querySelectorAll('.option').forEach(btn => btn.disabled = true);

  if(button.textContent === correctAnswer){
    button.classList.add('correct');
    feedbackEl.textContent = currentLang==='pt'?'✅ Correto!':'✅ Верно!';
    correctCount++;
  } else {
    button.classList.add('wrong');
    feedbackEl.textContent = currentLang==='pt'?'❌ Errado!':'❌ Неверно!';
    wrongCount++;
    wrongExercises.push(exerciseOrder[currentIndex]);
  }

  nextBtn.style.display = 'block';
  updateProgress();
  saveProgress();
}

function updateProgress(){
  const total = exerciseOrder.length;
  const done = correctCount + wrongCount;
  const percent = Math.round((done/total)*100);
  const errorPercent = Math.round((wrongCount/total)*100);
  progressBar.style.width = percent+'%';
  scoreEl.textContent = `✅ ${correctCount} | ❌ ${wrongCount} | Acertos: ${percent}% | Erros: ${errorPercent}%`;
}

function showFinalResults(){
  sentenceEl.textContent = currentLang==='pt'?'🎉 Parabéns! Você concluiu todos os exercícios!':'🎉 Поздравляем! Вы завершили все упражнения!';
  translationEl.textContent = '';
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';

  restartAllBtn.style.display = 'block';
  restartWrongBtn.style.display = wrongExercises.length>0 ? 'block' : 'none';
  toggleTranslateBtn.style.display = 'block';
}

// ===== EVENTOS =====
nextBtn.addEventListener('click', () => {
  currentIndex++;
  loadExercise();
});

restartAllBtn.addEventListener('click', () => {
  initializeExercises();
  loadExercise();
});

restartWrongBtn.addEventListener('click', () => {
  if(wrongExercises.length === 0) return;
  exerciseOrder = shuffleArray([...wrongExercises]);
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  wrongExercises = [];
  loadExercise();
});

// ===== TOGGLE IDIOMA =====
languageToggle.textContent = currentLang==='pt'?'PT':'RU';
languageToggle.addEventListener('click', () => {
  currentLang = currentLang==='pt'?'ru':'pt';
  languageToggle.textContent = currentLang==='pt'?'PT':'RU';
  
  exerciseOrder = JSON.parse(localStorage.getItem('exerciseOrder_' + currentLang)) || [];
  currentIndex = parseInt(localStorage.getItem('currentIndex_' + currentLang)) || 0;
  correctCount = parseInt(localStorage.getItem('correctCount_' + currentLang)) || 0;
  wrongCount = parseInt(localStorage.getItem('wrongCount_' + currentLang)) || 0;
  wrongExercises = JSON.parse(localStorage.getItem('wrongExercises_' + currentLang)) || [];

  if(exerciseOrder.length === 0) initializeExercises();
  loadExercise();
});

// ===== SOM CLIQUE =====
function playSound(){
  if(clickSound){
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// ===== INICIALIZAÇÃO =====
if(exerciseOrder.length === 0) initializeExercises();
loadExercise();
