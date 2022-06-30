function random (min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 40;

/* 
Para Do While pode eliminar a linha abaixo e colocar dentro do do{} inserindo var no lugar de let, ou simplesmente deixar apenas rand = ....

let rand = random(min, max) 
*/

do {
   rand = random(min,max);
   console.log(rand) 
} while (rand !== 10)