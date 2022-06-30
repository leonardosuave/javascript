class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    Ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja esta ligado!`);
            return;
        }
        this.ligado = true;
    }

    Desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja esta desligado!`);
            return;
        }
        this.ligado = false; 
    }
}

//Criando uma class Smartphone que herda DispositivoEletronico (igual a DispositivoEletronico.call(this,nome) se fosse uma Constructor Function).
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) //Aqui passa todos os parâmetros que ja foram construidos na classe pai(DispositivoEletronico)
        
        //construtor especifico do Smarphone
        this.cor = cor
        this.modelo = modelo
    }
}

class Fones extends Smartphone {
    constructor(nome,cor,modelo,tipo,corf) {
        super(nome,cor,modelo);
        this.tipo = tipo;
        this.corf = corf;
    }

    Ligar() { //Este método vai sobrescrever o método ligar do pai(DispositivoEletronico)
        console.log('Você alterou o método ligar (sobrescreveu o Ligar() do Pai DispositivoEletronico')
    }
}


const s1 = new Fones('Iphone', 'Azul Cierra', '13 Pro Max', 'wireless', 'preto');
const s2 = new Smartphone('Samsung', 'Branco', 'S10')
s1.Ligar()
console.log(s1)
console.log(s2);
s1.Ligar()//Vai chamar o primeiro método Ligar() que encontrar, que vai estar dentro da class Fones (sobrescreve o método ligar do pai DispositivoEletronico)