//--Incluir-jogador-------------------------------------------- 
const player = {
    x: 10,//canvas.width/2,
    y: 200,//canvas.height-140,
    imgx: canvas.width/2,
    width : 50,
    height : 20,
    size: 100,
    speed: 8, // velocidade do player
    direction: 1, // Direita esquerda
    state : "parado", // Parado, andando01, andando 02
    frame : 0,
    draw: function() {
  
      debugArea("player", this.x,this.y,this.width,this.height)
      if(this.state=="andando"){
        this.x = this.x + (this.speed*this.direction);
        movefaze(this.speed*this.direction)
        if(checkColidWall()){
          this.x = this.x - (this.speed*this.direction);
          movefaze(-1*this.speed*this.direction)
        }
        //checkColidBonus();
        this.imgx = this.x-60
        if(this.frame==0){
          this.frame=1;
          drawImage(listImgs.playerandando01, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==1){
          this.frame=2;
          drawImage(listImgs.playerandando02, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==2){
          this.frame=3;
          drawImage(listImgs.playerandando03, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==3){
          this.frame=4;
          drawImage(listImgs.playerandando04, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==4){
          this.frame=5;
          drawImage(listImgs.playerandando05, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else{
          this.frame=0;
          drawImage(listImgs.playerandando06, this.imgx, this.y-70, 170, 100, this.direction,1);
        }
        
      }else if(this.state=="pulando"){
        this.y = this.y - (this.speed*2);
        if(limites()==false){
          this.x = this.x + (this.speed*this.direction)*2;
        }
        this.imgx = this.x-60
        //if(checkColidWall()){
        //  this.imgx = this.x+60
        //  this.x = this.x - (this.speed*this.direction)*2;
        //}
        movefaze((this.speed*this.direction)*2)
        //checkColidBonus();
        if(this.frame==0){
          this.frame=1;
          drawImage(listImgs.playerpulando01, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==1){
          this.frame=2;
          drawImage(listImgs.playerpulando02, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==2){
          this.frame=3;
          drawImage(listImgs.playerpulando03, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==3){
           this.frame=4;
          drawImage(listImgs.playerpulando04, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==4){
          this.frame=5;
          drawImage(listImgs.playerpulando02, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==5){
          this.frame=6;
          drawImage(listImgs.playerpulando03, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else{
          this.state="caindo"
          this.frame=0;
          puloduplo=false;
          drawImage(listImgs.playerpulando04, this.imgx, this.y-70, 170, 100, this.direction,1);
        }
  
      }else if(this.state=="caindo"){
        if(this.y>400){
          this.state="morrendo";
          this.frame=0;
        }else{
          this.y = this.y + (this.speed*2);
          if(limites()==false){
            this.x = this.x + (this.speed*this.direction);
          }
          this.imgx = this.x-60
          movefaze(this.speed*this.direction)
          //checkColidBonus();
          if(this.frame<3){
            this.frame++;
            drawImage(listImgs.playercaindo01, this.imgx, this.y-70, 170, 100, this.direction,1);
          }else{
            this.frame=0;
            drawImage(listImgs.playercaindo02, this.imgx, this.y-70, 170, 100, this.direction,1);
          }
        }
      }else if(this.state=="voadora"){
        if(this.y>400){
          this.state="morrendo";
          this.frame=0;
        }else{
          this.y = this.y + (this.speed*2);
          if(limites()==false){
            this.x = this.x + (this.speed*this.direction);
          }
          this.imgx = this.x-60
          movefaze(this.speed*this.direction)
          //checkColidBonus();
          if(this.frame<3){
            this.frame++;
            drawImage(listImgs.playerbatendo2, this.imgx, this.y-70, 170, 100, this.direction,1);
          }else{
            this.frame=0;
            drawImage(listImgs.playerbatendo1, this.imgx, this.y-70, 170, 100, this.direction,1);
          }
        }
        checkColidSword();
        
      }else if(this.state=="batendo"){
        if(this.frame==0){
          this.frame++;
          drawImage(listImgs.playerbatendo, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==2){
          this.frame++;
          drawImage(listImgs.playerbatendo1, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else{
          this.state="parado";
          this.frame=0;
          drawImage(listImgs.playerbatendo2, this.imgx, this.y-70, 170, 100, this.direction,1);
        }
  
   
        checkColidSword();
  
      }else if(this.state=="dano"){
        
        this.x = this.x - (this.speed*this.direction*2);
        movefaze(this.speed*this.direction*2); // mover a fase junto com personagem.

        this.imgx = this.x-60
        this.y = this.y-this.speed*2
  
        if(this.frame==0){
          this.frame=1;
          
          drawImage(listImgs.playerdano01, this.imgx, this.y-70, 170, 100, this.direction,1);
  
        }else if(this.frame==1){
          this.frame=2;
          drawImage(listImgs.playerdano01, this.imgx, this.y-70, 170, 100, this.direction,1);
         
        }else if(this.frame==2){
          this.frame=3;
          drawImage(listImgs.playerdano01, this.imgx, this.y-70, 170, 100, this.direction,1);
         
        }else if(this.frame==3){
          this.state="caindo"
          this.frame=0;
          drawImage(listImgs.playerdano02, this.imgx, this.y-70, 170, 100, this.direction,1);
          
          this.direction=-1*this.direction
        }
  
      }else if(this.state=="morrendo"){
        //this.imgx = this.x-60
        if(this.frame==0){
          this.frame=1;
          drawImage(listImgs.playerdano01, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==1){
          this.frame=2;
          drawImage(listImgs.playerdano02, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==2){
          this.frame=3;
          drawImage(listImgs.playermorrendo01, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==3){
           this.frame=4;
          drawImage(listImgs.playermorrendo02, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==4){
          this.frame=5;
          drawImage(listImgs.playermorrendo03, this.imgx, this.y-70, 170, 100, this.direction,1);
        }else if(this.frame==5){
          this.frame=6;
          drawImage(listImgs.playermorrendo04, this.imgx, this.y-70, 170, 100, this.direction,1);
          pause=true;
          gameover=true;
        }
      }else{
        this.state="parado";
        this.frame=0;
        drawImage(listImgs.playerparado, this.imgx, this.y-70, 170, 100, this.direction,1);
      }    
    },
    ActionMoveLeft: function() {
      if(this.state!="morrendo" && this.state!="dano"){ 
        this.direction = -1;
        if(this.state!="caindo" && this.state!="pulando"){
          this.state="andando";
        }
      }
    },
    ActionMoveRight: function() {
      if(this.state!="morrendo" && this.state!="dano"){ 
        this.direction = 1;
        if(this.state!="caindo" && this.state!="pulando"){
          this.state="andando";
        }
      }
    },
    ActionPula: function() {
      if(this.state!="morrendo" && this.state!="dano" && this.state!="caindo" && this.state!="pulando"){
        this.frame=0; 
        this.state="pulando";     
      }else if(this.state=="pulando" && !puloduplo){
            puloduplo=true
            this.frame=0; 
            this.state="pulando";
      }
    },
    ActionStop: function() {
      if(this.state!="morrendo"  && this.state!="dano" && this.state!="caindo" && this.state!="pulando"){
          this.state="parado";
      }
    },
    ActionBate: function() {
      if(this.state!="morrendo"  && this.state!="dano" && this.state!="caindo" && this.state!="pulando" && this.state!="voadora"){
        this.frame=0;  
        this.state="batendo";
      }else if(this.state=="caindo" || this.state!="pulando"){
        this.frame=0;
        this.state="voadora";
      }
    }  
  }