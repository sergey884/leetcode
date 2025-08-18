/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const res = [];
  const nums1Set = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      res.push(nums2[i]);
      nums1Set.delete(nums2[i]);
    }
  }

  return res;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log('intersection: ', intersection(nums1, nums2));
