// JavaScript try...catch...finally Statement

function tryRunIt() {
    try {
        console.log('Aqui começa o Try');
        console.log(maybe);
    }
    catch(error) {
        console.log('Algo deu errado');
        console.log('Um erro aconteceu ' + error);
    }
    finally {
        console.log('Mesmo com o erro, o finally consegue prosseguir');
    }
}

tryRunIt()

// JavaScript throw Statement

const variable22 = 15

try {
    if (variable22 > 20) {
        console.log('Essa variável é maior que 20');
    } else {
        throw new Error('A variável não é maior que 20');
    }
} catch (error) {
    console.log('Um erro ocorreu');
    console.log('O erro ocorrido: ' + error);
}

// JavaScript Modules

export default function lady() {
    console.log('I love when you sing that song');
}

// should import somefunction from './ExceptionsAndModules.js' in another file.