function contar() {
    var ini = window.document.getElementById('inic')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        window.alert('[ERRO] Faltam dados!')      
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value) //Sempre transformar em nova variavel
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else { // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}