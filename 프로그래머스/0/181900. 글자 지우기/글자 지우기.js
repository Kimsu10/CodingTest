function solution(my_string, indices) {
    let arr = [...my_string];
    
    for(let i of indices){
        arr[i] = "";
    }
    
    return arr.join("");
}