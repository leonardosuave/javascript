//Para improtar o express para o projeto.
const express = require('express');
const app = express();
const path = require('path')

//Importa as rotas do arquivo routes.js
const routes = require('./routes') 

//Especifica o caminha absoluto da pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')//view engine que vai utilizar. (ejs é o que mais aproxima de html)

app.use(routes);//Para o express utilizar as rotas

//Tratamento req.body
app.use(express.urlencoded({ extended:true }));

//Caminho da pasta responsavel por conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))

//Escuta na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});