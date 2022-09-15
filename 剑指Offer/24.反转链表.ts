function reverseList (head: ListNode | null): ListNode | null {
  let prev: typeof head = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
