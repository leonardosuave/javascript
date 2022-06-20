//defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; //A variavel ou o parâmetro vao receber mesmos valores QUE INICIALMENTE É 3.
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave;
        //value:estoque, Não é necessário;
        //writable: true, Não é necessário;
        configurable:true, //configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            estoquePrivado = valor; //Atribui o valor de estoquePrivado no parâmetro valor.
            if(typeof valor !== 'number') {
                console.log('[ERRO]. Digite um número. ')
            }

            
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 56; //valor a ser inserido nas chaves estoque. Este valor vai substituir o parâmetro 3, que é vinculado inicialmente na chave estoque. 
console.log(p1.estoque)