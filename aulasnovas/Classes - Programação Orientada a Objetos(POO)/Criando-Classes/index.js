//Classes são as mesmas coisas que constructor function, apenas é escrito de forma diferente.

class Pessoa {
    //constructor é o método para passar parâmetros.
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome;
    }  
    
    //Criando métodos (igual a factory function que cria método no prototype do objeto)
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

//Intância (Criação de objeto a partir do molde(classe, constructor function.))
const p1 = new Pessoa('Leonardo', 'Suave');
const p2 = new Pessoa('Tassiane', 'Pinheiro')
console.log(p1)
console.log(p2)

