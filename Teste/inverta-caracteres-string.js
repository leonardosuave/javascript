let string = 'Inverter String'
function iniciar(){
    let separar = separarCaracteres(string);
    let inverso = inverterCaracteres(separar);
    let juntar = juntarCaracteres(inverso); 
    console.log(`A string (${string}) ficou ${juntar}`)  
}
function separarCaracteres(frase) {
    console.log(`A string a ser invertida é: ${frase}`)
    let newfrase = frase.split(''); //Separar as palavras em letras
    return newfrase;
}
function inverterCaracteres(separar) {
    let indiceMax = separar.length;
    let fraseInvertida = [];    
    for(let c = 0; c < indiceMax; c++){
        fraseInvertida.push(separar.pop()); 
    }
    return fraseInvertida
}
function juntarCaracteres(caracteres) {
    let juntar = caracteres.join('')
    return juntar
}
iniciar();