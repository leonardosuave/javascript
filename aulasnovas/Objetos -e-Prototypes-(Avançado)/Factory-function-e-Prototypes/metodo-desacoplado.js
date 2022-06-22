//Métodos desacoplados
const falar = {
    falar() { 
        console.log(`${this.nome} está falando`)
    },
}
const comer = {
    Comer() {
        console.log(`${this.nome} está comendo`)
    },    
}
const beber = {
    Beber() {
        console.log(`${this.nome} está bebendo`)
    } 
}

//Métodos acoplados ao PessoaPrototype.
const PessoaPrototype = {...falar,...comer,...beber} //Vincula os métodos por spread dentro do PessoaPrototype.

//ou

//const pessoaPrototype = Object.assign({}, falar, comer,beber);

function Pessoa (nome,sobrenome) {
    return Object.create(PessoaPrototype, {
        nome: {value: nome}, //Posso colocar getter/setter, writable, enumerable...
        sobrenome: {value: sobrenome}
    }); //Para linkar 
}

const p1 = Pessoa('Leonardo', 'Suave');
console.log(p1.sobrenome)