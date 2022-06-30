//Promise.all

//Vai resolver todas as promises e me retornar todas juntas em um array.

function criaTempo(min, max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{

        if(typeof msg !== 'string') reject('BAD VALUE') //caso caia neste erro, vai Direcionar para o catch() e vai retornar apenas BAD VALUE e não vai executar os resolve().
        setTimeout(() => { 
            resolve(msg) 
        }, tempo); 
    });
};

const promises = ['Primeiro valor', esperaAi('Promise 1', 3000),
esperaAi('Promise 2', 500),
esperaAi(3, 1000), 'Outro valor'];

Promise.all(promises). then(function(valor) {
    console.log(valor)
}).catch(function(erro){
    console.log('[ERRO].', erro)
})