var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').slice(1).map((i) => Number(i)); // slice corta tudo antes do indice 1 nesse caso

var fixed = lines[0];
var commission = lines[1] * 0.15;
var salary = fixed + commission;

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);