function criaTempo(min, max) {
    min *= 1000; //1000 para passar os segundos que vai receber para ms.
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo); //Significa que a função vai demorar este tempo pra ser executada.
}

esperaAi('Frase 1', criaTempo(1, 3));
esperaAi('Frase 2', criaTempo(1, 3));
esperaAi('Frase 3', criaTempo(1, 3));