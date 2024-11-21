function solution(q, r, code) {
    const arr =[];
    for(let i = 0; i < code.length; i++){
        if(i % q === r){
            arr.push(code[i])
        }
    }
    return arr.join("");
}