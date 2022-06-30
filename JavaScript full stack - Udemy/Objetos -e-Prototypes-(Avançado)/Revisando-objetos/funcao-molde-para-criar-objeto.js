// Factory functions / Constructor functions / Classes

//factory functions
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; //this é o objeto p1 ou p2, porém this chama qualquer objeto que executa a função (Igual a explicação feito em Constructor function).
        }
    }
}
const p1 = criaPessoa('Leonardo', 'Suave', 1.78, 85); //p1 é o objeto criado.
const p2 = criaPessoa('Tassiane', 'Pinheiro', 1.55, 55); //p2 é o objeto criado
console.log(p1.sobrenome)
console.log(p1.nomeCompleto) //Para chamar o método dentro do objeto p1
console.log(p2.nomeCompleto) //Para chamar o método dentro do objeto p2

//Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nome = p1.nome. porém com this pode ser utilizado idependente do nome da var que chama a função(Por isso função Molde) e no caso com p1 é apenas para esta var e acaba o molde(Porque preciso identificar a var que chama a função).

    //Object.freeze(this) - Para bloquear qualquer alteração que possa ser feito após criar o objeto.
}

const p3 = new Pessoa('Lucia', 'Helena'); //Objeto p3 criado conforme o MOLDE.
const p4 = new Pessoa('Clovis', 'Suave'); //Objeto p4 criado conforme o MOLDE.

p3.nome = 'Estou alterado' //vai alterar o valor da chave nome
console.log(p3);
Object.freeze(p4); //Vai bloquear qualquer alteração no Objeto p4 a partir desta linha.
p4.nome = 'Estou alterado também' //Não é alterado por causa do Object.freeze(p4);
console.log(p4);