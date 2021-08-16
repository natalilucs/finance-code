function modoNoturno() {
    document.getElementById('container').style.backgroundImage =
      'linear-gradient(rgb(49, 49, 49), black, rgb(49, 49, 49))';
    document.getElementById('container').style.color = 'white';
    document.querySelector('ul').style.backgroundImage =
    'linear-gradient(rgb(49, 49, 49), black, rgb(49, 49, 49))';
    document.getElementsByTagName('li')[0].style.color = 'white';
    document.getElementsByTagName('li')[1].style.color = 'white';
    document.getElementsByTagName('li')[2].style.color = 'white';
    document.getElementsByTagName('li')[3].style.color = 'white';
    document.getElementById('caixa_texto').style.color = 'white';
  }
  function modoClaro() {
    document.getElementById('container').style.background = 'white';
    document.getElementById('container').style.color = 'black';
    document.querySelector('ul').style.background = 'white';
    document.getElementsByTagName('li')[0].style.color = 'black';
    document.getElementsByTagName('li')[1].style.color = 'black';
    document.getElementsByTagName('li')[2].style.color = 'black';
    document.getElementsByTagName('li')[3].style.color = 'black';
    document.getElementById('caixa_texto').style.color = 'black';
  }
  var tamanhoFonte = 100;
  var aumentaDiminui = 10;
  
  function onLoad() {
    var botaoAumenta = document.getElementById('aumentaLetra');
  
    var botaoDiminui = document.getElementById('diminuiLetra');
  
    botaoAumenta.addEventListener('click', function (event) {
      tamanhoFonte = tamanhoFonte + aumentaDiminui;
      document.getElementById('container').style.fontSize =
        tamanhoFonte + aumentaDiminui + '%';
    });
  
    botaoDiminui.addEventListener('click', function (event) {
      tamanhoFonte = tamanhoFonte - aumentaDiminui;
      document.getElementById('container').style.fontSize =
        tamanhoFonte - aumentaDiminui + '%';
    });
  }
  
  
  /**xxxxxxxxxxxxxxx MENU BURGER xxxxxxxxxxxxxxxx*/
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector("nav ul");
  
  burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

// INICIO JS DO CONVERSOR


function validarValor(){
    var entrada = document.getElementById("valorum").value;
    if(entrada < 0 || isNaN(entrada)){
        alert("Digite um valor númerico maior que 0.00");        
    }
  }
  
  
  function conversaoMoeda() {
    var valorPrimMoeda = document.getElementById('valorum').value;
    var primeiraMoeda = document.getElementById('converter').value;    
    var segundaMoeda = document.getElementById('convertido').value;
  
    let valorConvertido;
  
    if (primeiraMoeda === 'BRL') {
        txSegMoeda = [{ moeda: 'GPB', taxa: 0.1380 }, { moeda: 'USD', taxa: 0.1914 }, { moeda: 'CAD', taxa: 0.2395 }, { moeda: 'ARS', taxa: 18.54 }, { moeda: 'EUR', taxa: 0.1623}, { moeda: 'BRL', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);// definir as casas decimais depois da virgula.
    }
  
  
    if (primeiraMoeda === 'GPB') {
        txSegMoeda = [{ moeda: 'BRL', taxa: 7.2487 }, { moeda: 'USD', taxa: 1.3874 }, { moeda: 'CAD', taxa: 1.7360 }, { moeda: 'ARS', taxa: 134.60 }, { moeda: 'EUR', taxa: 1.1757 }, { moeda: 'GPB', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);
    }
  
    if (primeiraMoeda === 'USD') {
        txSegMoeda = [{ moeda: 'BRL', taxa: 5.2247 }, { moeda: 'GPB', taxa: 0.7208 }, { moeda: 'CAD', taxa: 1.2513 }, { moeda: 'ARS', taxa: 97.08 }, { moeda: 'EUR', taxa: 0.8475 },{ moeda: 'USD', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);
    }
  
    if (primeiraMoeda === 'CAD') {
        txSegMoeda = [{ moeda: 'BRL', taxa: 4.1753 }, { moeda: 'GPB', taxa: 0.5760 }, { moeda: 'USD', taxa: 0.7992 }, { moeda: 'ARS', taxa: 77.63 }, { moeda: 'EUR', taxa: 0.6773 }, { moeda: 'CAD', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);
    }
  
    if (primeiraMoeda === 'EUR') {
        txSegMoeda = [{ moeda: 'BRL', taxa: 6.1654 }, { moeda: 'GPB', taxa: 0.8505 }, { moeda: 'USD', taxa: 1.1799 }, { moeda: 'ARS', taxa: 114.52 }, { moeda: 'CAD', taxa: 1.4765 }, { moeda: 'EUR', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);
    }
  
    if (primeiraMoeda === 'ARS') {
        txSegMoeda = [{ moeda: 'BRL', taxa: 0.054 }, { moeda: 'GPB', taxa: 0.0074 }, { moeda: 'USD', taxa: 0.010 }, { moeda: 'CAD', taxa: 0.013 }, { moeda: 'EUR', taxa: 0.0087}, { moeda: 'ARS', taxa: 1.00 }].find(tx => tx.moeda === segundaMoeda);
  
        valorConvertido =  (valorPrimMoeda*txSegMoeda.taxa).toFixed(2);
    }
  
    // Os IF irá percorrer a array para identificar o campo , to fixed trazer duas casas decimais após a virgular.
  
  
    document.getElementById('resposta').innerText = `${valorConvertido.replace('.', ',')}`;
    console.log(txSegMoeda);
  }
  
  
  
  // FINAL JS CONVERSOR