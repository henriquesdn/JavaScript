var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var n = lines[0];
var hours = Math.floor(n / 3600);
var minutes = Math.floor(n % 3600 / 60);
var seconds = n % 3600 % 60;

console.log(`${hours}:${minutes}:${seconds}`);