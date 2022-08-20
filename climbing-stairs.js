/**
 * @LeetCode - #70 - https://leetcode.com/problems/climbing-stairs/
 * @ProblemDescription
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

let climbStairs = function (n) {
    let memory = new Map();

    let dfs = step => {
        if (memory.has(step)) return memory.get(step);
        if (step === n) return 1;
        if (step > n) return 0;
        let ways = dfs(step + 1) + dfs(step + 2);
        memory.set(step, ways);
        return ways;
    }

    return dfs(0);
};