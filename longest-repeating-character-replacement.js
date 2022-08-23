/**
 * @LeetCode - #424 - https://leetcode.com/problems/longest-repeating-character-replacement/
 * @ProblemDescription
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */

let characterReplacement = function (s, k) {
    let wStart = 0;
    let wEnd = 0;
    let result = 0;
    let freqCount = {};
    let maxCharFreq = 0;
    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        freqCount[s[wEnd]] = (freqCount[s[wEnd]] || 0) + 1;
        maxCharFreq = Math.max(maxCharFreq, freqCount[s[wEnd]]);
        if ((wEnd - wStart + 1) - maxCharFreq > k) {
            freqCount[s[wStart]] -= 1;
            wStart++;
        } else {
            result = Math.max(result, (wEnd - wStart + 1));
        }
    }
    return result;
};