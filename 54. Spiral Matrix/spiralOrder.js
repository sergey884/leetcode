/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  const res = [];

  while (left < right && top < bottom) {
    // left -> right
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // top -> bottom
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    // right -> left
    for (let i = right - 1; i > left - 1; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;
    
    // bottom -> top
    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
};

const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];
console.log('spiralOrder: ', spiralOrder(matrix));
