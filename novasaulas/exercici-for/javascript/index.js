const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); //Vai criar elementos de acordo com a tag do índice.
    tagCriada.innerText = texto; // Vai reproduzir o conteudo coletado do texto de cada índice e tag
    div.appendChild(tagCriada);
}
container.appendChild(div);


/* Maneira não usual.

let h1 = document.querySelector('.container')
h1.innerHTML = 'HEADER (h1)'
let container = document.querySelector('.container')
var itemp = document.createElement('p')
var itemdiv = document.createElement('div')
var itemfooter = document.createElement('footer')
var itemsection = document.createElement('section')

for (let i = 0; i < 1; i++) {
    let {texto} = elementos[i];
    itemp.innerHTML = texto;
}
for (let i = 1; i < 2; i++) {
    let {texto} = elementos[i];
    itemdiv.innerHTML = texto;
}
for (let i = 2; i < 3; i++) {
    let {texto} = elementos[i];
    itemfooter.innerHTML = texto;
}
for (let i = 3; i < 4; i++) {
    let {texto} = elementos[i];
    itemsection.innerHTML = texto;
}
container .appendChild(itemp)
container.appendChild(itemdiv)
container.appendChild(itemfooter)
container.appendChild(itemsection)
*/

