/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = (n) => {
  const lecsicographicalOrder = [];
  let current = 1;

  for (let i = 1; i <= n; i++) {
    lecsicographicalOrder.push(current);
    if (current * 10 <= n) {
      current *= 10;
    } else {
      if (current >= n) {
        current = Math.floor(current / 10);
      }
      current++;
      while (current % 10 === 0) {
        current = Math.floor(current / 10);
      }
    }
  }

  return lecsicographicalOrder;
};


const n = 13;
console.log('lexicalOrder: ', lexicalOrder(n)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
