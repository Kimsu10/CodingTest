function solution(s) {
    const cnt = {};
    
    for(let v of s){
        cnt[v] = (cnt[v] || 0) + 1;
    }
    
    const result = Object.keys(cnt).filter(el => cnt[el] === 1)
    
    return result.sort().join('')
}