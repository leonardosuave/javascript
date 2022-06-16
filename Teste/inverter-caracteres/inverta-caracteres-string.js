let string = window.document.getElementById('frase');
let res = window.document.getElementById('res');
function iniciar(){    
    let separar = separarCaracteres(string.value);
    let inverso = inverterCaracteres(separar);
    let juntar = juntarCaracteres(inverso);
    res.innerHTML = `<p>A string a ser invertida é: ${string.value}</p>` 
    res.innerHTML += `<p>A string ${string.value} escrita de forma invertida é ${juntar}</p>`
    string.value = '';
    string.focus();  
}
function separarCaracteres(frase) {
    res.innerHTML =`A string a ser invertida é: ${frase}`
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
    return juntar.toLowerCase()
}

