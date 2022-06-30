function fatorial (x) {
    for (c = x - 1; c >= 1; c--) {
        f = x * c
        x = f
    }
    return f
}
console.log(fatorial(5))

/*
Simplificado (Melhor)
function fatorial (x) {
    var fat = 1
    for(var c = x; c > 1; c-- ){
        fat *= c
    }
    return fat
}
var n = 5   --  5 pode ser colocado dentro do fatorial(n) direto..... neste caso desconsiderar var n = 5

console.log(fatorial(n)) 
*/ 