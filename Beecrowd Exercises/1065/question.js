var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var cont = 0;

for (var i = 0; i < 5; i += 1) {
    if (lines[i] % 2 == 0) {
        cont += 1;
    };
};

console.log(`${cont} valores pares`);