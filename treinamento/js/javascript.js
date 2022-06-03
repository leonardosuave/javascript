var form = window.document.getElementById('formulario')

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  var inputpeso = window.document.getElementById('peso');
  var inputaltura = window.document.getElementById('altura');
  var peso = Number(inputpeso.value);
  var altura = Number(inputaltura.value);
  
  if (!peso) {
    resultado('[ERRO] Peso inválido!', false)
    return 
  } 
  if (!altura) {
    resultado('[ERRO] Altura inválida!', false)
    return
  }
  
  var imc = calculoImc(peso, altura);
  var nivelPeso = nivelP(imc);
  var msg = `O IMC é ${imc} (${nivelPeso}).`

  resultado(msg, true);
})

function calculoImc(peso, altura) {
  var imc = peso / altura
  return imc.toFixed(2);
}

function nivelP(imc) {
  var nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function criaP() {
  var p = document.createElement('p')
  return p;
}

function resultado (msg, verdadeiro) {
  var res = window.document.querySelector('#resultado')
  res.innerHTML = '';
  var p = criaP();

  if (verdadeiro) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  res.appendChild(p);
}