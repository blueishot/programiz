// Javascript setTimeout()

function displayMessage() {
    console.log('Isso é uma mensagem')
}

setTimeout(displayMessage, 3000);

function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time)
}

setTimeout(showTime, 5000);

// Javascript Callback Function

function callbackExample(number, callback) {
    let soma = 10 + number;
    console.log(soma);
    callback() 
}

function shouldWork() {
    console.log('Essa função só deveria funcionar se o callback funcionar')
}

callbackExample(3, shouldWork)

const souUmNumber = callback => {
    const value = 101;
    callback(value);
}

souUmNumber(number => {
    console.log(number);
})

// Javascript Promise and Promise Chaining

let promiseExample = new Promise(function(resolve, reject) {
    console.log('eu sou um exemplo de Promise');
});

const count = true;

let countValue = new Promise (function (resolve, reject) {
    if(count) {
        resolve('Esse valor é existente');
    } else {
        reject('Esse valor não existe');
    }
})

console.log(countValue);

 let valorFinal = new Promise(function (resolve, reject) {
    resolve('Promise foi concluída');
 })

 valorFinal.then (function sucessValue(result) {
     console.log(result)
 })
 .then (function sucessValue1() {
     console.log('Várias funções com then')
 })

 let valorFinal2 = new Promise(function (resolve, reject) {
     resolve('Promise concluída');
     reject('Promise recusada');
 })

 valorFinal2.then (function sucessValue2 (result) {
     console.log(result);
 })
 .catch (function errorValue (result) {
     console.log(result);
 });

 console.log(valorFinal2);

 let valorFinal3 = new Promise(function (result, reject) {
     result('Promise foi resolvida');
 });

 valorFinal3.finally(function finallyExample() {
     console.log('Irei funcionar independente de erro')
 })

 console.log(valorFinal3)