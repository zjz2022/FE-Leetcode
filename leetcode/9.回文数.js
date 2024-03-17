/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let str = x.toString()
  let reversedStr = str.split('').reverse().join('')
  return str === reversedStr
}
// @lc code=end
