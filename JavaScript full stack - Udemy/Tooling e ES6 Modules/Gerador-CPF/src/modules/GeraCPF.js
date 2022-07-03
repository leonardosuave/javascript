import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    //O cpf pode ter um número aleatório entre o max e min especificado
    rand(min = 100000000, max = 999999999) {

        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand(); //Gera os números aleatórios.

        //Joga os números gerados na função geraDigito importada do arquivo ValidaCPF.js
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        return this.formatado(novoCPF);  //Retorna o número ja formatado, chamando o método formatado().       
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' + 
            cpf.slice(3, 6) + '.' + 
            cpf.slice(6, 9) + '-' + 
            cpf.slice(9, 11)
        )
    }
}