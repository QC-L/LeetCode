/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let obj = {}
  for (let index = 0; index < nums.length; index++) {
    if (typeof obj[target - nums[index]] !== 'undefined') {
      return [index, obj[target - nums[index]]]
    } else {
      obj[nums[index]] = index
    }
  }
};

let nums = [2, 7, 11, 15]
let target = 9
twoSum(nums, target)
