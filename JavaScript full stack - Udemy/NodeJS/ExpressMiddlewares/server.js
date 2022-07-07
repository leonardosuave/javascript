//Para improtar o express para o projeto.
const express = require('express');
const app = express();
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware') //require por atribuição via desestruturação, ja que middlewareGlobal é um objeto do exports.

//Importa routes.js
const routes = require('./routes') 

//Tratamento req.body
app.use(express.urlencoded({ extended:true }));

//Caminho do conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))

//caminho e view engine 
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)//Toda rota passa no middleware
app.use(routes);//Para o express utilizar as rotas



//Escuta na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log()
    console.log('Servidor executando na porta 3000')
});