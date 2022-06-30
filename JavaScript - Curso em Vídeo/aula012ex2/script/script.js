function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = window.document.getElementById('nasc')
    var res = window.document.getElementById('res')
    if (anonasc.value.length == 0 || anonasc.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }  else {
        var idade = ano - Number(anonasc.value)
        var sexo = window.document.getElementsByName('radsex')        
        var genero = ''
        var img = document.createElement('img') //Mesma coisa que criar uma <img> em HTML
        
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=12) {
                img.setAttribute('src','imagens/bebe-homem-c.png') //Método de add imagens direto em JavaScript
                window.document.body.style.background = '#D7BFA6'          
            } else if (idade >12 && idade <=21) {
                img.setAttribute('src','imagens/jovem-h-c.png')
                window.document.body.style.background = '#F28705'
            } else if (idade >21 && idade<=50) {
                img.setAttribute('src','imagens/homem-c.png')
                window.document.body.style.background = '#556573'
            } else {
                img.setAttribute('src','imagens/idoso-c.png')
                window.document.body.style.background = '#406573'
            }
        } else  if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=12) {
                img.setAttribute('src','imagens/bebe-mulher-c.png')
                window.document.body.style.background = '#D7BFA6'
            } else if (idade >12 && idade <=21) {
                img.setAttribute('src','imagens/jovem-m-c.png')
                window.document.body.style.background = '#F28705'
            } else if (idade > 21 && idade <=50) {
                img.setAttribute('src','imagens/mulher-c.png')
                window.document.body.style.background = '#556573'
            } else {
                img.setAttribute('src','imagens/idosa-c.png')
                window.document.body.style.background = '#406573'
            }
        } 
        res.style.textAlign = 'center'
        res.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // para aparecer a imagem depois do ultimo res,innerHTML
    }      
}