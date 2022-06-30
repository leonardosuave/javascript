const produto = {nome: 'lapis', preco: 1.8};

const caneca = Object.assign({}, produto, {material: 'madeira'});

const manual = {nomeProduto: produto.nome, nomeMaterial: caneca.material}

console.log(Object.keys(produto))
console.log(Object.keys(caneca))