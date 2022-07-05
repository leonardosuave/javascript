const fs = require('fs').promises;
const path = require('path');

//fs.readdir('./') indicaria as pastas que estão na raiz de JAVASCRIPT
//path.resolve(__dirname) indica o caminho direto deste arquivo index.js

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); //Utiliza uma das opções.
    const files =  await fs.readdir(rootDir);
    walk(files);    //files contem um array com cada arquivo/pasta recebido do diretório especificado pelo rootDir.
}


function walk(files) {
    for(let file of files) {
        console.log(file) //file é cada um dos arquivos/pasta contidos no array files.
    }
}

readdir('C:/Users/Leonardo Suave/Documents/Estudos/javascript/javascript/JavaScript full stack - Udemy')


