function solution(str_list, ex) {
    const newArr = str_list.filter((str) => !str.includes(ex));
    const result = newArr.join("")

    return result;
}