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

 // Javascript async/await

 async function asyncFunc() {
     console.log('Isso é uma função async');
     return Promise.resolve(1);
 }

asyncFunc()
.then(function (result) {
    console.log(result)
});


let promiseExample2 = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve('Essa função async funcionou no resolve'), 4000
    })
});

async function asyncFunc2() {
    let result = await promiseExample2;
    console.log(result);
    console.log('Oi sou o asyncFunc2')
}

asyncFunc2()

let promiseExample3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise foi resolvida do promiseExample3'), 3000
    });
})

async function asyncFunc3() {
    try{
        let result = await promiseExample3;
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}

asyncFunc3()