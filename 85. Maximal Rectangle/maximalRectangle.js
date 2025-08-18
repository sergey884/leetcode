/**
 * @param {character[][]} matrix
 * @return {number}
 */
const largestRectangleArea = (hights) => {
  const stack = [];
  let maxArea = 0;
  let index = 0;

  while (index < hights.length) {
    if (!stack.length || hights[index] >= hights[stack[stack.length - 1]]) {
      stack.push(index);
      index++;
    } else {
      const top = stack.pop();
      const area = hights[top] * (stack.length ? index - stack[stack.length - 1] - 1 : index);
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length) {
    const top = stack.pop();
    const area = hights[top] * (stack.length ? index - stack[stack.length - 1] - 1 : index);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

const maximalRectangle = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  const hights = Array(COLS).fill(0);
  let maxArea = 0;

  for (let i = 0; i < ROWS; i++) {
    let row = matrix[i];
    for (let j = 0; j < COLS; j++) {
      hights[j] = row[j] === "1" ? hights[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(hights));
  }

  return maxArea;
};


const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
];
console.log('maximalRectangle: ', maximalRectangle(matrix))
