/**
 * @LeetCode - #268 - https://leetcode.com/problems/missing-number/
 * @ProblemDescription
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */
let missingNumber = function (nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let arrySum = nums.reduce((accum, num) => accum + num, 0);
    return sum - arrySum;
};