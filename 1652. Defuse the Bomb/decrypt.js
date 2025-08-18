/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
  const n = code.length;
  const res = Array(n).fill(0);
  if (k === 0) {
    return res;
  }

  let start = 1;
  let end = k;
  let sum = 0;

  if (k < 0) {
    start = n - Math.abs(k);
    end = n - 1;
  }

  for (let i = start; i <= end; i++) {
    sum += code[i % n];
  }

  for (let i = 0; i < n; i++) {
    res[i] = sum;

    ++end;
    sum -= code[start % n];
    sum += code[end % n];
    start++;
  }

  return res;
};


// const code = [5, 7, 1, 4];
// const k = 3;
// Output: [12, 10, 16, 13]

const code = [2, 4, 9, 3];
const k = -2;
// Output [12, 5, 6, 13]
console.log('decrypt: ', decrypt(code, k))