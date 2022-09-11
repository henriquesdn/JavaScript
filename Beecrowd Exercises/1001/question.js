var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var a = lines[0];
var b = lines[1];
var x = a + b;

console.log(`X = ${x}`);