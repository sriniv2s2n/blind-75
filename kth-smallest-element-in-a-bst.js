/**
 * @LeetCode - #230 - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @ProblemDescription
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

let kthSmallest = function (root, k) {
    if (root === null) return null;
    let traversal = [];
    let dfs = node => {
        if (node.left) dfs(node.left);
        traversal.push(node.val);
        if (node.right) dfs(node.right);
    }

    dfs(root);

    return traversal[k - 1];
};