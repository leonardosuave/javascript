//molde
function Calculadora () {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click',(e) => {
      const elemento = e.target
      if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
      if(elemento.classList.contains('btn-clear')) this.clearDisplay(elemento);
      if(elemento.classList.contains('btn-del')) this.delCharacter(elemento);
      if(elemento.classList.contains('btn-eq')) this.realizaConta(elemento);
    });
  };

  this.clearDisplay = () => {
    this.display.value = '';
  }

  this.delCharacter = () => {
    this.display.value = this.display.value.slice(0, -1);
  }

  this.addNumDisplay = (elemento) => {
    this.display.value += elemento.innerText;
  } //pode retirar {}, pois existe so uma linha de codigo com return

  this.inicia = () => {
    this.capturaCliques();
  }
}

const calculadora = new Calculadora();
calculadora.inicia();