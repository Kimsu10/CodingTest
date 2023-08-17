function solution(n, control) {
  let arr = [...control]
  const move = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10
};
return arr.reduce((acc, word) => acc + (move[word] || 0), n);
}

/*
테스트 1 〉	통과 (0.95ms, 33.7MB)
테스트 2 〉	통과 (44.40ms, 37.6MB)
테스트 3 〉	통과 (0.71ms, 33.6MB)
테스트 4 〉	통과 (3.40ms, 36.1MB)
테스트 5 〉	통과 (6.80ms, 36.6MB)
테스트 6 〉	통과 (41.40ms, 37.2MB)
테스트 7 〉	통과 (2.99ms, 35.9MB)
테스트 8 〉	통과 (2.26ms, 35.4MB)
테스트 9 〉	통과 (24.03ms, 37.4MB)
테스트 10 〉	통과 (0.93ms, 33.7MB)
테스트 11 〉	통과 (2.58ms, 35.5MB)
*/

function solution(n, control) {
   let arr = [...control]
    for(let i = 0 ; i < arr.length; i ++){
    if(arr[i] === "w"){ n += 1 }
    if(arr[i] === "s"){ n -= 1}
    if(arr[i] === "d"){ n += 10}
    if(arr[i] === "a"){ n -= 10}
}
return n

/*
테스트 1 〉	통과 (3.33ms, 36.6MB)
테스트 2 〉	통과 (6.36ms, 37.9MB)
테스트 3 〉	통과 (3.07ms, 36.6MB)
테스트 4 〉	통과 (7.01ms, 37.3MB)
테스트 5 〉	통과 (6.67ms, 37.8MB)
테스트 6 〉	통과 (6.53ms, 37.5MB)
테스트 7 〉	통과 (4.09ms, 37.1MB)
테스트 8 〉	통과 (2.87ms, 36.8MB)
테스트 9 〉	통과 (5.46ms, 37.5MB)
테스트 10 〉	통과 (3.00ms, 36.7MB)
테스트 11 〉	통과 (3.06ms, 36.9MB)
*/

/*
if문을쓴 코드가 가독성측면에서 더 좋다고 생각했지만 reduce를 사용하는것이 처리하는 속도가 조금 더 빠르지 않을까 했다.
하지만 특정케이스에서 속도가 굉장히 느려지는것을 확인하였다.
if문을 사용한 코드는 객체 내에서 키를 찾아서 값을 가져오는 방식으로 동작한다.
각각의 if 문을 거쳐 각 문자열 비교와 분기가 일어나기 때문에 기본적으로 reduce를 사용한것보다 더 많은 연산이 일어난다.
반면에 reduce를 사용한 코드는 문자열의 길이만큼 각각의 조건문을 통해 분기되어 처리되는데, 
특별히 더 긴 문자열에서는 분기처리에 따른 추가 연산이 발생하여 속도가 더 느린것같다.

개인적으로는 가끔 오래걸리는것보다 일관성있는 if문을 쓰는게 더 좋은거같다.
*/
