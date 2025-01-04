
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const colTotal = 17; // Número de colunas no mapa
const linTotal = 9; // Número de linhas no mapa
var cursor = { x: 10, y: 5, c: 0, l: 0 };
var listImgs = {};

var moveTropasShow = { c: 0, l: 0, x: 0, y: 0, Ativo: false };

var mundo = 0;
var turnoatual = 0;
var turnoJogadas = 3;

//--Carregar imagens----------------------------------
function instanciaImg(tempImg) {
  let newImage = new Image();
  newImage.src = 'img/'+tempImg;
  return newImage
}


function carregarImagens() {
  console.log("Carregando imagens");
    // Carregar imagens
    listImgs.cursorImage = instanciaImg('cursor2.png');
    listImgs.cursorImageDestino = instanciaImg('cursor3.png');
    listImgs.terrenoImg = instanciaImg('hexagon.png');
    listImgs.terreno01 = instanciaImg('terreno01.png');
    listImgs.terreno02 = instanciaImg('terreno02.png');
    listImgs.terreno03 = instanciaImg('terreno03.png');
    listImgs.terreno04 = instanciaImg('terreno04.png');
    listImgs.terreno05 = instanciaImg('terreno05.png');
    listImgs.terreno06 = instanciaImg('terreno06.png'); // Agua.
    listImgs.terreno06b = instanciaImg('terreno06b.png'); // Agua animacao.
  

    listImgs.cenario001 = instanciaImg('cenario001.png'); // Mato
    listImgs.cenario002 = instanciaImg('cenario002.png'); // arvore
    listImgs.cenario003 = instanciaImg('cenario003.png'); // arvore
    listImgs.cenario004 = instanciaImg('cenario004.png');
    listImgs.cenario005 = instanciaImg('cenario005.png');
    listImgs.cenario006 = instanciaImg('cenario006.png'); // Barco

    listImgs.dominioA = instanciaImg('terreno_time_a.png');
    listImgs.dominioB = instanciaImg('terreno_time_b.png');
    listImgs.dominioC = instanciaImg('terreno_time_c.png');
    listImgs.dominioD = instanciaImg('terreno_time_d.png');
    listImgs.dominioE = instanciaImg('terreno_time_e.png');
    listImgs.dominioF = instanciaImg('terreno_time_f.png');
  
    listImgs.bandeiraSombra = instanciaImg('bandeira.png');
    listImgs.bandeiraA = instanciaImg('bandeira_a.png');
    listImgs.bandeiraB = instanciaImg('bandeira_b.png');
    listImgs.bandeiraC = instanciaImg('bandeira_c.png');
    listImgs.bandeiraD = instanciaImg('bandeira_d.png');
    listImgs.bandeiraE = instanciaImg('bandeira_e.png');
    listImgs.bandeiraF = instanciaImg('bandeira_f.png');
  
    listImgs.casebre = instanciaImg('casebre.png');
    listImgs.estabulo = instanciaImg('estabulo.png');
    listImgs.torre = instanciaImg('torre.png');
    listImgs.castelo = instanciaImg('castelinho.png');
       
    listImgs.campones = instanciaImg('campones.png');
    listImgs.espadachin = instanciaImg('espadachin.png');
    listImgs.cavaleiro = instanciaImg('cavaleiro.png');

    listImgs.mascara = instanciaImg('mascara.png');
  }


// _______________________________________________________________
function updateGame() {
  //console.log("updateGame() pause="+pause+" timeGame="+timeGame);
  if(timeGame<0){
    timeGame=100;
  }else{
    timeGame--
  }
  

  for (let col = 0; col < colTotal; col++) {
    for (let lin = 0; lin < linTotal; lin++) {
      const isCursor = cursor.x === col && cursor.y === lin;
      mundoAtual[lin][col].terreno.draw();
      mundoAtual[lin][col].dominio.draw();
      mundoAtual[lin][col].cenografia.draw();
    }
  }

  ctx.drawImage(listImgs.mascara, 0, 0, 800, 590);

  if(moveTropasShow.Ativo){
    // Desenhar possibilidades de movimentacao da tropa.
    drawShowMove(moveTropasShow.l,  moveTropasShow.c);
  }

  for (let col = 0; col < colTotal; col++) {
    for (let lin = 0; lin < linTotal; lin++) {
      //const x = col * 46;
      //let y = 10 + lin * hexagonosTamanho;

      if (cursor.x === col && cursor.y === lin) {
      // Desenhar cursor
        mundoAtual[lin][col].cursor.draw();
      }
      mundoAtual[lin][col].construcao.draw();
      mundoAtual[lin][col].tropas.draw();
      if (mundoAtual[lin][col].tropas.num !== 0) {
        mundoAtual[lin][col].dominio.drawBandeira();
      } 
    }
  }

  if (observeIniciarTurno){
    iniciarTurno();
  }

  drawTurno();

  if(obserPlaytBot){
    obserPlaytBot=false;
    playBot();
  }

  if(pause==false){
    //console.log("Play");
    setTimeout(() => updateGame(), 500)
  }

}
// _______________________________________________________________


function criarCastelo() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].cenografia.num=0;
    mundoAtual[cursor.y][cursor.x].construcao.criarCastelo();
    subtraiJogada();
  } else {
    console.log("ERRO : Construção fora do dominio.");
  }
}


function criarUnidde() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].tropas.criarUnidde();
    interface(mundoAtual[cursor.y][cursor.x].construcao.num, mundoAtual[cursor.y][cursor.x].tropas.num, mundoAtual[cursor.y][cursor.x].dominio.num, moveTropasShow.Ativo);
    subtraiJogada();
  } else {
    console.log("ERRO : Criando tropas no dominio errado.");
  }
}


function aumentarTropa() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].tropas.aumentarTropa();
    subtraiJogada();
  } else {
    console.log("ERRO : Aumentando tropas no dominio errado.");
  }
}

var limiteTentBot = 10;

function iniciarTurno() {

  observeIniciarTurno = false;
  turnoJogadas=3;
  
   
  let Repete = true;
  while(Repete)
  {
    turnoatual++;
    console.log("**turnoatual** -->"+turnoatual);
    if (turnoatual > 6) {
      Repete=false;
      turnoatual=1;
    }else if (equipes[turnoatual].ativo) {
      Repete=false;
    }
  }

  console.log("Proximo turno "+turnoatual+". jogadas:"+turnoJogadas)
  
  if (turnoatual !== 1) {
    // Proximo a jogar é o Bot.
    limiteTentBot=10;
    obserPlaytBot=true; //playBot();
  }
}

var observeIniciarTurno = false;
var obserPlaytBot = false;

function subtraiJogada() {
  turnoJogadas--;
  console.log("| Subtraindo jogada:"+turnoJogadas)
  
  if (turnoJogadas < 1) {
    console.log("| Iniciar outro turno:"+turnoJogadas)
    turnoJogadas = 3;
    observeIniciarTurno = true; // iniciarTurno();
  }else if (turnoatual !== 1) {
    console.log("| Bot jogando ["+turnoJogadas+"]");
    // Bot jogando.
    obserPlaytBot=true; //playBot();
  }
}



function drawTurno() {
  var tempTurno
  if (turnoatual == 1) {
    tempTurno = listImgs.bandeiraA;
  } else if (turnoatual == 2) {
    tempTurno = listImgs.bandeiraB;
  } else if (turnoatual == 3) {
    tempTurno = listImgs.bandeiraC;
  } else if (turnoatual == 4) {
    tempTurno = listImgs.bandeiraD;
  } else if (turnoatual == 5) {
    tempTurno = listImgs.bandeiraE;
  } else if (turnoatual == 6) {
    tempTurno = listImgs.bandeiraF;
  }
  ctx.drawImage(listImgs.bandeiraSombra, 20, 5, 15, 30);
  ctx.drawImage(listImgs.bandeiraSombra, 35, 5, 15, 30);
  if (turnoJogadas > 0) { ctx.drawImage(tempTurno, 5, 5, 15, 30) };
  if (turnoJogadas > 1) { ctx.drawImage(tempTurno, 20, 5, 15, 30) };
  if (turnoJogadas > 2) { ctx.drawImage(tempTurno, 35, 5, 15, 30) };
  document.getElementById('spanTurno').textContent = "Jogador "+equipes[turnoatual].nomecor + ". Jogadas:" + turnoJogadas + ".";

  const imgFotoRei = document.getElementById('imgFotoRei');
  const spanFotoRei = document.getElementById('spanFotoRei');
  const spanResume = document.getElementById('spanResume');
  imgFotoRei.style.borderColor = equipes[turnoatual].cor;
  imgFotoRei.src = equipes[turnoatual].imgrei;
  spanFotoRei.textContent = "Jogador " + turnoatual;
  spanResume.textContent = "Territorios:" + equipes[turnoatual].totaldominios
}


function initFaze(indexMundo) {
  
  initRandomNumber(); // Sorteio aleatorio real.

  turnoatual = 0;
  iniciarTurno(); // observeIniciarTurno = true;

  // Zerar posição do cursor
  cursor.x = 10 // Linha  
  cursor.y = 5; // Coluna

  timeGame = 500 // tempo do jogo
  //funSound(1);
  
  mundoAtual = initMundoAtual(indexMundo); // Iniciar mundo atual.
  
  //winClose('menu')
  pause = false; // Sair da pausa.
 
  updateGame(); // Rodar o jogo.
}



// Move o cursor no mapa
function destinoCursor(newX, newY) {
  if (newX >= 0 && newX < colTotal && newY >= 0 && newY < linTotal) {
    mundoAtual[cursor.y][cursor.x].dominio.draw(); // Limpa possicao atual do cursor.
    cursor.x = newX;
    cursor.y = newY;
    mundoAtual[cursor.y][cursor.x].cursor.draw(); // marca nova posicao do cursor.

    /*
    const spanCursor = document.getElementById('spanCursor');
    spanCursor.textContent = "[x:" + cursor.x + ",y:" + cursor.y + "]";
    var info = "["
    info = info + " terreno:" + mundoAtual[cursor.y][cursor.x].terreno.num;  
    info = info + " dominio:" + mundoAtual[cursor.y][cursor.x].dominio.num;
    info = info + " construcoes:" + mundoAtual[cursor.y][cursor.x].construcao.num;
    info = info + " tropas:" + mundoAtual[cursor.y][cursor.x].construcao.num;
    atualizarInfo(info);
    */

    interface(mundoAtual[newY][newX].construcao.num, mundoAtual[newY][newX].tropas.num, mundoAtual[newY][newX].dominio.num, moveTropasShow.Ativo);
  } else {
    console.log("LIMITE DE MAPA!");
  }
}


function drawShowMove(tempCursorL,tempCursorC) {

  const hexagonosTamanho = 60;
  const terrenoWidth = 60;
  
  // var moveTropasShow = {c:0,l:0,Ativo:false};
  if (moveTropasShow.Ativo) {

    //Esquerda cima
    let tempC = tempCursorC - 46;  //(col-1) * 46;
    let tempL = tempCursorL - hexagonosTamanho / 2; //(lin-1) * hexagonosTamanho + 10 + hexagonosTamanho/2;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Cima
    tempC = tempCursorC; //(col) * 46
    tempL = tempCursorL - hexagonosTamanho; //(lin-1) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Direita cima
    tempC = tempCursorC + 46 //(col+1) * 46
    tempL = tempCursorL - hexagonosTamanho / 2; //(lin-1) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    //Esquera baixo
    tempC = tempCursorC - 46//(col-1) * 46
    tempL = tempCursorL + hexagonosTamanho / 2//(lin) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Baixo
    tempC = tempCursorC;
    tempL = tempCursorL + hexagonosTamanho;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Direita baixo
    tempC = tempCursorC + 46;
    tempL = tempCursorL + hexagonosTamanho / 2;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

  }
}


function aguarda(){
  console.log('...');
	//setTimeout(() => {
	//	console.log('...')
	//}, 4000)
}


// Move o cursor no mapa
function moveCursor(dx, dy) {
  const newX = cursor.x + dx;
  const newY = cursor.y + dy;
  destinoCursor(newX, newY)
}

function preparaMoverAtacar() {
  if(mundoAtual[cursor.y][cursor.x].dominio.num == turnoatual){
    // Territorio de origem das tropas
    moveTropasShow.x = cursor.x; 
    moveTropasShow.y = cursor.y;
    moveTropasShow.c = mundoAtual[cursor.y][cursor.x].cursor.x;
    moveTropasShow.l = mundoAtual[cursor.y][cursor.x].cursor.y;
    moveTropasShow.Ativo = true; 
    // Desenhar possibilidades de movimentacao da tropa.
    drawShowMove(mundoAtual[cursor.y][cursor.x].cursor.y, mundoAtual[cursor.y][cursor.x].cursor.x);
    destinoCursor(cursor.x, cursor.y) 
  }else{
    console.log("ERRO do bot: Tropas("+cursor.y+","+cursor.x+") nao sao do jogador("+turnoatual+")");
  }

}




function moverTropas() {
  // Clicou em um terreno.

  if (moveTropasShow.Ativo) {
    moveTropasShow.Ativo = false;
    
    let perdeu = mundoAtual[cursor.y][cursor.x].dominio.num;
    let ganhou = mundoAtual[moveTropasShow.y][moveTropasShow.x].dominio.num
    let nextAction = mundoAtual[cursor.y][cursor.x].moverparaterritorio(turnoatual, mundoAtual[moveTropasShow.y][moveTropasShow.x].tropas.num);
    console.log("- [ "+nextAction+" ] -")

    if(nextAction==="Mover"){
      mundoAtual[moveTropasShow.y][moveTropasShow.x].tropas.num = 0; // Limpar posicao anterior.
      interface(mundoAtual[cursor.y][cursor.x].construcao.num, mundoAtual[cursor.y][cursor.x].tropas.num, mundoAtual[cursor.y][cursor.x].dominio.num, moveTropasShow.Ativo);
      subtraiJogada();

    }else if(nextAction==="Tomar terreno"){
      equipeTrocaDominio(perdeu, ganhou, cursor.y, cursor.x);
      mundoAtual[moveTropasShow.y][moveTropasShow.x].tropas.num = 0; // Limpar posicao anterior.
      interface(mundoAtual[cursor.y][cursor.x].construcao.num, mundoAtual[cursor.y][cursor.x].tropas.num, mundoAtual[cursor.y][cursor.x].dominio.num, moveTropasShow.Ativo);
      subtraiJogada();

    }else if (turnoatual!==1){
      console.log("Chamar bot novamente.")
      obserPlaytBot=true; //playBot();
    }
    
  }

}

// Controle do teclado
document.addEventListener('keydown', (event) => {
  console.log("=========>"+event.key);
  if (turnoatual == 1) {
    if (event.key == 'ArlinLeft' || event.key == 'a' || event.key == 'A') {
      moveCursor(-1, 0) ; // Para esquerda/baixo
    } else if (event.key == 'ArlinRight' || event.key == 'd' || event.key == 'D') {
      moveCursor(1, 0); // Para direita/baixo
    } else if (event.key == 'ArlinUp' || event.key == 'w' || event.key == 'W') {
      moveCursor(0, -1); // Para cima
    } else if (event.key == 'ArlinDown' || event.key == 's' || event.key == 'S') {
      moveCursor(0, 1); // Para baixo
    } else if (event.key == 'p' || event.key == 'P') {
      ActionPause();
    }
  }
});

//var mouseCordenadas = {l:0,c:0,x:0,y:0, clicou:false}

canvas.addEventListener('click', function (event) {
  if (turnoatual == 1) {
    // Obtém as coordenadas do mouse em relação ao canvas
    const rect = canvas.getBoundingClientRect(); // Retângulo do canvas na tela
    const tempX = event.clientX - rect.left; // Coordenada X relativa ao canvas
    const tempY = event.clientY - rect.top; // Coordenada Y relativa ao canvas

    //mouseCordenadas.clicou=true;
    //mouseCordenadas.c=x;
    //mouseCordenadas.l=y;

    const col = parseInt(tempX / 46);
    let desloca = 0
    if (col % 2 === 0) desloca = -1;
    const lin = parseInt(tempY / 60) + desloca;

    destinoCursor(col, lin);
    moverTropas();

    spanCoordenadas.textContent = `X:${tempX},Y:${tempY}|${col},${lin}`;
  }
});




function initGame(temMap){
  carregarImagens();
   // Inicializa o jogo quando as imagens forem carregadas
  Promise.all([
    new Promise((resolve) => (listImgs.cursorImage.onload = resolve)),
    new Promise((resolve) => (listImgs.cursorImageDestino.onload = resolve)),
    new Promise((resolve) => (listImgs.terrenoImg.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno01.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno02.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno03.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno04.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno05.onload = resolve)),
    new Promise((resolve) => (listImgs.terreno06.onload = resolve)),

    new Promise((resolve) => (listImgs.dominioA.onload = resolve)),
    new Promise((resolve) => (listImgs.dominioB.onload = resolve)),
    new Promise((resolve) => (listImgs.dominioC.onload = resolve)),
    new Promise((resolve) => (listImgs.dominioD.onload = resolve)),
    new Promise((resolve) => (listImgs.dominioE.onload = resolve)),
    new Promise((resolve) => (listImgs.dominioF.onload = resolve)),

    new Promise((resolve) => (listImgs.bandeiraA.onload = resolve)),
    new Promise((resolve) => (listImgs.bandeiraB.onload = resolve)),
    new Promise((resolve) => (listImgs.bandeiraC.onload = resolve)),
    new Promise((resolve) => (listImgs.bandeiraD.onload = resolve)),
    new Promise((resolve) => (listImgs.bandeiraE.onload = resolve)),
    new Promise((resolve) => (listImgs.bandeiraF.onload = resolve)),

    new Promise((resolve) => (listImgs.castelo.onload = resolve)),
    new Promise((resolve) => (listImgs.estabulo.onload = resolve)),
    new Promise((resolve) => (listImgs.torre.onload = resolve)),
    new Promise((resolve) => (listImgs.espadachin.onload = resolve)),
  ]).then(() => {   
    document.getElementById('divWinMapas').style.visibility = 'hidden'; // winOpen("");
    initFaze(temMap);
  });
}

 