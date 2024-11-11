# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

Given an integer array `nums`, find the subarray (A **subarray** is a contiguous non-empty sequence of elements within an array) with the largest sum, and return its sum.

 
### Example 1:
> Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
> Output: 6
> Explanation: The subarray [4,-1,2,1] has the largest sum 6.


Example 2:
> Input: nums = [1]
> Output: 1
> Explanation: The subarray [1] has the largest sum 1.


### Example 3:
> Input: nums = [5,4,-1,7,8]
> Output: 23
> Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

### Constraints:
- $1 <= nums.length <= 10^{5}$
- $-10^{4} <= nums[i] <= 10^{4}$
 

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the divide and conquer approach, which is more subtle.


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript (Swaping algorithm)
```javascript
const maxSubArray = (nums) => {
  let maxSubArraySum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSubArraySum = Math.max(maxSubArraySum, currentSum);
  }

  return maxSubArraySum;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python
```python
class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    maxSubArraySum = nums[0]
    currentSum = 0

    for n in nums:
      currentSum = max(n, currentSum + n)
      maxSubArraySum = max(maxSubArraySum, currentSum)

    return maxSubArraySum
```