/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let res = nums.some((item, index) => {
    let s = nums.slice(index + 1)
    return s.includes(item)
  })
  return res
}
// @lc code=end
