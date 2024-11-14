# [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/)

Design a class to find the $k^{th}$ largest element in a stream. Note that it is the $k^{th}$ largest element in the sorted order, not the $k^{th}$ distinct element.

Implement `KthLargest` class:
- `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
- `int add(int val)` Appends the integer `val` to the stream and returns the element representing the $k^{th}$ largest element in the stream.
 

### Example 1:
> Input
>
> ["KthLargest", "add", "add", "add", "add", "add"]
>
> [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
>
> Output
>
> [null, 4, 5, 5, 8, 8]
>
> Explanation
>
> KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
>
> kthLargest.add(3);   // return 4
>
> kthLargest.add(5);   // return 5
>
> kthLargest.add(10);  // return 5
>
> kthLargest.add(9);   // return 8
>
> kthLargest.add(4);   // return 8
 

### Constraints:
- $1 <= k <= 10^{4}$
- $0 <= nums.length <= 10^{4}$
- $-10^{4} <= nums[i] <= 10^{4}$
- $-10^{4} <= val <= 10^{4}$
- At most $10^{4}$ calls will be made to `add`.
It is guaranteed that there will be at least `k` elements in the array when you search for the $k^{th}$ element.


## Solutions

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    nums.sort((a, b) => a - b);
    this.nums = nums;
  }

  getIndex(val) {
    let left = 0;
    let right = this.nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.nums[mid] === val) {
        return mid;
      }

      if (val < this.nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  add(val) {
    const index = this.getIndex(val);
    this.nums.splice(index, 0, val);

    return this.nums[this.nums.length - this.k];
  }
}
```

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Python
```python
class KthLargest:
  def __init__(self, k: int, nums: List[int]):
    self.k = k
    self.nums = sorted(nums)

  def getIndex(self, val: int) -> int:
    left, right = 0, len(self.nums) - 1

    while left <= right:
      mid = (left + right) // 2
      midElement = self.nums[mid]

      if midElement == val:
        return mid
      
      if val < midElement:
        right = mid - 1
      else:
        left = mid + 1
    
    return left

  def add(self, val: int) -> int:
    index = self.getIndex(val)
    self.nums.insert(index, val)

    return  self.nums[-self.k]
```