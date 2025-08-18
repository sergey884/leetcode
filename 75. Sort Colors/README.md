# [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/)

Given an array `nums` with `n` objects colored red, white, or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 
### Example 1:
> Input: nums = [2,0,2,1,1,0]
>
> Output: [0,0,1,1,2,2]


### Example 2:
> Input: nums = [2,0,1]
>
> Output: [0,1,2]
 

### Constraints:
- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.


**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript (Swaping algorithm)
```javascript
const sortColors = (nums) => {
  let red_pos = 0;
  let blue_pos = nums.length - 1;

  let curr_pos = 0;
  while (curr_pos <= blue_pos) {
    switch (nums[curr_pos]) {
      case 0:
        [nums[curr_pos], nums[red_pos]] = [nums[red_pos], nums[curr_pos]];
        red_pos++;
        curr_pos++;
        break;
      case 1:
        curr_pos++
        break;
      default:
        [nums[curr_pos], nums[blue_pos]] = [nums[blue_pos], nums[curr_pos]];
        blue_pos--;
    }
  }
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript
```javascript
const sortColors = (nums) => {
  let red_pos = -1;
  let white_pos = -1;
  let blue_pos = -1;

  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        red_pos++;
        white_pos++;
        blue_pos++;
        nums[blue_pos] = 2
        nums[white_pos] = 1
        nums[red_pos] = 0
        break;
      case 1:
        white_pos++;
        blue_pos++;
        nums[blue_pos] = 2
        nums[white_pos] = 1
        break;
      default:
        blue_pos++;
        nums[blue_pos] = 2
    }
  }
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python (Swaping algorithm)
```python
class Solution:
  def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    red_pos = 0
    blue_pos = len(nums) - 1
    curr_pos = 0
    
    while curr_pos <= blue_pos:
      if nums[curr_pos] == 0:
        nums[curr_pos], nums[red_pos] = nums[red_pos], nums[curr_pos]
        curr_pos += 1
        red_pos += 1
      elif nums[curr_pos] == 1:
        curr_pos += 1
      else:
        nums[curr_pos], nums[blue_pos] = nums[blue_pos], nums[curr_pos]
        blue_pos -= 1
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python
```python
class Solution:
  def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    red_pos, white_pos, blue_pos = -1, -1, -1
    for num in nums:
      if num == 0:
        red_pos += 1
        white_pos += 1
        blue_pos += 1
        nums[blue_pos] = 2
        nums[white_pos] = 1
        nums[red_pos] = 0
      elif num == 1:
        white_pos += 1
        blue_pos += 1
        nums[blue_pos] = 2
        nums[white_pos] = 1
      else:
        blue_pos += 1
        nums[blue_pos] = 2
```