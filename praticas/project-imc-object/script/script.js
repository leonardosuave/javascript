var formulario = window.document.querySelector('.form');
var res = window.document.querySelector('.res');
var pessoas = [];

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    var inputnome = document.querySelector('.nome');
    var inputsobrenome = document.querySelector('.sobrenome');
    var inputpeso = document.querySelector('.peso');
    var inputaltura = document.querySelector('.altura');

    var nome = String(inputnome.value);
    var sobrenome = String(inputsobrenome.value);
    var peso = Number(inputpeso.value);
    var altura = Number(inputaltura.value); 

    var imc = checkimc(peso, altura);
    var nivel = checknivel(imc);
    
    if(!nome){
        recebe('[ERRO] Nome inválido.', false)
        return;
    }

    if(!sobrenome){
        recebe('[ERRO] Sobrenome inválido.', false)
        return;
    }

    if(!peso){
        recebe('[ERRO] Peso inválido.', false)
        return;
    }

    if(!altura){
        recebe('[ERRO] Altura inválida.', false)
        return;
    }
    

    pessoas.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura,
        imc: imc,
        nivel: nivel
    });

    console.log(pessoas)

    var msg = `<p>${nome} ${sobrenome}, ${peso}Kg e altura de ${altura}m</p> <p> Seu IMC é ${imc} (${nivel}). </p>`

    recebe(msg, true);

    nome.value = ''
    sobrenome.value = ''
    peso.value = ''
    altura.value = ''

})

function checkimc (p, a) {
    var imc = p / a
    return imc.toFixed(2)
}

function checknivel (imc) {
    var nivel = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3' ]
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 30.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.9) return nivel[1];
    if(imc < 18.9) return nivel[0]; 
}

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

function recebe(msg, verdadeiro) {

    if(verdadeiro) {
        res.classList.add('paragrafo-resultado');
    } else {
        res.classList.add('bad')
    }

    res.innerHTML = msg
};