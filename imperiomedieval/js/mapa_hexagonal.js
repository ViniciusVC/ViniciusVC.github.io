const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const hexRadius = 30; // Raio dos hexágonos
const hexagonosTamanho = 60; // Raio dos hexágonos
//const hexWidth = Math.sqrt(3) * hexRadius; // Largura do hexágono
//const hexHeight = 2 * hexRadius; // Altura do hexágono
const terrenoWidth = hexagonosTamanho; // Largura do hexágono
const terrenoHeight = hexagonosTamanho; // Altura do hexágono
//const hexOffset = 0.75 * hexHeight; // Deslocamento vertical entre hexágonos adjacentes
const colTotal = 17; // Número de colunas no mapa
const linTotal = 9; // Número de linhas no mapa

var cursor = { x: 10, y: 5, c: 0, l: 0 };
//let cursor.x = 10 // (Linha) Posição inicial do cursor. 
//let cursor.y = 5; // (Coluna) Posição inicial do cursor. 

var listImgs = {};

const minhaDiv = document.getElementById('divMenuInicial');
const WinMapas = document.getElementById('divWinMapas');

//const meuSpan = document.getElementById('meuSpan');

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
  // Carregar imagens
  listImgs.cursorImage = instanciaImg('cursor2.png');
  listImgs.cursorImageDestino = instanciaImg('cursor3.png');
  listImgs.terrenoImg = instanciaImg('hexagon.png');
  listImgs.terreno01 = instanciaImg('terreno01.png');
  listImgs.terreno02 = instanciaImg('terreno02.png');
  listImgs.terreno03 = instanciaImg('terreno03.png');
  listImgs.terreno04 = instanciaImg('terreno04.png');
  listImgs.terreno05 = instanciaImg('terreno05.png');
  listImgs.terreno06 = instanciaImg('terreno06.png');

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

  listImgs.castelo = instanciaImg('castelinho.png');
  listImgs.estabulo = instanciaImg('estabulo.png');
  listImgs.torre = instanciaImg('torre.png');
  listImgs.espadachin = instanciaImg('espadachin.png');
}


function resetvars() {
  cursor.x = 10 // (Linha)  
  cursor.y = 5; // (Coluna)

}


function initFaze(indexMundo) {
  turnoatual = 0;
  iniciarTurno();

  //funSound(1);
  resetvars();
  mundoAtual = initMundoAtual(indexMundo);
  //winClose('menu')
  let testdrawMap = drawMap();
  console.log(testdrawMap)
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
  document.getElementById('spanTurno').textContent = "Jogador " + turnoatual + ". Jogadas:" + turnoJogadas + ". ";
}




function zeraEquipes() {
  for (let i = 1; i < 7; i++) {
    equipes[i].totaldominios = 0;
    equipes[i].construcao = 0;
  }
}


// Desenhar o mapa
async function drawMap() {
  await sleep(100); // Pausa por 100 ms (0,1 segundos)

  console.log("turnoatual=" + turnoatual + " drawMap() init")
  let tempListaDominios = [];
  const ProximoTurno = (turnoatual + 1 > 6) ? 1 : turnoatual + 1;
  zeraEquipes();

  for (let col = 0; col < colTotal; col++) {
    for (let lin = 0; lin < linTotal; lin++) {
      const isCursor = cursor.x === col && cursor.y === lin;
      mundoAtual[lin][col].terreno.draw();
      mundoAtual[lin][col].dominio.draw();
    }
  }

  var LinhaImpar = false

  for (let col = 0; col < colTotal; col++) {

    if (LinhaImpar) LinhaImpar = false;
    else LinhaImpar = true;

    for (let lin = 0; lin < linTotal; lin++) {

      const x = col * 46;
      let y = 10 + lin * hexagonosTamanho;
      if (LinhaImpar) {
        y = y + hexagonosTamanho / 2;
      }
      const isCursor = cursor.x === col && cursor.y === lin;

      // Calcular dominios de todos os jogadores.
      if (mundoAtual[lin][col].dominio.num === undefined) {
        console.log("ERRO :: lin:" + lin + " col:" + col + " totaldominios:" + mundoAtual[lin][col].dominio.num)
        mundoAtual[lin][col].dominio.num = 0;
      }
      equipes[mundoAtual[lin][col].dominio.num].totaldominios = equipes[mundoAtual[lin][col].dominio.num].totaldominios + 1;

      if (isCursor) {
        cursor.c = x
        cursor.l = y
        interface(mundoAtual[lin][col].construcao.num, mundoAtual[lin][col].tropas.num, mundoAtual[lin][col].dominio.num);
      }
     
      console.log(mundoAtual[lin][col].construcao.num);

      // Calcula total de copnstruções.
      if (mundoAtual[lin][col].construcao.num !== 0) {
        mundoAtual[lin][col].construcao.draw(); 
        // Contagem total d construcoes
        equipes[mundoAtual[lin][col].dominio.num].construcao = equipes[mundoAtual[lin][col].dominio.num].construcao + 1;
      }

      mundoAtual[lin][col].tropas.draw();

      if (mundoAtual[lin][col].tropas.num !== 0) {
        mundoAtual[lin][col].dominio.drawBandeira();
      }

      if (mundoAtual[lin][col].dominio.num === ProximoTurno) {
        tempListaDominios.push({ l: lin, c: col }); // Adiciona o objeto ao array para pr´[oximo turno.
      }

    }
    equipes[ProximoTurno].listaDominios = tempListaDominios
  }

  drawTurno();
  ctx.drawImage(listImgs.cursorImage, cursor.c, cursor.l, terrenoWidth, terrenoWidth);
  drawShowMove();
  console.log(equipes[turnoatual].cor + ",dominios:" + equipes[turnoatual].totaldominios + ",castelos:" + equipes[turnoatual].construcao);
  //console.log(equipes[2].cor+":"+equipes[2].totaldominios);
  //console.log(equipes[3].cor+":"+equipes[3].totaldominios);
  //console.log(equipes[4].cor+":"+equipes[4].totaldominios);
  //console.log(equipes[5].cor+":"+equipes[5].totaldominios);
  //console.log(equipes[6].cor+":"+equipes[6].totaldominios);

  return "turnoatual=" + turnoatual + " drawMap()"
}




function iniciarTurno() {
  turnoatual++;
  if (turnoatual > 6) {
    turnoatual = 1
  }
  //alert("Iniciou turno jogador "+turnoatual+"-"+ equipes[turnoatual].cor);
  if (turnoatual !== 1) {
    //setTimeout(playBot(), 90000); // Iniciar bot
    playBot()
  }
}

function subtraiJogada() {
  turnoJogadas--;
  if (turnoJogadas < 1) {
    turnoJogadas = 3;
    iniciarTurno()
  } else if (turnoatual !== 1) {
    //setTimeout(playBot(), 90000); // Iniciar bot
    playBot()
  }
}


function drawShowMove() {
  // var moveTropasShow = {c:0,l:0,Ativo:false};
  if (moveTropasShow.Ativo) {

    //Esquerda cima
    let tempC = moveTropasShow.c - 46;  //(col-1) * 46;
    let tempL = moveTropasShow.l - hexagonosTamanho / 2; //(lin-1) * hexagonosTamanho + 10 + hexagonosTamanho/2;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Cima
    tempC = moveTropasShow.c; //(col) * 46
    tempL = moveTropasShow.l - hexagonosTamanho; //(lin-1) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Direita cima
    tempC = moveTropasShow.c + 46 //(col+1) * 46
    tempL = moveTropasShow.l - hexagonosTamanho / 2; //(lin-1) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    //Esquera baixo
    tempC = moveTropasShow.c - 46//(col-1) * 46
    tempL = moveTropasShow.l + hexagonosTamanho / 2//(lin) * hexagonosTamanho + 10;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Baixo
    tempC = moveTropasShow.c;
    tempL = moveTropasShow.l + hexagonosTamanho;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

    // Direita baixo
    tempC = moveTropasShow.c + 46;
    tempL = moveTropasShow.l + hexagonosTamanho / 2;
    ctx.drawImage(listImgs.cursorImageDestino, tempC, tempL, terrenoWidth, terrenoWidth);

  }
}


function criarCastelo() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].construcao.criarCastelo();
    subtraiJogada();
  } else {
    alert("ERRO : Construção fora do dominio.");
  }
}


function criarUnidde() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].tropas.criarUnidde();
    subtraiJogada();
  } else {
    alert("ERRO : Criando tropas no dominio errado.");
  }
}


function aumentarTropa() {
  if (mundoAtual[cursor.y][cursor.x].dominio.num === turnoatual) {
    mundoAtual[cursor.y][cursor.x].tropas.aumentarTropa();
    subtraiJogada();
  } else {
    alert("ERRO : Aumentando tropas no dominio errado.");
  }
}


function preparaMoverAtacar() {
  moveTropasShow.x = cursor.x;
  moveTropasShow.y = cursor.y;
  moveTropasShow.c = cursor.c;
  moveTropasShow.l = cursor.l;
  moveTropasShow.Ativo = true;
  drawShowMove();
  destinoCursor(cursor.y, cursor.x)
}


function moverTropas() {
  if (moveTropasShow.Ativo) {

    moveTropasShow.Ativo = false;

    if (mundoAtual[cursor.y][cursor.x].construcao.num !== 0 && mundoAtual[cursor.y][cursor.x].dominio.num !== turnoatual && mundoAtual[moveTropasShow.y][moveTropasShow.x].tropas.num < 3) {
      alert("Terreno ocupado. Suba o nivel de suas tropas.")
      if (turnoatual !== 1) {
        playBot()
      }
    } else if (mundoAtual[cursor.y][cursor.x].terreno.num == 6 || mundoAtual[cursor.y][cursor.x].terreno.num == 5) {
      alert("Nao pode mover para este ponto do mapa.")
      if (turnoatual !== 1) {
        playBot()
      }
    } else {
      if (mundoAtual[cursor.y][cursor.x].construcao.num !== 0 && mundoAtual[cursor.y][cursor.x].dominio.num !== 1) {
        mundoAtual[cursor.y][cursor.x].construcao.num = 0; // Derrrubou predio.
      }
      mundoAtual[cursor.y][cursor.x].tropas.num = mundoAtual[cursor.y][cursor.x].tropas.num;
      mundoAtual[moveTropasShow.y][moveTropasShow.x].tropas.num = 0;
      mundoAtual[cursor.y][cursor.x].dominio.num = turnoatual;

      let testdrawMap = drawMap();
      console.log(testdrawMap)

      subtraiJogada();
    }
  }
}

function interface(predio, tropas, dominio) {
  const btCriarUnidade = document.getElementById('btCriarUnidade');
  const btCriarCastelo = document.getElementById('btCriarCastelo');
  const btAumentarTropa = document.getElementById('btAumentarTropa');
  const btMoverAtacar = document.getElementById('btMoverAtacar');

  if (dominio !== 1 || turnoatual !== 1) {
    btCriarCastelo.style.display = 'none'; // Esconde a div
    btAumentarTropa.style.display = 'none'; // Esconde a div
    btCriarUnidade.style.display = 'none'; // Esconde a div
    btMoverAtacar.style.display = 'none'; // Esconde a div
  } else {

    if (predio !== 0) {
      btCriarCastelo.style.display = 'none'; // Esconde a div
    } else {
      btCriarCastelo.style.display = 'block'; // Mostra a div
    }

    if (tropas !== 0) {
      btAumentarTropa.style.display = 'block'; // Mostra a div
      btMoverAtacar.style.display = 'block'; // Mostra a div
      btCriarUnidade.style.display = 'none'; // Esconde a div
    } else {
      btAumentarTropa.style.display = 'none'; // Esconde a div
      btMoverAtacar.style.display = 'none'; // Esconde a div
      btCriarUnidade.style.display = 'block'; // Mostra a div
    }
  }


}

function atualizarInfo(texto) {
  // Atualiza o texto do span
  const spanInfo = document.getElementById('spanInfo');
  spanInfo.textContent = texto;
}

// Move o cursor no mapa
function destinoCursor(newX, newY) {
  if (newX >= 0 && newX < colTotal && newY >= 0 && newY < linTotal) {
    cursor.x = newX;
    cursor.y = newY;

    const spanCursor = document.getElementById('spanCursor');
    spanCursor.textContent = "[" + cursor.x + "x" + cursor.y + "]";
    var info = "["
    info = info + " terreno:" + mundoAtual[cursor.y][cursor.x].terreno.num;  
    info = info + " dominio:" + mundoAtual[cursor.y][cursor.x].dominio.num;
    info = info + " construcoes" + mundoAtual[cursor.y][cursor.x].construcao.num;
    info = info + " tropas" + mundoAtual[cursor.y][cursor.x].construcao.num;

    atualizarInfo(info);
    let testdrawMap = drawMap();
    console.log(testdrawMap)

  } else {
    alert("ERRO LIMITE DE MAPA!");
  }
}

// Move o cursor no mapa
function moveCursor(dx, dy) {
  const newX = cursor.x + dx;
  const newY = cursor.y + dy;
  destinoCursor(newX, newY)
}

function ActionPause() {
  if (pause) {
    pause = false;
    //winClose('pause'); // esconder menu de pause
  } else {
    pause = true;
    //winOpen('pause');
  }
}


function mostrarDiv(mostrar) {
  // Controla a visibilidade da div
  if (mostrar) {
    minhaDiv.style.display = 'block'; // Mostra a div
  } else {
    minhaDiv.style.display = 'none'; // Esconde a div
  }
}


// Controle do teclado
document.addEventListener('keydown', (event) => {
  if (event.key == 'ArlinLeft' || event.key == 'a' || event.key == 'A') {
    if (turnoatual == 1) { moveCursor(-1, 0) }; // Para esquerda/baixo
  } else if (event.key == 'ArlinRight' || event.key == 'd' || event.key == 'D') {
    if (turnoatual == 1) { moveCursor(1, 0) }; // Para direita/baixo
  } else if (event.key == 'ArlinUp' || event.key == 'w' || event.key == 'W') {
    if (turnoatual == 1) { moveCursor(0, -1) }; // Para cima
  } else if (event.key == 'ArlinDown' || event.key == 's' || event.key == 'S') {
    if (turnoatual == 1) { moveCursor(0, 1) }; // Para baixo
  } else if (event.key == 'p' || event.key == 'P') {
    if (turnoatual == 1) { ActionPause() };
  }
});

//var mouseCordenadas = {l:0,c:0,x:0,y:0, clicou:false}

canvas.addEventListener('click', function (event) {
  if (turnoatual == 1) {
    // Obtém as coordenadas do mouse em relação ao canvas
    const rect = canvas.getBoundingClientRect(); // Retângulo do canvas na tela
    const x = event.clientX - rect.left; // Coordenada X relativa ao canvas
    const y = event.clientY - rect.top; // Coordenada Y relativa ao canvas

    //mouseCordenadas.clicou=true;
    //mouseCordenadas.c=x;
    //mouseCordenadas.l=y;

    const col = parseInt(x / 46);

    let desloca = 0
    if (col % 2 === 0) desloca = -1;

    const lin = parseInt(y / hexagonosTamanho) + desloca;

    //if(LinhaImpar){  y = y + hexagonosTamanho/2;      }
    destinoCursor(col, lin);
    moverTropas();
    // Exibe as coordenadas no parágrafo
    spanCoordenadas.textContent = `Mouse: X = ${x}, Y = ${y} | ${col},${lin}`;
  }
});

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
  //iniciarTurno();
  initFaze(0);
});