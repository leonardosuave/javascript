function funcao ({nome, ...resto}) {// O parâmetro está fazendo a desestruturação da funcao
    console.log(`Os itens pego na desestruturação do objeto dentro da função são ${nome} e`,resto)
    console.log(`--------------------------------------------`)
}
funcao ({nome: 'Leonardo', sobrenome: 'Suave', idade: 26}) //envio de um Objeto  argumento da funcao.

//-----------------------------------------------------------------------

function funcaoarray ([item1, item2, item3]) {
    console.log(`Os itens pego na desestruturação do array dentro da função são ${item1}, ${item2} e ${item3}`)
    console.log(`--------------------------------------------`)
}
let array = ['Leonardo', 'Suave', 26] //jogando uma variável dentro da função com os dados (array)...Pode ser um objeto também.
funcaoarray(array)

//----------------------------------------------------------------------

function conta(operador, acumulador, ...numeros) { //operador é '+', acumulador é 1 e ...numeros é o rest parameter que vai ficar em valor de array.
    for(let numero of numeros) {
        if(operador ==='+') acumulador += numero;
        if(operador ==='-') acumulador -= numero;
        if(operador ==='/') acumulador /= numero;
        if(operador ==='*') acumulador *= numero; 
    }
    console.log(`Os argumentos da função são:`, arguments)
    console.log(`O rest parameter é:`,numeros)
    console.log(`A soma é ${acumulador}`); 
}
conta('+', 1, 20, 30, 40, 50);