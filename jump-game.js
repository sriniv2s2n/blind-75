/**
 * @LeetCode - #55 - https://leetcode.com/problems/jump-game/
 * @ProblemDescription
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

let canJump = function (nums) {
    let goalIdx = nums.length - 1;
    for (let i = goalIdx - 1; i >= 0; i--) {
        if (i + nums[i] >= goalIdx) goalIdx = i;
    }
    if (goalIdx === 0) return true;
    else return false;
};