//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Método rapido - arrow function.
const numerosFiltrados = numeros.filter(valor => valor > 10
); // caso tivesse mais de 1 parametro - Olhar o primeiro ex abaixo.
console.log(numerosFiltrados)

//Criando função de calback método longo - Necessario caso vá utilizar esta função em outro lugar também.
/*
function callbackFilter(valor, indice, array) {
    return valor > 10; //forma resumida. Vai retornar se satisfazer a condição.
}
const numerosFiltrados = numeros.filter(callbackFilter); //filter() vai execultar o nome da função em parenteses
console.log(numerosFiltrados)*/



/*Método de fltragem manual e complicada - Eu que fiz de primeira.
const numerosMaiores10 = [];
for(let cada of numeros) {
    if(cada > 10) numerosMaiores10.push(cada);
}
console.log(numerosMaiores10);*/