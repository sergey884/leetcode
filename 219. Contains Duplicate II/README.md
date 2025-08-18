# [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

 
### Example 1:
> Input: nums = [1,2,3,1], k = 3
>
> Output: true


### Example 2:
> Input: nums = [1,0,1,1], k = 1
>
> Output: true


### Example 3:
> Input: nums = [1,2,3,1,2,3], k = 2
>
> Output: false


### Constraints:
- $1 <= nums.length <= 10^{5}$
- $-10^{9} <= nums[i] <= 10^{9}$
- $0 <= k <= 10^{5}$


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const containsNearbyDuplicate = (nums, k) => {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (indexMap[nums[i]] !== undefined && nums[i] === nums[indexMap[nums[i]]] && i - indexMap[nums[i]] <= k) {
      return true;
    }

    indexMap[nums[i]] = i;
  }

  return false;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
    indexMap = {}
    for i in range(len(nums)):
      if nums[i] in indexMap and nums[i] == nums[indexMap[nums[i]]] and i - indexMap[nums[i]] <= k:
        return True
        
      indexMap[nums[i]] = i
      
    return False
```