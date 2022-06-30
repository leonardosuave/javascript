//Método com Fetch API (GET).
  
document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();
  
    if(tag === 'a') {
      e.preventDefault() //Para prevenir o evento de carregar a nova página clicada. 
      carregaPagina(elemento);
    };
});
  
function carregaPagina(elemento){
  const href = elemento.getAttribute('href');
  //console.log(href)
    
  fetch(href).then(response => {
    if(response.status !== 200) throw new Error('ERRO 404!');
      return response.text()
  }).then(html => carregaResultado(html)).catch(e => console.log(e))  
};
  
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;  
};

/*//Para carregar a pagina 1 em html

//fetch() vai me retornar uma promise ja.
fetch('pagina4.html').then(resposta => {
  if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
  //Retorna o testo do arquivo html
  return resposta.text().then (html => console.log(html))
}).catch(e => console.error(e));*/