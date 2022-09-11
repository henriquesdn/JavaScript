var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((i) => Number(i));

cod = lines[0];
qtd = lines[1];

if (cod == 1) {
    console.log(`Total: R$ ${(qtd * 4).toFixed(2)}`);
} else if (cod == 2) {
    console.log(`Total: R$ ${(qtd * 4.5).toFixed(2)}`);
} else if (cod == 3) {
    console.log(`Total: R$ ${(qtd * 5).toFixed(2)}`);
} else if (cod == 4) {
    console.log(`Total: R$ ${(qtd * 2).toFixed(2)}`);
} else if (cod == 5) {
    console.log(`Total: R$ ${(qtd * 1.5).toFixed(2)}`);
};