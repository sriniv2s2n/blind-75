/**
 * @LeetCode - #104 - https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @ProblemDescription
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

let maxDepth = function (root) {
    if (!root) return null;

    let dfs = (node, count) => {
        let left = 0;
        let right = 0;
        if (node.left) left = dfs(node.left, count + 1);
        if (node.right) right = dfs(node.right, count + 1);
        return Math.max(left, right, count);
    }

    return dfs(root, 1);
};