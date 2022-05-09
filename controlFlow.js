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