/**
 * @LeetCode - #198 - https://leetcode.com/problems/house-robber/
 * @ProblemDescription
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 */

let rob = function (nums) {

    if (nums.length <= 2) return Math.max(...nums);

    for (let i = 2; i < nums.length; i++) {
        nums[i] += Math.max(...nums.slice(0, i - 1));
    }

    return Math.max(...nums);
};