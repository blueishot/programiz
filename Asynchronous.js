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
