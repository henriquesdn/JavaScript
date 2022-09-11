var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

var numberA = lines[0];
var numberB = lines[1];
var menor = Math.min(numberA, numberB);
var maior = Math.max(numberA, numberB);

if (maior % menor == 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
};