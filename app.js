// BOTAO MODO

document.getElementById('modoBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// BOTAO MODO

document.getElementById('modoBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
function openOverlay(wordsArray) {
  const overlay = document.getElementById('overlayModal');
  const overlayBody = document.getElementById('overlayBody');

  overlayBody.innerHTML = '';

  wordsArray.forEach(word => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.textContent = word;
    span.addEventListener('click', () => {
      span.classList.toggle('selected');
    });
    overlayBody.appendChild(span);
  });

  overlay.classList.add('show'); // <- ESSENCIAL
}
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

    

    // Login
    document.getElementById('loginBtn').addEventListener('click', () => { alert('Login realizado com sucesso!'); });
  });



/* ============================================================
   SISTEMA DE OVERLAY — ABRIR E FECHAR
============================================================ */

function openOverlay(wordsArray) {
  const overlay = document.getElementById('overlayModal');
  const overlayBody = document.getElementById('overlayBody');

  overlayBody.innerHTML = '';

  wordsArray.forEach(word => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.textContent = word;
    span.addEventListener('click', () => {
      span.classList.toggle('selected');
    });
    overlayBody.appendChild(span);
  });

  overlay.classList.add('show');
}

function closeOverlay() {
  const overlay = document.getElementById('overlayModal');
  overlay.classList.remove('show');

  setTimeout(() => {
    document.getElementById('overlayBody').innerHTML = '';
  }, 300);
}



/* ============================================================
   SISTEMA DE LIÇÕES COM PONTUAÇÃO (EXIGE 70% PARA PASSAR)
============================================================ */

function openLessonModule(key) {
  const overlay = document.getElementById('overlayModal');
  const content = document.getElementById('overlayBody');

  if (!contentData[key]) {
    content.innerHTML = `<p>Módulo não encontrado.</p>`;
    overlay.classList.add('show');
    return;
  }

  const exercises = contentData[key];
  let currentIndex = 0;

  let totalExercises = exercises.length;
  let correctAnswers = 0; // contador de acertos

  function renderExercise(index) {
    const ex = exercises[index];
    if (!ex) return;

    const shuffled = [...ex.words].sort(() => Math.random() - 0.5);

    content.innerHTML = `
      <button onclick="closeOverlay()" style="position:absolute; top:10px; right:10px;">Fechar</button>

      <h2>${ex.title}</h2>
      <p><strong>Frase em português:</strong> ${ex.translation}</p>

      <audio controls src="${ex.audio}"></audio>

      <div id="wordOptions">
        ${shuffled.map(w => `<button class="word-btn">${w}</button>`).join(' ')}
      </div>

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
      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(ex.words);

      if (isCorrect) {
        correctAnswers++;
        alert('✅ Correto!');
      } else {
        alert('❌ Errado! A frase correta é:\n' + ex.words.join(' '));
      }

      currentIndex++;

      if (currentIndex < exercises.length) {
        renderExercise(currentIndex);
      } else {
        const score = (correctAnswers / totalExercises) * 100;

        if (score >= 70) {
          alert(`🎉 Parabéns! Você concluiu o módulo com ${score.toFixed(0)}% de acertos!`);
          unlockNextModule(key);
          closeOverlay();
        } else {
          alert(`⚠ Você acertou ${score.toFixed(0)}%.  
É necessário **mínimo de 70%** para liberar o próximo módulo.`);

          closeOverlay();
        }
      }
    });
  }

  renderExercise(currentIndex);
  overlay.classList.add('show');
}



/* ============================================================
   DESBLOQUEAR PRÓXIMO MÓDULO
============================================================ */

function unlockNextModule(currentKey) {
  const cards = document.querySelectorAll('.lesson-card');

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.key === currentKey && i < cards.length - 1) {
      cards[i + 1].classList.remove('locked');
      cards[i + 1].style.filter = "none";
      cards[i + 1].style.opacity = "1";
      break;
    }
  }
}





// =============================
// SISTEMA DE BLOQUEIO DE MÓDULOS
// =============================

// lista na ordem exata mostrada no seu HTML
const moduleOrder = [
  "possessivos",
  "numerais",
  "verboSerPresente",
  "verboEstarPresente",
  "verboSerPassado",
  "verboEstarPassado",
  "verboSerFuturo",
  "verboEstarFuturo",
  "quantidades",
  "objetoDireto",
  "tempoPresente",
  "infinitivo",
  "lugares",
  "profissoes",
  "viagem",
  "familia",
  "verbosMovimento",
  "FrasesDeConvercacao"
];

// Carrega progresso salvo
let progress = JSON.parse(localStorage.getItem("progressModules")) || {};

// Se não existir progresso, bloqueia todos exceto o primeiro
if (Object.keys(progress).length === 0) {
  moduleOrder.forEach((m, i) => {
    progress[m] = (i === 0 ? "unlocked" : "locked");
  });
  localStorage.setItem("progressModules", JSON.stringify(progress));
}

// Função que atualiza visualmente quais módulos estão bloqueados
function updateModuleLocks() {
  document.querySelectorAll(".lesson-card").forEach(card => {
    let key = card.dataset.key;

    if (progress[key] === "locked") {
      card.classList.add("locked");
      card.innerHTML = "🔒 " + card.innerHTML;
      card.style.opacity = "0.4";
      card.style.pointerEvents = "none";
    } else {
      card.classList.remove("locked");
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";
    }
  });
}

updateModuleLocks();

// Evento ao clicar num módulo
document.querySelectorAll(".lesson-card").forEach(card => {
  card.addEventListener("click", () => {
    let key = card.dataset.key;

    // impede abrir se bloqueado
    if (progress[key] === "locked") {
      alert("Complete o módulo anterior para desbloquear este.");
      return;
    }

    // abre o módulo normalmente
    openModule(key);
  });
});

// Simula abertura do módulo (você já tem openOverlay, então mantemos)
function openModule(key) {
  openOverlay(contentData[key]); // usa seu overlay existente
}

// =============================
// FUNÇÃO PARA MARCAR MÓDULO COMO CONCLUÍDO
// =============================

function concluirModulo(key) {
  let index = moduleOrder.indexOf(key);

  // marca como concluído
  progress[key] = "completed";

  // desbloqueia o próximo
  if (index < moduleOrder.length - 1) {
    let next = moduleOrder[index + 1];
    progress[next] = "unlocked";
  }

  localStorage.setItem("progressModules", JSON.stringify(progress));
  updateModuleLocks();
}





// ================================
// SISTEMA DE PROGRESSO DOS MÓDULOS
// ================================

// 1. Pega todos os módulos na ordem em que aparecem
const modulos = Array.from(document.querySelectorAll(".lesson-card"));

// 2. Cria uma lista somente com as keys em ordem
const listaKeys = modulos.map(m => m.dataset.key);

// 3. Carrega progresso salvo ou cria novo
let progresso = JSON.parse(localStorage.getItem("progressoAulas")) || {
  ultimoLiberado: listaKeys[0]  // libera só o primeiro módulo no início
};

// ================================
// FUNÇÃO: Renderizar bloqueios
// ================================
function atualizarModulos() {
  modulos.forEach((mod, index) => {
    const key = mod.dataset.key;
    const ultimoIndex = listaKeys.indexOf(progresso.ultimoLiberado);

    if (index > ultimoIndex) {
      // BLOQUEADO
      mod.classList.add("bloqueado");
      mod.style.opacity = "0.4";
      mod.style.pointerEvents = "none";
    } else {
      // LIBERADO
      mod.classList.remove("bloqueado");
      mod.style.opacity = "1";
      mod.style.pointerEvents = "auto";
    }
  });
}

// ================================
// ABRIR UM MÓDULO
// ================================
modulos.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.key;

    // Abre um conteúdo simples só pra simular
    abrirOverlay(`
      <h2>Módulo: ${key}</h2>
      <p>Conteúdo do módulo aqui...</p>
      <button onclick="concluirModulo('${key}')" class="btnFinalizar">
        ✔ Concluir Módulo
      </button>
    `);
  });
});

// ================================
// FUNÇÃO: Concluir módulo
// ================================
function concluirModulo(key) {
  const atualIndex = listaKeys.indexOf(key);
  const proximoIndex = atualIndex + 1;

  // Se houver próximo módulo, libera
  if (proximoIndex < listaKeys.length) {
    progresso.ultimoLiberado = listaKeys[proximoIndex];
    localStorage.setItem("progressoAulas", JSON.stringify(progresso));
  }

  closeOverlay();
  atualizarModulos();
  alert("Módulo concluído! Próximo liberado.");
}

// ================================
// SISTEMA DO OVERLAY
// ================================
function abrirOverlay(html) {
  document.getElementById("overlayBody").innerHTML = html;
  document.getElementById("overlayModal").style.display = "block";
}

function closeOverlay() {
  document.getElementById("overlayModal").style.display = "none";
}

// ================================
// INICIALIZAÇÃO
// ================================
atualizarModulos();












