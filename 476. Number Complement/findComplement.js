/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let bitmask = 1;
  let todo = num;
  while (todo) {
    num = num ^ bitmask;
    bitmask = bitmask << 1;
    todo = todo >> 1;
  }

  return num;
};

console.log("findComplement: ", findComplement(5)); // 2
