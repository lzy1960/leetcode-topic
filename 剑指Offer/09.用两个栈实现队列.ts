class CQueue {
  stack: number[]
  constructor () {
    this.stack = []
  }

  appendTail (value: number): void {
    this.stack.push(value)
  }

  deleteHead (): number {
    return this.stack.shift() || -1
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
