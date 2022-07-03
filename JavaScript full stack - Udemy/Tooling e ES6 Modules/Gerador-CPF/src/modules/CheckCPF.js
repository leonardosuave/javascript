import ValidaCPF from './ValidaCPF';

export default class CheckCPF {
    constructor() {
        this.check = document.querySelector('.container');
        this.check.addEventListener('click', e => {
            e.preventDefault();
            const elemento = e.target;
            if(elemento.classList.contains('clicado')) {
                this.checkCPFValido()
            }
        })
    };    
    checkCPFValido() {
        const CampoCPF = this.check.querySelector('.cpf');
        const cpf = new ValidaCPF(CampoCPF.value);
        if(!cpf.valida()) return 'CPF inválido!'
        return 'CPF válido!'
    }
}

