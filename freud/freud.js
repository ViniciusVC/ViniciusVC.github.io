

const textoSaida = document.getElementById('spansaida');
const butSpeak = document.getElementById('speakBtn'); //document.querySelector('button');
const butEnviar = document.getElementById('EnviarBtn');

var listening = false;

	
var momento = 1
var prefixo = ['Interessante. ','Bom. ','Bem... ','Otimo. ','Curioso. ','Entendo. ', '']
var sufixo = [' Me explique melhor. ',' Fale mais. ',' Continue, por favor. ',' Gostaria de saber mais sobre isto. ',' Consegue falar mais sobre isto? ',' ', ' ']
var prefixoNum=0
var sufixoNum=5

function generateResponse(input) {
  console.log("generateResponse("+input+")")
  // Converter todas as letras para minúsculas
  input = input.toLowerCase();
  input = input.replace("eu estou", "eu está").replace("eu sou", "eu está").replace("eu imagino", "imagino")
  input = input.replace("estou ", "eu ").replace("sonhei ", "sonhou ").replace("ontem sonhei ", "sonhou ").replace(" sonho", "sonhou ")
  input = input.replace(" vc", " voce").replace("vc ", "voce ").replace("ê", "e")
  // Remover caracteres especiais
  //input = input.replace(/[^\w\s]/gi, '');
  input = input.replace("ola ", "oi doc").replace("ola.", "oi doc").replace("oi.", "oi doc").replace("bom dia", "oi doc")
  // Remover pontos
  input = input.replace("?", "").replace(".", "").replace(",", "").replace("ç", "c").replace("ê", "e");
  //input = input.replace(/\./g, '');
  
  let userPatterns
  
  prefixoNum++
  sufixoNum=sufixoNum-1
  if (prefixoNum>5){
    prefixoNum=0
    sufixoNum=5
  }
  
  if (momento==1){
    momento=0
    userPatterns = [
      { re: /oi (.*)/, msg: 'Oi. Fale como você está se sentindo.' },
      { re: /oi/, msg: 'Oi. Me diga como está se sentindo, hoje.' },
      { re: /voce pode (.*)/, msg: '$3O que faz você pensar que eu não posso $1?' },
      { re: /voce é (.*)/, msg: '$3O que faz vc pensar que eu sou $1?' },
      { re: /voce é (.*) (.*)/, msg: '$3O que faz vc pensar que eu sou $1 $2?' },
      { re: /voce (.*)/, msg: '$3E sobre você, você acredita que $1?' },
      { re: /voce/, msg: 'Estamos aqui para falar de você.' },	
      { re: /eu preciso de (.*)/, msg: '$3Por que voce precisa $1?$4' },
      { re: /eu não (.*)/, msg: '$3Você realmente não $1?$4' },
      { re: /eu sinto (.*)/, msg: '$3conte-me mais sobre esses sentimentos.$4' },
      { re: /eu tenho (.*)/, msg: '$3Por que você me diz que você $1?$4' },
      { re: /eu poderia (.*)/, msg: '$3O que significaria para você se você pudesse $1?$4' },
      { re: /sonhou (.*)/, msg: '$3 Sonhos podem ser desejos reprimidos pela moral consciente.$4' },
      
      { re: /eu (.*)/, msg: '$3 Tem certeza de que $1?$4' },
      { re: /é (.*)/, msg: '$3 talvez não seja $1?$4' },
      { re: /por que voce precisa (.*)/, msg: '$3Por que é importante se eu preciso $1?$4' },
      { re: /posso (.*)/, msg: '$3Talvez você não queira $1.$4' },
      
      { re: /imagino (.*)/, msg: '$3A imaginação é a ponte entre a mente consciente e a mente inconsciente.$4' },
      
      
      { re: /sinto (.*)/, msg: '$3O que te faz sentir isto?$4' },
      
      { re: /existe (.*)/, msg: '$3Você acha que existe algo como $1?$4' },
      { re: /meu (.*)/, msg: '$3Eu vejo seu $1.$4' },
      { re: /por que (.*)/, msg: '$3Por que você não me diz o motivo $1?$4' },
      { re: /como (.*)/, msg: '$3Que papel você acredita que $1 desempenha em sua vida?$4' },
      { re: /quem é (.*)/, msg: '$3Quem você imagina que $1 seja?$4' },
      { re: /o que é (.*)/, msg: '$3Como você se sentem em relaçã oa $1?$4' },
      { re: /porque (.*)/, msg: '$3Será que você não sabe o porque $1?$4' },
      { re: /(.*) (.*)/, msg: '$3 Como $2 se relaciona com $1?$4' },
      { re: /(.*)/, msg: '$3Porque $1?$4' },
    ];
  }else{
    momento=1
    userPatterns = [
      { re: /oi (.*)/, msg: 'Ola. Como você está, neste momento?' },
      { re: /oi/, msg: 'Ola. Como você está se sentindo?' },
      { re: /voce pode (.*)/, msg: '$3Porque você acredita que eu posso $1?$4' },
      { re: /voce é (.*)/, msg: '$3Porque eu seria $1?$4' },
      { re: /voce é (.*) (.*)/, msg: '$3Porque eu seria $1 $2?$4' },
      { re: /voce (.*)/, msg: '$3Porque ache que eu $1?$4' },
      { re: /voce/, msg: 'Sou irelevante. Fale sobre você.' },	
      { re: /eu preciso de (.*)/, msg: '$3Tem certeza que precisa de $1?$4' },
      { re: /eu não (.*)/, msg: '$3Porque você não $1?$4' },
      { re: /eu sinto (.*)/, msg: '$3Fale mas sobre esses sentimentos.$4' },
      { re: /eu tenho (.*)/, msg: '$3E se não tivesse $1? Como seria?$4' },
      { re: /eu poderia (.*)/, msg: '$3Mas como se sentiria se não pudesse $1?$4' },
      { re: /sonhou (.*)/, msg: '$3 Sonhos são desejos reprimidos.$4' },
      
      { re: /eu (.*)/, msg: '$3 Porque você diz que $1?$4' },
      { re: /é (.*)/, msg: '$3 Porque você acha que é $1?$4' },
      { re: /por que voce precisa (.*)/, msg: '$3Porque acha que eu preciso $1?$4' },
      { re: /posso (.*)/, msg: '$3É isso que deseja?$4' },
      
      { re: /imagino (.*)/, msg: '$3A imaginação é a ponte entre consciente e inconsciente.$4' },

            
      { re: /sinto (.*)/, msg: '$3Porque você imagina que te causa isso?$4' },
      
      { re: /existe (.*)/, msg: '$3Mas como se sentiria se não existisse $1?$4' },
      { re: /meu (.*)/, msg: '$3Fale mais sobre seu $1.$4' },
      { re: /por que (.*)/, msg: '$3Como se sente em relação a $1?$4' },
      { re: /como (.*)/, msg: '$3Que papel você acredita que $1 desempenha em sua vida?$4' },
      { re: /quem é (.*)/, msg: '$3Quem você imagina que $1 seja?$4' },
      { re: /o que é (.*)/, msg: '$3Como você se sentem em relaçã oa $1?$4' },
      { re: /porque (.*)/, msg: '$3Acho que você sabe o porque $1.$4' },
      { re: /(.*) (.*)/, msg: '$3Porque diz, $1 $2?$4' },
      { re: /(.*)/, msg: '$3Está se sentindo $1?$4' },
    ];
  }
  for (let i = 0; i < userPatterns.length; i++) {
    const userPattern = userPatterns[i];
    const userMatch = input.match(userPattern.re);

    if (userMatch) {
      let response = userPattern.msg.replace(/\$1/, userMatch[1]);
      response = response.replace(/\$2/, userMatch[2]);
      response = response.replace(/\$3/, prefixo[prefixoNum]);
      response = response.replace(/\$4/, sufixo[sufixoNum]);
      
      return response;
    }
  }
  return 'Desculpe, não entendi sua mensagem.';
}


function creteRecognition() {
  if ('webkitSpeechRecognition' in window) {
    
    console.log("webkitSpeechRecognition existe!")
    butSpeak.innerHTML = "Fale";
    textoSaida.innerHTML = "Ouvindo...";

    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt_BR'; //'en-US'
    recognition.start();
    
    recognition.onresult = function(event) {
        var text = event.results[0][0].transcript;
        console.log('Text:', text);
        enviarTexto(text);
        butSpeak.innerHTML = "Aperte para falar";
        //document.getElementById('freudResponse').textContent = generateResponse(text);
        //document.getElementById('userInput').value = ''; // Limpa o campo de entrada
        listening=false;
    };

    recognition.onerror = function(event) {
        console.log('Error:', event.error);
        //enviarTexto("Não está ouvindo.");
        textoSaida.innerHTML = "Não está ouvindo.";
        butSpeak.innerHTML = "Aperte para falar";
        listening=false;
    };
  } else {
    textoSaida.innerHTML = "Web Speech API is not supported in this browser.";
    console.log('Web Speech API is not supported in this browser.');
    butSpeak.innerHTML = "x";
  }
}


function activeListening(){
  if(listening){
    console.log("Já está ouvindo, não faça nada");
  }else{
    listening=true;
    creteRecognition();
  }
}


function enviarTexto(text){
  const response = generateResponse(text);
  textoSaida.innerHTML = text;
  document.getElementById('freudResponse').textContent = response
  document.getElementById('userInput').value = ''; // Limpa o campo de entrada
}

//const butSpeak 
//const butEnviar

butSpeak.addEventListener('click', activeListening);

//document.getElementById('chatForm').addEventListener('submit', function(event) {
butEnviar.addEventListener('click', function(event) {
  event.preventDefault(); // Previne o envio do formulário
  const userInput = document.getElementById('userInput').value;
  enviarTexto(userInput);
});

document.getElementById('freudResponse').textContent = "Olá eu sou o Dr Raimundo Freud. Fale como você está se sentindo.";
