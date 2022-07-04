import ValidaCPF from './ValidaCPF';

export default class CheckCPF {
    constructor() {
        this.check = document.querySelector('.container');
        this.check.addEventListener('submit', e => {
            e.preventDefault();
            this.checkCPFValido();
        });
    };    
    checkCPFValido() {
        const CampoCPF = this.check.querySelector('.cpf');
        const cpf = new ValidaCPF(CampoCPF.value);
        return cpf.valida()
    }
}

