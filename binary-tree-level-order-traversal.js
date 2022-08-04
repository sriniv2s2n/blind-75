/**
 * @LeetCode - #102 - https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @ProblemDescription
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

let levelOrder = function (root) {
    if (root === null) return [];

    let queue = [root];
    let result = [[root.val]];
    let waitTime = 1;
    let node;
    while (queue.length > 0) {
        node = queue.shift();
        waitTime--;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        if (waitTime === 0) {
            let arry = queue.reduce((accum, curr) => {
                accum.push(curr.val);
                return accum;
            }, []);
            if (arry.length !== 0) result.push(arry);
            waitTime = queue.length;
        }

    }

    return result;
};