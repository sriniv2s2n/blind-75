/**
 * @LeetCode - #300 - https://leetcode.com/problems/longest-increasing-subsequence/
 */

let lengthOfLIS = function (nums) {
  let LIS = Array.from({ length: nums.length }, () => 1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) LIS[i] = Math.max(LIS[i], LIS[j] + 1);
    }
  }

  return Math.max(...LIS);
};
