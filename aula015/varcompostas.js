/*OBS: A ordem de declarar os comando vai influenciar nos resultados. Se num.push(7) for depois de num.sor() entáo teremos a reorganização dos valores e depois vai ser adicionado o 7 no final, ficando assim fora da ordem */

var num = [5,8,9,2]
num[4] = 3 //método para adicionar um valor dentro de um índice da var composta pré-determinada. Pode ser utilizado para substituir valor de um índice de dentro do vetor ja estabelecido com valor. ex num[3] = 4 substituiria o ultimo índice = 2 pelo valor 4 
num.push(7) // adiciona um indice no final com o valor 7

console.log(`Nosso valor do vetor é ${num} e tem um total de ${num.length} índices`)
console.log (`O terceiro valor do vetor é ${num[2]}`)
console.log (`Posição do valor 8 é ${num.indexOf(8)}`) //procurar posição do valor 8
console.log (`Posição do valor 6 é ${num.indexOf(6)}`) //procurar posição do valor 6 -- retorna -1 porque não existe este valor

//Esse método funciona para Array e Object no JavaScript 
for (var c in num) {
    console.log(`O valor do índice ${c} é ${num[c]}`)
}

/*
for(var c = 0; c<=(num.length - 1); c++) {
    console.log(`O valor do índice ${c} é ${num[c]}`)
}
*/

/* Método com DO WHILE
c = 0
do {
    console.log(`O valor do elemento é ${num[c]}`)
    c++
} while (c <= (num.length - 1))
*/
/* Método com While
c = 0
while (c <= (num.length - 1)) {
    console.log (`agora é ${num[c]}`)
    c++
}
*/