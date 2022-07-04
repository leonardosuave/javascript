function promise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promise.');
            resolve();
        }, 2000)
    });
}

export default async function executa() {
    await promise();
    console.log('Terminou.')
}    