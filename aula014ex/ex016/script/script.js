function tabuada() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')    
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')        
            item.text = ` ${n} X ${c} = ${n*c} `
            item,value = `tab${c}` // Faz mais sentido para PHP - Vai atribuir tab para cada linha da option
            tab.appendChild(item)  // vai atribuir um filho ITEM dentro da var tab que é referente ao id tab      
        } 
    }      
}