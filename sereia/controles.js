
//----Escutadores---------------------------------------------------------------------------
/*
function addEvent(el, type, callback) {
  console.log("type=" + type + " : Adiciona eventos pra navegadores modernos e antigos");
  //Erro no joystick.addEventListener
  if (el.addEventListener) {
    el.addEventListener(type, callback);
  } else if (el.attachEvent) {
    el.adttachEvent("on" + type, callback);
  }
}

function removeEvent(el, type, callback) {
  console.log("type=" + type + " : Adiciona eventos pra navegadores modernos e antigos");
  //Erro no joystick.addEventListener
  if (el.addEventListener) {
    el.addEventListener(type, callback);
  } else if (el.attachEvent) {
    el.adttachEvent("on" + type, callback);
  }
}
*/

  // Inicio do controle ____________________________________________________________________________

  function getTouchStart(el, e) {
    // tocou a tela com o dedo
    e.pageY = e.touches[0].pageY;
    e.pageX = e.touches[0].pageX;
    console.log("!!!!!!!!!!!!!! _getTouchStart(), _pageY=" + e.pageY + ", _pageX=" + e.pageX)
    //joystick.style.position  = 'absolute'; //position: absolute;
    funMousedown(el, e);
    //var novoe = e.touches[0];
    //funMousedown(joystick,novoe);
    //funMousedown(joystick,e.touches[0]); // iguinorar dulo clique.
  }

  function funMousedown(el, e) {
    //segurou joystick com o mouse.
    isMove = true;
    console.log(el)
    joystickInitLeft = el.offsetLeft; // <-----38
    joystickInitTop = el.offsetTop; // <-----398
    console.log("funMousedown(), Left=" + joystickInitLeft + ", Top=" + joystickInitTop)
    //el.className += " isMoving"; // Não sei porqu isto esta aqui
    x = e.pageX; // <-----?
    y = e.pageY; // <-----?
    //x = window.event ? window.event.clientX : e.pageX; // <-----undefined
    //y = window.event ? window.event.clientY : e.pageY; // <-----undefined
    xel = x - el.offsetLeft; // <-----NaN
    yel = y - el.offsetTop; // <-----NaN
    console.log("funMousedown(), x=" + x + ", y=" + y + ", xel=z" + xel + ", yel=" + yel);
  }

  function getTouchMove(el, e) {
    // Moveu o dedo na tela
    e.pageY = e.touches[0].pageY;
    e.pageX = e.touches[0].pageX;
    funMouseMove(el, e);
  }

  var isMove = false;
  var joystickInitLeft;
  var joystickInitTop;

  function funMouseMove(el, e) {
    console.log("funMouseMove(), Left=" + joystickInitLeft + ", Top=" + joystickInitTop);
    //movendo joystick (celular)
    if (isMove) {
      e.preventDefault(); // Não sei o que faz
      //x = window.event ? window.event.clientX : e.pageX; // <-----undefined
      //y = window.event ? window.event.clientY : e.pageY; // <-----undefined
      x = e.pageX; // <-----?
      y = e.pageY; // <-----?
      //console.log("Movendo... , x="+x+", y="+y+", xel="+xel+", yel="+yel);
      el.style.left = (x - xel) + 'px';
      el.style.top = (y - yel) + 'px';

      var difLeft = el.offsetLeft - joystickInitLeft;
      var difTop = el.offsetTop - joystickInitTop;

      if (difLeft < 0) { difLeft = -1 * difLeft }
      if (difTop < 0) { difTop = -1 * difTop }

      if (difLeft > difTop) {
        if (el.offsetLeft > joystickInitLeft) {
          if (el == joystick) {
            player.ActionMoveRight();
            //varMoverPersonLado=-1; //moverPersonLado(-1);
          } else {
            papagaio.ActionMoveRight()
            //player.ActionBate();
            
          }
        } else if (el.offsetLeft < joystickInitLeft) {
          if (el == joystick) {
            player.ActionMoveLeft();
            //varMoverPersonLado=1; //moverPersonLado(+1);
          } else {
            papagaio.ActionMoveLeft()
            //player.ActionPula();
          }
        }
      }
      if (difLeft <= difTop) {
        if (el.offsetTop > joystickInitTop) {
          if (el == joystick) {

            player.ActionBelow();
            //player.ActionBate();
            //varDirecao=0.5;
            //moverPersonagem(+0.5); //(ok)


          } else {
            papagaio.ActionBelow()
            //player.ActionPula();
          }
        } else if (el.offsetTop < joystickInitTop) {
          if (el == joystick) {

            player.ActionUp();
            //player.ActionPula();
            //varDirecao=-0.5;
            //moverPersonagem(-0.5); //(ok)


          } else {
            papagaio.ActionUp();
            //player.ActionBate();
          }
        }
      }
    }
  }


  
  


  function funmouseup() {
    console.log("funmouseup()");
    joystick.style.left = joystickConteiner.style.left;
    joystick.style.top = joystickConteiner.style.top;
    joystick2.style.left = joystickConteiner2.style.left;
    joystick2.style.top = joystickConteiner2.style.top;
    isMove = false;
    player.ActionStop();
  }



  function initJoystick() {
    //Escutando eventos joystick.
    //butJoystickID1.onClick = function () { starPular() };
    //butJoystickID2.onClick = function () { funClickLink() };
    
    //Usando a função addEvent() para verificar qual a melhor forma de escutar o evento.

    butJoystickID1.addEventListener("click", function () {player.ActionBate()}); // Clicou no botao da esquerda
    butJoystickID2.addEventListener("click", function () {ActionPause()}); // Clicou no botao da direita
    butJoystickID1.addEventListener("touchend", function () {player.ActionBate()}); // Tocou o botao da esquerda
    butJoystickID2.addEventListener("touchend", function () {ActionPause()}); // Tocou o botao da direita

    //--Muse------------------    
    joystick.addEventListener("mousedown", function (e) { funMousedown(joystick, e) }); // Clicou com o mouse
    joystick2.addEventListener("mousedown", function (e) { funMousedown(joystick2, e) }); // Clicou com o mouse
    
    joystickConteiner.addEventListener("mousemove", function (e) { funMouseMove(joystick, e) }); //Moveu o mouse
    joystickConteiner2.addEventListener("mousemove", function (e) { funMouseMove(joystick2, e) }); //Moveu o mouse
      
    canvas.addEventListener("mouseup", function () { funmouseup() }); //Soltou o mouse 
    document.addEventListener("mouseup", function () { funmouseup() }); //Soltou o mouse 
    
    //--Touch------------------
    joystick.addEventListener("touchstart", function (e) { getTouchStart(joystick, e) }); // Tocou com o dedo
    joystick2.addEventListener("touchstart", function (e) { getTouchStart(joystick2, e) }); // Tocou com o dedo
    
    joystickConteiner.addEventListener("touchmove", function (e) { getTouchMove(joystick, e) }); //Moveu o dedo
    joystickConteiner2.addEventListener("touchmove", function (e) { getTouchMove(joystick2, e) }); //Moveu o dedo
        
    canvas.addEventListener("touchend", function () { funmouseup() }); //Tirou o dedo da tela
    document.addEventListener("touchend", function () { funmouseup() }); //Tirou o dedo da tela


    /*
    addEvent(butJoystickID1, "mousedown", function (e) { player.ActionBate() }); // Clicou no botao da esquerda
    addEvent(butJoystickID2, "mousedown", function (e) { ActionPause() }); // Clicou no botao da direita
    addEvent(butJoystickID1, "touchend", function (e) { player.ActionBate() }); // Clicou no botao da esquerda
    addEvent(butJoystickID2, "touchend", function (e) { ActionPause() }); // Clicou no botao da direita
    //--Muse------------------    
    addEvent(joystick, "mousedown", function (e) { funMousedown(joystick, e) }); // Clicou com o mouse
    addEvent(joystick2, "mousedown", function (e) { funMousedown(joystick2, e) }); // Clicou com o mouse
    addEvent(joystickConteiner, "mousemove", function (e) { funMouseMove(joystick, e) }); //Moveu o mouse
    addEvent(joystickConteiner2, "mousemove", function (e) { funMouseMove(joystick2, e) }); //Moveu o mouse
    addEvent(canvas, "mouseup", function () { funmouseup() }); //Soltou o mouse 
    addEvent(document, "mouseup", function () { funmouseup() }); //Soltou o mouse 
    //--Touch------------------
    addEvent(joystick, "touchstart", function (e) { getTouchStart(joystick, e) }); // Tocou com o dedo
    addEvent(joystick2, "touchstart", function (e) { getTouchStart(joystick2, e) }); // Tocou com o dedo
    addEvent(joystickConteiner, "touchmove", function (e) { getTouchMove(joystick, e) }); //Moveu o dedo
    addEvent(joystickConteiner2, "touchmove", function (e) { getTouchMove(joystick2, e) }); //Moveu o dedo
    addEvent(canvas, "touchend", function () { funmouseup() }); //Tirou o dedo da tela
    addEvent(document, "touchend", function () { funmouseup() }); //Tirou o dedo da tela
    */

  };