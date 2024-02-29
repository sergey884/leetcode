# [170. Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/)

Design and implement a `TwoSum` class. It should support the following operations: `add` and `find`.

`add` - Add the number to an internal data structure.
`find` - Find if there exists any pair of numbers which sum is equal to the value.

### Example 1:
> `add(1); add(3); add(5);`
>
> `find(4) -> true`
>
> `find(7) -> false`


### Example 2:
> `add(3); add(1); add(2);`
>
> `find(3) -> true`
>
> `find(6) -> false`


## Solutions

### Javascript
```javascript
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
```

### Python
```python
class TwoSum:
  def __init__(self) -> None:
    self.numberCounts = {}

  def add(self, num):
    if num not in self.numberCounts:
      self.numberCounts[num] = 0
    
    self.numberCounts[num] += 1

  def find(self, target):
    for num in self.numberCounts:
      remainingSum = target - num
      if num == remainingSum:
        if self.numberCounts[remainingSum] > 1:
          return  True
      elif remainingSum in self.numberCounts:
        return True

    return False
```