var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var number = lines[0];

if (number % 2 == 0) {
    number += 1;
};

for (var i = 0; i < 6; i += 1) {
    console.log(number);
    number += 2;
};
    