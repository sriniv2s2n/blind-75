/**
 * @LeetCode - #200 - https://leetcode.com/problems/number-of-islands/
 * @ProblemDescription
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

let numIslands = function (grid) {
    let islands = 0;
    let visitedMap = new Map();
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                if (!visitedMap.has(i + " " + j)) {
                    islands++;
                    visitedMap.set(i + " " + j);
                    let queue = [[i, j]];
                    while (queue.length) {
                        let cell = queue.shift();
                        directions.forEach(direction => {
                            let row = cell[0] + direction[0];
                            let col = cell[1] + direction[1];
                            if (row >= 0 && row < grid.length && col >= 0 && col < grid[i].length) {
                                if (grid[row][col] === "1" && !visitedMap.has(row + " " + col)) {
                                    queue.push([row, col]);
                                    visitedMap.set(row + " " + col);
                                }
                            }
                        })
                    }
                }
            } else continue;
        }
    }

    return islands;
};