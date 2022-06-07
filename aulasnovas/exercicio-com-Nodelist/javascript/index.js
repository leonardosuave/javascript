//Identificar o Let paragrafo para depois poder identificar os 'p' que serão identificados com a Let 'ps'.
let paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

//método para identificar a cor do background da página html.

//essa linha vai capturar todas as CSS utilizadas na pagina html.
const estilosBody = getComputedStyle(document.body); 

//seleciona a CSS desejada para copiar
const backgroundColorBody = estilosBody.backgroundColor;  

// Só para mostrar no Console a cor em RGB --> rgb(0, 139, 139).
console.log(backgroundColorBody); 

for(let i of ps) {
    //Para mostrar na tela todos os paragrafos.
    console.log(i)

    //Para cada i em ps, teremos este background e color.
    i.style.backgroundColor = backgroundColorBody
    i.style.color = 'white'
}