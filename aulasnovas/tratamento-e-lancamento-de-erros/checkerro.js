//verificando se há erro.
function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('X e Y precisa ser números.'); //Vai indicar um erro de referência. (Pode mudar o ReferenceError por outro tipo caso queira).
    }
    return x + y;
}


//tratamento do erro.
try {
    console.log(soma(5, 6))
    console.log(soma(5, '6'))
}   catch(erro) {
    console.log(erro) //Não é indicado mostrar esse tipo de erro para o usuário. mudar para qualquer outra coisa.
}