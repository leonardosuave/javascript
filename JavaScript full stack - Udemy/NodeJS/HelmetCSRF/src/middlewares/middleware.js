//Exporta como objeto.
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next()
};

exports.checkCSRFerror = (err, req, res, next) =>{
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')//Abrir a pagina 404
        //return res.send('ERRO 404') Para escrever essa msg
    }
};

//Posso passar mais de um middleware aqui por exports.xxx
//Em server.js fazer require por associação via desestruturação tudo na mesma chave do exemplo, e depois atribuir o uso do express separadamente para cada middle desestruturado.