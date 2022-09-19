/**
 * @LeetCode - #297 - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */

let serialize = function (root) {
  if (root === null) return JSON.stringify([]);
  let result = [root.val];
  let queue = [root];
  let waitTime = 1;
  while (queue.length) {
    while (waitTime) {
      waitTime--;
      let node = queue.shift();
      if (node) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (queue.every((item) => item === null)) {
      queue = [];
    }
    waitTime = queue.length;
    queue.forEach((n) => {
      if (n === null) result.push(null);
      else {
        result.push(n.val);
      }
    });
  }
  return JSON.stringify(result);
};

let deserialize = function (data) {
  let tree = JSON.parse(data);
  if (tree.length === 0) return null;
  let root = new TreeNode(tree[0]);
  let queue = [root];
  let leftPointer = 1;
  let rightPointer = leftPointer + 1;
  while (leftPointer < tree.length) {
    let node = queue.shift();
    let leftVal = tree[leftPointer];
    if (leftVal !== null) {
      let leftNode = new TreeNode(leftVal);
      queue.push(leftNode);
      node.left = leftNode;
    }
    if (rightPointer < tree.length) {
      let rightVal = tree[rightPointer];
      if (rightVal !== null) {
        let rightNode = new TreeNode(rightVal);
        queue.push(rightNode);
        node.right = rightNode;
      }
    }
    leftPointer += 2;
    rightPointer += 2;
  }
  return root;
};
