function printNumbers (n: number): number[] {
  const count = 10 ** n
  return Array(count - 1).fill(n - 1).map((_, index) => index + 1)
}

console.log(printNumbers(3))
