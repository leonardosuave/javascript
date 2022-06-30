//XMLHttpRequest -> Faz requisição de diversos tipos de dados, como:HTML, JSON, XML, texto puro, entre outros.

//Método antigo(Sem PROMISES)

const request = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true)
  xhr.send(); //refere-se se estivesse recebendo algum post de formulário.(Neste caso não esta).

  xhr.addEventListener('load', () => {

    //cod entre 200 e 300 - requisição de sucesso.
    if(xhr.status >= 200 && xhr.status <= 300) {

      //função de callback de sucesso
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText)
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
  
  //Enviar os objetos do obj
  request({
    method: 'GET',
    url: href,
    success(response) {
      carregaResultado(response)
    },
    error(errorText) {
      console.log(errorText)
    }
  }) 
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;  
}