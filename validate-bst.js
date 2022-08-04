/**
 * @LeetCode - #98 - https://leetcode.com/problems/validate-binary-search-tree/
 * @ProblemDescription
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

let isValidBST = function (root) {
    if (root === null) return true;
    let traversal = [];
    let dfs = node => {
        if (node.left) dfs(node.left);
        traversal.push(node.val);
        if (node.right) dfs(node.right);
    }

    dfs(root);

    for (let i = 0; i < traversal.length - 1; i++) {
        if (traversal[i] >= traversal[i + 1]) return false;
    }

    return true;
};