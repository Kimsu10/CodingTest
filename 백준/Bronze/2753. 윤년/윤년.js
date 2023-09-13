const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const A = +input[0];
A % 4 === 0 && A % 100 !== 0 || A % 400 === 0 ? console.log(1) : console.log(0);