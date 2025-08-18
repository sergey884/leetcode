class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
  
    this.map.set(val, this.arr.length);
    this.arr.push(val);

    return true;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }

    const index = this.map.get(val);
    const value = this.arr[index];
    const lastElement = this.arr[this.arr.length - 1];

    this.arr[index] = lastElement;
    this.arr[this.arr.length - 1] = value;

    this.map.set(lastElement, index);
    this.map.set(value, this.arr.length - 1);

    this.map.delete(val);
    this.arr.pop();

    return true;
  }

  /**
   * @return {number}
   */
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.arr.length);

    return this.arr[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true. Set now contains [2].
console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
