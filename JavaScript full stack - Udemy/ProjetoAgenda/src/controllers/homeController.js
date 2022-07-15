const Contato = require('../models/ContatoModel');

//Ficou async para capturar os contatos do banco de dados para a home.
exports.index = async(req, res) => {
    const contatos = await Contato.buscaContato();
    res.render('index', { contatos });  //{contatos} Envia todos os contatos do banco de dados para carregar na pagina index(home)
}

