function meuEscopo () {
    const form = window.document.querySelector('.form');
    const res = window.document.querySelector('.res')
    const pessoas = []
    /*
    form.onsubmit = function (evento) { //função anonima
        evento.preventDefault(); //previne o envio do formulario
        alert(1)
        console.log('Formulário enviado.')
    };
    */    
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
                
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
        sobrenome.value = ''
        peso.value = ''
        altura.value = ''
    }

    form.addEventListener('submit', recebeEventoForm) //addevent é estilo onclick
}
meuEscopo();