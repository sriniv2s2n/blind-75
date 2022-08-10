/**
 * @LeetCode - #338 - https://leetcode.com/problems/counting-bits/
 * @ProblemDescription
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 */
let countBits = function (n) {

    let hammingWeight = num => {
        let count = 0;
        while (num !== 0) {
            num = num & (num - 1);
            count++;
        }
        return count;
    }

    let i = 0;
    let result = [];
    while (i <= n) {
        result.push(hammingWeight(i));
        i++;
    }

    return result;
};