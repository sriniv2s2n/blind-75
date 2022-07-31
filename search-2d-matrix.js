/**
 * @LeetCode - #74 - https://leetcode.com/problems/search-a-2d-matrix/
 * @ProblemDescription
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 */

 let searchMatrix = function(matrix, target) {
    
    let binarySearch = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let mid;
        while(left <= right) {
            mid = Math.floor((left + right) / 2);
            if(target > nums[mid]) left = mid + 1;
            else if(target < nums[mid]) right = mid - 1;
            else return mid;
        }
        return -1;
    }
    
    let idx;
    for(let i = 0; i < matrix.length; i++) {
        idx = binarySearch(matrix[i], target);
        if(idx === -1) continue;
        else return true;
    }
    return false;
};