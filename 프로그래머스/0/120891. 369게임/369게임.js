function solution(order) {
    let str = order.toString().split("");
    let result = 0;
    str.map(el =>{
        if(el === '3' || el === '6' || el === '9'){
            result++;
        }
    })
    return result
}