# [179. Largest Number](https://leetcode.com/problems/largest-number/description/)

Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 
### Example 1:
> Input: nums = [10,2]
>
> Output: "210"


### Example 2:
> Input: nums = [3,30,34,5,9]
>
> Output: "9534330"
 

### Constraints:
- $1 <= nums.length <= 100$
- $0 <= nums[i] <= 10^{9}$


## Solutions

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const largestNumber = (nums) => {
  const res = nums
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');

  return res[0] === '0' ? '0' : res;
};
```

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def largestNumber(self, nums: List[int]) -> str:
    def compare(x, y):
      return 1 if x + y < y + x else -1
    
    numStrs = [str(num) for num in nums]
    numStrs.sort(key = cmp_to_key(compare))

    if numStrs[0] == '0':
      return '0'

    return ''.join(numStrs)
```