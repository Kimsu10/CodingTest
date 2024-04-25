function solution(my_string, m, c) {
    
    const chunks = my_string.match(new RegExp(`.{1,${m}}`, 'g'));
    const result = chunks.map(chunk => chunk[c - 1]).join('');
    
    return result;
}