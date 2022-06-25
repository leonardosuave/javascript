class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
        e.preventDefault();//Previne que o formulário seja enviado.
        const checkFields = this.checkValidField();
        const checkSenhas = this.checkSenhas();

        if(checkFields && checkSenhas){
            alert('Formulario Enviado!')
            this.formulario.submit();
        }
        })
    }

    checkSenhas() {
        let valid = true; 

        const senha = this.formulario.querySelector('.senha')
        const repeatSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repeatSenha.value) {
            valid = false
            this.criaErro(senha, 'As senhas devem ser iguais')
            this.criaErro(repeatSenha, 'As senhas devem ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }
        
        return valid;
    }


    checkValidField() {
        let valid = true
        
        //Para remover msg de erro mais de uma vez.
        for (let cadaErro of this.formulario.querySelectorAll('.error-text')){
            cadaErro.remove();
        }
        
        //Para checar cada campo.
        for(let eachField of this.formulario.querySelectorAll('.validar')){
            const label = eachField.previousElementSibling.innerHTML//Especifica o nome dos campos para preencher.
            console.log(label)

            //Identificar se tem campo em branco.
            if(!eachField.value) {
                this.criaErro(eachField, `${label} não pode estar em branco`)
                valid = false;
            };

            if(eachField.classList.contains('cpf')) {
                if(!this.validaCPF(eachField)) valid = false
            };

            if(eachField.classList.contains('usuario')) {
                if(!this.validaUsuario(eachField)) valid = false
            };          

        }
        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div);
    }

    validaCPF(eachField) {
        const cpf = new ValidaCPF(eachField.value) //Aqui que chamo a class ValidaCPF que está em outro arquivo.js.

        if(!cpf.valida()) { //valida() referênte ao método do arquvi ValidaCPF.
            this.criaErro(eachField, 'CPF inválido');
            return false
        }

        return true
    };

    validaUsuario(eachField) {
        let valid = true
        if(eachField.value.length < 3 || eachField.value.length > 12) {
            this.criaErro(eachField, 'Usuário deve ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!eachField.value.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(eachField, 'Usuário não pode ter caracteres especiais (@#$...)')
            valid = false;
        }

        return valid
    }
}

const pessoa1 = new ValidaFormulario()