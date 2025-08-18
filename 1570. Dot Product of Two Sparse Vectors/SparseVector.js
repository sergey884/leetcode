/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
class SparseVector {
  constructor(nums) {
    this.nums = nums;
  }

  getNums() {
    return this.nums;
  }

  // Return the dotProduct of two sparse vectors
  /**
   * @param {SparseVector} vec
   * @return {number}
   */
  dotProduct(vec) {
    const v1Nums = this.getNums();
    const v2Nums = vec.getNums();

    let dotProductValue = 0;
    for (let i = 0; i < v1Nums.length; i++) {
      dotProductValue += v1Nums[i] * v2Nums[i];
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
