var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []

function isnumero (n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {         
    if(isnumero(num.value) && !inlista(num.value, valores)) {        
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('ERRO')
    }
    //Para limpar o campo e focar o campo de inserir valores quando adicionar um valor 
    //Para limpar tela de resultados finais quando inserir novos valores
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicionar valores primeiro antes de finalizar')
    } else {        
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var soma1 = 0
        var media = 0
        for (var c in valores) {
            soma = soma1 + valores[c]
            soma1 = soma
            if (valores[c] > maior) {
                maior = valores[c]
            }
             if (valores[c] < menor) {
                menor = valores[c]
            }
            media = soma / tot
        }

        res.innerHTML = '' //para garantir que res não tenha valor atribuido
        res.innerHTML += `<p>Ao todo existem ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é o número ${maior}</p>`
        res.innerHTML += `<p>O menor valor é o número ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os valor é ${media.toFixed(4)}</p>`
    }    
}