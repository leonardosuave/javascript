const fs = require('fs').promises;

//Função responsável por ler o arquivo criado testo.json 
module.exports = (caminho) => fs.readFile(caminho, 'utf8') // -> Vai ler o arquivo especificado no caminho e que possua escrita 'utf8')
