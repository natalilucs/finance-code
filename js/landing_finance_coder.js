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
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//PAGINA DE CADASTRO: javascript inicia aqui!>>>>>>>>>>>>>>>>>>>>>>>>

// Função que converte todas as letras para maiuscula
function dado_NOME() {
  var nome1 = document.getElementById('nome').value;
  nome1 = nome1.toUpperCase(); // p ficar maiusculo

  var textoParagrafo = document.querySelector('#trocarTexto').textContent;
  textoParagrafo = textoParagrafo.replace('valorNome', nome1);
  document.querySelector('#trocarTexto').innerHTML = textoParagrafo;

  if(nome.value == ""){
    alert('Nome Inválido! Digite somente letras.');
    document.getElementById('cpf').style.backgroundColor = 'red';
  } else {
    document.getElementById('cpf').style.backgroundColor = 'green';
  }

}

// Função que valida o CPF
function dado_CPF() {
  var cpf1 = document.getElementById('cpf').value;
  if (
    isNaN(cpf1) || // se não for um número
    cpf1 < 0 || // para não ser menor do que zero
    cpf1 == ' ' || // não pode ter espaço
    cpf1 == '' || // não pode ser sem valor
    cpf1 == '00000000000' || // para que os números não sejam repetidos
    cpf1 == '11111111111' ||
    cpf1 == '22222222222' ||
    cpf1 == '33333333333' ||
    cpf1.length < 11 // não pode ter menos que 11 digitos
  ) {
    alert('CPF Inválido! Digite somente números correto.');
    document.getElementById('cpf').style.backgroundColor = 'red'; // cor vermelha caso digito for errado
  } else {
    document.getElementById('cpf').style.backgroundColor = 'green'; // cor verde caso digito for correto
  }

  var textoParagrafo = document.querySelector('#trocarTexto').textContent;
  textoParagrafo = textoParagrafo.replace('valorCpf', cpf1);
  document.querySelector('#trocarTexto').innerHTML = textoParagrafo;

  document.getElementById('trocarTexto').style.display = 'block'; // reaparece o meu p
}

// Função que valida dia do nascimento
function dia_NASCIMENTO() {
  var nascimentoDia = document.getElementById('diaNascimento').value;
  if (
    isNaN(nascimentoDia) ||
    nascimentoDia == '' ||
    nascimentoDia < 1 ||
    nascimentoDia > 31
  ) {
    alert('Inválido! Digite data de nascimento valida.');
    document.getElementById('diaNascimento').style.backgroundColor = 'red';
  } else {
    document.getElementById('diaNascimento').style.backgroundColor = 'green';
  }
}
// Função que valida ano do nascimento
function ano_NASCIMENTO() {
  var nascimentoAno = document.getElementById('anoNascimento').value;
  if (
    isNaN(nascimentoAno) ||
    nascimentoAno == '' ||
    nascimentoAno < 1891 ||
    nascimentoAno > 2021
  ) {
    alert('Inválido! Digite o ano de nascimento valido.');
    document.getElementById('anoNascimento').style.backgroundColor = 'red';
  } else {
    document.getElementById('anoNascimento').style.backgroundColor = 'green';
  }
  var anoAtual = new Date();
  anoAtual = anoAtual.getFullYear();
  nascimentoAno = Math.abs(nascimentoAno - anoAtual); // para o n° ficar positivo

  var textoParagrafo = document.querySelector('#trocarTexto').textContent;
  textoParagrafo = textoParagrafo.replace('valorAnoNascimento', nascimentoAno);
  document.querySelector('#trocarTexto').innerHTML = textoParagrafo;
}

// Função que valida E-mail
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf('@')); //onde inicia
  dominio = field.value.substring(
    field.value.indexOf('@') + 1, // onde termina
    field.value.length
  );
  if (
    usuario.length >= 1 && // validações devem ser verdadeiras
    dominio.length >= 3 &&
    usuario.search('@') == -1 &&
    dominio.search('@') == -1 &&
    usuario.search(' ') == -1 &&
    dominio.search(' ') == -1 &&
    dominio.search('.') != -1 &&
    dominio.indexOf('.') >= 1 &&
    dominio.lastIndexOf('.') < dominio.length - 1 // não pode terminar com ponto
  ) {
    document.getElementById('msgemail').style.backgroundColor = 'green';
    alert('E-mail valido');
  } else {
    document.getElementById('msgemail').style.backgroundColor = 'red';
    alert('E-mail invalido');
  }

  var textoParagrafo = document.querySelector('#trocarTexto').textContent;
  textoParagrafo = textoParagrafo.replace('valorEmail', usuario);
  document.querySelector('#trocarTexto').innerHTML = textoParagrafo;
}

function validacaoGenero() {
  var genero = document.getElementById('generoEscolhido');
  genero = genero.value;

  var textoParagrafo = document.querySelector('#trocarTexto').textContent;
  textoParagrafo = textoParagrafo.replace('valorSexo', genero); //"palavra" no <p> substituida por "var"
  document.querySelector('#trocarTexto').innerHTML = textoParagrafo;
}

//PAGINA DE CADASTRO: javascript termina aqui!>>>>>>>>>>>>>>>>>>>>>>>>
