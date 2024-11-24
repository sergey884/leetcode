# [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/description)

Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.

 
### Example 1:
> Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
> Output: 6
> Explanation: [1,1,1,0,0,1,1,1,1,1,1]
> Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


### Example 2:
> Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

### Constraints:
- $1 <= nums.length <= 10^{5}$
- `nums[i]` is either `0` or `1`.
- `0 <= k <= nums.length`



## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let maxWindow = 0;
  let currWindow = 0
  let amountOfZeroesInWindow = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      currWindow++;
    }

    if (nums[right] === 0 && amountOfZeroesInWindow <= k) {
      amountOfZeroesInWindow++;
      currWindow++;
    }

    while (amountOfZeroesInWindow > k) {
      if (nums[left] === 0) {
        amountOfZeroesInWindow--;
      }
      left++;
      currWindow--;
    }

    maxWindow = Math.max(maxWindow, currWindow);
  }

  return maxWindow;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python

```