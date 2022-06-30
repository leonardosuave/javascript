class ValidaCPF {
    constructor(cpfEnviado) {
        //Funciona adicionando this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
        Object.defineProperty(this, 'cpfLimpo', {
            get: function() {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    Valida() {
        
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCPF = cpfParcial + digito1 + digito2;
        
        return this.cpfLimpo === novoCPF;
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfParcial.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--
            return ac;
        },0)

        const digito = 11 - (total % 11);
        return digito > 9? 0 : String(digito);        
    }

}

const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.Valida())