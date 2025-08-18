/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  const sum = (arr) => arr.reduce((acc, item) => {
    return acc + item;
  }, 0);

  if (sum(gas) < sum(cost)) {
    return -1;
  }

  let total = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }

  return start;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log('canCompleteCircuit: ', canCompleteCircuit(gas, cost));
