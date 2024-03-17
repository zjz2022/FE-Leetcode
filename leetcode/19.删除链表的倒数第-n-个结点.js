/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 设定快慢指针
  let fast = head
  let slow = head
  // 快指针先向前移动n个单位
  while (n--) {
    fast = fast.next
  }
  // 如果快指针已经越界，说明要删除第一个元素，直接返回dummy.next
  if (!fast) {
    return head.next
  }
  // 双指针同时向前移动，当fast移动到最后一个元素时停止，此时slow指向要删除元素的前一个节点
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  // 该节点直接指向下下个节点
  slow.next = slow.next.next
  // 返回头指针
  return head
}
// @lc code=end
