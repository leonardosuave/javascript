function criaTempo(min, max) {
    min *= 1000; //1000 para passar os segundos que vai receber para ms.
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{

        //Caso caia em Reject, o código pula direto pro Catch.
        if(typeof msg !== 'string') reject('BAD VALUE') 
        setTimeout(() => { 
            
            //Caso caia em Resolve, o código segue a ordem com .then()
            resolve(msg) //Este parâmetro é unico(não pode enviar mais de um parâmetro)
        }, tempo); //Significa que a função vai demorar este tempo pra ser executada.
    });
};


esperaAi('Conexão com a Base de dados.', criaTempo(1, 3)).then(resposta =>{
    console.log(resposta);
    return esperaAi('Buscando dados da Base de dados...', criaTempo(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(33366, criaTempo(1, 3))
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibindo os dados da Base de dados na tela.')
}).catch(e => {
    console.log('[ERRO].', e)
})

//.then() - Sempre que o resolve() for executado o .then() também será. Recebe uma funçao

//.catch() - Sempre que reject() for executado o .catch() também será para captar o erro. Recebe uma funçao
