//Para improtar o express para o projeto.
const express = require('express');
const app = express();

//http://facebook.com/profiles/122
//122 seria um parâmetro da rota facebook.com/profiles

//http://facebook.com/profiles/122?campanha=googleads&nome_campanha=seila
//?campanha=googleads é uma querystring
//nome_campanha=seila é outra querystring

//Tratando o req.body
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome do cliene: <input type="text" name="nome">
    <button> Enviar </button>
    `)
});

app.get('/testes/:idUsuarios?/:opcional?', (req, res) => {
    console.log(req.query); //Vai mostrar o objeto no terminal do vscode quando acessar a rota com os valores das chaves dos parâmetros/query no site.
    res.send(req.query.idade) //O que vai mostrar no navegador.
})

app.post('/', (req, res) => {
    console.log(req.body) //Vai mostrar o objeto tratado no terminal do vscode.
    res.send(req.body.nome) //Mostra na tela o valor da chave nome do objeto tratado no req.body
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Acessar http://localhost:3000/testes')
    console.log('Servidor executando na porta 3000')
});