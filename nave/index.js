'use client';

import React from 'react'
import Image from 'next/image'
//import Script from 'next/script'; // Este componente precisa ser chamado em um server component.
import Div from '../../atoms/atDiv';
//import ImgVVC from '../../atoms/atImg'
//import BtLink from '../../atoms/atBtLink';
//import Head from 'next/head';
//import * as Cookie from '../../../controller/cookie.js';

const orgNave = function (props) {

  const regiao = props.regiao;

  function lingua(X, Y) {
      if(regiao=="en"){
        return Y;
      } else {
        return X;
      };
  }

  const pixel3d=10;
  var renderer; //= new THREE.WebGLRenderer();
  var x,  y, scene, avatar, chao, chao2, lazer, lazer2, fundCeuMart; 
  var fundCeu, objExplosao, camera, lazerObj1, lazerObj2;
  var gameover=false;
  var listNavesInimigas=[];
  var geometry=[];
  var material=[];
  var materialCeu=[];
  var largura,altura;
  var movimentox=0;
  var movimentoy=0;
  var statExplosao = 0;
  var bati = false;
  var mateiInimigo = -1;
  var indexPositInimigox = 0;
  var indexPositInimigoy = 0;
  var listaPositx = [100, -50, 0, 50,-100];
  var listaPosity = [100,50,5];
  var varDirecao = ""
  var atirando=1;

  function initMaterial(){
    
      const loader = new THREE.TextureLoader();
      
      //textura solo
      const urlImgTextureSoloMarte = loader.load('/cristalbot/texturas/textSoloMartRelevo.jpg');
    
      //textura nave
      const urlImgNave = loader.load('/cristalbot/texturas/textura_nave_espacial.jpg');
      const urlImgNaveVerde = loader.load('/cristalbot/texturas/textura_nave_espacial_verde.jpg');
      const urlImgNaveVermelho = loader.load('/cristalbot/texturas/textura_nave_espacial_vermelho.jpg');
      const urlImgNaveLuz = loader.load('/cristalbot/texturas/textura_nave_espacial_luz.jpg');
      
      //sprits
      const urlImgCeuLua = loader.load('/cristalbot/texturas/ceu_Lua.jpg'); // Comida
      const urlImgCeuMarte = loader.load('/cristalbot/texturas/ceu_Marte.jpg'); // Comida
      const urlImgCeuMercurio = loader.load('/cristalbot/texturas/ceu_Mercurio.jpg'); // Comida
      const urlImgCeuPlutao = loader.load('/cristalbot/texturas/ceu_Plutao.jpg'); // Comida
      const urlImgCeuVenus = loader.load('/cristalbot/texturas/ceu_Venus.jpg'); // Comida
      
      const urlImgExplosao1 = loader.load('/cristalbot/texturas/explosao_001.png'); // Explosao
      const urlImgExplosao2 = loader.load('/cristalbot/texturas/explosao_002.png'); // Explosao
      const urlImgExplosao3 = loader.load('/cristalbot/texturas/explosao_003.png'); // Explosao
      const urlImgExplosao4 = loader.load('/cristalbot/texturas/explosao_004.png'); // Explosao
      const urlImgExplosao5 = loader.load('/cristalbot/texturas/explosao_005.png'); // Explosao
      const urlImgExplosao6 = loader.load('/cristalbot/texturas/explosao_006.png'); // Explosao
      const urlImgGameOver  = loader.load('/cristalbot/texturas/game_over.png'); // Fim de Jogo
    
      material[0] = new THREE.MeshPhongMaterial({ 
        map: urlImgNave,
        bumpMap: urlImgNave,
        specular: 0x010101,
        emissive: 0xffffff,
        emissiveMap: urlImgNaveLuz
      }); // Textura da rua e do terreo.
      material[0].bumpScale=0.5; // intencidade do profundidade
      material[0].shininess=100; // Brilho máximo.
    
      material[1] = new THREE.MeshPhongMaterial({ 
        map: urlImgNaveVerde,
        bumpMap: urlImgNave,
        specular: 0x010101,
        emissive: 0xffffff,
        emissiveMap: urlImgNaveLuz
      }); // Textura da rua e do terreo.
      material[1].bumpScale=0.5; // intencidade do profundidade
      material[1].shininess=100; // Brilho máximo.
    
    
      material[2] = new THREE.MeshPhongMaterial({map: urlImgNaveVermelho, bumpMap: urlImgNave}); // Material nave vermelha.
      material[2].bumpScale=0.5;
      
      //material[3] = new THREE.MeshBasicMaterial( { map: urlImgCeuMarte, color: 0xffffff } ); // Ceu
      material[3] = new THREE.MeshLambertMaterial({ color: "rgb(255,0,0)"});
      material[4] = new THREE.MeshLambertMaterial({ color: "rgb(158,0,0)"});
      material[5] = new THREE.MeshLambertMaterial({ color: "rgb(98,0,0)"});
      material[6] = new THREE.MeshPhongMaterial({ color: 0xffff00});
    
      material[7] = new THREE.MeshLambertMaterial({map: urlImgTextureSoloMarte}); // Textura solo marte. 
      //material[7] = new THREE.MeshPhongMaterial({map: urlImgTextureSoloMarte, bumpMap: urlImgTextureSoloMarte}); // Material solo marte.
      material[7].bumpScale=0.3;
      material[7].shininess = 1; // Brilho minimo.
      
      material[8] = new THREE.SpriteMaterial( { map: urlImgExplosao1, color: 0xffffff } ); 
      material[9] = new THREE.SpriteMaterial( { map: urlImgExplosao2, color: 0xffffff } ); 
      material[10] = new THREE.SpriteMaterial( { map: urlImgExplosao3, color: 0xffffff } ); 
      material[11] = new THREE.SpriteMaterial( { map: urlImgExplosao4, color: 0xffffff } ); 
      material[12] = new THREE.SpriteMaterial( { map: urlImgExplosao5, color: 0xffffff } ); 
      material[13] = new THREE.SpriteMaterial( { map: urlImgExplosao6, color: 0xffffff } ); 
    
      materialCeu[0] = new THREE.MeshBasicMaterial( { map: urlImgCeuLua, color: 0xffffff } ); // Ceu
      materialCeu[1] = new THREE.MeshBasicMaterial( { map: urlImgCeuMarte, color: 0xffffff } ); // Ceu
      materialCeu[2] = new THREE.MeshBasicMaterial( { map: urlImgCeuMercurio, color: 0xffffff } ); // Ceu
      materialCeu[3] = new THREE.MeshBasicMaterial( { map: urlImgCeuPlutao, color: 0xffffff } ); // Ceu
      materialCeu[4] = new THREE.MeshBasicMaterial( { map: urlImgCeuVenus, color: 0xffffff } ); // Ceu
    
      /*
      material[18] = new THREE.MeshPhongMaterial({ 
        map: urlImgTextureRobo,
        bumpMap: urlImgTextureRoboBump,
        specular: 0x010101,
        emissive: 0xffffff,
        emissiveMap: urlImgTextureRoboLuz
      }); // Textura da rua e do terreo.
      material[18].bumpScale=0.3; // intencidade do profundidade
      material[18].shininess=100; // Brilho máximo.
      */
        
  }
    
    
  function initLight(){
    
      ///=luz=AMBIENTE===========================================================
      scene.add(new THREE.AmbientLight( 0x774411, 0.5));
    
      ///=luz=DirecionaL=1===========================================================
      const luz1 = new THREE.DirectionalLight( 0xffffff, 1 ); //DirectionalLight( color, intensity)
      //luz1[2] = new THREE.DirectionalLight("rgb(255,255,255)");
      //luz1[2] = new THREE.DirectionalLight()
      luz1.position.x = -500;
      luz1.position.y = 150;
      luz1.position.z = 100;
      
      luz1.castShadow = true // Abilitar as sombra
    
      //castShadow
      //Se definido como true, lançará sombras dinâmicas.
      //Aviso: Isso é caro e requer ajustes para que      as sombras pareçam corretas.
      //Consulte o DirectionalLightShadow para obter detalhes.
      //O padrão é falso.
    
      //luz1.shadow.mapSize.width = 1500;
      //luz1.shadow.mapSize.height = 1500;
      //luz1.shadow.camera.near = 0.0;
      //luz1.shadow.camera.far = 1000;
      scene.add(luz1);
    
      // Criar um helper da luz
      //const helperLuz = new THREE.DirectionalLightHelper( luz1, 500 );
      const helperLuz = new THREE.CameraHelper(luz1.shadow.camera)
      scene.add(helperLuz);
    
    
    
      ///=luz=dIRECIONAL=2============================================================
      var luz2 = new THREE.DirectionalLight( 0x000055, 0.2 ); //DirectionalLight( color, intensity)
      //luz1[2] = new THREE.DirectionalLight("rgb(255,255,255)");
      //luz1[2] = new THREE.DirectionalLight()
      luz2.position.x = 500;
      luz2.position.y = 150;
      luz2.position.z = 100;
    
      luz2.castShadow = true // Sombra
      luz2.shadow.mapSize.width = 1500;
      luz2.shadow.mapSize.height = 1500;
      luz2.shadow.camera.near = 0.0;
      luz2.shadow.camera.far = 1000;
      scene.add(luz2);
    
      // Criar um helper da luz
      const helperLuz2 = new THREE.DirectionalLightHelper( luz2, 500 );
      //const helperLuz2 = new THREE.CameraHelper(luz1.shadow.camera)
      scene.add(helperLuz2);
    
  }
    
  function initCamera(){
      // Camera
      camera = new THREE.PerspectiveCamera( 50, largura / altura, 1, pixel3d*10000 );
      scene.add(camera);
      camera.position.x = 0;
      camera.position.y = 40;
      camera.position.z = 180;
      camera.lookAt(0, 70, 0);	//camera.lookAt(2, 9,-21);
      // Criar um target para a camera. controls.target.set()
  }
    
  function initLazer(){
      const lazerGeometry = new THREE.BoxGeometry(5,5,800); // Avatar
      const materialLazer = new THREE.MeshBasicMaterial( { color: 0xff0000 } ); // 
      lazerObj1 = new THREE.Mesh( lazerGeometry, materialLazer);
      lazerObj1.position.x = 40;
      lazerObj1.position.y = 0;
      lazerObj1.position.z = -400;
      lazerObj2 = new THREE.Mesh( lazerGeometry, materialLazer);
      lazerObj2.position.x = -40;
      lazerObj2.position.y = 0;
      lazerObj2.position.z = -400;
      lazer = new THREE.Group();
      lazer.add(lazerObj1)
      lazer.add(lazerObj2)
      scene.add(lazer);
  }
    
  function initCenario(){
    
      // Ceu de marte - Sprit
      fundCeu = new THREE.Sprite( materialCeu[1] );	
      fundCeu.scale.set(5000, 1700, 1);
      fundCeu.position.x = 0;
      fundCeu.position.y = 750;
      fundCeu.position.z = -2200;
      fundCeu.rotation.x = 0.15;
      scene.add(fundCeu);
    
      //=Chao==============================================================
      const chaoGeometry = new THREE.BoxGeometry(1500,10,1500);
      chao = new THREE.Mesh( chaoGeometry, material[7] );
      chao.position.x = 0;
      chao.position.y = -60;
      chao.position.z = -1590;
      chao.receiveShadow = true; // Sombra
      //listObjEmCena[1].castShadow = true; // gerar sombra em outros objetos
      scene.add(chao);
    
      chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      chao2.position.x = 0;
      chao2.position.y = -60;
      chao2.position.z = 0;
      chao2.receiveShadow = true; // Sombra
      //listObjEmCena[1].castShadow = true; // gerar sombra em outros objetos
      scene.add(chao2);
  }
    
    
  function criaExplosao(){
      objExplosao = new THREE.Sprite( material[8]); //material[8]	
      objExplosao.position.x = 0;
      objExplosao.position.y = -500;
      objExplosao.position.z = 0;	
      objExplosao.scale.set(200, 200, 0);
      scene.add(objExplosao);
  }
    
  function animaExplosao(){
      if (bati){
        let num = 8+statExplosao
        objExplosao.material = material[num]; //material[8,9,10,11,12,13]
        objExplosao.position.x = avatar.position.x;
        objExplosao.position.y = avatar.position.y;
        objExplosao.position.z = avatar.position.z+35; // Mais atraz que a nave.
        if(statExplosao<5){
          statExplosao++;
        }else{
          gameover=true;
          statExplosao=0;
          bati = false;
          mateiInimigo=-1;
          DivGameOver.style.display = "block"; //Mostrar janela Game Over.
        }
      
      } else if (mateiInimigo>-1) {
        let num = 8+statExplosao
        objExplosao.material = material[num]; //material[8]	
        if(statExplosao==0){
          objExplosao.position.x = listNavesInimigas[mateiInimigo].position.x;
          objExplosao.position.y = listNavesInimigas[mateiInimigo].position.y;
          objExplosao.position.z = listNavesInimigas[mateiInimigo].position.z+35;
          listNavesInimigas[mateiInimigo].position.z=listNavesInimigas[mateiInimigo].position.z-1500;
          if(indexPositInimigox>4){indexPositInimigox=0}
          if(indexPositInimigoy>2){indexPositInimigoy=0}
          listNavesInimigas[mateiInimigo].position.x = listaPositx[indexPositInimigox++];
          listNavesInimigas[mateiInimigo].position.y = listaPosity[indexPositInimigoy++];
        }
        if(statExplosao<5){
          objExplosao.position.z = objExplosao.position.z+2;
          statExplosao++;
        }else{
          statExplosao=0;
          bati = false;
          mateiInimigo=-1;
          objExplosao.position.y = -500
        }
      }	
  }
    
  
    
  function mudaCenario(tempCenario){
      //0=Lua, 1=Marte, 2=Mercurio, 3=Plutao, 4=Venus
      if(tempCenario=="Lua"){
        // Ceu de marte - Sprit
        fundCeu.material = materialCeu[0];
        //fundCeuMarte = new THREE.Sprite( materialCeu[0] );	
        //chao = new THREE.Mesh( chaoGeometry, material[7] );
        //chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      }else if(tempCenario=="Marte"){
        // Ceu de marte - Sprit
        fundCeu.material = materialCeu[1];
        //fundCeuMarte = new THREE.Sprite( materialCeu[1] );	
        //chao = new THREE.Mesh( chaoGeometry, material[7] );
        //chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      }else if(tempCenario=="Mercurio"){
        // Ceu de marte - Sprit
        fundCeu.material = materialCeu[2];
        //fundCeuMarte = new THREE.Sprite( materialCeu[2] );	
        //chao = new THREE.Mesh( chaoGeometry, material[7] );
        //chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      }else if(tempCenario=="Plutao"){
        // Ceu de marte - Sprit
        fundCeu.material = materialCeu[3];
        //fundCeuMarte = new THREE.Sprite( materialCeu[3] );	
        //chao = new THREE.Mesh( chaoGeometry, material[7] );
        //chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      }else{
        // Ceu de marte - Sprit
        fundCeu.material = materialCeu[4];
        //fundCeuMarte = new THREE.Sprite( materialCeu[4] );	
        //chao = new THREE.Mesh( chaoGeometry, material[7] );
        //chao2 = new THREE.Mesh( chaoGeometry, material[7] );
      }
    }
    
    
    function init(cenarioInicial){

      if(screen.width>screen.height){
        largura = screen.width/2; //largura=window.innerWidth-10;
        altura = screen.height/200*80;  //altura=largura/2; //window.innerHeight;
      }else{
        altura = screen.width/200*80;
        largura = screen.height/2;  
      }

  
      scene = new THREE.Scene(); // Criar a cena onde tudo será incluido
      scene.background = new THREE.Color(0x002100); // Definir uma cor de fundo.
    
      //src="http://threejs.org/build/three.min.js"
      //script src="https://threejs.org/examples/js/loaders/GLTFLoader.js"
      //script src="https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js"
      
      initRender();

      initMaterial();
      initLight();
      initCamera();
      initCenario();
      criaExplosao();
      initLazer();
      mudaCenario(cenarioInicial); //0=Lua, 1=Marte, 2=Mercurio, 3=Plutao, 4=Venus
      
      initGLTFNave()
    
  };
    
  function initRender(){


    //renderer = new THREE.WebGLRenderer({antialias : true}); //renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha = Fundo transparente.

    renderer.setSize(largura/2, altura/2); //Tamanho do canvas (240, 400).
    
    DivCanvasID.appendChild( renderer.domElement ); // Gera o CANVAS dentro da div.
    
    //document.body.appendChild( renderer.domElement );
    
    document.addEventListener("keydown", keyPush);
    

    renderer.domElement.style.height=altura+"px"; //"100%"; 
    renderer.domElement.style.width=largura+"px"; //"100%";
      
    /*
    //renderer.shadowMapEnabled = true;
    renderer.shadowMap.enabled = true //sombra
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; //Sombra
    */

  }
    
  function initGLTFNave(){
      //===================================================================================
      let urlObj3Dglb = "/cristalbot/3d/nave_espacial.glb";
      let loaderObj3D = new THREE.GLTFLoader();
      
      loaderObj3D.load( urlObj3Dglb, function ( gltf ) {	
    
        console.log("carregou o arquivo GLT nave espacial");
        avatar = new THREE.Mesh(gltf.scene.children[0].geometry, material[0]); 
        avatar.scale.x = 10;
        avatar.scale.y = 10;
        avatar.scale.z = 10;
        avatar.position.x = 0;
        avatar.position.y = 60;
        avatar.position.z = 0;
        avatar.castShadow = true; // gerar sombra em outros objetos
        scene.add(avatar);
    
        let i = 0;
    
        listNavesInimigas[i] = new THREE.Mesh(gltf.scene.children[0].geometry, material[1]); 
        listNavesInimigas[i].rotation.y = 3.10;
        listNavesInimigas[i].scale.x = 10;
        listNavesInimigas[i].scale.y = 10;
        listNavesInimigas[i].scale.z = 10;
        if(indexPositInimigox>4){indexPositInimigox=0}
        if(indexPositInimigoy>2){indexPositInimigoy=0}
        listNavesInimigas[i].position.x = listaPositx[indexPositInimigox++];
        listNavesInimigas[i].position.y = listaPosity[indexPositInimigoy++];
        //listNavesInimigas[i].position.x = 100;
        //listNavesInimigas[i].position.y = 100;
        listNavesInimigas[i].position.z = -100;
        listNavesInimigas[i].castShadow = true; // gerar sombra em outros objetos
        listNavesInimigas[i].direcao="vindo"
        scene.add(listNavesInimigas[i++]);
        
        listNavesInimigas[i] = new THREE.Mesh(gltf.scene.children[0].geometry, material[2]); 
        //listNavesInimigas[i].rotation.y = 3.10;
        listNavesInimigas[i].scale.x = 10;
        listNavesInimigas[i].scale.y = 10;
        listNavesInimigas[i].scale.z = 10;
        if(indexPositInimigox>4){indexPositInimigox=0}
        if(indexPositInimigoy>2){indexPositInimigoy=0}
        listNavesInimigas[i].position.x = listaPositx[indexPositInimigox++];
        listNavesInimigas[i].position.y = listaPosity[indexPositInimigoy++];
        //listNavesInimigas[i].position.x = -100;
        //listNavesInimigas[i].position.y = 100;
        listNavesInimigas[i].position.z = -300;
        listNavesInimigas[i].castShadow = true; // gerar sombra em outros objetos
        listNavesInimigas[i].direcao="indo"
        scene.add(listNavesInimigas[i++]);
    
        listNavesInimigas[i] = new THREE.Mesh(gltf.scene.children[0].geometry, material[1]); 
        //listNavesInimigas[i].rotation.y = 3.10;
        listNavesInimigas[i].scale.x = 10;
        listNavesInimigas[i].scale.y = 10;
        listNavesInimigas[i].scale.z = 10;
        if(indexPositInimigox>4){indexPositInimigox=0}
        if(indexPositInimigoy>2){indexPositInimigoy=0}
        listNavesInimigas[i].position.x = listaPositx[indexPositInimigox++];
        listNavesInimigas[i].position.y = listaPosity[indexPositInimigoy++];
    
        //listNavesInimigas[i].position.x = 20;
        //listNavesInimigas[i].position.y = 50;
        listNavesInimigas[i].position.z = -500;
        listNavesInimigas[i].direcao="indo"
        scene.add(listNavesInimigas[i++]);
    
        listNavesInimigas[i] = new THREE.Mesh(gltf.scene.children[0].geometry, material[2]); 
        listNavesInimigas[i].rotation.y = 3.10;
        listNavesInimigas[i].scale.x = 10;
        listNavesInimigas[i].scale.y = 10;
        listNavesInimigas[i].scale.z = 10;
        if(indexPositInimigox>4){indexPositInimigox=0}
        if(indexPositInimigoy>2){indexPositInimigoy=0}
        listNavesInimigas[i].position.x = listaPositx[indexPositInimigox++];
        listNavesInimigas[i].position.y = listaPosity[indexPositInimigoy++];
        //listNavesInimigas[i].position.x = -20;
        //listNavesInimigas[i].position.y = 0;
        listNavesInimigas[i].position.z = -700;
        listNavesInimigas[i].castShadow = true; // gerar sombra em outros objetos
        listNavesInimigas[i].direcao="vindo"
        scene.add(listNavesInimigas[i++]);
    
        DivIntro.style.display = "none"; // Esconder tela inicial.

        animate();
      });
  }
    
  function animate() {
    if(gameover!==true){
      animaPersonagem();
      animaInimigos();
      animaChao();
      colidNaves();
      animaLazer();
      animaExplosao();
      //camera.lookAt( avatar.position ); // Manter foco da camera no bloco branco
      renderer.render(scene, camera);
      requestAnimationFrame( animate ); //Chamar esta funcao novamente quando terminar.
    }
  }
    
  function animaLazer(){
      // && avatar.rotation.x!==0
      if(atirando>1){	
        atirando=atirando-1;
        lazer.position.x = avatar.position.x
        lazer.position.y = avatar.position.y-6
        lazer.position.z = avatar.position.z
        //lazer.rotation.x = avatar.rotation.x
        lazer.rotation.y = avatar.rotation.y
        lazer.rotation.z = avatar.rotation.z
      }else if(atirando==1){
        atirando=0;
        lazer.position.x = 0
        lazer.position.y = -500
        lazer.position.z = 0
        lazer.rotation.x = 0
        lazer.rotation.y = 0
        lazer.rotation.z = 0
        //scene.remove(lazer)
      }
  }
    
  function animaInimigos(){
      for(let i=0; i<4; i++)
      if(listNavesInimigas[i].position.z < 100){
        if(listNavesInimigas[i].direcao=="indo"){
          listNavesInimigas[i].position.z = listNavesInimigas[i].position.z+1;
        }else{
          listNavesInimigas[i].position.z = listNavesInimigas[i].position.z+10;
        }
        
      }else{
        if(indexPositInimigox>4){indexPositInimigox=0}
        if(indexPositInimigoy>2){indexPositInimigoy=0}
        listNavesInimigas[i].position.x = listaPositx[indexPositInimigox++];
        listNavesInimigas[i].position.y = listaPosity[indexPositInimigoy++];
        listNavesInimigas[i].position.z = -2000;
      }
      
    }
    
    function animaChao(){
      if(chao.position.z < 1500){
        chao.position.z = chao.position.z+7;
      }else{
        chao.position.z = -1500;
      }
      
      if(chao2.position.z <= 1500){
        chao2.position.z = chao2.position.z+7;
      }else{
        chao2.position.z = -1500;
      }
  }
      
  function keyPush(e) {
      //Ações do teclado.
      var varKey = e.key;
      var varkeyCode = e.keyCode
      if (varkeyCode === 37 || varkeyCode === 65 || varKey == "ArrowLeft") {
          //console.log("37=(<)esquerda / 65=a"); 
          varDirecao = "<-";
      } else if (varkeyCode === 39 || varkeyCode === 68 || varKey == "ArrowRight") {
          //console.log("39=(>)Direita / 68=d");
          varDirecao = "->";
      } else if (varkeyCode === 40 || varkeyCode === 83 || varKey == "ArrowDown") {
          //console.log("40=seta pra baixo / 83=s");    
          varDirecao = "re"; //"descer"
      } else if (varkeyCode === 87 || varkeyCode === 38 || varKey == "ArrowUp") {
          //console.log("30=seta pra cima / 87=w");
          varDirecao = "frente"; //"subir"
      } else if (varkeyCode === 82 || varKey == "r") {
          varDirecao = "subir"; //voar/subir/pular  
      } else if (varkeyCode === 70 || varKey == "f") {
          atirando=5;
      } else if (varkeyCode === 32 || varKey == " ") {
          varDirecao = "pula"; //moverPersonagem("pula"); //descer/abaixar 
      } else{
          console.log("varkeyCode:"+varkeyCode+" | varKey:"+varKey);
      }
      
  }
     
    
  function colidBox3d(rect1, rect2){
      if(rect1.x+rect1.width/2 > rect2.x-rect2.width/2 &&
      rect1.x-rect1.width/2 < rect2.x+rect2.width/2 &&
      rect1.y+rect1.height/2 > rect2.y-rect2.height/2 &&
      rect1.y-rect1.height/2 < rect2.y+rect2.height/2 &&
      rect1.z+rect1.depth/2 > rect2.z-rect2.depth/2 &&
      rect1.z-rect1.depth/2 < rect2.z+rect2.depth/2
      ){
        //tocou
        //console.log("tocou");
        return true;
      } 
      //não tocou
      return false;
  }
    
  function colidNaves(){
      let Tocou = false;
      for (let i=0; i<4; i++ ) {
        Tocou = colidBox3d(
            {
            "x":listNavesInimigas[i].position.x,
            "y":listNavesInimigas[i].position.y,
            "z":listNavesInimigas[i].position.z, 
            "width":80, 
            "height":30,
            "depth":28
            },
            {
            "x":avatar.position.x,
            "y":avatar.position.y,
            "z":avatar.position.z, 
            "width":80, 
            "height":30,
            "depth":28
            }
        );
        if(Tocou==true){
          bati = true;
          //respTocou = true//{Tocou:true, onde:i};
          mateiInimigo = i //mateiInimigo=colideForObjetos.onde;
          console.log("Tocou i="+i);
          i=10;
        }
      }
      if(atirando>0 && bati==false){
        for (let j=0; j<4; j++ ) {
          Tocou = colidBox3d(
              {
              "x":listNavesInimigas[j].position.x,
              "y":listNavesInimigas[j].position.y,
              "z":listNavesInimigas[j].position.z, 
              "width":80, 
              "height":30,
              "depth":28
              },
              {
              "x":avatar.position.x,
              "y":avatar.position.y,
              "z":avatar.position.z, 
              "width":70, 
              "height":25,
              "depth":1200
              }
          );
          if(Tocou==true){
            //bati = true;
            //respTocou = true//{Tocou:true, onde:i};
            mateiInimigo = j //mateiInimigo=colideForObjetos.onde;
            console.log("Explodiu o j="+j);
          }
        }
      }
      //return respTocou;
  }
    
  function moverCamera(positX, positY, positZ) {
      camera.position.x = positX;
      camera.position.y = positY+55;
      camera.position.z = positZ+200;
  }

  function animaPersonagem() {

      let tempVeloc = 2;
      if (varDirecao=="<-"){
          movimentox=-10;
      } else if (varDirecao=="->"){
          movimentox=10;
      } else if (varDirecao=="re"){
          movimentoy=-10;
      } else if (varDirecao=="frente"){
          movimentoy=10;
      }
      varDirecao="";
    
      if (movimentox<0){ //if (varDirecao=="<-"){
        movimentox++;
        if(avatar.position.x>-110){
          if(avatar.rotation.z<0.50){
            avatar.rotation.z=avatar.rotation.z+0.05;
          }
          avatar.position.x = avatar.position.x-tempVeloc;
        }
      }else if(movimentox>0){ // else if (varDirecao=="->"){
        movimentox--;
        if(avatar.position.x<110){
          if(avatar.rotation.z>-0.50){
            avatar.rotation.z=avatar.rotation.z-0.05;
          }
          avatar.position.x = avatar.position.x+tempVeloc;
        }
      }else{
        if(avatar.rotation.z>0.01){
          avatar.rotation.z=avatar.rotation.z-0.01;
        }else if (avatar.rotation.z<-0.01){
          avatar.rotation.z=avatar.rotation.z+0.01;
        }
      }
    
      if(movimentoy<0){ //if (varDirecao=="re"){
        movimentoy++;
        if(avatar.position.y > 20){
          if(avatar.rotation.x>-0.4){
            avatar.rotation.x=avatar.rotation.x-0.05;
          }
          avatar.position.y = avatar.position.y-tempVeloc;
        }
      }else if(movimentoy>0){ //else if (varDirecao=="frente"){
        movimentoy--;
        if(avatar.position.y < 120){
          if(avatar.rotation.x<0.4){
            avatar.rotation.x=avatar.rotation.x+0.05;
          }
          avatar.position.y = avatar.position.y+tempVeloc;
        }
      }else{
        if(avatar.rotation.x>0.01){
          avatar.rotation.x=avatar.rotation.x-0.01;
        }else if (avatar.rotation.x<-0.01){
          avatar.rotation.x=avatar.rotation.x+0.01;
        }
      }
      
      /*
      else if (varDirecao=="subir"){
    
        } else if (varDirecao=="descer"){	
    
        } 
       else if (varDirecao=="pula"){
    
        }
      //avatar.position.x = avatar.position.x;
      //avatar.position.y = avatar.position.y-6;
      //avatar.position.z = avatar.position.z;
      //moverCamera(avatar.position.x, avatar.position.y, listNavesInimigas[0].position.z);
      */

  }
  
  return (
    <div className="divNave">
    
      <div id="DivCanvasID">
        {/*<canvas id="canvasTetris" className="canvasTetris" width="120" height="200"></canvas>*/}
      </div>

      <div id="DivGameOver">
          <p>{lingua("FIM DE JOGO!","GAME HOVER!")}</p>
      </div>


      <div id="DivIntro">

        <h2>{lingua("Escolha um objeto astronômico:","Choose a astronomical object:")}</h2><br/>
        
        <Div display="justificado">

          <div onClick={() => { init("Lua") }} className="imgPlanetColor">
            <Image
              src="/cristalbot/interface/FotoLua.jpg"
              width="100"
              height="80"
              alt="Foto Lua"/>
            <div className="btLinkNeon"  >
            {lingua("Lua","Moon")}
            </div>
          </div>

          <div onClick={() => { init("Marte") }} className="imgPlanetColor" >
            <Image
              src="/cristalbot/interface/FotoMarte.jpg"
              width="100"
              height="80"
              alt="Foto Marte"/>
            <div className="btLinkNeon" > 
            {lingua("Marte","Mars")}
            </div>
          </div>

          <div onClick={() => { init("Mercurio") }} className="imgPlanetCinza">
            <Image  
            src="/cristalbot/interface/FotoMercurio.jpg"
            width="100"
            height="80"
             alt="Foto Mercurio"/>
            <div className="btLinkNeon" >
            {lingua("Mercurio","Mercury")}
            </div>
          </div>

          <div onClick={() => { init("Plutao") }} className="imgPlanetCinza">
            <Image 
            src="/cristalbot/interface/FotoPlutao.jpg" 
            width="100"
            height="80"
            alt="Foto Plutao"/>
            <div className="btLinkNeon" >
            {lingua("Plutão","Pluto")}
            </div>
          </div>

          <div onClick={() => { init("Venus") }} className="imgPlanetCinza">
            <Image 
            src="/cristalbot/interface/FotoVenus.jpg" 
            width="100"
            height="80"
            alt="Foto Venus"/>
            <div className="btLinkNeon" >
             Venus
            </div>
          </div>
          
        </Div>

      </div>

      <style jsx>{`
        
        #DivCanvasID{
          background-color: #ff0000;
        }

        #DivGameOver{
          position: relative;
          font-size: 50px;
          color: #ffffff;
          display : none;
          top: -400px;
          /*top: -438px; padding: 10px; margin-top : 0px;*/
          width: 75%;
          text-align: center;
          background-color: #050505;
         
        }
        
        #DivIntroa{
            font-size: 25px;
            background-color: #050505;
            width: 100%;
            text-align: center;
        }


        .btLinkNeon {

          border: solid 2px #00ffea;
          border-radius: 5px;

          padding: 5px;

          transition: all 0.8s;
          font-family: oiTextRegular, sans-serif;

          background-color:#00ffea;
          background: rgba(0, 255, 255, 0.2);

          color: #00ffea;
          display: block;
          font-size: 1rem; /*16px*/
          text-align: center;

          text-decoration: none;

          cursor: pointer;
          outline: 0;
          margin-right: 5px;
          margin-bottom: 5px; 
          box-sizing: border-box;
          font-style: normal;

          width: 100%;
          max-width: 500px;

        }
        .btLinkNeon:hover {

          transition: all 0.5s;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          color: #ffffff;
          border: solid 2px #ffffff;
          /*background-color: #ffffff;*/

        }

      `}</style>
    </div>
  )
}

export default orgNave
