// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(head === null || head.next === null) return head
  
};