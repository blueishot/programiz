// Javascript ES6

let variable23 = 'Sandero';
const variable24 = 'Renault';

function somatoriaAleatoria(x, y = 10) {
    console.log(x + y);
}

somatoriaAleatoria(1);
somatoriaAleatoria(4, 3);

console.log(`Eu sou uma junção de variaveis: ${variable23} e ${variable24}`);

let someObject = {
    id: 1,
    idade: 32,
    banco: 'Itau'
}

let { id, idade, banco } = someObject;

console.log(id);
console.log(idade);
console.log(banco);

// JavaScript Arrow Function

let arrowExample = () => {
    console.log('Eu sou uma arrow function')
}

arrowExample();

let arrowExample2 = (argumento) => {
    if(argumento > 5) {
        return console.log('O argumento é maior que 5')
    } else {
        return console.log('O argumento não é maior que 5')
    }
}

arrowExample2(10);

function callArgs() {
    console.log(arguments)
}

callArgs(10, 20, 30);

let arrowExample3 = (...args) => {
    console.log(args);
} // Spread is needed

arrowExample3(10, 20, 30)