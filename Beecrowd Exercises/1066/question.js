var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var contPar = 0;
var contImpar = 0;
var contPositivo = 0;
var contNegativo = 0;

for (var i = 0; i < 5; i += 1) {
    if (lines[i] % 2 == 0) {
        contPar += 1;
    } else {
        contImpar += 1;
    };

    if (lines[i] > 0) {
        contPositivo += 1;
    } else if (lines[i] < 0) {
        contNegativo += 1;
    };
};

console.log(`${contPar} valor(es) par(es)`);
console.log(`${contImpar} valor(es) impar(es)`);
console.log(`${contPositivo} valor(es) positivo(s)`);
console.log(`${contNegativo} valor(es) negativo(s)`);