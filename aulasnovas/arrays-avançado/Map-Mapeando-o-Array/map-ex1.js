//Similar ao filter, entretanto o retorno final é alterado.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Dobre os números
const numerosEmDobro = numeros.map(valor => valor * 2); //Por arrow function. Funcionaria por função anonima.
console.log(numerosEmDobro)