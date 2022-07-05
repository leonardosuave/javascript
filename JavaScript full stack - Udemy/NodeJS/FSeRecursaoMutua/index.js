const fs = require('fs').promises;
const path = require('path');

//fs.readdir('./') indicaria as pastas que estão na raiz de JAVASCRIPT
//path.resolve(__dirname) indica o caminho direto deste arquivo index.js

fs.readdir(path.resolve(__dirname)) 
    .then(files => console.log(files))
    .catch(e => console.log(e));