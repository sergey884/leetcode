# [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/description)

Implement the `RandomizedSet` class:
- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the **same probability** of being returned.

You must implement the functions of the class such that each function works in **average** `O(1)` time complexity.

 
### Example 1:
> Input
>
> ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
>
> [[], [1], [2], [2], [], [1], [2], []]
>
> Output
>
> [null, true, false, true, 2, true, false, 2]
>
> Explanation
>
> RandomizedSet randomizedSet = new RandomizedSet();
>
> randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
>
> randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
>
> randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
>
> randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
>
> randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
>
> randomizedSet.insert(2); // 2 was already in the set, so return false.
>
> randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


### Constraints:
- $-2^{31} <= val <= 2^{31} - 1$
At most $2 * 10^{5}$ calls will be made to `insert`, `remove`, and `getRandom`.
There will be **at least one** element in the data structure when `getRandom` is called.


## Solutions

### Performance

- **Time Complexity**: $O(1)$
- **Space Complexity**: $$O(n)$

### Javascript
```javascript
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
```

### Performance

- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(n)$

### Python
```python

```