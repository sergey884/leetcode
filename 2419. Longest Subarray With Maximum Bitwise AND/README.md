# [2419. Longest Subarray With Maximum Bitwise AND](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/description/)

You are given an integer array `nums` of size `n`.

Consider a **non-empty** subarray from `nums` that has the **maximum** possible **bitwise AND**.

- In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.

Return the length of the **longest** such subarray.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A **subarray** is a contiguous sequence of elements within an array.

 
### Example 1:
> Input: nums = [1,2,3,3,2,2]
>
> Output: 2
>
> Explanation:
>
> The maximum possible bitwise AND of a subarray is 3.
>
> The longest subarray with that value is [3,3], so we return 2.


### Example 2:
> Input: nums = [1,2,3,4]
>
> Output: 1
>
> Explanation:
>
> The maximum possible bitwise AND of a subarray is 4.
>
> The longest subarray with that value is [4], so we return 1.
 

### Constraints:
- $1 <= nums.length <= 10^{5}$
- $1 <= nums[i] <= 10^{6}$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const longestSubarray = (nums) => {
  let maxSubArray = 0;
  let currentSubArray = 0;
  let maxElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxElement) {
      maxElement = nums[i];
      currentSubArray = 0;
      maxSubArray = 0;
    }

    if (maxElement === nums[i]) {
      currentSubArray++;
    } else {
      currentSubArray = 0;
    }

    maxSubArray = Math.max(maxSubArray, currentSubArray);
  }

  return maxSubArray;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    maxSubArray = 0
    currentSubArray = 0
    maxElement = nums[0]

    for i in range(len(nums)):
      if nums[i] > maxElement:
        maxElement = nums[i]
        currentSubArray = 0
        maxSubArray = 0

      if maxElement == nums[i]:
        currentSubArray += 1
      else:
        currentSubArray = 0

      maxSubArray = max(maxSubArray, currentSubArray)
    
    return maxSubArray
```