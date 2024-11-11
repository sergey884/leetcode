/**
 * @param {number} n
 * @return {boolean}
 */
const sumOfSquare = (n) => {
  let res = 0;

  while (n) {
    const digit = n % 10;
    res += digit ** 2;
    n = Math.floor(n / 10);
  }

  return res;
}

const isHappy = (n) => {
  const seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);
    n = sumOfSquare(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
};


const n = 19;
console.log("isHappy: ", isHappy(n));
