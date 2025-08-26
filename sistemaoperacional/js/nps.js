        var inpNPSnota10
        var inpNPSnota9
        var inpNPSnota8
        var inpNPSnota7
        var inpNPSnota6
        var inpNPSnota5
        var inpNPSnota4
        var inpNPSnota3
        var inpNPSnota2
        var inpNPSnota1
        var inpNPSnota0
        var spanNPSPromot
        var spanNPSNeutro
        var spanNPSDetract
        var spanNPSPromotPercent
        var spanNPSNeutroPercent
        var spanNPSDetractPercent
        var spanNPSnota

console.log('Iniciando script da Calculadora de NPS.');

function calcularNPS(){
    let totalPromotores = (parseInt(inpNPSnota10.value) || 0) + (parseInt(inpNPSnota9.value) || 0);
        let totalNeutros = (parseInt(inpNPSnota8.value)|| 0) + (parseInt(inpNPSnota7.value)|| 0);
        let totalDetratores = (parseInt(inpNPSnota6.value)|| 0) + (parseInt(inpNPSnota5.value)|| 0) + (parseInt(inpNPSnota4.value)|| 0) + (parseInt(inpNPSnota3.value)|| 0) + (parseInt(inpNPSnota2.value)|| 0) + (parseInt(inpNPSnota1.value)|| 0) + (parseInt(inpNPSnota0.value)|| 0);
        let totalRespostas = totalPromotores + totalNeutros + totalDetratores;      
        let PromotPercent = totalPromotores/totalRespostas*100;
        let NeutroPercent = totalNeutros/totalRespostas*100;
        let DetractPercent = totalDetratores/totalRespostas*100;        
        
        let nps = ((totalPromotores - totalDetratores) / totalRespostas) * 100;

        spanNPSPromot.innerHTML = totalPromotores;
        spanNPSNeutro.innerHTML = totalNeutros;
        spanNPSDetract.innerHTML = totalDetratores;
        spanNPSPromotPercent.innerHTML = PromotPercent.toFixed(2) + "%";
        spanNPSNeutroPercent.innerHTML = NeutroPercent.toFixed(2) + "%";
        spanNPSDetractPercent.innerHTML = DetractPercent.toFixed(2) + "%";
        spanNPSnota.innerHTML = nps.toFixed(2);
  }

  function initMPS(){       
        inpNPSnota10 = document.getElementById('impNPSnota10');
        inpNPSnota9 = document.getElementById('impNPSnota9');
        inpNPSnota8 = document.getElementById('impNPSnota8');
        inpNPSnota7 = document.getElementById('impNPSnota7');
        inpNPSnota6 = document.getElementById('impNPSnota6');
        inpNPSnota5 = document.getElementById('impNPSnota5');
        inpNPSnota4 = document.getElementById('impNPSnota4');
        inpNPSnota3 = document.getElementById('impNPSnota3');
        inpNPSnota2 = document.getElementById('impNPSnota2');
        inpNPSnota1 = document.getElementById('impNPSnota1');
        inpNPSnota0 = document.getElementById('impNPSnota0');
        spanNPSPromot = document.getElementById('spanNPSPromot');
        spanNPSNeutro = document.getElementById('spanNPSNeutro');
        spanNPSDetract = document.getElementById('spanNPSDetract');
        spanNPSPromotPercent = document.getElementById('spanNPSPromotPercent');
        spanNPSNeutroPercent = document.getElementById('spanNPSNeutroPercent');
        spanNPSDetractPercent = document.getElementById('spanNPSDetractPercent');
        spanNPSnota = document.getElementById('spanNPSnota');
}
  
initMPS()