# [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/description/)

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be **unique** and you may return the result in **any order**.


### Example 1:
> Input: `nums1 = [1,2,2,1], nums2 = [2,2]`
>
> Output: `[2]`


### Example 2:
> Input: `nums1 = [4,9,5], nums2 = [9,4,9,8,4]`
>
> Output: `[9,4]`
>
> Explanation: `[4,9] is also accepted.`
 

### Constraints:
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`


## Solutions

### Javascript
```javascript
const intersection = (nums1, nums2) => {
  const res = [];
  const nums1Set = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      res.push(nums2[i]);
      nums1Set.delete(nums2[i]);
    }
  }

  return res;
};
```

### Python
```python
class Solution:
  def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
    res = []
    nums1Set = set(nums1)

    for num in nums2:
      if num in nums1Set:
        res.append(num)
        nums1Set.remove(num)

    return res
```