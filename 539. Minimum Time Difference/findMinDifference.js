/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
  const minutes = timePoints.map(item => {
    const [hours, minutes] = item.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
  });

  minutes.sort((a, b) => a - b);
  let minDiff = 24 * 60;

  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }

  const firstLastDiff = minutes[0] + 24 * 60 - minutes[minutes.length - 1];
  minDiff = Math.min(minDiff, firstLastDiff);

  return minDiff;
};


const timePoints = ["23:59", "00:00"];
console.log("findMinDifference: ", findMinDifference(timePoints)); // 1
