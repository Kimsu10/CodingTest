function solution(myString){
    return myString.split('x').map(el  => el.length);
}


// function solution(myString) {
//     const result =[];
//     let index = 0;
//     const myArr = [...myString];
    
//     myArr.forEach((el) => {
//        if(el === "x"){
//            result.push(index);
//            index = 0;
//        } else {
//            index++;
//        }
//    });
//     result.push(index);
//     return result;
// }