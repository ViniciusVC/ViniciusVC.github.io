var btLinkc
var btLinkd
var btLinka
var btLinkf
var btLinkb
var btLinke
var txtOriginal
var txtConvertido

console.log('Iniciando script do conversor de texto.');

function FuncConverter(varOpt){
        var saida = "";
        var textooriginal = txtOriginal.value; //document.getElementById('textareaoriginal').value;
        if(varOpt=="a"){
          //Primeira letra da fraze maiuscula.
          textooriginal = "@. " + textooriginal;
          textooriginal = textooriginal.toLowerCase().replace(/(?:^|\.|\!|\?)\s\S/g, function(a) { return a.toUpperCase(); });
          textooriginal = textooriginal.replace(/\@\./g, function(a) { return "" });
          saida = textooriginal
        } else if(varOpt=="b"){
          //Todas As Primeiras Letras Maiusculas. 
          saida = textooriginal.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        } else if(varOpt=="c"){
          //TUDO MAIUSCULA.
          saida = textooriginal.toUpperCase()
        } else if(varOpt=="d"){
          //tudo minuscula. 
          saida = textooriginal.toLowerCase()
        } else if(varOpt=="e"){
          //tODAS aS pRIMEIRAS lETRAS mINUSCULAS.
          saida = textooriginal.toUpperCase().replace(/(?:^|\s)\S/g, function(a) { return a.toLowerCase(); });
        } else if(varOpt=="f"){
          //pRIMEIRA lETRA dA fRAZE mINUSCULA.
          textooriginal = "@. " + textooriginal;
          textooriginal = textooriginal.toUpperCase().replace(/(?:^|\.|\!|\?)\s\S/g, function(a) { return a.toLowerCase(); });
          textooriginal = textooriginal.replace(/\@\./g, function(a) { return "" });
          saida = textooriginal
        } 
        txtConvertido.value=saida; //document.getElementById('textareaconvertido').value=saida;
  }

  //Adiciona eventos pra navegadores modernos e antigos
  function addEvent(el, type, callback) {
        if (el.addEventListener) {
          el.addEventListener(type, callback);
        } else if (el.attachEvent) {
          el.attachEvent("on" + type, callback);
        }
  }

  function initConversorDeTexto(){       
        btLinkc=document.getElementById('btLinkConvertc') // onClick={() => {FuncConverter("c")}}
        btLinkd=document.getElementById('btLinkConvertd') // onClick={() => {FuncConverter("d")}}
        btLinka=document.getElementById('btLinkConverta') // onClick={() => {FuncConverter("a")}}
        btLinkf=document.getElementById('btLinkConvertf') // onClick={() => {FuncConverter("f")}}
        btLinkb=document.getElementById('btLinkConvertb') // onClick={() => {FuncConverter("b")}}
        btLinke=document.getElementById('btLinkConverte') // onClick={() => {FuncConverter("e")}}
        txtOriginal=document.getElementById('textareaoriginal');
        txtConvertido=document.getElementById('textareaconvertido');
        addEvent(btLinkc, "mousedown", function () { FuncConverter('c')});
        addEvent(btLinkd, "mousedown", function () { FuncConverter('d')});
        addEvent(btLinka, "mousedown", function () { FuncConverter('a')});
        addEvent(btLinkf, "mousedown", function () { FuncConverter('f')});
        addEvent(btLinkb, "mousedown", function () { FuncConverter('b')});
        addEvent(btLinke, "mousedown", function () { FuncConverter('e')});
        //setInterval(getDate, 1000);
        txtOriginal.value="Digite ou cole seu texto aqui."
  }
  
  initConversorDeTexto()