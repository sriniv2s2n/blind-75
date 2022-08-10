/**
 * @LeetCode - #54 - https://leetcode.com/problems/spiral-matrix/
 * @ProblemDescription
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

let spiralOrder = function (matrix) {

    let rotate = (mat) => {
        let matTranspose;
        //Transpose
        let rowLen = mat.length;
        let colLen = mat[0].length;
        matTranspose = new Array(colLen).fill(null).map(i => []);
        for (let row = 0; row < rowLen; row++) {
            for (let col = 0; col < colLen; col++) {
                matTranspose[col].push(mat[row][col]);
            }
        }
        return matTranspose.reverse();
    }

    let traversal = [];
    while (true) {
        traversal = traversal.concat(matrix[0]);
        matrix.shift();
        if (matrix.length === 0) break;
        //Rotate Anti-Clock Wise pi/2 radians
        matrix = rotate(matrix);
    }

    return traversal;
};