// JavaScript Arrays

const someArray = ['eu', 'sou', 'uma', 'array'];

const someArray2 = new Array('eu', 'também', 'sou'); // Não recomendado 

const someArray3 = [
    {'pais': 'França'},
    [1, 2, 3],
    function arrayFunction() {
        return console.log('sou uma function dentro de uma array')
    }
];

console.log(someArray[1]);
console.log(someArray3[0])

const somethingMissing = ['Javascript', 'Kotlin', 'Python']
somethingMissing.push('Java');

console.log(somethingMissing[3]);
somethingMissing.unshift('Ruby');
console.log(somethingMissing[3]);
console.log(somethingMissing[0]);

console.log(somethingMissing);
somethingMissing.pop();
console.log(somethingMissing);
somethingMissing.shift();
console.log(somethingMissing)

const arrayExample1 = [1, 2, 3];
const arrayExample2 = [4, 5, 6];

const concatExample = arrayExample1.concat(arrayExample2);
console.log(concatExample);

const indexExample = arrayExample1.indexOf(2, 0);
console.log(indexExample)

const findExample = arrayExample1.find(element => element > 0);
console.log(findExample);

let foods = ['ice cream', 'potato', 'tomato', 'banana', 'apple']

const sortExample = foods.sort();
console.log(sortExample) // ordem alfabética

const sliceExample = foods.slice(2);
console.log(sliceExample);

// JavaScript Multidimensional Array

const multidimensionalArray = [[1, 2, 5], [30, 10, 500], [0, 0, 0]];

console.log(multidimensionalArray[1][1]);

let student1 = ['Jack', 20];
let student2 = ['Mapple', 20];
let student3 = ['Martha', 19];

let allStudents = [student1, student2, student3];
console.log(allStudents);

allStudents.push(['Peter', 20]);
console.log(allStudents);

allStudents[3][2] = 'Something';
console.log(allStudents);

// JavaScript String

const iAmAString = 'Hello';

const singleString = 'Hello again';
console.log(singleString);
const doubleString = "The third hello";
console.log(doubleString);
const backticksString = `Eu sou um hello que pode fazer mágica: ${doubleString}`;
console.log(backticksString);

console.log(backticksString[21]);
console.log(backticksString.charAt(3));

const oneLetter = 'R';

console.log(oneLetter === 'r'); // Uppercase =/= Lowercase

console.log(backticksString.length);

console.log(doubleString.concat(singleString));
const replaceExample = oneLetter.replace(/R/i, 'L');
console.log(replaceExample);

console.log(doubleString.split()); // string now is an Array
console.log(doubleString.toLowerCase());
console.log(doubleString.toUpperCase());

const whiteSpace = ' teste '
console.log(whiteSpace.trim());