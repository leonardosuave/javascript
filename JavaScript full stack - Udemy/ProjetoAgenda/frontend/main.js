import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/style.css'

import Registrar from './modules/registrar';
import Login from './modules/login';

const registrar = new Registrar('.form-registrar');
registrar.init();

const login = new Login('.form-login');
login.init()
