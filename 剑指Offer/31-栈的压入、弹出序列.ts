function validateStackSequences (pushed: number[], popped: number[]): boolean {
  // 借用辅助栈，模拟出栈
  const stack: number[] = []
  let i = 0
  // 每次入栈，循环判断这个元素出栈的元素是否相等
  for (const num of pushed) {
    stack.push(num)
    // 栈里有值，并且相等，则出栈，看下一个元素
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  }
  // 辅助栈为空，说明模拟成功
  return !stack.length
}
