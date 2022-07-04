//Para funcionar comandos não compativeis com navegadores antigos, como é o caso de promises, async/await no internet explore
import 'core-js/stable'

//Para resolver problema de regeneratorRuntime em navegador maisantigo.
import 'regenerator-runtime/runtime';

import executa from './modules/promises'

import './assets/css/style.css'

executa();