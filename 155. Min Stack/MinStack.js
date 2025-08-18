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


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
