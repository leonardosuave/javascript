const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);
//Pesquisar na Tabela ASCII
const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 103));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~[]{}!@#$%^*()_+=-/?';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//console.log(geraMaiusculas())
//console.log(geraMinusculas())
//console.log(geraNumero())
//console.log(geraSimbolo())

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const SenhaArray = []; //Mais facil de jogar os caracteres na senha.
    qtd = Number(qtd); //Para garantir que será um número

    for(let i =0; i < qtd; i++) {
        //Avaliação de curto circuito
        maiusculas && SenhaArray.push(geraMaiusculas());
        minusculas && SenhaArray.push(geraMinusculas());
        numeros && SenhaArray.push(geraNumero());
        simbolos && SenhaArray.push(geraSimbolo());
    }

    return SenhaArray.join('').slice(0, qtd);
}

