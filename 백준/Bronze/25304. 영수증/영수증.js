const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const totalPrice = +input[0];
const boughItems = input.slice(2).map((el) => el.split(' ').map(Number));

let sum = boughItems.reduce((prev, [price, count]) => prev + price * count, 0);

console.log(totalPrice === sum ? 'Yes' : 'No');