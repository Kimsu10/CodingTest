function solution(num_list) {
 const arr = num_list.map((el, i) => (el < 0 ? i : -1));
    const findIndex = arr.find(el => el !== -1);
    return findIndex !== undefined ? findIndex : -1;
}