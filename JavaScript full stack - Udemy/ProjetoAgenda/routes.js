const express = require('express');
const route = express.Router();

//Importa os controller das rotas
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware')

//Routes criadas.
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

//Routes de contato
route.get('/contato/index', loginRequired, contatoController.index);


//Exportar as route para o server.js.
module.exports = route;