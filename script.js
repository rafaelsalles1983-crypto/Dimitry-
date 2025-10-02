// ================= Menu Lateral =================
const sideMenu = document.getElementById('sideMenu');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

const toggleMenu = show => {
  if (window.innerWidth <= 768) {
    sideMenu.classList.toggle('show', show);
  } else {
    sideMenu.style.display = show ? 'block' : 'none';
  }
  openMenuBtn.style.display = show ? 'none' : 'block';
};

openMenuBtn.addEventListener('click', () => toggleMenu(true));
closeMenuBtn.addEventListener('click', () => toggleMenu(false));

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sideMenu.style.display = 'block';
    sideMenu.classList.remove('show');
    openMenuBtn.style.display = 'none';
  } else {
    sideMenu.style.display = 'none';
    openMenuBtn.style.display = 'block';
  }
});

// ================= Variáveis do Exercício =================
let currentLesson = '';
let currentIndex = 0;
let totalQuestions = 0;
let correctAnswers = 0;
let lives = 3;
let assembledWords = [];

// ================= Dados dos Exercícios =================


// ================= Funções do Modal =================
function openModal(lessonKey) {
  currentLesson = lessonKey;
  currentIndex = 0;
  totalQuestions = contentData[lessonKey].length;
  correctAnswers = 0;
  lives = 3;
  document.getElementById('congratsMessage')?.style.display = 'none';
  loadQuestion(contentData[lessonKey][currentIndex]);
  document.getElementById('modal').style.display = 'block';
}

function renderLives() {
  const container = document.getElementById('livesContainer');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    span.textContent = '●';
    span.className = 'heart' + (i >= lives ? ' lost' : '');
    container.appendChild(span);
  }
}

function loadQuestion(data) {
  assembledWords = [];
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalPhrase').textContent = data.phrase;
  document.getElementById('assembledPhrase').textContent = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('resultImage').innerHTML = '';
  document.getElementById('modalAudio').src = data.audio;

  renderLives();

  const wordBank = document.getElementById('wordBank');
  wordBank.innerHTML = '';
  [...data.words].sort(() => Math.random() - 0.5).forEach(word => {
    const div = document.createElement('div');
    div.textContent = word;
    div.className = 'word';
    div.onclick = () => selectWord(word, div);
    wordBank.appendChild(div);
  });
}

function selectWord(word, element) {
  assembledWords.push(word);
  element.style.display = 'none';
  renderAssembled();
}

function renderAssembled() {
  const assembledDiv = document.getElementById('assembledPhrase');
  assembledDiv.innerHTML = '';
  const currentItem = contentData[currentLesson][currentIndex];
  const feedback = document.getElementById('feedback');

  assembledWords.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    span.style.fontWeight = 'bold';
    span.style.cursor = 'pointer';
    span.title = 'Clique para voltar ao banco';
    span.onclick = () => {
      assembledWords.splice(index, 1);
      const bankDiv = document.createElement('div');
      bankDiv.textContent = word;
      bankDiv.className = 'word';
      bankDiv.onclick = () => selectWord(word, bankDiv);
      document.getElementById('wordBank').appendChild(bankDiv);
      renderAssembled();
    };
    assembledDiv.appendChild(span);
  });

  const normalize = str => str.replace(/\s+/g,' ').trim();

  if (assembledWords.length === currentItem.words.length) {
    const userAnswer = normalize(assembledWords.join(' '));
    const correctAnswer = normalize(currentItem.words.join(' '));

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.textContent = 'Correto! ✅';
      feedback.style.color = 'green';
      correctAnswers++;
      setTimeout(nextQuestion, 800);
    } else {
      lives--;
      renderLives();
      if (lives > 0) {
        feedback.textContent = `Errado ❌ Vidas restantes: ${lives}`;
        feedback.style.color = 'red';
        setTimeout(() => loadQuestion(currentItem), 800);
      } else {
        feedback.textContent = 'Sem vidas! Voltando ao começo.';
        feedback.style.color = 'red';
        setTimeout(() => {
          lives = 3;
          currentIndex = 0;
          correctAnswers = 0;
          loadQuestion(contentData[currentLesson][0]);
        }, 1200);
      }
    }
  } else {
    feedback.textContent = '';
  }
}

function nextQuestion() {
  currentIndex++;
  document.getElementById('congratsMessage')?.style.display = 'none';
  if (currentIndex < totalQuestions) {
    loadQuestion(contentData[currentLesson][currentIndex]);
  } else {
    const percent = Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById('feedback').textContent = `Você completou! Acertos: ${percent}%`;
    document.getElementById('resultImage').innerHTML = '<img src="parabens.png" alt="Parabéns!">';
  }
}

// ================= Inicialização =================
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 768) {
    sideMenu.style.display = 'block';
    openMenuBtn.style.display = 'none';
  } else {
    sideMenu.style.display = 'none';
    openMenuBtn.style.display = 'block';
  }
});




