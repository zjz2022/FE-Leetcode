/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 用map做映射
const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}

const isValid = (s) => {
  let stack = []
  for (let key of s) {
    if (map[key]) {
      stack.push(map[key])
    } else {
      if (key !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}
// 循环做法
/*
var isValid = function (s) {
  if (s.length & 1) return false
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])
    else if (s[i] === ')' && stack[stack.length - 1] === '(') stack.pop()
    else if (s[i] === ']' && stack[stack.length - 1] === '[') stack.pop()
    else if (s[i] === '}' && stack[stack.length - 1] === '{') stack.pop()
    else return false
  }
  return !stack.length
}
*/
// @lc code=end
