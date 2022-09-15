function reversePrint (head: ListNode | null): number[] {
  const result: number[] = []
  while (head) {
    result.unshift(head.val)
    head = head.next
  }
  return result
}
