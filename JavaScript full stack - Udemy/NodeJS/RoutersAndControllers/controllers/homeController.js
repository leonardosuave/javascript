//Controler especifico para Home

exports.paginaInicial = (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome do cliene: <input type="text" name="nome">
    <button> Enviar </button>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST')
} 