const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
};

exports.register = (req, res) => {
    //login = instância
    const login = new Login(req.body)
    this.register();
    res.send(login.errors)//Para acessar this.body fora da class.
}