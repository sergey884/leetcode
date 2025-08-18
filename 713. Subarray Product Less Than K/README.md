# [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/description/)

Given an array of integers `nums` and an integer `k`, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than `k`.

 
### Example 1:
> Input: nums = [10,5,2,6], k = 100
>
> Output: 8
>
> Explanation: The 8 subarrays that have product less than 100 are:

> [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.


### Example 2:
> Input: nums = [1,2,3], k = 0
>
> Output: 0
 

### Constraints:
- `1 <= nums.length <=` 3 * $10^4$
- `1 <= nums[i] <= 1000`
- `0 <= k <=` $10^6$


## Solutions

### Javascript
```javascript
const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) {
    return 0;
  }

  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    count += right - left + 1;
  }
  
  return count;
};
```

### Python
```python
class Solution:
  def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
    if k <= 1:
      return 0
    
    count = 0
    product = 1
    left = 0
    
    for right in range(len(nums)):
      product *= nums[right]
      while product >= k:
        product /= nums[left]
        left += 1
      count += right - left + 1
      
    return count
```