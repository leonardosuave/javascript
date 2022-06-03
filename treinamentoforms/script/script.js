function recebe () {
var formulario = window.document.querySelector('.form');
var pessoas = [];
var resultado = document.querySelector('.res')

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    var nome = document.querySelector('.nome');
    var sobrenome = document.querySelector('.sobrenome');
    var peso = document.querySelector('.peso');
    var altura = document.querySelector('.altura');
    
    

    pessoas.push ({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    });

    console.log(pessoas)

    var msg = `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    resultado.innerHTML += `${msg}`

    nome.value = ''
    sobrenome.value = ''
    peso.value = ''
    altura.value = ''
})
}
