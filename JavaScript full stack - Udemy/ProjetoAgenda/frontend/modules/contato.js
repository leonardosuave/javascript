import validator from "validator"; //Para validar email.

export default class Contato {
    constructor(formClass) {
        this.formContato = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.formContato) return;
        this.formContato.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        
        const checkNome = this.checkNomeContato();
        const checkContato = this.checkContatoValido()

        if(checkNome && checkContato) {
            console.log('Enviado')
            this.formContato.submit()
        }
    }

    checkContatoValido() {

        const email = this.formContato.querySelector('.emailContato')
        const telefone = this.formContato.querySelector('.telefoneContat')

        if(this.validaEmail(email) || this.validaTel(telefone)){
            return true
        } else {
            this.criaErro(email, 'Cadastre um E-mail e/ou Telefone')
            this.criaErro(telefone, 'Cadastre um Telefone e/ou E-mail')
        };
    };

    checkNomeContato() {
        let valid = true;

        //Para retirar os erros acumulados.
        for(let errorText of this.formContato.querySelectorAll('.error-text')) {
            errorText.remove()
        };

        for(let campo of this.formContato.querySelectorAll('.form-contato')) {
            console.log(campo)

            //check nome
            if(campo.classList.contains('nomeContato')) {
                if(!this.validaNome(campo)) valid = false;
            };

        };
        return valid;
    }

    validaEmail(campo) {
        let valid = true

        if(!validator.isEmail(campo.value)){
            this.criaErro(campo, 'E-mail inválido!')
            valid = false;
        }
        console.log(valid)
        return valid; 
    }

    validaTel(campo) {
        let valid = true;

        if(!campo.value) {
            valid = false
        };
        console.log(valid)
        return valid
    }

    validaNome(campo) {
        let valid = true;

        if(campo.value.length < 3 || campo.value.length > 12) {
            this.criaErro(campo, 'Nome inválido.')
            valid = false;
        }
        console.log(valid)
        return valid; 
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
};