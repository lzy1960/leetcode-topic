class MinStack {
  stack: number[]
  constructor () {

    this.stack = []
  }

  push (x: number): void {

    this.stack.push(x)
  }

  pop (): void {

    this.stack.pop()
  }

  top (): number {
    if (!this.stack.length) return -1
    return this.stack[this.stack.length - 1]
  }

  min (): number {
    return Math.min(...this.stack)

  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
