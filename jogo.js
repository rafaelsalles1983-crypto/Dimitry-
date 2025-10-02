// --- Dados ---
const colors=["red","blue","green","yellow"];
const translations = {
  ru: { title:"Игра Цвета", colors:{ red:"Красный", blue:"Синий", green:"Зелёный", yellow:"Жёлтый" }, gameOver:"Конец игры!", correct:"Правильно!", wrong:"Неправильно!" },
  pt: { title:"Jogo das Cores", colors:{ red:"Vermelho", blue:"Azul", green:"Verde", yellow:"Amarelo" }, gameOver:"Fim de jogo!", correct:"Correto!", wrong:"Errado!" }
};
const objects=["bola","carro","casa","aviao"];
const translationsObjects={ ru:{ bola:"Мяч", carro:"Машина", casa:"Дом", aviao:"Самолет" }, pt:{ bola:"Bola", carro:"Carro", casa:"Casa", aviao:"Avião" } };
const objectImages={ bola:"imagens/bola.png", carro:"imagens/carro.png", casa:"imagens/casa.png", aviao:"imagens/aviao.png" };
const animals=["cachorro","gato","passaro","peixe"];
const translationsAnimals={ pt:{ cachorro:"Cachorro", gato:"Gato", passaro:"Pássaro", peixe:"Peixe" }, ru:{ cachorro:"Собака", gato:"Кошка", passaro:"Птица", peixe:"Рыба" } };
const animalImages={ cachorro:"imagens/cachorro.png", gato:"imagens/gato.png", passaro:"imagens/passaro.png", peixe:"imagens/peixe.png" };
const fruits=["maca","banana","laranja","uva"];
const translationsFruits={ pt:{ maca:"Maçã", banana:"Banana", laranja:"Laranja", uva:"Uva" }, ru:{ maca:"Яблоко", banana:"Банан", laranja:"Апельсин", uva:"Виноград" } };
const fruitImages={ maca:"imagens/maca.png", banana:"imagens/banana.png", laranja:"imagens/laranja.png", uva:"imagens/uva.png" };
const shapes=["quadrado","circulo","triangulo","estrela"];
const translationsShapes={ pt:{ quadrado:"Quadrado", circulo:"Círculo", triangulo:"Triângulo", estrela:"Estrela" }, ru:{ quadrado:"Квадрат", circulo:"Круг", triangulo:"Треугольник", estrela:"Звезда" } };
const shapeImages={ quadrado:"imagens/quadrado.png", circulo:"imagens/circulo.png", triangulo:"imagens/triangulo.png", estrela:"imagens/estrela.png" };

// Interface
const uiTexts = {
  ru: {
    siteTitle:"Славянский клуб",
    gameTitleColors:"Игра Цвета",
    gameTitleObjects:"Игра Объектов",
    gameTitleAnimals:"Игра Животных",
    gameTitleFruits:"Игра Фруктов",
    gameTitleShapes:"Игра Фигур",
    gameTitleAnimalsColors:"Игра Животных + Цвета",
    gameTitleObjectsTranslate:"Игра Объектов + Перевод",
    gameTitleAudioTranslate:"Аудио + Перевод",
    controls:{ play:"▶ Играть", restart:"Перезапустить", stop:"Стоп" },
    preview:"🔎 Наблюдаем за предметами...",
    paused:"⏸ Игра на паузе",
    endColors:"✅ Конец игры с цветами!",
    levelComplete: level=>`✅ Уровень ${level-1} пройден!`
  },
  pt: {
    siteTitle:"Clube Eslavo",
    gameTitleColors:"Jogo das Cores",
    gameTitleObjects:"Jogo de Objetos",
    gameTitleAnimals:"Jogo dos Animais",
    gameTitleFruits:"Jogo das Frutas",
    gameTitleShapes:"Jogo das Formas",
    gameTitleAnimalsColors:"Jogo Animais + Cores",
    gameTitleObjectsTranslate:"Jogo Objetos + Tradução",
    gameTitleAudioTranslate:"Áudio + Tradução",
    controls:{ play:"▶ Play", restart:"Recomeçar", stop:"Parar" },
    preview:"🔎 Observando os itens...",
    paused:"⏸ Jogo pausado",
    endColors:"✅ Fim do jogo de cores!",
    levelComplete: level=>`✅ Nível ${level-1} concluído!`
  }
};

let currentLang="pt", currentMode="colors", correctItem="", targetCount=0, selectedCorrect=0;
let score={correct:0,wrong:0}, level=1, round=1, maxRounds=10, maxLevel=3;
let gameActive=false, waitingNextLevel=false, timerInterval;
let lives = 5, streak = 0; // Vidas e acertos consecutivos

const gameArea=document.getElementById("gameArea");
const gameInfo=document.getElementById("gameInfo");
const scoreDiv=document.getElementById("score");
const timerBar=document.getElementById("timerBar");

// --- Botões ---
document.getElementById("languageToggle").addEventListener("click", ()=>{ 
  currentLang=currentLang==="ru"?"pt":"ru"; 
  updateLang(); 
});
document.getElementById("restartBtn").addEventListener("click", restartGame);
document.getElementById("stopBtn").addEventListener("click", stopGame);
document.getElementById("playBtn").addEventListener("click", ()=> { 
  if(waitingNextLevel){ waitingNextLevel=false; showPreview(); } 
  else { gameActive=true; showPreview(); } 
});

// --- Atualiza idioma ---
function updateLang(){
  const texts = uiTexts[currentLang];
  document.getElementById("siteTitle").textContent = texts.siteTitle;
  document.getElementById("gameTitle").textContent =
    currentMode==="colors"? texts.gameTitleColors :
    currentMode==="objects"? texts.gameTitleObjects :
    currentMode==="animals"? texts.gameTitleAnimals :
    currentMode==="fruits"? texts.gameTitleFruits :
    currentMode==="animalsColors"? texts.gameTitleAnimalsColors :
    currentMode==="objectsTranslate"? texts.gameTitleObjectsTranslate :
    currentMode==="audioTranslate"? texts.gameTitleAudioTranslate :
    texts.gameTitleShapes;
  document.getElementById("languageToggle").textContent=currentLang==="ru"?"PT":"RU";
  document.getElementById("playBtn").textContent = texts.controls.play;
  document.getElementById("restartBtn").textContent = texts.controls.restart;
  document.getElementById("stopBtn").textContent = texts.controls.stop;
}

// --- Shuffle ---
function shuffleArray(array){ for(let i=array.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [array[i],array[j]]=[array[j],array[i]]; } }

// --- Fala ---
function speak(text){ 
  if('speechSynthesis' in window){ 
    window.speechSynthesis.cancel(); 
    const utter=new SpeechSynthesisUtterance(text);
    utter.lang=currentLang==='ru'?'ru-RU':'pt-BR'; 
    utter.rate=1; utter.pitch=1; utter.volume=1;
    speechSynthesis.speak(utter); 
  }
}

// --- Pré-visualização ---
function showPreview(){
  if(!gameActive) return;
  gameInfo.textContent = uiTexts[currentLang].preview;
  gameArea.innerHTML = "";
  gameArea.classList.add("preview");
  let items, images, labels;
  if(currentMode==="colors"){ items=colors; labels=translations[currentLang].colors; }
  else if(currentMode==="objects"){ items=objects; images=objectImages; labels=translationsObjects[currentLang]; }
  else if(currentMode==="animals"){ items=animals; images=animalImages; labels=translationsAnimals[currentLang]; }
  else if(currentMode==="fruits"){ items=fruits; images=fruitImages; labels=translationsFruits[currentLang]; }
  else if(currentMode==="shapes"){ items=shapes; images=shapeImages; labels=translationsShapes[currentLang]; }
  else if(currentMode==="animalsColors"){ items=colors; labels=translations[currentLang].colors; }
  else if(currentMode==="objectsTranslate"){ items=objects; labels=translationsObjects[currentLang]; images=objectImages; }
  else if(currentMode==="audioTranslate"){ items=objects; labels=translationsObjects[currentLang]; images=objectImages; }

  items.forEach(item=>{
    const sq=document.createElement("div"); sq.classList.add("square");
    if(currentMode==="colors" || currentMode==="animalsColors"){ sq.style.background=item; }
    else { const img=document.createElement("img"); img.src=images[item]; sq.appendChild(img); }
    const label=document.createElement("span"); label.textContent=labels[item];
    sq.appendChild(label); gameArea.appendChild(sq);
  });
  setTimeout(()=>{ gameArea.classList.remove("preview"); startRound(); },2000);
}

// --- Criar quadrados ---
function createSquares(){
  gameArea.innerHTML=""; 
  const totalSquares=16;
  const positions=Array.from({length:totalSquares},(_,i)=>i); 
  shuffleArray(positions);
  const targetPositions=positions.slice(0,targetCount);
  for(let i=0;i<totalSquares;i++){
    const sq=document.createElement("div"); sq.classList.add("square");
    let pool, images;
    if(currentMode==="colors" || currentMode==="animalsColors"){ pool=colors; }
    else if(currentMode==="objects"){ pool=objects; images=objectImages; }
    else if(currentMode==="animals"){ pool=animals; images=animalImages; }
    else if(currentMode==="fruits"){ pool=fruits; images=fruitImages; }
    else if(currentMode==="shapes"){ pool=shapes; images=shapeImages; }
    else if(currentMode==="objectsTranslate" || currentMode==="audioTranslate"){ pool=objects; images=objectImages; }

    let item=targetPositions.includes(i)? correctItem : pool[Math.floor(Math.random()*pool.length)];
    while(item===correctItem && !targetPositions.includes(i)) item=pool[Math.floor(Math.random()*pool.length)];
    sq.dataset.item=item;
    if(currentMode==="colors" || currentMode==="animalsColors"){ sq.style.background=item; }
    else { const img=document.createElement("img"); img.src=images[item]; sq.appendChild(img); }
    sq.addEventListener("click", checkSquare); 
    gameArea.appendChild(sq);
  }
}

// --- Round ---
function startRound(){
  if(!gameActive || waitingNextLevel) return; 
  clearInterval(timerInterval);
  if(lives<=0){ gameOver(); return; }
  if(round>maxRounds){ 
    if(currentMode==="colors") currentMode="objects";
    else if(currentMode==="objects") currentMode="animals";
    else if(currentMode==="animals") currentMode="fruits";
    else if(currentMode==="fruits") currentMode="shapes";
    else if(currentMode==="shapes") currentMode="animalsColors";
    else if(currentMode==="animalsColors") currentMode="objectsTranslate";
    else if(currentMode==="objectsTranslate") currentMode="audioTranslate";
    else { level++; currentMode="colors"; }
    round=1; score.correct=0; score.wrong=0; updateScore(); waitingNextLevel=true;
    gameInfo.textContent=uiTexts[currentLang].levelComplete(level); 
    return;
  }

  let pool, labels;
  if(currentMode==="colors"){ pool=colors; labels=translations[currentLang].colors; }
  else if(currentMode==="objects"){ pool=objects; labels=translationsObjects[currentLang]; }
  else if(currentMode==="animals"){ pool=animals; labels=translationsAnimals[currentLang]; }
  else if(currentMode==="fruits"){ pool=fruits; labels=translationsFruits[currentLang]; }
  else if(currentMode==="shapes"){ pool=shapes; labels=translationsShapes[currentLang]; }
  else if(currentMode==="animalsColors"){ pool=colors; labels=translations[currentLang].colors; }
  else if(currentMode==="objectsTranslate" || currentMode==="audioTranslate"){ pool=objects; labels=translationsObjects[currentLang]; }

  correctItem=pool[Math.floor(Math.random()*pool.length)];
  targetCount = Math.floor(Math.random()*3) + 1;
  selectedCorrect=0; 
  createSquares();

  // Frase especial para modos extras
  if(currentMode==="animalsColors"){
    const animal=animals[Math.floor(Math.random()*animals.length)];
    const animalEmoji = animal==="cachorro"?"🐶":animal==="gato"?"🐱":animal==="passaro"?"🐦":"🐟";
    gameInfo.textContent = targetCount>1 ? `👉 O ${animalEmoji} é ${targetCount} cores` : `👉 O ${animalEmoji} é ___`;
    speak(labels[correctItem]);
  } else if(currentMode==="objectsTranslate" || currentMode==="audioTranslate"){
    gameInfo.textContent = targetCount>1 ? `👉 Clique em ${targetCount} "${labels[correctItem]}"` : `👉 Clique em "${labels[correctItem]}"`;
    if(currentMode==="audioTranslate") speak(labels[correctItem]);
  } else {
    const label=labels[correctItem];
    gameInfo.textContent = targetCount>1 ? `👉 Clique em ${targetCount} "${label}"` : `👉 Clique em "${label}"`;
    speak(label);
  }
  startTimer();
}

// --- Timer ---
function startTimer(){
  let maxTime=Math.max(7000-(level-1)*500,2000); 
  const interval=50; 
  timerBar.style.width='100%';
  timerInterval=setInterval(()=>{
    maxTime-=interval; 
    timerBar.style.width=(maxTime/7000*100)+'%';
    if(maxTime<=0){ 
      clearInterval(timerInterval); 
      lives--; streak=0;
      updateScore(); 
      speak(uiTexts[currentLang].wrong); 
      round++; 
      setTimeout(startRound,500); 
    }
  },interval);
}

// --- Click ---
function checkSquare(e){
  if(!gameActive || waitingNextLevel) return;
  const item=e.currentTarget.dataset.item;
  if(item===correctItem){ 
    e.currentTarget.classList.add("neon"); 
    selectedCorrect++; 
    if(selectedCorrect===targetCount){ 
      score.correct++; 
      streak++;
      if(streak>=5 && lives<5){ lives++; streak=0; gameInfo.textContent += " 💖 Vida recuperada!"; speak("Você recuperou uma vida!"); }
      updateScore(); 
      clearInterval(timerInterval); 
      speak(uiTexts[currentLang].correct); 
      round++; 
      startRound(); 
    }
  } else { 
    score.wrong++; 
    lives--; streak=0;
    updateScore(); 
    speak(uiTexts[currentLang].wrong); 
    if(lives<=0) gameOver(); 
  }
}

// --- Pontuação ---
function updateScore(){ 
  const total=score.correct+score.wrong; 
  const percent=total?Math.round((score.correct/total)*100):0; 
  scoreDiv.textContent=`❤️ ${lives} | ✅ ${score.correct} | ❌ ${score.wrong} | Nível ${level} | Rodada ${round}/${maxRounds} | Acertos: ${percent}%`; 
}

function gameOver(){ 
  gameActive=false; 
  clearInterval(timerInterval); 
  gameInfo.textContent=uiTexts[currentLang].gameOver; 
  speak(gameInfo.textContent); 
  timerBar.style.width='0%'; 
}

function restartGame(){ 
  score={correct:0,wrong:0}; 
  lives=5; streak=0;
  level=1; round=1; 
  gameActive=false; waitingNextLevel=false; 
  currentMode="colors"; 
  updateScore(); 
  updateLang();
}

function stopGame(){ 
  gameActive=false; 
  clearInterval(timerInterval); 
  gameInfo.textContent=uiTexts[currentLang].paused; 
  timerBar.style.width='0%'; 
}

// Inicializa
updateLang();
