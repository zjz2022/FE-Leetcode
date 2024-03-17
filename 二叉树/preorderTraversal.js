const tree = {
  val: '1',
  left: {
    val: '2',
    left: { val: '4', left: null, right: null },
    right: { val: '5', left: null, right: null },
  },
  right: {
    val: '3',
    left: { val: '6', left: null, right: null },
    right: { val: '7', left: null, right: null },
  },
}

var preorderTraversal = function (root) {
  let arr = []

  var fun = (node) => {
    if (node) {
      arr.push(node.val)
      fun(node.left)
      fun(node.right)
    }
  }
  fun(root)
  return arr
}
