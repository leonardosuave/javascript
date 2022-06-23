class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    } //Aqui vai chamar o nome e sobrenome atribuido em class Pessoa.

    set nomeCompleto(valor) { //Aqui vai adicionar o novo sobrenome, ficando Judite Pinheiro Suave.
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join();
        this.sobrenome = this.sobrenome.replace(',', ' ') //Para retirar a virgula formada entre os dois sobrenomes .
        
    }
}

const p1 = new Pessoa('Judite', 'Suave');
p1.nomeCompleto = 'Judite Pinheiro Suave' //Utilizado para o Setter.
console.log(p1) //Chama o objeto já com o novo sobrenome adicionado por Setter.
console.log(p1.sobrenome)//chama o novo sobrenome adicionado por Setter.