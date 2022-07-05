const path = require('path');
const fs = require('fs').promises;

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir); //Array de pastas
    Filtrar(files, rootDir) //Parâmetro com envio do array com as pastas finais e o endereço inicial passado em parâmetro.
}

async function Filtrar(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)//endereço completo das pastas do array
        const stats = await fs.stat(fileFullPath) //Identifica o código de arquivo ou pasta.
        

        //Ignora arquivos .git e node_modules.
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        //se for pasta, vai filtrar elas para encontrar apenas arquivos.
        if(stats.isDirectory()) {
            readdir(fileFullPath); //Caso seja pasta, retorna o endereço desta pasta para filtra-la.
            continue;
        }

        //escreve o nome do arquivo retornado das pastas filtradas.
        console.log(file)
    }
}

readdir('C:/Users/Leonardo Suave/Documents/Estudos/javascript/javascript/JavaScript full stack - Udemy')