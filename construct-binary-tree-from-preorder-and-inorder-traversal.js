/**
 *  * @LeetCode - #105 - https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
let buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    let root = new TreeNode(preorder[0]);
    let rootIndex = inorder.findIndex(i => i === preorder[0]);
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return root;
};