const numeros = [10, 200, 3000, 45, 545, 665, 787, 89, 996];
/*
const primeironumero = numeros[0]
console.log(primeironumero)
*/

//vai buscar via desestruturação os primeiros dois indices e atribuir seus valores

//, ...resto -> Faz com que o resto dos numeros do arrays seja atribuido no resto.
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

/*
indices:             0          1          2
                  0  1  2    0  1  2    0  1  2   
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [ ,[ , ,seis]] = numeros;  OU

const [lista1, lista2, lista3] = numeros;   --> Mais facil
console.log(lista2[2])
*/