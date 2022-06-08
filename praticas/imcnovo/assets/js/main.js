//Meu algoritmo adaptado com o da aula

var peso = window.document.getElementById('peso')
var altura = window.document.getElementById('altura')
var res = window.document.getElementById('res')

function check(p, a) {

  if (p.value.length == 0 || a.value.length == 0) {
    return false
  } else {
    return true
  }
}

function calculoIMC(p, a){
  var imc = Number(p.value) / Number(a.value)
  return imc.toFixed(2)
}

function nivelIMC(imc) {
  var nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3']

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function calcular() {
  if (check(peso, altura)) {
    var imc = calculoIMC(peso, altura)
    var nivel = nivelIMC(imc)
    res.innerHTML = `${imc} ${nivel}`
  } else {
    res.innerHTML = `[ERRO]. Corrija o valor de Peso ou Altura`
  }
} 
