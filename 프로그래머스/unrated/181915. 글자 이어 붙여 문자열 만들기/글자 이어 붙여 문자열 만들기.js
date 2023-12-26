function solution(my_string, index_list) {
    let result ='';
    const strArr = [...my_string];
    
    for(let i = 0 ; i < index_list.length; i++){
       const index = index_list[i];
        result += my_string[index];
    }
    return result;
}


// find 사용 
// function solution(my_string, index_list) {
//     let result ='';
    
//     for(let i = 0 ; i < index_list.length; i++){
//        const index = index_list[i];
//         const found = [...my_string].find((_, i) => i === index)
//         result += found;
//     }
//     return result;
// }