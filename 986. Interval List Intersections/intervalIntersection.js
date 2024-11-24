/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = (firstList, secondList) => {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < firstList.length && j < secondList.length) {
    const [firstStart, firstEnd] = firstList[i];
    const [secondStart, secondEnd] = secondList[j];

    const low = Math.max(firstStart, secondStart);
    const high =  Math.min(firstEnd, secondEnd);
    if (low <= high) {
      res.push([low, high]);
    }

    if (firstEnd < secondEnd) {
      i++;
    } else {
      j++;
    }
  }

  return res;
};


const firstList = [[0,2], [5,10], [13,23], [24,25]];
const secondList = [[1,5], [8,12], [15,24], [25,26]];
// [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log('intervalIntersection: ', intervalIntersection(firstList, secondList));
