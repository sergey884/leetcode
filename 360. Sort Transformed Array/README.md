# [360. Sort Transformed Array](https://leetcode.com/problems/sort-transformed-array/description/)

Given a **sorted** integer array nums and three integers `a`, `b` and `c`, apply a quadratic function of the form `f(x) = ax^2 + bx + c` to each element `nums[i]` in the array, and return the array in a sorted order.


### Example 1:
> Input: `nums = [-4,-2,2,4], a = 1, b = 3, c = 5`
> Output: `[3,9,15,33]`


### Example 2:
> Input: `nums = [-4,-2,2,4], a = -1, b = 3, c = 5`
> Output: `[-23,-5,1,7]`


### Constraints:
- `1 <= nums.length <= 200`
- `-100 <= nums[i], a, b, c <= 100`
- `nums` is sorted in ascending order.


**Follow up:** Could you solve it in `O(n)` time?


## Solutions

### Javascript
```javascript
const calc = (x, a, b, c) => (a * x ** 2 + b * x + c);

const sortTransformedArray = (nums, a, b, c) => {
  const l = nums.length;
  const res = Array(l).fill(0);
  let left = 0;
  let right = l - 1;
  let index = a <= 0 ? 0 : l - 1;
  const compare = (x, y) => (a >= 0 ? x >= y : x <= y);

  while (left <= right) {
    let leftVal = calc(nums[left], a, b, c);
    let rightVal = calc(nums[right], a, b, c);

    if (compare(leftVal, rightVal)) {
      res[index] = leftVal;
      left++;
    } else {
      res[index] = rightVal;
      right--;
    }

    index += (a <= 0 ? 1 : -1);
  }

  return res;
};
```

### Javascript (Without compare function and high readibility)
```javascript
const calc = (x, a, b, c) => (a * x ** 2 + b * x + c);

const sortTransformedArray = (nums, a, b, c) => {
  const l = nums.length;
  const res = Array(l).fill(0);
  let left = 0;
  let right = l - 1;
  let index = a <= 0 ? 0 : l - 1;

  while (left <= right) {
    let leftVal = calc(nums[left], a, b, c);
    let rightVal = calc(nums[right], a, b, c);

    if (a < 0) {
      if (leftVal <= rightVal) {
        res[index] = leftVal;
        left++;
      } else {
        res[index] = rightVal;
        right--;
      }
    } else {
      if (leftVal >= rightVal) {
        res[index] = leftVal;
        left++;
      } else {
        res[index] = rightVal;
        right--;
      }
    }

    index += (a <= 0 ? 1 : -1);
  }

  return res;
};
```

### Python
```python
class Solution:
  def calc(self, x: int, a: int, b: int, c: int) -> int:
    return a * x ** 2 + b * x + c

  def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
    l = len(nums)
    res = [0] * l
    left, right = 0, l - 1
    index = 0 if a <= 0 else l - 1

    compare = lambda x, y: x >= y if a >= 0 else x <= y

    while left <= right:
      leftVal = self.calc(nums[left], a, b, c)
      rightVal = self.calc(nums[right], a, b, c)

      if compare(leftVal, rightVal):
        res[index] = leftVal
        left += 1
      else:
        res[index] = rightVal
        right -= 1

      index += (1 if a <= 0 else -1)

    return res
```

### Python (Without compare function and high readibility)
```python
class Solution:
  def calc(self, x: int, a: int, b: int, c: int) -> int:
    return a * x ** 2 + b * x + c

  def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
    l = len(nums)
    res = [0] * l
    left, right = 0, l - 1
    index = 0 if a <= 0 else l - 1

    while left <= right:
      left_val = self.calc(nums[left], a, b, c)
      right_val = self.calc(nums[right], a, b, c)

      if a < 0:
        if left_val <= right_val:
          res[index] = left_val
          left += 1
        else:
          res[index] = right_val
          right -= 1
      else:
        if left_val >= right_val:
          res[index] = left_val
          left += 1
        else:
          res[index] = right_val
          right -= 1

      index += (1 if a <= 0 else -1)

    return res
```