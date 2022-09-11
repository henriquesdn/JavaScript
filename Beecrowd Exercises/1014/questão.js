var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((i) => Number(i));

var distance = lines[0];
var gasoline = lines[1];
var kmPerL = distance / gasoline;

console.log(`${kmPerL.toFixed(3)} km/l`);