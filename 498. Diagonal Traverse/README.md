# [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/description)

Given an `m x n` matrix `mat`, return an array of all the elements of the array in a diagonal order.

 
### Example 1:
![](./images/diag1-grid.jpg)
> Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
>
> Output: [1,2,4,7,5,3,6,8,9]


### Example 2:
> Input: mat = [[1,2],[3,4]]
>
> Output: [1,2,3,4]
 

### Constraints:
- `m == mat.length`
- `n == mat[i].length`
- $1 <= m, n <= 10^{4}$
- $1 <= m * n <= 10^{4}$
- $-10^{5} <= mat[i][j] <= 10^{5}$


## Solutions

### Performance

- **Time Complexity**: $O(N * M)$
- **Space Complexity**: $O(N * M)$

### Javascript
```javascript
const findDiagonalOrder = (mat) => {
  let direction = 1;
  const res = [];
  const N = mat.length;
  const M = mat[0].length;

  let row = 0;
  let col = 0;

  while (row < N && col < M) {
    res.push(mat[row][col]);

    let newRow = row + (direction ? -1 : 1);
    let newCol = col + (direction ? 1 : -1);

    if (newRow < 0 || newRow === N || newCol < 0 || newCol === M) {
      if (direction) {
        if (col === M - 1) {
          row++;
        } else {
          col++;
        }
      } else {
        if (row === N - 1) {
          col++;
        } else {
          row++;
        }
      }
      direction = 1 - direction;
    } else {
      row = newRow;
      col = newCol
    }
  }

  return res;
};
```

### Performance

- **Time Complexity**: $O(N * M)$
- **Space Complexity**: $O(N * M)$

### Python
```python

```