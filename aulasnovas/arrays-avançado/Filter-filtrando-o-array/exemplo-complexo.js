//Retorne as pessoas que tem o nome com 5 letras ou mais.
//Retorne as pessoas com mais de 50 anos.
//Retorne as pessoascujo nome termina com (a). 

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5
);//Com arrow function.
console.log(pessoasComNomeGrande)

const pessoasCom50ouMais = pessoas.filter(function(obj) { //com funcao anonima.
    return obj.idade > 50;
})
console.log(pessoasCom50ouMais);

const pessoasTerminaA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(pessoasTerminaA)