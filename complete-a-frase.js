// ===== EXERCÍCIOS =====
const exercises = {
  pt: [
    {sentence: "Eu ___ ao mercado todos os dias.", options: ["пойдет", "иду", "мы идем", "они идут"], answer: "иду"},
    {sentence: "Ele ___ feliz hoje.", options: ["está", "são", "sou", "era"], answer: "está"},
    {sentence: "Nós ___ felizes com a notícia.", options: ["estamos", "são", "eram", "é"], answer: "estamos"},
    {sentence: "Você ___ pronto para a prova?", options: ["está", "são", "é", "estávamos"], answer: "está"},
    {sentence: "Eles ___ na Rússia agora.", options: ["estão", "são", "é", "estamos"], answer: "estão"},
    {sentence: "Eu ___ com fome.", options: ["estou", "sou", "são", "é"], answer: "estou"},
    {sentence: "Ela ___ professora de russo.", options: ["é", "está", "são", "estamos"], answer: "é"},
    {sentence: "Nós ___ estudando russo agora.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos"},
    {sentence: "Ele ___ médico de profissão.", options: ["é", "está", "são", "estamos"], answer: "é"},
    {sentence: "Você ___ satisfeito com a resposta?", options: ["está", "é", "são", "estamos"], answer: "está"},
    {sentence: "Eu ___ estudante de russo.", options: ["sou", "estou", "são", "é"], answer: "sou"},
    {sentence: "Nós ___ na escola ontem.", options: ["estávamos", "são", "é", "estamos"], answer: "estávamos"},
    {sentence: "Ele ___ com fome agora.", options: ["está", "é", "são", "estamos"], answer: "está"},
    {sentence: "Eu ___ português fluentemente.", options: ["falo", "fala", "falamos", "falam"], answer: "falo"},
    {sentence: "Nós ___ cansados depois da viagem.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos"},
    {sentence: "Você ___ com frio?", options: ["está", "é", "são", "estamos"], answer: "está"},
    {sentence: "Я ___ студент.", options: ["sou", "estou", "são", "é"], answer: "sou"},
    {sentence: "Eles ___ viajando para Portugal.", options: ["estão", "são", "é", "estamos"], answer: "estão"},
    {sentence: "Nós ___ aprendendo russo juntos.", options: ["estamos", "é", "são", "estávamos"], answer: "estamos"},
    {sentence: "Ela ___ cansada depois da corrida.", options: ["está", "é", "são", "estamos"], answer: "está"},
    {sentence: "Eles ___ amigos desde a infância.", options: ["são", "estão", "é", "estávamos"], answer: "são"},
    {sentence: "Ele ___ comprar pão amanhã.", options: ["vai", "vou", "vamos", "vão"], answer: "vai"},
    {sentence: "Eu ___ no parque ontem.", options: ["estava", "sou", "são", "é"], answer: "estava"},
    {sentence: "Você ___ português muito bem.", options: ["fala", "falamos", "falam", "falo"], answer: "fala"},
    {sentence: "Nós ___ amigos desde crianças.", options: ["somos", "estamos", "são", "é"], answer: "somos"},
    {sentence: "Ela ___ professora de russo.", options: ["é", "está", "são", "estamos"], answer: "é"},
    {sentence: "Eu ___ feliz por estar aqui.", options: ["estou", "sou", "são", "é"], answer: "estou"},
    {sentence: "Ele ___ muito inteligente.", options: ["é", "está", "são", "estamos"], answer: "é"},
    {sentence: "Nós ___ no Brasil agora.", options: ["estamos", "são", "é", "estávamos"], answer: "estamos"},
    {sentence: "Você ___ cansado?", options: ["está", "é", "são", "estamos"], answer: "está"},
  ],
  ru: [
    {sentence: "Я ___ в магазин каждый день.", options: ["пойдет", "иду", "мы идем", "они идут"], answer: "иду"},
    {sentence: "Он ___ счастлив сегодня.", options: ["есть", "были", "будет", "находится"], answer: "есть"},
    {sentence: "Мы ___ счастливы с новостью.", options: ["находимся", "были", "есть", "будем"], answer: "находимся"},
    {sentence: "Ты ___ готов к экзамену?", options: ["есть", "находишься", "были", "будешь"], answer: "находишься"},
    {sentence: "Они ___ в России сейчас.", options: ["находятся", "были", "есть", "будут"], answer: "находятся"},
    {sentence: "Я ___ голоден.", options: ["есть", "находится", "были", "буду"], answer: "есть"},
    {sentence: "Она ___ учитель русского.", options: ["есть", "находится", "были", "будет"], answer: "есть"},
    {sentence: "Мы ___ изучаем русский сейчас.", options: ["изучаем", "есть", "были", "будем"], answer: "изучаем"},
    {sentence: "Он ___ врач по профессии.", options: ["есть", "находится", "были", "будет"], answer: "есть"},
    {sentence: "Ты ___ доволен ответом?", options: ["доволен", "есть", "находишься", "будешь"], answer: "доволен"},
    {sentence: "Я ___ студент.", options: ["есть", "были", "буду", "находится"], answer: "есть"},
    {sentence: "Мы ___ в школе вчера.", options: ["были", "есть", "находимся", "будем"], answer: "были"},
    {sentence: "Он ___ голоден сейчас.", options: ["есть", "были", "будет", "находится"], answer: "есть"},
    {sentence: "Я ___ говорю по-португальски свободно.", options: ["говорю", "есть", "были", "буду"], answer: "говорю"},
    {sentence: "Мы ___ устали после поездки.", options: ["устали", "есть", "были", "будем"], answer: "устали"},
    {sentence: "Ты ___ холодно?", options: ["замерз", "есть", "находишься", "будешь"], answer: "замерз"},
    {sentence: "Я ___ студент.", options: ["есть", "были", "буду", "находится"], answer: "есть"},
    {sentence: "Они ___ путешествуют в Португалию.", options: ["путешествуют", "были", "будут", "есть"], answer: "путешествуют"},
    {sentence: "Мы ___ учим русский вместе.", options: ["учим", "есть", "были", "будем"], answer: "учим"},
    {sentence: "Она ___ устала после бега.", options: ["устала", "есть", "будет", "были"], answer: "устала"},
    {sentence: "Они ___ друзья с детства.", options: ["являются", "были", "есть", "будут"], answer: "являются"},
    {sentence: "Он ___ купит хлеб завтра.", options: ["купит", "будет", "есть", "пойдет"], answer: "купит"},
    {sentence: "Я ___ в парке вчера.", options: ["был", "есть", "буду", "находился"], answer: "был"},
    {sentence: "Ты ___ говоришь по-португальски очень хорошо.", options: ["говоришь", "есть", "будешь", "был"], answer: "говоришь"},
    {sentence: "Мы ___ друзья с детства.", options: ["являемся", "были", "есть", "будем"], answer: "являемся"},
    {sentence: "Она ___ учитель русского.", options: ["есть", "находится", "будет", "были"], answer: "есть"},
    {sentence: "Я ___ рад быть здесь.", options: ["рад", "есть", "буду", "был"], answer: "рад"},
    {sentence: "Он ___ очень умный.", options: ["умный", "есть", "будет", "был"], answer: "умный"},
    {sentence: "Мы ___ в Бразилии сейчас.", options: ["находимся", "были", "есть", "будем"], answer: "находимся"},
    {sentence: "Ты ___ устал?", options: ["устал", "есть", "будешь", "был"], answer: "устал"},
  ]
};

// ===== VARIÁVEIS =====
let currentLang = 'pt';
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let wrongExercises = [];

const sentenceEl = document.getElementById('sentence');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');
const progressBar = document.getElementById('progressBar');
const clickSound = document.getElementById('clickSound');
const languageToggle = document.getElementById('languageToggle');

// ===== FUNÇÕES =====
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function loadExercise() {
  if(currentIndex >= exercises[currentLang].length){
    showFinalResults();
    return;
  }

  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';

  const exercise = exercises[currentLang][currentIndex];
  sentenceEl.textContent = exercise.sentence;

  optionsEl.innerHTML = '';
  exercise.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option';
    btn.onclick = () => selectOption(btn, exercise.answer);
    optionsEl.appendChild(btn);
  });

  updateProgress();
}

function selectOption(button, correctAnswer){
  playSound();
  if(button.classList.contains('selected')) return;

  const allButtons = document.querySelectorAll('.option');
  allButtons.forEach(btn => btn.disabled = true);

  if(button.textContent === correctAnswer){
    button.classList.add('correct');
    feedbackEl.textContent = currentLang==='pt'?'✅ Correto!':'✅ Верно!';
    correctCount++;
  } else {
    button.classList.add('wrong');
    feedbackEl.textContent = currentLang==='pt'?'❌ Errado!':'❌ Неверно!';
    wrongCount++;
    wrongExercises.push(exercises[currentLang][currentIndex]);
  }

  nextBtn.style.display = 'block';
}

function updateProgress(){
  const total = exercises[currentLang].length;
  const done = correctCount + wrongCount;
  const percent = Math.round((done/total)*100);
  progressBar.style.width = percent+'%';
  scoreEl.textContent = `✅ ${correctCount} | ❌ ${wrongCount} | ${percent}%`;
}

function showFinalResults(){
  sentenceEl.textContent = currentLang==='pt'?'🎉 Parabéns! Você concluiu todos os exercícios!':'🎉 Поздравляем! Вы завершили все упражнения!';
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.textContent = currentLang==='pt'?'Refazer erradas':'Повторить ошибки';
  nextBtn.style.display = wrongExercises.length > 0 ? 'block' : 'none';
}

nextBtn.addEventListener('click', () => {
  if(wrongExercises.length > 0){
    exercises[currentLang] = [...wrongExercises];
    wrongExercises = [];
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    nextBtn.textContent = currentLang==='pt'?'Próxima':'Следующая';
    loadExercise();
  } else {
    currentIndex++;
    loadExercise();
  }
});

// ===== MODO ESCURO =====
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark') document.body.classList.add('dark-mode');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark?'dark':'light');
});

// ===== TOGGLE IDIOMA =====
languageToggle.addEventListener('click', () => {
  currentLang = currentLang==='pt'?'ru':'pt';
  languageToggle.textContent = currentLang==='pt'?'PT':'RU';
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  wrongExercises = [];
  nextBtn.textContent = currentLang==='pt'?'Próxima':'Следующая';
  loadExercise();
});

// ===== INICIALIZAÇÃO =====
loadExercise();
