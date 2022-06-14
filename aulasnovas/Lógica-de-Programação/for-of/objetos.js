//For clássico - Geralmente com iteráveis (Array ou Strings)
//For In - Retorna o índice ou chave (String, arrays ou objetos)
//For Of - Retorna o valor em si (iteráveis, arrays ou strings)

const pessoas = {
    nome: 'Leonardo',
    sobrenome: 'Suave',
    idade: 26
}
for (let i of pessoas) {
    console.log(i)
}

//[ERRO]. i com OF não é interavel. Não funciona For Of em Objetos.