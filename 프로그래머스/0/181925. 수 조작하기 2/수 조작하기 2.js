function solution(numLog) {
    const command = {'1': 'w', '-1': 's', '10': 'd', '-10': 'a',};

    return numLog.slice(1).reduce((acc, cur, i) => {
        const result = cur - numLog[i];
        return acc + (command[result] || '');
    }, '');
}