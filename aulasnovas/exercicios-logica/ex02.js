//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

//Por arrow function e reduzido (Metodo mais simples e rápido)
const ePaisagem = (largunra, altura) => largunra > altura //Ja retorna se é verdadeiro ou falso 
console.log(ePaisagem(75, 8))

/*
-------------------------------------------------
//Por arrow function com retorno de função ternária
const ePaisagem = (largunra, altura) => largunra > altura ? true : false 
console.log(ePaisagem(75, 8))

-------------------------------------------------
Por arrow function sem redução de código
const ePaisagem = (largunra, altura) => {
return largunra > altura ? true : false }
console.log(ePaisagem(75, 8))

-------------------------------------------------
Por função ternária
function ePaisagem(largunra, altura) {
    return largunra > altura ? true : false 
}
console.log(ePaisagem(75, 85))
*/
