function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', { //Vai criar cpfLimpo por get:
        get: function() {
            return cpfEnviado.replace(/\D+/g, ''); //Retorna para a cpfLimpo os números do cpf sem ponto e traço.
        }
    });
} //CPF limpo(sem ponto e traço)

ValidaCPF.prototype.Valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false; //Verifica se possui algo digirado dentro do cpfLimpo.
    if(this.cpfLimpo.length !== 11) return false; //Verifica se o cpf possui 11 números
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2); //Para retirar os 2 digitos do cpf 
    const digito1 = this.criaDigito(cpfParcial); //Verificação com os 9 primeiros números
    const digito2 = this.criaDigito(cpfParcial + digito1) //Verificação com os 9 primeiros números + o primeiro digito obtido.
    const novoCpf = cpfParcial + digito1 + digito2; //Vai concatenar os 9 primeiros números com os 2 digitos gerados no cálculo.    
    
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) { //Método que recebe os números do cpf e faz os cálculos dos digitos.
    const cpfArray = Array.from(cpfParcial); //Transforma o cpfParcial em Array para fazer verificação.
    
    let regressivo = cpfArray.length + 1; //Quantidade de multiplicação
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --
        return ac;
    },0)
    
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : String(digito); //Verifica se o calculo é superior a 9 (por Expressão ternária).    
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;    
};

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);
console.log(cpf.Valida()); //Método que vai retornar true ou false