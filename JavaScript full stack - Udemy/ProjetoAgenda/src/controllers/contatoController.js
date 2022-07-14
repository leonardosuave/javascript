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
                return res.redirect('/contato/index'); //Vai redirecionar para a pagina de cadastro de contato.
                
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
    if(!req.params.id) return res.render('404'); //Caso não receba o id do contato cadastrado

    //Aqui não precisa instânciar, pode atribuir await Contato.buscaPorId direto , ja que é uma constructor function e não class
    const contato = await Contato.buscaPorId(req.params.id) 
    if(!contato) return res.render('404');

    res.render('contato', {contato});
}

exports.editContato = async(req, res) => {
    if(!req.params.id) return res.render('404'); //Caso não receba o id do contato cadastrado.
    
    try {
        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);//Envia os erros em flash
            req.session.save(function() { //Para salvar a seção e retornar com callback a pagina de login             
                return res.redirect(`/contato/index/${req.params.id}`); //Vai redirecionar para a pagina de cadastro de contato.
        }) 
        return;   
        }

        //Para contato editado com sucesso.
        req.flash('success', 'Contato editado com sucesso!')
        req.session.save(function () {
            return res.redirect(`/contato/index/${contato.contato._id}`)//Vai redirecionar para a edição do contato cadastrado.
            //contato.contato equivale ao this.contato que recebeu o registro
        });

    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}