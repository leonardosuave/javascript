const express = require('express');
const route = express.Router();

//Importa os controller das rotas
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const { middlewareGlobal } = require('./src/middlewares/middleware')

//Routes criadas.
route.get('/',middlewareGlobal, homeController.paginaInicial);
route.post('/', homeController.trataPost)
route.get('/contato', contatoController.paginaInicial);

//Exportar as route para o server.js.
module.exports = route;