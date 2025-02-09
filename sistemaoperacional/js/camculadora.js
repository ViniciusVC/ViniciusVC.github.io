
	console.log(' component - Calculadora ');

    var sinal = "+";
    var numero1=0;
    var numero2=0;
    var varPonto = false;
    var varJaTemPonto= false;

    function funCalcSinal(VarSinal){
      numero1 = parseFloat(document.getElementById('impCalcNum').value);
      numero2 = 0;
      sinal = VarSinal;
      varPonto = false;
      varJaTemPonto= false;
      document.getElementById('impCalcNum').value = 0;
      document.getElementById('impCalcLog').value = numero1 + " " + sinal;
    }

    function funCalcRaiz(){
      numero1 = parseFloat(document.getElementById('impCalcNum').value);
      numero2 = Math.sqrt(numero1); //Raiz quadrada
      sinal = "r";
      varPonto = false;
      varJaTemPonto= false;
      document.getElementById('impCalcNum').value = numero2;
      document.getElementById('impCalcLog').value = numero1 + " raiz = " + numero2;
    }
    
    function funCalcPorcento(){
      numero1 = parseFloat(document.getElementById('impCalcNum').value);
      numero2 = numero1/100;
      sinal = "r";
      varPonto = false;
      varJaTemPonto= false;
      document.getElementById('impCalcNum').value = numero2;
      document.getElementById('impCalcLog').value = numero1 + "% = " + numero2;
    }

    function funConctNum(varNum){
      if(varPonto){
        varPonto = false;
        varNum = parseFloat(document.getElementById('impCalcNum').value + "." + varNum);
      }else{
        varNum = parseFloat(document.getElementById('impCalcNum').value + varNum);
      }
      document.getElementById('impCalcNum').value = varNum;
    }

    function funConctPonto(){
      if(varJaTemPonto==false){
        varPonto = true;
        varJaTemPonto = true;
        document.getElementById('impCalcLog').value = numero1 + "." + "0";
      }
    }

    function funCalcIgual(){
      varPonto = false;
      numero2 = document.getElementById('impCalcNum').value;
      var resposta = 0;
      numero2=parseFloat(numero2);
      if (sinal=="+"){
        //funCalcSoma();
        resposta = numero1+numero2;
      }else if (sinal=="-"){
        //funCalcSubtrai();
        resposta = numero1-numero2;
      }else if (sinal=="*"){
        //funCalcMultplic();
        resposta = numero1*numero2;
      }else if (sinal=="/"){
        //funCalcDivid();
        resposta = numero1/numero2;
      }
      document.getElementById('impCalcNum').value = resposta;
      document.getElementById('impCalcLog').value = numero1 + sinal + numero2 + "=" + resposta;
      numero1 = resposta;
    }

    
    function funCalcDel(){
        var tmp = document.getElementById('impCalcNum').value; // convert to an array
        var tmp2 = tmp.split("");
        var totaldecasas = tmp2.length-1;
        //tmp2.slice(1, 1);
        tmp2.splice(totaldecasas, 1, ""); // remove 1 element from the array (adjusting for non-zero-indexed counts)
        tmp2=tmp2.join(""); // reconstruct the string
        if(tmp2==""){
          tmp2="0"
        }
        document.getElementById('impCalcNum').value = tmp2;
        document.getElementById('impCalcLog').value = tmp + " < " + tmp2;
    }

    function funCalcCE(){
      document.getElementById('impCalcNum').value = 0;
      document.getElementById('impCalcLog').value = "";
      sinal = "+";
      numero1=0;
      numero2=0;
      varPonto = false;
      varJaTemPonto= false;
    }