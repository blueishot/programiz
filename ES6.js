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

// JavaScript Default Parameters

function somatoria(x, y = 20) {
    console.log('teste');
    console.log(`${x}, ${y}`);
    return x + y;
}

somatoria(20)
console.log(somatoria(123, 32));

function defaultArg (x = 10) {
    console.log(x);
}

defaultArg(undefined); // return the default value.

// JavaScript Template Literals (Template Strings)
 
const variable25 = 'Manuel';
console.log(`Hello ${variable25}`);

const variable26 = `You can use 'quotes'`;
console.log(variable26);

const variable27 = `Gone now are the old times,
Forgotten, time to hold on the railing,
The Rubik's Cube isn't solving for us`;

console.log(variable27);

let variable28 = 19

console.log(`${variable28 > 19 ? true : false}`);

function stringExample(strings) {
    return console.log(strings);
}

stringExample`Eu sou uma string`;