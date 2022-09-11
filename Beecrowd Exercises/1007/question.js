var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var a = lines[0];
var b = lines[1];
var c = lines[2];
var d = lines[3];
var diferenca = a * b - c * d;

console.log(`DIFERENCA = ${diferenca}`);