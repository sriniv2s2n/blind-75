/**
 * @LeetCode - #238 - https://leetcode.com/problems/product-of-array-except-self/
 * @ProblemDescription
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * NOTE: This problem can be implemented using Division method(only when all the elements are non-zero values) with O(n) Time Complexity
 * For the Prefix and Postfix approach implemented below which can be used for any input values:
 * @TimeComplexity - O(n)
 * @SpaceComplexity - O(n)
 */
let productExceptSelf = function (nums) {
    let preFix = new Array(nums.length).fill(null);
    let prevIdx;
    for (let start = 0; start < nums.length; start++) {
        if (start === 0) preFix[start] = 1;
        else {
            prevIdx = start - 1;
            preFix[start] = nums[prevIdx] * preFix[prevIdx];
        }
    }

    let postFix = new Array(nums.length).fill(null);
    let postIdx;
    for (let end = nums.length - 1; end >= 0; end--) {
        if (end === nums.length - 1) postFix[end] = 1;
        else {
            postIdx = end + 1;
            postFix[end] = nums[postIdx] * postFix[postIdx];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = preFix[i] * postFix[i];
    }

    return nums;
};