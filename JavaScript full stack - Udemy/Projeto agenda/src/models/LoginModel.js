const mongoose = require('mongoose');
const validator = require('validator')

//Criação do esquema.
const LoginSchema = new mongoose.Schema({ //Objeto com configuração dos dados do objeto.
    email: {type: String, require:true},
    senha: {type: String, require:true},
})

//Criação do Model
const LoginModel = mongoose.model('Login', LoginSchema);

class Login { //Para receber o req.body enviado no cadastro 
    constructor(body) {
        this.body = body,
        this.errors = [], //flag de erros
        this.user = null
    }

    register() {
        this.valida();//Método que valida os campos
        if(this.errors.length > 0) return;
    }

    valida() {
        this.cleanUp();
        //Validação
        //O e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        //A senha precisa ter entre 5 e 12 caracteres.
        if(this.body.password.lentgh < 5 || this.body.password.lentgh > 12) this.errors.push('Senha inválida. A senha precisa ter entre 5 e 12 caracteres.')
    }

    //Verificar se tudo no body é STRING
    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''; //Se não for string, converte em string vazia.
            }
        }
       
        //Para garantir que so tenha email e senha neste campo e não o csrfToken.
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
        
    }
}

module.exports = Login