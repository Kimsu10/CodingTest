function solution(n) {
    const answer = Array.from({ length: n }, (el, i) => i + 1).filter(num => n % num === 0);
  return answer;
}