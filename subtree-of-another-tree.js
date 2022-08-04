/**
 * @LeetCode - #572 - https://leetcode.com/problems/subtree-of-another-tree/
 * @ProblemDescription
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 */

let isSubtree = function (root, subRoot) {

    let sameTreeHelper = (tree1, tree2) => {
        if (tree1 === null && tree2 === null) return true;
        if (tree1?.val !== tree2?.val) return false;

        return (sameTreeHelper(tree1.left, tree2.left) && sameTreeHelper(tree1.right, tree2.right))
    }

    let isSame = false;
    let dfs = (node, subRoot) => {
        if (isSame) return;
        isSame = sameTreeHelper(node, subRoot);
        if (node.left) dfs(node.left, subRoot);
        if (node.right) dfs(node.right, subRoot);
    }

    dfs(root, subRoot);
    return isSame;
};