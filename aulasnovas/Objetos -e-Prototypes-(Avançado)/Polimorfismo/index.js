// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.sacar = function(valorSaque) {
    if(this.saldo < valorSaque) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
    
    return 
}
    this.saldo -= valorSaque;
    this.verSaldo();
}
Conta.prototype.depositar = function(valorDeposito) {
    this.saldo += valorDeposito;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this,agencia,conta,saldo); //Vai chamar Conta e passar agencia,conta e saldo para criar.
    this.limite = limite //cria elemento limite especificamente para ContaCorrente
};
ContaCorrente.prototype = Object.create(Conta.prototype); //Linka ContaCorrente no prototype de Conta.
ContaCorrente.prototype.constructor = ContaCorrente; //ContaCorrente será o construtor do objeto.
ContaCorrente.prototype.sacar = function(valorSaque) {
    if((this.saldo + this.limite) < valorSaque) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
    
    return 
}
    this.saldo -= valorSaque;
    this.verSaldo();
}

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this,agencia,conta,saldo); //Vai chamar Conta e passar agencia,conta e saldo para criar.
    
};
ContaPoupança.prototype = Object.create(Conta.prototype); //Linka ContaCorrente no prototype de Conta.
ContaPoupança.prototype.constructor = ContaPoupança; //ContaCorrente será o construtor do objeto.

const pessoa1 = new ContaCorrente(1461, 350160, 350, 100);
pessoa1.sacar(15);
pessoa1.depositar(20);
pessoa1.sacar(35)
pessoa1.sacar(358);
pessoa1.sacar(62);
pessoa1.sacar(5);

console.log()

const cp = new ContaPoupança(12, 33, 0);
cp.sacar(15);
cp.depositar(20);
cp.sacar(35)
cp.sacar(358);
cp.sacar(62);
cp.sacar(5);

