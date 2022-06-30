//Tentando adaptar o método de manipular prototypes da factory function para constructor function. (Criou um Prototype:Object dentro de outro Prototype:Objetc)

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
        this.nome = nome,
        this.sobrenome = sobrenome  
};

Pessoa.prototype = Object.create(PessoaPrototype);

const p1 = new Pessoa('Leonardo', 'Suave');
console.log(p1.falar())