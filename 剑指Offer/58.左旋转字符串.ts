function reverseLeftWords (s: string, n: number): string {
  const left = s.slice(0, n)
  const right = s.slice(n)
  return right + left
}
