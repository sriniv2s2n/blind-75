/**
 * @LeetCode - #152 - https://leetcode.com/problems/maximum-product-subarray/
 */

let maxProduct = function (nums) {
  let result = nums[0];
  let [currMax, currMin] = [result, result];
  for (let i = 1, len = nums.length; i < len; i++) {
    let max, min;
    max = Math.max(currMax * nums[i], currMin * nums[i], nums[i]);
    min = Math.min(currMax * nums[i], currMin * nums[i], nums[i]);
    currMax = max;
    currMin = min;
    result = Math.max(result, currMax);
  }
  return result;
};
