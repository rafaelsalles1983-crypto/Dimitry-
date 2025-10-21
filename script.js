<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Славянский клуб</title>
<link rel="stylesheet" href="style.css">
<style>
/* ===== BOTÕES LATERAIS ===== */

aside nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
}

aside nav a {
  display: block;
  background: #f0f0f0;
  color: #333;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  font-size: 1.1em;
  font-weight: 500;
  transition: all 0.3s ease;
}

aside nav a:hover {
  background: #4CAF50;
  color: white;
  transform: scale(1.03);
}

/* ===== Dark Mode para botões laterais ===== */
body.dark-mode aside nav a {
  background: #1e1e1e;
  color: #ddd;
  box-shadow: 0 3px 6px rgba(255,255,255,0.1);
}

body.dark-mode aside nav a:hover {
  background: #45a049;
  color: white;
}
 /* ===== destacar o botão da página em que o usuário está ===== */
aside nav a.active {
  background: #4CAF50;
  color: white;
  transform: scale(1.03);
}
 /* ===== Overlay com animação ===== */
.overlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.show {
  display: flex;
  opacity: 1;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease;
  text-align: center; /* centraliza o conteúdo */
  font-size: 1.5em;  /* aumenta o tamanho do texto */
}

.overlay.show .overlay-content {
  transform: scale(1);
}

.overlay-content .word {
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;
}

.overlay-content .word.selected {
  background: #4CAF50; /* cor quando selecionada */
  color: white;        /* cor da letra quando selecionada */
}
  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5em;
    cursor: pointer;
  }
  .lesson-card { cursor: pointer; }
  .lesson-card.locked { opacity: 0.5; cursor: not-allowed; }

  
/* ===== Footer ===== */
#siteFooter {
  position: fixed;      /* Fixa o rodapé na tela */
  bottom: 0;            /* Alinhado à parte inferior */
  left: 0;
  width: 100%;          /* Ocupa toda a largura */
  background: white;  
  color: #555;
  text-align: center;
  padding: 8px 0;
  z-index: 999;         /* Fica acima de outros elementos */
  font-size: 0.85emm;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.1);


}
body {
  padding-bottom: 100px; /* Garante que o conteúdo não fique escondido atrás do rodapé */
}

/* ===== MODO ESCURO ===== */

#modoBtn {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

#modoBtn:hover {
  background: #45a049; /* efeito hover */
}


body.dark-mode {
  background: #121212;
  color: #f0f0f0;
}
body.dark-mode header, 
body.dark-mode footer {
  background: #1e1e1e;
}


/* ===== configuração do emoji dimitry ===== */

.emoji-head {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 8px;
}


/* ===== Overlay completo ===== */
.overlay {
  display: none; /* Inicialmente escondido */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
  justify-content: center; /* Centraliza horizontal */
  align-items: center;     /* Centraliza vertical */
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.show {
  display: flex;
  opacity: 1;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease;
  text-align: center;
  font-size: 1.5em;
}

.overlay.show .overlay-content {
  transform: scale(1);
}

/* Palavras clicáveis */
.overlay-content .word {
  display: inline-block;
  margin: 5px 8px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: #eee;
  user-select: none; /* Evita seleção acidental */
}

.overlay-content .word:hover {
  background: #ddd;
}

.overlay-content .word.selected {
  background: #4CAF50;
  color: white;
}

/* Botão de fechar */
.overlay-content .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5em;
  cursor: pointer;
}

/* Barra de progresso */
.overlay-content .progress-container {
  width: 100%;
  background: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 15px;
}

.overlay-content .progress-bar {
  height: 20px;
  width: 0%;
  background: #4CAF50;
  border-radius: 5px;
  text-align: center;
  color: white;
  line-height: 20px;
  font-size: 0.9em;
  transition: width 0.3s ease;
}

/* Botões dentro do overlay */
.overlay-content button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.2s;
}

.overlay-content button:hover {
  background: #45a049;
}

/* Responsividade */
@media (max-width: 768px) {
  .overlay-content {
    font-size: 1.2em;
    padding: 15px;
  }

  .overlay-content .word {
    margin: 4px 6px;
    padding: 4px 8px;
  }

  .overlay-content button {
    font-size: 0.9em;
    padding: 6px 12px;
  }
/* ===== HEADER FIXO ===== */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--header-bg, #fff);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* Corrige o deslocamento do conteúdo para não ficar escondido atrás do header */
body {
  margin: 0;
  padding-top: 70px; /* altura do header */
}

/* ===== MENU (ASIDE) ===== */
aside {
  position: relative;
  top: 0;
  width: 100%;
  background: transparent;
  box-shadow: none;
  margin: 0;
  padding: 0;
}

/* ===== MENU HORIZONTAL NO CELULAR ===== */
@media (max-width: 768px) {
  aside {
    position: fixed;
    top: 70px; /* logo abaixo do header fixo */
    left: 0;
    right: 0;
    z-index: 999;
  }

  aside nav {
    display: flex !important;
    flex-direction: row !important;
    overflow-x: auto;
    white-space: nowrap;
    gap: 8px;
    padding: 8px 10px;
    background: #f9f9f9;
    scrollbar-width: thin;
    border-bottom: 1px solid #ddd;
  }

  aside nav a {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    padding: 8px 10px;
    font-size: 0.9em;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    color: #333;
  }

  aside nav a:hover {
    background: #4CAF50;
    color: white;
  }

  aside nav a.active {
    background: #4CAF50;
    color: white;
  }

  /* Ajusta o conteúdo para não ficar escondido atrás do menu fixo */
  main {
    padding-top: 110px; /* header (70px) + menu (40px) */
  }

  /* Esconde o mascote no celular */
  .mascote {
    display: none;
  }

  /* Dark mode */
  body.dark-mode aside nav {
    background: #121212;
    border-bottom: 1px solid #333;
  }

  body.dark-mode aside nav a {
    background: #1e1e1e;
    color: #ddd;
    box-shadow: 0 1px 3px rgba(255,255,255,0.05);
  }

  body.dark-mode aside nav a:hover,
  body.dark-mode aside nav a.active {
    background: #4CAF50;
    color: white;
  }
}








 
</style>
</head>
<body>

<header>
  <h1>Славянский клуб <img src="emoji_dimitry.png" alt="Dimitry" class="emoji-head"> </h1>	 
  <button class="login" id="modoBtn">🌙</button>
</header>
<aside>
  <nav>
    <a href="index.html" class="active">📈 Selecionar</a>
    <a href="exercicio.html">📝 Exercícios</a>
    <a href="jogo.html">🎮 Jogos</a>
    <a href="complete-a-frase.html">🧩 Complete a Frase</a>
    <a href="chat.html">💬 Chat</a>
  </nav>
  <div class="mascote"> Dimitry</div>
</aside>

<main>
  <div class="cards">
    <div class="card lesson-card" data-key="possessivos">
      <h3>📘 Притяжательные прилагательные</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="numerais">
      <h3>📘 Числительные</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboSerPresente">
      <h3>📘 Глагол "ser" (настоящее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboEstarPresente">
      <h3>📘 Глагол "estar" (настоящее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboSerPassado">
      <h3>📘 Глагол "ser" (прошедшее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboEstarPassado">
      <h3>📘 Глагол "estar" (прошедшее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboSerFuturo">
      <h3>📘 Глагол "ser" (будущее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verboEstarFuturo">
      <h3>📘 Глагол "estar" (будущее время)</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="quantidades">
      <h3>📘 Количественные выражения</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="objetoDireto">
      <h3>📘 Прямое дополнение</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="tempoPresente">
      <h3>📘 Настоящее время</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="infinitivo">
      <h3>📘 Инфинитив</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="lugares">
      <h3>📘 Описание мест</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="profissoes">
      <h3>📘 Профессии</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="viagem">
      <h3>📘 Путешествия</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="familia">
      <h3>📘 Семья</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="verbosMovimento">
      <h3>📘 Глаголы движения</h3>
      <p>Complete este módulo.</p>
    </div>
    <div class="card lesson-card locked" data-key="FrasesDeConvercacao">
      <h3>📘 Разговорные фразы</h3>
      <p>Complete este módulo.</p>
    </div>
  </div>
</main>


<!-- Overlay único para módulos e dicionário -->
<div id="overlayModal" class="overlay">
  <div class="overlay-content">
    <span class="close-btn" onclick="closeOverlay()">&times;</span>
    
    <!-- Barra de progresso -->
    <div class="progress-container">
      <div class="progress-bar" id="progressBar">0%</div>
    </div>
    
    <div id="overlayBody"></div>
  </div>
</div>



<script>
// Função para abrir overlay e mostrar palavras
function openOverlay(wordsArray) {
  const overlay = document.getElementById('overlayModal');
  const overlayBody = document.getElementById('overlayBody');
  
  overlayBody.innerHTML = ''; // limpa conteúdo anterior

  wordsArray.forEach(word => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.textContent = word;
    span.addEventListener('click', () => {
      span.classList.toggle('selected'); // alterna cor ao clicar
    });
    overlayBody.appendChild(span);
  });

  overlay.classList.add('show');
}

// Fechar overlay
function closeOverlay() {
  document.getElementById('overlayModal').classList.remove('show');
}
</script>


<script>
  // Dados dos módulos
const contentData = {

    possessivos:[
  {title:'вопрос 1', phrase:'Meu amigo vai para a escola.', words:['Мой','друг','идёт','в','школу'], translation:'Meu amigo vai para a escola.', audio:'audio/possessivos1.mp3'},
  {title:'вопрос 2', phrase:'Minha irmã estuda na universidade.', words:['Моя','сестра','учится','в','университете'], translation:'Minha irmã estuda na universidade.', audio:'audio/possessivos2.mp3'},
  {title:'вопрос 3', phrase:'Nosso professor fala russo.', words:['Наш','учитель','говорит','по-русски'], translation:'Nosso professor fala russo.', audio:'audio/possessivos3.mp3'},
  {title:'вопрос 4', phrase:'Sua mãe trabalha no hospital.', words:['Твоя','мама','работает','в','больнице'], translation:'Sua mãe trabalha no hospital.', audio:'audio/possessivos4.mp3'},
  {title:'вопрос 5', phrase:'Seu pai lê o jornal.', words:['Твой','папа','читает','газету'], translation:'Seu pai lê o jornal.', audio:'audio/possessivos5.mp3'},
  {title:'вопрос 6', phrase:'Minha casa é grande.', words:['Мой','дом','большой'], translation:'Minha casa é grande.', audio:'audio/possessivos6.mp3'},
  {title:'вопрос 7', phrase:'Nosso livro está na mesa.', words:['Наша','книга','находится','на','столе'], translation:'Nosso livro está na mesa.', audio:'audio/possessivos7.mp3'},
  {title:'вопрос 8', phrase:'Meu irmão mora em Moscou.', words:['Мой','брат','живет','в','Москве'], translation:'Meu irmão mora em Moscou.', audio:'audio/possessivos8.mp3'},
  {title:'вопрос 9', phrase:'Nossa família gosta de viajar.', words:['Наша','семья','любит','путешествовать'], translation:'Nossa família gosta de viajar.', audio:'audio/possessivos9.mp3'},
  {title:'вопрос 10', phrase:'Seu carro é novo.', words:['Твоя','машина','новая'], translation:'Seu carro é novo.', audio:'audio/possessivos10.mp3'}
],

      numerais: [
    {title:'Pergunta 1', phrase:'Um livro', words:['Одна','книга'], translation:'Um livro', audio:'audio/01.mp3'},
    {title:'Pergunta 2', phrase:'Dois carros', words:['Две','машины'], translation:'Dois carros', audio:'audio/02.mp3'},
    {title:'Pergunta 3', phrase:'Três casas', words:['Три','дома'], translation:'Três casas', audio:'audio/03.mp3'},
    {title:'Pergunta 4', phrase:'Quatro amigos', words:['Четыре','друга'], translation:'Quatro amigos', audio:'audio/04.mp3'},
    {title:'Pergunta 5', phrase:'Cinco mesas', words:['Пять','столов'], translation:'Cinco mesas', audio:'audio/05.mp3'},
    {title:'Pergunta 6', phrase:'Seis cadeiras', words:['Шесть','стульев'], translation:'Seis cadeiras', audio:'audio/06.mp3'},
    {title:'Pergunta 7', phrase:'Sete lápis', words:['Семь','карандашей'], translation:'Sete lápis', audio:'audio/07.mp3'},
    {title:'Pergunta 8', phrase:'Oito flores', words:['Восемь','цветов'], translation:'Oito flores', audio:'audio/08.mp3'},
    {title:'Pergunta 9', phrase:'Nove livros', words:['Девять','книг'], translation:'Nove livros', audio:'audio/09.mp3'},
    {title:'Pergunta 10', phrase:'Dez mesas', words:['Десять','столов'], translation:'Dez mesas', audio:'audio/10.mp3'}
], 

verboSerPresente: [
    {title:'Pergunta 1', phrase:'Eu sou estudante.', words:['Я','студент.'], translation:'Eu sou estudante.', audio:'audio/11.mp3'},
    {title:'Pergunta 2', phrase:'Tu és professor.', words:['Ты','учитель.'], translation:'Tu és professor.', audio:'audio/12.mp3'},
    {title:'Pergunta 3', phrase:'Ele é médico.', words:['Он','врач.'], translation:'Ele é médico.', audio:'audio/13.mp3'},
    {title:'Pergunta 4', phrase:'Ela é minha amiga.', words:['Она','моя','подруга.'], translation:'Ela é minha amiga.', audio:'audio/14.mp3'},
    {title:'Pergunta 5', phrase:'Nós somos felizes.', words:['Мы','счастливы.'], translation:'Nós somos felizes.', audio:'audio/15.mp3'},
    {title:'Pergunta 6', phrase:'Vós sois gentis.', words:['Вы','вежливы.'], translation:'Vós sois gentis.', audio:'audio/16.mp3'},
    {title:'Pergunta 7', phrase:'Eles são inteligentes.', words:['Они','умные.'], translation:'Eles são inteligentes.', audio:'audio/17.mp3'},
    {title:'Pergunta 8', phrase:'Eu não sou rico.', words:['Я','не','богат.'], translation:'Eu não sou rico.', audio:'audio/18.mp3'},
    {title:'Pergunta 9', phrase:'Ela não é professora.', words:['Она','не','учитель.'], translation:'Ela não é professora.', audio:'audio/19.mp3'},
    {title:'Pergunta 10', phrase:'Nós não somos velhos.', words:['Мы','не','старые.'], translation:'Nós não somos velhos.', audio:'audio/20.mp3'}
  ],

verboEstarPresente: [
    {title:'Pergunta 1', phrase:'Eu estou em casa.', words:['Я','дома.'], translation:'Eu estou em casa.', audio:'audio/21.mp3'},
    {title:'Pergunta 2', phrase:'Tu estás cansado.', words:['Ты','устал.'], translation:'Tu estás cansado.', audio:'audio/22.mp3'},
    {title:'Pergunta 3', phrase:'Ele está no trabalho.', words:['Он','на','работе.'], translation:'Ele está no trabalho.', audio:'audio/23.mp3'},
    {title:'Pergunta 4', phrase:'Ela está feliz.', words:['Она','счастлива.'], translation:'Ela está feliz.', audio:'audio/24.mp3'},
    {title:'Pergunta 5', phrase:'Nós estamos ocupados.', words:['Мы','заняты.'], translation:'Nós estamos ocupados.', audio:'audio/25.mp3'},
    {title:'Pergunta 6', phrase:'Vós estais em paz.', words:['Вы','в мире.'], translation:'Vós estais em paz.', audio:'audio/26.mp3'},
    {title:'Pergunta 7', phrase:'Eles estão no parque.', words:['Они','в','парке.'], translation:'Eles estão no parque.', audio:'audio/27.mp3'},
    {title:'Pergunta 8', phrase:'Eu não estou triste.', words:['Я','не','грустный.'], translation:'Eu não estou triste.', audio:'audio/28.mp3'},
    {title:'Pergunta 9', phrase:'Ela não está em casa.', words:['Она','не','дома.'], translation:'Ela não está em casa.', audio:'audio/29.mp3'},
    {title:'Pergunta 10', phrase:'Nós não estamos cansados.', words:['Мы','не','устали.'], translation:'Nós não estamos cansados.', audio:'audio/30.mp3'}
  ],

      verboSerPassado: [
    {title:'Pergunta 1', phrase:'Eu fui estudante.', words:['Я','был','студентом.'], translation:'Eu fui estudante.', audio:'audio/31.mp3'},
    {title:'Pergunta 2', phrase:'Tu foste professor.', words:['Ты','был','учителем.'], translation:'Tu foste professor.', audio:'audio/32.mp3'},
    {title:'Pergunta 3', phrase:'Ele foi médico.', words:['Он','был','врачом.'], translation:'Ele foi médico.', audio:'audio/33.mp3'},
    {title:'Pergunta 4', phrase:'Ela foi minha amiga.', words:['Она','была','моей','подругой.'], translation:'Ela foi minha amiga.', audio:'audio/34.mp3'},
    {title:'Pergunta 5', phrase:'Nós fomos felizes.', words:['Мы','были','счастливы.'], translation:'Nós fomos felizes.', audio:'audio/35.mp3'},
    {title:'Pergunta 6', phrase:'Vós fostes gentis.', words:['Вы','были','вежливы.'], translation:'Vós fostes gentis.', audio:'audio/36.mp3'},
    {title:'Pergunta 7', phrase:'Eles foram inteligentes.', words:['Они','были','умные.'], translation:'Eles foram inteligentes.', audio:'audio/37.mp3'},
    {title:'Pergunta 8', phrase:'Eu não fui rico.', words:['Я','не','был','богатым.'], translation:'Eu não fui rico.', audio:'audio/38.mp3'},
    {title:'Pergunta 9', phrase:'Ela não foi professora.', words:['Она','не','была','учителем.'], translation:'Ela não foi professora.', audio:'audio/39.mp3'},
    {title:'Pergunta 10', phrase:'Nós não fomos velhos.', words:['Мы','не','были','старыми.'], translation:'Nós não fomos velhos.', audio:'audio/40.mp3'}
  ],
      
      verboEstarPassado: [
    {title:'Pergunta 1', phrase:'Eu estive em casa.', words:['Я','был','дома.'], translation:'Eu estive em casa.', audio:'audio/41.mp3'},
    {title:'Pergunta 2', phrase:'Tu estiveste cansado.', words:['Ты','был','усталым.'], translation:'Tu estiveste cansado.', audio:'audio/42.mp3'},
    {title:'Pergunta 3', phrase:'Ele esteve no trabalho.', words:['Он','был','на','работе.'], translation:'Ele esteve no trabalho.', audio:'audio/43.mp3'},
    {title:'Pergunta 4', phrase:'Ela esteve feliz.', words:['Она','была','счастлива.'], translation:'Ela esteve feliz.', audio:'audio/44.mp3'},
    {title:'Pergunta 5', phrase:'Nós estivemos ocupados.', words:['Мы','были','заняты.'], translation:'Nós estivemos ocupados.', audio:'audio/45.mp3'},
    {title:'Pergunta 6', phrase:'Vós estivestes em paz.', words:['Вы','были','в','мире.'], translation:'Vós estivestes em paz.', audio:'audio/46.mp3'},
    {title:'Pergunta 7', phrase:'Eles estiveram no parque.', words:['Они','были','в','парке.'], translation:'Eles estiveram no parque.', audio:'audio/47.mp3'},
    {title:'Pergunta 8', phrase:'Eu não estive triste.', words:['Я','не','был','грустным.'], translation:'Eu não estive triste.', audio:'audio/48.mp3'},
    {title:'Pergunta 9', phrase:'Ela não esteve em casa.', words:['Она','не','была','дома.'], translation:'Ela não esteve em casa.', audio:'audio/49.mp3'},
    {title:'Pergunta 10', phrase:'Nós não estivemos cansados.', words:['Мы','не','были','усталыми.'], translation:'Nós não estivemos cansados.', audio:'audio/50.mp3'}
  ],

      verboSerFuturo: [
    {title:'Pergunta 1', phrase:'Eu serei estudante.', words:['Я','буду','студентом.'], translation:'Eu serei estudante.', audio:'audio/51.mp3'},
    {title:'Pergunta 2', phrase:'Tu serás professor.', words:['Ты','будешь','учителем.'], translation:'Tu serás professor.', audio:'audio/52.mp3'},
    {title:'Pergunta 3', phrase:'Ele será médico.', words:['Он','будет','врачом.'], translation:'Ele será médico.', audio:'audio/53.mp3'},
    {title:'Pergunta 4', phrase:'Ela será minha amiga.', words:['Она','будет','моей','подругой.'], translation:'Ela será minha amiga.', audio:'audio/54.mp3'},
    {title:'Pergunta 5', phrase:'Nós seremos felizes.', words:['Мы','будем','счастливы.'], translation:'Nós seremos felizes.', audio:'audio/55.mp3'},
    {title:'Pergunta 6', phrase:'Vós sereis gentis.', words:['Вы','будете','вежливы.'], translation:'Vós sereis gentis.', audio:'audio/56.mp3'},
    {title:'Pergunta 7', phrase:'Eles serão inteligentes.', words:['Они','будут','умные.'], translation:'Eles serão inteligentes.', audio:'audio/57.mp3'},
    {title:'Pergunta 8', phrase:'Eu não serei rico.', words:['Я','не','буду','богатым.'], translation:'Eu não serei rico.', audio:'audio/58.mp3'},
    {title:'Pergunta 9', phrase:'Ela não será professora.', words:['Она','не','будет','учителем.'], translation:'Ela não será professora.', audio:'audio/59.mp3'},
    {title:'Pergunta 10', phrase:'Nós não seremos velhos.', words:['Мы','не','будем','старыми.'], translation:'Nós não seremos velhos.', audio:'audio/60.mp3'}
  ],

      verboEstarFuturo: [
    {title:'Pergunta 1', phrase:'Eu estarei em casa.', words:['Я','буду','дома.'], translation:'Eu estarei em casa.', audio:'audio/61.mp3'},
    {title:'Pergunta 2', phrase:'Tu estarás cansado.', words:['Ты','будешь','усталым.'], translation:'Tu estarás cansado.', audio:'audio/62.mp3'},
    {title:'Pergunta 3', phrase:'Ele estará no trabalho.', words:['Он','будет','на','работе.'], translation:'Ele estará no trabalho.', audio:'audio/63.mp3'},
    {title:'Pergunta 4', phrase:'Ela estará feliz.', words:['Она','будет','счастлива.'], translation:'Ela estará feliz.', audio:'audio/64.mp3'},
    {title:'Pergunta 5', phrase:'Nós estaremos ocupados.', words:['Мы','будем','заняты.'], translation:'Nós estaremos ocupados.', audio:'audio/65.mp3'},
    {title:'Pergunta 6', phrase:'Vós estareis em paz.', words:['Вы','будете','в','мире.'], translation:'Vós estareis em paz.', audio:'audio/66.mp3'},
    {title:'Pergunta 7', phrase:'Eles estarão no parque.', words:['Они','будут','в','парке.'], translation:'Eles estarão no parque.', audio:'audio/67.mp3'},
    {title:'Pergunta 8', phrase:'Eu não estarei triste.', words:['Я','не','буду','грустным.'], translation:'Eu não estarei triste.', audio:'audio/68.mp3'},
    {title:'Pergunta 9', phrase:'Ela não estará em casa.', words:['Она','не','будет','дома.'], translation:'Ela não estará em casa.', audio:'audio/69.mp3'},
    {title:'Pergunta 10', phrase:'Nós não estaremos cansados.', words:['Мы','не','будем','усталыми.'], translation:'Nós não estaremos cansados.', audio:'audio/70.mp3'}
  ],

    quantidades:[
  {title:'вопрос 1', phrase:'Eu tenho duas maçãs.', words:['У','меня','два','яблока'], translation:'Eu tenho duas maçãs.', audio:'audio/quantidades1.mp3'},
  {title:'вопрос 2', phrase:'Tenho três livros.', words:['У','меня','три','книги'], translation:'Tenho três livros.', audio:'audio/quantidades2.mp3'},
  {title:'вопрос 3', phrase:'Ele comprou cinco laranjas.', words:['Он','купил','пять','апельсинов'], translation:'Ele comprou cinco laranjas.', audio:'audio/quantidades3.mp3'},
  {title:'вопрос 4', phrase:'Nós temos sete canetas.', words:['У','нас','семь','ручек'], translation:'Nós temos sete canetas.', audio:'audio/quantidades4.mp3'},
  {title:'вопрос 5', phrase:'Eles têm uma bicicleta.', words:['У','них','есть','велосипед'], translation:'Eles têm uma bicicleta.', audio:'audio/quantidades5.mp3'},
  {title:'вопрос 6', phrase:'Tenho uma caneta azul.', words:['У','меня','есть','синяя','ручка'], translation:'Tenho uma caneta azul.', audio:'audio/quantidades6.mp3'},
  {title:'вопрос 7', phrase:'Temos quatro cadeiras.', words:['У','нас','четыре','стула'], translation:'Temos quatro cadeiras.', audio:'audio/quantidades7.mp3'},
  {title:'вопрос 8', phrase:'Eles compraram dois livros.', words:['Они','купили','две','книги'], translation:'Eles compraram dois livros.', audio:'audio/quantidades8.mp3'},
  {title:'вопрос 9', phrase:'Eu preciso de três laranjas.', words:['Мне','нужно','три','апельсина'], translation:'Eu preciso de três laranjas.', audio:'audio/quantidades9.mp3'},
  {title:'вопрос 10', phrase:'Vocês têm cinco canetas?', words:['У','вас','есть','пять','ручек'], translation:'Vocês têm cinco canetas?', audio:'audio/quantidades10.mp3'}
],

    objetoDireto:[
  {title:'Pergunta 1', phrase:'Eu vejo o carro.', words:['Я','вижу','машину'], translation:'Eu vejo o carro.', audio:'audio/objetoDireto1.mp3'},
  {title:'Pergunta 2', phrase:'Ela lê o livro.', words:['Она','читает','книгу'], translation:'Ela lê o livro.', audio:'audio/objetoDireto2.mp3'},
  {title:'Pergunta 3', phrase:'Nós compramos pão.', words:['Мы','покупаем','хлеб'], translation:'Nós compramos pão.', audio:'audio/objetoDireto3.mp3'},
  {title:'Pergunta 4', phrase:'Ele chama o amigo.', words:['Он','зовёт','друга'], translation:'Ele chama o amigo.', audio:'audio/objetoDireto4.mp3'},
  {title:'Pergunta 5', phrase:'Eu escuto a música.', words:['Я','слушаю','музыку'], translation:'Eu escuto a música.', audio:'audio/objetoDireto5.mp3'},
  {title:'Pergunta 6', phrase:'Eles assistem o filme.', words:['Они','смотрят','фильм'], translation:'Eles assistem o filme.', audio:'audio/objetoDireto6.mp3'},
  {title:'Pergunta 7', phrase:'Ela entende a lição.', words:['Она','понимает','урок'], translation:'Ela entende a lição.', audio:'audio/objetoDireto7.mp3'},
  {title:'Pergunta 8', phrase:'Nós abrimos a porta.', words:['Мы','открываем','дверь'], translation:'Nós abrimos a porta.', audio:'audio/objetoDireto8.mp3'},
  {title:'Pergunta 9', phrase:'Eu escrevo uma carta.', words:['Я','пишу','письмо'], translation:'Eu escrevo uma carta.', audio:'audio/objetoDireto9.mp3'},
  {title:'Pergunta 10', phrase:'Ele cozinha a comida.', words:['Он','готовит','еду'], translation:'Ele cozinha a comida.', audio:'audio/objetoDireto10.mp3'}
],
    tempoPresente:[
  {title:'Pergunta 1', phrase:'Eu trabalho todos os dias.', words:['Я','работаю','каждый','день'], translation:'Eu trabalho todos os dias.', audio:'audio/tempoPresente1.mp3'},
  {title:'Pergunta 2', phrase:'Ela estuda na escola.', words:['Она','учится','в','школе'], translation:'Ela estuda na escola.', audio:'audio/tempoPresente2.mp3'},
  {title:'Pergunta 3', phrase:'Nós jogamos futebol.', words:['Мы','играем','в','футбол'], translation:'Nós jogamos futebol.', audio:'audio/tempoPresente3.mp3'},
  {title:'Pergunta 4', phrase:'Ele corre no parque.', words:['Он','бежит','в','парке'], translation:'Ele corre no parque.', audio:'audio/tempoPresente4.mp3'},
  {title:'Pergunta 5', phrase:'Eu falo russo.', words:['Я','говорю','по-русски'], translation:'Eu falo russo.', audio:'audio/tempoPresente5.mp3'},
  {title:'Pergunta 6', phrase:'Eles aprendem a língua.', words:['Они','учат','язык'], translation:'Eles aprendem a língua.', audio:'audio/tempoPresente6.mp3'},
  {title:'Pergunta 7', phrase:'Nós ouvimos música.', words:['Мы','слышим','музыку'], translation:'Nós ouvimos música.', audio:'audio/tempoPresente7.mp3'},
  {title:'Pergunta 8', phrase:'Ela trabalha no escritório.', words:['Она','работает','в','офисе'], translation:'Ela trabalha no escritório.', audio:'audio/tempoPresente8.mp3'},
  {title:'Pergunta 9', phrase:'Eu caminho pela cidade.', words:['Я','гуляю','по','городу'], translation:'Eu caminho pela cidade.', audio:'audio/tempoPresente9.mp3'},
  {title:'Pergunta 10', phrase:'Eles jogam xadrez.', words:['Они','играют','в','шахматы'], translation:'Eles jogam xadrez.', audio:'audio/tempoPresente10.mp3'}
],
   infinitivo:[
  {title:'Pergunta 1', phrase:'Eu quero comer.', words:['Я','хочу','есть'], translation:'Eu quero comer.', audio:'audio/infinitivo1.mp3'},
  {title:'Pergunta 2', phrase:'Ela gosta de ler.', words:['Ей','нравится','читать'], translation:'Ela gosta de ler.', audio:'audio/infinitivo2.mp3'},
  {title:'Pergunta 3', phrase:'Nós precisamos estudar.', words:['Нам','нужно','учиться'], translation:'Nós precisamos estudar.', audio:'audio/infinitivo3.mp3'},
  {title:'Pergunta 4', phrase:'Ele sabe nadar.', words:['Он','умеет','плавать'], translation:'Ele sabe nadar.', audio:'audio/infinitivo4.mp3'},
  {title:'Pergunta 5', phrase:'Eu quero viajar.', words:['Я','хочу','путешествовать'], translation:'Eu quero viajar.', audio:'audio/infinitivo5.mp3'},
  {title:'Pergunta 6', phrase:'Eles gostam de cantar.', words:['Им','нравится','петь'], translation:'Eles gostam de cantar.', audio:'audio/infinitivo6.mp3'},
  {title:'Pergunta 7', phrase:'Nós devemos estudar mais.', words:['Мы','должны','учиться','больше'], translation:'Nós devemos estudar mais.', audio:'audio/infinitivo7.mp3'},
  {title:'Pergunta 8', phrase:'Ela quer aprender russo.', words:['Она','хочет','изучать','русский'], translation:'Ela quer aprender russo.', audio:'audio/infinitivo8.mp3'},
  {title:'Pergunta 9', phrase:'Eu preciso descansar.', words:['Мне','нужно','отдыхать'], translation:'Eu preciso descansar.', audio:'audio/infinitivo9.mp3'},
  {title:'Pergunta 10', phrase:'Eles desejam jogar futebol.', words:['Они','хотят','играть','в','футбол'], translation:'Eles desejam jogar futebol.', audio:'audio/infinitivo10.mp3'}
],
    lugares:[
  {title:'Pergunta 1', phrase:'O restaurante está perto.', words:['Ресторан','рядом'], translation:'O restaurante está perto.', audio:'audio/lugares1.mp3'},
  {title:'Pergunta 2', phrase:'A escola fica longe.', words:['Школа','далеко'], translation:'A escola fica longe.', audio:'audio/lugares2.mp3'},
  {title:'Pergunta 3', phrase:'O parque é bonito.', words:['Парк','красивый'], translation:'O parque é bonito.', audio:'audio/lugares3.mp3'},
  {title:'Pergunta 4', phrase:'A biblioteca está aberta.', words:['Библиотека','открыта'], translation:'A biblioteca está aberta.', audio:'audio/lugares4.mp3'},
  {title:'Pergunta 5', phrase:'O mercado fecha às 20h.', words:['Рынок','закрывается','в','20:00'], translation:'O mercado fecha às 20h.', audio:'audio/lugares5.mp3'},
  {title:'Pergunta 6', phrase:'A igreja é antiga.', words:['Церковь','старая'], translation:'A igreja é antiga.', audio:'audio/lugares6.mp3'},
  {title:'Pergunta 7', phrase:'O hotel é moderno.', words:['Отель','современный'], translation:'O hotel é moderno.', audio:'audio/lugares7.mp3'},
  {title:'Pergunta 8', phrase:'A estação de trem é grande.', words:['Вокзал','большой'], translation:'A estação de trem é grande.', audio:'audio/lugares8.mp3'},
  {title:'Pergunta 9', phrase:'O museu é interessante.', words:['Музей','интересный'], translation:'O museu é interessante.', audio:'audio/lugares9.mp3'},
  {title:'Pergunta 10', phrase:'A praça está cheia.', words:['Площадь','полная'], translation:'A praça está cheia.', audio:'audio/lugares10.mp3'}
],
profissoes:[
  {title:'Pergunta 1', phrase:'Ele é médico.', words:['Он','врач'], translation:'Ele é médico.', audio:'audio/profissoes1.mp3'},
  {title:'Pergunta 2', phrase:'Ela é professora.', words:['Она','учительница'], translation:'Ela é professora.', audio:'audio/profissoes2.mp3'},
  {title:'Pergunta 3', phrase:'Eles são engenheiros.', words:['Они','инженеры'], translation:'Eles são engenheiros.', audio:'audio/profissoes3.mp3'},
  {title:'Pergunta 4', phrase:'Eu sou estudante.', words:['Я','студент'], translation:'Eu sou estudante.', audio:'audio/profissoes4.mp3'},
  {title:'Pergunta 5', phrase:'Nós somos músicos.', words:['Мы','музыканты'], translation:'Nós somos músicos.', audio:'audio/profissoes5.mp3'},
  {title:'Pergunta 6', phrase:'Ela é enfermeira.', words:['Она','медсестра'], translation:'Ela é enfermeira.', audio:'audio/profissoes6.mp3'},
  {title:'Pergunta 7', phrase:'Ele trabalha como advogado.', words:['Он','работает','юристом'], translation:'Ele trabalha como advogado.', audio:'audio/profissoes7.mp3'},
  {title:'Pergunta 8', phrase:'Eu sou cozinheiro.', words:['Я','повар'], translation:'Eu sou cozinheiro.', audio:'audio/profissoes8.mp3'},
  {title:'Pergunta 9', phrase:'Eles são motoristas.', words:['Они','водители'], translation:'Eles são motoristas.', audio:'audio/profissoes9.mp3'},
  {title:'Pergunta 10', phrase:'Ela trabalha como designer.', words:['Она','работает','дизайнером'], translation:'Ela trabalha como designer.', audio:'audio/profissoes10.mp3'}
],
    viagem:[
  {title:'Pergunta 1', phrase:'Eu vou para Moscou.', words:['Я','еду','в','Москву'], translation:'Eu vou para Moscou.', audio:'audio/viagem1.mp3'},
  {title:'Pergunta 2', phrase:'Ela viaja de avião.', words:['Она','путешествует','на','самолёте'], translation:'Ela viaja de avião.', audio:'audio/viagem2.mp3'},
  {title:'Pergunta 3', phrase:'Nós vamos para a praia.', words:['Мы','едем','на','пляж'], translation:'Nós vamos para a praia.', audio:'audio/viagem3.mp3'},
  {title:'Pergunta 4', phrase:'Ele reserva um hotel.', words:['Он','бронирует','отель'], translation:'Ele reserva um hotel.', audio:'audio/viagem4.mp3'},
  {title:'Pergunta 5', phrase:'Eu compro passagens.', words:['Я','покупаю','билеты'], translation:'Eu compro passagens.', audio:'audio/viagem5.mp3'},
  {title:'Pergunta 6', phrase:'Eles visitam o museu.', words:['Они','посещают','музей'], translation:'Eles visitam o museu.', audio:'audio/viagem6.mp3'},
  {title:'Pergunta 7', phrase:'Nós pegamos o trem.', words:['Мы','садимся','в','поезд'], translation:'Nós pegamos o trem.', audio:'audio/viagem7.mp3'},
  {title:'Pergunta 8', phrase:'Ela faz reservas.', words:['Она','делает','бронирование'], translation:'Ela faz reservas.', audio:'audio/viagem8.mp3'},
  {title:'Pergunta 9', phrase:'Eu faço check-in.', words:['Я','регистрируюсь'], translation:'Eu faço check-in.', audio:'audio/viagem9.mp3'},
  {title:'Pergunta 10', phrase:'Eles alugam um carro.', words:['Они','арендуют','машину'], translation:'Eles alugam um carro.', audio:'audio/viagem10.mp3'}
],
    familia:[
  {title:'Pergunta 1', phrase:'Meu pai trabalha.', words:['Мой','папа','работает'], translation:'Meu pai trabalha.', audio:'audio/familia1.mp3'},
  {title:'Pergunta 2', phrase:'Minha mãe cozinha.', words:['Моя','мама','готовит'], translation:'Minha mãe cozinha.', audio:'audio/familia2.mp3'},
  {title:'Pergunta 3', phrase:'Meu irmão estuda.', words:['Мой','брат','учится'], translation:'Meu irmão estuda.', audio:'audio/familia3.mp3'},
  {title:'Pergunta 4', phrase:'Minha irmã lê.', words:['Моя','сестра','читает'], translation:'Minha irmã lê.', audio:'audio/familia4.mp3'},
  {title:'Pergunta 5', phrase:'Nós temos um cachorro.', words:['У','нас','есть','собака'], translation:'Nós temos um cachorro.', audio:'audio/familia5.mp3'},
  {title:'Pergunta 6', phrase:'Eles têm um gato.', words:['У','них','есть','кот'], translation:'Eles têm um gato.', audio:'audio/familia6.mp3'},
  {title:'Pergunta 7', phrase:'Meu avô é velho.', words:['Мой','дедушка','старый'], translation:'Meu avô é velho.', audio:'audio/familia7.mp3'},
  {title:'Pergunta 8', phrase:'Minha avó cozinha bem.', words:['Моя','бабушка','хорошо','готовит'], translation:'Minha avó cozinha bem.', audio:'audio/familia8.mp3'},
  {title:'Pergunta 9', phrase:'Meus pais moram em São Petersburgo.', words:['Мои','родители','живут','в','Санкт-Петербурге'], translation:'Meus pais moram em São Petersburgo.', audio:'audio/familia9.mp3'},
  {title:'Pergunta 10', phrase:'Nós amamos nossa família.', words:['Мы','любим','нашу','семью'], translation:'Nós amamos nossa família.', audio:'audio/familia10.mp3'}
],
    verbosMovimento:[
  {title:'Pergunta 1', phrase:'Eu vou a pé para a escola.', words:['Я','иду','в','школу'], translation:'Eu vou a pé para a escola.', audio:'audio/verbosMovimento1.mp3'},
  {title:'Pergunta 2', phrase:'Ele vai de carro para o trabalho.', words:['Он','едет','на','работу'], translation:'Ele vai de carro para o trabalho.', audio:'audio/verbosMovimento2.mp3'},
  {title:'Pergunta 3', phrase:'Nós vamos de trem para Moscou.', words:['Мы','едем','в','Москву','на','поезде'], translation:'Nós vamos de trem para Moscou.', audio:'audio/verbosMovimento3.mp3'},
  {title:'Pergunta 4', phrase:'Ela caminha no parque.', words:['Она','гуляет','в','парке'], translation:'Ela caminha no parque.', audio:'audio/verbosMovimento4.mp3'},
  {title:'Pergunta 5', phrase:'Eles vão de avião para São Paulo.', words:['Они','летят','в','Сан-Паулу'], translation:'Eles vão de avião para São Paulo.', audio:'audio/verbosMovimento5.mp3'},
  {title:'Pergunta 6', phrase:'Eu venho para casa.', words:['Я','прихожу','домой'], translation:'Eu venho para casa.', audio:'audio/verbosMovimento6.mp3'},
  {title:'Pergunta 7', phrase:'Nós voltamos para a cidade.', words:['Мы','возвращаемся','в','город'], translation:'Nós voltamos para a cidade.', audio:'audio/verbosMovimento7.mp3'},
  {title:'Pergunta 8', phrase:'Ele sai de casa.', words:['Он','выходит','из','дома'], translation:'Ele sai de casa.', audio:'audio/verbosMovimento8.mp3'},
  {title:'Pergunta 9', phrase:'Ela entra no ônibus.', words:['Она','входит','в','автобус'], translation:'Ela entra no ônibus.', audio:'audio/verbosMovimento9.mp3'},
  {title:'Pergunta 10', phrase:'Eles chegam à estação.', words:['Они','приходят','на','вокзал'], translation:'Eles chegam à estação.', audio:'audio/verbosMovimento10.mp3'}
],
    FrasesDeConvercacao: [
  {title:'Pergunta 1', phrase:'Olá! Qual é o seu nome?', words:['Привет!','Как','тебя','зовут?'], translation:'Olá! Qual é o seu nome?', audio:'audio/01.mp3'},
  {title:'Pergunta 2', phrase:'Meu nome é Anna. E o seu?', words:['Меня','зовут','Анна.','А','тебя?'], translation:'Meu nome é Anna. E o seu?', audio:'audio/02.mp3'},
  {title:'Pergunta 3', phrase:'De onde você é?', words:['Откуда','ты?'], translation:'De onde você é?', audio:'audio/03.mp3'},
  {title:'Pergunta 4', phrase:'Obrigado pela ajuda!', words:['Спасибо','за','помощь!'], translation:'Obrigado pela ajuda!', audio:'audio/04.mp3'},
  {title:'Pergunta 5', phrase:'De nada', words:['Пожалуйста'], translation:'De nada', audio:'audio/05.mp3'},
  {title:'Pergunta 6', phrase:'Bom dia!', words:['Доброе','утро!'], translation:'Bom dia!', audio:'audio/06.mp3'},
  {title:'Pergunta 7', phrase:'Como você está?', words:['Как','дела?'], translation:'Como você está?', audio:'audio/07.mp3'},
  {title:'Pergunta 8', phrase:'Bem, obrigado!', words:['Хорошо,','спасибо!'], translation:'Bem, obrigado!', audio:'audio/08.mp3'},
  {title:'Pergunta 9', phrase:'Adeus!', words:['До','свидания!'], translation:'Adeus!', audio:'audio/09.mp3'},
  {title:'Pergunta 10', phrase:'Boa noite!', words:['Спокойной','ночи!'], translation:'Boa noite!', audio:'audio/10.mp3'},
  {title:'Pergunta 11', phrase:'Eu quero água.', words:['Я','хочу','воды.'], translation:'Eu quero água.', audio:'audio/11.mp3'},
  {title:'Pergunta 12', phrase:'Quanto custa isso?', words:['Сколько','это','стоит?'], translation:'Quanto custa isso?', audio:'audio/12.mp3'},
  {title:'Pergunta 13', phrase:'Onde é o banheiro?', words:['Где','туалет?'], translation:'Onde é o banheiro?', audio:'audio/13.mp3'},
  {title:'Pergunta 14', phrase:'Eu não entendo.', words:['Я','не','понимаю.'], translation:'Eu não entendo.', audio:'audio/14.mp3'},
  {title:'Pergunta 15', phrase:'Ajude-me, por favor!', words:['Помогите,','пожалуйста!'], translation:'Ajude-me, por favor!', audio:'audio/15.mp3'}
],

  };

  // ===== Overlay funções =====
  function closeOverlay() {
    const overlay = document.getElementById('overlayModal');
    overlay.classList.remove('show');
    setTimeout(() => { document.getElementById('overlayBody').innerHTML = ''; }, 300);
  }

  function openLessonModule(key) {
    const overlay = document.getElementById('overlayModal');
    const content = document.getElementById('overlayBody');
    if (!contentData[key]) { content.innerHTML = `<p>Módulo não encontrado.</p>`; overlay.classList.add('show'); return; }

    const exercises = contentData[key];
    let currentIndex = 0;

    function renderExercise(index) {
      const ex = exercises[index];
      if (!ex) return;

      const shuffled = [...ex.words].sort(() => Math.random() - 0.5);

      content.innerHTML = `
        <button onclick="closeOverlay()" style="position:absolute; top:10px; right:10px;">Fechar</button>
        <h2>${ex.title}</h2>
        <p><strong>Frase em português:</strong> ${ex.translation}</p>
        <audio controls src="${ex.audio}"></audio>
        <div id="wordOptions">${shuffled.map(w => `<button class="word-btn">${w}</button>`).join(' ')}</div>
        <div>
          <p>Construa a frase em russo:</p>
          <div id="userAnswer"></div>
        </div>
        <button id="checkBtn">Verificar</button>
      `;

      const userAnswer = [];
      const userAnswerDiv = document.getElementById('userAnswer');

      document.querySelectorAll('.word-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          userAnswer.push(btn.textContent);
          userAnswerDiv.textContent = userAnswer.join(' ');
        });
      });

      document.getElementById('checkBtn').addEventListener('click', () => {
        if (JSON.stringify(userAnswer) === JSON.stringify(ex.words)) {
          alert('✅ Correto!');
        } else {
          alert('❌ Errado! A frase correta é: ' + ex.words.join(' '));
        }

        currentIndex++;
        if (currentIndex < exercises.length) {
          renderExercise(currentIndex);
        } else {
          alert('🎉 Parabéns, você completou o módulo!');
          closeOverlay();
          unlockNextModule(key);
        }
      });
    }

    renderExercise(currentIndex);
    overlay.classList.add('show');
  }

  function unlockNextModule(currentKey) {
    const cards = document.querySelectorAll('.lesson-card');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].dataset.key === currentKey && i < cards.length - 1) {
        cards[i+1].classList.remove('locked');
        break;
      }
    }
  }

    // ===== Inicialização =====
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lesson-card').forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('locked')) openLessonModule(card.dataset.key);
      });
    });

    
    sendBtn.addEventListener('click', sendMessage);
    msgInput.addEventListener('keypress', e => { if(e.key==='Enter') sendMessage(); });

    // Login
    document.getElementById('loginBtn').addEventListener('click', () => { alert('Login realizado com sucesso!'); });
  });

</script>

<script src="script.js"></script>


<!-- Firebase Scripts -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>

<script>
   // Configuração do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCVt4eQOSUMhtKTUc89lAIM-AwrPakEOOI",
    authDomain: "clube-eslavo-dimitri.firebaseapp.com",
    projectId: "clube-eslavo-dimitri",
    storageBucket: "clube-eslavo-dimitri.firebasestorage.app",
    messagingSenderId: "696802076277",
    appId: "1:696802076277:web:3be4a9fb64001e25cefa3c",
    measurementId: "G-1H63WPQT0V"
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Referências aos elementos
  const loginBtn = document.getElementById('loginBtn');
  const chatBtn = document.getElementById('chatBtn');
  const chatWindow = document.getElementById('chatWindow');

  // Checa se usuário está logado ao carregar a página
  auth.onAuthStateChanged(user => {
    if (user) {
      loginBtn.textContent = `Olá, ${user.email}`;
      chatBtn.style.display = 'block';
    } else {
      loginBtn.textContent = 'Login / Cadastro';
      chatBtn.style.display = 'none';
      chatWindow.style.display = 'none';
    }
  });

  // Abrir modal de login/cadastro
  // Redirecionar para tela de login.html ao clicar
      loginBtn.addEventListener('click', () => {
      window.location.href = "login.html";
});


    if (!email || !password) return alert("Email e senha são obrigatórios.");

    // Tenta login
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("Login efetuado com sucesso!");
      })
      .catch(error => {
       if (error.code === "auth/user-not-found") {
    const confirmCreate = confirm("Usuário não encontrado. Deseja criar uma conta?");
    if (confirmCreate) {
        auth.createUserWithEmailAndPassword(email, password)
          .then(userCredential => alert("Conta criada com sucesso!"))
          .catch(err => alert("Erro ao criar conta: " + err.message));
    }
} else {
    alert("Erro no login: " + error.message);
}

            .catch(err => {
              alert("Erro ao criar conta: " + err.message);
            });
        } else {
          alert("Erro no login: " + error.message);
        }
      });
  });

  // Abrir/Fechar chat apenas se logado
  chatBtn.addEventListener('click', () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Você precisa estar logado para usar o chat.");
      return;
    }
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
  });

  // Envio de mensagens (exemplo simples)
  const sendBtn = document.getElementById('sendBtn');
  const msgInput = document.getElementById('msgInput');
  const chatMessages = document.getElementById('chatMessages');

  sendBtn.addEventListener('click', () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Você precisa estar logado para enviar mensagens.");
      return;
    }
    const msg = msgInput.value.trim();
    if (!msg) return;
    const p = document.createElement('p');
    p.textContent = `Você: ${msg}`;
    chatMessages.appendChild(p);
    msgInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Aqui você pode adicionar lógica de bot ou salvar em DB
    const botReply = document.createElement('p');
    botReply.textContent = `Dimitri: Recebi sua mensagem!`;
    chatMessages.appendChild(botReply);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
</script>

<script>
  // Botão de login redireciona para login.html
  document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "login.html";
  });



// ===== Gerenciar Login e Logout =====
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Simulação de login
loginBtn.addEventListener('click', () => {
  // Salva estado de login no localStorage
  localStorage.setItem('userLogged', 'true');
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
});

// Logout sem sair da página
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('userLogged');
  loginBtn.style.display = 'inline-block';
  logoutBtn.style.display = 'none';
  alert('Você saiu, mas permanecerá nesta página.');
});

// Verificar estado de login ao carregar a página
window.addEventListener('load', () => {
  if (localStorage.getItem('userLogged') === 'true') {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
  }
});

// BOTAO MODO

document.getElementById('modoBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

</script>
<script src="overlay.js"></script>

<footer id="siteFooter">
  © 2025 Славянский клуб — Aprenda Russo e Português com diversão!
</footer>

 
<script>
// ===== Alternar modo claro/escuro =====
const modoBtn = document.getElementById("modoBtn");
const body = document.body;

// Carregar preferência anterior (se existir)
if (localStorage.getItem("modo") === "escuro") {
  body.classList.add("dark-mode");
  modoBtn.textContent = "☀️";
}

// Evento de clique no botão
modoBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Atualiza o ícone e salva preferência
  if (body.classList.contains("dark-mode")) {
    modoBtn.textContent = "☀️";
    localStorage.setItem("modo", "escuro");
  } else {
    modoBtn.textContent = "🌙";
    localStorage.setItem("modo", "claro");
  }
});
</script>

</body>
</html>












