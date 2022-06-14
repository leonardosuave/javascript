try {    
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log(a) //ERRO para pular a proxima linha e execultar o catch
    console.log('Fechei o arquivo');
    //É executada quando não há erros
} catch (e) {
    //É executada quando há erros
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado')
    //Sempre é executado e pode ser omitido
}