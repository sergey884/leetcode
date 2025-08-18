/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let red_pos = 0;
  let blue_pos = nums.length - 1;

  let curr_pos = 0;
  while (curr_pos <= blue_pos) {
    switch (nums[curr_pos]) {
      case 0:
        [nums[curr_pos], nums[red_pos]] = [nums[red_pos], nums[curr_pos]];
        red_pos++;
        curr_pos++;
        break;
      case 1:
        curr_pos++
        break;
      default:
        [nums[curr_pos], nums[blue_pos]] = [nums[blue_pos], nums[curr_pos]];
        blue_pos--;
    }
  }
};


const nums = [2, 0, 2, 1, 1, 0];
console.log('sortColors: ', sortColors(nums))
