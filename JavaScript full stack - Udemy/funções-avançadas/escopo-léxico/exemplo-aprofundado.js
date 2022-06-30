const nome = 'Leonardo';

function falaNome() {
    //const nome = 'Tassiane'; -> Caso tenha um nome aqui, será utilizado este, pois se trata do nome mais proximo da chamada.
    console.log(nome) //Neste caso vai buscar um nome localizado nos vizinhos. O mais proximo é Leonardo que está no escopo global.
}

function usaFalaNome() {
    const nome = 'Tassiane'; //Este nome não será utilizado, pois esta localizado dentro de uma outra function 
    falaNome();
}
usaFalaNome();