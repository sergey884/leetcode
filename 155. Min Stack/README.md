# [155. Min Stack](https://leetcode.com/problems/min-stack/description/)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.
You must implement a solution with `O(1)` time complexity for each function.

 
### Example 1:
> Input
>
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
>
> [[],[-2],[0],[-3],[],[],[],[]]

> Output
>
> [null,null,null,null,-3,null,0,-2]

> Explanation
>
> MinStack minStack = new MinStack();
>
> minStack.push(-2);
>
> minStack.push(0);
>
> minStack.push(-3);
>
> minStack.getMin(); // return -3
>
> minStack.pop();
>
> minStack.top();    // return 0
>
> minStack.getMin(); // return -2


### Constraints:
- $-2^{31} <= val <= 2^{31} - 1$
- Methods `pop`, `to`p and `getMin` operations will always be called on **non-empty** stacks.
- At most $3 * 10^4^ calls will be made to `push`, `pop`, `top`, and `getMin`.


## Solutions

### Performance

- **Time Complexity**: `O(1)`
- **Space Complexity**: `O(n)`

### Javascript (Swaping algorithm)
```javascript
class MinStack {
  constructor() {
    this.stack = []
  }

  push(val) {
    const lastIndex = this.stack.length - 1;
    const minVal = this.stack && this.stack[lastIndex] ? Math.min(this.stack[lastIndex][1], val) : val
    this.stack.push([val, minVal]);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex][0];
  }

  getMin() {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex][1];
  }
}
```

### Performance

- **Time Complexity**: `O(1)`
- **Space Complexity**: `O(n)`

### Python
```python
class MinStack:
  def __init__(self):
    self.stack = []

  def push(self, val: int) -> None:
    minVal = val if not self.stack else min(self.stack[-1][1], val)
    self.stack.append([val, minVal])

  def pop(self) -> None:
    self.stack.pop()

  def top(self) -> int:
    return self.stack[-1][0]
        
  def getMin(self) -> int:
    return self.stack[-1][1]
```