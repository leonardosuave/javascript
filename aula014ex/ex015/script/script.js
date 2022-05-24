function contar() {
    var inicio = window.document.getElementById('inic')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pass')
    var res = window.document.getElementById('res')        
    
    if (inicio.value.length == 0 ||  passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else if (passo.value == 0) {
        window.alert('[ERRO] Passo inválido! Considerando Passo 1')        
        passo = 1
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(inicio.value)
        var p = Number(passo.value)        
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `                    
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `                    
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }    
}
