//Semelhante as estruturas de repetições For e While.
//Atenta-se ao maximo de recursividade. Caso exagere a engine vai dar erro.
function recursiva(max) {
    if(max >=10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);