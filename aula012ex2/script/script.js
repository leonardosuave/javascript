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
        img.setAttribute('id','foto') // Mesma coisa que adicioanr id="foto" em uma tag <img>
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=12) {
                img.setAttribute('src','imagens/bebe-homem-c.png')             
            } else if (idade >12 && idade <=21) {
                img.setAttribute('src','imagens/jovem-h-c.png')
            } else if (idade >21 && idade<=50) {
                img.setAttribute('src','imagens/homem-c.png')
            } else {
                img.setAttribute('src','imagens/idoso-c.png')
            }
        } else  if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=12) {
                img.setAttribute('src','imagens/bebe-mulher-c.png')
            } else if (idade >12 && idade <=21) {
                img.setAttribute('src','imagens/jovem-m-c.png')
            } else if (idade > 21 && idade <=50) {
                img.setAttribute('src','imagens/mulher-c.png')
            } else {
                img.setAttribute('src','imagens/idosa-c.png')
            }
        } 
        res.style.textAlign = 'center'
        res.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }      
}