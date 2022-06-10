//Neste caso estamos simulando o acesso em um banco de dados, a uma API... etc. Isso gasta tempo para ser acessado e as funções podem não ser executadas na mesma ordem de chama. (Para isso simulamos com um timer random para cada função chamada)

function gerarIntervalo (min = 1000, max = 3000) {
    const tempo = Math.random() * (max-min) + min;
    return Math.floor(tempo)
}

function f1(callback) {
    setTimeout (function() {
        console.log('f1');
        if(callback) callback(); //significa se receber algum callback a funcao callback será executada.
    }, gerarIntervalo());
    
}

function f2(callback) {
    setTimeout (function() {
        console.log('f2');
        if(callback) callback(); //significa se receber algum callback a funcao callback será executada.
    }, gerarIntervalo());
}

function f3(callback) {
    setTimeout (function() {
        console.log('f3');
        if(callback) callback(); //significa se receber algum callback a funcao callback será executada.
    }, gerarIntervalo());
}

f1(f1callback); //O retorno de callback() faz com que f1callback seja uma f1callaback().

function f1callback() {
    f2(f2callback); //O retorno de callback() faz com que f2callback seja uma f2callaback().
}

function f2callback() {
    f3(f3callback); //O retorno de callback() faz com que f3callback seja uma f3callaback().
}

function f3callback() {
    console.log('Olá Mundo!')
}

//Callback hell - As function() anônimas permitem que as funções filhos não sejam executadas antes da pai/mae.
/* Não muito indicado.
f1(function() {
    f2(function() {
        f3(function(){
            console.log('Olá Mundo!');
        })
    })    
});
*/
