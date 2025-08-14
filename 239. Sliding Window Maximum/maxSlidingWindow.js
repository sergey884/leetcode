/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  const result = [];
  const deque = []; // store index
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
      deque.pop();
    }
    deque.push(right);

    if (left > deque[0]) {
      deque.shift();
    }

    if (right >= k - 1) {
      result.push(nums[deque[0]]);
      left++;
    }
    right++;
  }

  return result;
};


const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log('maxSlidingWindow: ', maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]
