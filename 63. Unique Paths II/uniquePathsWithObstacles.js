/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  obstacleGrid[0][0] = 1;

  for (let i = 1; i < M; i++) {
    obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 :  obstacleGrid[i - 1][0];
  }

  for (let j = 1; j < N; j++) {
    obstacleGrid[0][j] = obstacleGrid[0][j] === 1 ? 0 :  obstacleGrid[0][j - 1];
  }

  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  
  return obstacleGrid[M - 1][N - 1];
};

const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log("uniquePathsWithObstacles: ", uniquePathsWithObstacles(obstacleGrid)); // 2
