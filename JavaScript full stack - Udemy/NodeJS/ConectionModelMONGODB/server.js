require('dotenv').config();

//Para improtar o express para o projeto.
const express = require('express');
const app = express();
const mongoose =require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados!') //msg quando conectado.
        app.emit('pronto');//sinal emitido quando conectado.           
    })
    .catch(e => console.log(e));

//Importa routes.js
const routes = require('./routes') 

const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware') //require por atribuição via desestruturação, ja que middlewareGlobal é um objeto do exports.



//Tratamento req.body
app.use(express.urlencoded({ extended:true }));

//Caminho do conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))

//caminho e view engine 
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)//Toda rota passa no middleware
app.use(routes);//Para o express utilizar as rotas


//Maneira correta de iniciar banco de dados antes do servidor.
app.on('pronto', () => { //quando receber o sinal faz a escuta no servidor
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log()
        console.log('Servidor executando na porta 3000')
    });
})
//Escuta na porta 3000
