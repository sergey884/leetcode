# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

Given an integer array `nums`, move all `0's to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.


#### Example 1:

> Input: nums = `[0,1,0,3,12]`
>
> Output: `[1,3,12,0,0]`


#### Example 2:

> Input: `nums = [0]`
>
> Output: `[0]`


### Constraints:

- `1 <= nums.length <= 104`
- `-2^31 <= nums[i] <= 2^31 - 1`
 

**Follow up**: Could you minimize the total number of operations done?


## Solutions

### Javascript
```javascript
const moveZeroes = (nums) => {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let j = nonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
}
```

### Python
```python
class Solution:
  def moveZeroes(self, nums: list[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    nonZeroIndex = 0

    for i in range(len(nums)):
      if nums[i] != 0:
        nums[nonZeroIndex] = nums[i]
        nonZeroIndex += 1

    for i in range(nonZeroIndex, len(nums)):
      nums[i] = 0
```