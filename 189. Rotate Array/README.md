# [189. Rotate Array](https://leetcode.com/problems/rotate-array/description/)

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


### Example 1:
> Input: nums = [1,2,3,4,5,6,7], k = 3
>
> Output: [5,6,7,1,2,3,4]
>
> Explanation:
>
> rotate 1 steps to the right: [7,1,2,3,4,5,6]
>
> rotate 2 steps to the right: [6,7,1,2,3,4,5]
>
> rotate 3 steps to the right: [5,6,7,1,2,3,4]


### Example 2:
> Input: nums = [-1,-100,3,99], k = 2
>
> Output: [3,99,-1,-100]
>
> Explanation:
>
> rotate 1 steps to the right: [99,-1,-100,3]
>
> rotate 2 steps to the right: [3,99,-1,-100]
 

### Constraints:
- `1 <= nums.length <=` $10^5$
- $-2^{31}$ `<= nums[i] <=` $2^{31}$ - 1
- `0 <= k <=` $10^5$


**Follow up:**
- Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
- Could you do it in-place with `O(1)` extra space?


## Solutions

### Javascript
```javascript
const rotate = (nums, k) => {
  const reverseArray = (arr, left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  k = k % nums.length;
  let left = 0;
  let right = nums.length - 1;
  reverseArray(nums, left, right);

  left = 0;
  right = k - 1;
  reverseArray(nums, left, right);

  left = k;
  right = nums.length - 1;
  reverseArray(nums, left, right);
};
```

### Python
```python
class Solution:
  def reversArray(self, arr: List[int], left: int, right: int):
    while left < right:
      arr[left], arr[right] = arr[right], arr[left]
      left += 1
      right -= 1

  def rotate(self, nums: List[int], k: int) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    k = k % len(nums)
    left, right = 0, len(nums) - 1
    self.reversArray(nums, left, right)
    
    left, right = 0, k - 1
    self.reversArray(nums, left, right)
    
    left, right = k, len(nums) - 1
    self.reversArray(nums, left, right)
```