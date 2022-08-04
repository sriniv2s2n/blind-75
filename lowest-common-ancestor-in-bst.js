/**
 * @LeetCode - #235 - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @ProblemDescription
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

let lowestCommonAncestor = function (root, p, q) {

    if (root === null) return null;
    let node = root;
    while (true) {
        if (((p.val < node.val) && (q.val > node.val)) || ((p.val > node.val) && (q.val < node.val))) {
            break;
        }
        if ((p.val === node.val) || (q.val === node.val)) {
            break;
        }
        if ((p.val < node.val) && (q.val < node.val)) {
            node = node.left;
            continue;
        }
        if ((p.val > node.val) && (q.val > node.val)) {
            node = node.right;
        }
    }
    return node;

};