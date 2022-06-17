let pessoa = new Object();
pessoa.nome = 'Leonardo';
pessoa.sobrenome = 'Suave';
pessoa.altura = 1.78;
pessoa.peso = 85;
pessoa.idade = 26;

console.log(`${pessoa.nome} está falando.`) // ou
pessoa.falarNome = function() { //pessoa.falaNome é um método que chama uma função.
    console.log(`${this.nome} está falando.`)
}

pessoa.dataNasc = function() {
    const anoAtual = new Date();
    return `O ano de nascimento de ${this.nome} é ${anoAtual.getFullYear() - this.idade}`;
}
console.log(pessoa.dataNasc());
pessoa.falarNome(); //AÇÃO DENTRO DO OBJETO QUE DA ACESSO AS CHAVES DO OBJ

for(let chave in pessoa) {
    console.log(pessoa[chave])
}