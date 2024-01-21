//--Incluir-jogador2-------------------------------------------- 
const papagaio = {
    x: 10,//canvas.width/2,
    y: 200,//canvas.height-140,
    imgx: canvas.width/2,
    width : 80,
    height : 80,
    size: 100,
    speed: 15, // velocidade do player
    direction: 1, // Direita esquerda
    state : "parado", // Parado, andando01, andando 02
    voo: 0,
    frame : 0,
    draw: function() {
        //this.x = player.x;
        //this.y = player.y-150;
        //this.direction = player.direction;
        //this.x = this.x + (this.speed*this.direction);
        //this.imgx = this.x-60
        if(this.voo>0){
            this.voo= this.voo-1
            if(this.state=="andando"){
                this.x = this.x + (this.speed*this.direction);
            }else if(this.state=="up"){
                this.y = this.y - this.speed;
            }else if(this.state=="Below"){
                this.y = this.y + this.speed;
            }
        }else{
            this.state="stop";
        }
        if(this.frame==0){
            this.frame=1;
            if(this.direction==1){
                drawImage(listImgs.papagaiol01, this.x-10, this.y-4, 100, 100, 1,1);
            }else{
                drawImage(listImgs.papagaior01, this.x-10, this.y-4, 100, 100, 1,1);
            }           
        }else{
            this.frame=0;
            if(this.direction==1){
                drawImage(listImgs.papagaiol02, this.x-10, this.y-4, 100, 100, 1,1);
            }else{
                drawImage(listImgs.papagaior02, this.x-10, this.y-4, 100, 100, 1,1);
            }
        }
        debugArea("papagaio", this.x,this.y,this.width,this.height);
    },   
    ActionMoveLeft: function() {
        this.voo = 10;
        this.direction = -1;
        this.state="andando";
    },
    ActionMoveRight: function() {
        this.voo = 10;
        this.direction = 1;
        this.state="andando";
    },
    ActionUp: function() {
        //this.frame=0; 
        this.voo = 10;
        this.state="up";     
    },
    ActionStop: function() {
        this.voo = 0;
        this.state="stop";
    },
    ActionBelow: function() {
        //this.frame=0;
        this.voo = 10;
        this.state="Below";
    }
  }