const produto = {nome: 'lapis', preco: 1.8};

const caneca = Object.assign({}, produto, {material: 'madeira'});

//Método manual para pegar apenas as chaves dos objetos que quero(Extremamente manual).
const manual = {nomeProduto: produto.nome, nomeMaterial: caneca.material}

caneca.nome= 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
console.log(manual);