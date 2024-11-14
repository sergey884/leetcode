/**
 * @param {number[]} height
 * @return {number}
 */
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

height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log('trap: ', trap(height))
