/**
 * @LeetCode - #79 - https://leetcode.com/problems/combination-sum/
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function (board, word) {

    let rowLen = board.length;
    let colLen = board[0].length;

    let isMatchFound = false;
    let visitedMap = new Map();
    let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let dfs = (row, col, id = 0) => {
        if (isMatchFound) return;
        if (id === word.length - 1) isMatchFound = true;
        visitedMap.set(row + " " + col);
        for (let direction of directions) {
            let dRow = row + direction[0];
            let dCol = col + direction[1];
            if (dRow >= 0 && dRow < rowLen && dCol >= 0 && dCol < colLen) {
                if (!visitedMap.has(dRow + " " + dCol) && board[dRow][dCol] === word[id + 1]) {
                    visitedMap.set(dRow + " " + dCol);
                    dfs(dRow, dCol, id + 1);
                    visitedMap.delete(dRow + " " + dCol);
                }
            }
        }
    }

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (board[row][col] === word[0]) {
                if (!isMatchFound) {
                    visitedMap = new Map();
                    dfs(row, col);
                }
            }
        }
    }

    return isMatchFound;
};