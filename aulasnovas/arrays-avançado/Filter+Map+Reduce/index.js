//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Método curto
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador += valor);
console.log(numerosPares)

/* Método Maior
const numerosPares = numeros.filter(valor => valor % 2 === 0);
const DobroValores = numerosPares.map(valor => valor * 2);
const Soma = DobroValores.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador
}, 0);
console.log(numerosPares);
console.log(DobroValores);
console.log(Soma);
*/