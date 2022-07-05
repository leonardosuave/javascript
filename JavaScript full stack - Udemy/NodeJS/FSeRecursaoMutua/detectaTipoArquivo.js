const fs = require('fs').promises;
const path = require('path');

//fs.readdir('./') indicaria as pastas que estão na raiz de JAVASCRIPT
//path.resolve(__dirname) indica o caminho direto deste arquivo index.js

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); //Utiliza uma das opções.
    const files =  await fs.readdir(rootDir);
    walk(files, rootDir); //files é o arrays com cada pasta/arquivo de rootDir, e rootDir é o endereço especificado.   
}


async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file) //rootDir indica o parâmetro passado em readdir() e file representa cada pasta após o caminho de rootDir. -> vai concatenar rootdir e file, separado por /

        const stats = await fs.stat(fileFullPath) //Para detectar o tipo de arquivo - Retorna uma Promise com códigos que referente ao arquivo

        //Verifica as duas Regex so depois que checa if(stats.isDirectory())
        if (/\.git/g.test(fileFullPath)) continue; 
        if (/node_modules/g.test(fileFullPath)) continue;


        //Verifica se é uma pasta a const stats.
        if(stats.isDirectory()) {
            readdir(fileFullPath)//chama readdir() passando o novo endereço de arquivo como rootDir.
            continue; //Faz com que volte para o laço do For e não encerre tudo (Recursão Mutua).
        }
        
        console.log(file) //Mostra todos os nomes de arquivos. -> fileFullPath mostraria todos os caminhos até o arquivo.
    }
}
readdir('C:/Users/Leonardo Suave/Documents/Estudos/javascript/javascript/JavaScript full stack - Udemy')


