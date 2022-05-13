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