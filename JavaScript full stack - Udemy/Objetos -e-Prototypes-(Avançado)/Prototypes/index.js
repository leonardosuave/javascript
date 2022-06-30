 //Cosntructor Function
 function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Método dentro de funcão construtora sobrecarrega o sistema e da perda de performace. (Não recomendado).
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
 }

 //Criar método fora da função construtora. (Vai fazer a busca em _proto_, deixando de lado a primeira procura que é em Pessoa1).
 Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

 //Instância
 const pessoa1 = new Pessoa('Leonarso', 'Suave');
 const data = new Date();

 console.log(pessoa1);

 /*
 Ordem de busca
 Pessoa1 --> Pessoa.prototype --> Object.prototype.
 */
