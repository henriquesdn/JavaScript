var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var km = lines[0];
var minutes = km * 2;

console.log(`${minutes} minutos`);