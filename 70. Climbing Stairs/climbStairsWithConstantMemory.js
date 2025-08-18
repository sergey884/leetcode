/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let prevValue1 = 1;
  let prevValue2 = 1;

  for (let i = 2; i <= n; i++) {
    const dp = prevValue1 + prevValue2;
    prevValue2 = prevValue1;
    prevValue1 = dp;
  }

  return prevValue1;
};

const n = 3;
console.log("climbStairs: ", climbStairs(n));
