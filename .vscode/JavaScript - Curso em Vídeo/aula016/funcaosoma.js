// n1 e n2 = 0 faz com que eles ja tenham esses valores antes de passar os parâmetros da função e evita falha na soma como resultado NaN (not a number)
function soma (n1=0, n2=0) {
    return n1 + n2
}
var v1 = 3 
var v2 = 4
var res = soma(v1, v2)
console.log(`A soma entre ${v1} e ${v2} é ${res}`)

/*
Poderia ser 
console.log(soma(3, 4)) 
*/