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
        } else {
            genero = 'Mulher'
        } 
    }      
}