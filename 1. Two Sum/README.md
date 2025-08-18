# [1. Two Sum](https://leetcode.com/problems/two-sum/description/)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.


### Example 1:
> Input: `nums = [2,7,11,15], target = 9`
>
> Output: `[0,1]`
>
> Explanation: `Because nums[0] + nums[1] == 9, we return [0, 1].`


### Example 2:
> Input: `nums = [3,2,4], target = 6`
>
> Output: `[1,2]`


### Example 3:
> Input: `nums = [3,3], target = 6`
>
> Output: `[0,1]`


### Constraints:
- `2 <= nums.length <= 104`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**
 

**Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?



## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$


### Javascript
```javascript
const twoSum = (nums, target) => {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    let remainingSum = target - nums[i];

    if (previousValues[remainingSum] !== undefined) {
      return [previousValues[remainingSum], i];
    } else {
      previousValues[nums[i]] = i;
    }
  }
  
  return [];
};
```


### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    previousValues = {}

    for i in range(len(nums)):
      remainingSum = target - nums[i]

      if remainingSum in previousValues:
        return [previousValues[remainingSum], i]
      else:
        previousValues[nums[i]] = i

    return []
```


### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### C++
```c++
class Solution {
  public: 
  vector<int> twoSum(vector<int>& nums, int target) {
    std::unordered_map<int, int> num_map;

    for (int i = 0; i < nums.size(); i++) {
      int remaining_sum = target - nums[i];
      if (num_map.find(remaining_sum) != num_map.end()) {
        return { num_map[remaining_sum], i };
      } else {
        num_map[nums[i]] = i;
      }
    }

    return {};
  }
};
```