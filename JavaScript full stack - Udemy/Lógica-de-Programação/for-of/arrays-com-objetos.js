//For clássico - Geralmente com iteráveis (Array ou Strings)
//For In - Retorna o índice ou chave (String, arrays ou objetos)
//For Of - Retorna o valor em si (iteráveis, arrays ou strings)

const pessoas = [
    {nome: 'Leonardo', sobrenome:'Suave', idade: 26},
    {nome: 'Tassiane', sobrenome:'Pinheiro', idade: 29},
    {nome: 'Judite', sobrenome:'Pinheiro Suave', idade: 2},
    {nome: 'Panterinha', sobrenome:'Pinheiro Suave', idade: 4},
];

//Mesma coisa!
for(let i of pessoas) {
    console.log(i.nome)
}
console.log()
for(let i in pessoas) {
    console.log(pessoas[i].nome)
}