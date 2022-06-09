function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    return falaResto;
}
const p1 = falaResto('Olá');
console.log(p1('Mundo!'))

//Primeiro p1 vai enviar a function com 'Olá' em parâmetro e vai me retornar a function falaResto. Após isso FalaResto é executado com o parâmetro 'Mundo'. o return vai ter salvo o primeiro parâmetro 'Olá' e vai me retornar junto do segundo parâmetro 'Mundo!'

//const p1 = falaFrase('Olá');
//const p2 = (p1('Mundo!'));
//console.log(p2)  --> vai dar mesmo resultado