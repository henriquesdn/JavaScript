var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

var a = lines[0];
var b = lines[1];
var c = lines[2];
var maior = Math.max(a, b, c);

console.log(`${maior} eh o maior`);