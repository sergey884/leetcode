/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
class SparseVector {
  constructor(nums) {
    this.indexToNum = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        this.indexToNum[i] = nums[i];
      }
    }
  }

  // Return the dotProduct of two sparse vectors
  /**
   * @param {SparseVector} vec
   * @return {number}
   */
  dotProduct(vec) {
    const indexToNum1 = Object.entries(this.indexToNum);
    const indexToNum2 = vec.indexToNum;

    let dotProductValue = 0;
    for (let entrie of indexToNum1) {
      const [index, val] = entrie;
      if (indexToNum2[index]) {
        dotProductValue += val * indexToNum2[index];
      }
    }

    return dotProductValue;
  }
}

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
const nums1 = [1,0,0,2,3];
const nums2 = [0,3,0,4,0];
let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);
let ans = v1.dotProduct(v2);
console.log('ans: ', ans);
