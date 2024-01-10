function solution(names){
    const result = [];
    
    for( let i = 0; i < names.length; i += 5 ){
        const group = names.slice(i, i + 5);
        result.push(group[0]);
    }
    return result;
}

// function solution(names) {
//     const result = [];
//    const group1 = names.slice(0,5);
//    const group2 = names.splice(5);
//     result.push(group1[0], group2[0]);
//    return result;
// }