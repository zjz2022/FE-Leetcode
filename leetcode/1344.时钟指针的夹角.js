/*
 * @lc app=leetcode.cn id=1344 lang=javascript
 *
 * [1344] 时钟指针的夹角
 */

// @lc code=start
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const a = ((360 * (hour + minutes / 60)) / 12) % 360
  const b = ((360 * minutes) / 60) % 360

  return Math.min(360 - Math.abs(a - b), Math.abs(a - b))
}
// @lc code=end
