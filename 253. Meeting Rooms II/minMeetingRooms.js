/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = (intervals) => {
  if (!intervals.length) {
    return 0;
  }

  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    starts.push(intervals[i][0]);
    ends.push(intervals[i][1]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let res = 0;
  let count = 0;
  let start = 0;
  let end = 0;

  while (start < intervals.length) {
    if (starts[start] < ends[end]) {
      count++;
      start++;
    } else {
      count--;
      end++;
    }
    res = Math.max(res, count);
  }

  return res;
};


const intervals = [[0, 30], [5, 10], [15, 20]];
console.log("minMeetingRooms: ", minMeetingRooms(intervals)); // 2
