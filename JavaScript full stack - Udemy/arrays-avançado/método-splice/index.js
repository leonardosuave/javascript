//Faz a mesma coisa que pop(), push(), shift(), unshift() e outras coisas .

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabruel', 'Julia'];

//nomes.splice(índice, delete, elem1, elem2, elem3);
//pop()

//removendo indices
/*const removidos = nomes.splice(2, 2)
//const removidos = nomes.splice(-3, 2) - Faz mesma coisa que o de cima .
console.log(nomes, removidos)*/

//Adicionando elementos aos índices.
const adicionar = nomes.splice(3, 0, 'Leonardo') //Se o segundo valor fosse 1 ou mais, seria retirado os elementos e colocado Leonardo no lugar do primeiro elemento retirado.
console.log(nomes, adicionar)

//const removidos  = nomes.splice(-1, 1) - simula o pop();

//const removidos = nomes.splice(0, 1) - simula o shif();

//const removidos = nomes.splice(nomes.length, 0, 'Leonardo') - simula o push();

//const removidos = nomes.splice(0, 0, 'Leonardo') - Simula o unshift.
