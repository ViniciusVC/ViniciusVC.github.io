
var spanAppAtual, DivIntro, IdJanelaFoco, IdJanelaConversorDeTextos, IdJanelaConversorDeUnidade, IdJanelaRelogio,IdJanelaCalculadora, IdJanelaNote, IdJanelaWWW, IdJanelaCadastro, IdJanelaDesenho;
	
	function init(){
		console.log("iniciou Sistema Operacional.");
		DivIntro = document.getElementById("DivIntro"); // Esconder tela inicial.
		spanAppAtual = document.getElementById("spanAppAtual");

		IdJanelaCalculadora = document.getElementById("IdJanelaCalculadora");
		IdJanelaFoco = document.getElementById("IdJanelaFoco");
		IdJanelaConversorDeTextos = document.getElementById("IdJanelaConversorDeTextos");
		IdJanelaConversorDeUnidade = document.getElementById("IdJanelaConversorDeUnidade");
		IdJanelaRelogio = document.getElementById("IdJanelaRelogio");
		IdJanelaNote = document.getElementById("IdJanelaNote");
		IdJanelaWWW = document.getElementById("IdJanelaWWW");
		IdJanelaCadastro = document.getElementById("IdJanelaCadastro");
		IdJanelaDesenho = document.getElementById("IdJanelaDesenho");
		
		DivIntro.style.display = "none"; //Esconder Janela de Informações.
		
		fecharJanela(IdJanelaCalculadora);
		fecharJanela(IdJanelaFoco);
		fecharJanela(IdJanelaConversorDeTextos);
		fecharJanela(IdJanelaConversorDeUnidade);
		fecharJanela(IdJanelaRelogio);
		fecharJanela(IdJanelaNote);
		fecharJanela(IdJanelaWWW);
		fecharJanela(IdJanelaCadastro);
		fecharJanela(IdJanelaDesenho);

		Dragable(IdJanelaCalculadora); //Mover janela.
		Dragable(IdJanelaFoco); //Mover janela.
		Dragable(IdJanelaConversorDeTextos); //Mover janela.
		Dragable(IdJanelaConversorDeUnidade); //Mover janela.
		Dragable(IdJanelaRelogio); //Mover janela.
		Dragable(IdJanelaNote); //Mover janela.
		Dragable(IdJanelaWWW); //Mover janela.
		Dragable(IdJanelaCadastro); //Mover janela.
		//Dragable(IdJanelaDesenho); //Mover janela.
		
		//animate();
	};

	function setAppAtual(el){
		let tempAPPatual = "";
		if (IdJanelaCalculadora==el){
			tempAPPatual = "Calculadora";
		} else if (IdJanelaFoco==el){
			tempAPPatual = "APP-Foco";
		} else if (IdJanelaConversorDeTextos==el){
			tempAPPatual = "Conversor de Textos";
		} else if (IdJanelaConversorDeUnidade==el){
			tempAPPatual = "Conversor de Unidade";
		} else if (IdJanelaRelogio==el){
			tempAPPatual = "Relogio";
		} else if (IdJanelaNote==el){
			tempAPPatual = "Notas";
		} else if (IdJanelaWWW==el){
			tempAPPatual = "Internet";
		} else if (IdJanelaCadastro==el){
			tempAPPatual = "Gerador de Dados";
		} else if (IdJanelaDesenho==el){
			tempAPPatual = "Desenho";
		}
		spanAppAtual.innerHTML = tempAPPatual
	}

	function abrirJanela(el){
		setAppAtual(el);
		el.style.display = "block"; //Mostrar janela de Edição de materiais.
	}
	
	function fecharJanela(el){
		setAppAtual("");
		el.style.display = "none"; //Esconder Janela de Editor de materiais.
	}
	
	function MaxJanela(el){
		setAppAtual(el);
		if(el.style.width == "98%"){
			el.style.width = "50%";
		}else{
			el.style.width = "98%";
			el.style.top = "0";
			el.style.left = "0";
		}
	}

	function moveJanelaTop(el){
		setAppAtual(el);
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
				setAppAtual(el);
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


