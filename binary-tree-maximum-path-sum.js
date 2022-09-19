/**
 * @LeetCode - #124 - https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

let maxPathSum = function (root) {
  let resultMax = -Infinity;
  let dfs = (node) => {
    if (node === null) return 0;
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    resultMax = Math.max(resultMax, left + right + node.val);
    return Math.max(left, right) + node.val;
  };
  dfs(root);

  return resultMax;
};
