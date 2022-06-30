//funções disponível no Node e no Navegador.
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
//Para definir um intervalo de tempo para uma função ser execultada em determinado momento.
function funcaoDoInterval() {
    console.log(mostraHora())
}
setInterval(funcaoDoInterval, 1000); //colocar o nome da função que vai ser execultada dentro do parâmetro desta função e o tempo que será execultado separado por virgula --> 1 segundo == 1000 ms
