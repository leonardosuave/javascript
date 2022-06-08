var formulario = window.document.querySelector('.form');
var res = window.document.querySelector('.res');
var pessoas = [];

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    var nome = document.querySelector('.nome');
    var sobrenome = document.querySelector('.sobrenome');
    var peso = document.querySelector('.peso');
    var altura = document.querySelector('.altura');
    
    
    

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    });

    console.log(pessoas)

    var msg = `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    recebe(msg) 

    nome.value = ''
    sobrenome.value = ''
    peso.value = ''
    altura.value = ''

})

/* METODO PARA ADICIONAR A MSG EM UM (P).....Não vai apagar a mensagem anterior!!!!
function criaP() {
    var p = document.createElement('p')
    return p 
}

function recebe (msg) {
    var p = criaP()    
    p.innerHTML = msg
    res.appendChild(p)
        
}
*/

function recebe(msg) {
    res.innerHTML = msg
};
