//For in --> Lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 35
};

for (let i in pessoa) {
    console.log(i, pessoa[i])
}

//const chave = 'nome'
    //console.log(pessoa[chave])

//Para acessar o nome e o nome da pessoa
//console.log(pessoa.nome)

//for (let i in pessoa) {
   //console.log(pessoa)
//}

/*
const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i in frutas) {
    console.log(frutas[i])
} */