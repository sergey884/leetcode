class SparseVector {
  pairs: [number, number][];

  constructor(nums: number[]) {
    this.pairs = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        this.pairs.push([i, nums[i]]);
      }
    }
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    const vecPairs = vec.pairs;
    const correntVesPairs = this.pairs;

    let i: number = 0;
    let j: number = 0;
    let res: number = 0;

    while (i < vecPairs.length && j < correntVesPairs.length) {
      if (vecPairs[i][0] === correntVesPairs[j][0]) {
        res += vecPairs[i][1] * correntVesPairs[j][1];
        i++;
        j++;
      } else if (vecPairs[i][0] < correntVesPairs[j][0]) {
        i++;
      } else {
        j++;
      }
    }

    return res;
  }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */