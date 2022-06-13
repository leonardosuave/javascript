function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
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

console.log(p1.fala('falando sobre JS')); //Para método normal.
console.log(p1.nomeCompleto) //Para getter
console.log(p1.imc) //Para getter
