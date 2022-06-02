// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
  evento.defaultPrevented();
  console.log('Evento previnido')

  const inputpeso = document.querySelector('#peso')
  const inputaltura = document.querySelector('#altura')

  const peso = Number(inputpeso.value)
  const altura = Number(inputaltura.value)

  if (!peso) {
    setResultado('Peso inválido', false)
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false )
    return;
  }

  const imc = getImc (peso, altura);
  const nivelimc = getNivelImc (imc);
  const msg = `Seu IMC é ${imc} (${nivelimc})`

  setResultado(msg, true);
});

function getImc (peso, altura) {
  const imc = peso/altura
  return imc.toFixed(2);
}

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, verdadeiro) {
  const resultado = document.querySelector('#resultado');

  const p = criaP();
  if (verdadeiro) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p)
}