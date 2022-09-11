var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var time = lines[0];
var averageSpeed = lines[1];
var distance = averageSpeed * time;
var liters = distance / 12;

console.log(liters.toFixed(3));