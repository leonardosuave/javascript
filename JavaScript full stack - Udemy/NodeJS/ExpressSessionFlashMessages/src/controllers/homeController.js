exports.paginaInicial = (req, res) => {
    //console.log(req.flash('error'), req.flash('success'), req.flash('info'))

    //console.log(req.session.usuario) //req.session.usuario mesmo deletado teremos acesso por 7 dias(conforme config da session).
    res.render('index')
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
} 