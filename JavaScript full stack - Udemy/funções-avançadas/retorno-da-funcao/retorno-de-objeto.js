function criaPessoa(nome, sobrenome) { //O parâmetro da function declarada deve ser o mesmo do RETURN para que os nome possa ser declarados no objeto.
    return {nome, sobrenome};
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1)

//function criaPessoa faz o mesmo processo que:
//const p2 = {nome: 'Luiz', sobrenome:'Otávio'}
//console.log(p2)