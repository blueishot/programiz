// Getting Started With JavaScript

console.log('hello world');

// JavaScript Variables and Constants

let variable1 = 2;

var variable2 = 3;
let variable3 = 4;

let variable4 = 5, variable5 = 6, variable7 = 7;

// JavaScript console.log()

console.log ('apenas uma mensagem');

const variable8 = 'texto';
const variable9 = 'informativo';

console.log(variable8, '', variable9);

//JavaScript Data Types

const variableString = 'Uma string'; // String
const variableNumber = 12 // Number
const variableBigInt = 900719925124740998n // BigInt
const variableBoolean = true // Boolean
const variableUndefined = undefined // Undefined
const variableNull = null // Null
const variableSymbol = Symbol('Hello') // Symbol
const variableObject = {
    bandName: 'Engelbert Humperdinck',
    songName: 'A Man Without Love'
} // Object

console.log(typeof(variableString));
console.log(typeof(variableNumber));
console.log(typeof(variableBigInt));
console.log(typeof(variableBoolean));
console.log(typeof(variableUndefined));
console.log(typeof(variableNull));
console.log(typeof(variableSymbol));
console.log(typeof(variableObject));

// JavaScript Operators

let variableAssingment = 14;
variableAssingment += variableAssingment + 15;
variableAssingment -= variableAssingment - 15;
variableAssingment *= 12;
variableAssingment /= 1;
variableAssingment %= 2;
variableAssingment **= 12;

let variableArithmetic = 10;
variableArithmetic + 3;
variableArithmetic - 4;
variableArithmetic * 3;
variableArithmetic / 4;
variableArithmetic % 3;

console.log(3 == 'texto'); // false
console.log(30 != 31); // true
console.log(30 === 30); // true
console.log(30 !== 'texto') // true
console.log(15 > 30) // false
console.log(30 >= 15) // true
console.log(14 < 21) // true
console.log(130 <= 1) // false

console.log(14 && 15 > 10) // true
console.log(13 && 14 > 30) // false

console.log((10 < 11) ? 'Menor' : 'Maior');