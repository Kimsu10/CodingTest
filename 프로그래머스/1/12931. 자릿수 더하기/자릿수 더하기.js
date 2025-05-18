function solution(n){
    let answer = 0;
    let arr = n.toString().split("");
    
    for(i of arr){
        answer += Number(i)
    }

    return answer;
}