/**
 * @param {number[]} height
 * @return {number}
 */
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

height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log('trap: ', trap(height))
