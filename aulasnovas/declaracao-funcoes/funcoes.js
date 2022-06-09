//Declaração de função -- (Function hoisting)
//Function hoisting - Posso chamar a função em qualquer lugar do script - as funcoes declaradas vao para o topo do arquivo .

function falaOi() {
    console.log('Oie');
}
falaOi()


//Fist-Class Object

//Function Expression
const souUmDado = function() { //poderia ter um nome a function() anônima.
    console.log('Sou um dado');
}

//souUmDado()

//Neste caso a variavel passa a ser a função, e assim posso chamar a função pelo nome da variavel.
//Essa função pode ser chamada através de um parâmetro de uma outra função.

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo.')
    funcao(); //vai executar o parâmetro que é uma função.
}
executaFuncao(souUmDado);

//Arrow Function
const arrowFunction = () => {
    console.log('Sou uma Arrow Function')
};
arrowFunction();


//Dentro de um objeto pode ter uma função.

const obj = {
    falar: function() { //falar vai se tornar uma funcao falar(), devido o índice ter uma funcao anonima vinculada
        console.log('Estou falando...')
    },
    gritar() { //Posso executar um índice do objeto como uma funcao direta
        console.log('Estou gritando')
    }
};
obj.falar(); //Para executar a funcao que esta dentro do obj. Significa que dentro de obj possui a function falar() que será executada.
obj.gritar()