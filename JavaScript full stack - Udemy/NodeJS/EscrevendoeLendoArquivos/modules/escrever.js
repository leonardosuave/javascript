const fs = require('fs').promises;

//Função responsável por criar o arquivo 
module.exports = (caminho, dados) => {
    //Para criar o arquivo -> envia o caminho, os dados em arquivo ou string que terá dentro do arquivo, e um objeto com a flag 'w' que apaga tudo dentro do arquivo caso tenha algo escrito já
    fs.writeFile(caminho, dados, { flag: 'w' });
};





