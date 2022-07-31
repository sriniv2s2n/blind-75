/**
 * @LeetCode - #33 - https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @ProblemDescription
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 */

let search = function (nums, target) {

    let mid;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }

    let smallElemIdx = left; //Small Element Index
    left = 0;
    right = nums.length - 1;

    if (target >= nums[smallElemIdx] && target <= nums[right])
        left = smallElemIdx;
    else
        right = smallElemIdx - 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) left = mid + 1;
        else if (target < nums[mid]) right = mid - 1;
        else return mid;
    }

    return -1;
};