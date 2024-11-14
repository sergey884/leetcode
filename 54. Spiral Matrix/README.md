# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)

Given an `m x n` matrix, return all elements of the matrix in spiral order.


### Example 1:
![](./images/spiral1.jpg)
> Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
>
> Output: [1,2,3,6,9,8,7,4,5]


### Example 2:
![](./images/spiral.jpg)
> Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
>
> Output: [1,2,3,4,8,12,11,10,9,5,6,7]


### Constraints:
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`


## Solutions

### Performance

- **Time Complexity**: `O(N * M)`
- **Space Complexity**: `O(N * M)`

### Javascript
```javascript
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
```

### Performance

- **Time Complexity**: `O(N * M)`
- **Space Complexity**: `O(N * M)`

### Python
```python
class Solution:
  def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
    left = 0
    right = len(matrix[0])
    top = 0
    bottom = len(matrix)
    res = []
    
    while left < right and top < bottom:
      for i in range(left, right):
        res.append(matrix[top][i])
      top += 1
      
      for i in range(top, bottom):
        res.append(matrix[i][right - 1])
      right -= 1
      
      if not (left < right and top < bottom):
        break
      
      for i in range(right - 1, left - 1, -1):
        res.append(matrix[bottom - 1][i])
      bottom -= 1
      
      for i in range(bottom - 1, top - 1, -1):
        res.append(matrix[i][left])
      left += 1
      
    return res
```