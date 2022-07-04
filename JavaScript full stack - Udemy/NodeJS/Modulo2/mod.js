
//Similar ao export default
//Exporta apenas um dado.
module.exports = function(x, y) {
    return x * y
}

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
