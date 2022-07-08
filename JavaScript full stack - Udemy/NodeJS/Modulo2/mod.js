
//Similar ao export default
//Exporta apenas um dado.
module.exports = function(x, y) {
    return x * y
}

//Sobrepões o export acima.
module.exports = class Cachorro {
    constructor(nome) {
        Object.defineProperty(this, 'nome', {
            enumerable:true,
            value: nome
        })
    };
    Latir() {
        console.log(`${this.nome} está latindo`)
    };
};
