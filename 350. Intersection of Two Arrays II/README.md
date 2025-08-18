# [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/)

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

 
### Example 1:
> Input: nums1 = [1,2,2,1], nums2 = [2,2]
>
> Output: [2,2]


### Example 2:
> Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
>
> Output: [4,9]
>
> Explanation: [9,4] is also accepted.
 

### Constraints:
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`
 

### Follow up:
- What if the given array is already sorted? How would you optimize your algorithm?
- What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?
- What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


## Solutions

### Performance

- **Time Complexity**: `O(N + M)`
- **Space Complexity**: `O(N)`

### Javascript (Swaping algorithm)
```javascript
const intersect = (nums1, nums2) => {
  const nums1Map = {};
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums1Map[nums1[i]]) {
      nums1Map[nums1[i]] = 0;
    }
    nums1Map[nums1[i]]++;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Map[nums2[i]] && nums1Map[nums2[i]] > 0) {
      res.push(nums2[i]);
      nums1Map[nums2[i]]--;
    }
  }

  return res;
};
```

### Performance

- **Time Complexity**: `O(N + M)`
- **Space Complexity**: `O(N)`

### Python
```python
class Solution:
  def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
    nums1Map = {}
    res = []
    for n in nums1:
      if n not in nums1Map:
        nums1Map[n] = 0
      nums1Map[n] += 1
        
    for n in nums2:
      if n in nums1Map and nums1Map[n] > 0:
        res.append(n)
        nums1Map[n] -= 1
        
    return res
```