function cuttingRope (n: number): number {
  if (n <= 3) return n - 1
  const a = parseInt(String(n / 3))
  const b = n % 3
  if (b === 0) return 3 ** a
  if (b === 1) return 3 ** (a - 1) * 4
  return 3 ** a * 2
}

console.log(cuttingRope(18))
