//Exporta como objeto.
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next()
};

//Se tiver erro para aqui. Não chama o proximo Middleware(Sempre com 4 argumentos)
exports.checkCSRFerror = (err, req, res, next) =>{
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')//Abrir a pagina 404
        
        //return res.send('ERRO 404') Para escrever essa msg
    }
};

//Para criar um csrfToken em todas as páginas e poder criar formúlarios  
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(),
    next()
}

//Posso passar mais de um middleware aqui por exports.xxx
//Em server.js fazer require por associação via desestruturação tudo na mesma chave do exemplo, e depois atribuir o uso do express separadamente para cada middle desestruturado.