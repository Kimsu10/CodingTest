function solution(my_string, s, e) {
    const arr = [...my_string];
    let str = my_string.substring(s, e+1);
    let reverseStr= str.split('').reverse().join('');
    let result = my_string.replace(str, reverseStr);
    
    return result
}