function relogio(){
  //Função para formatar os segundos!!!
  function criaHoraDosSegundos(segundos) {
    const data= new Date(segundos * 1000); //para passar para milesimo de segundo (JS só aceita assim)
    return data.toLocaleTimeString('pt-BR', {      
    hour: '2-digit',
    timeZone: 'GMT', //para zerar o cronometro (antes estava em 21horas. -->considera a data 1/1/1970.)
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

  const relogio = document.querySelector('.relogio');
  let segundos = 0; //Essa variavel é importante para armazenar o valor do cronometro caso pause e volte a iniciar.
  let timer;

  /*
  NÃO É NECESSARIO ATRIBUIR ESTAS VARIAVEIS QUANDO O EVENTO É INICIADO POR TARGET E CHECAGEM DE IF
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  */

  //Função responsavel pela contagem!!
  function iniciaRelogio() {
    timer = setInterval(function() { //posso acessar a variavel Timer por aqui 
    segundos++; //para passar os segundos
    relogio.innerHTML = criaHoraDosSegundos(segundos) // para passar segundos formatados
    }, 1000);
}

  document.addEventListener('click', function(e){
    const elemento = e.target //e.target vai indicar qual elemento está sendo clicado

    //Responsavel por iniciar o processo de contagem
    if(elemento.classList.contains('iniciar')){
      relogio.classList.remove('pausado') //vai remover a classe e vai mudar a cor com a css
      clearInterval(timer); //Para evitar iniciar um novo contador caso seja pausado e inicializado novamente
      iniciaRelogio() //chama a função de iniciar a contagem do relogio
    }

    //Responsavel por pausar a contagem
    if(elemento.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado') // vai adicionar a classe responsavel por mudar a cor pra vermelho com as css.
    }

    //Responsavel por zerar a contagem
    if(elemento.classList.contains('zerar')){
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0 // Indica que quando for zerado a variavel global vai receber o valor zero e quando iniciar o contador novamente não vai voltar dos zegundos q foram zerados.
      relogio.classList.remove('pausado') //vai remover a classe e vai mudar a cor com a css
    }  
  }) 
} 
relogio()
