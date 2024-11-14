/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  const l = ratings.length;
  const candies = Array(l).fill(1);

  for (let i = 1; i < l; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  let  sum = candies[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    sum += candies[i];
  }

  return sum;
};


const ratings = [1, 0, 2];
console.log(candy(ratings)); // 5
