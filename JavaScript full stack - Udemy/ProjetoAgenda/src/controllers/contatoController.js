const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', {contato: {}});
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.register()

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);//Envia os erros em flash
            req.session.save(function() { //Para salvar a seção e retornar com callback a pagina de login 
                return res.redirect('/contato/index'); //Vai redirecionar para a edição do contato cadastrado.
                
            }) 
            return;   
        }

        //Para contato registrado com sucesso.
        req.flash('success', 'Contato registrado!')
        req.session.save(function () {
            return res.redirect(`/contato/index/${contato.contato._id}`)//Vai redirecionar para a edição do contato cadastrado.
            //contato.contato equivale ao this.contato que recebeu o registro
        })

    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async(req, res) => {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id) 
    if(!contato) return res.render('404');

    res.render('contato', {contato});
}