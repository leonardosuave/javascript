var pessoas = []
var res = window.document.querySelector('.res')
let nome = window.document.querySelector('.nome')
let sobrenome = window.document.querySelector('.sobrenome')
let peso = window.document.querySelector('.peso')
let altura = window.document.querySelector('.altura')
function enviar () {                
    pessoas.push ({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas)

    res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    //Para apagar o escrito nas caixas
    nome.value = ''
    nome.focus()
    sobrenome.value = ''
    peso.value = ''
    altura.value = ''
    
}
