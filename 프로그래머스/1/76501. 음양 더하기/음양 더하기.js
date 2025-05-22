function solution(absolutes, signs) {
    
    let result = []
    
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] == true) result.push(absolutes[i])
        if(signs[i] === false) result.push(-absolutes[i])
    }
    
    return result.reduce((acc, cur) => {
        return acc += cur;
    }, 0)
}