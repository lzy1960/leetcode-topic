function generateParenthesis (n: number): string[] {
  const res: string[] = []
  if (n <= 0) {
    return res
  }

  generate('', n, n)
  return res

  function generate (str: string, left: number, right: number) {
    if (left === 0 && right === 0) {
      res.push(str)
      return res
    }
    if (left === right) {
      // 左 === 右，只能用左括号
      generate(`${str}(`, left - 1, right)
    } else if (left < right) {
      // 左 < 右，左括号和右括号都能用
      if (left > 0) {
        generate(`${str}(`, left - 1, right)
      }
      generate(`${str})`, left, right - 1)
    }
  }
}

console.log(generateParenthesis(3))
