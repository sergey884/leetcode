/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let bitmask = 1;
  let numCopy = num;
  while (numCopy) {
    num = num ^ bitmask;
    bitmask = bitmask << 1;
    numCopy = numCopy >> 1;
  }

  return num;
};


console.log("findComplement: ", findComplement(5)); // 2
