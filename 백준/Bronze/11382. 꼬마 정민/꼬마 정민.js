const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().split(' ').map((v)=>Number(v));
const result = A + B + C;
console.log(result);