function Pessoa (nome,sobrenome) {
    const PessoaPrototype = {
        falar() { 
            console.log(`${this.nome} está falando`)
        },
        Comer() {
            console.log(`${this.nome} está comendo`)
        },
        Beber() {
            console.log(`${this.nome} está bebendo`)
        }    
    };
    return Object.create(PessoaPrototype, {
        nome: {value: nome}, //Posso colocar getter/setter, writable, enumerable...
        sobrenome: {value: sobrenome}
    }); //Para linkar 

        //Não recomendado! (consome muito recurso)
        /*falar() { 
            console.log(`${this.nome} está falando`)
        },
        Comer() {
            console.log(`${this.nome} está comendo`)
        },
        Beber() {
            console.log(`${this.nome} está bebendo`)
        }*/
}

const p1 = Pessoa('Leonardo', 'Suave');
console.log(p1.sobrenome)