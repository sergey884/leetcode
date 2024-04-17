# [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/description/)

Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return its area.

 
### Example 1:
![](./images/maximal.jpg)
> Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
>
> Output: 6
>
> Explanation: The maximal rectangle is shown in the above picture.


### Example 2:
> Input: matrix = [["0"]]
>
> Output: 0


### Example 3:
> Input: matrix = [["1"]]
>
> Output: 1
 

### Constraints:
- `rows == matrix.length`
- `cols == matrix[i].length`
- `1 <= row, cols <= 200`
- `matrix[i][j]` is `'0'` or `'1'`.


## Solutions

### Javascript
```javascript
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
```

### Python
```python
class Solution:
  def largestRectangleArea(self, heights):
    stack = []
    maxArea = 0
    index = 0
    
    while index < len(heights):
      if not stack or heights[index] >= heights[stack[-1]]:
        stack.append(index)
        index += 1
      else:
        top = stack.pop()
        area = heights[top] * ((index - stack[-1] - 1) if stack else index)
        maxArea = max(maxArea, area)
        
    while stack:
      top = stack.pop()
      area = heights[top] * ((index - stack[-1] - 1) if stack else index)
      maxArea = max(maxArea, area)
      
    return maxArea
    
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    ROWS, COLS = len(matrix), len(matrix[0])
    hights = [0] * COLS
    maxArea = 0
    
    for row in matrix:
      for col in range(COLS):
        hights[col] = hights[col] + 1 if row[col] == "1" else 0
      maxArea = max(maxArea, self.largestRectangleArea(hights))
      
    return maxArea
```