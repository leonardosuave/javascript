const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Suave',
    altura: 1.78,
    peso: 85
}
//Forma intuitiva de uso
console.log(pessoa.nome);
console.log(pessoa.altura);

//Forma dinâmica de uso
const retorno = 'sobrenome'
console.log(pessoa[retorno]); // variável = chave; Não colocar em aspas
console.log(pessoa['sobrenome']); //chave do objeto; colocar em aspas a chave