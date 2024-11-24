/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = (heights) => {
  if (!heights) {
    return [];
  }
  const n = heights.length;
  let rightMaxBuilding = 0;
  const res = [];

  for (let i = n - 1; i >= 0; i--) {
    if (heights[i] > rightMaxBuilding) {
      res.push(i);
      rightMaxBuilding = heights[i];
    }
  }

  return res.reverse();
};

const heights = [4, 2, 3, 1];
// const heights = [1,3,2,4];
// const heights = [2,2,2,2];

console.log('findBuildings: ', findBuildings(heights));
