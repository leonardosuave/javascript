import ValidaCPF from './ValidaCPF';

export default class CheckCPF {
    constructor() {
        this.check = document.querySelector('.container');
        this.eventos();
    };

    eventos() {
        document.addEventListener('click', e=> {
            e.preventDefault();
            this.checkCPFValido();
        });  
    };

    checkCPFValido() {
        const CampoCPF = this.check.querySelector('.cpf');

        if(!CampoCPF.value) return 'Validar CPF em branco!'
        if(!this.checkValidadeCPF(CampoCPF)) return 'CPF inválido';
        return 'CPF válido!'
    }

    checkValidadeCPF(CampoCPF) {
        const cpf = new ValidaCPF(CampoCPF.value);
        if(!cpf.valida()) return false;
        return true;
    }
}