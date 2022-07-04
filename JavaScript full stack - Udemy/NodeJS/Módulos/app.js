const path = require('path')

const mod1Import = require('./mod1')
console.log(mod1Import.falaNome())

//Importar dados especificos do arquivo (Aqui importou apenas a chave nome)
//const mod1Import = require('./mod1').nome
//console.log(mod1Import)

//Associação por desestruturação
const { nome, sobrenome, falaNome} = require('./mod1');
console.log(sobrenome)

//Associação via Desestruturação da class Pessoa que é enviado em chave pelo arquivo mod1.js
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Judite')
console.log(p1) 