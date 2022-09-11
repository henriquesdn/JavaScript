var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

var inicio = lines[0];
var fim = lines[1];
var tempo;

if (inicio < fim) {
    tempo = fim - inicio;
} else {
    tempo = 24 - inicio + fim;
}

console.log(`O JOGO DUROU ${tempo} HORA(S)`);