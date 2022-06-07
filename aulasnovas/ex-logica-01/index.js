//Função que recebe 2 números e retorna o maior deles
//Função refatorada da ultima

//Por Arrow function com return em função ternária
const maiorNumero = (x, y) => x > y ? x : y
let maior = maiorNumero(7, 9)
console.log(`O maior número é ${maior}`) //poderia chamar a função direto no console.log --> console.log(maiorNumero(7,9))

/*
-------------------------------------------------
//Por Arrow function
const maiorNumero = (x, y) => {
    return x > y ? x : y
}
let maior = maiorNumero(7, 9)
console.log(`O maior número é ${maior}`)

-------------------------------------------------
Por função ternária
function maiorNumero(x, y) {
    return x > y ? x : y
}
let maior = maiorNumero(7, 9)
console.log(`O maior número é ${maior}`)

------------------------------------------------
//If reduzido com um unico return
function maiorNumero(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}
let x = 9
let y = 7
let maior = maiorNumero(x, y)
console.log(`O maior número é ${maior}`)

-------------------------------------------------
//Minha construção
function maiorNumero(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
let x = 9
let y = 7
let maior = maiorNumero(x, y)
console.log(`O maior número é ${maior}`)
*/