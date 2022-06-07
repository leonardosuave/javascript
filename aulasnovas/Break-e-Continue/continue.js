//Continue -->Vai ate o final da interação.
//Break -->Vai finalizar a interação.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

//Caso queira pular numeros, como o numero 2
//Inserie continue antes da ação a ser execultado --ex. console.log(i)

for (let i of numeros) {
    if (i === 2 ){
        console.log('Pulei o número 2')
        continue //O continue vai pular pra o inicio do For e aumenta o (i).
    }
    console.log(i)
}