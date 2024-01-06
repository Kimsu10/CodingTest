function solution(strArr) {
    for(let i = 0; i < strArr.length; i++ ){
        if(i % 2 !== 0){
          strArr[i] = strArr[i].toUpperCase(strArr[i])
        } else {
           strArr[i] = strArr[i].toLowerCase(strArr[i])
        }
    }
    return strArr;
}