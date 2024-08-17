/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    nums.sort((a, b) => a - b);
    this.nums = nums;
  }

  getIndex(val) {
    let left = 0;
    let right = this.nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.nums[mid] === val) {
        return mid;
      }

      if (val < this.nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    const index = this.getIndex(val);
    this.nums.splice(index, 0, val);

    return this.nums[this.nums.length - this.k];
  }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8