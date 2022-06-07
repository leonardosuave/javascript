const pessoas = {
    nome: 'Leonardo',
    sobrenome: 'Suave',
    idade: 26
}

//For clássico - Geralmente com iteráveis (Array ou Strings)
//For In - Retorna o índice ou chave (String, arrays ou objetos)
//For Of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i in pessoas) {
    console.log(i, pessoas[i])
}