/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  const merge = (leftArr, rightArr, res) => {
    const leftArrLen = leftArr.length;
    const rightArrLen = rightArr.length;
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftArrLen && j < rightArrLen) {
      if (leftArr[i] < rightArr[j]) {
        res[k] = leftArr[i];
        i++;
      } else {
        res[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftArrLen) {
      res[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < rightArrLen) {
      res[k] = rightArr[j];
      j++;
      k++;
    }
  }

  const mergeSort = (arr) => {
    const l = arr.length;

    if (l < 2) {
      return;
    }

    const m = Math.floor(l / 2);
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < m; i++) {
      leftArr.push(arr[i]);
    }

    for (let j = m; j < l; j++) {
      rightArr.push(arr[j]);
    }

    mergeSort(leftArr);
    mergeSort(rightArr);

    merge(leftArr, rightArr, arr);
  }

  mergeSort(nums);
  return nums;
};


const nums = [5, 2, 3, 1];
console.log('sortArray: ', sortArray(nums));
