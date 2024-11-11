# [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous non-empty sequence of elements within an array.

 
### Example 1:
> Input: nums = [1,1,1], k = 2
>
> Output: 2


### Example 2:
> Input: nums = [1,2,3], k = 3
>
> Output: 2
 

### Constraints:
- $1 <= nums.length <= 2 * 10^{4}$
- `-1000 <= nums[i] <= 1000`
- $-10^{7} <= k <= 10^{7}$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript

```javascript
const subarraySum = (nums, k) => {
  let count = 0;
  let currSum = 0;
  const prefixSum = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const diff = currSum - k;
    if (prefixSum[diff]) {
      count += prefixSum[diff];
    }
    prefixSum[currSum] = (prefixSum[currSum] || 0) + 1;
  }

  return count;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python

```python
class Solution:
  def subarraySum(self, nums: List[int], k: int) -> int:
    count = 0
    currSum = 0
    prefixSum = { 0: 1 }

    for n in nums:
      currSum += n
      diff = currSum - k
      if diff in prefixSum:
        count += prefixSum[diff]
      prefixSum[currSum] = prefixSum.get(currSum, 0) + 1
    
    return count
```
