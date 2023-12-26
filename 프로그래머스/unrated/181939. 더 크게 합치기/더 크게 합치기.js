function solution(a, b) {
    const ab = parseInt(`${a}${b}`);
    const ba = parseInt(`${b}${a}`);

    return ab > ba ? ab : ba;
}

