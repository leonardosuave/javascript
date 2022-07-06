//Para improtar o express para o projeto.
const express = require('express');
const app = express();

//Importa as rotas do arquivo routes.js
const routes = require('./routes') 

//Tratando o req.body
app.use(express.urlencoded({ extended:true }));

//Para o express utilizar as rotas
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});