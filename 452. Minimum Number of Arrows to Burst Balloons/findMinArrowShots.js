/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  points.sort((a, b) => a[1] - b[1]);
  let amountOfArrows = 0;
  let arrowX = -Infinity;

  for (let i = 0; i < points.length; i++) {
    const [start, end] = points[i];
    if (start > arrowX) {
      amountOfArrows++;
      arrowX = end;
    }
  }

  return amountOfArrows;
};

const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log('findMinArrowShots: ', findMinArrowShots(points));
