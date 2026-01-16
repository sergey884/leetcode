/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const n = temperatures.length;
  const stack = [];
  const res = new Array(n).fill(0);

  for (let currDay = 0; currDay < n; currDay++) {
    const currTemp = temperatures[currDay];
    while (stack.length && currTemp > temperatures[stack[stack.length - 1]]) {
      const prevDay = stack.pop();
      res[prevDay] = currDay - prevDay;
    }

    stack.push(currDay);
  }

  return res;
};


const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log('dailyTemperatures: ', dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]
