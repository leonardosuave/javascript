// IIFE -> Immediately invoked function expression. Utilizado para prevenir const, var, funcoes...etc, de tocar o escopo global.
/*
function qualquerCoisa() {
    console.log(11225);
}
//qualquerCoisa();  Neste caso quando eu chamo a função ela toca o escopo global. */

(function(i, p, a) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }       

    falaNome();
    console.log(i, p, a)
})(26, 80, 1.75);
