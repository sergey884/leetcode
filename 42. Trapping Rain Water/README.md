# [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.


### Example 1:
![](./images/rainwatertrap.png)
> Input: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`
>
> Output: `6`
>
> Explanation: `The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.`


### Example 2:
> Input: `height = [4,2,0,3,2,5]`
>
> Output: `9`


### Constraints:
- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`


## Solutions

### Javascript
> Time Complexity: `O(n)`
>
> Memory: `O(1)`
```javascript
const trap = (height) => {
  if (!height || !height.length) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let waterTrapped = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left += 1;
      maxLeft = Math.max(maxLeft, height[left]);
      waterTrapped += maxLeft - height[left];
    } else {
      right -= 1;
      maxRight = Math.max(maxRight, height[right]);
      waterTrapped += maxRight - height[right];
    }
  }

  return waterTrapped;
};
```

> Time Complexity: `O(n)`
>
> Memory: `O(n)`
```javascript
const trap = (height) => {
  if (!height || !height.length) {
    return 0;
  }

  const n = height.length;
  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);

  for (let i  = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let j = n - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], height[j + 1]);
  }

  let waterTrapped = 0;
  for (let i  = 0; i < n; i++) {
    let waterAboveBar = Math.min( leftMax[i], rightMax[i]) - height[i];
    waterTrapped += Math.max(waterAboveBar, 0);
  }

  return waterTrapped;
};
```

### Python
> Time Complexity: `O(n)`
>
> Memory: `O(1)`
```python
class Solution:
  def trap(self, height: List[int]) -> int:
    if not height:
      return 0

    left, right = 0, len(height) - 1
    leftMax, rightMax = height[left], height[right]
    waterTrapped = 0

    while left < right:
      if leftMax < rightMax:
        left += 1
        leftMax = max(leftMax, height[left])
        waterTrapped += leftMax - height[left]
      else:
        right -= 1
        rightMax = max(rightMax, height[right])
        waterTrapped += rightMax - height[right]

    return waterTrapped
```

> Time Complexity: `O(n)`
>
> Memory: `O(n)`
```python
class Solution:
  def trap(self, height: List[int]) -> int:
    if not height:
      return 0

    n = len(height)
    leftMax = [0] * n
    rightMax = [0] * n

    leftMax[0] = 0
    for i in range(1, n):
      leftMax[i] = max(leftMax[i - 1], height[i - 1])

    rightMax[n - 1] = 0
    for i in range(n - 2, - 1, -1):
      rightMax[i] = max(rightMax[i + 1], height[i + 1])

    waterTrapped = 0
    for i in range(n):
      waterAboveBar = min(leftMax[i], rightMax[i]) - height[i]
      waterTrapped += max(waterAboveBar, 0)

    return waterTrapped
```