function criaProduto (produto) {
    return {
        get nome() {
            return produto
        },
        set nome(valor) {
            produto = valor
        }
    }
}
const p2 = criaProduto('Camiseta')
console.log(p2) //vai mostrar um getter.
console.log(p2.nome)//vai mostrar camisetaque esta vinculado ao nome.
p2.nome = 'Qualquer coisa' //modifica o nome de p2 para Qualquer coisa.
console.log(p2.nome)//Mostra o nome ja modificado.
