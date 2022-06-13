function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
           valor = valor.split(' '),//Para transformar os nomes em vetores separados pelo espaço.
           this.nome = valor.shift(); //Para atribuir o primeiro nome do vetor valor em nome. 
           this.sobrenome = valor.join(' ')
           
        },

        fala: function(assunto) { //Método - função dentro de um objeto.
            return `${nome} esta ${assunto}`;      
        },
        altura: a,
        peso: p,

        //getter
        get imc() {
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Leonardo', 'Suave', 1.8, 85);
p1.nomeCompleto = 'Tassiane de Paula Pinehro Coelho'
console.log(p1.nomeCompleto) //Vai mostrar o nome completo
console.log(p1.nome) //Vai mostrar apenas o primeiro nome
console.log(p1.sobrenome) //Vai mostrar todo o sobrenome nome.
