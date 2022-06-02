var peso = window.document.getElementById('peso')
var altura = window.document.getElementById('altura')
var res = window.document.getElementById('res')

function calcular() {
  if (peso.value.length == 0 || altura.value.length == 0) {
    res.innerHTML = '[ERRO] Peso ou Altura invalido'
  } else {
    var imc = (Number(peso.value) / Number(altura.value))
    if (imc < 18.5) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está abaixo do peso.`
    } else if (imc >= 18.5 && imc <= 24.9) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está com peso normal.`
    } else if (imc >= 25 && imc <= 29.9) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está com sobrepeso.`
    } else if (imc >= 30 && imc <= 34.9) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está com obesidade grau 1.`
    } else if (imc >= 35 && imc <= 39.9) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está com obesidade grau 2.`
    } else if (imc >= 40) {
      res.innerHTML = `IMC igual à ${imc.toFixed(2)}. Você está com obesidade grau 3.`
    }
  }
}