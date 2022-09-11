var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var notaA = lines[0] * 3.5;
var notaB = lines[1] * 7.5;
var media = (notaA + notaB) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);