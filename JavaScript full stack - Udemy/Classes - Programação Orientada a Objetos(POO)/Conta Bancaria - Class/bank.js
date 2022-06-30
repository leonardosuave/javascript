class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;        
    };  

};

class contaCorrente extends Conta{
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo),
        this.limite = limite;
    };

    verSaldo() {
        console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
    }
    sacar(valorSaque) {
        if((this.saldo + this.limite) < valorSaque){
            console.log(`Sando insuficiente: R$${this.saldo}`)
            return
        }
        this.saldo -= valorSaque;
        this.verSaldo();
    };
    depositar(valorDep) {
        this.saldo += valorDep;
        this.verSaldo()
    }
};
class contaPoupanca extends Conta{
    constructor(agencia,conta,saldo) {
        super(agencia,conta,saldo)
    };

    verSaldo() {
        console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
    }
    sacar(valorSaque) {
        if(this.saldo  < valorSaque){
            console.log(`Sando insuficiente: R$${this.saldo}`)
            return
        }
        this.saldo -= valorSaque;
        this.verSaldo();
    };
    depositar(valorDep) {
        this.saldo += valorDep;
        this.verSaldo()
    }
};
class contaPoupanca_Corrente extends contaCorrente{
    constructor(agencia, conta, saldo, limite) {
        super(agencia,conta,saldo,limite)
    };
};

const p1 = new contaCorrente(14, 25, 250, 100);
const p2 = new contaPoupanca(20,25,300);
const p3 = new contaPoupanca_Corrente(30,55,500,250);

p1.sacar(340)
p1.sacar(20)
p1.depositar(15)
console.log();
p2.sacar(285)
p2.sacar(20)
p2.depositar(7.5)
console.log()
p3.sacar(580);
p3.sacar(300)
p3.depositar(17)
