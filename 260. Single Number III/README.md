# [260. Single Number III](https://leetcode.com/problems/single-number-iii/description/)

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in **any order**.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 
### Example 1:
> Input: nums = [1,2,1,3,2,5]
>
> Output: [3,5]
>
> Explanation:  [5, 3] is also a valid answer.


### Example 2:
> Input: nums = [-1,0]
>
> Output: [-1,0]


### Example 3:
> Input: nums = [0,1]
>
> Output: [1,0]
 

### Constraints:
- `2 <= nums.length <= 3 *` $10^4$
- $-2^{31}$ `<= nums[i] <=` $2^{31}$ `- 1`
- Each integer in `nums` will appear twice, only two integers will appear once.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const singleNumber = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  let diffBit = 1;
  while (!(diffBit & xor)) {
    diffBit = diffBit << 1;
  }

  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (diffBit & nums[i]) {
      a = a ^ nums[i];
    } else {
      b = b ^ nums[i];
    }
  }

  return [a, b];
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def singleNumber(self, nums: List[int]) -> List[int]:
    xor = 0
    for  n in nums:
      xor ^= n

    diffBit = 1
    while not xor & diffBit:
      diffBit = diffBit << 1

    a, b = 0, 0
    for n in nums:
      if diffBit & n:
        a = a ^ n
      else:
        b = b ^ n

    return [a, b]
```