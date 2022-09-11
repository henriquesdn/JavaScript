var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('/n');

var cont = 0;

while (cont < 100) {
    cont += 2;
    console.log(cont);
};