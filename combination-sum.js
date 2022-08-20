/**
 * @LeetCode - #39 - https://leetcode.com/problems/combination-sum/
 */

let combinationSum = function (candidates, target) {

    let result = [];

    let dfs = (id, data) => {
        let sum = data.reduce((accum, curr) => accum + curr, 0);
        if (sum < target) {
            while (id < candidates.length) {
                dfs(id, [...data, candidates[id]]);
                id = id + 1;
            }
        }
        else if (sum === target) {
            result.push(data);
            return
        } else return;
    }

    for (let i = 0; i < candidates.length; i++) {
        dfs(i, [candidates[i]]);
    }

    return result;
};