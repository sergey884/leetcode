/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
  const transformedNums = [];

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let transformedNum = [];
    while (n) {
      let digit = n % 10;
      let mappedDigit = mapping[digit];
      transformedNum.push(mappedDigit);
      n = Math.floor(n / 10);
    }
    
    let tmp = 0;
    while (transformedNum.length) {
      let digit = transformedNum.pop();
      tmp *= 10;
      tmp += digit
    }
    transformedNums.push(tmp);
    // console.log('transformedNum: ', transformedNum, tmp);
  }
  console.log('transformedNum: ', transformedNums);
};

const mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6];
const nums = [991, 338, 38];
// Output: [338,38,991]
console.log('sortJumbled: ', sortJumbled(mapping, nums));
