// ===== EXERCÍCIOS =====
const exercisesData = {
  pt: [
    {sentence: "Eu ___ ao mercado todos os dias.", options: ["vou", "ir", "foi", "vão"], answer: "vou", translate: "Я хожу в магазин каждый день."},
    {sentence: "Ele ___ feliz hoje.", options: ["está", "são", "sou", "era"], answer: "está", translate: "Он счастлив сегодня."},
    {sentence: "Nós ___ felizes com a notícia.", options: ["estamos", "são", "eram", "é"], answer: "estamos", translate: "Мы счастливы с новостью."},
    {sentence: "Você ___ pronto para a prova?", options: ["está", "são", "é", "estávamos"], answer: "está", translate: "Ты готов к экзамену?"},
    {sentence: "Eles ___ na Rússia agora.", options: ["estão", "são", "é", "estamos"], answer: "estão", translate: "Они сейчас в России."},
    {sentence: "Eu ___ com fome.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я голоден."},
    {sentence: "Ela ___ professora de russo.", options: ["é", "está", "são", "estamos"], answer: "é", translate: "Она учитель русского языка."},
    {sentence: "Nós ___ estudando russo agora.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы изучаем русский сейчас."},
    {sentence: "Ele ___ médico de profissão.", options: ["é", "está", "são", "estamos"], answer: "é", translate: "Он врач по профессии."},
    {sentence: "Você ___ satisfeito com a resposta?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты доволен ответом?"},
    {sentence: "Eu ___ estudante de russo.", options: ["sou", "estou", "são", "é"], answer: "sou", translate: "Я студент русского языка."},
    {sentence: "Nós ___ na escola ontem.", options: ["estávamos", "são", "é", "estamos"], answer: "estávamos", translate: "Мы были в школе вчера."},
    {sentence: "Ele ___ com fome agora.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он сейчас голоден."},
    {sentence: "Eu ___ português fluentemente.", options: ["falo", "fala", "falamos", "falam"], answer: "falo", translate: "Я говорю по-португальски свободно."},
    {sentence: "Nós ___ cansados depois da viagem.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы устали после поездки."},
    {sentence: "Você ___ com frio?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Тебе холодно?"},
    {sentence: "Eles ___ amigos desde a infância.", options: ["são", "estão", "é", "estávamos"], answer: "são", translate: "Они друзья с детства."},
    {sentence: "Ele ___ comprar pão amanhã.", options: ["vai", "vou", "vamos", "vão"], answer: "vai", translate: "Он купит хлеб завтра."},
    {sentence: "Eu ___ no parque ontem.", options: ["estava", "sou", "são", "é"], answer: "estava", translate: "Я был в парке вчера."},
    {sentence: "Você ___ português muito bem.", options: ["fala", "falamos", "falam", "falo"], answer: "fala", translate: "Ты говоришь по-португальски очень хорошо."},
    {sentence: "Nós ___ amigos desde crianças.", options: ["somos", "estamos", "são", "é"], answer: "somos", translate: "Мы друзья с детства."},
    {sentence: "Ela ___ professora de russo.", options: ["é", "está", "são", "estamos"], answer: "é", translate: "Она учитель русского."},
    {sentence: "Eu ___ feliz por estar aqui.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я рад быть здесь."},
    {sentence: "Ele ___ muito inteligente.", options: ["é", "está", "são", "estamos"], answer: "é", translate: "Он очень умный."},
    {sentence: "Nós ___ no Brasil agora.", options: ["estamos", "são", "é", "estávamos"], answer: "estamos", translate: "Мы сейчас в Бразилии."},
    {sentence: "Você ___ cansado?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты устал?"},
    {sentence: "Ela ___ na biblioteca.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Она в библиотеке."},
    {sentence: "Eu ___ lendo um livro.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я читаю книгу."},
    {sentence: "Nós ___ aprendendo russo juntos.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы учим русский вместе."},
    {sentence: "Ele ___ no trabalho agora.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он сейчас на работе."},
    {sentence: "Você ___ pronto para sair?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты готов выйти?"},
    {sentence: "Eu ___ estudando para a prova.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я учусь к экзамену."},
    {sentence: "Eles ___ viajando para Portugal.", options: ["estão", "são", "é", "estamos"], answer: "estão", translate: "Они путешествуют в Португалию."},
    {sentence: "Nós ___ no cinema ontem.", options: ["estávamos", "são", "é", "estamos"], answer: "estávamos", translate: "Мы были в кино вчера."},
    {sentence: "Ela ___ cansada depois do treino.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Она устала после тренировки."},
    {sentence: "Eu ___ feliz com o resultado.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я доволен результатом."},
    {sentence: "Ele ___ no parque todos os dias.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он каждый день в парке."},
    {sentence: "Nós ___ felizes com a decisão.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы довольны решением."},
    {sentence: "Você ___ pronto para viajar?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты готов ехать в путешествие?"},
    {sentence: "Eu ___ com sono agora.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я сейчас сонный."},
    {sentence: "Ela ___ minha amiga há anos.", options: ["é", "está", "são", "estamos"], answer: "é", translate: "Она моя подруга уже много лет."},
    {sentence: "Ele ___ com fome agora.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он сейчас голоден."},
    {sentence: "Nós ___ estudando português.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы учим португальский."},
    {sentence: "Eu ___ no trabalho todos os dias.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я на работе каждый день."},
    {sentence: "Você ___ satisfeito com o resultado?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты доволен результатом?"},
    {sentence: "Eles ___ amigos desde crianças.", options: ["são", "estão", "é", "estávamos"], answer: "são", translate: "Они друзья с детства."},
    {sentence: "Eu ___ aprendendo russo.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я учу русский язык."},
    {sentence: "Ela ___ feliz com a notícia.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Она довольна новостью."},
    {sentence: "Nós ___ cansados da viagem.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы устали после поездки."},
    {sentence: "Ele ___ no Brasil agora.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он сейчас в Бразилии."},
    {sentence: "Você ___ pronto para a aula?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты готов к уроку?"},
    {sentence: "Eu ___ estudando para o teste.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я учусь к тесту."},
    {sentence: "Eles ___ viajando para Moscou.", options: ["estão", "são", "é", "estamos"], answer: "estão", translate: "Они едут в Москву."},
    {sentence: "Nós ___ no parque ontem.", options: ["estávamos", "são", "é", "estamos"], answer: "estávamos", translate: "Мы были в парке вчера."},
    {sentence: "Ela ___ cansada depois da aula.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Она устала после урока."},
    {sentence: "Eu ___ feliz por estudar russo.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Я рад изучать русский."},
    {sentence: "Ele ___ no trabalho agora.", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Он сейчас на работе."},
    {sentence: "Nós ___ felizes com a decisão.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos", translate: "Мы довольны решением."},
    {sentence: "Você ___ pronto para sair?", options: ["está", "é", "são", "estamos"], answer: "está", translate: "Ты готов выйти?"},
    {sentence: "Eu ___ com frio agora.", options: ["estou", "sou", "são", "é"], answer: "estou", translate: "Мне сейчас холодно."}
  ],

ru: [
    {sentence: "Я ___ в магазин каждый день.", options: ["хожу", "иду", "пойду", "ходим"], answer: "хожу", translate: "Eu vou ao mercado todos os dias."},
    {sentence: "Он ___ счастлив сегодня.", options: ["счастлив", "были", "будет", "находится"], answer: "счастлив", translate: "Ele está feliz hoje."},
    {sentence: "Мы ___ счастливы с новостью.", options: ["счастливы", "были", "есть", "будем"], answer: "счастливы", translate: "Nós estamos felizes com a notícia."},
    {sentence: "Ты ___ готов к экзамену?", options: ["готов", "находишься", "были", "будешь"], answer: "готов", translate: "Você está pronto para a prova?"},
    {sentence: "Они ___ в России сейчас.", options: ["находятся", "были", "есть", "будут"], answer: "находятся", translate: "Eles estão na Rússia agora."},
    {sentence: "Я ___ голоден.", options: ["есть", "находится", "были", "буду"], answer: "есть", translate: "Eu estou com fome."},
    {sentence: "Она ___ учитель русского.", options: ["есть", "находится", "были", "будет"], answer: "есть", translate: "Ela é professora de russo."},
    {sentence: "Мы ___ изучаем русский сейчас.", options: ["изучаем", "есть", "были", "будем"], answer: "изучаем", translate: "Nós estamos estudando russo agora."},
    {sentence: "Он ___ врач по профессии.", options: ["есть", "находится", "были", "будет"], answer: "есть", translate: "Ele é médico de profissão."},
    {sentence: "Ты ___ доволен ответом?", options: ["доволен", "есть", "находишься", "будешь"], answer: "доволен", translate: "Você está satisfeito com a resposta?"},
    {sentence: "Я ___ студент.", options: ["есть", "были", "буду", "находится"], answer: "есть", translate: "Eu sou estudante de russo."},
    {sentence: "Мы ___ в школе вчера.", options: ["были", "есть", "находимся", "будем"], answer: "были", translate: "Nós estávamos na escola ontem."},
    {sentence: "Он ___ голоден сейчас.", options: ["есть", "были", "будет", "находится"], answer: "есть", translate: "Ele está com fome agora."},
    {sentence: "Я ___ говорю по-португальски свободно.", options: ["говорю", "есть", "были", "буду"], answer: "говорю", translate: "Eu falo português fluentemente."},
    {sentence: "Мы ___ устали после поездки.", options: ["устали", "есть", "были", "будем"], answer: "устали", translate: "Nós estamos cansados depois da viagem."},
    {sentence: "Тебе ___ холодно?", options: ["замерз", "есть", "находишься", "будешь"], answer: "замерз", translate: "Você está com frio?"},
    {sentence: "Они ___ друзья с детства.", options: ["являются", "были", "есть", "будут"], answer: "являются", translate: "Eles são amigos desde a infância."},
    {sentence: "Он ___ купит хлеб завтра.", options: ["купит", "будет", "есть", "пойдет"], answer: "купит", translate: "Ele vai comprar pão amanhã."},
    {sentence: "Я ___ в парке вчера.", options: ["был", "есть", "буду", "находился"], answer: "был", translate: "Eu estava no parque ontem."},
    {sentence: "Ты ___ говоришь по-португальски очень хорошо.", options: ["говоришь", "есть", "будешь", "был"], answer: "говоришь", translate: "Você fala português muito bem."},
    {sentence: "Мы ___ друзья с детства.", options: ["являемся", "были", "есть", "будем"], answer: "являемся", translate: "Nós somos amigos desde crianças."},
    {sentence: "Она ___ учитель русского.", options: ["есть", "находится", "будет", "были"], answer: "есть", translate: "Ela é professora de russo."},
    {sentence: "Я ___ рад быть здесь.", options: ["рад", "есть", "буду", "был"], answer: "рад", translate: "Eu estou feliz por estar aqui."},
    {sentence: "Он ___ очень умный.", options: ["умный", "есть", "будет", "был"], answer: "умный", translate: "Ele é muito inteligente."},
    {sentence: "Мы ___ в Бразилии сейчас.", options: ["находимся", "были", "есть", "будем"], answer: "находимся", translate: "Nós estamos no Brasil agora."},
    {sentence: "Ты ___ устал?", options: ["устал", "есть", "будешь", "был"], answer: "устал", translate: "Você está cansado?"},
    {sentence: "Она ___ в библиотеке.", options: ["находится", "есть", "будет", "была"], answer: "находится", translate: "Ela está na biblioteca."},
    {sentence: "Я ___ читаю книгу.", options: ["читаю", "есть", "буду", "был"], answer: "читаю", translate: "Eu estou lendo um livro."},
    {sentence: "Мы ___ учим русский вместе.", options: ["учим", "есть", "были", "будем"], answer: "учим", translate: "Nós estamos aprendendo russo juntos."},
    {sentence: "Он ___ на работе сейчас.", options: ["находится", "есть", "будет", "был"], answer: "находится", translate: "Ele está no trabalho agora."},
    {sentence: "Ты ___ готов выйти?", options: ["готов", "есть", "будешь", "был"], answer: "готов", translate: "Você está pronto para sair?"},
    {sentence: "Я ___ учусь к экзамену.", options: ["учу", "есть", "буду", "был"], answer: "учу", translate: "Eu estou estudando para a prova."},
    {sentence: "Они ___ путешествуют в Португалию.", options: ["путешествуют", "были", "будут", "есть"], answer: "путешествуют", translate: "Eles estão viajando para Portugal."},
    {sentence: "Мы ___ были в кино вчера.", options: ["были", "есть", "будем", "находимся"], answer: "были", translate: "Nós estávamos no cinema ontem."},
    {sentence: "Она ___ устала после тренировки.", options: ["устала", "есть", "будет", "была"], answer: "устала", translate: "Ela está cansada depois do treino."},
    {sentence: "Я ___ доволен результатом.", options: ["доволен", "есть", "буду", "был"], answer: "доволен", translate: "Eu estou feliz com o resultado."},
    {sentence: "Он ___ в парке каждый день.", options: ["находится", "есть", "будет", "был"], answer: "находится", translate: "Ele está no parque todos os dias."},
    {sentence: "Мы ___ довольны решением.", options: ["довольны", "есть", "будем", "были"], answer: "довольны", translate: "Nós estamos felizes com a decisão."},
    {sentence: "Ты ___ готов ехать в путешествие?", options: ["готов", "есть", "будешь", "был"], answer: "готов", translate: "Você está pronto para viajar?"},
    {sentence: "Я ___ сонный сейчас.", options: ["сонный", "есть", "буду", "был"], answer: "сонный", translate: "Eu estou com sono agora."},
    {sentence: "Она ___ моя подруга уже много лет.", options: ["является", "есть", "будет", "была"], answer: "является", translate: "Ela é minha amiga há anos."},
    {sentence: "Он ___ голоден сейчас.", options: ["голоден", "есть", "будет", "был"], answer: "голоден", translate: "Ele está com fome agora."},
    {sentence: "Мы ___ учим португальский.", options: ["учим", "есть", "будем", "были"], answer: "учим", translate: "Nós estamos estudando português."},
    {sentence: "Я ___ на работе каждый день.", options: ["на работе", "есть", "буду", "был"], answer: "на работе", translate: "Eu estou no trabalho todos os dias."},
    {sentence: "Ты ___ доволен результатом?", options: ["доволен", "есть", "будешь", "был"], answer: "доволен", translate: "Você está satisfeito com o resultado?"},
    {sentence: "Они ___ друзья с детства.", options: ["являются", "были", "есть", "будут"], answer: "являются", translate: "Eles são amigos desde crianças."},
    {sentence: "Я ___ учу русский язык.", options: ["учу", "есть", "буду", "был"], answer: "учу", translate: "Eu estou aprendendo russo."},
    {sentence: "Она ___ довольна новостью.", options: ["довольна", "есть", "будет", "была"], answer: "довольна", translate: "Ela está feliz com a notícia."},
    {sentence: "Мы ___ устали после поездки.", options: ["устали", "есть", "будем", "были"], answer: "устали", translate: "Nós estamos cansados da viagem."},
    {sentence: "Он ___ сейчас в Бразилии.", options: ["находится", "есть", "будет", "был"], answer: "находится", translate: "Ele está no Brasil agora."},
    {sentence: "Ты ___ готов к уроку?", options: ["готов", "есть", "будешь", "был"], answer: "готов", translate: "Você está pronto para a aula?"},
    {sentence: "Я ___ учусь к тесту.", options: ["учу", "есть", "буду", "был"], answer: "учу", translate: "Eu estou estudando para o teste."},
    {sentence: "Они ___ едут в Москву.", options: ["едут", "были", "будут", "есть"], answer: "едут", translate: "Eles estão viajando para Moscou."},
    {sentence: "Мы ___ были в парке вчера.", options: ["были", "есть", "будем", "находимся"], answer: "были", translate: "Nós estávamos no parque ontem."},
    {sentence: "Она ___ устала после урока.", options: ["устала", "есть", "будет", "была"], answer: "устала", translate: "Ela está cansada depois da aula."},
    {sentence: "Я ___ рад изучать русский.", options: ["рад", "есть", "буду", "был"], answer: "рад", translate: "Eu estou feliz por estudar russo."},
    {sentence: "Он ___ сейчас на работе.", options: ["находится", "есть", "будет", "был"], answer: "находится", translate: "Ele está no trabalho agora."},
    {sentence: "Мы ___ довольны решением.", options: ["довольны", "есть", "будем", "были"], answer: "довольны", translate: "Nós estamos felizes com a decisão."},
    {sentence: "Ты ___ готов выйти?", options: ["готов", "есть", "будешь", "был"], answer: "готов", translate: "Você está pronto para sair?"},
    {sentence: "Мне ___ холодно.", options: ["холодно", "есть", "буду", "был"], answer: "холодно", translate: "Eu estou com frio agora."}
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
  hideRestartButtons();

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

function hideRestartButtons(){
  restartAllBtn.style.display = 'none';
  restartWrongBtn.style.display = 'none';
  toggleTranslateBtn.style.display = 'none';
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
  hideRestartButtons();
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
