/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let root = new ListNode(0)
  let p = root
  while (l1 || l2) {
    let sum = 0
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    sum += carry
    carry = Math.floor(sum / 10)
    p.next = new ListNode(sum % 10)
    p = p.next
  }
  if (carry === 1) {
    p.next = new ListNode(carry)
    p = p.next
  }
  return root.next
}
// @lc code=end
