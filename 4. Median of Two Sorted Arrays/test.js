/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const A = nums1;
  const B = nums2;

  if (A.length > B.length) {
    [A, B] = [B, A];
  }

  const totalLen = A.length + B.length;
  const halfLen = Math.floor(totalLen / 2);

  let left = 0;
  let right = A.length - 1;

  while (true) {
    const AMid = Math.floor((left + right) / 2);
    const BMid = halfLen - AMid - 2;

    const ALeft = AMid >= 0 ? A[AMid] : -Infinity;
    const ARight = AMid + 1 < A.length ? A[AMid + 1] : Infinity;
    const BLeft = BMid >= 0 ? B[BMid] : -Infinity;
    const BRight = BMid + 1 < B.length ? B[BMid + 1] : Infinity;

    if (ALeft <= BRight && BLeft <= ARight) {
      if (totalLen % 2) {
        return Math.min(ARight, BRight);
      } else {
        return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
      }
    } else if (ALeft > BRight) {
      right = AMid - 1;
    } else {
      left = AMid + 1;
    }
  }
};