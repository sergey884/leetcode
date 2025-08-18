# [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/)

Given an unsorted integer array `nums`. Return the smallest positive integer that is not present in `nums`.

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.


### Example 1:
> Input: nums = [1,2,0]
>
> Output: 3
>
> Explanation: The numbers in the range [1,2] are all in the array.


### Example 2:
> Input: nums = [3,4,-1,1]
>
> Output: 2
>
> Explanation: 1 is in the array but 2 is missing.


### Example 3:
> Input: nums = [7,8,9,11,12]
>
> Output: 1
>
> Explanation: The smallest positive integer 1 is missing.
 

### Constraints:
- `1 <= nums.length <=` $10^5$
- -$2^{31}$ `<= nums[i] <=` $2^{31}$ - 1


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const firstMissingPositive = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    let val = Math.abs(nums[i]);
    if (val >= 1 && val <= n) {
      if (nums[val - 1] > 0) {
        nums[val - 1] *= -1;
      } else if(nums[val - 1] === 0) {
        nums[val - 1] = -1 * (n + 1)
      }
    }
  }


  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }

  return n + 1;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def firstMissingPositive(self, nums: List[int]) -> int:
    n = len(nums)
    
    for i in range(n):
      if nums[i] < 0:
        nums[i] = 0
        
    for i in range(n):
      val = abs(nums[i])
      if 1 <= val <= n:
        if nums[val - 1] > 0:
          nums[val - 1] *= -1
        elif nums[val - 1] == 0:
          nums[val - 1] = -1 * (n + 1)
          
    for i in range(1, n + 1):
      if nums[i - 1] >= 0:
        return i
      
    return n + 1
```