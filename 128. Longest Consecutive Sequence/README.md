# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

 
### Example 1:
> Input: nums = [100,4,200,1,3,2]
>
> Output: 4
>
> Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


### Example 2:
> Input: nums = [0,3,7,2,5,8,4,6,0,1]
>
> Output: 9
 
### Constraints:
- `0 <= nums.length <=` $10^5$
- $-10^9$ `<= nums[i] <=` $10^9$


## Solutions

### Javascript
```javascript
const longestConsecutive = (nums) => {
  const seen = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i] - 1)) {
      continue;
    }

    let len = 0;
    while (seen.has(nums[i] + len)) {
      len++;
    }
    longest = Math.max(longest, len);
  }

  return longest;
};
```

### Python
```python
class Solution:
  def longestConsecutive(self, nums: List[int]) -> int:
    numSet = set(nums)
    longest = 0

    for n in nums:
      if (n - 1) in numSet:
        continue
      length = 0
      while n in numSet:
        n += 1
        length += 1
      longest = max(longest, length)

    return longest
```