const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
};

exports.register = async function(req, res) {
    try {
        //login = instância
        const login = new Login(req.body)
        await login.register();

        //Para mostrar os erros na página
        if(login.errors.length > 0) {
        req.flash('errors', login.errors);//Envia os erros em flash
        req.session.save(function() { //Para salvar a seção e retornar com callback a pagina de login 
            return res.redirect('/login/index');//Redireciona para a pagina anterior(login).
        });
        return;
        }
        
        req.flash('success', 'Cadastro realizado com sucesso');
        req.session.save(function() { 
            return res.redirect('/login/index');
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}