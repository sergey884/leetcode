/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  let diffBit = 1;
  while (!(diffBit & xor)) {
    diffBit = diffBit << 1;
  }

  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (diffBit & nums[i]) {
      a = a ^ nums[i];
    } else {
      b = b ^ nums[i];
    }
  }

  return [a, b];
};


const nums = [1, 2, 1, 3, 2, 5];
console.log('singleNumber: ', singleNumber(nums))
