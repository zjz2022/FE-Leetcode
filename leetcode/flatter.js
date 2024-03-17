function flatter(nums) {
  nums.some((arr) => Array.from(nums))
  return [...nums]
}

console.log(flatter([1, 2, [3, 4, 5], 6]))
