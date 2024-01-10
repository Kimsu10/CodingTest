// 7.5억 ops/s ± 1.92%  6.6억 ops/s ± 2.19% 5.19 % slower
function solution(myString){
    return myString.replaceAll(/[a-k]/g, 'l');
}

// 6.9억 ops/s ± 1.18%
// function solution(myString) {
//     return [...myString].map((el) => el < 'l' ? 'l' : el).join('');
// }

