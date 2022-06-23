function Pessoa (nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
};
Pessoa.prototype.comer = function() {
    console.log(`${this.nome} está comendo.`)
};
Pessoa.prototype.beber = function() {
    console.log(`${this.nome} está bebendo.`)
};

const p1 = new Pessoa('Leonardo', 'Suave');
const p2 = new Pessoa('Tassiane', 'Pinheiro')
console.log(p1)
console.log(p2)