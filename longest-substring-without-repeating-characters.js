/**
 * @LeetCode - #3 - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

let lengthOfLongestSubstring = function (s) {
    let max = 0;
    let map = new Map();
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            max = Math.max(max, len);
            len = 0;
            i = map.get(s[i]);
            map = new Map();
        } else {
            map.set(s[i], i);
            len++;
        }
    }
    return Math.max(max, len);
};