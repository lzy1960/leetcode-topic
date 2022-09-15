function deleteNode (head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null
  if (head.val === val) return head.next
  let pre = head
  let cur = head.next
  while (cur !== null && cur.val !== val) {
    pre = cur
    cur = cur.next
  }
  if (cur !== null) pre.next = cur.next
  return head
}
