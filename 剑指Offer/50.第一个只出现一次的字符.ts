function firstUniqChar (s: string): string {
  const frequency = _.countBy(s)
  for (const item of Array.from(s).entries()) {
    const ch = item[1]
    if (frequency[ch] === 1) {
      return ch
    }
  }
  return ' '
}
