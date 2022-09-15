function swapPairs (head: ListNode | null): ListNode | null {
  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    const n1 = cur.next
    const n2 = cur.next.next
    cur.next = n2
    n1.next = n2.next
    n2.next = n1
    cur = n1
  }
  return dummy.next
}
