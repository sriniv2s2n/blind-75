/**
 * @LeetCode - #133 - https://leetcode.com/problems/clone-graph/
 * @ProblemDescription
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 */

let cloneGraph = function (node) {

    if (node === null) return null;

    let isNodeAlreadyCreated = new Map();

    let dfs = node => {
        if (isNodeAlreadyCreated.has(node.val)) return isNodeAlreadyCreated.get(node.val);

        let createNode = new Node(node.val);
        isNodeAlreadyCreated.set(node.val, createNode);

        for (let i = 0; i < node.neighbors.length; i++) {
            createNode.neighbors.push(dfs(node.neighbors[i]));
        }

        return createNode;
    }

    return dfs(node);
};