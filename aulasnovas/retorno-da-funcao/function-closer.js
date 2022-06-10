function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n* multiplicador;
    };    
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)

console.log(duplica(2));
console.log(triplica(2));

//Const duplica vai executar a function criaMultiplicador(2) e o parâmetro enviado será salvo dentro da function (n) interna. Depois a Const duplica vai receber a function(n) de retorno apos executar criaMultiplicador(2) e o console.log vai execultar a function(n) que foi enviado para duplica e passar o parametro(2) para (n).