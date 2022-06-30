//Produto -> aumento, desconto
//Camisa = cor, Caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + this.preco * (percentual / 100);
};
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - this.preco * (percentual / 100);
};

//Herda o que vem de Produto. Posso adicionar coisas especificas nos filhos(Camiseta).
function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor; //Adicional no filho (camiseta).
};

Camiseta.prototype = Object.create(Produto.prototype) //Cria um objeto vazio e seta o proto Produto dentro deste objeto, que no final será o mesmo proto para Camiseta e desta forma Produto.prototype.(desconto/aumento) irão funcionar em camiseta.(aumento/desconto). 
Camiseta.prototype.constructor = Camiseta; //Após executar a linha acima, vai aparecer que o construtor do objeto responsavel por criar camiseta é a funcão construtora Produto, Portanto é necessário modificar para função construtora Camiseta -> Camiseta.prototype.constructor = Camiseta (antes era Produto).

//Método adicional para Camiseta ( que é filho de Produto) - Vai afetar apenas no filho.
Camiseta.prototype.aumento = function(aumento) { //Vai sobrepor o aumento anterior no _Proto_ devido ter dois métodos Camiseta.prototype.aumento (identificar como aumentoReal para aplicar este novo aumento)
    this.preco += aumento;
};


function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco); //Herda de Produto
    this.material = material;  
    //this.estoque = estoque;  
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return; //retorna nada
            estoque = valor; //se não, retorna isso.
        }
    });
};
Caneca.prototype = Object.create(Produto.prototype);//Link de prototype
Caneca.prototype.constructor = Caneca; //Identificador de constructor.

const camiseta = new Camiseta ('Regata', 7.5, 'Preta');
const caneca = new Caneca ('Caneca', 6, 'Porcelana', 7);
camiseta.aumento(10);
caneca.desconto(10);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque); //vai mostrar o valor do [getter/setter] da caneca