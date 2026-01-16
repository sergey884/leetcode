/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  const sortedheights = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedheights[i]) {
      count++;
    }
  }

  return count;
};


const heights = [1,1,4,2,1,3];
console.log('heightChecker: ', heightChecker(heights));
