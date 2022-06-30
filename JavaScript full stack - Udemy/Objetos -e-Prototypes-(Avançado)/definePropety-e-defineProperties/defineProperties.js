//Utilizado para travar a edição de uma elemento de um objeto
//defineProperty - Utilizado para travar um elemento.
//defineProperties - Utilizado para travar varias de uma só vez.

function Produto(nomeproduto, preçoproduto,est) {      

    Object.defineProperties(this, { //Funciona igual ao define.Propety, so que aqui define para cada chave.
        nome: {
            enumerable: true, //mostra a chave
            value: nomeproduto, //valor dentro da chave
            writable: true, //pode alterar
            configurable: true //configurável
        },
        preco: {
            enumerable: true,
            value: preçoproduto,
            writable: false,
            configurable: true
        },
    })

    Object.defineProperty(this, 'preco', {
        writable: true,
        configurable: false,
    })
}
let p1 = new Produto('Iphone 14', 3000, 50)
console.log(p1)
p1.preco = 99 //Na primeira função de defineProperty não é alterado devido o Writable ser FALSO porém devido o configurable ser true, este valor é alterado devido obedecer a segunda função defineProperty que foi criada..
console.log(p1)

//Retorna o nome das chaves do objeto em um Array.
console.log(Object.keys(p1))

//Retorna o nome das chaves do objeto.
for(let chave in p1) {
    console.log(chave);
}
