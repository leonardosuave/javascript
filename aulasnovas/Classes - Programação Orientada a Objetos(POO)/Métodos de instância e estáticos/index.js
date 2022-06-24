const _volume = Symbol('volume');
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this[_volume] = 0;
    }

    set volume(valor) {
        console.log(`volume ${this[_volume]} e Retorna o Setter!`)
        if(typeof valor !== 'number') return;
        if(valor >=60) return this[_volume] = 60;
        if(valor <= 0) return this[_volume] = 0;
        this[_volume] = valor
    }

    get volume() {
        console.log(`volume ${this[_volume]} e Retorna o Getter!`)
        return this[_volume]; //Vai direcionar volume para this[_volume]
    }

    //Método de instância
    aumentarVolume() {
        if(this[_volume] >= 60) return ;
        this[_volume] += 2;
    }
    //Método de instância
    diminuirVolume() {
        if(this[_volume] <= 0) return;
        this[_volume] -= 2;
    }

    //Método estático (pode receer parâmetro)
    static trocaPilha(pilha) {
        this.nomePilha = pilha
        console.log(`OK, vou trocar por uma ${this.nomePilha}.`)
    }
}

//Por instância (cria um novo objeto).
const controle1 = new ControleRemoto('Samsung')
controle1.volume;//Vai retornar o Getter
controle1.volume = 15 //Vai retornar o Setter
controle1.aumentarVolume()
console.log(controle1)

//Por método estático (não cria objeto pela class).
ControleRemoto.trocaPilha('Duracel') //Método estático. (Chama pela class, portanto não terei acesso a nenhum elemento do objeto, ja que não é criado.)
console.log(controle1.tv)
