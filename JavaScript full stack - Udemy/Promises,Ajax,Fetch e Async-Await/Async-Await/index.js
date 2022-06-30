
//function para criar um número aleatório
function criaTempo(min, max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise(function(resolve, reject){

        //setTimeout() apenas simula o tempo de retorno de algo
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject ('BAD VALUE')
                return;
            }
            resolve('Passei na ' + msg)
            return;
        },tempo)
    })
}

//async permite utilizar await dentro de uma função.
//await faz esperar a promisse ser finalizada.
async function executa() {

    try {
        const fase1 = await esperaAi('Fase 1', criaTempo(1,5));
        console.log(fase1)
    
        const fase2 = await esperaAi('Fase 2', criaTempo(1,5));
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', criaTempo(1,5));
        console.log(fase3)
        console.log('Terminamos na' + fase3)
    } catch(e) {
        console.log(e)
    }
    
}
executa()
const Pendente = esperaAi('Olá', 5000)
console.log(Pendente) //Neste caso vai dar <pendring> a promisse foi executada sem async/await ou then/catch, e neste caso o console.log chama a constante antes de finalizar a execução da Promise.

/*Código ainda verboso.
esperaAi('Fase 1', criaTempo(0, 3)) .then( valor => {
    console.log(valor);
    return esperaAi('Fase 2', criaTempo(1,3))
}) .then( fase => {
    console.log(fase);
    return esperaAi('Fase 3', criaTempo(0,5))
}) .then(ultimo => {
    console.log(ultimo);
}) .catch(erro => {
    console.log(erro)
})*/