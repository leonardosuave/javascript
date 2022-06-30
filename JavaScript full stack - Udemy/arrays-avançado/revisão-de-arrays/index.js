//Arrays são dados por referências.

const nomes = ['Leonardo', 'Tassiane', 'Judite'];
const novo = [...nomes] // vai copiar nomes para dentro de novo sem alteraçoes no array nomes

//Pode ser criado por construtor (pode ser utilizado em string, objetos, funções, numeros...) - não muito utilizado.
//const nomes = new Array('Leonardo', 'Tassiane', 'Judite');

//-----------------------------------------------------------------------
//Substituição e Remoção de índices.

nomes[2] = 'Panterinha'; //substitui o índice 2 por panterinha.

//delete nomes[0]; //Para remover um item do array através do índice -- vai criar um buraco no lugar (empty item).

nomes.pop(); //Vai remover o ultimo índice do array nomes.
const removido = nomes.pop(); //Vai remover o ultimo índice do array e jogar dentro da const removido.
const removido2 = nomes.shift(); //Remove o primeiro índice e realoca os demais para o inicio.

//------------------------------------------------------------------------
//Adicionar elementos no array

nomes.push('Neguinha'); //Vai adicionar um elemento no final no array nomes.
nomes.unshift('Torresmo'); //Vai adicionar um elemento no começo e realocar os demais elementos para os proximos índices.

console.log(nomes);
console.log(novo);
console.log(removido);
console.log(removido2);