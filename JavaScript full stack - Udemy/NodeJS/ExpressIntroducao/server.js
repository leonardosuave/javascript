//Para improtar o express para o projeto.
const express = require('express');
const app = express();

//O express vai ajudar a trabalhar nas rotas da aplicação

//         criar   ler   atualizar  apagar
// CRUD -> create, read, update,    delete
//         post    get   put        delete    

// http://meusite.com/ <- GET -> Entrega a página
// http://meusite.com/sobre <- GET -> Entrega a página /sobre

app.get('/', (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar </button>
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com agente.')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Acessar http://localhost:3000/contato')
    console.log('Servidor executando na porta 3000')
});