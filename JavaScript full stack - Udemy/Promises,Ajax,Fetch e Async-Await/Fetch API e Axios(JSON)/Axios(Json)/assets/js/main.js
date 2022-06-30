/*fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json)); //console.log(json)Aparece um array no console do nav.*/
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
        const tr = document.createElement('tr');

        //Primeira coluna
       let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        //Segunda coluna
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        //Terceira coluna
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);
       
        table.appendChild(tr);
    }
    let resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}  
