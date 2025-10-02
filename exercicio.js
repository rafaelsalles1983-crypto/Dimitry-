// Lista de exercícios com traduções corretas
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

let currentExercise = 0;
let selectedRus = null;

function loadExercise() {
  const container = document.getElementById("cruzadoContainer");
  container.innerHTML = "";

  if (currentExercise >= exercises.length) {
    container.innerHTML = "<h2>🎉 Parabéns! Você concluiu todos os exercícios!</h2>";
    document.getElementById("progressText").textContent = "";
    return;
  }

  const { russian, portuguese } = exercises[currentExercise];

  // embaralhar português
  const shuffledPt = [...portuguese].sort(() => Math.random() - 0.5);

  const rusCol = document.createElement("div");
  rusCol.classList.add("column");
  russian.forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.classList.add("word");
    div.onclick = () => selectRus(div, word);
    rusCol.appendChild(div);
  });

  const ptCol = document.createElement("div");
  ptCol.classList.add("column");
  shuffledPt.forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.classList.add("placeholder");
    div.onclick = () => selectPt(div, word);
    ptCol.appendChild(div);
  });

  const row = document.createElement("div");
  row.classList.add("container");
  row.appendChild(rusCol);
  row.appendChild(ptCol);

  container.appendChild(row);

  updateProgress();
}

function selectRus(div, word) {
  if (selectedRus) selectedRus.classList.remove("selected");
  selectedRus = div;
  div.classList.add("selected");
}

function selectPt(div, word) {
  if (!selectedRus) return;

  const rusWord = selectedRus.textContent;
  const correctIndex = exercises[currentExercise].russian.indexOf(rusWord);
  const correctAnswer = exercises[currentExercise].portuguese[correctIndex];

  if (word === correctAnswer) {
    selectedRus.classList.add("correct");
    div.classList.add("correct");
    selectedRus.onclick = null;
    div.onclick = null;
  } else {
    selectedRus.classList.add("wrong");
    div.classList.add("wrong");
    setTimeout(() => {
      selectedRus.classList.remove("wrong");
      div.classList.remove("wrong");
    }, 800);
  }

  selectedRus.classList.remove("selected");
  selectedRus = null;

  checkCompletion();
}

function checkCompletion() {
  const done = [...document.querySelectorAll(".correct")].length;
  const total = exercises[currentExercise].russian.length * 2;

  if (done === total) {
    currentExercise++;
    setTimeout(loadExercise, 1000);
  }
}

function updateProgress() {
  document.getElementById("progressText").textContent =
    `Exercício ${currentExercise + 1} de ${exercises.length}`;

  const percent = ((currentExercise) / exercises.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

window.onload = loadExercise;
