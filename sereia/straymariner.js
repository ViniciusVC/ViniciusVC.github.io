


function winOpen(janela){
  ctx.save();
  ctx.drawImage(listImgs.fundopapiro, 0, 0, 862, 420);
  ctx.restore();
  // esconder todas as janelas.
  document.getElementById('menu').style.visibility = 'hidden';
  document.getElementById('help').style.visibility = 'hidden';
  document.getElementById('pause').style.visibility = 'hidden';
  document.getElementById('config').style.visibility = 'hidden';
  document.getElementById('divcontroles').style.visibility = 'hidden';
  // Mostrar apens uma especifica.
  document.getElementById(janela).style.visibility = 'visible'
}

function OpemMapa(){
  pause = true;
  gameover=false;
  document.getElementById('divcontroles').style.visibility = 'hidden';
  document.getElementById('mapa').style.visibility = 'visible'
  
  ctx.drawImage(listImgs.fundopapiro, 0, 0, 862, 420);
  ctx.drawImage(listImgs.mapa, 360, 0, 400, 390);
  //ctx.save();
  if(fazeatual==0){
    ctx.drawImage(listImgs.icomapa, 410, 320, 50, 50);
  }else if(fazeatual==1){
    ctx.drawImage(listImgs.icomapa, 450, 280, 50, 50);
  }else if(fazeatual==2){
    ctx.drawImage(listImgs.icomapa, 500, 260, 50, 50);
  }else if(fazeatual==3){
    ctx.drawImage(listImgs.icomapa, 510, 230, 50, 50);
  }else if(fazeatual==4){
    ctx.drawImage(listImgs.icomapa, 560, 200, 50, 50);
  }else if(fazeatual==5){
    ctx.drawImage(listImgs.icomapa, 500, 180, 50, 50);
  }else if(fazeatual==6){
    ctx.drawImage(listImgs.icomapa, 580, 90, 50, 50);
  }else if(fazeatual==7){
    ctx.drawImage(listImgs.icomapa, 640, 100, 50, 50);
  }else if(fazeatual==8){
    ctx.drawImage(listImgs.icomapa, 690, 100, 50, 50);
  }else if(fazeatual==9){
    ctx.drawImage(listImgs.icomapa, 400, 300, 50, 50);
  }
  //ctx.restore();
}


function winClose(janela){
  document.getElementById(janela).style.visibility = 'hidden';
  if(janela=='menu'){
    OpemMapa();
    
  }else if(janela=='mapa'||janela=='pause'){
    document.getElementById('divcontroles').style.visibility = 'visible';
    pause = false; // Tirar pausa do jogo.
    updateGame(); //Rodar Game
  }
}





//--Carregar imagens----------------------------------

function instanciaImg(tempImg){
    let newImage = new Image();
    newImage.src = tempImg;
    return newImage
}


carregarImagens

function carregarImagens(level){

  listImgs.fundopapiro= instanciaImg('fundo.jpg')
  listImgs.interface= instanciaImg('interface.png')
  listImgs.mapa= instanciaImg('mapa.png')
  listImgs.vida= instanciaImg('vida.png')
  listImgs.icomapa= instanciaImg('ico_mapa.png')
  //if(level<3){
    // fazeatual<3
    // Blocos mundo 1 e mundo 2
    listImgs.bloco001= instanciaImg('bloco001.png')// invisivel
    listImgs.bloco002= instanciaImg('bloco002.png') // mato
    listImgs.bloco003= instanciaImg('bloco003.png')// pedra
    listImgs.bloco004= instanciaImg('bloco004.png') // ponte
    listImgs.bloco005= instanciaImg('bloco005.png')// arvore
    

    // Blocos mundo 3
    listImgs.bloco006= instanciaImg('bloco006.png') // navio
    listImgs.bloco007= instanciaImg('bloco007.png') // vela
    listImgs.bloco008= instanciaImg('bloco008.png') // parede navio

    listImgs.playerparado=instanciaImg('sereia_w_parada_0.png');
    listImgs.playerparado2=instanciaImg('sereia_w_parada_1.png');
    listImgs.playerparado3=instanciaImg('sereia_w_parada_2.png');
    listImgs.playerandando01= instanciaImg('sereia_d_nadando_0.png');
    listImgs.playerandando02= instanciaImg('sereia_d_nadando_1.png');
    listImgs.playerandando03= instanciaImg('sereia_d_nadando_2.png');
    listImgs.playerandando04= instanciaImg('sereia_d_nadando_3.png');
    listImgs.playerandando05= instanciaImg('sereia_d_nadando_4.png');
    listImgs.playerandando06= instanciaImg('sereia_d_nadando_4.png');
    listImgs.playerpulando01= instanciaImg('sereia_e_parada_0.png'),
    listImgs.playerpulando02= instanciaImg('sereia_e_nadando_0.png'),
    listImgs.playerpulando03= instanciaImg('sereia_e_nadando_1.png'),
    listImgs.playerpulando04= instanciaImg('sereia_e_nadando_2.png'),
    listImgs.playercaindo01= instanciaImg('sereia_c_nadando_0.png'),
    listImgs.playercaindo02= instanciaImg('sereia_c_nadando_1.png'),

    listImgs.playerbatendo= instanciaImg('sereia_d_magia.png'),
    listImgs.playerbatendo1= instanciaImg('sereia_d_magia.png'),
    listImgs.playerbatendo2= instanciaImg('sereia_d_magia.png'),

    listImgs.playerdano01= instanciaImg('sereia_w_parada_0.png'),
    listImgs.playerdano02= instanciaImg('sereia_w_parada_1.png'),
    listImgs.playermorrendo01= instanciaImg('sereia_w_parada_0.png'),
    listImgs.playermorrendo02= instanciaImg('sereia_w_parada_1.png'),
    listImgs.playermorrendo03= instanciaImg('sereia_w_parada_2.png'),
    listImgs.playermorrendo04= instanciaImg('sereia_w_parada_2.png'),


    listImgs.linguado01= instanciaImg('linguado_0.png'),
    listImgs.linguado02= instanciaImg('linguado_1.png'),
    listImgs.linguado03= instanciaImg('linguado_2.png'),
    listImgs.linguado04= instanciaImg('linguado_3.png'),
    listImgs.linguado05= instanciaImg('linguado_4.png'),
    
    listImgs.linguador01= instanciaImg('linguado_r0.png'),
    listImgs.linguador02= instanciaImg('linguado_r1.png'),
    listImgs.linguador03= instanciaImg('linguado_r2.png'),
    listImgs.linguador04= instanciaImg('linguado_r3.png'),
    listImgs.linguador05= instanciaImg('linguado_r4.png'),

    listImgs.wallpaper1= instanciaImg('fundo1.jpg'),
    listImgs.wallpaper2= instanciaImg('fundo2.jpg'),
    listImgs.wallpaperBarco= instanciaImg('fundo_barco.png'),
    listImgs.wallpaperIlha= instanciaImg('fundo_ilha.png'),
    listImgs.wallpaperCaverna= instanciaImg('fundo_caverna.png'),
    listImgs.wallpaperNavio= instanciaImg('fundo_navio.png'),

    listImgs.portal= instanciaImg('porta.png'),
    listImgs.bonus= instanciaImg('bonus.png'),
    //inimigo= instanciaImg('caranguejo.png'),
    
    listImgs.caranguejo= instanciaImg('caranguejo.png'),
    listImgs.caranguejo2= instanciaImg('caranguejo2.png'),
    listImgs.caranguejo3= instanciaImg('caranguejo3.png'),
    listImgs.caranguejo4= instanciaImg('caranguejo4.png'),

    listImgs.crocodilo0= instanciaImg('tubarao_0.png'),
    listImgs.crocodilo1= instanciaImg('tubarao_1.png'),
    listImgs.crocodilo2= instanciaImg('tubarao_2.png'),
    listImgs.crocodilo3= instanciaImg('tubarao_3.png'),
    listImgs.crocodilo4= instanciaImg('tubarao_4.png'),
    listImgs.crocodilo5= instanciaImg('tubarao_dano.png'),
    listImgs.crocodilo6= instanciaImg('tubarao_morto.png'),

    listImgs.tubarao= instanciaImg('moreia1.png'),
    listImgs.tubarao2= instanciaImg('moreia2.png'),
    listImgs.tubarao3= instanciaImg('moreia4.png'),
    listImgs.tubarao4= instanciaImg('moreia3.png'),
    listImgs.tubarao5= instanciaImg('moreia5.png'),

    listImgs.cenario001= instanciaImg('cenario001.png'),
    listImgs.cenario002= instanciaImg('cenario002.png'),
    listImgs.cenario003= instanciaImg('cenario003.png'),
    listImgs.cenario004= instanciaImg('cenario004.png'),
    listImgs.cenario005= instanciaImg('cenario005.png'),
    listImgs.cenario006= instanciaImg('cenario006.png'),

    logo= instanciaImg('logo_stray_marine.png')
  
}
  
//-Incluir-imagem-ao-canvas------------------------
function drawImage(img, x, y, width, height, scalew, scaleh) {
    let tempx = x-positFazex;
    //ctx.save();
    if(scalew==1){
      ctx.drawImage(img, tempx, y, width, height);
    }else{
      ctx.scale(-1, 1);
      ctx.drawImage(img, (tempx+width)*-1, y, width, height);
      ctx.scale(1, 1);
    }
  }
  
  
  function debugArea(texto, x,y,w,h){
    if(debug){
      let tempx = x-positFazex;
      console.log("debug : "+texto+"(x="+x+",y="+y+",w="+w+",h="+h+")")
      spandebug.innerText = "debug : "+texto+"(x="+x+",y="+y+",w="+w+",h="+h+")"
      ctx.fillStyle = 'green'; // Cor dos inimigos
      ctx.fillRect(tempx, y, w, h); // posião e tamanho dos inimios
    }
  }
  
  
  //--Incluir-blocos-solidos-------------------------------------------- 
  function initSolido(temSkin, temX, temY){
    return {
        x: temX,//i*142-142,
        y: temY,
        width : 142,
        height : 60, //30
        size: 142,
        skin: temSkin,
        draw: function() {
          if(temSkin==1){
            // invisivel
            drawImage(listImgs.bloco001, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==2){
            // grama
            drawImage(listImgs.bloco002, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==3){
            // pedra
            drawImage(listImgs.bloco003, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==4){
            // ponte
            drawImage(listImgs.bloco004, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==5){
            //arvore
            drawImage(listImgs.bloco005, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==6){
            drawImage(listImgs.bloco006, this.x, this.y-68, 182, 142, 1, 1);
          }else if(temSkin==7){
            drawImage(listImgs.bloco007, this.x, this.y-68, 182, 142, 1, 1);
          }else{
            drawImage(listImgs.bloco008, this.x, this.y-68, 182, 142, 1, 1);
          }
          debugArea("bloco00"+temSkin, this.x,this.y,this.width,this.height);
        },
    };
  }
  
  //--Incluir-blocos-solidos-------------------------------------------- 
  function initDecoracao(temSkin, temX, temY){
    return {
        x: temX,//i*142-142,
        y: temY,
        width : 142,
        height : 30,
        size: 142,
        skin: temSkin,
        draw: function() {
          if(temSkin==1){
            drawImage(listImgs.cenario001, this.x, this.y-75, 142, 142, 1, 1);
          }else if(temSkin==2){
            drawImage(listImgs.cenario002, this.x, this.y-75, 142, 142, 1, 1);
          }else if(temSkin==3){
            drawImage(listImgs.cenario003, this.x, this.y-75, 142, 142, 1, 1);
          }else if(temSkin==4){
            drawImage(listImgs.cenario004, this.x, this.y-75, 142, 142, 1, 1);
          }else if(temSkin==5){
            drawImage(listImgs.cenario005, this.x, this.y-75, 142, 142, 1, 1);
          }else{
            drawImage(listImgs.cenario006, this.x, this.y-75, 142, 142, 1, 1);
          }
          //debugArea("cenario00"+temSkin, this.x,this.y,this.width,this.height);
        },
    };
  }
  
  
  //--Incluir-blocos-solidos-------------------------------------------- 
  function initInteracao(temSkin, temX, temY){
    return {
        x: temX,//i*142-142,
        y: temY,
        origemX: temX,
        origemY: temY,
        width : 70,
        height : 60,
        size: 142,
        frame:0,
        skin: temSkin,
        state : "vivo", // vivo, morto, dano, atordoado
        vida : 6,
        direction: -1, 
        draw: function() {
          if(this.skin==1){
            // vida
            drawImage(listImgs.vida, this.x, this.y, 40, 40, 1, 1);
            // Porta
            //drawImage(listImgs.portal, this.x-10, this.y-71, 142, 142, 1, 1);
            
          }else if(this.skin==2){
            // Bau de tesouro
            drawImage(listImgs.bonus, this.x-35, this.y-71, 142, 142, 1, 1);

          }else if(this.skin==3){
            // caranguejo
            this.frame = this.frame+1;

            if(this.state=="morto"){
                if(this.frame>150){
                    this.frame=0;
                    this.state="vivo";
                    //this.state=="vivo"
                    //interacao.splice(i, 1);
                }
                drawImage(listImgs.caranguejo4, this.x-35, this.y-71, 142, 142, 1, 1);

            }else if(this.state=="atordoado"){
                if(this.frame>20){
                    this.frame=0;
                    this.state="vivo";
                }
                drawImage(listImgs.caranguejo3, this.x-35, this.y-71, 142, 142, 1, 1);

            }else if(this.state=="dano"){
                if(this.frame>10){
                    this.frame=0;
                    if(this.vida>4){
                        this.vida=this.vida-1
                        this.state="vivo";
                    }else{
                        this.state="morto"; 
                        funSound(2);
                    } 
                }
                drawImage(listImgs.caranguejo3, this.x-35, this.y-71, 142, 142, 1, 1);

            }else if(this.state=="vivo"){

                this.x=this.x+this.direction*3;
                if(this.x<this.origemX-45){
                    this.direction = 1
                }else if(this.x>this.origemX+45){
                    this.direction = -1
                }

                    if(this.frame==0){
                        drawImage(listImgs.caranguejo, this.x-35, this.y-71, 142, 142, 1, 1);
                    }else if(this.frame==1){
                        drawImage(listImgs.caranguejo2, this.x-35, this.y-71, 142, 142, 1, 1);
                    }else if(this.frame==2){
                        drawImage(listImgs.caranguejo, this.x-35, this.y-71, 142, 142, 1, 1);
                    }else{
                        this.frame=0
                        drawImage(listImgs.caranguejo2, this.x-35, this.y-71, 142, 142, 1, 1);
                }
            }
          }else if(this.skin==4){
            // Crocodilo
            
            this.frame = this.frame+1;

            if(this.state=="morto"){
                if(this.frame>150){
                    this.frame=0;
                    this.state="vivo";
                    //this.state=="vivo"
                    //interacao.splice(i, 1);
                }
                drawImage(listImgs.crocodilo6, this.x-35, this.y-+this.frame-71, 142, 142, 1, 1);

            }else if(this.state=="atordoado"){
                if(this.frame>20){
                    this.frame=0;
                    this.state="vivo";
                }
                drawImage(listImgs.crocodilo5, this.x-35, this.y-71, 142, 142, 1, 1);

            }else if(this.state=="dano"){
                if(this.frame>10){
                    this.frame=0;
                    if(this.vida>2){
                        this.vida=this.vida-1
                        this.state="vivo";
                    }else{
                        this.state="morto"; 
                    } 
                }
                drawImage(listImgs.crocodilo5, this.x-35, this.y-71, 142, 142, 1, 1);

            }else if(this.state=="vivo"){

                if(this.frame<2){
                    //parado
                    drawImage(listImgs.crocodilo0, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<5){
                     //parado
                    drawImage(listImgs.crocodilo1, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<8){
                    this.x=this.x+2
                    drawImage(listImgs.crocodilo2, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<12){
                    this.x=this.x+2
                    drawImage(listImgs.crocodilo3, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<15){
                    this.x=this.x+2
                    drawImage(listImgs.crocodilo2, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<18){
                    this.x=this.x+2
                    drawImage(listImgs.crocodilo3, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<21){
                    this.x=this.x+3
                    drawImage(listImgs.crocodilo2, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<24){
                    this.x=this.x+3
                    drawImage(listImgs.crocodilo3, this.x-35, this.y-71, 142, 142, 1, 1);
                }else if(this.frame<29){
                    this.x=this.x-8
                    drawImage(listImgs.crocodilo4, this.x-35, this.y-71, 142, 142, 1, 1);                    
                }else{
                    this.frame=-1
                    this.x=this.x-6
                    drawImage(listImgs.crocodilo4, this.x-35, this.y-71, 142, 142, 1, 1);
                }
            }


          }else if(this.skin==5){
            // Moreia ------------------------------------------
            this.frame = this.frame+1;

            if(this.state=="morto"){
                if(this.frame>200){
                    this.frame=0;
                    this.state=="vivo"
                    //interacao.splice(i, 1);
                }
                drawImage(listImgs.tubarao5, this.x, this.y+this.frame, 80, 40, 1, 1);

            }else if(this.state=="atordoado"){
                if(this.frame>10){
                    this.frame=0;
                    this.state="vivo"
                }
                drawImage(listImgs.tubarao4, this.x, this.y-5, 80, 40, 1, 1);

            }else if(this.state=="dano"){
                if(this.frame>10){
                    this.frame=0;
                    if(this.vida>0){
                        this.vida=this.vida-1
                        this.state="vivo";
                    }else{
                        this.state="morto"; 
                    } 
                }
                drawImage(listImgs.tubarao4, this.x, this.y, 80, 40, 1, 1);

            }else if(this.state=="vivo"){
                
                this.x=this.x+this.direction*3;
                this.y=this.y+this.direction*2;
                if(this.x<this.origemX-60){
                    this.direction = 1
                }else if(this.x>this.origemX+60){
                    this.direction = -1
                }
                
                if(this.frame>11){
                    //12
                    this.frame=0
                    drawImage(listImgs.tubarao, this.x, this.y, 80, 40, 1, 1);
                }else if(this.frame>10){
                    //10,11
                    drawImage(listImgs.tubarao, this.x, this.y, 80, 40, 1, 1);
                }else if(this.frame>6){
                    //7,8,9
                    drawImage(listImgs.tubarao2, this.x, this.y, 80, 40, 1, 1);
                }else if(this.frame>3){
                    //4,5,6
                    drawImage(listImgs.tubarao3, this.x, this.y, 80, 40, 1, 1);
                }else{
                    //1,2,3
                    drawImage(listImgs.tubarao2, this.x, this.y, 80, 40, 1, 1);
                }
            }
  
          }else{
            drawImage(listImgs.caranguejo, this.x-40, this.y, 80, 40, 1, 1);
          }
          debugArea("cenario00"+temSkin, this.x,this.y,this.width,this.height);
        },
    };
  }
  
  function initSolidos(){
    console.log("initSolidos() = solidos, decoração e inimigos")
    let correctL = 0;

    for (let l = 5; l >= 0; l--) {
      for (let c = 0; c < 19; c++) {
  
        if (fazes[fazeatual].solidos[l][c]!==0){
          let bloco = initSolido(fazes[fazeatual].solidos[l][c],c*140,l*70)
          solidos.push(bloco);
        }
        
        if (fazes[fazeatual].decoracao[l][c]!==0){
          let decoraco = initDecoracao(fazes[fazeatual].decoracao[l][c],c*140,l*70)
          decoracoes.push(decoraco);
        }
        
        if (fazes[fazeatual].interacao[l][c]!==0){
          if(fazes[fazeatual].interacao[l][c]==5){
            correctL = (l*72)-(20); // Moreia
          } else {
            correctL = l*72;
          }
          let itemInteracao = initInteracao(fazes[fazeatual].interacao[l][c],c*155,correctL)
          interacao.push(itemInteracao);
        }
  
      }
    }
  }
  
  function movefaze(tempDirect){
    if(tempDirect<0 && positFazex>0 && player.x-positFazex<canvas.width/2){
        positFazex=positFazex+tempDirect;
        
    }else if(tempDirect>0 && positFazex<1700 && player.x>canvas.width/2){
        positFazex=positFazex+tempDirect;
        
    }  
  }
  
  function updateGame() {
    if(pause){

      //ctx.save();
      //ctx.drawImage(listImgs.fundopapiro, 0, 0, 862, 420);

      if(gameover){
        ctx.font = '50px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("Game Over", 200, 400);
        vida=3;
        setTimeout(() => winOpen('menu'), 100)
      }else{
        ctx.font = '50px Comic Sans MS';
        ctx.fillStyle = "white";
        ctx.fillText("PAUSE", 250, 400);
      }
      

    }else{
  
      
      ctx.save();
      checkColidBonus();
      drawWallpapers();

      for (let i = 0; i < solidos.length; i++) {
        solidos[i].draw(); // Desenhar todos os solidos da faze
      }
  
      for (let i = 0; i < decoracoes.length; i++) {
        decoracoes[i].draw(); // Desenhar todos os solidos da faze
      }
      for (let i = 0; i < interacao.length; i++) {
        interacao[i].draw(); // Desenhar todos os solidos da faze
      }
    
      

      papagaio.draw(); // desenhar papagio.
      player.draw(); // desenhar piratinha.

      /*
      //--tratando-gravidade-----------------------------------------
      if(player.state=="caindo" || player.state=="voadora"){
        for (let i = 0; i < solidos.length; i++) {
          if(checkColidFloor(player,solidos[i])){
            player.y = solidos[i].y-20
            player.state="parado";
          }
        }
      }else if(player.state=="andando" || player.state=="parado"){
        player.y = player.y + 5;
        let cair=true;
        //player.state=="caindo"
        for (let i = 0; i < solidos.length; i++) {
          if(checkColidFloor(player,solidos[i])){
            player.y = player.y - 5;
            cair = false;
          }
        }
        if(cair){
          player.state="caindo";
        }
      }
      */

      ctx.restore();
      drawDetail();
  
      // Interface
      ctx.drawImage(listImgs.interface, 0, 0, canvas.width, 60); // width:862 / height:420
      if (vida>0){
        ctx.drawImage(listImgs.vida, 610, 4, 40, 40);
      }
      if (vida>1){
        ctx.drawImage(listImgs.vida, 670, 4, 40, 40);
      }
      if (vida>2){
        ctx.drawImage(listImgs.vida, 730, 4, 40, 40);
      }
      //spanslife.innerText = vida;
      //spanscore.innerText = score;
      ctx.font = '18px Comic Sans MS';
      ctx.fillStyle = "white";
      ctx.fillText("ponto : "+score, 40, 35);
      ctx.fillText(vida, 780,35);
  
      //requestAnimationFrame(updateGame);
      setTimeout(() => updateGame(), 90) // Processar novamente esta função em 10 segundos
    }
  }
  
  
  //--Verificando-colisao-com-chao------------------------------------
  function checkColidFloor(box1,box2) {
        if(box1.x+box1.width > box2.x &&
        box1.x < box2.x+box2.width &&
        box1.y+box1.height > box2.y &&
        box1.y < box2.y+box2.height){
          //tocou     
          return true
        }
  }
  /*
  //--Verificando-colisao-inimigo------------------------------------
  function checkColid(box1,box2) {
        if(box1.x+box1.width > box2.x &&
        box1.x < box2.x+box2.width &&
        box1.y+box1.height > box2.y &&
        box1.y < box2.y+box2.height){
          
          return true
        }
  }
  */
  
function resetvars(){
  solidos.length = 0;
  decoracoes.length = 0;
  interacao.length = 0;
  score=0;
  positFazex = 0;
  player.x = 20; ///canvas.width/2,
  player.y = 220; //canvas.height-140,
  player.state="caindo";
  papagaio.x = 10; ///canvas.width/2,
  papagaio.y = 200; //canvas.height-140,
}


function initFaze(){
  funSound(1);
  vida=3;
  resetvars()
  initSolidos();
  winClose('menu')
}


function proximaFase(){
  //vida=3;
  resetvars()
  if(fazeatual<8){
      fazeatual++;
  }else{
      fazeatual=0;
  }
  initSolidos();
  pause = true;
  OpemMapa()
  //ActionPause();
  
}
  
  
  function limites(){
    let barrado = false
    //player.x-positFazex
    if(papagaio.y<0){
        papagaio.y=1;
    }else if(papagaio.y>390){
        papagaio.y=390;
    }else if(papagaio.x<positFazex){
        papagaio.x=positFazex+2;
    }else if(papagaio.x>positFazex+800){
        papagaio.x=positFazex+800;
    }   

    if(player.y<0){
      player.y=1;
      player.state="parado";
    }else if(player.y>390){
      player.y=380;
      player.state="parado";
    }
    if(player.x<0){
      barrado=true
      player.x=player.x+player.speed
    }else if(player.x>2585){
      proximaFase();
    }



    return barrado
  }
  
  
  //--Verificando-colisao-coma-parede----------------------------------
  function checkColidWall() {
    let colidiu = false
    if(limites()){
      colidiu=true
    }else{
      for (let i = 0; i < solidos.length; i++) {
        //y:player.y-player.height-2
        let box1 = {x:player.x,y:player.y, width:player.width, height:player.height}
        let box2 = {x:solidos[i].x,y:solidos[i].y, width:solidos[i].width, height:solidos[i].height}
        if(box1.x+box1.width > box2.x &&
          box1.x < box2.x+box2.width &&
          box1.y+box1.height > box2.y &&
          box1.y < box2.y+box2.height){
            //tocoua
            colidiu=true
        }
      }
    }
    return colidiu
  }
  

  //--Verificando-colisao-espada-no-inimigo----------------------------------
  function checkColidSword() {
    for (let i = 0; i < interacao.length; i++) {
      if(interacao[i].skin==3 || interacao[i].skin==4 || interacao[i].skin==5){
        if(interacao[i].state=="vivo" || interacao[i].state=="atordoado"){
            let box1 = {x:player.x-player.width,y:player.y-player.height-2, width:player.width*3, height:player.height*2}   
            let box2 = {x:interacao[i].x,y:interacao[i].y, width:interacao[i].width, height:interacao[i].height*2}
            if(box1.x+box1.width > box2.x &&
            box1.x < box2.x+box2.width &&
            box1.y+box1.height > box2.y &&
            box1.y < box2.y+box2.height){
                //Bateu com a espada  
                score=score+1
                interacao[i].state = "dano";
                funSound(4);
            }
        }
      }
    }
  }
  
  //--Verificando-colisao-bonus----------------------------------
  function checkColidBonus() {

    for (let i = 0; i < interacao.length; i++) {
        //Player (Nota: Preciso rever isto.)
        //let box1 = {x:player.x-player.width,y:player.y-player.height-2, width:player.width*2, height:player.height*2}
        let box1 = {x:player.x,y:player.y, width:player.width, height:player.height}   
        //Inimigos
        let box2 = {x:interacao[i].x,y:interacao[i].y, width:interacao[i].width, height:interacao[i].height}

        if(papagaio.x+papagaio.width > box2.x &&
            papagaio.x < box2.x+box2.width &&
            papagaio.y+papagaio.height > box2.y &&
            papagaio.y < box2.y+box2.height){
              
              if(interacao[i].skin==1 && vida<3){
                    vida = vida+1;
                    interacao.splice(i, 1); 
              } else if(interacao[i].skin==3 || interacao[i].skin==4 || interacao[i].skin==5){
                //papagaio atordoa inimigo
                if(interacao[i].state=="vivo"){
                    interacao[i].state = "atordoado"; // "dano";
                }
              }else if(interacao[i].skin==2 ){
                funSound(3);
                //Pegou bonus
                score=score+3
                //spanscore.innerText = score;
                //interacao[i].y = box2.y-10
                interacao.splice(i, 1);     
              }   
        }

        if(box1.x+box1.width > box2.x &&
          box1.x < box2.x+box2.width &&
          box1.y+box1.height > box2.y &&
          box1.y < box2.y+box2.height){
            if(interacao[i].skin==1 && vida<3){
                vida = vida+1;
                interacao.splice(i, 1); 
            } else if(interacao[i].skin==3 || interacao[i].skin==4 || interacao[i].skin==5){
              //player tocou inimigo (Nota: estes calculos não estão corretos.)
              if(player.cafecomleite==0){ 
                if(player.state!="dano" && interacao[i].state=="vivo"){
                  vida = vida-1
                  //spanslife.innerText = vida;
                  if(vida<1){
                    player.state = "morrendo";
                    funSound(2);
                  }else{
                    player.state = "dano"; 
                    funSound(4);
                    //interacao.splice(i, 1);    
                  }
                }
              }else{
                console.log("cafe com leite");
              }
            }else if(interacao[i].skin==2 ){
              funSound(3);
              //Pegou bonus
              score=score+3
              //spanscore.innerText = score;
              //interacao[i].y = box2.y-10
              interacao.splice(i, 1);     
            }         
        }
    }
  }
  
 
  function ActionPause(){
    if(pause){
      //pause=false;
      winClose('pause'); // esconder menu de pause
      //updateGame();
    }else{
      winOpen('pause');
      pause=true;
      //updateGame();
    }
  }
  
  //----Escutadores---------------------------------------
  document.addEventListener('keydown', (event) => {
    if(event.key=='ArrowLeft'|| event.key=='a'||event.key=='A'){
      player.ActionMoveLeft()
    }else if(event.key=='ArrowRight'|| event.key=='d'||event.key=='D'){
      player.ActionMoveRight()
    }else if(event.key=='ArrowUp'|| event.key=='w'||event.key=='W'){
      player.ActionUp();
    }else if(event.key=='ArrowDown'|| event.key=='s'||event.key=='S'){
      player.ActionBelow();
    }else if(event.key=='f'||event.key=='t'||event.key=='F'||event.key=='T'){
        player.ActionBate()
    }else if(event.key=='j'||event.key=='J'){
        papagaio.ActionMoveLeft()
    }else if(event.key=='l'||event.key=='L'){
        papagaio.ActionMoveRight()
    }else if(event.key=='i'||event.key=='I'){
        papagaio.ActionUp();
    }else if(event.key=='k'||event.key=='K'){
        papagaio.ActionBelow();
    }else if(event.key=='p'||event.key=='P'){
        ActionPause();
    }else if(event.key=='m'||event.key=='M'){
      if(debug){
        player.state="morrendo";
      }
    }else if(event.key=='n'||event.key=='N'){
      if(debug){
        debug=false;  
      }else{
        debug=true;
      }  
    }
  });
  
  document.addEventListener('keyup', (event) => {
    if(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'a' || event.key == 'd' || event.key == 'w' || event.key == 's'  || event.key == 'A' || event.key == 'D' || event.key == 'W' || event.key == 'S' ){
      player.ActionStop();
    }
  });
  
  carregarImagens();
  initSolidos();
  initJoystick();
  funSound(1); 

  //updateGame();
  //winOpen('menu');
  //setTimeout(() => winOpen('help'), 90) // Processar novamente esta função em 10 segundos