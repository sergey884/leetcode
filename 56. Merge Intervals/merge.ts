function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastInterval = res[res.length - 1];
    if (start <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], end)
    } else {
      res.push(intervals[i])
    }
  }

  return res;
};