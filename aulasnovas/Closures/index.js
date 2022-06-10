//Closure = É a habilidade de uma função en acessar seu escopo léxico.

function retornFuncao(nome) {
    return function() {//retorna uma function anonima.
        return nome; //vai buscar o a var nome em seu vizinho
    };
}
const funcao = retornFuncao('Leonardo');
console.log(funcao());

//--------------------------------------------------

function retornFuncao1() {
    const nome = 'Tassiane';
    return function() {//retorna uma funcao anonima.
        return nome;
    }
}
const funcao2 = retornFuncao1('Leonardo');
console.log(funcao2());