/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
	const ROWS = grid.length;
	const COLS = grid[0].length;
	const dp = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));

	for (let r = ROWS - 1; r >= 0; r--) {
		for (let c = COLS - 1; c >= 0; c--) {
			if (r === ROWS - 1 && c !== COLS - 1) {
				dp[r][c] = grid[r][c] + dp[r][c + 1];
			} else if (r !== ROWS - 1 && c === COLS - 1) {
				dp[r][c] = grid[r][c] + dp[r + 1][c];
			} else if (r !== ROWS - 1 && c !== COLS - 1) {
				dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1]);
			} else {
				dp[r][c] = grid[r][c];
			}
		}
	}

	return dp[0][0];
};


const grid = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1]
];
console.log('minPathSum: ', minPathSum(grid)); // 7
