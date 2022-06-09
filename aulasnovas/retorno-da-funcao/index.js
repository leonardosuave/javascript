function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    return falaResto;
}
const p1 = falaFrase('Olá');
console.log(p1('Mundo!'))