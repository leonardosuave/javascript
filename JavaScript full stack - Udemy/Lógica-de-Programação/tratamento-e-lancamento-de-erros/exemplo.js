function retornaHora(data) {
    //instanceof é quando a a variavel (parametro dentro da função) é uma instancia da função construtora Date.
    if (data && !(data instanceof Date)) { 
        throw new TypeError('Esperando instância de Date.') //quando tiver uma data e essa data nao for uma instancia de Date
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(); // se inserie 11 dentro de () teremos uma data que nao é uma instancia de Date -- Erro.
    console.log(hora)
} catch(erro) {
    //tratar erro
    console.log('[ERRO] Deu merda!')
    //console.log(erro) -->Para ver o erro completo
} finally {
    console.log('Tenha um bom dia.')
}
