/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = (n) => {
  if (n <= 0) {
    return false;
  }

  primeNumbers = [2, 3, 5];
  for (let i = 0; i < primeNumbers.length; i++) {
    while (n % primeNumbers[i] === 0) {
      n = n / primeNumbers[i];
    }
  }

  return n === 1
};

console.log('isUgly: ', isUgly(6));