class Pessoa {
    constructor(nome, sobreno) {
        Object.defineProperty(this, 'nome', {
            enumerable:true,
            value:true,

            get: function() {
                return nome
            }
        })
        this.sobreno = sobreno;
    }
}