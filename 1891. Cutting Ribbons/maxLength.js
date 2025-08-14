/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
const maxLength = (ribbons, k) => {
  let left = 1;
  let right = Math.max(...ribbons);

  const canCut = (ribbons, length, k) => {
    let count = 0;
    for (let i = 0; i < ribbons.length; i++) {
      count += Math.floor(ribbons[i] / length);
    }

    return count >= k;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canCut(ribbons, mid, k)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};