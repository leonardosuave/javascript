import validator from "validator"; //Para validar email.

export default class Registrar {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        
        const checkCamposValidos = this.checkCamposValidos();
        console.log(checkCamposValidos)
        if(checkCamposValidos) {
            this.form.submit()
        };
    };

    checkCamposValidos() {
        let valid = true;

        //Para retirar os erros acumulados.
        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
        };

        for(let campo of this.form.querySelectorAll('.form-login')) {

            //check email
            if(campo.classList.contains('emailLogin')) {
                if(!this.validaEmail(campo)) valid = false
                console.log(`email ${valid}`)
            };

            //check senha
            if(campo.classList.contains('senhaLogin')) {
                if(!this.validaSenha(campo)) valid = false;
                console.log(`senha ${valid}`)
            };
        };

        return valid;
    };

    validaEmail(campo) {
        let valid = true

        if(!validator.isEmail(campo.value)){
            this.criaErro(campo, 'E-mail inválido!')
            valid = false;
        }
        return valid; 
    };

    validaSenha(campo) {
        let valid = true;

        if(campo.value.length < 5 || campo.value.length > 12) {
            this.criaErro(campo, 'Senha deve ter entre 5 e 12 caracteres.')
            valid = false;
        }
        return valid;
    };

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    };
};