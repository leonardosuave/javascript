class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable:true,
            get: function() {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    //Método
    Valida() {
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        if(!this.geraNovoCpf()) return false;
                
        return true
    }

    //Método
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    //Método
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.gerarDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.gerarDigito(cpfSemDigitos + digito1);

        return this.cpfLimpo === cpfSemDigitos + digito1 + digito2
    }

    //Método estático com For. (nenhum momento usa o this.)
    static gerarDigito(checkDigito) {
        let total = 0
        let regressivo = (checkDigito.length) + 1
        
        for(let numero of checkDigito) {
            total += Number(numero) * regressivo
            regressivo--
                        
        }

        const digito = 11 - (total % 11)
        //console.log(`Digito ${digito}`)
        return digito > 9 ? 0 : String(digito)
        
    }
}

const cpf = new ValidaCPF('436.314.488-21')
//console.log(cpf.Valida())

if(cpf.Valida()) {
    console.log(`CPF verdadeiro!`)
} else {
    console.log(`[ERRO]. Confira os números do CPF`)
}