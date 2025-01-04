
var equipes = [{},
	{totaldominios:0, cor:"#1100ff", nomecor:"azul", listaDominios:[], imgrei:"img/rei_1_azul.jpg", ativo:true},
	{totaldominios:0, cor:"#ff0000", nomecor:"vermelho", listaDominios:[], imgrei:"img/rei_2_vermelho.jpg", ativo:true},
	{totaldominios:0, cor:"#009a00", nomecor:"verde", listaDominios:[], imgrei:"img/rei_3_verde.jpg", ativo:true},
	{totaldominios:0, cor:"#fff400", nomecor:"amarelo", listaDominios:[], imgrei:"img/rei_4_amarelo.jpg", ativo:true},
	{totaldominios:0, cor:"#ff00e1", nomecor:"roza", listaDominios:[], imgrei:"img/rei_5_roza.jpg", ativo:true},
	{totaldominios:0, cor:"#00afff", nomecor:"azul claro", listaDominios:[], imgrei:"img/rei_6_azul_claro.jpg", ativo:true}]

function equipeTrocaDominio(jogadorPerdeuDominio, jogadorGanhouDominio,tempL, tempC){

	let itemExcluir = 0;

	// identificar item da lista de dominios a ser excluido:
	for (let i in equipes[jogadorPerdeuDominio].listaDominios) {
		if(tempL===equipes[jogadorPerdeuDominio].listaDominios[i].l && tempC === equipes[jogadorPerdeuDominio].listaDominios[i].c){
			itemExcluir = i;
		}
	}

	// Retirar dominio a lista de equipes do jogador que perdeu territorio.
	console.log("Retirar dominio(l"+tempL+",c"+tempC+") a lista do jogador "+jogadorPerdeuDominio+". totaldominios:"+equipes[jogadorPerdeuDominio].totaldominios+".")
	equipes[jogadorPerdeuDominio].totaldominios = equipes[jogadorPerdeuDominio].totaldominios-1
	equipes[jogadorPerdeuDominio].listaDominios.splice(itemExcluir,1);

	// Incluir novo dominio a lista de equipes do atual jogador.
	console.log("incluindo novo dominio(l"+tempL+",c"+tempC+") a lista do jogador "+jogadorGanhouDominio+". totaldominios:"+equipes[jogadorGanhouDominio].totaldominios+".")
	equipes[jogadorGanhouDominio].listaDominios.push({ l: tempL, c: tempC });
	equipes[jogadorGanhouDominio].totaldominios = equipes[jogadorGanhouDominio].totaldominios+1

	if (equipes[jogadorPerdeuDominio].ativo & equipes[jogadorPerdeuDominio].totaldominios<4){
		alert("Jogador [" +jogadorPerdeuDominio+ "] " + equipes[jogadorPerdeuDominio].nomecor + " ELIMINADO!");
		console.log("Jogador [" +jogadorPerdeuDominio+ "] " + equipes[jogadorPerdeuDominio].nomecor + " ELIMINADO!");
		equipes[jogadorPerdeuDominio].ativo = false
		limparPessasJogador(jogadorPerdeuDominio);
	}

	if (equipes[jogadorGanhouDominio].totaldominios>55){
		if(jogadorGanhouDominio===1){
			alert("PARABENS! GANHOU a partida!");
			console.log("Jogador [" +jogadorGanhouDominio+ "] " + equipes[1].nomecor + " GANHOU!")
			winOpen("divWinVitoria");
		}else{
			alert(console.log("Você perdeu. O jogador [" +jogadorGanhouDominio+ "] " + equipes[1].nomecor + " GANHOU esta partida!"))
			console.log("Jogador [" +jogadorGanhouDominio+ "] " + equipes[1].nomecor + " GANHOU!")
		}
	}
	

}

function InitCargaEquipe(idJogador, lin, col){
	// Calcular dominios de todos os jogadores/equipes.
	if(equipes[idJogador].totaldominios<1){
		// Isto é uma gambiarra para eliminar o primeiro item que não sei porque esta aparecendo.
		equipes[idJogador].totaldominios = 1;
		equipes[idJogador].listaDominios[0] = ({ l: lin, c: col });
	}else{
		equipes[idJogador].totaldominios = equipes[idJogador].totaldominios + 1;
		equipes[idJogador].listaDominios.push({ l: lin, c: col });
	}
}

function mostraTropasEquipe(idJogador){
	console.log("### mostraTropasEquipe("+idJogador+")");
	for (let i in equipes[idJogador].listaDominios) {
		mundoAtual[equipes[idJogador].listaDominios[i].l][equipes[idJogador].listaDominios[i].c].dominio.draw();
	}
}

function limparPessasJogador(idJogador){
	let i = 0;
	for (let i in equipes[idJogador].listaDominios) {
		mundoAtual[equipes[idJogador].listaDominios[i].l][equipes[idJogador].listaDominios[i].c].tropas.num = 0;
		mundoAtual[equipes[idJogador].listaDominios[i].l][equipes[idJogador].listaDominios[i].c].construcao.num = 0;
	}
}