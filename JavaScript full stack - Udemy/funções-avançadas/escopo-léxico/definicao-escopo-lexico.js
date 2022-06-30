//Escopo Léxico = A function conhece o local ao qual foi declarado, tudo que está declarado dentro dela e o seus vizinhos (externo da function até chegar no escopo global).

const nome = 'Leonardo';

function falaNome() {
    console.log(nome); //a função vai tentar buscar a var nome dentro da propria função. Caso não encontre, vai buscar no pai da função, neste caso no escopo global.
}
falaNome();