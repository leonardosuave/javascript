function fatorial(n) {
    if (n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    } 
}
console.log(fatorial(6))

//Estudar RECURSIVIDADE, principalmente em fatorial para entender armazenamento de resultados