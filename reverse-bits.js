/**
 * @LeetCode - #190 - https://leetcode.com/problems/reverse-bits/
 * @ProblemDescription
 * Reverse bits of a given 32 bits unsigned integer.
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 */


let reverseBits = function (n) {
    let lastBit;
    let result = 0b0;
    for (let i = 1; i <= 32; i++) {
        lastBit = n & 1;
        result = result | lastBit;
        if (i !== 32) result = result << 1;
        n = n >>> 1;
    }
    return result >>> 0;
};

let reverseBits2 = function (n) {
    let lastBit;
    let result = 0b0;
    for (let i = 1; i <= 32; i++) {
        lastBit = n & 1;
        result = result | lastBit;
        if (i !== 32) result = result << 1;
        n = n >>> 1;
    }
    let temp = new Uint32Array(1);
    temp[0] = result;
    return temp[0];
};