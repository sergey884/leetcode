/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  const arr1Cnt = {};
  const end = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1Cnt[arr1[i]]) {
      arr1Cnt[arr1[i]] = 0;
    }
    arr1Cnt[arr1[i]]++;

    if (!arr2Set.has(arr1[i])) {
      end.push(arr1[i]);
    }
  }

  end.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1Cnt[arr2[i]]; j++) {
      res.push(arr2[i]);
    }
  }

  return [...res, ...end];
};


const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
console.log('relativeSortArray: ', relativeSortArray(arr1, arr2));
