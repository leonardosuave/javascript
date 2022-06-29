function criaTempo(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setInterval( () => {
            if(typeof msg !== 'string') reject ('[ERRO], parâmetro não encontrado!');
            resolve (msg);
        }, tempo)
    })
}

const promisse = [esperaAi('Pesquisando...', 1000), esperaAi('Filtrando valores', 1000), esperaAi('Valor encontrado', 1000), esperaAi('oi', 1000)];
Promise.all(promisse).then( function (msg) {
    console.log(msg)
}).catch( function (msgErro) {
    console.log(msgErro)
})