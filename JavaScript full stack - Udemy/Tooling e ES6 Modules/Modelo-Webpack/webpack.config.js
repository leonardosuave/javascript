//Todos arquivos .JS no Node são modulos

//Para importar o módulo path.
const path = require('path'); //CommonJS é o sistema de módulo utilizado pelo Node.

//Para exportar as coisas deste arquivo (módulo) para ser utilizado em outros arquivos (módulos) 
module.exports = {
    mode: 'development', // 'prodution'gera mais rápido (compila em menos linhas de código).
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //Caminho de onde vai gerar o budle.
        filename: 'budle.js' //Nome do arquivo compilado.
    }, 
    module: {
        rules: [{
            exclude: /node_modules/, //Não analisar este arquivo.
            test: /\.js$/, //Vai testar todos arquivos que termina em .js para formar o budle.
            use: { //Oque vai usar 
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },

        }]
    },
    devtool: 'source-map' //Mapeia o erro apresentado no arquivo bundle e aponta em qual arquivo fragmentado está localizado a linha do erro.
}