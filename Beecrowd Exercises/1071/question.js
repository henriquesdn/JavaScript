var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var menor = Math.min(lines[0], lines[1]);
var maior = Math.max(lines[0], lines[1]);
var soma = 0;

if (menor % 2 == 0) {
    menor += 1;
};

while (menor < maior) {
    menor += 2;

    if (menor < maior) {
        soma += menor;
    };
};

console.log(soma);

// inconsitência no beecrowd