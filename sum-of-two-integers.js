/**
 * @LeetCode - #371 - https://leetcode.com/problems/sum-of-two-integers/
 * @ProblemDescription
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 */

let getSum = function (a, b) {
    let xor = a ^ b;
    let carry = (a & b) << 1;
    while (carry !== 0) {
        let temp = xor;
        xor = xor ^ carry;
        carry = (temp & carry) << 1;
    }
    return xor;
};