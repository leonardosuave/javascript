//  Neste caso as modificações sempre serão feitas em produtos, devido o objeto ser passado por referência.
const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

produto.nome = 'Leonardo Suave'
outraCoisa.preco = 3.75;
console.log(outraCoisa);
console.log(produto);

//Maneira de modificação sem interferir no objeto original (método spread).
//criando um objeto por definePropety
function Material(porc) {
    Object.defineProperty(this, 'material', {
        enumerable: true,
        value: porc,
        writable:false,
        configurable: false
    })
}

const add = new Material('porcelana');//criando o objeto por constructor function.

const novoProduto = {...produto, ...add}; //Spread ou Espalhar (juntando com um novo objeto criado por definePropety)
const mod1 = novoProduto;
mod1.preco = 1.01;
novoProduto.nome = 'Tassiane';
mod1.material = 'vidro'
console.log(novoProduto);

//Método assign