function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function() { //Método - função dentro de um objeto.
            return `${nome} esta falando`;
        }
    };
}
const p1 = criaPessoa('Leonardo', 'Suave');
console.log(p1);