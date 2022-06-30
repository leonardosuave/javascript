//XMLHttpRequest -> Faz requisição de diversos tipos de dados, como:HTML, JSON, XML, texto puro, entre outros.

//Método com PROMISES.

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send(); //refere-se se estivesse recebendo algum post de formulário.(Neste caso não esta).
      
        xhr.addEventListener('load', () => {
      
          //cod entre 200 e 300 - requisição de sucesso.
          if(xhr.status >= 200 && xhr.status <= 300) {
            //função de callback de sucesso
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText)
          };
        });
    });
    
};
  
document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();
    
  
    if(tag === 'a') {
      e.preventDefault() //Para prevenir o evento de carregar a nova página clicada. 
      carregaPagina(elemento);
    };
});
  
async function carregaPagina(elemento){
    const href = elemento.getAttribute('href');
    
    //Enviar os objetos do obj
    try {
        const response = await request({
            method: 'GET',
            url: href      
            })
            carregaResultado(response);
    }catch(e) {
        console.log(e)
    }

};
  
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;  
};