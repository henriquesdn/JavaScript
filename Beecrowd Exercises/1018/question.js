var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var amount = lines[0];
var c100 = Math.floor(amount / 100);
var c50 = Math.floor(amount % 100 / 50);
var c20 = Math.floor(amount % 100 % 50 / 20);
var c10 = Math.floor(amount % 100 % 50 % 20 / 10);
var c5 = Math.floor(amount % 100 % 50 % 20 % 10 / 5);
var c2 = Math.floor(amount % 100 % 50 % 20 % 10 % 5 / 2);
var c1 = amount % 100 % 50 % 20 % 10 % 5 % 2;

console.log(amount);
console.log(`${c100} nota(s) de R$ 100,00`);
console.log(`${c50} nota(s) de R$ 50,00`);
console.log(`${c20} nota(s) de R$ 20,00`);
console.log(`${c10} nota(s) de R$ 10,00`);
console.log(`${c5} nota(s) de R$ 5,00`);
console.log(`${c2} nota(s) de R$ 2,00`);
console.log(`${c1} nota(s) de R$ 1,00`);