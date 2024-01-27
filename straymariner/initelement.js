
  
//---Instanciar-elementos-HTML---------------------------------------
const spanscore = document.getElementById('spanscore');
const spanslife = document.getElementById('spanslife');
const spandebug = document.getElementById('spandebug');

const idAudioAmbiente = document.getElementById('idAudioAmbiente');
const idAudioFX = document.getElementById('idAudioFX');

const canvas = document.getElementById('gameCanvas'); // instanciar canvas
const ctx = canvas.getContext('2d'); // contexto 2D
  
var varSomAtivo=true;

//--Instanciar-Controles----------------------------------------------
const joystickConteiner = document.getElementById("joystickConteiner");
const joystick = document.getElementById("joystickID");
const joystickConteiner2 = document.getElementById("joystickConteiner2");
const joystick2 = document.getElementById("joystickID2");
const butJoystickID1 = document.getElementById("butJoystickID1");
const butJoystickID2 = document.getElementById("butJoystickID2");

//---Declarar-variaveis---------------------------------------
var score = 0;
var vida = 3;
var solidos = []; // Varios solidos
var decoracoes = [];
var interacao = [];
var debug = false;
var gameover=false;     
var fazeatual = 0;
var positFazex = 0;
var pause = true;
var puloduplo=false;
let iniciado=false;
var listImgs = {};

//--Criar-um-novo-elemento-de-canvas-offscreen-----------------------------
//const canvas = document.createElement('gameCanvas');
//canvas.width = canvas.width;
//canvas.height = canvas.height;
//const offscreenCtx = canvas.getContext('2d');

/*
  listImgs={
      playerparado: instanciaImg('piratinha_poses_parado.png'),
      playerandando01: instanciaImg('piratinha_poses_correndo01.png'),
      playerandando02: instanciaImg('piratinha_poses_correndo02.png'),
      playerandando03: instanciaImg('piratinha_poses_correndo03.png'),
      playerandando04: instanciaImg('piratinha_poses_correndo04.png'),
      playerandando05: instanciaImg('piratinha_poses_correndo05.png'),
      playerandando06: instanciaImg('piratinha_poses_correndo06.png'),
      playerpulando01: instanciaImg('piratinha_poses_pulando01.png'),
      playerpulando02: instanciaImg('piratinha_poses_pulando02.png'),
      playerpulando03: instanciaImg('piratinha_poses_pulando03.png'),
      playerpulando04: instanciaImg('piratinha_poses_pulando04.png'),
      playercaindo01: instanciaImg('piratinha_poses_caindo01.png'),
      playercaindo02: instanciaImg('piratinha_poses_caindo02.png'),
  
      playerbatendo: instanciaImg('piratinha_poses_batendo00.png'),
      playerbatendo1: instanciaImg('piratinha_poses_batendo01.png'),
      playerbatendo2: instanciaImg('piratinha_poses_batendo02.png'),
  
      playerdano01: instanciaImg('piratinha_poses_dano01.png'),
      playerdano02: instanciaImg('piratinha_poses_dano02.png'),
      playermorrendo01: instanciaImg('piratinha_poses_morrendo01.png'),
      playermorrendo02: instanciaImg('piratinha_poses_morrendo02.png'),
      playermorrendo03: instanciaImg('piratinha_poses_morrendo03.png'),
      playermorrendo04: instanciaImg('piratinha_poses_morrendo04.png'),
  
      papagaiol01: instanciaImg('papagaio_01.png'),
      papagaiol02: instanciaImg('papagaio_02.png'),
      papagaior01: instanciaImg('papagaio_r01.png'),
      papagaior02: instanciaImg('papagaio_r02.png'),

      wallpaper1: instanciaImg('fundo1.jpg'),
      wallpaper2: instanciaImg('fundo2.jpg'),
      wallpaperBarco: instanciaImg('fundo_barco.png'),
      wallpaperIlha: instanciaImg('fundo_ilha.png'),
      wallpaperCaverna: instanciaImg('fundo_caverna.png'),
      wallpaperNavio: instanciaImg('fundo_navio.png'),

      bloco001: instanciaImg('bloco001.png'), // invisivel
      bloco002: instanciaImg('bloco002.png'), // mato
      bloco003: instanciaImg('bloco003.png'), // pedrta
      bloco004: instanciaImg('bloco004.png'), // ponte
      bloco005: instanciaImg('bloco005.png'), // arvore
      bloco006: instanciaImg('bloco006.png'), // navio
      bloco007: instanciaImg('bloco007.png'), // vela
      bloco008: instanciaImg('bloco008.png'), // parede navio

      interface: instanciaImg('interface.png'),
      vida: instanciaImg('vida.png'),
      fundopapiro: instanciaImg('fundo.jpg'),

      portal: instanciaImg('porta.png'),
      bonus: instanciaImg('bonus.png'),
      //inimigo: instanciaImg('caranguejo.png'),
      
      caranguejo: instanciaImg('caranguejo.png'),
      caranguejo2: instanciaImg('caranguejo2.png'),
      caranguejo3: instanciaImg('caranguejo3.png'),
      caranguejo4: instanciaImg('caranguejo4.png'),

      crocodilo0: instanciaImg('crocodilo_0.png'),
      crocodilo1: instanciaImg('crocodilo_1.png'),
      crocodilo2: instanciaImg('crocodilo_2.png'),
      crocodilo3: instanciaImg('crocodilo_3.png'),
      crocodilo4: instanciaImg('crocodilo_4.png'),
      crocodilo5: instanciaImg('crocodilo_5.png'),
      crocodilo6: instanciaImg('crocodilo_6.png'),
      
      tubarao: instanciaImg('tubarao.png'),
      tubarao2: instanciaImg('tubarao2.png'),
      tubarao3: instanciaImg('tubarao3.png'),
      tubarao4: instanciaImg('tubarao4.png'),
      tubarao5: instanciaImg('tubarao5.png'),

      cenario001: instanciaImg('cenario001.png'),
      cenario002: instanciaImg('cenario002.png'),
      cenario003: instanciaImg('cenario003.png'),
      cenario004: instanciaImg('cenario004.png'),
      cenario005: instanciaImg('cenario005.png'),
      cenario006: instanciaImg('cenario006.png'),
  
      logo: instanciaImg('logo_stray_marine.png')
    }

    winOpen('menu');
    */