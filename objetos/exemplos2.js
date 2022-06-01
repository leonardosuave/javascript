/*{ } indica que é um objeto - [] indica que é um array
var pessoal = {
nome: 'Leonardo', sobrenome: 'Suave', idade: 26
}

console.log(pessoal.nome)
console.log(pessoal.sobrenome)
console.log(pessoal.idade) 
*/

//Função que cria varios objetos

function criapessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

var pessoal = criapessoa ('Leonardo', 'Suave', 26)
var pessoal2 = criapessoa ('Tassiane', 'Pinheiro', 29)
var pessoal3 = criapessoa ('Judite', 'Suave', 2)

console.log(pessoal.nome, pessoal2.nome, pessoal3.nome)