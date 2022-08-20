/**
 * @LeetCode - #213 - https://leetcode.com/problems/house-robber-ii/
 * @ProblemDescription
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 */

let rob = function (nums) {

    if (nums.length <= 3) return Math.max(...nums);

    let robHelper = arry => {
        if (arry.length <= 2) return Math.max(...arry);
        for (let i = 2; i < arry.length; i++) {
            arry[i] += Math.max(...arry.slice(0, i - 1));
        }
        return Math.max(...arry);
    }

    return Math.max(robHelper([...nums.slice(0, nums.length - 1)]), robHelper([...nums.slice(1)]))

};