//molde
function Calculadora () {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.pressionarEnter();
  }

  this.capturaCliques = () => {
    document.addEventListener('click',(e) => {
      const elemento = e.target
      if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
      if(elemento.classList.contains('btn-clear')) this.clearDisplay();
      if(elemento.classList.contains('btn-del')) this.delCharacter();
      if(elemento.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.pressionarEnter = () => {
    document.addEventListener('keypress', (enter) => {
      if(enter.keyCode === 13) {
        this.realizaConta();
      }
    });
  }

  this.addNumDisplay = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus(); //Para tirar o focu do ultimo botão pressionado e assim poder apertar enter para efetuar o calculo.
  } //pode retirar {}, pois existe so uma linha de codigo com return.

  this.clearDisplay = () => {
    this.display.value = '';
  }

  this.delCharacter = () => {
    this.display.value = this.display.value.slice(0, -1);
  }

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida')
        return
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return
    }
  }  
}

const calculadora = new Calculadora();
calculadora.inicia();