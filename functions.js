// JavaScript Function and Function Expressions

function example () {
    console.log('Eu sou uma função example');
}

example();

function calcular(num) {
    return num + 10;
}

console.log(calcular(10));

function multiplicar(num1, num2) {
    return num1 * num2;
}

console.log(multiplicar(10, 4));

// JavaScript Variable Scope

let variable17 = 'eu sou uma variável global' // global scope

function scopesExample() {
    let variable18 = 'eu sou uma variável local'; // local scope
    return console.log(variable18);
}

console.log(variable17);
scopesExample()

// JavaScript Hoisting

songName('Willow')

function songName(song) {
    return console.log(`O nome da música é ${song}`);
}

console.log(variable19); // Undefined
var variable19 = 20;

var variable20 = 21;
console.log(variable20) // 'var' is needed

// JavaScript Recursion

let variable21 = 1; 

function recurse(numero) {
    console.log('Isso irá repetir algumas vezes...');
    variable21 = variable21 + numero
    console.log(variable21)

    if(variable21 <= 8) {
        recurse(1);
    } else {
        console.log('O código acaba por aqui')
    }
}

recurse(1)