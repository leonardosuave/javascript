//variavel arguments so funciona em funcoes definidas como function ou function expretion (funcao dentro de variavel).
function funcao() {
    //console.log('Oie') - seria executado sem passar parâmetro em funcao, mesmo havendo parametro na chamada.
    console.log(arguments[0]); // arguments vai executar tds os valores enviados como parâmetros na chamada da funcao em forma de objeto, mesmo que nã esteja anexado o parametro na definicao function funcao ().
}
funcao(3, 1, 5, 9);

//exemplo de soma dos parâmetros acima.
function funcao () {
    let total = 0;
    for(let argumento of arguments) { //arguments não funciona em arrow function
        total += argumento;
    }
    console.log(`O total é ${total}`)
    console.log(`O índice 2 de arguments é ${arguments[2]}`)
}

//-----------------------------------------------------------------------
