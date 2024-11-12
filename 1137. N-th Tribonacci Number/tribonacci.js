/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const res = Array(n + 4).fill(0);
  res[1] = 1;
  res[2] = 1;

  for (let i = 0; i < n - 2; i++) {
    res[i + 3] = res[i] + res[i + 1] + res[i + 2];
  }

  return res[n];
};


console.log('tribonacci: ', tribonacci(25));
