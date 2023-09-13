const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let hour = +input[0];
let min = +input[1];

const timer = (hour, min) => {
  const dayByTime = 24 * 60;
  const alarm = hour * 60 + min - 45;
    
  let alarmHour;
  let alarmMin;

  if (alarm > 0) {
    alarmHour = parseInt(alarm / 60);
    alarmMin = alarm - alarmHour * 60;
  } else {
    alarmHour = parseInt((dayByTime + alarm) / 60);
    alarmMin = dayByTime + alarm - alarmHour * 60;
  }
  console.log(alarmHour === 24 ? "0" : alarmHour, alarmMin);
};

timer(hour, min);
