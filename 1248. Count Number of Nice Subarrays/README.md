# [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/description/)

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 
### Example 1:
> Input: nums = [1,1,2,1,1], k = 3
>
> Output: 2
>
> Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].


### Example 2:
> Input: nums = [2,4,6], k = 1
>
> Output: 0
>
> Explanation: There are no odd numbers in the array.


### Example 3:
> Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
>
> Output: 16
 

### Constraints:
- `1 <= nums.length <= 50000`
- $1 <= nums[i] <= 10^{5}$
- `1 <= k <= nums.length`


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript
```javascript
const numberOfSubarrays = (nums, k) => {
  let left = 0;
  let middle = 0;
  let oddCnt = 0;
  let res = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] % 2) {
      oddCnt++;
    }

    while (oddCnt > k) {
      if (nums[left] % 2) {
        oddCnt--;
      }
      left++;
      middle = left;
    }

    if (oddCnt === k) {
      while (nums[middle] % 2 === 0) {
        middle++;
      }
      res += (middle - left) + 1;
    }
  }

  return res;
};
```

### Python
```python
class Solution:
  def numberOfSubarrays(self, nums: List[int], k: int) -> int:
    left = 0
    middle = 0
    odd_cnt = 0
    res = 0
  
    for right in range(len(nums)):
      if nums[right] % 2:
        odd_cnt += 1
      
      while odd_cnt > k:
        if nums[left] % 2:
          odd_cnt -= 1
        left += 1
        middle = left
        
      if odd_cnt == k:
        while not nums[middle] % 2:
          middle += 1
        res += (middle - left) + 1
      
    return res
```