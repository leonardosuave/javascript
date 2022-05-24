function contar() {
    var ini = window.document.getElementById('inic')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = 30
        var f = 20
        var p = 2
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}