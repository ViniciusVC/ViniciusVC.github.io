function interface(predio, tropas, dominio, movendo) {
  const btCriarUnidade = document.getElementById('btCriarUnidade');
  const btCriarCastelo = document.getElementById('btCriarCastelo');
  const btAumentarTropa = document.getElementById('btAumentarTropa');
  const btMoverAtacar = document.getElementById('btMoverAtacar');
  const btMover = document.getElementById('btMover');
  
  if (turnoatual !== 1 || pause) {
    btCriarCastelo.style.display = 'none'; // Esconde a div
    btAumentarTropa.style.display = 'none'; // Esconde a div
    btCriarUnidade.style.display = 'none'; // Esconde a div
    btMoverAtacar.style.display = 'none'; // Esconde a div
  }else{
    if (dominio !== 1) {
      btCriarCastelo.style.display = 'none'; // Esconde a div
      btAumentarTropa.style.display = 'none'; // Esconde a div
      btCriarUnidade.style.display = 'none'; // Esconde a div
      btMoverAtacar.style.display = 'none'; // Esconde a div
    } else {

      if (predio < 4) {
        btCriarCastelo.style.display = 'block'; // Mostra a div
      } else {
        btCriarCastelo.style.display = 'none'; // Esconde a div
      }

      if (tropas !== 0) {
        btAumentarTropa.style.display = 'block'; // Mostra a div
        btMoverAtacar.style.display = 'block'; // Mostra a div
        btCriarUnidade.style.display = 'none'; // Esconde a div
      } else {
        btAumentarTropa.style.display = 'none'; // Esconde a div
        btMoverAtacar.style.display = 'none'; // Esconde a div
        btCriarUnidade.style.display = 'block'; // Mostra a div
      }
    }
    if(movendo && turnoatual == 1) {
      btMover.style.display = 'block'; // Mostra a div
      btMoverAtacar.style.display = 'none'; // Esconde a div
    }else{
      btMover.style.display = 'none'; // Esconde a div
    }
  }
}


function winOpen(janela){
  //ctx.save();
  //ctx.drawImage(listImgs.fundopapiro, 0, 0, 862, 420);
  //ctx.restore();

  // esconder todas as janelas.
  document.getElementById('divMenuInicial').style.visibility = 'hidden';
  document.getElementById('divWinMapas').style.visibility = 'hidden';
  document.getElementById('divWinPause').style.visibility = 'hidden';
  document.getElementById('divWinHelp').style.visibility = 'hidden';
  document.getElementById('divWinVitoria').style.visibility = 'hidden';
  
  // Mostrar apens uma especifica.
  document.getElementById(janela).style.visibility = 'visible'
}


function ActionPause() {
  if (pause) {
    pause = false;
    document.getElementById('divWinPause').style.visibility = 'hidden';
    interface(mundoAtual[cursor.y][cursor.x].construcao.num, mundoAtual[cursor.y][cursor.x].tropas.num, mundoAtual[cursor.y][cursor.x].dominio.num, moveTropasShow.Ativo);
    updateGame();
    //winClose('pause'); // esconder menu de pause
  } else {
    pause = true;
    interface(0, 0, 0, false)
    document.getElementById('divWinPause').style.visibility = 'visible';
    
    

    
    document.getElementById('spanTeritorio1').textContent = equipes[1].totaldominios;
    document.getElementById('spanTeritorio2').textContent = equipes[2].totaldominios;
    document.getElementById('spanTeritorio3').textContent = equipes[3].totaldominios;
    document.getElementById('spanTeritorio4').textContent = equipes[4].totaldominios;
    document.getElementById('spanTeritorio5').textContent = equipes[5].totaldominios;
    document.getElementById('spanTeritorio6').textContent = equipes[6].totaldominios;
    //winOpen("divWinPause");
  }
}


/*
function atualizarInfo(texto) {
  // Atualiza o texto do span
  const spanInfo = document.getElementById('spanInfo');
  spanInfo.textContent = texto;
}
*/