# [1605. Find Valid Matrix Given Row and Column Sums](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/)

You are given two arrays `rowSum` and `colSum` of non-negative integers where `rowSum[i]` is the sum of the elements in the $i^{th}$ row and `colSum[j]` is the sum of the elements of the $j^{th}$ column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

Find any matrix of non-negative integers of size `rowSum.length x colSum.length` that satisfies the `rowSum` and `colSum` requirements.

Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that **at least one** matrix that fulfills the requirements exists.

 
### Example 1:
> Input: rowSum = [3,8], colSum = [4,7]
>
> Output: [[3,0],
>
>          [1,7]]
>
> Explanation: 
>
> 0th row: 3 + 0 = 3 == rowSum[0]
>
> 1st row: 1 + 7 = 8 == rowSum[1]
>
> 0th column: 3 + 1 = 4 == colSum[0]
>
> 1st column: 0 + 7 = 7 == colSum[1]
>
> The row and column sums match, and all matrix elements are non-negative.
>
> Another possible matrix is: [[1,2],
>
>                              [3,5]]


### Example 2:
> Input: rowSum = [5,7,10], colSum = [8,6,8]
> Output: [[0,5,0],
>          [6,1,0],
>          [2,0,8]]
 

### Constraints:
- `1 <= rowSum.length, colSum.length <= 500`
- $0 <= rowSum[i], colSum[i] <= 10^{8}$
- `sum(rowSum) == sum(colSum)`


## Solutions

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(n * m)`

### Javascript

```javascript
const restoreMatrix = (rowSum, colSum) => {
  const ROWS = rowSum.length;
  const COLS = colSum.length;

  let r = 0;
  let c = 0;

  const originalMatrix = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  while (r < ROWS && c < COLS) {
    const minVal = Math.min(rowSum[r], colSum[c]);

    originalMatrix[r][c] = minVal;

    rowSum[r] -= minVal;
    colSum[c] -= minVal;

    if (colSum[c] === 0) {
      c++;
    } else {
      r++;
    }
  }

  return originalMatrix;
};
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(n * m)`

### Python

```python
class Solution:
  def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
    ROWS, COLS = len(rowSum), len(colSum)

    res = [[0] * COLS for _ in range(ROWS)]

    for r in range(ROWS):
      res[r][0] = rowSum[r]

    for c in range(COLS):
      currColSum = 0
      for r in range(ROWS):
        currColSum += res[r][c]

      r = 0
      while currColSum > colSum[c]:
        diff = currColSum - colSum[c]
        maxShift = min(res[r][c], diff)

        res[r][c] -= maxShift
        res[r][c + 1] += maxShift
        currColSum -= maxShift
        r += 1

    return res
```
