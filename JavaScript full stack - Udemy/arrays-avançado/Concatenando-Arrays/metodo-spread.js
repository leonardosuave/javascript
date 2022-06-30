//metodo  ...spread (espalhar).
//funciona em objetos também. atentar para {} em objetos.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2, ...[10, 11, 12]]; //Pode adicionar um novo array como o [10, 11, 12].
console.log(a3)
