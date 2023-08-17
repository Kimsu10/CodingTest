function solution(n, control) {
  let arr = [...control]
  const move = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10
};
return arr.reduce((acc, word) => acc + (move[word] || 0), n);
}
    
