function solution(number) {
    
    let result = 0;
    
    for(let i of number){
        result += parseInt(i);
    }
    
    return result % 9;
}