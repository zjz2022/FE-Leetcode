# 哈希表，哈希集合

## 两数之和

```js
var twoSum = function (nums, target) {
  // 创建一个表，用来存放数组中的元素及其在数组中的下标
  let map = new Map()

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i] // 计算目标差值

    // 如果表中已经存在差值，则找到了符合条件的两个元素
    if (map.has(k)) {
      // map.get(k) 是第一个元素的数组下标， i 是当前元素的数组下标
      return [map.get(k), i]
    }

    // 将当前元素及其在数组中的下标存入表中
    map.set(nums[i], i)
  }

  // 如果没有找到符合条件的两个元素，返回空数组
  return []
}
```

## 字母异位词分组

```js
// 定义一个名为groupAnagrams的函数，接收一个string类型的数组，返回一个二维string数组。
var groupAnagrams = function (strs) {
  // 创建一个Map对象，键为排序后的字符串，值为几个不同的原字符串（排序后都一样）的数组
  const map = new Map()

  // 遍历传入的strs数组
  for (let str of strs) {
    // 对当前字符串的每个字符进行排序，并转化为字符串作为键
    const key = [...str].sort().toString()
    console.log('key')
    console.log(key)
    // 检查map中是否有当前键，如果有，取出对应的值（值为数组），否则创建一个新的空数组
    const list = map.get(key) ? map.get(key) : []
    console.log('list')
    console.log(list)

    // 往这个数组中添加当前遍历的字符串
    list.push(str)
    console.log('str')
    console.log(str)

    // 在map中设置当前键和其对应的值（值为包含当前字符串的数组）
    map.set(key, list)
    console.log('map')
    console.log(map)
  }

  // 将map的所有值（即所有的字符串数组）转换为数组并返回
  console.log('map.values()')
  console.log(map.values())
  return Array.from(map.values())
  // map.values() { [ 'cog', 'ocg', 'goc' ], [ 'dog', 'god' ] } 是一个对象哦！ 这里用 Array.from 就相当于把 {} 换成了 []
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// 输出：[["eat","tea","ate"], ["tan","nat"], ["bat"]]

console.log(groupAnagrams(['cog', 'dog', 'god', 'ocg', 'goc']))
// 输出：[["cog", "ocg", "goc"], ["dog", "god"]]

// console.log(groupAnagrams(['room', 'moor', 'moro', 'test', 'sett']))
// 输出：[["room", "moor", "moro"], ["test", "sett"]]

// console.log(groupAnagrams(['']))
// 输出：[[""]]

// console.log(groupAnagrams(['a']))
// 输出: [["a"]]
```

## 最长连续序列

```js
var longestConsecutive = function(nums) {
    // 转化成哈希集合，为了快速查找哈希集合中是否存在某个元素。
    // 因为在哈希集合中查找元素的时间复杂度为O(1)，从而提高了算法的效率。
    let set = new Set(nums);

    // 初始化最长连续子序列的长度为0
    let res = 0;

    // 对哈希集合中的每个元素进行迭代
    for (let num of set) {
        // 如果num-1存在于集合中，说明num不是连续子序列的第一个元素，
        // 所以我们继续下一个元素的迭代，寻找新的序列的可能起点
        if (set.has(num - 1)) continue;

        // 如果num-1不存在于集合中，说明num可以作为一个新的连续子序列的起点，
        // 因此开始向下一个元素进行检索，并计算连续子序列的长度
        let curNum = num; // 当前判断的数字
        let curLen = 1; // 初始化当前序列长度为1

        // 如果集合中存在curNum+1，将curNum更新为curNum+1，并将当前长度加1
        // 循环此过程，直到集合中不存在curNum+1为止
        while (set.has(curNum + 1)) {
            curNum += 1;
            curLen += 1;
        }
        // 比较并更新已知的最长连续子序列长度
        // Math.max是取两个参数中的最大值
        res = Math.max(res, curLen);
    }

    // 返回最长连续子序列的长度
    return res;
};
```



# 二叉树

## 二叉树的中序遍历

## 二叉树的最大深度

## 翻转二叉树