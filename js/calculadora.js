//função para habilitar Calculadora Comum e desabilitar Científica
function habilitaCalcComum() {
    document.getElementById('calculadoraCientifica').style.pointerEvents = 'none';//desabilita eventos do mouse em toda a área identificada como Calculadora Científica no html
    document.getElementById('calculadoraCientifica').style.background = 'rgb(88, 88, 88)';//altera opacidade da Calculadora Científica para ficar com aparência de desabilitada
    document.getElementById('calculadoraCientifica').style.opacity = '90%';
    document.getElementById('botaoCalcCient').style.opacity = '95%';
    document.getElementById('botaoCalcComum').style.opacity = '100%';
    document.getElementById('calculadoraComum').style.pointerEvents = 'all';
    document.getElementById('calculadoraComum').style.background = 'rgba(0, 0, 0, 0.97)';
    limpaDisplayCientifica();//chama função que limpa o display da Calculadora Científica, para mostrar 0
}

//função para habilitar Calculadora Científica e desabilitar Comum
function habilitaCalcCient() {
    document.getElementById('calculadoraComum').style.pointerEvents = 'none';//desabilita eventos do mouse em toda a área identificada como Calculadora Comum no html
    document.getElementById('calculadoraComum').style.background = 'rgb(88, 88, 88)';//altera opacidade da Calculadora Comum para ficar com aparência de desabilitada
    document.getElementById('calculadoraComum').style.opacity = '90%';
    document.getElementById('botaoCalcComum').style.opacity = '95%';//altera opacidade do botão de Calculadora Comum, para parecer desabilitado
    document.getElementById('botaoCalcCient').style.opacity = '100%';//altera opacidade do botão de Calculadora Científica, para parecer ativado
    document.getElementById('calculadoraCientifica').style.pointerEvents = 'all';//ativa todos as interações da Calculadora Científica com o mouse
    document.getElementById('calculadoraCientifica').style.background = 'rgba(0, 0, 0, 0.97)';
    limpaDisplayComum();//chama função que limpa o display da Calculadora Comum, para mostrar 0
}

//variaveis globais para serem usadas dentro de funções diferentes
var entrada1Co = '';//variável para receber o primeiro número na Calculadora Comum
var entrada2Co = '';//variável para receber o segundo número na Calculadora Comum
var operadorCo = '';//variável receber o sinal/operador matemático na Calculadora Comum 
var entrada1Ci = '';//variável para receber o primeiro número na Calculadora Científica
var entrada2Ci = '';//variável para receber o segundo número na Calculadora Científica
var operadorCi= '';//variável receber o sinal/operador matemático na Calculadora Científica
var resultadoCo;//

//função para processar os números vindos da Calculadora Comum
function defineOperandoComum(numero) {
    if (operadorCo === '') //se a variável de operador matemático ainda estiver vazia (string vazia), os números clicados vão ser recebidos como primeira entrada (entrada1Co)
        entrada1Co = entrada1Co + numero;//variável de entrada do primeiro número é atualizada
    else //se a variável de sinal/operador matemático já tiver recebido um input (+, -, * ou /), número vai ser recebido na variável entrada2Co
        entrada2Co = entrada2Co + numero;

    displayComum();//função que imprime no display da Calculadora Comum os números e operações sendo recebidos pelos cliques da Calculadora Comum
}


//função para processar sinal/operador matemático vindo da Calculadora Comum
function defineOperadorComum(sinal) {
    if (entrada1Co === '') //se a variável entrada1Co ainda estiver vazia (string vazia, sem número), a variavel que recebe sinal vai continuar vazia
        operadorCo = '';//variável de sinal;operador continua vazia
    else 
        operadorCo = sinal;//se a variável de primeiro número (entrada1Co) já estiver com algum valor, a variável de sinal recebe o valor que tiver entrado na função
    
    displayComum();//mostra o sinal no display da Calculadora Comum
}


// functions relacionadas com display da Calculadora COMUM
function displayComum() {//pega o display da Calculadora COMUM e imprime os inputs de números e sinal de operação à medida que forem sendo clicados. É chamada a cada click de botão, dentro de outras funções
    let displayComumStatus = document.getElementById('displayCo');
    displayComumStatus.innerHTML = entrada1Co + ' ' + operadorCo + ' ' + entrada2Co;
}


function limpaDisplayComum() {//limpa o display da Calculadora COMUM pelo click do botão C e "zera" os valores inseridos anteriormente nas variáveis de entrada e operador que voltam a receber uma string vazia ''
    let displayComumStatus = document.getElementById('displayCo');
    entrada1Co = '';//recebe string vazia
    entrada2Co = '';//recebe string vazia
    operadorCo = '';//recebe string vazia
    displayComumStatus.innerHTML = 0;//o número 0 aparece no display da Calculadora
}

function displayResultadoCo() {//mostra no display da Calculadora Comum o resultado da operação aritmética. Essa função é chamada dentro da função operacaoComum()
    let imprimeResultado = document.getElementById('displayCo');
    imprimeResultado.innerHTML = resultadoCo;
}

//função que processa o cálculo matemático a partir das entradas de números e sinal vindas da página html
function operacaoComum() {
    let numero1Co = parseFloat(entrada1Co);//variável recebe a conversão para parseFloat da entrada1Co
    let numero2Co = parseFloat(entrada2Co);//variável recebe a conversão para parseFloat da entrada2Co

    switch(operadorCo) {//estrutura switch para realizar o cálculo matemático a partir do operador recebido da página html
        case '+'://processa a operação de soma, caso o sinal recebido da página html tenha sido o sinal de adição. Depois atribui novos valores às variáveis de entrada
            resultadoCo = numero1Co + numero2Co;
            displayResultadoCo();
            entrada1Co = resultadoCo;//variável entrada1Co recebe o valor do resultado, para o caso do usuário querer usar o valor do resultado para realizar outra operação
            entrada2Co = '';
            break;

        case '-':
            resultadoCo = numero1Co - numero2Co;
            displayResultadoCo();
            entrada1Co = resultadoCo;
            entrada2Co = '';
            break;

        case 'x':
            resultadoCo = numero1Co * numero2Co;
            displayResultadoCo();
            entrada1Co = resultadoCo;
            entrada2Co = '';
            break;

        case '/':
            resultadoCo = numero1Co / numero2Co;
            displayResultadoCo();
            entrada1Co = resultadoCo;
            entrada2Co = '';
            break;
    }
}

function defineOperandoCient(numero) {
    if (operadorCi === '') 
        entrada1Ci = entrada1Ci + numero;
    else 
        entrada2Ci += numero;

    displayCient();//função que imprime no display da Calculadora Cientifica os números e operações sendo recebidos pelos cliques da Calculadora Cientifica
}

function defineOperadorCient(sinal) {
    if (entrada1Ci === '') 
        operadorCi = '';
        
    else if (sinal == 'sqrt' || sinal == '²' || sinal == '³' || sinal == 'PI') {
        operadorCi = sinal;
        // operacaoCient();
    }

    else 
        operadorCi = sinal;
        displayCient();
    
}

function displayCient() {
    let displayCientStatus = document.getElementById('displayCi');
    displayCientStatus.innerHTML = entrada1Ci + ' ' + operadorCi + ' ' + entrada2Ci;
}

function limpaDisplayCientifica() {
    let displayCientStatus = document.getElementById('displayCi');
    entrada1Ci = '';
    entrada2Ci = '';
    operadorCi = '';
    displayCientStatus.innerHTML = 0;
}

// function limpaCaractere() {
//     let displayComumStatus = document.getElementById('displayCo');

// }

function displayResultadoCi() {
    let imprimeResultado = document.getElementById('displayCi');
    imprimeResultado.innerHTML = resultado;
}

function operacaoCient() {
    let numero1Ci = parseFloat(entrada1Ci);
    let numero2Ci = parseFloat(entrada2Ci);

    switch(operadorCi) {
        case '+':
            resultado = numero1Ci + numero2Ci;
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;

        case '-':
            resultado = numero1Ci - numero2Ci;
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;

        case 'x':
            resultado = numero1Ci * numero2Ci;
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;

        case '/':
            resultado = numero1Ci / numero2Ci;
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;
        
        case '²':
            resultado = Math.pow(numero1Ci, 2);
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;

        case '³':
            resultado = Math.pow(numero1Ci, 3);
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;

        case 'sqrt':
            resultado = Math.sqrt(numero1Ci);
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;
        
        case 'PI':
            if (numero1Ci != null)
                resultado = numero1Ci * Math.PI;
            else if (numero1Ci == '')
                resultado = Math.PI;
            
            displayResultadoCi();
            entrada1Ci = resultado;
            entrada2Ci = '';
            break;
    }
}