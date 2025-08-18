/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      res = [...res, ...intervals.slice(i)];
      return res
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
    }
  }

  res.push(newInterval);

  return res;
};


const intervals = [[1, 3],[6, 9]];
const newInterval = [2, 5];
console.log('insert: ', insert(intervals, newInterval));
