

function somAtivo(){
  if(varSomAtivo){
    //idSomImg.style.backgroundImage = "url(/cristalbot/interface/Somx.png)"; //trocar imagem
    varSomAtivo=false;
    idAudioAmbiente.pause();
    idAudioFX.pause();
  }else{
    //idSomImg.style.backgroundImage = "url(/cristalbot/interface/Som.png)"; //trocar imagem
    varSomAtivo=true;
    idAudioAmbiente.play().catch(error => {
      console.log("Error ao tocar som! Ignore este erro.")
    });
    funSound(2); // Tocar um barulinho.
  }
}

function funSound(numSom){
  console.log("funSound("+numSom+")")
  if(varSomAtivo){
    // Tocar som.
    if(numSom==1){
      //-Som-ambiente---------------------------------
      //idAudioAmbiente.src=varSom;
      idAudioAmbiente.volume = 0.1;
    }else if(numSom==2){
      //-Som-efeitos---------------------------------
      idAudioFX.src="morreu2.m4a";
    }else if(numSom==3){
      //-Som-efeitos---------------------------------
      idAudioFX.src="cristal.m4a";
    }else{
      //-Som-efeitos---------------------------------
      idAudioFX.src="MeteoroBateu.mp3";
    } 
     
      idAudioFX.play().catch(error => {
        console.log("Error ao tocar som! Ignore este erro.")
      });
    
  }
}