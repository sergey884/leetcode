/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  const calculateDistance = (point1, point2 = [0, 0]) => (
    Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)
  );

  points.sort((a, b) => (calculateDistance(a) - calculateDistance(b)));

  return points.slice(0, k);
};

const points = [[1, 3], [-2, 2]];
const k = 1;
console.log('kClosest: ', kClosest(points, k));
