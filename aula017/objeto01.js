var amigo = {nome: 'Leonardo Suave',
Sexo: 'Masculino', 
peso: 85.4, 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(3)
console.log(`${amigo.nome} ficou com ${amigo.peso}kg`)