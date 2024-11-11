/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  if (nums1Len > nums2Len) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const totalLen = nums1Len + nums2Len;
  const halfLen = Math.floor( totalLen / 2);

  let left = 0;
  let right = nums1Len - 1;
  while (true) {
    const mid = Math.floor((left + right) / 2);
    const nums2Mid = halfLen - mid - 2;

    const nums1Left = mid >= 0 ? nums1[mid] : -Infinity;
    const nums1Right = mid + 1 < nums1Len ? nums1[mid + 1] : Infinity;

    const nums2Left = nums2Mid >= 0 ? nums2[nums2Mid] : -Infinity;
    const nums2Right = nums2Mid + 1 < nums2Len ? nums2[nums2Mid + 1] : Infinity;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (totalLen % 2) {
        return Math.min(nums1Right, nums2Right);
      } else {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      }
    } else if (nums1Left > nums2Right) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};


const nums1 = [1, 3];
const nums2 = [2];
console.log('findMedianSortedArrays: ', findMedianSortedArrays(nums1, nums2)); // 2
