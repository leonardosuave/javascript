//XMLHttpRequest -> Faz requisição de diversos tipos de dados, como:HTML, JSON, XML, texto puro, entre outros.

const request = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET',method, obj.url, true)
  xhr.send(); //refere-se se estivesse recebendo algum post de formulário.(Neste caso não esta).

  xhr.addEventListener('load', () => {

    //cod entre 200 e 300 - requisição de sucesso.
    if(xhr.status >= 200 && xhr.status <= 300) {

      //função de callback de sucesso
      obj.success(xhr.responseText);
    } else {
      obj.error
    }
  })
};

document.addEventListener('click', e => {
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();
  console.log(elemento)//apagar depois

  if(tag === 'a') {
    e.preventDefault() //Para prevenir o evento de carregar a nova página clicada. 
    carregaPagina(elemento);
  }
})

function carregaPagina(elemento){
  const href = elemento.getAttribute('href');
  console.log(href)
}