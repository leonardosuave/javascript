const pessoas = [
    {id: 3, nome: 'Leonardo'},
    {id: 2, nome: 'Tassiane'},
    {id: 1, nome: 'Judite'},    
];


const novasPessoas1 = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas1[id] = {...pessoa};
}
console.log(novasPessoas1)

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const pessoas of novasPessoas.keys()) {
    console.log(novasPessoas)
}

