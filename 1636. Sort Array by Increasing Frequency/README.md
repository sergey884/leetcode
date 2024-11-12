# [1636. Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency/description/)

Given an array of integers `nums`, sort the array in **increasing** order based on the frequency of the values. If multiple values have the same frequency, sort them in **decreasing** order.

Return the sorted array.

 
### Example 1:
> Input: nums = [1,1,2,2,2,3]
>
> Output: [3,1,1,2,2,2]
>
> Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.


### Example 2:
> Input: nums = [2,3,1,3,2]
>
> Output: [1,3,3,2,2]
>
> Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.


### Example 3:
> Input: nums = [-1,1,-6,4,5,-6,1,4,1]
>
> Output: [5,-1,4,4,-6,-6,1,1,1]
 

### Constraints:
- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`


## Solutions

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const frequencySort = (nums) => {
  const frequencyOfNums = {};
  for (let i = 0; i < nums.length; i++) {
    if (!frequencyOfNums[nums[i]]) {
      frequencyOfNums[nums[i]] = 0;
    }
    frequencyOfNums[nums[i]]++;
  }

  const sortedNums = nums.sort((a, b) => {
    return (frequencyOfNums[a] - frequencyOfNums[b]) || b - a
  });
  
  return sortedNums;
};
```

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def frequencySort(self, nums: List[int]) -> List[int]:
    frequencyOfNums = {}
    for n in nums:
      if n not in frequencyOfNums:
        frequencyOfNums[n] = 0
      frequencyOfNums[n] += 1
      
    sortedNums = sorted(nums, key = lambda x: (frequencyOfNums[x], -x))
    
    return sortedNums
```