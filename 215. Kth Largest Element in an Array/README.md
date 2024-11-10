# [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

Given an integer array `nums` and an integer `k`, return the $k^{th}$ largest element in the array.

Note that it is the $k^{th}$ largest element in the sorted order, not the $k^{th}$ distinct element.

Can you solve it without sorting?
 

### Example 1:
> Input: nums = [3,2,1,5,6,4], k = 2
>
> Output: 5


### Example 2:
> Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
>
> Output: 4
 

### Constraints:
- $1 <= k <= nums.length <= 10^{5}$
- $-10^{4} <= nums[i] <= 10^{4}$


## Solutions

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Javascript

```javascript
const findKthLargest = (nums, k) => {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1];
};
```

### Performance

- **Time Complexity**: $O(n * log k)$
- **Space Complexity**: $O(k)$

### Python

```python
class Solution:
  def findKthLargest(self, nums: List[int], k: int) -> int:
    heap = []
    for num in nums:
      heapq.heappush(heap, num)
      if len(heap) > k:
        heapq.heappop(heap)

    return heap[0]
```
