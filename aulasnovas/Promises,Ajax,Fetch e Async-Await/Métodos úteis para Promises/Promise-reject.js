//Promise.reject

//Retorna diretamente uma promessa rejeitada.

function criaTempo(min, max) {
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{        
        setTimeout(() => { 
            if(typeof msg !== 'string') {
                reject('BAD VALUE') 
                return;
            }
            resolve(msg);

        }, tempo); 
    });
};

function baixaPagina() {
    const emCache = true; 

    if(emCache) {
        return Promise.reject('Página em cache'); //Ja entrega uma promessa REJEITADA (não precisa esperar).
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

//dadosPagina refere-se ao emCache verdadeiro, que ja retorna 'Pagina em cache.
baixaPagina().then(dadosPagina => {
    console.log(dadosPagina)
}).catch(e => console.log('[ERRO].',e));