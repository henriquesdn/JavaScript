var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var number = lines[0];
var hoursWorked = lines[1];
var perHour = lines[2];

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${(hoursWorked * perHour).toFixed(2)}`);