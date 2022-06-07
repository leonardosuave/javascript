const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];
let h1 = document.querySelector('.container')
h1.innerHTML = 'HEADER (h1)'

let container = document.querySelector('.container')
var itemdiv = document.createElement('div')
var itemfooter = document.createElement('footer')
var itemsection = document.createElement('section')


itemdiv.setAttribute('id', 'parDiv')
itemdiv.innerHTML = 'OK'
container.appendChild(itemdiv)

