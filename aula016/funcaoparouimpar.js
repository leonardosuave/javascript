function parimpar (v) {
    if (v%2==0) {
        return 'Par!'
    } else {
        return 'Impar!' // As '' é devido impar ser string (escrito)
    }
}
//Assim passa direto
var n = 5
console.log(parimpar(n))

/* //Pode ser assim, passar em variavel
var n = 20
var res = parimpar(n)
console.log(`${res}`)
*/