function solution(arr, queries) {
    for(let el of queries){
        for(let i = el[0]; i <= el[1]; i++){
            arr[i]++
        }
    }
    return arr;
}