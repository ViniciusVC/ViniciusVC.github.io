

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
    funSound(2); // Tocar uma mbarulinho cristal.
  }
}

function funSound(numSom){
  console.log("funSound("+numSom+")")
  if(varSomAtivo){
    // Tocar som.
    if(numSom==1){
      //-Som-ambiente---------------------------------
      //idAudioAmbiente.src=varSom;
      idAudioAmbiente.volume = 0.05;
      idAudioAmbiente.play().catch(error => {
        console.log("Error ao tocar som! Ignore este erro.")
      });
    }else{
      //-Som-efeitos---------------------------------
      //idAudioFX.src="dano.wav";
      idAudioFX.play().catch(error => {
        console.log("Error ao tocar som! Ignore este erro.")
      });
    }
  }
}