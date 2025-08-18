# [912. Sort an Array](https://leetcode.com/problems/sort-an-array/description/)

Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

 
### Example 1:
> Input: nums = [5,2,3,1]
>
> Output: [1,2,3,5]
>
> Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).


### Example 2:
> Input: nums = [5,1,1,2,0,0]
>
> Output: [0,0,1,1,2,5]
>
> Explanation: Note that the values of nums are not necessairly unique.
 

### Constraints:
- $1 <= nums.length <= 5 * 10^{4}$
- $-5 * 10^{4} <= nums[i] <= 5 * 10^{4}$


## Solutions

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Javascript (Merge Sort)
```javascript
const sortArray = (nums) => {
  const merge = (leftArr, rightArr, res) => {
    const leftArrLen = leftArr.length;
    const rightArrLen = rightArr.length;
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftArrLen && j < rightArrLen) {
      if (leftArr[i] < rightArr[j]) {
        res[k] = leftArr[i];
        i++;
      } else {
        res[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftArrLen) {
      res[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < rightArrLen) {
      res[k] = rightArr[j];
      j++;
      k++;
    }
  }

  const mergeSort = (arr) => {
    const l = arr.length;

    if (l < 2) {
      return;
    }

    const m = Math.floor(l / 2);
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < m; i++) {
      leftArr.push(arr[i]);
    }

    for (let j = m; j < l; j++) {
      rightArr.push(arr[j]);
    }

    mergeSort(leftArr);
    mergeSort(rightArr);

    merge(leftArr, rightArr, arr);
  }

  mergeSort(nums);
  return nums;
};
```

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Python (Merge Sort)
```python
class Solution:
  def merge(self, leftArr, rightArr, res):
    leftArrLen = len(leftArr)
    rightArrLen = len(rightArr)
    i, j, k = 0, 0, 0
    
    while i < leftArrLen and j < rightArrLen:
      if leftArr[i] < rightArr[j]:
        res[k] = leftArr[i]
        i += 1
      else:
        res[k] = rightArr[j]
        j += 1
      k += 1
      
    while i < leftArrLen:
      res[k] = leftArr[i]
      i += 1
      k += 1
      
    while j < rightArrLen:
      res[k] = rightArr[j]
      j += 1
      k += 1
      
  def mergeSort(self, nums):
    l = len(nums)
    
    if l < 2:
      return

    leftArr = []
    rightArr = []
    
    m = l // 2

    leftArr = nums[:m]
    rightArr = nums[m:]

    self.mergeSort(leftArr)
    self.mergeSort(rightArr)
    
    self.merge(leftArr, rightArr, nums)
    
  def sortArray(self, nums: List[int]) -> List[int]:
    self.mergeSort(nums)
    return nums
```