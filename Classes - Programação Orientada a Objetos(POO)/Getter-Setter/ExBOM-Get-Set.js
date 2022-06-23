const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    //caso c1.velocidade = valor
    set velocidade(valor) {
        console.log('Setter')
        if(typeof valor !== 'number') return;
        if(valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;//Se o valor for numero e entre 0 e 100 será permitido configurar a velocidade.
    }

    //c1.velocidade, sem valor atribuido.  
    get velocidade() { //Mesmo se for chamado c1.velocidade(valor), vai me retornar o this[_velocidade] com seu valor atribuido.
        console.log('Getter')
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');
// c1.velocidade = 1500 
// Prevenir que insira essa velocidade ao fusca por engano (Neste caso vai atribuir esse valor de 1500 na chave acelerar.)
c1.velocidade = 99
console.log(c1.velocidade)
