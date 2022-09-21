/**
 * @LeetCode - #11 - https://leetcode.com/problems/container-with-most-water/
 */

let maxArea = function (height) {
  let maxWater = -Infinity;
  let left = 0;
  let right = height.length - 1;
  let base, hght;
  while (left < right) {
    base = right - left;
    hght = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, base * hght);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
};
