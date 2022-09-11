var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var p1 = lines[0].split(" ").map((i) => Number(i));
var p2 = lines[1].split(" ").map((i) => Number(i));

var x1 = p1[0];
var y1 = p1[1];
var x2 = p2[0];
var y2 = p2[1];
var distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(distance.toFixed(4));