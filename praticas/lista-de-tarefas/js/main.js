const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(textoInput) {
  const lista = criarLi()
  lista.innerHTML = textoInput
  tarefas.appendChild(lista)
  //tarefas.insertAdjacentElement('beforeend', lista) -> Mesma coisa que appendChild.
  //tarefas.insertAdjacentElement('afterbegin', lista) -> Mesma coisa que appendChild.
  limparInput();
  criarBotaoApagar(lista);
  salvarTarefas();
}

function criarLi () {
  const lista = document.createElement('li');
  return lista;
}

function limparInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criarBotaoApagar (lista) {
  lista.innerHTML += ' '; //Para dar um espaço entre a lista e o input de apagar.
  const botaoApagar = document.createElement('button'); //Para criar o botão.
  botaoApagar.setAttribute('class','Apagar') //adiciona classe ao botaoApagar.
  botaoApagar.setAttribute('title', 'apagar esta tarefa') //para dar um sobreposição quando mouse estiver em cima do botao apagar.
  botaoApagar.innerHTML = 'Apagar' //Para dar nome ao botão.
  lista.appendChild(botaoApagar);
}


//Identificar quantos li possui dentro de ul e salvar o texto dentro destes li.
function salvarTarefas() {
  const listaTarefas = tarefas.querySelectorAll('li') //para pegar dentro de tarefas (onde esta localizado os li).
  const listaDeTarefas = [];

  for (let tarefa of listaTarefas) {
    let tarefaTexto = tarefa.innerText; //para pegar o innerHTML da tarefa e poder apagar o Apagar que acompanhou o innerHTML da tarefa.
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//replace substitui o Apagar do final do innerHTML captado por nada ''. trin() apaga o espaço no final do innerHTML após substituir o Apagar.
    listaDeTarefas.push(tarefaTexto) //Para poder criar um JSON
  }
  const tarefaJSON = JSON.stringify(listaDeTarefas); //Vai transformar meu array em uma string convertido para JSON -- Pode ser convertido em arrays posteriormente novamente.
  localStorage.setItem('tarefas', tarefaJSON)//localStorage é global (pode ser utilizado em qualquer parte do sistema).
  console.log(listaDeTarefas); //Para vizualizar no console
}

//Para carregar as tarefas ja inclusas quando o site for novamente carregado (Vai ler as tarefas e jogar novamente na ul).
function adicionarTarefasSalvas () {
  const tarefas = localStorage.getItem('tarefas'); //vai pegar os itens salvos em 'tarefas e recarregar eles.
  const listaDeTarefas = JSON.parse(tarefas)
  
  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa); //Neste caso quando carregar a pagina vai execultar criaTarefa para cada item salvo na listaDeTarefas.
  }
}


//Escuta de evento quando pressionar enter
inputTarefa.addEventListener('keypress', function(enter) {
  if(enter.keyCode === 13) { //13 corresponde ao keyCode do enter.
    if(!inputTarefa.value) return // mesma coisa de inputTarefa.value.length === 0. 
    criaTarefa(inputTarefa.value) //Caso seja precionado enter, vai chamar esta função.
  }
  
})

//Escuta de evento quando clicar no botão
btnTarefa.addEventListener('click', function(e){  
  if(!inputTarefa.value) return // mesma coisa de inputTarefa.value.length === 0  
  criaTarefa(inputTarefa.value)
})

//Escuta de evento de clicar em um determinado botão
document.addEventListener('click', function(e) {
  const elemento = e.target;//e.target vai indicar qual elemento está sendo clicado
  //console.log(elemento); --> caso queira ver no console os elementos clicados.

  if(elemento.classList.contains('Apagar')) {
    //console.log(elemento.parentElement) -->Para identificar o pai do elemento que deseja apagar
    elemento.parentElement.remove(); //Vai apagar o li correspondente ao Apagar clicado.
    salvarTarefas(); //Para salvar quando apagar alguma tarefa.
  }
})
adicionarTarefasSalvas(); //Sempre que executar o html será executado está função que irá carregar os itens salvos em localeStorage.