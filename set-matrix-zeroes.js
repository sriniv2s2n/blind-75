/**
 * @LeetCode - #73 - https://leetcode.com/problems/set-matrix-zeroes/
 * @ProblemDescription
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 */


// Time Complexity - O(mn)
// Space Complexity - O(m + n)
let setZeroes = function (matrix) {

    let rowSet = new Set();
    let colSet = new Set();
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row);
                colSet.add(col);
            }
        }
    }

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (rowSet.has(row) || colSet.has(col))
                matrix[row][col] = 0;
        }
    }
};