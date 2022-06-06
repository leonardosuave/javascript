/*
Maneira rápida

const h1 = document.querySelector('.data h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full'
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

ou criando o objeto dentro do h1
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

*/



const h1 = document.querySelector('.data h1');
const data = new Date();
const ano = data.getFullYear();
var hora = data.getHours();
var min = data.getMinutes();

//Todas essas funções que envolve SWITCH são mais faceis utilizando ARRAYS [].

function getdiaDaSemana(dia) {
    let diaDaSemanaText; 
    
    switch (dia) {
    case 0:
        diaDaSemanaText = 'Domingo'
        return diaDaSemanaText
    case 1:
        diaDaSemanaText = 'Segunda-feira'
        return diaDaSemanaText
    case 2:
        diaDaSemanaText = 'Terça-feira'
        return diaDaSemanaText
    case 3:
        diaDaSemanaText = 'Quarta-feira'
        return diaDaSemanaText
    case 4:
        diaDaSemanaText = 'Quinta-feira'
        return diaDaSemanaText
    case 5:
        diaDaSemanaText = 'Sexta-feira'
        return diaDaSemanaText
    case 6:
        diaDaSemanaText = 'Sabado'
        return diaDaSemanaText            
    }
    
}

function getnomeMes(mes) {
    let mesnome; 
    
    switch (mes) {
    case 0:
        mesnome = 'Janeiro';
        return mesnome
    case 1:
        mesnome = 'Fevereiro';
        return mesnome    
    case 2:
        mesnome = 'Março'
        return mesnome
    case 3:
        mesnome = 'Abril'
        return mesnome
    case 4:
        mesnome = 'Maio'
        return mesnome
    case 5:
        mesnome = 'Junho'
        return mesnome
    case 6:
        mesnome = 'Julho'
        return mesnome
    case 7:
        mesnome = 'Agosto'
        return mesnome
    case 8:
        mesnome = 'Setembro'
        return mesnome
    case 9:
        mesnome = 'Outubro'
        return mesnome
    case 10:
        mesnome = 'Novembro'
        return mesnome
    case 11:
        mesnome = 'Dezembro'
        return mesnome
    }
}

function criarDATA(data) {
    const dia = data.getDay();
    const mes = data.getMonth();
    const nomedodia = getdiaDaSemana(dia);
    const nomedomes = getnomeMes(mes);

    return (`${nomedodia}, ${data.getDay()} de ${nomedomes} de ${ano}` +
    ` ${hora}:${min}`)
}

h1.innerHTML = criarDATA(data);

