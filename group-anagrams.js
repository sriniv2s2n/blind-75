/**
 * @LeetCode - #49 - https://leetcode.com/problems/group-anagrams/
 * @ProblemDescription
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @OBSERVATION - When same text is jumbled to form many variants then sorting the variants will make them look same
 * For Example - 'eat', 'tea', 'eta'; These three anagrams on sorting will look same as 'aet'
 */
let groupAnagrams = function (strs) {
    let key;
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        key = Array.from(strs[i]).sort().join("");
        if (map.has(key)) map.get(key).push(strs[i]);
        else map.set(key, [strs[i]]);
    }
    let result = [];
    for (let val of map.values()) {
        result.push(val);
    }
    return result;
};