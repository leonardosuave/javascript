//Utilizada para reduzir o arrays a um unico elemento.
//É possivel fazer filter() e map() com reduce.

//Some todos os números(reduce)
//Retorne um array com os pares(filter)
//Retorne um array com o dobro dos valores(map)

//Total(reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador;
}, 0) //sem 0 passa a ser o valor do primeiro índice. 
console.log(total)

//Pares(filter);
/*
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [])
console.log(total) */
const par = numeros.filter(valor => valor % 2 === 0);
console.log(par);

//Dobro(map);
/*
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, [])
console.log(total)*/
const dobro = numeros.map(valor => valor * 2)
console.log(dobro);