//função construtora  = retorna objetos.
//função fabrica  = retorna objetos.
//Construtora = obrigatóriamente cria função com a primeira letra maiúscula Pessoa (new).

//exemplo de função construtora.
function Pessoa(nome, sobrenome) {
    //atribrutos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    //atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

//em função construtora, sempre que for chamada deve ser utilizado a palavra new.

//new -> cria um novo objeto vazio, faz o this apontar para o objeto vazio e retorna o objeto para esta variavel.

const p1 = new Pessoa('Leonardo','Suave'); 
const p2 = new Pessoa('Tassiane','Pinheiro');

console.log(p1.nome);
p2.metodo();