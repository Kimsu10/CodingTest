function solution(arr) {
 let result = [];
    for(let i of arr){
     result = result.concat(Array(i).fill(i));
 }
    return result;
}