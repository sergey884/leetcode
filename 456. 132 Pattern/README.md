# [456. 132 Pattern](https://leetcode.com/problems/132-pattern/description/)

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` if there is a **132 pattern** in `nums`, otherwise, return `false`.


### Example 1:
> Input: `nums = [1,2,3,4]`
>
> Output: `false`
>
> Explanation: `There is no 132 pattern in the sequence.`


### Example 2:
> Input: `nums = [3,1,4,2]`
>
> Output: `true`
>
> Explanation: `There is a 132 pattern in the sequence: [1, 4, 2].`


### Example 3:
> Input: `nums = [-1,3,2,0]`
>
> Output: `true`
>
> Explanation: `There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].`


### Constraints:
- `n == nums.length`
- `1 <= n <= 2 * 10^5`
- `-10^9 <= nums[i] <= 10^9`



## Solutions

### Javascript
```javascript
const find132pattern = (nums) => {
  const stack = [];
  let value3InPattern = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < value3InPattern) {
      return true;
    } else {
      while (stack.length && stack[stack.length - 1] < nums[i]) {
        value3InPattern = stack.pop()
      }
    }

    stack.push(nums[i])
  }

  return false;
};
```

### Python
```python
class Solution:
  def find132pattern(self, nums: List[int]) -> bool:
    stack = []
    minSoFar = nums[0]

    for n in nums[1:]:
      while stack and n >= stack[-1][0]:
        stack.pop()

      if stack and n > stack[-1][1]:
        return True
      
      stack.append([n, minSoFar])
      minSoFar = min(minSoFar, n)
    
    return False
```