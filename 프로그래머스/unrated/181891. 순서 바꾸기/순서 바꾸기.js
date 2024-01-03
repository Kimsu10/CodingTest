function solution(num_list, n) {
   const slicedArr = num_list.slice(n);
    const newArr = num_list.slice(0, n);
    return slicedArr.concat(newArr);
    // return [...slicedArr, ...newArr];
}