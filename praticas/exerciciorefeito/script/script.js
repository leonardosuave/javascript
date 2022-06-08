var res = window.document.getElementById('res')
var num = window.document.getElementById('numero')
var lista = window.document.getElementById('list')
var valores = []

function isnumero (n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function checklista (n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function inserir() {
    if (isnumero(num.value) && checklista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Número ${Number(num.value)} adicionado.`
        lista.appendChild(item)  
    } else {
        window.alert('[ERRO] Verifique o valor!!')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar () {
    var maior = 0
    var menor = valores[0]
    var soma = 0
    var soma1 = 0
    
    for(var c in valores) {
        var media = 0
        soma = soma1 + valores[c]
        soma1 = soma
        if (valores[c] > maior) {
            maior = valores[c]
        }
        if (valores[c] < menor) {
            menor = valores[c]
        }
        media = soma / (valores.length)
        
    }
    res.innerHTML += `<p>O maior valor adicionado é ${maior}</p>`
    res.innerHTML += `<p>O menor valor acionado é ${menor}</p>`
    res.innerHTML += `<p>A soma entre os valores adicionados é ${soma}</p>`
    res.innerHTML += `<p>A média entre os valores adiconados é ${media}</p>` 
    
}

