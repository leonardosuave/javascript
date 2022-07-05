const fs = require('fs').promises;
const path = require('path');

//fs.readdir('./') indicaria as pastas que estão na raiz de de JAVASCRIPT
//path.resolve(--dirname) indica o caminho direto deste arquivo index.js

//fs.readdir(path.resolve(__dirname)) 
//    .then(files => console.log(files))
//    .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); //Utiliza uma das opções.
    const files =  await fs.readdir(rootDir);
    walk(files);    
}

function walk(files) {
    for(let file of files) {
        console.log(file)
    }
}

readdir('c:\\c\\Users\\Leonardo Suave\\Documents\\Estudos')
