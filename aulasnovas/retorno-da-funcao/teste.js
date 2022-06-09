const nomeCompleto = 'Gabriel Henrique Rocco Froes'

const formataNome = nome => {
    const nomes = nome.split(' ')
    return nomes[0] + ' ' + nomes[nomes.length - 1]
}
console.log(formataNome(nomeCompleto))