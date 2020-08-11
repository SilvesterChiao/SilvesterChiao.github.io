/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var answer = [];
  nums.forEach((outterItem, outterIndex) => {
    nums.forEach((innerItem, innerIndex) => {
      if (outterIndex !== innerIndex && outterItem + innerItem === target && answer.length === 0) {
        answer.push(outterIndex, innerIndex)
      }
    })
  })

  return answer
};
// @lc code=end

