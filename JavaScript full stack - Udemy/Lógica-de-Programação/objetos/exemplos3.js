const pessoal = {
    nome: 'Leonardo',
    sobrenome: 'Suave',
    idade: 26,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementoidade() {
        this.idade++
    }
}

pessoal.fala()
pessoal.incrementoidade()
pessoal.fala()
pessoal.incrementoidade()
pessoal.fala()
pessoal.incrementoidade()