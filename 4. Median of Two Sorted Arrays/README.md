# [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

 
### Example 1:
> Input: nums1 = [1,3], nums2 = [2]
>
> Output: 2.00000
>
> Explanation: merged array = [1,2,3] and median is 2.


### Example 2:
> Input: nums1 = [1,2], nums2 = [3,4]
>
> Output: 2.50000
>
> Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


### Constraints:
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- $-10^6$ `<= nums1[i], nums2[i] <=` $10^6$


## Solutions

### Performance

- **Time Complexity**: $O(log(Min(nums1.length, nums2.length)))$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const findMedianSortedArrays = (nums1, nums2) => {
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  if (nums1Len > nums2Len) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const totalLen = nums1Len + nums2Len;
  const halfLen = Math.floor( totalLen / 2);

  let left = 0;
  let right = nums1Len - 1;
  while (true) {
    const mid = Math.floor((left + right) / 2);
    const nums2Mid = halfLen - mid - 2;

    const nums1Left = mid >= 0 ? nums1[mid] : -Infinity;
    const nums1Right = mid + 1 < nums1Len ? nums1[mid + 1] : Infinity;

    const nums2Left = nums2Mid >= 0 ? nums2[nums2Mid] : -Infinity;
    const nums2Right = nums2Mid + 1 < nums2Len ? nums2[nums2Mid + 1] : Infinity;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (totalLen % 2) {
        return Math.min(nums1Right, nums2Right);
      } else {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      }
    } else if (nums1Left > nums2Right) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
```

### Performance

- **Time Complexity**: $O(log(Min(nums1.length, nums2.length)))$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    lenNums1, lenNums2 = len(nums1), len(nums2)

    if lenNums1 > lenNums2:
      return self.findMedianSortedArrays(nums2, nums1)
    
    totalLen = lenNums1 + lenNums2
    halfLen = totalLen // 2

    left, right = 0, lenNums1 - 1
    while True:
      mid = (left + right) // 2
      nums2Mid = halfLen - mid - 2

      nums1Left = nums1[mid] if mid >= 0 else float('-inf')
      nums1Right = nums1[mid + 1] if mid + 1 < lenNums1 else float('inf')

      nums2Left = nums2[nums2Mid] if nums2Mid >= 0 else float('-inf')
      nums2Right = nums2[nums2Mid + 1] if nums2Mid + 1 < lenNums2 else float('inf')

      if nums1Left <= nums2Right and nums2Left <= nums1Right:
        if totalLen % 2:
          return min(nums1Right, nums2Right)
        else:
          return (max(nums1Left, nums2Left) + min(nums1Right, nums2Right)) / 2
      elif nums1Left > nums2Right:
        right = mid - 1
      else:
        left = mid + 1
```