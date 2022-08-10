/**
 * @LeetCode - #48 - https://leetcode.com/problems/rotate-image/
 * @ProblemDescription
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

let rotate = function (matrix) {
    //Transpose
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = row; col < colLen; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }

    //Reverse 
    for (let row = 0; row < rowLen; row++) {
        matrix[row].reverse();
    }
};