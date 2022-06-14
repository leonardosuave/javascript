//Continue -->Vai ate a proxima interação.
//Break -->Vai finalizar a interação.

const numeros = [1, 2, 3, 4, 5, 6, 85, 8, 9];

for (let i of numeros) {
    if(i === 85) {
        console.log(i)
        break //Quebra o bloco e finaliza
    }    
}

/*
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] === 85) {
        console.log(`índice ${i} é ${numeros[i]}`)
        break
    }
}

for (let i in numeros) {
    if(numeros[i] === 85) {
        console.log(`índice ${i} é ${numeros[i]}`)
        break //Quebra o bloco e finaliza
    }    
}
*/
