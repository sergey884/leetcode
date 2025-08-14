/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  let hottest = temperatures[n - 1];

  for (let currDay = n - 2; currDay >= 0; currDay--) {
    const currentTemp = temperatures[currDay];
    if (currentTemp >= hottest) {
      hottest = currentTemp;
      continue;
    }

    let days = 1;
    while (temperatures[currDay + days] <= currentTemp) {
      days += res[currDay + days];
    }

    res[currDay] = days;
  }

  return res;
};


const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log('dailyTemperatures: ', dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]