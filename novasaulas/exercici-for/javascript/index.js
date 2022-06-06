const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 3'},
];
let h1 = document.querySelector('.container')
h1.innerHTML = 'HEADER (h1)'

let container = document.querySelector('.container')
var itemP = document.createElement('div')
itemP.setAttribute('id', 'parDiv')
itemP.innerHTML = 'OK Div'
container.appendChild(itemP)

let