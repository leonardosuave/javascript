const produto = {nome: 'lapis', preco: 1.8};
//Para saber se posso ou não modificar os valores das chaves
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

Object.defineProperty(produto, 'nome', {
    //value: se inserir valor aqui, será modificado o nome e nao tera mais como modificar novamente devido writable e configurable ser false.
    writable: false,
    configurable: false
});
produto.nome = 'Outra coisa' //Não será modificado o nome devido a nova configuração de writable aplicado por defineProperty.
produto.preco = 3.75 // Vai alterar devido o defineProperty feito ser especificamente para nome.
console.log(produto)