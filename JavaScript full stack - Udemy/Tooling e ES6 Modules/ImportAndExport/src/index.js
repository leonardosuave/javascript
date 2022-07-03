//Importa tudo do arquivo modulo1 que possui export na frente.
/*import * as MeuModulo from './modulo1';
console.log(MeuModulo)*/

import qualquerSoma, {nome as nomeImport, sobrenomeExport, idade, Pessoa} from './modulo1';
const p1 = new Pessoa('Tassiane', 'Pinheiro')

console.log(nomeImport, sobrenomeExport, idade,qualquerSoma(5,3))
console.log(p1)


/*
import {nome as nomeImport, sobrenomeExport, idade, nomeCompleto, soma, Pessoa} from './modulo1'
console.log(nomeImport)
console.log(soma(5, 6))*/


