const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');//O caminha do arquivo teste.txt que será criado

const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
    {nome:'Leonardo'},
    {nome:'Tassiane'},
    {nome:'Judite'},
    {nome:'Panterinha'}
];

const json = JSON.stringify(pessoas,'', 2); //Transforma o array de objetos pessoas em Json e formata para aparecer em forma de escrita json.

escreve(caminhoArquivo, json)//Função importada de escreve.js que vai criar o arquivo teste.json.


//Para ler os dados do arquivo testo.json
async function lerArquivo(caminho) {
    const dados = await ler(caminho) //retorna o arquivo testo.json referente ao caminho especificado no parâmetro  
    renderizaDados(dados);
}

//Essa função poderia ser junta da function lerArquivo().
function renderizaDados(dados) {
    //console.log(dados) -> Para visualizar o Json
    dados = JSON.parse(dados); //Para transformar o JSON em objeto JavaScript
    //console.log(dados) -> Para visualizar o array de obj em JavaScript
    dados.forEach(valor => console.log(valor)); //Para ver cada objeto do array de JavaScript. 
};

lerArquivo(caminhoArquivo)

//const dadosArquivos = lerArquivo(caminhoArquivo)
//    .then(dados => console.log(dados))
//    .catch(e => console.log(e))

//    console.log(dadosArquivos)
    
