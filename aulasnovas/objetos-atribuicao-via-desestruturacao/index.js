const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação

//Mudando nome da variavel dentro do objeto

//  --> nome se chama teste e caso náo tenha nenhum valor atribuido vai estar em branco ('') (valor padrão).

const {nome: teste = '', sobrenome} = pessoa;
console.log(teste, sobrenome)

const {endereco: {rua, numero}} = pessoa
console.log(rua, numero) 

/* Utilizando RESTO
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome,resto) */