class Conta {
    constructor(agencia, conta, valor) {
        this.agencia = agencia;
        this.conta = conta;
        this.valor = valor;
        
    }
    contaCorrente(limite) {
        this.limite = limite
    };

    contaPoupanca() {
        this.agencia
        this.conta
        this.valor
    }
};

const p1 = new Conta(14, 25, 250)
const p2 = new Conta(20,25,300)
p1.contaCorrente(150)
p2.contaPoupanca()
console.log(p1)
console.log(p2)