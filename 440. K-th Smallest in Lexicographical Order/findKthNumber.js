/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = (n, k) => {
  let current = 1;
  k--;

  const calculateSteps = (n, current, next) => {
    let steps = 0;
    while (current <= n) {
      steps += Math.min(n + 1, next) - current;
      current *= 10;
      next *= 10;
    }

    return steps;
  }

  while (k > 0) {
    let steps = calculateSteps(n, current, current + 1);
    if (steps <= k) {
      current++;
      k -= steps;
    } else {
      current *= 10;
      k--;
    }
  }

  return current;
};


const n = 13;
const k = 2;
console.log('findKthNumber: ', findKthNumber(n, k)); // 10
