const produto = {nome: 'lapis', preco: 1.8, material: 'plastico'};
console.log(Object.entries(produto));

//Para iterar cada chave e valor e fazer o destructer
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}