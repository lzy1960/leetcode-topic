function letterCombinations (digits: string): string[] {
  if (digits.length === 0) return []
  let res: string[] = []
  const map: Map<number, string> = new Map()
  map.set(2, 'abc')
  map.set(3, 'def')
  map.set(4, 'ghi')
  map.set(5, 'jkl')
  map.set(6, 'mno')
  map.set(7, 'pqrs')
  map.set(8, 'tuv')
  map.set(9, 'wxyz')

  backTrack('', 0)

  return res

  function backTrack (curStr: string, index: number) {
    if (index > digits.length - 1) {
      res.push(curStr)
      return
    }
    const letters = map.get(Number(digits.at(index)))!
    for (let i = 0; i < letters.length; i++) {
      const char = letters[i]
      backTrack(curStr + char, index + 1)
    }
  }
};

console.log(letterCombinations(''))
