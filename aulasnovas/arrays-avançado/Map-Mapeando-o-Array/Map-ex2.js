//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//const idades = pessoas.map(function(obj) {
    //delete obj.nome - 1° Alternativa.
    //return obj      - 1° Alternativa.

    //return {idade: obj.idade}; - 2° Alternativa.
//})

const idades = pessoas.map(obj => ({idade: obj.idade})) //3° Alternativa.
console.log(idades)

const comIds = pessoas.map(function(obj, indice) {
    const novoObj = {...obj};
    novoObj.id = (indice + 1)
    return novoObj;
});
console.log(comIds);
