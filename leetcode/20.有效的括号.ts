function isValid (s: string): boolean {
  const obj = {
    '[': ']',
    '(': ')',
    '{': '}',
  }
  const stack: string[] = []
  for (const char of s) {
    if (!obj[char] && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(obj[char])
    }
  }
  return !stack.length
}
