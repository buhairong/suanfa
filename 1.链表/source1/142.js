// 判断环形链表节点

// hash
var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null
  }

  let set = new Set()
  while (head) {
    if (set.has(head)) {
      return head
    } else {
      set.add(head)
      head = head.next
    }
  }

  return null
};

// 快慢指针
var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null
  }

  let slow = head.next
  let fast = head.next.next
  while (slow !== fast && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  if (fast === null || fast.next === null) return null

  slow = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return fast
};