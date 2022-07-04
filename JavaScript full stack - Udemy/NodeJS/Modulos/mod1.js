const nome = 'Leonardo'
const sobrenome = 'Suave'

const falaNome = () => `${nome} ${sobrenome}`


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
this.qualquerCoisa = 'O que quiser exportar.'

//module.export = {nome, sobrenome, falaNome} -> Para exportar varios dados de uma unica vez 

//exports.nome = nome -> exports = modules.exports

class Pessoa {
    constructor(pet) {
        Object.defineProperty(this,'nome', {
            enumerable:true,
            value: pet
        })
    }
}
exports.Pessoa = Pessoa