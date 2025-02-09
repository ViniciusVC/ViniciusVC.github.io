
// Script do lado do cliente aqui
    console.log('Iniciando script relogio analogico.');
      
    var secondsSelector;
    var minutesSelector;
    var hoursSelector;

    var sDigitalSeconds;
    var sDigitalMinutes;
    var sDigitalHours;

function getDate () {
      
      let now = new Date();
      let seconds = now.getSeconds();
      let minutes = now.getMinutes();
      let hours = now.getHours();

      console.log('seconds '+seconds+' minutes:'+minutes + ' hours:'+ hours);

      toConvert(seconds, 60, secondsSelector);
      toConvert(minutes, 60, minutesSelector);
      toConvert(hours, 12, hoursSelector);

      sDigitalSeconds.innerHTML = seconds;
      sDigitalMinutes.innerHTML = minutes;
      sDigitalHours.innerHTML = hours;

      /*
      let convertResult = (( seconds / 60) * 360) + 90;
      secondsSelector.style.transform = `rotate(${convertResult}deg)`;
      convertResult = (( minutes / 60) * 360) + 90;
      minutesSelector.style.transform = `rotate(${convertResult}deg)`;
      convertResult = (( hours / 12) * 360) + 90;
      hoursSelector.style.transform = `rotate(${convertResult}deg)`;
      */
}

function toConvert(value, divider, tempSelector) {
      var convertResult = (( value / divider) * 360) + 90;
      tempSelector.style.transform = `rotate(${convertResult}deg)`;
}

function iniciarRelogio(){
      // Analogico
      document.getElementById("relogioAnalogico").style.display = "block"; // Mostrar relogio.
      document.getElementById("btLInitRelogAnalo").style.display = "none"; // Esconder botão de iniciar.
      secondsSelector = document.getElementById('analogicSeconds');
      minutesSelector = document.getElementById('analogicMinutes');
      hoursSelector = document.getElementById('analogicHours');

      // Digital
      sDigitalSeconds=document.getElementById('digitalSeconds');
      sDigitalMinutes=document.getElementById('digitalMinutes');
      sDigitalHours=document.getElementById('digitalHours');

      setInterval(getDate, 1000);
}

iniciarRelogio();
