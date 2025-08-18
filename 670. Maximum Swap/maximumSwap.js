/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = (num) => {
  let numStrArr = String(num).split('');
  const l = numStrArr.length;
  const maxRightIndex = Array(l).fill(0);
  maxRightIndex[l - 1] = l - 1;
  
  for (let i = l - 2; i >= 0; i--) {
    maxRightIndex[i] = parseInt(numStrArr[i]) > parseInt(numStrArr[maxRightIndex[i + 1]]) ? i : maxRightIndex[i + 1];
  }

  for (let j = 0; j < l; j++) {
    if (parseInt(numStrArr[j]) < parseInt(numStrArr[maxRightIndex[j]])) {
      [numStrArr[j], numStrArr[maxRightIndex[j]]] = [numStrArr[maxRightIndex[j]], numStrArr[j]];
      break;
    }
  }

  return parseInt(numStrArr.join(''));
};


const num = 98368;
console.log('maximumSwap: ', maximumSwap(num));