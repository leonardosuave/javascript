function random (min, max) {
    const r = Math.random() * (max - min) + min; // para gerar numeros aleatórios
    return Math.floor(r) //Para arredondar o numero 
}
const min = 1;
const max = 50;

//Inserindo let teremos uma variavel temporaria e assim deve-se chamar ela dentro da condição While para substituir
var rand = random(min, max); 

while (rand !== 10) { //vai rodar até achar o número 10
      
    console.log(rand);
}
    