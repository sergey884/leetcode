/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = (n) => {
  /*
      1 + 2 + ... + x = x + ... + n
    ((1 + x) * x) / 2 = ((x + n) * (n - x + 1)) / 2
            x + x ^ 2 = x * n - x ^ 2 + x + n ^ 2 - n * x + n
            2 * x ^ 2 = n ^ 2 + n
            x = sqrt((n ^ 2 + n) / 2)
  */
  const x = Math.floor((n * n + n) / 2);
  const y = Math.floor(Math.sqrt(y));

  return y * y === x ? y : -1;
};

console.log('pivotInteger: ', pivotInteger(8))
