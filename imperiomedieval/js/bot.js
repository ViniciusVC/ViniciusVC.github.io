
const randomNumber = [14, 7, 2, 11, 5, 13, 4, 1, 8, 10, 3, 12, 6, 0, 16, 9, 15]
var randomNumberPont = 0

function initRandomNumber(){
	// Unico valor realmente randomico.
  	randomNumberPont = Math.floor(Math.random() * (10 - 0) + 0);
	console.log("Sorteio randomico real  : "+randomNumberPont);
}


function usarRandom() {
	if (randomNumberPont < 16) {
		randomNumberPont++
	} else {
		randomNumberPont = 0; //randomNumberPont-16;//-17
	}
	return randomNumber[randomNumberPont]
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function playBot() {
	limiteTentBot = limiteTentBot-1;
	console.log("Jogador: "+turnoatual+"-"+equipes[turnoatual].cor);
	
	if(limiteTentBot<=0)
	{
		console.log("O jogador "+turnoatual+", limite de jogadas.");
		limiteTentBot=10;
		turnoJogadas=3;
		observeIniciarTurno = true; // iniciarTurno();
	}else{
		console.log("O jogador "+turnoatual+".jogada:"+turnoJogadas+" e limite de "+limiteTentBot+" tentativas.");
		//await sleep(1000); // Pausa por 1000 ms (1 segundos)
		
		let tempRandom = usarRandom();
		console.log("tempRandom="+tempRandom+" totaldominios="+equipes[turnoatual].totaldominios);
		//console.log(equipes[turnoatual].listaDominios);
		//console.log(equipes[turnoatual].listaDominios[tempRandom]);
	
		if (tempRandom >= equipes[turnoatual].totaldominios) {
			console.log("correcao de tempRandom");
			tempRandom = tempRandom - equipes[turnoatual].totaldominios;
		}
		if (tempRandom >= equipes[turnoatual].totaldominios) {
			console.log("correcao de tempRandom");
			tempRandom = equipes[turnoatual].totaldominios-1;
		}
		if (tempRandom < 0) {
			console.log("correcao de tempRandom=0");
			tempRandom = 0;
		}

		escolheAleatoro(equipes[turnoatual].listaDominios[tempRandom].l, equipes[turnoatual].listaDominios[tempRandom].c)
	}
}


function escolheAleatoro(lin, col) {
	
	let tempRandom = usarRandom();

	if(mundoAtual[lin][col].dominio.num !== turnoatual){
		console.log("erro dominio!["+turnoatual+"]");
		console.log("BOT"+turnoatual+","+turnoJogadas+"---> NÃO ACHOU!");
		playBot();
	}else{

		console.log("BOT["+turnoatual+"]:jogada:"+turnoJogadas+"--->  ["+lin+"]["+col+"]");

		// 0-16 colunas
		// 0-8 linhas
		// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
		// [0,1,2,3,4,5,6,7,8]

		// jogadores:[1,2,3,4,5,6]
		// Opções:[1ou2=mover,3=criartropa,4=evoluir,5&&6=criarpredio]
		// Movimentos possiveis:[1,2,3,4,5,6]
		
		console.log("BOT" + turnoatual + "," + turnoJogadas + "[" + lin + "][" + col + "]");
		destinoCursor(col, lin);
		//drawMap()

		if (mundoAtual[lin][col].tropas.num < 8 && tempRandom < 5) {
			console.log("BOT" + turnoatual + "," + turnoJogadas + "--->  evoluir Tropas.");
			aumentarTropa()
		} else if (mundoAtual[lin][col].tropas.num !== 0) {
			console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover");
			switch (tempRandom) {
				case 1:
				case 7:
				case 13:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(cimaesquerda)");
					preparaMoverAtacar();
					moveCursor(-1, -1);
					moverTropas();
					break;
				case 2:
				case 8:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(cima)");
					preparaMoverAtacar();
					moveCursor(0, -1);
					moverTropas();
					break;
				case 3:
				case 9:
				case 14:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(cimaDireita)");
					preparaMoverAtacar();
					moveCursor(1, -1);
					moverTropas();
					break;
				case 4:
				case 10:
				case 15:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(baichoquerda)");
					preparaMoverAtacar();
					moveCursor(-1, 0);
					moverTropas();
					break;
				case 5:
				case 11:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(baicho)");
					preparaMoverAtacar();
					moveCursor(0, 1)
					moverTropas();
					break;
				case 6:
				case 12:
				case 16:
					console.log("BOT" + turnoatual + "," + turnoJogadas + "---> mover(baixoDireita)");
					preparaMoverAtacar();
					moveCursor(1, 0)
					moverTropas();
					break;
				default:
					console.log("ERRO no switch - BOT[" + turnoatual + "],tempRandom=" + tempRandom);
					playBot(); //obserPlaytBot = true;
			}
		} else if (mundoAtual[lin][col].construcao.num<4  && tempRandom < 5) {
			console.log("BOT" + turnoatual + "," + turnoJogadas + "--->criar Construcao.");
			criarCastelo();
		} else {
			console.log("BOT" + turnoatual + "," + turnoJogadas + "--->criar tropa.");
			criarUnidde();
		}

		console.log("BOT["+turnoatual+"]:Encerrando um jogada.");
	}

}




