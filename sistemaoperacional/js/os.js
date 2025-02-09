
var DivIntro, IdJanelaConversorDeTextos, IdJanelaConversorDeUnidade, IdJanelaRelogio,IdJanelaCalculadora, IdJanelaNote, IdJanelaWWW;
	
	function init(){
		console.log("iniciou o Game.");
		DivIntro = document.getElementById("DivIntro"); // Esconder tela inicial.
		
		IdJanelaCalculadora = document.getElementById("IdJanelaCalculadora");
		IdJanelaConversorDeTextos = document.getElementById("IdJanelaConversorDeTextos");
		IdJanelaConversorDeUnidade = document.getElementById("IdJanelaConversorDeUnidade");
		IdJanelaRelogio = document.getElementById("IdJanelaRelogio");
		IdJanelaNote = document.getElementById("IdJanelaNote");
		IdJanelaWWW = document.getElementById("IdJanelaWWW");
		

		DivIntro.style.display = "none"; //Esconder Janela de Informações.
		
		fecharJanela(IdJanelaCalculadora);
		fecharJanela(IdJanelaConversorDeTextos);
		fecharJanela(IdJanelaConversorDeUnidade);
		fecharJanela(IdJanelaRelogio);
		fecharJanela(IdJanelaNote);
		fecharJanela(IdJanelaWWW);

		Dragable(IdJanelaCalculadora); //Mover janela.
		Dragable(IdJanelaConversorDeTextos); //Mover janela.
		Dragable(IdJanelaConversorDeUnidade); //Mover janela.
		Dragable(IdJanelaRelogio); //Mover janela.
		Dragable(IdJanelaNote); //Mover janela.
		Dragable(IdJanelaWWW); //Mover janela.
		
		//animate();
	};

	function abrirJanela(el){
		el.style.display = "block"; //Mostrar janela de Edição de materiais.
	}
	
	function fecharJanela(el){
		el.style.display = "none"; //Esconder Janela de Editor de materiais.
	}
	
	function MaxJanela(el){
		if(el.style.width == "98%"){
			el.style.width = "50%";
		}else{
			el.style.width = "98%";
			el.style.top = "0";
			el.style.left = "0";
		}
	}

	function moveJanelaTop(el){
		el.style.top = "0";
		el.style.left = "0";
	}
	
	
	function animate(){
		console.log("animate()");
	};

	function clkIcon(){
		console.log("clkIcon()");
	};

	//init()
	//Adiciona eventos pra navegadores modernos e antigos
	function addEvent(el, type, callback) {
		if (el.addEventListener) {
			el.addEventListener(type, callback);
		} else if (el.attachEvent) {
			el.attachEvent("on" + type, callback);
		}
	}

	//Mover janela.
	function Dragable(el)	{
			var isMove = false, // Verifica se esta se movendo.
				x = 0, y = 0, // Pega as coordenadas do mouse.
				xel = 0, yel = 0; // Ultima posição do elemento.

			addEvent(el, "mousedown", function (e) {
				isMove = true;
				el.className += " isMoving";
				x = window.event ? window.event.clientX : e.pageX;
				y = window.event ? window.event.clientY : e.pageY;
				xel = x - el.offsetLeft;
				yel = y - el.offsetTop;
			});

			addEvent(document, "mousemove", function (e) {
				if(el.style.width!="98%"){	
					if (isMove) {
						e.preventDefault();
						x = window.event ? window.event.clientX : e.pageX;
						y = window.event ? window.event.clientY : e.pageY;
						el.style.left = (x - xel) + 'px';
						el.style.top  = (y - yel) + 'px';
					}
				}
			});

			addEvent(document, "mouseup", function () {
				el.className = String(el.className).replace(/(^|\s)isMoving(\s|$)/g, " ");
				isMove = false;
			});
		};


