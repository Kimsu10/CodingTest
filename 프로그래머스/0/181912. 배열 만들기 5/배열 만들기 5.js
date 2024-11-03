function solution(intStrs, k, s, l) {
    let result = [];

    intStrs.map(el => {
        const num = parseInt(el.substring(s, s + l), 10);
        
        if(num > k) result.push(num);
    });

    return result;
}

