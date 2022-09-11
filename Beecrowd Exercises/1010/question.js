var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var piece1 = lines[0].split(" ").map((i) => Number(i));
var piece2 = lines[1].split(" ").map((i) => Number(i));

var piecesNum1 = piece1[1];
var pieceValue1 = piece1[2];
var piecesNum2 = piece2[1];
var pieceValue2 = piece2[2];
var total = piecesNum1 * pieceValue1 + piecesNum2 * pieceValue2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);