/**
 * @LeetCode - #191 - https://leetcode.com/problems/number-of-1-bits/
 * @ProblemDescription
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 * @OBSERVATION_ONE
 * If (n & (n - 1)) === 0 then 'n' can be expressed as power of 2.
 * That is  n = (2 ^ k)
 * @OBSERVATION_TWO
 * (n & (n - 1)) eliminates the right most '1' bit
 */

let hammingWeight = function (n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++
    }
    return count;
};