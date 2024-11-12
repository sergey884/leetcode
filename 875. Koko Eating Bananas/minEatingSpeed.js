/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
  let minSpeed = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }

    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
      minSpeed = mid;
    }
  }

  return minSpeed;
};


const piles = [3, 6, 7, 11];
const h = 8;
console.log('minEatingSpeed: ', minEatingSpeed(piles, h));
