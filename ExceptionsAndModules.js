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