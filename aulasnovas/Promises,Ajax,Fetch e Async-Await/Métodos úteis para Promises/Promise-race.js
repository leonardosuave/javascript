//Promise.race

//Vai resolver todas as promises e me retornar a que finalizar primeiro.

function criaTempo(min, max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{

        if(typeof msg !== 'string') reject('BAD VALUE') //caso caia neste erro, vai Direcionar para o catch() e vai retornar apenas BAD VALUE e não vai executar os resolve(). NESTE CASO SEMPRE CAI AQUI, PORQUE O ERRO NÃO É DIRECIONADO PARA O SETTIMEOUT, CASO FOSSE LÁ TERIA CHANCE DE CAIR NO ERRO APENAS.
        setTimeout(() => { 
            resolve(msg) 
        }, tempo); 
    });
};

const promises = [esperaAi('Promise 1', criaTempo(1, 5)),
esperaAi('Promise 2', criaTempo(1, 5)),
esperaAi(333, criaTempo(1, 5))];

Promise.race(promises).then(function(valor) {
    console.log(valor)
}).catch(function(erro){
    console.log('[ERRO].', erro)
})