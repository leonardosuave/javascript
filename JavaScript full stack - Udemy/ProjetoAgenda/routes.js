const express = require('express');
const route = express.Router();

//Importa os controller das rotas
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//Routes criadas.
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register)


//Exportar as route para o server.js.
module.exports = route;