function replaceSpace (s: string): string {
  let result = ''
  for (const char of s) {
    if (char === ' ') {
      result += '%20'
    } else {
      result += char
    }
  }
  return result
}
