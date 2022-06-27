const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome, cor) {
        this.nome = nome,
        this.cor = cor,
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor > 100) return this[_velocidade] = 100;
        if(valor < 0) return this[_velocidade] = 0;
        this[_velocidade] ++
        return this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }
    
    acelerar(){
        if(this[_velocidade] > 100) return;
        this[_velocidade] += 2;
        if(this[_velocidade] > 100) return this[_velocidade] = 100;
    }

    frear() {
        if(this[_velocidade] < 0)  return;
        this[_velocidade] -= 2
        if(this[_velocidade] < 0) return this[_velocidade] = 0;
    }
}

const c1 = new Carro('Fusca', 'branco')


c1.velocidade = 'oi'
c1.acelerar()
c1.acelerar()
c1.acelerar()
c1.acelerar()
c1.acelerar()
c1.frear()
console.log(c1.velocidade)