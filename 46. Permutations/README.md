# [46. Permutations](https://leetcode.com/problems/permutations/description/)

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

 
### Example 1:
> Input: nums = [1,2,3]
>
> Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


### Example 2:
> Input: nums = [0,1]
>
> Output: [[0,1],[1,0]]


### Example 3:
> Input: nums = [1]
>
> Output: [[1]]
 

### Constraints:
- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of nums are **unique**.


## Solutions

### Performance

- **Time Complexity**: `O(n * n!)`
- **Space Complexity**: `O(n * n!)`

### Javascript
```javascript
const permute = (nums) => {
  const permutations = [];
  const l = nums.length;
  const used = Array(l).fill(false);

  const dfs = (path) => {
    if (path.length === l) {
      permutations.push([...path]);
      return;
    }

    for (let i = 0; i < l; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };

  dfs([]);
  return permutations;
};
```

### Performance

- **Time Complexity**: `O(n * n!)`
- **Space Complexity**: `O(n * n!)`

### Python
```python
class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    permutations = []
    l = len(nums)
    used = [False] * l
    
    def dfs(path):
      if len(path) == l:
        permutations.append(path.copy())
        return
      
      for i in range(l):
        if used[i]:
          continue
        
        used[i] = True
        path.append(nums[i])
        dfs(path)
        path.pop()
        used[i] = False
    
    dfs([])
    return permutations
```