const input = require('fs').readFileSync('/dev/stdin').toString();
const count = parseInt(input)/4;
console.log("long ".repeat(count) +"int")