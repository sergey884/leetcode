/**
 * @param {number[]} w
 */
class Solution { 
  constructor(w) {
    this.prefixSum = [];
    let currSum = 0;
    for (let i = 0; i < w.length; i++) {
      currSum += w[i];
      this.prefixSum.push(currSum);
    }

    this.totalSum = currSum;
  };

  pickIndex() {
    const target = this.totalSum * Math.random();
    let left = 0;
    let right = this.prefixSum.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (target > this.prefixSum[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
}

const w = [1, 3];
const pickupWeight = new Solution(w);
pickupWeight.pickIndex()
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
