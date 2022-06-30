var agora = new Date() //Para pegar a hora exata do computador
var hora = agora.getHours() //comando para pegar hora exata do sistema que está rodando o script
console.log(`Agora sáo exatamente ${hora} horas.`)
if ((hora>=5)&&(hora <12)) {
    console.log('Bom dia!')
} else if ((hora >=12)&&(hora <=18)) {
    console.log('Boa tarde!')
} else if ((hora > 18) && (hora <=24)) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}