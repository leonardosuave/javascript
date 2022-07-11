exports.paginaInicial = (req, res) => {
    res.render('index', {//Para injetar conteudo VIEW
        titulo: 'Este será o título da página',
        numero: [0, 1, 2, 3, 4, 5]
    })
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
} 