const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs= require('bcryptjs')

//Criação do esquema.
const LoginSchema = new mongoose.Schema({ //Objeto com configuração dos dados do objeto.
    email: {type: String, require:true},
    password: {type: String, require:true},
})

//Criação do Model
const LoginModel = mongoose.model('Login', LoginSchema);

class Login { //Para receber o req.body enviado no cadastro 
    constructor(body) {
        this.body = body,
        this.errors = [], //flag de erros
        this.user = null
    }

    //Operações de base de dados retornam promises.
    async register() {
        this.valida();//Método que valida os campos

        //Se o array errors for maior que 0, então possui erros de cadastro.
        if(this.errors.length > 0) return; 

        await this.userExists();

        //Para checar novamente se teve erro de usuário existente.
        if(this.errors.length > 0) return; 


        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt) //Faz um hash com o valor da senha e o salt -> Vai criptografar

        try {
            //Para registrar o usuário caso esteja correto.
            //this.body ja esta limpo(só com email e senha)
            this.user = await LoginModel.create(this.body)
        } catch(e) {
            console.log(e);
        }
        
    }

    //Vai me retornar promise, ja que é relacionado ao banco de dados.
    async userExists() {

        //Vai encontrar um registro da base de dados que tenha o email igual a this.body.email (retorna o usuário ou null)
        const user = await LoginModel.findOne({ email: this.body.email })

        if(user) this.errors.push('Usuário já existe.')
    }

    valida() {
        this.cleanUp();
        //Validação

        //O e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        //A senha precisa ter entre 5 e 12 caracteres.
        if(this.body.password.length < 5 || this.body.password.length > 12) this.errors.push('Senha inválida. A senha precisa ter entre 5 e 12 caracteres.');
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

module.exports = Login;