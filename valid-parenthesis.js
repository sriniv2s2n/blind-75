/**
 * @LeetCode - #20 - https://leetcode.com/problems/valid-parentheses/
 * @ProblemDescription
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
    * Open brackets must be closed by the same type of brackets.
    * Open brackets must be closed in the correct order.
 */

let isValid = function (s) {
    if (s.length % 2 === 1) return false;

    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) stack.push(map.get(s[i]));
        else {
            if (s[i] === stack.pop()) continue;
            else return false;
        }
    }

    if (stack.length === 0) return true;
    else return false;

};