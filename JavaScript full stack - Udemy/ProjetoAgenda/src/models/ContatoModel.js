const mongoose = require('mongoose');
const validator = require('validator')//Validar email.

//Criação do esquema para contato.
const ContatoSchema = new mongoose.Schema({ //Objeto com configuração dos dados do objeto que será salvo em contato.
    nome: {type: String, require:true},
    sobrenome: {type: String, require:false, default: ''},
    email: {type: String, require:false, default: ''},
    telefone: {type: String, require:false, default: ''},
    criadoEm: {type: Date, default: Date.now}, //Para registrar a hora que foi salvo.
})

//Para buscar o contato por ID
Contato.buscaPorId = async (id) => {
    if(typeof id !== 'string') return;
   const user = await ContatoModel.findById(id) //Retorna o user ou null
   return user;
}

//Criação do Model
const ContatoModel = mongoose.model('Contato', ContatoSchema);

//Criando com Constructor Function
function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

//Retorna um promise - controladora deve ter async tbm 
Contato.prototype.register = async function() {
    this.valida()

    if(this.errors.length > 0) return;//Se tiver erro não registra.
    this.contato = await ContatoModel.create(this.body)//this.contato recebe o registro de contato.
};

Contato.prototype.valida = function() {
    this.cleanUp();
    //Validação

    //Precisa ter um nome
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.')

    //Checar se tem um e-mail e depois se ele é válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    if(!this.body.email && !this.body.telefone) this.errors.push('Você precisa cadastrar E-mail ou Telefone ao contato')
}

//Verificar se tudo no body é STRING
Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = ''; //Se não for string, converte em string vazia.
        }
    }
   
    //Para garantir que so tenha estes campos e não o csrfToken.
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
    
}

module.exports = Contato