let inputsequencia = document.getElementById('sequencia');
let inputnumero = document.getElementById('numero');
let res = document.getElementById('res');

function start() {    
    let qtDeSequencia = Number(inputsequencia.value) //Insira AQUI a quantidade  de sequência a ser realizado.
    let numero = Number(inputnumero.value); //Insira AQUI o número para checar na sequência.
    
    let checknumeros = checknumerosint(qtDeSequencia, numero);
    res.innerHTML = '';
    inputsequencia.value = ''
    inputsequencia.focus(); 
    inputnumero.value = ''       
    
    if(typeof(checknumeros) !== 'string') {
        let checkNumber = checknumeros.filter(function (checkNumber) {
        if(checkNumber === numero) return true
        });

        if(checkNumber !=''){
            res.innerHTML = `<p>A sequência Fibonacci é: ${checknumeros}</p>`;
            res.innerHTML += `<p>O número ${numero} faz parte da sequência</p>`;
        } else {
            res.innerHTML = `<p>A sequência Fibonacci é: ${checknumeros}</p>`;
            res.innerHTML += `<p>O número ${numero} não faz parte da sequência</p>`;
        } 
    } else {
        res.innerHTML = checknumeros;
    }   
}

function checknumerosint(sequencia,numero) {
    
    if(sequencia % 1) return `[ERRO]. Insira um valor inteiro na sequência!`
    if(numero % 1) return `[ERRO]. Insira um número inteiro para verificar se é uma sequência Fibonacci!` 

    let seqFibonacci = []; //Armazenamento da sequência Fibonacci.
    let firstNum = 0
    let secondNum = 1
    seqFibonacci.push(firstNum);
    seqFibonacci.push(secondNum);
    
    for(let c = 1; c <= (sequencia - 2); c++) {
        let Fib = (firstNum + secondNum);
        seqFibonacci.push(Fib); //Para adicionar os números na sequência.
        firstNum = secondNum;
        secondNum = Fib;
        
    }
    return seqFibonacci;    
}
