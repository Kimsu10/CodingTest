function solution(n) {
    const result = [n];
    
    while(n !== 1){
        if(n % 2 !== 0){
            n = 3 * n +1;
        }else{
            n /= 2;
        }        
        result.push(n)
    }
    return result;
}