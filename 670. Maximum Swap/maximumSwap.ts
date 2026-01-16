function maximumSwap(num: number): number {
  const strNum: string[] = String(num).split('');
  const n = strNum.length;
  const rightMaxIndex = Array(n).fill(0);
  rightMaxIndex[n - 1] = n - 1;

  for (let i = n - 2; i > 0; i--) {
    rightMaxIndex[i] = Number(strNum[i]) > Number(strNum[rightMaxIndex[i + 1]]) ? i : rightMaxIndex[i + 1];
  }

  for (let i = 0; i < n; i++) {
    if (Number(strNum[i]) < Number(strNum[rightMaxIndex[i]])) {
        [strNum[i], strNum[rightMaxIndex[i]]] = [strNum[rightMaxIndex[i]], strNum[i]];
        break;
    }
  }

  return Number(strNum.join(''));
};