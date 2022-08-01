/**
 * @LeetCode - #226 - https://leetcode.com/problems/invert-binary-tree/
 * @ProblemDescription
 * Given the root of a binary tree, invert the tree, and return its root.
 */

let invertTree = function (root) {
    if (!root) return null;

    let dfs = (node) => {
        [node.left, node.right] = [node.right, node.left];
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }

    dfs(root);

    return root;

};