// 链表判环

// 快慢指针
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }

  let slow = head.next
  let fast = head.next.next

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }

    slow = slow.next
    fast = fast.next.next
  }

  return true
};

// hash
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }

  let set = new Set()
  let current = head
  while (current) {
    if (set.has(current)) {
      return true
    } else {
      set.add(current)
      current = current.next
    }
  }

  return false
};