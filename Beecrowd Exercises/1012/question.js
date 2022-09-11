var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

const pi = 3.14159;
var a = lines[0];
var b = lines[1];
var c = lines[2];

var triangulo = a * c / 2;
var circulo = c * c * pi; 
var trapezio = (a + b) * c / 2;
var quadrado = b * b;
var retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);