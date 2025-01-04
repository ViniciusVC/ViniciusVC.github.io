var mundoAtual = []



function initMundoAtual(indexMapa){
	console.log("initMundoAtual("+indexMapa+")");
	var mundoTemp = [
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	  [ {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
	]

	var LinhaImpar = false
	for (let col = 0; col < colTotal; col++) {
	
		if (LinhaImpar) LinhaImpar = false;
		else LinhaImpar = true;
	
		for (let lin = 0; lin < linTotal; lin++) {

			// Calcular dominios de todos os jogadores/equipes.
			if (fazes[indexMapa].dominio[lin][col] !== 0) {
				InitCargaEquipe(fazes[indexMapa].dominio[lin][col], lin, col)
			}

			const x = col * 46;
			let y = 10 + lin * 60;
			if (LinhaImpar) {
				y = y + 60 / 2;
			}

			mundoTemp[lin][col].x = x;
			mundoTemp[lin][col].y = y;
			mundoTemp[lin][col].impar= LinhaImpar;
			mundoTemp[lin][col].terreno = initTerreno(fazes[indexMapa].terreno[lin][col], x, y);
			mundoTemp[lin][col].cenografia = initCenografia(fazes[indexMapa].cenografia[lin][col], x, y);
			mundoTemp[lin][col].dominio = initDominio(fazes[indexMapa].dominio[lin][col], x, y);
			mundoTemp[lin][col].construcao = initConstrucao(fazes[indexMapa].construcao[lin][col], x, y);
			mundoTemp[lin][col].tropas = initTropa(fazes[indexMapa].tropas[lin][col], x, y);
			mundoTemp[lin][col].cursor = initCursor(x, y);
			mundoTemp[lin][col].moverparaterritorio = function(jogadorID, jogadorTropas){
				console.log("moverparaterritorio("+jogadorTropas+")")
				if ((this.terreno.num == 6 || this.terreno.num == 5)){
					console.log("(Agua ou lava) Nao pode mover para este ponto do mapa.")
					return "Nao mover";
				}else if(this.dominio.num === jogadorID){
					if(this.tropas.num==0){
						console.log("Andando por seu territorio.");
						this.tropas.num = jogadorTropas;
						this.cenografia.num = 0;
						this.tropas.draw();
						return "Mover";
					}else{
						console.log("Seu territorio ja esta ocupado.");
						return "Nao mover";
					}				

				}else{
					if(this.construcao.num + this.tropas.num < jogadorTropas){
						console.log("Dominou um novo territorio.");
						this.construcao.num = 0; // Derrrubou predio.
						this.dominio.num = jogadorID;
						this.tropas.num = jogadorTropas;
						this.tropas.draw();
						return "Tomar terreno";
					}else{
						console.log("Perdeu a batalha.");
						return "Nao mover";
					}				
				}
			};
		}
	}

	return mundoTemp;
  }
  
  function initCursor(x, y){
	return {
	  x:x,
	  y:y,
	  draw: function() {
		ctx.drawImage(listImgs.cursorImage, this.x, this.y, 60, 60);
	  }
	}
  }

  

  function initTerreno(tempNum, x, y){
	return {
	  num: tempNum,
	  width: 60,
	  x:x,
	  y:y,
	  frame:0,
	  draw: function() {
		if (this.num == 1) {
		  ctx.drawImage(listImgs.terreno01, this.x, this.y, this.width, this.width);
		} else if (this.num == 2) {
		  ctx.drawImage(listImgs.terreno02, this.x, this.y, this.width, this.width);
		} else if (this.num == 3) {
		  ctx.drawImage(listImgs.terreno03, this.x, this.y, this.width, this.width);
		} else if (this.num == 4) {
		  ctx.drawImage(listImgs.terreno04, this.x, this.y, this.width, this.width);
		} else if (this.num == 5) {
		  ctx.drawImage(listImgs.terreno05, this.x, this.y, this.width, this.width);
		} else if (this.num == 6) {
		  if(this.frame==0)	{
			this.frame=1;
			ctx.drawImage(listImgs.terreno06, this.x, this.y, this.width, this.width);
		  }else{
			this.frame=0;
			ctx.drawImage(listImgs.terreno06b, this.x, this.y, this.width, this.width);
		  }
		} else {
		  // Nao existe terreno.
		}
	  }
	}
  }
  
  function initCenografia(tempNum, x, y){
	return {
	  num: tempNum,
	  width: 40,
	  x:x+10,
	  y:y-15,
	  frame:0,
	  draw: function() {
		if (this.num == 1) {
		  ctx.drawImage(listImgs.cenario001, this.x, this.y, this.width, this.width);
		} else if (this.num == 2) {
		  ctx.drawImage(listImgs.cenario002, this.x, this.y, this.width, this.width);
		} else if (this.num == 3) {
		  ctx.drawImage(listImgs.cenario003, this.x, this.y, this.width, this.width);
		} else if (this.num == 4) {
		  ctx.drawImage(listImgs.cenario004, this.x, this.y, this.width, this.width);
		} else if (this.num == 5) {
		  ctx.drawImage(listImgs.cenario005, this.x, this.y, this.width, this.width);
		} else if (this.num == 6) {
		  ctx.drawImage(listImgs.cenario006, this.x-20, this.y, 80, 80);
		} else {
		  // Nao existe cenografia.
		}
	  }
	}
  }

  function initDominio(tempNum, x, y){
	return {
	  num: tempNum,
	  width: 60,
	  x:x,
	  y:y,
	  frame:0,
	  draw: function() {
		if (this.num == 1) {
		  ctx.drawImage(listImgs.dominioA, this.x, this.y, this.width, this.width);
		} else if (this.num == 2) {
		  ctx.drawImage(listImgs.dominioB, this.x, this.y, this.width, this.width);
		} else if (this.num == 3) {
		  ctx.drawImage(listImgs.dominioC, this.x, this.y, this.width, this.width);
		} else if (this.num == 4) {
		  ctx.drawImage(listImgs.dominioD, this.x, this.y, this.width, this.width);
		} else if (this.num == 5) {
		  ctx.drawImage(listImgs.dominioE, this.x, this.y, this.width, this.width);
		} else if (this.num == 6) {
		  ctx.drawImage(listImgs.dominioF, this.x, this.y, this.width, this.width);
		}
	  },
	  drawBandeira: function() {
		if(this.frame==0)	{
		  this.frame=2;
		}else{
		  this.frame=0;
		}
		if (this.num == 1) {
		  ctx.drawImage(listImgs.bandeiraA, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else if (this.num == 2) {
		  ctx.drawImage(listImgs.bandeiraB, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else if (this.num == 3) {
		  ctx.drawImage(listImgs.bandeiraC, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else if (this.num == 4) {
		  ctx.drawImage(listImgs.bandeiraD, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else if (this.num == 5) {
		  ctx.drawImage(listImgs.bandeiraE, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else if (this.num == 6) {
		  ctx.drawImage(listImgs.bandeiraF, this.x + 18, this.y + 15, 15+this.frame, 30);
		} else {
		  ctx.drawImage(listImgs.bandeiraSombra, this.x + 18, this.y + 15, 15+this.frame, 30);
		}
	  }
	}
  }
   
  function initConstrucao(tempNum, x, y){
	return {
	  num: tempNum,
	  width: 55,
	  x:x,
	  y:y,
	  draw: function() {
		if (this.num===1) {
			ctx.drawImage(listImgs.casebre, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===2) {
			ctx.drawImage(listImgs.estabulo, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===3) {
			ctx.drawImage(listImgs.torre, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===4) {
			ctx.drawImage(listImgs.castelo, this.x, this.y - 15, this.width, this.width);
		}

	  },
	  criarCastelo: function() {
		if (this.num===0) {
			//alert('Criar cazinha.');
			this.num = 1;
			ctx.drawImage(listImgs.casebre, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===1) {
			//alert('Criar fazenda.');
			this.num=2;
			ctx.drawImage(listImgs.estabulo, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===2) {
			//alert('Criar torre.');
			this.num=3;
			ctx.drawImage(listImgs.torre, this.x, this.y - 15, this.width, this.width);
		}else if (this.num===3) {
			//alert('Criar castelo.');
			this.num=4;
			ctx.drawImage(listImgs.castelo, this.x, this.y - 15, this.width, this.width);
		}
	  }
	}
  }
  
  function initTropa(tempNum, x, y){
	return {
	  num: tempNum,
	  width: 20,
	  x:x,
	  y:y,
	  frame:0,
	  draw: function() {
		
		if (this.num == 1) {
		  ctx.drawImage(listImgs.campones, this.x + 20, this.y + 17, 20, 30);
		} else if (this.num === 2) {
		  ctx.drawImage(listImgs.espadachin, this.x + 20, this.y + 17, 20, 30);
		} else if (this.num === 3) {
		  ctx.drawImage(listImgs.espadachin, this.x + 5, this.y + 15, 20, 30);
		  ctx.drawImage(listImgs.espadachin, this.x + 30, this.y + 15, 20, 30);
		} else if (this.num === 4) {
		  ctx.drawImage(listImgs.espadachin, this.x + 5, this.y + 15, 20, 30);
		  ctx.drawImage(listImgs.espadachin, this.x + 18, this.y + 25, 20, 30);
		  ctx.drawImage(listImgs.espadachin, this.x + 30, this.y + 15, 20, 30);
		} else if (this.num === 5) {
			ctx.drawImage(listImgs.cavaleiro, this.x + 5, this.y + 15, 20, 30);
			ctx.drawImage(listImgs.espadachin, this.x + 30, this.y + 15, 20, 30);
		} else if (this.num === 6) {
			ctx.drawImage(listImgs.espadachin, this.x + 5, this.y + 15, 20, 30);
			ctx.drawImage(listImgs.cavaleiro, this.x + 18, this.y + 25, 20, 30);
			ctx.drawImage(listImgs.espadachin, this.x + 30, this.y + 15, 20, 30);
		} else if (this.num === 7) {
			ctx.drawImage(listImgs.cavaleiro, this.x + 5, this.y + 15, 20, 30);
			ctx.drawImage(listImgs.espadachin, this.x + 18, this.y + 25, 20, 30);
			ctx.drawImage(listImgs.cavaleiro, this.x + 30, this.y + 15, 20, 30);
	  	}else if (this.num === 8) {
			ctx.drawImage(listImgs.cavaleiro, this.x + 5, this.y + 15, 20, 30);
			ctx.drawImage(listImgs.cavaleiro, this.x + 18, this.y + 25, 20, 30);
			ctx.drawImage(listImgs.cavaleiro, this.x + 30, this.y + 15, 20, 30);
	  	}
	  },
	  criarUnidde: function() {
		if (this.num == 0) {
		  //alert('Criar unidde.');
		  this.num = 1;
		  //listImgs.campones
		  //listImgs.espadachin
		  //listImgs.cavaleiro
		  ctx.drawImage(listImgs.campones, this.x + 20, this.y + 17, 20, 30);
		}
	  },
	  aumentarTropa: function() {
		if (this.num < 7) {
			this.num = this.num+1;
		}
		this.draw();
	  },
	}
  }
  