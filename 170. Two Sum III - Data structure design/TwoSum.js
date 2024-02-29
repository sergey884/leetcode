class TwoSum {
  constructor() {
    this.numberCounts = {};
  }

  add(num) {
    if (!this.numberCounts[num]) {
      this.numberCounts[num] = 0;
    }

    this.numberCounts[num]++;
  }

  find(target) {
    for(let num in  this.numberCounts) {
      let remainingSum = target - num;

      if (num === remainingSum) {
        if (this.numberCounts[num] > 1) {
          return true;
        }
      }
      
      if (this.numberCounts[remainingSum]) {
        return true;
      }
    }

    return false;
  }
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
twoSum.add(3);
twoSum.add(2);
twoSum.add(2);
console.log('numberCounts: ', twoSum.numberCounts);
console.log('find(4): ', twoSum.find(4));
console.log('find(7): ', twoSum.find(7));