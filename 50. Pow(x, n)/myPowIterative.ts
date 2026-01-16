function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  let res = 1;
  let  absExponent = Math.abs(n);

  while (absExponent) {
    if (absExponent % 2 === 1) {
      res *= x
      absExponent--;
    }
    x *= x;
    absExponent = Math.floor(absExponent / 2);
  }

  return n < 0 ? 1 / res : res;
};