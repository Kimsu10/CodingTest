function solution(i, j, k) {
    
    let count = 0;
    let target = k.toString();
    
    for(let num = i; num <= j; num++ ){
        const str = num.toString();
        
        for(let s of str){
        if(s.includes(target)) count++;
        }
    }
  return count;
}