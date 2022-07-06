//Este arquivo tem objetivo de apenas ver qual é a rota e chamar o controlador padrão MVC para a aplicação.

const express = require('express');
const route = express.Router();

//Importa tudo do arquivo homeController.js
const homeController = require('./controllers/homeController')

//Importa tudo do arquivo contatoController.js
const contatoController = require('./controllers/contatoController')

//Rotas da home.
route.get('/', homeController.paginaInicial);//acesso a pagina
route.post('/', homeController.trataPost)//envio de forms na pag

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

//Exporta o route.
module.exports = route;