function criaCalculadora() {

  return {
    display: document.querySelector('.display'),
    


    inicia() {//metodo
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() { //Método adicionando this por arrow function (não precisa redeclarar This. Ja está como calculadora.)
      this.display.addEventListener('keypress', (enter) => {
        if(enter.keyCode ===13) {
          this.realizaConta();
        }
      })
    },

    apagarCaracteres() {
      this.display.value = this.display.value.slice(0, -1) //slice(0, -1) significa que é o tamanho da string -1.
    },

    clearDisplay() {
      this.display.value = '';       
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta)

        if(!conta) {
          alert('Conta inválida');
          return
        }

        this.display.value = String(conta);
      }catch (e) {
        alert('Conta inválida');
      }
    },

    cliqueBotoes() {//metodo -- Precisa redeclarar o this que está como document para cálculadora.
      document.addEventListener('click', function(e) {
        const elemento = e.target; 

        if(elemento.classList.contains('btn-num')) {
          this.btnParaDisplay(elemento.innerText);//metodo dentro de outro metodo. Vai pegar o innerText do elemento.
        }

        if(elemento.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(elemento.classList.contains('btn-del')) {
          this.apagarCaracteres();
        }

        if(elemento.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      }.bind(this)); //.bind(this) faz com que o This seja da calculadora e náo o document.
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
      
    }
    

  };
}
const calculadora = criaCalculadora();
calculadora.inicia();
