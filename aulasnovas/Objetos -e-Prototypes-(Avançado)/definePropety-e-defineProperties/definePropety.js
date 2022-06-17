//Utilizado para travar a edição de uma elemento de um objeto
//defineProperty - Utilizado para travar um elemento.
//defineProperties - Utilizado para travar varias de uma só vez.

function Produto(nome, preço,est) {
    this.nome = nome,
    this.preco = `R$${preço},00 reais`
    this.estoque = `${est} Unidades`
    
    Object.defineProperty(this, 'estoque', {
        //enumerable: true, - Caso não tenha o elemento estoque dentro da chave e queira criar um.
        //value: est, - Atribui o valor do parâmetro passado pela function
        writable: false,
        configurable: true //Indica que estoque agora pode ser reconfigurado, mesmo writable sendo false. NECESSARIO CRIAR NOVO Object.defineProperty para reconfigurações.
        
    });

    Object.defineProperty(this, 'estoque', {
        writable: true, //Da permissão de modificação do valor da chave (estoque:).
        configurable: false //Impossibilita criar novas funções de configuração de valores para a chave (estoque:) e também apagar chaves./        
    });
}
let p1 = new Produto('Iphone 14', 3000, 50)
console.log(p1)
p1.estoque = 99 //Na primeira função de defineProperty não é alterado devido o Writable ser FALSO porém devido o configurable ser true, este valor é alterado devido obedecer a segunda função defineProperty que foi criada..
delete p1.nome //a chave nome é deletada devido o primeiro defineProperty ser True. Se fosse False não seria possivel apagar qualquer chave do obj.
console.log(p1)

//Retorna o nome das chaves do objeto em um Array.
console.log(Object.keys(p1))

//Retorna o nome das chaves do objeto.
for(let chave in p1) {
    console.log(chave);
}

