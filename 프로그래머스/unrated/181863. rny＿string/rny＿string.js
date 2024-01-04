function solution(rny_string) {
    return rny_string.replace(/m/g, 'rn')
}

//return rny_string.replace('m', 'rn');
// 위처럼쓰면 replace()는 첫번째로 만난 문자만 변경되서 뒤에가 같은 글자가 나와도 변경되지않는다.