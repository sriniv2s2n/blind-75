/**
 * @LeetCode - #53 - https://leetcode.com/problems/maximum-subarray/
 * @ProblemDescription
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */

var maxSubArray = function (nums) {

    //Using Kadane's Algorithm
    //Time Complexity - O(n)
    let max = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        max = Math.max(max, currentSum);
    }
    return max;

    //Naive Approach
    //Time Complexity - O(n^2)
    // let max = -Infinity;
    // let sum;
    // for(let i = 0; i < nums.length; i++) {
    //     sum = 0;
    //     for(let j = i; j < nums.length; j++) {
    //         sum = sum + nums[j];
    //         max = sum > max ? sum : max;
    //     }
    // }
    // return max;
};