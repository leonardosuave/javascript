function criaTempo(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            if(typeof msg !== 'string') reject ('[ERRO], parâmetro não encontrado!');
            resolve (msg);
        }, tempo)
    })
}

const promisse = [esperaAi('Pesquisando...', criaTempo(1,5)), esperaAi('Filtrando valores', criaTempo(1,5)), esperaAi('Valor encontrado', criaTempo(1,5)), esperaAi(3, criaTempo(1,5))];
Promise.race(promisse).then( msg => {
    console.log(msg)
}).catch( msgErro => {
    console.log(msgErro)
});