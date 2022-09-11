var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

var a = lines[0];
var b = lines[1];
var c = lines[2];
var d = lines[3];

if ((b > c && d > a) && (c + d > a + b) && (c && d > 0) && (a % 2 == 0)) {
    console.log("Valores aceitos");
} else {
    console.log("Valores não aceitos");
};


    