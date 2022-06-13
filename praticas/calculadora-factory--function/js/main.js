function criaCalculadora() {

  return {
    display: document.querySelector('.display'),



    inicia() {//metodo
      this.cliqueBotoes();
    },
    cliqueBotoes() {//metodo
      document.addEventListener('click', function(e) {
        const elemento = e.target; 

        if(elemento.classList.contains('btn-num')) {
          this.btnParaDisplay();//metodo dentro de outro metodo.
        }
      }.bind(this))
    },
    

  };
}
const calculadora = criaCalculadora();
calculadora.inicia();
