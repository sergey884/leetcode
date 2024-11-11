/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let red_pos = -1;
  let white_pos = -1;
  let blue_pos = -1;

  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        red_pos++;
        white_pos++;
        blue_pos++;
        nums[blue_pos] = 2
        nums[white_pos] = 1
        nums[red_pos] = 0
        break;
      case 1:
        white_pos++;
        blue_pos++;
        nums[blue_pos] = 2
        nums[white_pos] = 1
        break;
      default:
        blue_pos++;
        nums[blue_pos] = 2
    }
  }
};


const nums = [2, 0, 2, 1, 1, 0];
console.log('sortColors: ', sortColors(nums))
