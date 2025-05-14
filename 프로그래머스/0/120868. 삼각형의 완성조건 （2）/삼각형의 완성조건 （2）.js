function solution(sides) {
  const [a, b] = sides;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // x > max - min, x < max + min => max - min < x < max
  const case1 = min;
    
  // x > max, x < max + min => max < x < max + min
  const case2 = (a + b - 1) - max;

  return case1 + case2;
}
