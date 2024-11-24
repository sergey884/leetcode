/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  const binaryExponent = (x, n) => {
    let res = 1;
    let absExponent = Math.abs(n);
    while (absExponent !== 0) {
      console.log('absExponent: ', absExponent);
      if (absExponent % 2 === 1) {
        res *= x;
        absExponent--;
      }
      x *= x
      absExponent = Math.floor(absExponent / 2);
    }

    return res;
  };

  const ans = binaryExponent(x, n);
  return n < 0 ? 1 / ans : ans;
};

const x = 2.00000;
const n = 3;
// Output: 1024.00000
console.log('myPow: ', myPow(x, n));
