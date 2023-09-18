const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const prize = (nums) => {
    const [a, b, c] = nums;
    let result = 0;

    if(a === b && b === c){
        result = 10000 + a * 1000;
    } else if(a === b || a === c || b === c){
        if (a === b) {
            result = 1000 + a * 100;
        } else if(a === c){
            result = 1000 + a * 100;
        } else {
            result = 1000 + b * 100;
        }
    } else {
        result = Math.max(a, b, c) * 100;
    }
    return result;
}
console.log(prize(input));