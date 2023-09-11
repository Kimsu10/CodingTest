const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const arr = input.map((v) => Number(v));
const [A, B, C] =arr;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);