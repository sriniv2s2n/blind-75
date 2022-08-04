/**
 * @LeetCode - #100 - https://leetcode.com/problems/same-tree/
 * @ProblemDescription
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */

let isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p?.val !== q?.val) return false;

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};