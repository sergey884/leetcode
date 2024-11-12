# [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/description/)

Given an integer array `nums`, return the length of the longest **strictly increasing** subsequence (A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.).


### Example 1:
> Input: nums = [10,9,2,5,3,7,101,18]
> Output: 4
> Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


### Example 2:
> Input: nums = [0,1,0,3,2,3]
> Output: 4


### Example 3:
> Input: nums = [7,7,7,7,7,7,7]
> Output: 1
 

### Constraints:
- `1 <= nums.length <= 2500`
- $-10^{4} <= nums[i] <= 10^{4}$
 

**Follow up:** Can you come up with an algorithm that runs in `O(n log(n))` time complexity?


## Solutions

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const lengthOfLIS = (nums) => {
  const dp = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
```

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def lengthOfLIS(self, nums: List[int]) -> int:
    dp = [1] * len(nums)

    for i in range(len(nums) - 1, -1, -1):
      for j in range(i + 1, len(nums)):
        if nums[i] < nums[j]:
          dp[i] = max(dp[i], 1 + dp[j])

    return max(dp)
```