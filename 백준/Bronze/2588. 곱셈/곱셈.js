const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [A, B] = input;
const [a, b, c] = B;
let ac = A * c;
let ab = A * b;
let aa = A * a;

console.log(ac);
console.log(ab);
console.log(aa);
console.log(A * B);