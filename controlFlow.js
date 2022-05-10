// JavaScript if...else Statement

variable10 = 15

if (variable10 > 8) {
    console.log('A variável é maior que 8');
} else {
    console.log('A variável não é maior que 8')
}

if (variable10 == 8) {
    console.log('A variável é 8');
} else if (variable10 == 9) {
    console.log('A variável é 9')
} else {
    console.log('A variável é qualquer outra')
}

if (variable10 == 15)
    console.log('é 15')
else
    console.log('não é 15')

// JavaScript for loop

const variable11 = 100;

for(i = 1; i <= variable11; i++) {
    console.log(`Essa foi a mensagem número ${i}`);
}

// JavaScript while and do...while Loop

const n = 10;
let m = 1;

while(m <= n) {
    console.log(`O número atual é ${m} pois é um while`)
    m++
}

const variable12 = 10;
let variable13 = 3;

do {
    console.log(`Isso aqui é um DoWhile e é o número ${variable13}`);
    variable13++
} while(variable13 <= variable12)

// JavaScript break Statement

for(let variable14 = 1; variable14 <= 20; variable14++) {
    if(variable14 == 14) {
        break
    }

    console.log(`Eu sou o número ${variable14}`);
}

// JavaScript continue Statement

for(let variable15 = 1; variable15 <=6; variable15++) {
    if(variable15 == 4) {
        console.log('você deveria acabar aqui')
        continue
    }

    console.log(`${variable15}`)
}

// JavaScript Switch Statement

let variable16 = 4

switch (variable16) {
    case 1: {
        console.log(`A variável é ${variable16} e deveria ser 1`);
        break;
    }
    case 2: {
        console.log(`A variável é ${variable16} e deveria ser 2`);
        break;
    }
    case 3: {
        console.log(`A variável é ${variable16} e deveria ser 3`);
        break;
    }
    case 4: {
        console.log(`A variável é ${variable16} e deveria ser 4`)
        break;
    }
    default: {
        console.log(`A variável não é encontrada`);
        break;
    }
}

switch('macarrao') {
    case 'sorvete':
    case 'macarrao':
    case 'pão de queijo':
        {
            console.log('Eu sou uma comida listada')
            break;
        }
    default: {
        console.log('Eu não sou uma comida listada');
        break;
    }
}