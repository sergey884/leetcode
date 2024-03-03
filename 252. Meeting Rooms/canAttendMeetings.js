const canAttendMeetings = (intervals) => {
  if (!intervals || !intervals.length) {
    return true;
  }

  intervals.sort((aInterval, bInterval) => aInterval[0] - bInterval[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};

const intervals = [[7, 10], [2, 4]];
console.log('canAttendMeetings: ', canAttendMeetings(intervals));
