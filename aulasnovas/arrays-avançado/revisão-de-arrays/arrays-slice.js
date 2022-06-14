
//Para fatiar o array. Retirar indices.
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, -2);
console.log(novo);

//Para transformar string em Array
const nome1 = 'Tassiane de Paula Pinheiro Coelho';
const nomes1 = nome1.split(' '); //(' ') indica que serão divididos através dos espaços da string a ser transformada em array.
console.log(nomes1); 

//Para transformar um array em string
const nomes2 = ['Leonardo', 'Suave']
const nome2 = nomes2.join(' ')
console.log(nome2)