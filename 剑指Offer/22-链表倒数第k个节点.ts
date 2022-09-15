// 找两边
function getKthFromEnd (head: ListNode | null, k: number): ListNode | null {
  let count = 0
  let dummy = head
  while (head) {
    dummy = dummy!.next
    count++
  }
  dummy = head!
  for (let i = 0; i < count - k; i++) {
    dummy = dummy!.next
  }
  return dummy
}

// 双指针
function getKthFromEnd1 (head: ListNode | null, k: number): ListNode | null {
  let fast = head
  let slow = head
  for (let i = 0; i < k; i++) {
    fast = fast!.next
  }
  while (fast) {
    slow = slow!.next
    fast = fast.next
  }
  return slow
}
