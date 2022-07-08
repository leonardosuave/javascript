//Exporta como objeto.
exports.middlewareGlobal = (req, res, next) => {
    console.log('AGORA FOI NO MIDD E SEGUIU O FLUXO')
    next()
};

//Posso passar mais de um middleware aqui por exports.xxx
//Em server.js fazer require por associação via desestruturação tudo na mesma chave do exemplo, e depois atribuir o uso do express separadamente para cada middle desestruturado.