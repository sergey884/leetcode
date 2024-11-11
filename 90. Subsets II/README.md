# [90. Subsets II](https://leetcode.com/problems/subsets-ii/description/)

Given an integer array `nums` that may contain duplicates, return all possible subsets (A **subset** of an array is a selection of elements (possibly none) of the array.) (the power set).

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

 
### Example 1:
> Input: nums = [1,2,2]
>
> Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]


### Example 2:
> Input: nums = [0]
>
> Output: [[],[0]]
 

### Constraints:
- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`


## Solutions

### Performance

- **Time Complexity**: $O(n * 2^n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const currentSubset = [];
  const subsets = [];

  const backtracking = (currentSubset, index) => {
    subsets.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) {
        continue;
      }

      currentSubset.push(nums[i]);
      backtracking(currentSubset, i + 1);
      currentSubset.pop();
    }
  };

  backtracking(currentSubset, 0);
  return subsets;
};
```

### Performance

- **Time Complexity**: $O(n * 2^n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    currentSubset = []
    subsets = []
    
    def backtracking(currentSubset, index):
      subsets.append(currentSubset.copy())
      
      for i in range(index, len(nums)):
        if i != index and nums[i] == nums[i - 1]:
          continue
        
        currentSubset.append(nums[i])
        backtracking(currentSubset, i + 1)
        currentSubset.pop()
        
    backtracking(currentSubset, 0)
    return subsets
```