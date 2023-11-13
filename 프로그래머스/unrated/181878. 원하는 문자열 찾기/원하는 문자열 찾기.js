function solution(myString, pat) {
    const newString = new RegExp(pat, 'i');
    return newString.test(myString) ? 1: 0 ;
}