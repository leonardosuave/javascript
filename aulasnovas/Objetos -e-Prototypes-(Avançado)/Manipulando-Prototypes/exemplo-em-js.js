function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

//Criação de método por prototype
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
    this.preco = this.preco.toFixed(2);
}
//obj dinâmico por constructor function
const p1 = new Produto('Camiseta', 50);

//objeto literal
const p2 = {
    nome: 'Moletom',
    preco: 57.5, 
};
Object.setPrototypeOf(p2, Produto.prototype);

//Criando p3 já vinculado com Produto.prototype (criar chave manual);
const p3 = Object.create(Produto.prototype)
p3.nome = 'Regata'
p3.preco = 37

//Criando p3 já vinculado com Produto.prototype (criar chave manual / Opicional);
const p4 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        value: 'calça',
        writable:true,
        configurable: true
    },
    preco: {
        enumerable: true,
        value: 42,
        writable:true,
        configurable: true
    }
})


p1.desconto(10);
p2.aumento(15);
p3.aumento(10);
p4.desconto(15);
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
