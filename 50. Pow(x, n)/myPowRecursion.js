/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  const binaryExponent = (x, n) => {
    if (n === 0) {
      return 1;
    }

    if (n % 2 === 1) {
      return x * binaryExponent(x * x, Math.floor(n / 2));
    } else {
      return binaryExponent(x * x, Math.floor(n / 2))
    }
  };

  const absExponent = Math.abs(n);
  const res = binaryExponent(x, absExponent);

  return n < 0 ? 1 / res : res;
};

const x = 2.00000;
const n = 3;
// Output: 1024.00000
console.log('myPow: ', myPow(x, n));
