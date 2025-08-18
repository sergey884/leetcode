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

const nums = [-4, -2, 2, 4];
const a = 1;
const b = 3;
const c = 5;
console.log('sortTransformedArray: ', sortTransformedArray(nums, a, b, c));
