document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()
    //console.log(elemento)

    if(tag === 'a') {
        e.preventDefault();
        carregarPagina(elemento)
    }
})

async function carregarPagina(elemento) {
    
    //Para tratar com try catch (necessário com async/await)
    try {
        const href = elemento.getAttribute('href'); //P/ pegar o href do elemento
        const response = await fetch(href);         //Verifica se vai executar sem erros o href

        //Se carregar normalmente vai ocorrer o status 200.
        if(response.status !== 200) throw new Error( 'ERRO 404!')

        const html = await response.text()          //Vai atribuir o texto da pagina carregada (pag html)
        carregarResultado(html)   
    } catch(e) {
        console.log(e)
    }    
}

function carregarResultado(html) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = html                      //Para aparecer o texto da pagina nova carregada na repartição div.
}
