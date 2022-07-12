const Login = require('../models/LoginModel')

//Controladora para abrir a pagina de login
exports.index = (req, res) => {
    res.render('login')
};

//Controladora para registrar usuários.
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

        //Para mostrar msg de success se tudo estiver correto.
        req.flash('success', 'Cadastro realizado com sucesso');
        req.session.save(function() { 
            return res.redirect('/login/index');
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}