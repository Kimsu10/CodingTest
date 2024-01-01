function solution(num_list) {
    let result = num_list;

    const lastId = num_list.length - 1;
    if(num_list[lastId] > num_list[lastId - 1]){
         result.push(num_list[lastId] - num_list[lastId - 1]);
    } else if(num_list[lastId] <= num_list[lastId - 1]){
        result.push (num_list[lastId] * 2);
    }
    return result;
}