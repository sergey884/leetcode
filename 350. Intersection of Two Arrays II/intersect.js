/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const nums1Map = {};
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums1Map[nums1[i]]) {
      nums1Map[nums1[i]] = 0;
    }
    nums1Map[nums1[i]]++;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Map[nums2[i]] && nums1Map[nums2[i]] > 0) {
      res.push(nums2[i]);
      nums1Map[nums2[i]]--;
    }
  }

  return res;
};


const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log('intersect: ', intersect(nums1, nums2));
