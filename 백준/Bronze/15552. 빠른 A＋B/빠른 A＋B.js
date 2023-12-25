const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
let sum = '';

for(let i = 1; i <= count; i++){
    let num = input[i].split(' ');
    sum += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(sum)