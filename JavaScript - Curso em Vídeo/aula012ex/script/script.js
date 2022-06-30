function carregar() { //atribuição de variaveis de uma função
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    if (hora >=0 && hora < 12) { //condições ainhadas (composta)
        msg.innerHTML = 'Bom dia'
        msg.innerHTML += `<br>Agora são ${hora.toFixed(2).replace ('.',':')} horas.`        
        img.src = 'imagens/manha-c.png'
        window.document.body.style.background = '#D7BFA6'
    } else if (hora >=12 && hora <19) {
        msg.innerHTML = 'Boa tarde'
        msg.innerHTML += `<br>Agora são ${hora.toFixed(2).replace ('.',':')} horas.`
        img.src = 'imagens/tarde-c.png'
        window.document.body.style.background = '#F28705'
    } else {
        msg.innerHTML = 'Boa noite'
        msg.innerHTML += `<br>Agora são ${hora.toFixed(2).replace ('.',':')} horas.`
        img.src = 'imagens/noite-c.png'
        window.document.body.style.background = '#556573'
    }
}