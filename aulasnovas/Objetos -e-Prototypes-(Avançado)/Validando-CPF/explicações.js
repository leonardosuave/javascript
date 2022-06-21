// 705.484.450-52
// 070.987.720-03
/* 

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0   =   237

11 - (237 % 11) = 5 (Primeiro dígito)
se o número digito for maior que 9, consideramos 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x  
11  10  9   8   7   6   5   4   3   2   
77  0   45  32  56  24  20  20  0   10  =   284

11 - (284 % 11) = 2 (Primeiro dígito)
se o número digito for maior que 9, consideramos 0.

705.484.450-52 === 705.484.450-52 -> Válido
se não, -> Falso.
*/

let cpf = '705.484.450-52';
let cpflimpo = cpf.replace(/\D+/g, ''); 
cpfArray = Array.from(cpflimpo);
console.log(cpfArray.reduce((ac,val) => ac +Number(val), 0));