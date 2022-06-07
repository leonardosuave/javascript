/*Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz.
Número é divisivel por 5 = Buzz.
Número é divisivel por 3 e 5 = FizzBuzz.
Número NÃO é divisivel por 3 e 5 = retorna o próprio número.
Checar se o número é realmente um número.
Use a função com números de 0 a 100 */

function checkNumero(numero) {
    if(typeof numero !== 'number') return (numero, 'não é um número');
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    if(numero % 3 !== 0 && numero % 5 !== 0) return numero; 
}
console.log('a', checkNumero('a')) // checar quando não é número.
for (let i = 0; i <= 100; i++){
    console.log(i, checkNumero(i))
}

/*Método com número aleatório entre 0 e 100 e sem checar se é número.
const min = 0
const max = 100
let rand = randomNumero(min , max);
let FizzorBuzz = checkNumero(rand)

function randomNumero(min, max) {
    let r = Math.random() * (max-min) + min; 
    return Math.floor(r);
}
function checkNumero(rand) {
    if(rand % 3 === 0 && rand % 5 === 0) return 'FizzBuzz';
    if(rand % 3 === 0) return 'Fizz';
    if(rand % 5 === 0) return 'Buzz'
    if(rand % 3 != 0 && rand % 5 != 0) return rand; 
}
console.log(`O número ${rand} é ${FizzorBuzz}`)
*/

