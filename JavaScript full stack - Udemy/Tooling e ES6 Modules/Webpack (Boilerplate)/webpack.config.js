//Todos arquivos .JS no Node são modulos

//Para importar o módulo path.
const path = require('path'); //CommonJS é o sistema de módulo utilizado pelo Node.

//Para exportar as coisas deste arquivo (módulo) para ser utilizado em outros arquivos (módulos) 
module.exports = {
    mode: 'development', //gera mais rápido
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'budle.js'
    }, 
    module: {
        rules: [{
            excluse: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                option: {
                    presets: ['@babel/env']
                }
            },

        }]
    },
    devtool: 'source-map' //Mapeia o erro apresentado no arquivo bundle e aponta em qual arquivo fragmentado está localizado a linha do erro.
}