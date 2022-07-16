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
            e.preventDefault();
            this.validate(e)
        });
    };

    validate(e) {
        const elemento = e.target;
        const emaiImput = elemento.querySelector('.emailRegister');
        const nomeImput = elemento.querySelector('.nomeRegister');
        const sobrenomeImput = elemento.querySelector('.sobrenomeRegister') ;
        const senhaImput = elemento.querySelector('.senhaRegister');

        //Flag de erro.
        let error = false

        //Checar validação dos campos de registro.
        if(!validator.isEmail(emaiImput.value)){
            alert('Email inválido.')
            error = true;
        }
        if(nomeImput.value.length < 3) {
            alert('Nome deve ter acima de 3 letras.');
            error = true;
        } 
        if(sobrenomeImput.value.length < 3) {
            alert('Sobrenome deve ter acima de 3letras.')
            error = true;
        }
        if(senhaImput.value.length < 5 || senhaImput.value.length > 12) {
            alert('Senha deve ter entre 5 e 12 caracteres.')
            error = true;
        }

        if(!error) elemento.submit()
    }
};