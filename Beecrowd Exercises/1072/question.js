var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var contIn = 0;
var contOut = 0;
    
for (var i = 0; i < lines[0]; i += 1) {
    if (lines[i + 1] >= 10 && lines[i + 1] <= 20) {
        contIn += 1;
    } else {
        contOut += 1;
    };
};

console.log(`${contIn} in`);
console.log(`${contOut} out`);