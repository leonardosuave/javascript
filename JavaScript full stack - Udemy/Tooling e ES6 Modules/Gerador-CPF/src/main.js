import GeraCPF from './modules/GeraCPF'
import CheckCPF from './modules/CheckCPF';

import './assets/css/style.css';

//Por IIFE (Poderia ser por class ou ate mesmo chamar direto sem criar function).

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.resultado');
    cpfGerado.innerHTML = gera.geraNovoCpf()
    const checkCPF = new CheckCPF()
    const cpfcheck = document.querySelector('.resultado2')
    cpfcheck.innerHTML = checkCPF.checkCPFValido()
})();