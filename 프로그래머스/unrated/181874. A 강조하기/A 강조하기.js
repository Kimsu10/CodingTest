function solution(myString) {   
    let arr = [...myString.toLowerCase()];
    return arr.reduce((acc, cur) => {
        if(cur === "a"){
            acc += cur.toUpperCase();
        }else{
            acc += cur
        }
        return acc;
    }, "")
}