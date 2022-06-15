function Start() {
    let fibonacci = createFibonacci();
    console.log(`A sequência Fibonacci é ${fibonacci}`)
    let numero = 5; //Insira AQUI o número para checar na sequência.
   
    let checkNumber = fibonacci.filter(function (checkNumber) {
        if(checkNumber === numero) return true
    });
    if(checkNumber !=''){
        console.log(`O número ${numero} faz parte da sequência`);
    } else {
        console.log(`O número ${numero} não faz parte da sequência`);
    }         
}

function createFibonacci() {
    let seqFibonacci = []; //Armazenamento da sequência Fibonacci.
    let qtDeSequencia = 15 //Insira AQUI a quantidade de sequência a ser realizado.
    let firstNum = 0
    let secondNum = 1
    seqFibonacci.push(firstNum);
    seqFibonacci.push(secondNum);
    
    for(let c = 1; c <= (qtDeSequencia - 2); c++) {
        let Fib = (firstNum + secondNum);
        seqFibonacci.push(Fib); //Para adicionar os números na sequência.
        firstNum = secondNum;
        secondNum = Fib;
        
    }
    return seqFibonacci;
};

Start();