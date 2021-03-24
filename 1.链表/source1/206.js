// 反转链表
var reverseList = function (head) {
  if (head === null) {
    return head
  }

  let pre = null;
  let cur = head
  let next = head.next
  while (cur) {
    cur.next = pre
    pre = cur;
    (cur = next) && (next = next.next)
  }
  return pre
};

// 递归
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  let tail = head.next
  let p = reverseList(head.next)
  head.next = tail.next
  tail.next = head

  return p
};