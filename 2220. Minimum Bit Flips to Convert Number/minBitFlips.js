/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = (start, goal) => {
  let flipCount = 0;

  while (start > 0 || goal > 0) {
    const startBit = start & 1;
    const goalBit = goal & 1;

    if (startBit !== goalBit) {
      flipCount++;
    }

    start >>= 1;
    goal >>= 1;
  }

  return flipCount;
};


const start = 10;
const goal = 7;
console.log("minBitFlips: ", minBitFlips(start, goal)); // 2
