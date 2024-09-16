/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = (n) => {
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  let res = 1;
  while (n > 4) {
    n -= 3;
    res *= 3;
  }

  res *= n

  return res;
};

const n = 58;
console.log('integerBreak: ', integerBreak(n));
