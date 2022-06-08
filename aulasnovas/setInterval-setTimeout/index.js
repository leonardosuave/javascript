//funções disponível no Node e no Navegador.
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
//Por função anonima. (Mais rápido)
const timer = setInterval(function() {console.log(mostraHora())}, 1000) 

//Para parar o contador
setTimeout(function() {clearInterval(timer);}, 5000);

//Para exibir uma mensagem quando o contador parar
setTimeout(function() {
    console.log('Olá Mundo!');
}, 5000);

/*Para definir um intervalo de tempo para uma função ser execultada em determinado momento --> setInterval(nome da funcao de repetição, tempo de repetição).

colocar o nome da função que vai ser execultada dentro do parâmetro desta função e o tempo que será execultado separado por virgula --> 1 segundo == 1000 ms */

/*
function funcaoDoInterval() {
    console.log(mostraHora())
}
setInterval(funcaoDoInterval, 1000); 
*/
