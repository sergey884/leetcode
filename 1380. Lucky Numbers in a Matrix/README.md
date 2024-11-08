# [1380. Lucky Numbers in a Matrix](https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/)

Given an `m x n` matrix of **distinct** numbers, return all **lucky numbers** in the matrix in **any** order.

A **lucky number** is an element of the matrix such that it is the minimum element in its row and maximum in its column.

### Example 1:

> Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
>
> Output: [15]
>
> Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

### Example 2:

> Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
>
> Output: [12]
>
> Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

### Example 3:

> Input: matrix = [[7,8],[1,2]]
>
> Output: [7]
>
> Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

### Constraints:

- `m == mat.length`
- `n == mat[i].length`
- `1 <= n, m <= 50`
- $1 <= matrix[i][j] <= 10^{5}$.
- All elements in the matrix are distinct.

## Solutions

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(n + m)`

### Javascript

```javascript
const luckyNumbers = (matrix) => {
  if (!matrix.length) {
    return null;
  }

  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  const res = [];
  const maxInRows = new Set();
  for (let r = 0; r < ROWS; r++) {
    maxInRows.add(Math.min(...matrix[r]));
  }

  const minInCols = new Set();
  for (let c = 0; c < COLS; c++) {
    let currMax = matrix[0][c];
    for (let r = 0; r < ROWS; r++) {
      currMax = Math.max(currMax, matrix[r][c]);
    }
    minInCols.add(currMax);
  }

  for (let n of maxInRows) {
    if (minInCols.has(n)) {
      res.push(n);
    }
  }

  return res;
};
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const luckyNumbers = (matrix) => {
  if (!matrix.length) {
    return null;
  }

  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  let maxOfRowMins = -Infinity;

  for (let r = 0; r < ROWS; r++) {
    const minInRow = Math.min(...matrix[r]);
    maxOfRowMins = Math.max(maxOfRowMins, minInRow);
  }

  for (let c = 0; c < COLS; c++) {
    let currMin = matrix[0][c];
    for (let r = 0; r < ROWS; r++) {
      currMin = Math.max(currMin, matrix[r][c]);
    }
    if (maxOfRowMins === currMin) {
      return [maxOfRowMins];
    }
  }

  return [];
};
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(n + m)`

### Python

```python
class Solution:
  def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
    if not matrix:
      return None

    ROWS = len(matrix)
    COLS = len(matrix[0])
    res = []
    minInRow = set()

    for r in range(ROWS):
      minInRow.add(min(matrix[r]))

    maxInCol = set()
    for c in range(COLS):
      currMax = matrix[0][c]
      for r in range(ROWS):
        currMax = max(currMax, matrix[r][c])
      maxInCol.add(currMax)

    for n in minInRow:
      if n in maxInCol:
        res.append(n)

    return res
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
    if not matrix:
      return None

    ROWS, COLS = len(matrix), len(matrix[0])
    maxOfRowMins = float('-inf')

    for r in range(ROWS):
      minInRow = min(matrix[r])
      maxOfRowMins = max(maxOfRowMins, minInRow)

    for c in range(COLS):
      currMax = matrix[0][c]
      for r in range(ROWS):
        currMax = max(currMax, matrix[r][c])
      if currMax == maxOfRowMins:
        return [maxOfRowMins]

    return []
```
