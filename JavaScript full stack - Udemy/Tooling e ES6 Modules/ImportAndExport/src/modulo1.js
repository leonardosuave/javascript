const nome = 'Luiz';
const sobrenome= 'Miranda';
const idade = 30;

const nomeCompleto = `${nome} ${sobrenome}`

export /*default*/ function soma(x, y) {
    return x + y
};

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}

export {nome, sobrenome as sobrenomeExport, idade, soma as default}