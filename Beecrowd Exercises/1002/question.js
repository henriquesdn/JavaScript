var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

const pi = 3.14159;
var area = lines[0] * lines[0] * pi;

console.log(`A=${area.toFixed(4)}`);