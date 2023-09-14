const [curTime, cookTime] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [hour, min] = curTime.split(' ').map(v => +v);
const duration = parseInt(cookTime);

min += duration;
hour += Math.floor(min / 60);
min %= 60;
hour %= 24; 

console.log(hour + " " + min);
