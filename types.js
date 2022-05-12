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
console.log(sortExample)